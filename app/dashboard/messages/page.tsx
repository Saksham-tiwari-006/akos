'use client';

import { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';

interface Message {
  _id: string;
  conversationId: string;
  senderId: string;
  senderName: string;
  senderEmail: string;
  senderType: 'admin' | 'user';
  recipientId: string;
  recipientType: 'admin' | 'user';
  subject?: string;
  message: string;
  read: boolean;
  readAt?: string;
  createdAt: string;
  updatedAt: string;
}

export default function UserMessagesPage() {
  const { isLoaded, user } = useUser();
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [sendingMessage, setSendingMessage] = useState(false);
  const [newMessage, setNewMessage] = useState('');
  const [newSubject, setNewSubject] = useState('');
  const [showCompose, setShowCompose] = useState(false);

  useEffect(() => {
    if (isLoaded && user) {
      fetchMessages();
    }
  }, [isLoaded, user]);

  const fetchMessages = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/messages');
      const result = await response.json();

      if (result.success) {
        setMessages(result.data.messages || []);
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const sendMessage = async () => {
    if (!newMessage.trim()) {
      alert('Please enter a message');
      return;
    }

    try {
      setSendingMessage(true);
      
      // Send to admin (admin ID is typically 'admin')
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          recipientId: 'admin',
          recipientType: 'admin',
          subject: newSubject || undefined,
          message: newMessage,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setNewMessage('');
        setNewSubject('');
        setShowCompose(false);
        fetchMessages();
        alert('Message sent successfully!');
      } else {
        alert(result.message || 'Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Error sending message');
    } finally {
      setSendingMessage(false);
    }
  };

  const markAsRead = async (messageId: string) => {
    try {
      await fetch(`/api/messages/${messageId}`, {
        method: 'PUT',
      });
      fetchMessages();
    } catch (error) {
      console.error('Error marking message as read:', error);
    }
  };

  if (!isLoaded || loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading messages...</p>
        </div>
      </div>
    );
  }

  const unreadCount = messages.filter(m => !m.read && m.recipientId === user?.id).length;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
            <p className="text-gray-600 mt-2">
              Communicate with support
              {unreadCount > 0 && (
                <span className="ml-2 bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                  {unreadCount} unread
                </span>
              )}
            </p>
          </div>
          <button
            onClick={() => setShowCompose(!showCompose)}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            {showCompose ? 'Cancel' : 'New Message'}
          </button>
        </div>

        {/* Compose Message */}
        {showCompose && (
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
            <h2 className="text-lg font-semibold mb-4">New Message to Admin</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject (Optional)
                </label>
                <input
                  type="text"
                  value={newSubject}
                  onChange={(e) => setNewSubject(e.target.value)}
                  placeholder="Message subject"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message here..."
                  rows={6}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <button
                onClick={sendMessage}
                disabled={sendingMessage || !newMessage.trim()}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
              >
                {sendingMessage ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </div>
        )}

        {/* Messages List */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-lg font-semibold mb-4">Your Messages</h2>

          {messages.length === 0 ? (
            <div className="text-center py-12">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                />
              </svg>
              <h3 className="mt-2 text-sm font-medium text-gray-900">No messages</h3>
              <p className="mt-1 text-sm text-gray-500">
                Start a conversation by clicking "New Message"
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message._id}
                  className={`p-4 rounded-lg border ${
                    !message.read && message.recipientId === user?.id
                      ? 'bg-blue-50 border-blue-200'
                      : 'bg-gray-50 border-gray-200'
                  }`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <p className="font-medium text-sm">
                        {message.senderType === 'admin' ? (
                          <span className="text-blue-600">Admin Support</span>
                        ) : (
                          'You'
                        )}
                      </p>
                      {message.senderType === 'admin' && (
                        <p className="text-xs text-gray-500">{message.senderEmail}</p>
                      )}
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">
                        {new Date(message.createdAt).toLocaleDateString()} at{' '}
                        {new Date(message.createdAt).toLocaleTimeString()}
                      </p>
                      {!message.read && message.recipientId === user?.id && (
                        <button
                          onClick={() => markAsRead(message._id)}
                          className="text-xs text-blue-600 hover:underline mt-1"
                        >
                          Mark as read
                        </button>
                      )}
                    </div>
                  </div>

                  {message.subject && (
                    <p className="text-sm font-medium text-gray-900 mb-2">
                      Subject: {message.subject}
                    </p>
                  )}

                  <p className="text-sm text-gray-700 whitespace-pre-wrap">
                    {message.message}
                  </p>

                  {message.read && message.readAt && message.recipientId === user?.id && (
                    <p className="text-xs text-gray-400 mt-2">
                      Read on {new Date(message.readAt).toLocaleDateString()}
                    </p>
                  )}

                  {message.senderType === 'user' && message.read && (
                    <div className="mt-2 flex items-center text-xs text-green-600">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Seen by admin
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Info Box */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex">
            <svg
              className="h-5 w-5 text-blue-600 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <p className="text-sm font-medium text-blue-900">Message Support</p>
              <p className="text-sm text-blue-700 mt-1">
                Use this messaging system to communicate directly with our admin team. 
                We typically respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
