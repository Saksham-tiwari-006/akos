'use client'

import React, { useState } from 'react';
import { Building2, FileText, CheckCircle, TrendingUp, Users, Calculator, Clock, Shield, BarChart, DollarSign } from 'lucide-react';

export default function BookkeepingServicesPage() {
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
              Professional Bookkeeping Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive bookkeeping and accounting solutions to help your business maintain accurate financial records, ensure compliance, and make informed decisions.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* What is Bookkeeping */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">What is Bookkeeping?</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6">
                  Bookkeeping is the systematic recording, organizing, and maintaining of financial transactions of a business. It involves tracking all money coming in and going out, categorizing expenses, managing invoices, and ensuring all financial data is accurate and up-to-date.
                </p>
                
                <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-6 rounded-lg border border-blue-500/20 mb-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Bookkeeping vs Accounting</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-white/20">
                          <th className="text-left p-3 text-blue-400">Aspect</th>
                          <th className="text-left p-3 text-green-400">Bookkeeping</th>
                          <th className="text-left p-3 text-purple-400">Accounting</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        <tr className="border-b border-white/10">
                          <td className="p-3 font-semibold">Definition</td>
                          <td className="p-3">Recording daily transactions</td>
                          <td className="p-3">Interpreting financial information</td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="p-3 font-semibold">Purpose</td>
                          <td className="p-3">Maintain accurate records</td>
                          <td className="p-3">Analysis and decision making</td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="p-3 font-semibold">Skills Required</td>
                          <td className="p-3">Basic math and organization</td>
                          <td className="p-3">Advanced analytical skills</td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="p-3 font-semibold">Output</td>
                          <td className="p-3">Transaction records, ledgers</td>
                          <td className="p-3">Financial statements, reports</td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="p-3 font-semibold">Frequency</td>
                          <td className="p-3">Daily/Weekly</td>
                          <td className="p-3">Monthly/Quarterly/Yearly</td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="p-3 font-semibold">Decision Making</td>
                          <td className="p-3">Limited involvement</td>
                          <td className="p-3">Strategic business decisions</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-white mb-4">Difference Between Bookkeeper and Accountant</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                    <h4 className="font-semibold text-lg mb-3 text-green-400">📊 Bookkeeper Role</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Records daily transactions</li>
                      <li>• Manages accounts payable/receivable</li>
                      <li>• Reconciles bank statements</li>
                      <li>• Maintains general ledger</li>
                      <li>• Processes payroll</li>
                      <li>• Prepares basic reports</li>
                      <li>• Ensures data accuracy</li>
                    </ul>
                  </div>
                  <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                    <h4 className="font-semibold text-lg mb-3 text-blue-400">🔍 Accountant Role</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Prepares financial statements</li>
                      <li>• Conducts financial analysis</li>
                      <li>• Tax planning and preparation</li>
                      <li>• Budget forecasting</li>
                      <li>• Strategic financial advice</li>
                      <li>• Compliance management</li>
                      <li>• Audit supervision</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Advantages */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <TrendingUp className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Key Advantages of Professional Bookkeeping</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-3">✓ Accurate Financial Records</h3>
                  <p className="text-sm text-gray-300">Maintain precise and up-to-date financial records that provide a clear picture of your business's financial health at any time.</p>
                </div>
                
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <BarChart className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-3">📈 Better Decision Making</h3>
                  <p className="text-sm text-gray-300">Access to real-time financial data enables informed business decisions, helping you identify profitable areas and cost-saving opportunities.</p>
                </div>
                
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <Shield className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-3">🛡️ Tax Compliance</h3>
                  <p className="text-sm text-gray-300">Ensure accurate tax filings and avoid penalties with properly maintained records that support all deductions and claims.</p>
                </div>
                
                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <Clock className="w-8 h-8 text-yellow-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-3">⏰ Time and Cost Savings</h3>
                  <p className="text-sm text-gray-300">Free up valuable time to focus on core business activities while reducing the cost of full-time accounting staff.</p>
                </div>
                
                <div className="bg-indigo-500/10 p-6 rounded-lg border border-indigo-500/20">
                  <DollarSign className="w-8 h-8 text-indigo-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-3">💰 Cash Flow Management</h3>
                  <p className="text-sm text-gray-300">Monitor cash flow patterns, track outstanding payments, and maintain healthy working capital through systematic record keeping.</p>
                </div>
                
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <TrendingUp className="w-8 h-8 text-red-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-3">📊 Financial Planning</h3>
                  <p className="text-sm text-gray-300">Facilitate budget preparation, financial forecasting, and strategic planning with comprehensive historical data.</p>
                </div>
                
                <div className="bg-teal-500/10 p-6 rounded-lg border border-teal-500/20">
                  <FileText className="w-8 h-8 text-teal-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-3">📋 Regulatory Compliance</h3>
                  <p className="text-sm text-gray-300">Meet all statutory requirements for financial record maintenance as mandated by various regulatory bodies.</p>
                </div>
                
                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/20">
                  <Building2 className="w-8 h-8 text-orange-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-3">🏢 Enhanced Credibility</h3>
                  <p className="text-sm text-gray-300">Build trust with investors, lenders, and stakeholders through professionally maintained and auditable financial records.</p>
                </div>
              </div>
            </section>

            {/* Comprehensive Services */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">Our Comprehensive Bookkeeping Services</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="text-xl font-semibold text-white mb-4">📚 Daily Bookkeeping Services</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                    <ul className="space-y-1">
                      <li>• Daily transaction recording</li>
                      <li>• Invoice generation and tracking</li>
                      <li>• Expense categorization</li>
                      <li>• Cash and bank transactions</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>• Purchase and sales entries</li>
                      <li>• Petty cash management</li>
                      <li>• Digital receipt organization</li>
                      <li>• Multi-location bookkeeping</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="text-xl font-semibold text-white mb-4">📊 Accounts Management</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                    <ul className="space-y-1">
                      <li>• Accounts Payable management</li>
                      <li>• Accounts Receivable tracking</li>
                      <li>• Vendor payment scheduling</li>
                      <li>• Customer payment follow-ups</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>• Aging reports preparation</li>
                      <li>• Credit management</li>
                      <li>• Payment terms negotiation</li>
                      <li>• Bad debt provisions</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="text-xl font-semibold text-white mb-4">🏦 Bank Reconciliation</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                    <ul className="space-y-1">
                      <li>• Monthly bank statement matching</li>
                      <li>• Outstanding check tracking</li>
                      <li>• Deposit verification</li>
                      <li>• Bank fee recording</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>• Multiple account reconciliation</li>
                      <li>• Credit card reconciliation</li>
                      <li>• Discrepancy identification</li>
                      <li>• Cash flow analysis</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-yellow-600/10 to-orange-600/10 p-6 rounded-lg border border-yellow-500/20">
                  <h3 className="text-xl font-semibold text-white mb-4">📋 General Ledger Maintenance</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                    <ul className="space-y-1">
                      <li>• Chart of accounts setup</li>
                      <li>• Journal entry preparation</li>
                      <li>• Account classification</li>
                      <li>• Trial balance preparation</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>• Adjusting entries</li>
                      <li>• Period-end closing</li>
                      <li>• Error correction entries</li>
                      <li>• Account analysis</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-indigo-600/10 to-blue-600/10 p-6 rounded-lg border border-indigo-500/20">
                  <h3 className="text-xl font-semibold text-white mb-4">👥 Payroll Processing</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                    <ul className="space-y-1">
                      <li>• Employee salary calculation</li>
                      <li>• Tax deduction computation</li>
                      <li>• PF and ESI processing</li>
                      <li>• Bonus and incentive calculation</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>• Payroll register maintenance</li>
                      <li>• Statutory compliance</li>
                      <li>• Payslip generation</li>
                      <li>• Form 16 preparation</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-teal-600/10 to-green-600/10 p-6 rounded-lg border border-teal-500/20">
                  <h3 className="text-xl font-semibold text-white mb-4">📈 Financial Statements</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                    <ul className="space-y-1">
                      <li>• Profit & Loss preparation</li>
                      <li>• Balance Sheet creation</li>
                      <li>• Cash flow statements</li>
                      <li>• Management reports</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>• Budget vs actual analysis</li>
                      <li>• Variance reports</li>
                      <li>• Key performance indicators</li>
                      <li>• Financial dashboards</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-red-600/10 to-pink-600/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="text-xl font-semibold text-white mb-4">🏛️ Compliance Support</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                    <ul className="space-y-1">
                      <li>• GST return preparation and filing</li>
                      <li>• TDS computation and filing</li>
                      <li>• Income Tax Return preparation</li>
                      <li>• ROC annual filing support</li>
                    </ul>
                    <ul className="space-y-1">
                      <li>• Audit preparation assistance</li>
                      <li>• Statutory register maintenance</li>
                      <li>• Regulatory reporting</li>
                      <li>• Compliance calendar management</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Who Needs It */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Users className="w-8 h-8 text-purple-400" />
                <h2 className="text-3xl font-bold text-white">Who Needs Professional Bookkeeping Services?</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-3 text-blue-400">🚀 Startups and Small Businesses</h3>
                  <p className="text-sm text-gray-300 mb-3">New businesses need proper financial foundation from day one to ensure compliance and growth tracking.</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Establish financial processes</li>
                    <li>• Cost-effective alternative to full-time staff</li>
                    <li>• Focus on business development</li>
                  </ul>
                </div>
                
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-3 text-green-400">🏢 SMEs and Growing Companies</h3>
                  <p className="text-sm text-gray-300 mb-3">Established businesses require systematic bookkeeping to manage increased transaction volumes.</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Handle complex transactions</li>
                    <li>• Support business scaling</li>
                    <li>• Prepare for investments/loans</li>
                  </ul>
                </div>
                
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-3 text-purple-400">🛒 E-commerce Businesses</h3>
                  <p className="text-sm text-gray-300 mb-3">Online businesses need specialized bookkeeping to track multi-channel sales and inventory.</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Multi-platform integration</li>
                    <li>• Inventory management</li>
                    <li>• Payment gateway reconciliation</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <h3 className="font-semibold text-lg mb-3 text-yellow-400">👨‍⚕️ Professional Service Providers</h3>
                  <p className="text-sm text-gray-300 mb-3">Doctors, lawyers, consultants, and other professionals need to track income, expenses, and client billing.</p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Time and billing tracking</li>
                    <li>• Professional expense management</li>
                    <li>• Client account management</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Get Started */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Streamline Your Bookkeeping?</h2>
              <p className="text-xl mb-6 opacity-90">
                Contact us today to discuss your bookkeeping needs and get a customized solution for your business.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">₹2,500+</div>
                  <div className="text-sm opacity-80">Starting Monthly</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">24-48hrs</div>
                  <div className="text-sm opacity-80">Quick Setup</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm opacity-80">Accuracy</div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Get Expert Bookkeeping Services</h3>
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
                      Your Requirements
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your bookkeeping needs..."
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
                    Get Free Consultation
                  </button>
                </form>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span>Free Consultation</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 text-blue-400 mr-2" />
                      <span>100% Secure</span>
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