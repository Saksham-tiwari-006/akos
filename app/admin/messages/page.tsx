'use client';

import { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

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

interface ConversationStat {
  _id: string;
  totalMessages: number;
  unreadCount: number;
  lastMessage: string;
}

export default function AdminMessagesPage() {
  const { isLoaded, user } = useUser();
  const router = useRouter();
  const [messages, setMessages] = useState<Message[]>([]);
  const [conversationStats, setConversationStats] = useState<ConversationStat[]>([]);
  const [selectedConversation, setSelectedConversation] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [sendingMessage, setSendingMessage] = useState(false);
  const [replyMessage, setReplyMessage] = useState('');
  const [replySubject, setReplySubject] = useState('');
  const [selectedUserId, setSelectedUserId] = useState<string>('');
  const [filter, setFilter] = useState<'all' | 'unread' | 'sent' | 'received'>('all');

  // Check if user is admin
  useEffect(() => {
    if (isLoaded && !user) {
      router.push('/login');
      return;
    }

    if (isLoaded && user) {
      const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
      const userEmail = user.emailAddresses[0]?.emailAddress;
      
      if (userEmail !== adminEmail) {
        router.push('/dashboard');
      }
    }
  }, [isLoaded, user, router]);

  useEffect(() => {
    if (isLoaded && user) {
      fetchMessages();
    }
  }, [isLoaded, user, filter]);

  const fetchMessages = async () => {
    try {
      setLoading(true);
      let url = '/api/admin/messages?limit=100';
      
      if (filter === 'unread') {
        url += '&unreadOnly=true';
      } else if (filter === 'sent') {
        url += '&status=sent';
      } else if (filter === 'received') {
        url += '&status=received';
      }

      const response = await fetch(url);
      const result = await response.json();

      if (result.success) {
        setMessages(result.data.messages || []);
        setConversationStats(result.data.conversationStats || []);
      }
    } catch (error) {
      console.error('Error fetching messages:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchConversationMessages = async (conversationId: string) => {
    try {
      const response = await fetch(`/api/messages?conversationId=${conversationId}`);
      const result = await response.json();

      if (result.success) {
        setMessages(result.data.messages || []);
        setSelectedConversation(conversationId);
      }
    } catch (error) {
      console.error('Error fetching conversation:', error);
    }
  };

  const sendMessage = async () => {
    if (!replyMessage.trim() || !selectedUserId) {
      alert('Please enter a message and select a user');
      return;
    }

    try {
      setSendingMessage(true);
      
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          recipientId: selectedUserId,
          recipientType: 'user',
          subject: replySubject || undefined,
          message: replyMessage,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setReplyMessage('');
        setReplySubject('');
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

  const getUniqueSenders = () => {
    const senders = new Map();
    messages.forEach(msg => {
      if (msg.senderType === 'user' && !senders.has(msg.senderId)) {
        senders.set(msg.senderId, {
          id: msg.senderId,
          name: msg.senderName,
          email: msg.senderEmail,
        });
      }
    });
    return Array.from(senders.values());
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

  const filteredMessages = selectedConversation
    ? messages.filter(m => m.conversationId === selectedConversation)
    : messages;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
          <p className="text-gray-600 mt-2">Manage user communications</p>
        </div>

        {/* Filter Tabs */}
        <div className="bg-white rounded-lg shadow-sm mb-6">
          <div className="flex border-b">
            <button
              onClick={() => setFilter('all')}
              className={`px-6 py-3 font-medium ${
                filter === 'all'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              All Messages
            </button>
            <button
              onClick={() => setFilter('unread')}
              className={`px-6 py-3 font-medium ${
                filter === 'unread'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Unread
            </button>
            <button
              onClick={() => setFilter('sent')}
              className={`px-6 py-3 font-medium ${
                filter === 'sent'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              Sent
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Conversations List */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-4">
              <h2 className="text-lg font-semibold mb-4">Conversations</h2>
              
              {conversationStats.length === 0 ? (
                <p className="text-gray-500 text-sm">No conversations yet</p>
              ) : (
                <div className="space-y-2">
                  {conversationStats.map((stat) => (
                    <button
                      key={stat._id}
                      onClick={() => fetchConversationMessages(stat._id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        selectedConversation === stat._id
                          ? 'bg-blue-50 border border-blue-200'
                          : 'hover:bg-gray-50 border border-gray-200'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div className="flex-1">
                          <p className="font-medium text-sm">{stat._id}</p>
                          <p className="text-xs text-gray-500 mt-1">
                            {stat.totalMessages} message{stat.totalMessages !== 1 ? 's' : ''}
                          </p>
                        </div>
                        {stat.unreadCount > 0 && (
                          <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full">
                            {stat.unreadCount}
                          </span>
                        )}
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Messages & Compose */}
          <div className="lg:col-span-2 space-y-6">
            {/* Send New Message */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">Send Message</h2>
              
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Recipient
                  </label>
                  <select
                    value={selectedUserId}
                    onChange={(e) => setSelectedUserId(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a user</option>
                    {getUniqueSenders().map((sender) => (
                      <option key={sender.id} value={sender.id}>
                        {sender.name} ({sender.email})
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject (Optional)
                  </label>
                  <input
                    type="text"
                    value={replySubject}
                    onChange={(e) => setReplySubject(e.target.value)}
                    placeholder="Message subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    value={replyMessage}
                    onChange={(e) => setReplyMessage(e.target.value)}
                    placeholder="Type your message here..."
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>

                <button
                  onClick={sendMessage}
                  disabled={sendingMessage || !replyMessage.trim() || !selectedUserId}
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors"
                >
                  {sendingMessage ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </div>

            {/* Messages List */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-4">
                {selectedConversation ? 'Conversation Messages' : 'Recent Messages'}
              </h2>

              {filteredMessages.length === 0 ? (
                <p className="text-gray-500 text-center py-8">No messages to display</p>
              ) : (
                <div className="space-y-4">
                  {filteredMessages.map((message) => (
                    <div
                      key={message._id}
                      className={`p-4 rounded-lg border ${
                        !message.read && message.recipientType === 'admin'
                          ? 'bg-blue-50 border-blue-200'
                          : 'bg-gray-50 border-gray-200'
                      }`}
                    >
                      <div className="flex justify-between items-start mb-2">
                        <div>
                          <p className="font-medium text-sm">
                            {message.senderType === 'admin' ? 'You' : message.senderName}
                          </p>
                          <p className="text-xs text-gray-500">{message.senderEmail}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-gray-500">
                            {new Date(message.createdAt).toLocaleDateString()} at{' '}
                            {new Date(message.createdAt).toLocaleTimeString()}
                          </p>
                          {!message.read && message.recipientType === 'admin' && (
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

                      {message.read && message.readAt && (
                        <p className="text-xs text-gray-400 mt-2">
                          Read on {new Date(message.readAt).toLocaleDateString()}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
