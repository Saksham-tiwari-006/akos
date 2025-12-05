'use client'

import React, { useState } from 'react';
import { Building2, TrendingUp, CheckCircle, Users, Calculator, Clock, Shield, DollarSign, BarChart, FileText } from 'lucide-react';

export default function OutsourcedBookkeepingPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    file: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
              <Calculator className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Outsourced Bookkeeping Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Professional bookkeeping solutions that save costs, improve accuracy, and let you focus on growing your business while experts handle your financial records.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* What is Outsourced Bookkeeping */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Building2 className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">What is Outsourced Bookkeeping?</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6">
                  Outsourced bookkeeping is the practice of hiring external professionals or firms to manage your company's financial record-keeping tasks instead of handling them in-house. This approach allows businesses to access expert bookkeeping services without the overhead of hiring full-time staff.
                </p>
                
                <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-6 rounded-lg border border-blue-500/20 mb-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Role of Professional Bookkeeper</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-blue-400">📊 Daily Operations</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Record all business transactions accurately</li>
                        <li>• Maintain detailed financial records</li>
                        <li>• Process invoices and payments</li>
                        <li>• Track income and expenses</li>
                        <li>• Manage accounts payable and receivable</li>
                        <li>• Reconcile bank statements monthly</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-green-400">📈 Strategic Support</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Prepare financial reports and statements</li>
                        <li>• Ensure compliance with regulations</li>
                        <li>• Support tax preparation and filing</li>
                        <li>• Provide insights for decision making</li>
                        <li>• Maintain organized financial documentation</li>
                        <li>• Monitor cash flow and budgets</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Bookkeeping vs Accounting */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <BarChart className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Bookkeeping vs Accounting</h2>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left p-4 text-blue-400">Aspect</th>
                      <th className="text-left p-4 text-green-400">Bookkeeping</th>
                      <th className="text-left p-4 text-purple-400">Accounting</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-white/10">
                      <td className="p-4 font-semibold">Definition</td>
                      <td className="p-4">Recording and organizing financial transactions</td>
                      <td className="p-4">Interpreting, analyzing, and summarizing financial data</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-4 font-semibold">Primary Function</td>
                      <td className="p-4">Data collection and record maintenance</td>
                      <td className="p-4">Data analysis and financial reporting</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-4 font-semibold">Skills Required</td>
                      <td className="p-4">Basic math, attention to detail, organization</td>
                      <td className="p-4">Advanced analytical skills, financial expertise</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-4 font-semibold">Output</td>
                      <td className="p-4">Transaction records, journals, ledgers</td>
                      <td className="p-4">Financial statements, analysis, recommendations</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-4 font-semibold">Timing</td>
                      <td className="p-4">Daily/Weekly ongoing process</td>
                      <td className="p-4">Monthly/Quarterly/Annual reporting</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-4 font-semibold">Decision Making</td>
                      <td className="p-4">Limited involvement in business decisions</td>
                      <td className="p-4">Provides insights for strategic decisions</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-4 font-semibold">Qualifications</td>
                      <td className="p-4">Certificate courses, practical training</td>
                      <td className="p-4">Professional degree (CA, CMA, CS)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-4 font-semibold">Tools Used</td>
                      <td className="p-4">Tally, QuickBooks, Excel, accounting software</td>
                      <td className="p-4">Advanced analytics tools, ERP systems</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Benefits */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <TrendingUp className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Benefits of Outsourced Bookkeeping</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <DollarSign className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-3">💰 Cost Savings</h3>
                  <p className="text-sm text-gray-300 mb-3">Reduce overhead costs significantly compared to hiring full-time staff.</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• No salary, benefits, or office space costs</li>
                    <li>• No recruitment or training expenses</li>
                    <li>• Pay only for services used</li>
                    <li>• Avoid software and equipment costs</li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <Clock className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-3">⏰ Time Efficiency</h3>
                  <p className="text-sm text-gray-300 mb-3">Free up valuable time to focus on core business activities and growth.</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Focus on revenue-generating activities</li>
                    <li>• Eliminate time spent on data entry</li>
                    <li>• Faster processing and turnaround</li>
                    <li>• 24/7 support availability</li>
                  </ul>
                </div>
                
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <Users className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-3">👥 Access to Experts</h3>
                  <p className="text-sm text-gray-300 mb-3">Get professional expertise without the cost of hiring specialists.</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Certified accounting professionals</li>
                    <li>• Industry-specific knowledge</li>
                    <li>• Latest compliance updates</li>
                    <li>• Advanced software proficiency</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <TrendingUp className="w-8 h-8 text-yellow-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-3">📈 Scalability</h3>
                  <p className="text-sm text-gray-300 mb-3">Easily scale services up or down based on business needs.</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Adjust services as business grows</li>
                    <li>• Handle seasonal fluctuations</li>
                    <li>• No hiring/firing complications</li>
                    <li>• Flexible service packages</li>
                  </ul>
                </div>
                
                <div className="bg-indigo-500/10 p-6 rounded-lg border border-indigo-500/20">
                  <BarChart className="w-8 h-8 text-indigo-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-3">📊 Better Reporting</h3>
                  <p className="text-sm text-gray-300 mb-3">Access to professional reports and financial insights.</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Real-time financial dashboards</li>
                    <li>• Comprehensive monthly reports</li>
                    <li>• Key performance indicators</li>
                    <li>• Budget vs actual analysis</li>
                  </ul>
                </div>
                
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <CheckCircle className="w-8 h-8 text-red-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-3">✅ Improved Accuracy</h3>
                  <p className="text-sm text-gray-300 mb-3">Reduce errors and ensure accurate financial records.</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Professional quality control</li>
                    <li>• Advanced software validation</li>
                    <li>• Regular reconciliation processes</li>
                    <li>• Error detection and correction</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* In-House vs Outsourcing Comparison */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Users className="w-8 h-8 text-orange-400" />
                <h2 className="text-3xl font-bold text-white">In-House vs Outsourced Bookkeeping</h2>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left p-4 text-orange-400">Factor</th>
                      <th className="text-left p-4 text-red-400">In-House Bookkeeping</th>
                      <th className="text-left p-4 text-green-400">Outsourced Bookkeeping</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-white/10">
                      <td className="p-4 font-semibold">Monthly Cost</td>
                      <td className="p-4">₹25,000 - ₹60,000+ (salary + benefits)</td>
                      <td className="p-4">₹3,000 - ₹15,000 (service fees)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-4 font-semibold">Setup Time</td>
                      <td className="p-4">2-4 weeks (recruitment + training)</td>
                      <td className="p-4">1-3 days (immediate start)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-4 font-semibold">Expertise Level</td>
                      <td className="p-4">Depends on hire quality</td>
                      <td className="p-4">Certified professionals</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-4 font-semibold">Software Costs</td>
                      <td className="p-4">₹5,000 - ₹20,000/year</td>
                      <td className="p-4">Included in service</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-4 font-semibold">Compliance Updates</td>
                      <td className="p-4">Requires training and monitoring</td>
                      <td className="p-4">Automatically updated</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-4 font-semibold">Backup Support</td>
                      <td className="p-4">No coverage during leaves</td>
                      <td className="p-4">Always available</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-4 font-semibold">Data Security</td>
                      <td className="p-4">Depends on internal systems</td>
                      <td className="p-4">Professional-grade security</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-4 font-semibold">Scalability</td>
                      <td className="p-4">Requires hiring/firing</td>
                      <td className="p-4">Instant scaling</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-4 font-semibold">Quality Control</td>
                      <td className="p-4">Limited oversight</td>
                      <td className="p-4">Multi-level review process</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Comprehensive Services */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">Our Comprehensive Outsourced Services</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="text-xl font-semibold text-white mb-4">📚 Daily Transaction Recording</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                    <ul className="space-y-1">
                      <li>• Sales and purchase entry</li>
                      <li>• Cash and bank transactions</li>
                      <li>• Expense categorization</li>
                      <li>• Invoice processing</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>• Receipt and payment vouchers</li>
                      <li>• Journal entries</li>
                      <li>• Multi-currency transactions</li>
                      <li>• Real-time data entry</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="text-xl font-semibold text-white mb-4">💰 Accounts Payable/Receivable</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                    <ul className="space-y-1">
                      <li>• Vendor bill processing</li>
                      <li>• Payment scheduling</li>
                      <li>• Customer invoice tracking</li>
                      <li>• Collection management</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>• Aging analysis reports</li>
                      <li>• Credit management</li>
                      <li>• Dispute resolution</li>
                      <li>• Cash flow optimization</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="text-xl font-semibold text-white mb-4">🏦 Bank Reconciliation</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                    <ul className="space-y-1">
                      <li>• Daily/Weekly/Monthly reconciliation</li>
                      <li>• Multiple account management</li>
                      <li>• Outstanding item tracking</li>
                      <li>• Discrepancy resolution</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>• Credit card reconciliation</li>
                      <li>• Digital payment tracking</li>
                      <li>• Bank fee analysis</li>
                      <li>• Cash position monitoring</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-600/10 to-orange-600/10 p-6 rounded-lg border border-yellow-500/20">
                  <h3 className="text-xl font-semibold text-white mb-4">📊 General Ledger Maintenance</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                    <ul className="space-y-1">
                      <li>• Chart of accounts setup</li>
                      <li>• Journal entry posting</li>
                      <li>• Trial balance preparation</li>
                      <li>• Account analysis</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>• Adjusting entries</li>
                      <li>• Period-end closing</li>
                      <li>• Financial statement prep</li>
                      <li>• Variance analysis</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-600/10 to-blue-600/10 p-6 rounded-lg border border-indigo-500/20">
                  <h3 className="text-xl font-semibold text-white mb-4">👥 Payroll Processing</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                    <ul className="space-y-1">
                      <li>• Salary computation</li>
                      <li>• Tax calculations</li>
                      <li>• Statutory deductions</li>
                      <li>• Payslip generation</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>• PF/ESI processing</li>
                      <li>• Form 16 preparation</li>
                      <li>• Compliance reporting</li>
                      <li>• Bonus calculations</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-teal-600/10 to-green-600/10 p-6 rounded-lg border border-teal-500/20">
                  <h3 className="text-xl font-semibold text-white mb-4">🏛️ GST, TDS & ITR Support</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                    <ul className="space-y-1">
                      <li>• GST return preparation</li>
                      <li>• TDS computation and filing</li>
                      <li>• Income tax return preparation</li>
                      <li>• Compliance calendar management</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>• Tax planning support</li>
                      <li>• Notice handling</li>
                      <li>• Audit assistance</li>
                      <li>• Penalty mitigation</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-600/10 to-pink-600/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="text-xl font-semibold text-white mb-4">📈 MIS Reports</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                    <ul className="space-y-1">
                      <li>• Profit & Loss statements</li>
                      <li>• Balance sheet preparation</li>
                      <li>• Cash flow statements</li>
                      <li>• Management dashboards</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>• Budget vs actual reports</li>
                      <li>• KPI tracking</li>
                      <li>• Trend analysis</li>
                      <li>• Custom reporting</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Cost Comparison Table */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <DollarSign className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Cost Comparison</h2>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left p-4 text-green-400">Service Level</th>
                      <th className="text-left p-4 text-blue-400">Transaction Volume</th>
                      <th className="text-left p-4 text-purple-400">In-House Cost</th>
                      <th className="text-left p-4 text-yellow-400">Outsourced Cost</th>
                      <th className="text-left p-4 text-red-400">Savings</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-white/10">
                      <td className="p-4">Basic</td>
                      <td className="p-4">Up to 100 entries/month</td>
                      <td className="p-4">₹25,000/month</td>
                      <td className="p-4">₹3,000/month</td>
                      <td className="p-4 text-green-400">₹22,000 (88%)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-4">Standard</td>
                      <td className="p-4">101-300 entries/month</td>
                      <td className="p-4">₹35,000/month</td>
                      <td className="p-4">₹6,000/month</td>
                      <td className="p-4 text-green-400">₹29,000 (83%)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-4">Premium</td>
                      <td className="p-4">301-500 entries/month</td>
                      <td className="p-4">₹45,000/month</td>
                      <td className="p-4">₹10,000/month</td>
                      <td className="p-4 text-green-400">₹35,000 (78%)</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-4">Enterprise</td>
                      <td className="p-4">500+ entries/month</td>
                      <td className="p-4">₹60,000/month</td>
                      <td className="p-4">₹15,000/month</td>
                      <td className="p-4 text-green-400">₹45,000 (75%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* 4-Step Process */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <CheckCircle className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">4-Step Onboarding Process</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold mb-4">1</div>
                  <h3 className="font-semibold text-lg mb-3 text-blue-400">📋 Initial Consultation</h3>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Business requirement analysis</li>
                    <li>• Current system evaluation</li>
                    <li>• Service package selection</li>
                    <li>• Timeline and pricing discussion</li>
                  </ul>
                </div>
                
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold mb-4">2</div>
                  <h3 className="font-semibold text-lg mb-3 text-green-400">📁 Data Migration</h3>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Historical data collection</li>
                    <li>• Chart of accounts setup</li>
                    <li>• System configuration</li>
                    <li>• Data validation and cleanup</li>
                  </ul>
                </div>
                
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold mb-4">3</div>
                  <h3 className="font-semibold text-lg mb-3 text-purple-400">🔧 Process Setup</h3>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Document flow establishment</li>
                    <li>• Access credentials setup</li>
                    <li>• Communication protocols</li>
                    <li>• Quality control measures</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold mb-4">4</div>
                  <h3 className="font-semibold text-lg mb-3 text-yellow-400">🚀 Go Live</h3>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Live operations commencement</li>
                    <li>• Daily monitoring and support</li>
                    <li>• Regular reporting schedule</li>
                    <li>• Ongoing optimization</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Get Started */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Outsource Your Bookkeeping?</h2>
              <p className="text-xl mb-6 opacity-90">
                Save up to 80% on costs while getting professional bookkeeping services. Contact us today!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">80%</div>
                  <div className="text-sm opacity-80">Cost Savings</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">1-3 Days</div>
                  <div className="text-sm opacity-80">Setup Time</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm opacity-80">Support</div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Get Outsourced Bookkeeping Quote</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Business Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your business and bookkeeping needs..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="file" className="block text-sm font-medium text-gray-300 mb-2">
                      Upload Documents (Optional)
                    </label>
                    <input
                      type="file"
                      id="file"
                      name="file"
                      onChange={handleFileChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Get Free Quote
                  </button>
                </form>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span>Free Quote</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 text-blue-400 mr-2" />
                      <span>Secure Process</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}