'use client';

import { useState, useEffect } from 'react';
import { 
  Users, MessageSquare, FileText, Settings, LayoutDashboard, 
  Search, Filter, Download, Send, Eye, Trash2, Edit, Plus,
  ChevronDown, Bell, LogOut, Menu, X, CheckCircle, Clock,
  Mail, Phone, Calendar, TrendingUp, DollarSign, Briefcase,
  AlertCircle, MoreVertical, Upload, Save, ArrowLeft
} from 'lucide-react';

// Types
interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  serviceType: string;
  status: 'pending' | 'in-progress' | 'completed';
  date: string;
  message: string;
  documents: { name: string; url: string; size: string }[];
}

interface Service {
  id: string;
  name: string;
  category: string;
  description: string;
  duration: string;
  status: 'active' | 'inactive';
}

interface Message {
  id: string;
  userId: string;
  userName: string;
  content: string;
  date: string;
  type: 'incoming' | 'outgoing';
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock data - In production, this would come from your database
  const [users, setUsers] = useState<User[]>([
    {
      id: '1',
      name: 'Rahul Sharma',
      email: 'rahul@example.com',
      phone: '+91 9876543210',
      serviceType: 'Company Registration',
      status: 'pending',
      date: '2025-12-01',
      message: 'I want to register a private limited company.',
      documents: [
        { name: 'Aadhar_Card.pdf', url: '#', size: '2.5 MB' },
        { name: 'PAN_Card.pdf', url: '#', size: '1.2 MB' }
      ]
    },
    {
      id: '2',
      name: 'Priya Patel',
      email: 'priya@example.com',
      phone: '+91 9876543211',
      serviceType: 'GST Registration',
      status: 'in-progress',
      date: '2025-12-02',
      message: 'Need GST registration for my new business.',
      documents: [
        { name: 'Business_Proof.pdf', url: '#', size: '3.1 MB' }
      ]
    },
    {
      id: '3',
      name: 'Amit Kumar',
      email: 'amit@example.com',
      phone: '+91 9876543212',
      serviceType: 'Income Tax Return',
      status: 'completed',
      date: '2025-11-28',
      message: 'Filing ITR for FY 2024-25.',
      documents: [
        { name: 'Form_16.pdf', url: '#', size: '1.8 MB' },
        { name: 'Bank_Statement.pdf', url: '#', size: '4.2 MB' }
      ]
    },
    {
      id: '4',
      name: 'Sneha Gupta',
      email: 'sneha@example.com',
      phone: '+91 9876543213',
      serviceType: 'Trademark Registration',
      status: 'pending',
      date: '2025-12-03',
      message: 'Want to register trademark for my brand.',
      documents: []
    },
    {
      id: '5',
      name: 'Vikram Singh',
      email: 'vikram@example.com',
      phone: '+91 9876543214',
      serviceType: 'TDS Return Filing',
      status: 'in-progress',
      date: '2025-12-01',
      message: 'Need help with quarterly TDS return.',
      documents: [
        { name: 'TDS_Challan.pdf', url: '#', size: '0.8 MB' }
      ]
    }
  ]);

  const [services, setServices] = useState<Service[]>([
    { id: '1', name: 'Private Limited Company Registration', category: 'Registrations', description: 'Complete company incorporation with MCA', duration: '10-15 days', status: 'active' },
    { id: '2', name: 'LLP Registration', category: 'Registrations', description: 'Limited Liability Partnership registration', duration: '7-10 days', status: 'active' },
    { id: '3', name: 'GST Registration', category: 'Taxation', description: 'Goods and Services Tax registration', duration: '3-5 days', status: 'active' },
    { id: '4', name: 'Income Tax Return Filing', category: 'Taxation', description: 'ITR filing for individuals and businesses', duration: '1-2 days', status: 'active' },
    { id: '5', name: 'Trademark Registration', category: 'IPR', description: 'Brand and logo trademark protection', duration: '6-8 months', status: 'active' },
    { id: '6', name: 'TDS Return Filing', category: 'Taxation', description: 'Quarterly TDS return filing', duration: '1-2 days', status: 'active' },
    { id: '7', name: 'PF Return Filing', category: 'Compliance', description: 'Monthly EPF return filing', duration: '1 day', status: 'active' },
    { id: '8', name: 'Virtual CFO Services', category: 'CA Services', description: 'Outsourced CFO services', duration: 'Ongoing', status: 'active' },
  ]);

  const [messages, setMessages] = useState<Message[]>([
    { id: '1', userId: '1', userName: 'Rahul Sharma', content: 'When can I expect my company registration?', date: '2025-12-03 10:30', type: 'incoming' },
    { id: '2', userId: '1', userName: 'Admin', content: 'Your application is being processed. Expected completion in 5 days.', date: '2025-12-03 11:00', type: 'outgoing' },
    { id: '3', userId: '2', userName: 'Priya Patel', content: 'Please share the GST certificate once ready.', date: '2025-12-02 14:20', type: 'incoming' },
  ]);

  const stats = {
    totalUsers: users.length,
    pendingRequests: users.filter(u => u.status === 'pending').length,
    inProgress: users.filter(u => u.status === 'in-progress').length,
    completed: users.filter(u => u.status === 'completed').length,
    totalServices: services.filter(s => s.status === 'active').length,
    totalDocuments: users.reduce((acc, u) => acc + u.documents.length, 0)
  };

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'users', label: 'Users & Inquiries', icon: Users },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'documents', label: 'Documents', icon: FileText },
    { id: 'services', label: 'Manage Services', icon: Briefcase },
    { id: 'settings', label: 'Settings', icon: Settings },
  ];

  const filteredUsers = users.filter(user => 
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.serviceType.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-slate-900 flex">
      {/* Sidebar */}
      <aside className={`${sidebarOpen ? 'w-64' : 'w-20'} bg-slate-800 border-r border-slate-700 transition-all duration-300 flex flex-col`}>
        <div className="p-4 border-b border-slate-700">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center">
              <Settings className="w-6 h-6 text-white" />
            </div>
            {sidebarOpen && (
              <div>
                <h1 className="text-white font-bold">AKOS Admin</h1>
                <p className="text-xs text-gray-400">Dashboard</p>
              </div>
            )}
          </div>
        </div>

        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {sidebarItems.map(item => (
              <li key={item.id}>
                <button
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                    activeTab === item.id 
                      ? 'bg-primary text-white' 
                      : 'text-gray-400 hover:bg-slate-700 hover:text-white'
                  }`}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  {sidebarOpen && <span>{item.label}</span>}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-slate-700">
          <button 
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="w-full flex items-center justify-center gap-2 px-4 py-2 text-gray-400 hover:text-white transition-colors"
          >
            {sidebarOpen ? <ChevronDown className="w-5 h-5 rotate-90" /> : <ChevronDown className="w-5 h-5 -rotate-90" />}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-slate-800 border-b border-slate-700 px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white capitalize">{activeTab.replace('-', ' ')}</h2>
              <p className="text-sm text-gray-400">Manage your AKOS platform</p>
            </div>
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-gray-400 hover:text-white transition-colors">
                <Bell className="w-6 h-6" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
              </button>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center">
                  <span className="text-white font-bold">A</span>
                </div>
                <div className="hidden md:block">
                  <p className="text-white font-medium">Admin</p>
                  <p className="text-xs text-gray-400">Super Admin</p>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6">
          {activeTab === 'dashboard' && <DashboardContent stats={stats} users={users} />}
          {activeTab === 'users' && <UsersContent users={filteredUsers} setUsers={setUsers} searchQuery={searchQuery} setSearchQuery={setSearchQuery} />}
          {activeTab === 'messages' && <MessagesContent messages={messages} setMessages={setMessages} users={users} />}
          {activeTab === 'documents' && <DocumentsContent users={users} />}
          {activeTab === 'services' && <ServicesContent services={services} setServices={setServices} />}
          {activeTab === 'settings' && <SettingsContent />}
        </div>
      </main>
    </div>
  );
}

// Dashboard Content
function DashboardContent({ stats, users }: { stats: any; users: User[] }) {
  const statCards = [
    { label: 'Total Inquiries', value: stats.totalUsers, icon: Users, color: 'from-blue-500 to-cyan-500' },
    { label: 'Pending', value: stats.pendingRequests, icon: Clock, color: 'from-yellow-500 to-orange-500' },
    { label: 'In Progress', value: stats.inProgress, icon: TrendingUp, color: 'from-purple-500 to-pink-500' },
    { label: 'Completed', value: stats.completed, icon: CheckCircle, color: 'from-green-500 to-emerald-500' },
    { label: 'Active Services', value: stats.totalServices, icon: Briefcase, color: 'from-indigo-500 to-purple-500' },
    { label: 'Documents', value: stats.totalDocuments, icon: FileText, color: 'from-red-500 to-pink-500' },
  ];

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {statCards.map((stat, index) => (
          <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4`}>
              <stat.icon className="w-6 h-6 text-white" />
            </div>
            <p className="text-3xl font-bold text-white">{stat.value}</p>
            <p className="text-sm text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Recent Inquiries */}
      <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
        <div className="p-6 border-b border-slate-700">
          <h3 className="text-xl font-bold text-white">Recent Inquiries</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-700/50">
              <tr>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">User</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Service</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Date</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Status</th>
              </tr>
            </thead>
            <tbody>
              {users.slice(0, 5).map(user => (
                <tr key={user.id} className="border-b border-slate-700 hover:bg-slate-700/30 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center">
                        <span className="text-white font-bold">{user.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="text-white font-medium">{user.name}</p>
                        <p className="text-sm text-gray-400">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-gray-300">{user.serviceType}</td>
                  <td className="py-4 px-6 text-gray-400">{user.date}</td>
                  <td className="py-4 px-6">
                    <StatusBadge status={user.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Users Content
function UsersContent({ users, setUsers, searchQuery, setSearchQuery }: { users: User[]; setUsers: any; searchQuery: string; setSearchQuery: any }) {
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [filterStatus, setFilterStatus] = useState('all');

  const filteredUsers = filterStatus === 'all' 
    ? users 
    : users.filter(u => u.status === filterStatus);

  const updateUserStatus = (userId: string, newStatus: 'pending' | 'in-progress' | 'completed') => {
    setUsers((prev: User[]) => prev.map(u => u.id === userId ? { ...u, status: newStatus } : u));
  };

  return (
    <div className="space-y-6">
      {selectedUser ? (
        <UserDetailView user={selectedUser} onBack={() => setSelectedUser(null)} onStatusChange={updateUserStatus} />
      ) : (
        <>
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search users by name, email, or service..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
            >
              <option value="all">All Status</option>
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>

          {/* Users Table */}
          <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-slate-700/50">
                  <tr>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">User</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Contact</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Service</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Date</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Documents</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Status</th>
                    <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredUsers.map(user => (
                    <tr key={user.id} className="border-b border-slate-700 hover:bg-slate-700/30 transition-colors">
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center">
                            <span className="text-white font-bold">{user.name.charAt(0)}</span>
                          </div>
                          <p className="text-white font-medium">{user.name}</p>
                        </div>
                      </td>
                      <td className="py-4 px-6">
                        <p className="text-gray-300 text-sm">{user.email}</p>
                        <p className="text-gray-400 text-sm">{user.phone}</p>
                      </td>
                      <td className="py-4 px-6 text-gray-300">{user.serviceType}</td>
                      <td className="py-4 px-6 text-gray-400">{user.date}</td>
                      <td className="py-4 px-6">
                        <span className="px-3 py-1 bg-slate-700 rounded-full text-sm text-gray-300">
                          {user.documents.length} files
                        </span>
                      </td>
                      <td className="py-4 px-6">
                        <StatusBadge status={user.status} />
                      </td>
                      <td className="py-4 px-6">
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => setSelectedUser(user)}
                            className="p-2 hover:bg-slate-700 rounded-lg transition-colors text-gray-400 hover:text-white"
                          >
                            <Eye className="w-5 h-5" />
                          </button>
                          <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors text-gray-400 hover:text-primary">
                            <MessageSquare className="w-5 h-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// User Detail View
function UserDetailView({ user, onBack, onStatusChange }: { user: User; onBack: () => void; onStatusChange: (id: string, status: 'pending' | 'in-progress' | 'completed') => void }) {
  const [newMessage, setNewMessage] = useState('');

  return (
    <div className="space-y-6">
      <button onClick={onBack} className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
        <ArrowLeft className="w-5 h-5" />
        Back to Users
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* User Info */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
            <div className="flex items-start justify-between mb-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center">
                  <span className="text-white text-2xl font-bold">{user.name.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{user.name}</h3>
                  <p className="text-gray-400">{user.serviceType}</p>
                </div>
              </div>
              <StatusBadge status={user.status} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-slate-700/50 rounded-lg">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="text-white">{user.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-slate-700/50 rounded-lg">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <p className="text-white">{user.phone}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-slate-700/50 rounded-lg">
                <Briefcase className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-gray-400">Service</p>
                  <p className="text-white">{user.serviceType}</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-slate-700/50 rounded-lg">
                <Calendar className="w-5 h-5 text-primary" />
                <div>
                  <p className="text-sm text-gray-400">Date</p>
                  <p className="text-white">{user.date}</p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-lg font-semibold text-white mb-3">Message</h4>
              <p className="text-gray-300 bg-slate-700/50 p-4 rounded-lg">{user.message}</p>
            </div>
          </div>

          {/* Send Message */}
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
            <h4 className="text-lg font-semibold text-white mb-4">Send Message to User</h4>
            <textarea
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message here..."
              rows={4}
              className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
            />
            <div className="flex justify-end mt-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-blue-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-primary transition-all">
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Update Status */}
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
            <h4 className="text-lg font-semibold text-white mb-4">Update Status</h4>
            <div className="space-y-2">
              {['pending', 'in-progress', 'completed'].map(status => (
                <button
                  key={status}
                  onClick={() => onStatusChange(user.id, status as any)}
                  className={`w-full py-3 px-4 rounded-lg font-medium transition-all ${
                    user.status === status
                      ? 'bg-primary text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                  }`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>

          {/* Documents */}
          <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
            <h4 className="text-lg font-semibold text-white mb-4">Documents ({user.documents.length})</h4>
            {user.documents.length > 0 ? (
              <div className="space-y-3">
                {user.documents.map((doc, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-slate-700/50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <FileText className="w-5 h-5 text-primary" />
                      <div>
                        <p className="text-sm text-white">{doc.name}</p>
                        <p className="text-xs text-gray-400">{doc.size}</p>
                      </div>
                    </div>
                    <button className="p-2 hover:bg-slate-600 rounded-lg transition-colors text-gray-400 hover:text-white">
                      <Download className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-400 text-sm">No documents uploaded</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Messages Content
function MessagesContent({ messages, setMessages, users }: { messages: Message[]; setMessages: any; users: User[] }) {
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [newMessage, setNewMessage] = useState('');

  const userMessages = selectedUserId 
    ? messages.filter(m => m.userId === selectedUserId)
    : [];

  const sendMessage = () => {
    if (!newMessage.trim() || !selectedUserId) return;
    
    const message: Message = {
      id: Date.now().toString(),
      userId: selectedUserId,
      userName: 'Admin',
      content: newMessage,
      date: new Date().toISOString().slice(0, 16).replace('T', ' '),
      type: 'outgoing'
    };
    
    setMessages((prev: Message[]) => [...prev, message]);
    setNewMessage('');
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
      {/* Users List */}
      <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
        <div className="p-4 border-b border-slate-700">
          <h3 className="text-lg font-semibold text-white">Conversations</h3>
        </div>
        <div className="overflow-y-auto h-full">
          {users.map(user => (
            <button
              key={user.id}
              onClick={() => setSelectedUserId(user.id)}
              className={`w-full p-4 flex items-center gap-3 border-b border-slate-700 transition-colors ${
                selectedUserId === user.id ? 'bg-slate-700' : 'hover:bg-slate-700/50'
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold">{user.name.charAt(0)}</span>
              </div>
              <div className="text-left flex-1 min-w-0">
                <p className="text-white font-medium truncate">{user.name}</p>
                <p className="text-sm text-gray-400 truncate">{user.serviceType}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Chat Area */}
      <div className="lg:col-span-2 bg-slate-800 rounded-xl border border-slate-700 flex flex-col">
        {selectedUserId ? (
          <>
            {/* Chat Header */}
            <div className="p-4 border-b border-slate-700">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center">
                  <span className="text-white font-bold">
                    {users.find(u => u.id === selectedUserId)?.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="text-white font-medium">{users.find(u => u.id === selectedUserId)?.name}</p>
                  <p className="text-sm text-gray-400">{users.find(u => u.id === selectedUserId)?.email}</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {userMessages.map(msg => (
                <div key={msg.id} className={`flex ${msg.type === 'outgoing' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[70%] p-4 rounded-xl ${
                    msg.type === 'outgoing' 
                      ? 'bg-primary text-white' 
                      : 'bg-slate-700 text-gray-300'
                  }`}>
                    <p>{msg.content}</p>
                    <p className={`text-xs mt-2 ${msg.type === 'outgoing' ? 'text-blue-200' : 'text-gray-500'}`}>
                      {msg.date}
                    </p>
                  </div>
                </div>
              ))}
              {userMessages.length === 0 && (
                <div className="flex items-center justify-center h-full text-gray-400">
                  No messages yet. Start a conversation!
                </div>
              )}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-slate-700">
              <div className="flex gap-3">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                  onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                />
                <button 
                  onClick={sendMessage}
                  className="px-6 py-3 bg-gradient-to-r from-primary to-blue-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-primary transition-all"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-400">
            <div className="text-center">
              <MessageSquare className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p>Select a user to start messaging</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Documents Content
function DocumentsContent({ users }: { users: User[] }) {
  const allDocuments = users.flatMap(user => 
    user.documents.map(doc => ({
      ...doc,
      userName: user.name,
      userEmail: user.email,
      serviceType: user.serviceType
    }))
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-white">All Documents ({allDocuments.length})</h3>
        <button className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors">
          <Download className="w-5 h-5" />
          Download All
        </button>
      </div>

      <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-700/50">
              <tr>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Document</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">User</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Service</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Size</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {allDocuments.map((doc, index) => (
                <tr key={index} className="border-b border-slate-700 hover:bg-slate-700/30 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <FileText className="w-8 h-8 text-primary" />
                      <span className="text-white">{doc.name}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <p className="text-white">{doc.userName}</p>
                    <p className="text-sm text-gray-400">{doc.userEmail}</p>
                  </td>
                  <td className="py-4 px-6 text-gray-300">{doc.serviceType}</td>
                  <td className="py-4 px-6 text-gray-400">{doc.size}</td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors text-gray-400 hover:text-white">
                        <Eye className="w-5 h-5" />
                      </button>
                      <button className="p-2 hover:bg-slate-700 rounded-lg transition-colors text-gray-400 hover:text-primary">
                        <Download className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Services Content
function ServicesContent({ services, setServices }: { services: Service[]; setServices: any }) {
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingService, setEditingService] = useState<Service | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    description: '',
    duration: '',
    status: 'active' as 'active' | 'inactive'
  });

  const categories = ['Registrations', 'Taxation', 'IPR', 'Compliance', 'CA Services', 'Legal'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editingService) {
      setServices((prev: Service[]) => prev.map(s => 
        s.id === editingService.id ? { ...s, ...formData } : s
      ));
      setEditingService(null);
    } else {
      const newService: Service = {
        id: Date.now().toString(),
        ...formData
      };
      setServices((prev: Service[]) => [...prev, newService]);
    }
    
    setFormData({ name: '', category: '', description: '', duration: '', status: 'active' });
    setShowAddForm(false);
  };

  const deleteService = (id: string) => {
    setServices((prev: Service[]) => prev.filter(s => s.id !== id));
  };

  const startEdit = (service: Service) => {
    setEditingService(service);
    setFormData({
      name: service.name,
      category: service.category,
      description: service.description,
      duration: service.duration,
      status: service.status
    });
    setShowAddForm(true);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold text-white">Manage Services ({services.length})</h3>
        <button 
          onClick={() => {
            setShowAddForm(true);
            setEditingService(null);
            setFormData({ name: '', category: '', description: '', duration: '', status: 'active' });
          }}
          className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-blue-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-primary transition-all"
        >
          <Plus className="w-5 h-5" />
          Add Service
        </button>
      </div>

      {/* Add/Edit Service Form */}
      {showAddForm && (
        <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
          <h4 className="text-lg font-semibold text-white mb-4">
            {editingService ? 'Edit Service' : 'Add New Service'}
          </h4>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Service Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="e.g., Private Limited Company Registration"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Category *</label>
                <select
                  required
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select Category</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Duration *</label>
                <input
                  type="text"
                  required
                  value={formData.duration}
                  onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="e.g., 10-15 days"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Status</label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value as any })}
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Description *</label>
              <textarea
                required
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={3}
                className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                placeholder="Brief description of the service..."
              />
            </div>
            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={() => {
                  setShowAddForm(false);
                  setEditingService(null);
                }}
                className="px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-blue-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-primary transition-all"
              >
                <Save className="w-5 h-5" />
                {editingService ? 'Update Service' : 'Save Service'}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Services Table */}
      <div className="bg-slate-800 rounded-xl border border-slate-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-700/50">
              <tr>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Service</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Category</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Duration</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Status</th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.map(service => (
                <tr key={service.id} className="border-b border-slate-700 hover:bg-slate-700/30 transition-colors">
                  <td className="py-4 px-6">
                    <p className="text-white font-medium">{service.name}</p>
                    <p className="text-sm text-gray-400">{service.description}</p>
                  </td>
                  <td className="py-4 px-6">
                    <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">
                      {service.category}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-gray-300">{service.duration}</td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      service.status === 'active' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-red-500/20 text-red-400'
                    }`}>
                      {service.status.charAt(0).toUpperCase() + service.status.slice(1)}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <button 
                        onClick={() => startEdit(service)}
                        className="p-2 hover:bg-slate-700 rounded-lg transition-colors text-gray-400 hover:text-primary"
                      >
                        <Edit className="w-5 h-5" />
                      </button>
                      <button 
                        onClick={() => deleteService(service.id)}
                        className="p-2 hover:bg-slate-700 rounded-lg transition-colors text-gray-400 hover:text-red-400"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Settings Content
function SettingsContent() {
  return (
    <div className="space-y-6">
      <div className="bg-slate-800 rounded-xl border border-slate-700 p-6">
        <h3 className="text-xl font-bold text-white mb-6">Admin Settings</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Profile Settings</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Admin Name</label>
                <input
                  type="text"
                  defaultValue="Om Prakash Jha"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  defaultValue="akos170620250626@gmail.com"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                <input
                  type="tel"
                  defaultValue="+91 85211 39114"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Business Name</label>
                <input
                  type="text"
                  defaultValue="AKOS Accounting And Tax Consultant"
                  className="w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Notification Settings</h4>
            <div className="space-y-3">
              {[
                { label: 'Email notifications for new inquiries', checked: true },
                { label: 'SMS notifications for urgent requests', checked: false },
                { label: 'Daily summary report', checked: true },
                { label: 'Weekly analytics report', checked: true },
              ].map((item, index) => (
                <label key={index} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked={item.checked}
                    className="w-5 h-5 rounded border-slate-600 bg-slate-900 text-primary focus:ring-primary"
                  />
                  <span className="text-gray-300">{item.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="flex justify-end">
            <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-blue-500 text-white font-semibold rounded-lg hover:from-blue-500 hover:to-primary transition-all">
              <Save className="w-5 h-5" />
              Save Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Status Badge Component
function StatusBadge({ status }: { status: 'pending' | 'in-progress' | 'completed' }) {
  const styles = {
    pending: 'bg-yellow-500/20 text-yellow-400',
    'in-progress': 'bg-blue-500/20 text-blue-400',
    completed: 'bg-green-500/20 text-green-400'
  };

  const labels = {
    pending: 'Pending',
    'in-progress': 'In Progress',
    completed: 'Completed'
  };

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}
