'use client';

import { useState, useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import {
  Users,
  MessageSquare,
  FileText,
  LayoutDashboard,
  Search,
  Trash2,
  Edit,
  CheckCircle,
  Clock,
  Mail,
  Phone,
  Calendar,
  TrendingUp,
  Briefcase,
  AlertCircle,
  RefreshCw,
  Star,
  XCircle,
  Eye,
  Download,
  Filter,
  X,
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
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

interface Contact {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  service?: string;
  subject?: string;
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
  isVerified: boolean;
  createdAt: string;
}

interface DashboardStats {
  totalConsultations: number;
  totalContacts: number;
  totalReviews: number;
  pendingConsultations: number;
  pendingReviews: number;
  newContacts: number;
}

export default function AdminDashboard() {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('consultations');
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const [stats, setStats] = useState<DashboardStats>({
    totalConsultations: 0,
    totalContacts: 0,
    totalReviews: 0,
    pendingConsultations: 0,
    pendingReviews: 0,
    newContacts: 0,
  });

  const [consultations, setConsultations] = useState<Consultation[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (isLoaded && !user) {
      router.push('/login');
      return;
    }

    if (user) {
      const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL || 'admin@akos.com';
      const userEmail = user.emailAddresses[0]?.emailAddress;

      if (userEmail !== adminEmail) {
        router.push('/dashboard');
        return;
      }

      fetchDashboardData();
    }
  }, [isLoaded, user, router]);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      await Promise.all([
        fetchConsultations(),
        fetchContacts(),
        fetchReviews(),
      ]);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchConsultations = async () => {
    try {
      const params = new URLSearchParams();
      if (statusFilter !== 'all') params.append('status', statusFilter);
      if (searchQuery) params.append('search', searchQuery);

      const response = await fetch(`/api/admin/consultations?${params}`);
      const result = await response.json();

      if (result.success) {
        setConsultations(result.data);
        updateStats();
      }
    } catch (error) {
      console.error('Error fetching consultations:', error);
    }
  };

  const fetchContacts = async () => {
    try {
      const params = new URLSearchParams();
      if (statusFilter !== 'all') params.append('status', statusFilter);
      if (searchQuery) params.append('search', searchQuery);

      const response = await fetch(`/api/admin/contacts?${params}`);
      const result = await response.json();

      if (result.success) {
        setContacts(result.data);
        updateStats();
      }
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  const fetchReviews = async () => {
    try {
      const params = new URLSearchParams();
      if (statusFilter !== 'all') params.append('status', statusFilter);
      if (searchQuery) params.append('search', searchQuery);

      const response = await fetch(`/api/admin/reviews?${params}`);
      const result = await response.json();

      if (result.success) {
        setReviews(result.data);
        updateStats();
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
    }
  };

  const updateStats = () => {
    setStats({
      totalConsultations: consultations.length,
      totalContacts: contacts.length,
      totalReviews: reviews.length,
      pendingConsultations: consultations.filter(c => c.status === 'pending').length,
      pendingReviews: reviews.filter(r => r.status === 'pending').length,
      newContacts: contacts.filter(c => c.status === 'new').length,
    });
  };

  const updateConsultationStatus = async (id: string, status: string, priority?: string, notes?: string) => {
    try {
      const response = await fetch(`/api/admin/consultations/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status, priority, notes }),
      });

      const result = await response.json();
      if (result.success) {
        await fetchConsultations();
        setShowModal(false);
        setSelectedItem(null);
      }
    } catch (error) {
      console.error('Error updating consultation:', error);
    }
  };

  const updateContactStatus = async (id: string, status: string, responseMessage?: string) => {
    try {
      const response = await fetch(`/api/admin/contacts/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status, responseMessage }),
      });

      const result = await response.json();
      if (result.success) {
        await fetchContacts();
        setShowModal(false);
        setSelectedItem(null);
      }
    } catch (error) {
      console.error('Error updating contact:', error);
    }
  };

  const updateReviewStatus = async (id: string, status: string, isVerified?: boolean) => {
    try {
      const response = await fetch(`/api/admin/reviews/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status, isVerified }),
      });

      const result = await response.json();
      if (result.success) {
        await fetchReviews();
        setShowModal(false);
        setSelectedItem(null);
      }
    } catch (error) {
      console.error('Error updating review:', error);
    }
  };

  const deleteItem = async (type: 'consultation' | 'contact' | 'review', id: string) => {
    if (!confirm('Are you sure you want to delete this item?')) return;

    try {
      const endpoints = {
        consultation: `/api/admin/consultations/${id}`,
        contact: `/api/admin/contacts/${id}`,
        review: `/api/admin/reviews/${id}`,
      };

      const response = await fetch(endpoints[type], { method: 'DELETE' });
      const result = await response.json();

      if (result.success) {
        if (type === 'consultation') await fetchConsultations();
        if (type === 'contact') await fetchContacts();
        if (type === 'review') await fetchReviews();
      }
    } catch (error) {
      console.error(`Error deleting ${type}:`, error);
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
    };

    const badge = badges[status] || badges.pending;
    const Icon = badge.icon;

    return (
      <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${badge.bg} ${badge.text}`}>
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
          <p className="text-gray-600">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Dashboard</h1>
          <p className="text-gray-600 mt-2">Manage all submissions and user requests</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Consultations</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stats.totalConsultations}</p>
                <p className="text-xs text-yellow-600 mt-1">{stats.pendingConsultations} pending</p>
              </div>
              <Briefcase className="w-12 h-12 text-blue-600 opacity-20" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Contact Messages</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stats.totalContacts}</p>
                <p className="text-xs text-purple-600 mt-1">{stats.newContacts} new</p>
              </div>
              <MessageSquare className="w-12 h-12 text-green-600 opacity-20" />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Reviews</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{stats.totalReviews}</p>
                <p className="text-xs text-yellow-600 mt-1">{stats.pendingReviews} pending approval</p>
              </div>
              <Star className="w-12 h-12 text-yellow-600 opacity-20" />
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6 border border-gray-200">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search by name, email, or service..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
                <option value="new">New</option>
                <option value="approved">Approved</option>
                <option value="rejected">Rejected</option>
              </select>
              <button
                onClick={fetchDashboardData}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 flex items-center gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                Refresh
              </button>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="border-b border-gray-200">
            <nav className="flex -mb-px overflow-x-auto">
              {[
                { id: 'consultations', label: 'Consultations', icon: Briefcase, count: stats.pendingConsultations },
                { id: 'contacts', label: 'Contacts', icon: MessageSquare, count: stats.newContacts },
                { id: 'reviews', label: 'Reviews', icon: Star, count: stats.pendingReviews },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-6 py-4 text-sm font-medium border-b-2 whitespace-nowrap relative ${activeTab === tab.id
                        ? 'border-blue-600 text-blue-600'
                        : 'border-transparent text-gray-600 hover:text-gray-900 hover:border-gray-300'
                      }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
                    {tab.count && tab.count > 0 && (
                      <span className="ml-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                        {tab.count}
                      </span>
                    )}
                  </button>
                );
              })}
            </nav>
          </div>

          <div className="p-6">
            {/* Consultations Tab */}
            {activeTab === 'consultations' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Consultations ({consultations.length})
                  </h2>
                </div>

                {consultations.length === 0 ? (
                  <div className="text-center py-12">
                    <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No Consultations</h3>
                    <p className="text-gray-600">No consultation requests found.</p>
                  </div>
                ) : (
                  consultations.map((consultation) => (
                    <div
                      key={consultation._id}
                      className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="text-lg font-semibold text-gray-900">{consultation.name}</h3>
                              <p className="text-blue-600 font-medium mt-1">{consultation.service}</p>
                              <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                                <span className="flex items-center gap-1">
                                  <Mail className="w-4 h-4" />
                                  {consultation.email}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Calendar className="w-4 h-4" />
                                  {formatDate(consultation.createdAt)}
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
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4 bg-gray-50 p-3 rounded-lg">{consultation.message}</p>

                      {consultation.documents && consultation.documents.length > 0 && (
                        <div className="mb-4">
                          <p className="text-sm font-medium text-gray-700 mb-2">Documents:</p>
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

                      {consultation.notes && (
                        <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                          <p className="text-sm font-medium text-green-900 mb-1">Notes:</p>
                          <p className="text-sm text-green-800">{consultation.notes}</p>
                        </div>
                      )}

                      <div className="flex gap-2 pt-4 border-t border-gray-200">
                        <select
                          value={consultation.status}
                          onChange={(e) => updateConsultationStatus(consultation._id, e.target.value, consultation.priority)}
                          className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="pending">Pending</option>
                          <option value="in-progress">In Progress</option>
                          <option value="completed">Completed</option>
                          <option value="cancelled">Cancelled</option>
                        </select>

                        <select
                          value={consultation.priority}
                          onChange={(e) => updateConsultationStatus(consultation._id, consultation.status, e.target.value)}
                          className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="low">Low Priority</option>
                          <option value="medium">Medium Priority</option>
                          <option value="high">High Priority</option>
                        </select>

                        <button
                          onClick={() => deleteItem('consultation', consultation._id)}
                          className="ml-auto px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm flex items-center gap-2"
                        >
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

            {/* Contacts Tab */}
            {activeTab === 'contacts' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Contact Messages ({contacts.length})
                  </h2>
                </div>

                {contacts.length === 0 ? (
                  <div className="text-center py-12">
                    <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No Messages</h3>
                    <p className="text-gray-600">No contact messages found.</p>
                  </div>
                ) : (
                  contacts.map((contact) => (
                    <div
                      key={contact._id}
                      className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{contact.name}</h3>
                          {contact.service && (
                            <p className="text-blue-600 font-medium mt-1">Service: {contact.service}</p>
                          )}
                          {contact.subject && (
                            <p className="text-gray-700 mt-1">{contact.subject}</p>
                          )}
                          <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                            <span className="flex items-center gap-1">
                              <Mail className="w-4 h-4" />
                              {contact.email}
                            </span>
                            {contact.phone && (
                              <span className="flex items-center gap-1">
                                <Phone className="w-4 h-4" />
                                {contact.phone}
                              </span>
                            )}
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {formatDate(contact.createdAt)}
                            </span>
                          </div>
                        </div>
                        {getStatusBadge(contact.status)}
                      </div>

                      <p className="text-gray-700 mb-4 bg-gray-50 p-3 rounded-lg">{contact.message}</p>

                      {contact.responseMessage && (
                        <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                          <p className="text-sm font-medium text-green-900 mb-2">Your Response:</p>
                          <p className="text-sm text-green-800">{contact.responseMessage}</p>
                        </div>
                      )}

                      <div className="flex gap-2 pt-4 border-t border-gray-200">
                        <select
                          value={contact.status}
                          onChange={(e) => updateContactStatus(contact._id, e.target.value)}
                          className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="new">New</option>
                          <option value="read">Read</option>
                          <option value="replied">Replied</option>
                          <option value="archived">Archived</option>
                        </select>

                        <button
                          onClick={() => deleteItem('contact', contact._id)}
                          className="ml-auto px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm flex items-center gap-2"
                        >
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}

            {/* Reviews Tab */}
            {activeTab === 'reviews' && (
              <div className="space-y-4">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-gray-900">
                    Reviews ({reviews.length})
                  </h2>
                </div>

                {reviews.length === 0 ? (
                  <div className="text-center py-12">
                    <Star className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                    <h3 className="text-lg font-medium text-gray-900 mb-2">No Reviews</h3>
                    <p className="text-gray-600">No reviews found.</p>
                  </div>
                ) : (
                  reviews.map((review) => (
                    <div
                      key={review._id}
                      className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-lg font-semibold text-gray-900">{review.name}</h3>
                          <div className="flex items-center gap-2 mt-2">
                            <div className="flex">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  className={`w-5 h-5 ${i < review.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                                    }`}
                                />
                              ))}
                            </div>
                            <span className="text-sm text-gray-600">({review.rating}/5)</span>
                          </div>
                          <p className="text-sm text-gray-600 mt-2">{review.service}</p>
                          <p className="text-xs text-gray-500 mt-1">{formatDate(review.createdAt)}</p>
                        </div>
                        <div className="flex flex-col items-end gap-2">
                          {getStatusBadge(review.status)}
                          {review.isVerified && (
                            <span className="text-xs px-2 py-1 rounded bg-blue-100 text-blue-800">
                              Verified
                            </span>
                          )}
                        </div>
                      </div>

                      <p className="text-gray-700 mb-4 bg-gray-50 p-3 rounded-lg">{review.message}</p>

                      <div className="flex gap-2 pt-4 border-t border-gray-200">
                        {review.status === 'pending' && (
                          <>
                            <button
                              onClick={() => updateReviewStatus(review._id, 'approved', true)}
                              className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 text-sm flex items-center gap-2"
                            >
                              <CheckCircle className="w-4 h-4" />
                              Approve
                            </button>
                            <button
                              onClick={() => updateReviewStatus(review._id, 'rejected')}
                              className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 text-sm flex items-center gap-2"
                            >
                              <XCircle className="w-4 h-4" />
                              Reject
                            </button>
                          </>
                        )}
                        {review.status === 'approved' && !review.isVerified && (
                          <button
                            onClick={() => updateReviewStatus(review._id, 'approved', true)}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm flex items-center gap-2"
                          >
                            <CheckCircle className="w-4 h-4" />
                            Mark as Verified
                          </button>
                        )}
                        <button
                          onClick={() => deleteItem('review', review._id)}
                          className="ml-auto px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 text-sm flex items-center gap-2"
                        >
                          <Trash2 className="w-4 h-4" />
                          Delete
                        </button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
