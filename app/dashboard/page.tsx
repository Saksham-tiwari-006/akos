'use client';

import { useEffect, useState } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import {
  FileText,
  MessageSquare,
  Star,
  Briefcase,
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle,
  Calendar,
  Mail,
  Phone,
  Download,
  RefreshCw,
  TrendingUp,
  Package,
} from 'lucide-react';

interface Consultation {
  _id: string;
  service: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  status: 'pending' | 'in-progress' | 'completed' | 'cancelled';
  priority: 'low' | 'medium' | 'high';
  documents: { url: string; name: string; size: number }[];
  createdAt: string;
  updatedAt: string;
}

interface Contact {
  _id: string;
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  status: 'new' | 'read' | 'replied' | 'archived';
  responseMessage?: string;
  createdAt: string;
}

interface Review {
  _id: string;
  name: string;
  email: string;
  rating: number;
  message: string;
  service: string;
  status: 'pending' | 'approved' | 'rejected';
  createdAt: string;
}

interface ServiceInquiry {
  _id: string;
  service: string;
  name: string;
  email: string;
  phone: string;
  companyName?: string;
  message: string;
  status: 'new' | 'contacted' | 'converted' | 'closed';
  createdAt: string;
}

interface Stats {
  totalConsultations: number;
  totalContacts: number;
  totalReviews: number;
  totalInquiries: number;
  pendingConsultations: number;
  approvedReviews: number;
}

export default function UserDashboard() {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');
  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [inquiries, setInquiries] = useState<ServiceInquiry[]>([]);
  const [stats, setStats] = useState<Stats>({
    totalConsultations: 0,
    totalContacts: 0,
    totalReviews: 0,
    totalInquiries: 0,
    pendingConsultations: 0,
    approvedReviews: 0,
  });

  useEffect(() => {
    if (isLoaded && !user) {
      router.push('/login');
      return;
    }

    // Redirect admin users to admin dashboard
    if (isLoaded && user) {
      const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL || 'ronakkumarsingh23@lpu.in';
      const userEmail = user.emailAddresses[0]?.emailAddress;
      
      if (userEmail === adminEmail) {
        router.push('/admin');
        return;
      }
    }
  }, [isLoaded, user, router]);

  useEffect(() => {
    if (user) {
      fetchSubmissions();
    }
  }, [user]);

  const fetchSubmissions = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/user/submissions');
      const result = await response.json();

      if (result.success) {
        setConsultations(result.data.consultations);
        setContacts(result.data.contacts);
        setReviews(result.data.reviews);
        setInquiries(result.data.inquiries);
        setStats(result.data.stats);
      }
    } catch (error) {
      console.error('Error fetching submissions:', error);
    } finally {
      setLoading(false);
    }
  };

  const getStatusBadge = (status: string) => {
    const badges: Record<string, { bg: string; text: string; icon: any }> = {
      pending: { bg: 'bg-yellow-100', text: 'text-yellow-800', icon: Clock },
      'in-progress': { bg: 'bg-blue-100', text: 'text-blue-800', icon: RefreshCw },
      completed: { bg: 'bg-green-100', text: 'text-green-800', icon: CheckCircle },
      cancelled: { bg: 'bg-red-100', text: 'text-red-800', icon: XCircle },
      new: { bg: 'bg-purple-100', text: 'text-purple-800', icon: AlertCircle },
      read: { bg: 'bg-blue-100', text: 'text-blue-800', icon: Mail },
      replied: { bg: 'bg-green-100', text: 'text-green-800', icon: CheckCircle },
      approved: { bg: 'bg-green-100', text: 'text-green-800', icon: CheckCircle },
      rejected: { bg: 'bg-red-100', text: 'text-red-800', icon: XCircle },
      contacted: { bg: 'bg-blue-100', text: 'text-blue-800', icon: Phone },
      converted: { bg: 'bg-green-100', text: 'text-green-800', icon: TrendingUp },
      closed: { bg: 'bg-gray-100', text: 'text-gray-800', icon: Package },
    };

    const badge = badges[status] || badges.pending;
    const Icon = badge.icon;

    return (
      <span
        className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${badge.bg} ${badge.text}`}
      >
        <Icon className="w-3 h-3" />
        {status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
      </span>
    );
  };

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  if (!isLoaded || loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <RefreshCw className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Welcome back, {user?.firstName || 'User'}! Track all your submissions and their progress.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Consultations</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stats.totalConsultations}</p>
                <p className="text-xs text-yellow-600 mt-1">
                  {stats.pendingConsultations} pending
                </p>
              </div>
              <Briefcase className="w-12 h-12 text-blue-600 opacity-20" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Contact Messages</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stats.totalContacts}</p>
              </div>
              <MessageSquare className="w-12 h-12 text-green-600 opacity-20" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Reviews</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stats.totalReviews}</p>
                <p className="text-xs text-green-600 mt-1">
                  {stats.approvedReviews} approved
                </p>
              </div>
              <Star className="w-12 h-12 text-yellow-600 opacity-20" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Service Inquiries</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stats.totalInquiries}</p>
              </div>
              <FileText className="w-12 h-12 text-purple-600 opacity-20" />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-6">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px overflow-x-auto">
              {[
                { id: 'overview', label: 'Overview', icon: TrendingUp },
                { id: 'consultations', label: 'Consultations', icon: Briefcase },
                { id: 'contacts', label: 'Contacts', icon: MessageSquare },
                { id: 'reviews', label: 'Reviews', icon: Star },
                { id: 'inquiries', label: 'Inquiries', icon: FileText },
                { id: 'messages', label: 'Messages', icon: Mail },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 whitespace-nowrap ${activeTab === tab.id
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                      }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="p-6">
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-gray-900">Recent Activity</h2>

                {/* Recent Consultations */}
                {consultations.length > 0 && (
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-3">Latest Consultations</h3>
                    <div className="space-y-3">
                      {consultations.slice(0, 3).map((consultation) => (
                        <div
                          key={consultation._id}
                          className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                        >
                          <div>
                            <p className="font-medium text-gray-900">{consultation.service}</p>
                            <p className="text-sm text-gray-600">{formatDate(consultation.createdAt)}</p>
                          </div>
                          {getStatusBadge(consultation.status)}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* No Activity */}
                {consultations.length === 0 && contacts.length === 0 && reviews.length === 0 && (
                  <div className="text-center py-12">
                    <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No Activity Yet</h3>
                    <p className="text-gray-600">Start by submitting a consultation request or contacting us.</p>
                  </div>
                )}
              </div>
            )}

            {/* Consultations Tab */}
            {activeTab === 'consultations' && (
              <div className="space-y-4">
                {consultations.length === 0 ? (
                  <div className="text-center py-12">
                    <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No Consultations</h3>
                    <p className="text-gray-600">You haven't submitted any consultation requests yet.</p>
                  </div>
                ) : (
                  consultations.map((consultation) => (
                    <div
                      key={consultation._id}
                      className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{consultation.service}</h3>
                          <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {formatDate(consultation.createdAt)}
                            </span>
                            <span className="flex items-center gap-1">
                              <Mail className="w-4 h-4" />
                              {consultation.email}
                            </span>
                          </div>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          {getStatusBadge(consultation.status)}
                          <span className={`text-xs px-2 py-1 rounded ${consultation.priority === 'high' ? 'bg-red-100 text-red-800' :
                              consultation.priority === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                                'bg-gray-100 text-gray-800'
                            }`}>
                            {consultation.priority} priority
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4">{consultation.message}</p>

                      {consultation.documents && consultation.documents.length > 0 && (
                        <div className="mt-4">
                          <p className="text-sm font-medium text-gray-700 mb-2">Attached Documents:</p>
                          <div className="flex flex-wrap gap-2">
                            {consultation.documents.map((doc, idx) => (
                              <a
                                key={idx}
                                href={doc.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-3 py-2 bg-blue-50 text-blue-700 rounded-lg text-sm hover:bg-blue-100"
                              >
                                <Download className="w-4 h-4" />
                                {doc.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            )}

            {/* Contacts Tab */}
            {activeTab === 'contacts' && (
              <div className="space-y-4">
                {contacts.length === 0 ? (
                  <div className="text-center py-12">
                    <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No Messages</h3>
                    <p className="text-gray-600">You haven't sent any contact messages yet.</p>
                  </div>
                ) : (
                  contacts.map((contact) => (
                    <div
                      key={contact._id}
                      className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{contact.subject}</h3>
                          <p className="text-sm text-gray-600 mt-1">
                            {formatDate(contact.createdAt)}
                          </p>
                        </div>
                        {getStatusBadge(contact.status)}
                      </div>

                      <p className="text-gray-700 mb-4">{contact.message}</p>

                      {contact.responseMessage && (
                        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                          <p className="text-sm font-medium text-green-900 mb-2">Admin Response:</p>
                          <p className="text-sm text-green-800">{contact.responseMessage}</p>
                        </div>
                      )}
                    </div>
                  ))
                )}
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div className="space-y-4">
                {reviews.length === 0 ? (
                  <div className="text-center py-12">
                    <Star className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No Reviews</h3>
                    <p className="text-gray-600">You haven't submitted any reviews yet.</p>
                  </div>
                ) : (
                  reviews.map((review) => (
                    <div
                      key={review._id}
                      className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-5 h-5 ${i < review.rating
                                      ? 'text-yellow-400 fill-yellow-400'
                                      : 'text-gray-300'
                                    }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-600">({review.rating}/5)</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-2">{review.service}</p>
                          <p className="text-xs text-gray-500 mt-1">{formatDate(review.createdAt)}</p>
                        </div>
                        {getStatusBadge(review.status)}
                      </div>

                      <p className="text-gray-700">{review.message}</p>

                      {review.status === 'pending' && (
                        <p className="text-sm text-yellow-700 bg-yellow-50 p-3 rounded-lg mt-4">
                          Your review is pending approval and will be visible once approved by our team.
                        </p>
                      )}
                    </div>
                  ))
                )}
              </div>
            )}

            {/* Inquiries Tab */}
            {activeTab === 'inquiries' && (
              <div className="space-y-4">
                {inquiries.length === 0 ? (
                  <div className="text-center py-12">
                    <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No Inquiries</h3>
                    <p className="text-gray-600">You haven't submitted any service inquiries yet.</p>
                  </div>
                ) : (
                  inquiries.map((inquiry) => (
                    <div
                      key={inquiry._id}
                      className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{inquiry.service}</h3>
                          {inquiry.companyName && (
                            <p className="text-sm text-gray-600 mt-1">Company: {inquiry.companyName}</p>
                          )}
                          <p className="text-xs text-gray-500 mt-1">{formatDate(inquiry.createdAt)}</p>
                        </div>
                        {getStatusBadge(inquiry.status)}
                      </div>

                      <p className="text-gray-700">{inquiry.message}</p>
                    </div>
                  ))
                )}
              </div>
            )}

            {/* Messages Tab */}
            {activeTab === 'messages' && (
              <div className="p-6">
                <div className="text-center py-12">
                  <Mail className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Direct Messages
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Communicate directly with our support team
                  </p>
                  <a
                    href="/dashboard/messages"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    Go to Messages
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
