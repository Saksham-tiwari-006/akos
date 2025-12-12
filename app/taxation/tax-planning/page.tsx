'use client'

import React, { useState } from 'react';
import { TrendingUp, Calculator, FileText, CheckCircle, Clock, Shield, Building, DollarSign } from 'lucide-react';

export default function TaxPlanningPage() {
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-6">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Tax Planning Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Strategic tax planning and optimization services to minimize tax liability, maximize savings, and ensure compliance with changing tax laws.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Understanding Tax Planning */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <TrendingUp className="w-8 h-8 text-purple-400" />
                <h2 className="text-3xl font-bold text-white">Strategic Tax Planning</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6">
                  Tax planning is the systematic approach to arranging your financial affairs to minimize tax liability while maximizing after-tax income. It involves analyzing your income, investments, expenses, and business structure to identify legal opportunities for tax savings. Our comprehensive tax planning services help individuals and businesses optimize their tax position through strategic timing of income and deductions, proper investment planning, and efficient business structuring.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-purple-600/10 to-blue-600/10 p-6 rounded-lg border border-purple-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Calculator className="w-5 h-5" />
                      Tax Saving Strategies
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Section 80C investments (₹1.5 lakh deduction)</li>
                      <li>• Section 80D health insurance premiums</li>
                      <li>• Section 24(b) home loan interest deduction</li>
                      <li>• Section 10(13A) HRA exemption optimization</li>
                      <li>• Capital gains tax planning and exemptions</li>
                      <li>• Business expense optimization</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-600/10 to-green-600/10 p-6 rounded-lg border border-blue-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      Planning Components
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Income tax return optimization</li>
                      <li>• Investment portfolio structuring</li>
                      <li>• Retirement planning with tax benefits</li>
                      <li>• Estate planning and wealth transfer</li>
                      <li>• Business structure optimization</li>
                      <li>• Advance tax planning and payments</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Tax Planning Services */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Calculator className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Our Tax Planning Services</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">👤 Individual Tax Planning</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Salary structure optimization for employees</li>
                      <li>• Investment planning for tax savings</li>
                      <li>• Capital gains tax planning</li>
                      <li>• HRA and LTA optimization</li>
                      <li>• Retirement and pension planning</li>
                      <li>• NRI tax planning and compliance</li>
                    </ul>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Tax-efficient mutual fund investments</li>
                      <li>• Real estate investment planning</li>
                      <li>• Education loan interest benefits</li>
                      <li>• Senior citizen tax benefits</li>
                      <li>• Family tax planning strategies</li>
                      <li>• Annual tax review and adjustments</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">🏢 Business Tax Planning</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Corporate structure optimization</li>
                      <li>• Business expense planning</li>
                      <li>• Depreciation and asset planning</li>
                      <li>• Working capital tax efficiency</li>
                      <li>• Transfer pricing compliance</li>
                      <li>• Merger & acquisition tax planning</li>
                    </ul>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• GST optimization strategies</li>
                      <li>• International tax planning</li>
                      <li>• Tax-efficient employee benefits</li>
                      <li>• R&D incentives and benefits</li>
                      <li>• Export incentive optimization</li>
                      <li>• Quarterly tax projections</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-purple-400">💰 Investment & Wealth Planning</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Tax-saving investment products</li>
                      <li>• Portfolio rebalancing for tax efficiency</li>
                      <li>• Long-term capital gains planning</li>
                      <li>• Dividend income optimization</li>
                      <li>• Insurance planning with tax benefits</li>
                      <li>• Trust and estate planning</li>
                    </ul>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Systematic withdrawal planning</li>
                      <li>• Tax harvesting strategies</li>
                      <li>• Alternate investment planning</li>
                      <li>• Offshore investment compliance</li>
                      <li>• Charitable giving tax benefits</li>
                      <li>• Succession planning strategies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Tax Saving Sections */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <DollarSign className="w-8 h-8 text-yellow-400" />
                <h2 className="text-3xl font-bold text-white">Popular Tax Saving Sections</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-yellow-400">💳 Deduction Sections</h3>
                  <div className="space-y-3">
                    <div className="bg-green-600/10 p-3 rounded border border-green-500/20">
                      <h4 className="font-medium text-white mb-1">Section 80C (₹1.5L limit)</h4>
                      <p className="text-sm text-gray-300">PPF, ELSS, Life Insurance, EPF, NSC, Tax Saver FD</p>
                    </div>
                    <div className="bg-blue-600/10 p-3 rounded border border-blue-500/20">
                      <h4 className="font-medium text-white mb-1">Section 80D (₹75K limit)</h4>
                      <p className="text-sm text-gray-300">Health Insurance premiums for self and family</p>
                    </div>
                    <div className="bg-purple-600/10 p-3 rounded border border-purple-500/20">
                      <h4 className="font-medium text-white mb-1">Section 24(b) (₹2L limit)</h4>
                      <p className="text-sm text-gray-300">Home loan interest deduction</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">🏠 Additional Deductions</h3>
                  <div className="space-y-3">
                    <div className="bg-orange-600/10 p-3 rounded border border-orange-500/20">
                      <h4 className="font-medium text-white mb-1">Section 80CCD(1B) (₹50K)</h4>
                      <p className="text-sm text-gray-300">NPS additional deduction over 80C</p>
                    </div>
                    <div className="bg-red-600/10 p-3 rounded border border-red-500/20">
                      <h4 className="font-medium text-white mb-1">Section 80EE (₹50K)</h4>
                      <p className="text-sm text-gray-300">First-time home buyer interest deduction</p>
                    </div>
                    <div className="bg-teal-600/10 p-3 rounded border border-teal-500/20">
                      <h4 className="font-medium text-white mb-1">Section 80E (No limit)</h4>
                      <p className="text-sm text-gray-300">Education loan interest deduction</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Planning Timeline */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Clock className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Tax Planning Timeline</h2>
              </div>
              
              <div className="space-y-4">
                <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20 flex items-start gap-4">
                  <div className="w-24 text-center bg-green-600 text-white px-3 py-2 rounded font-semibold text-sm">Apr-Jun</div>
                  <div>
                    <h4 className="font-medium text-white mb-2">Financial Year Start Planning</h4>
                    <p className="text-sm text-gray-300">Set annual tax saving goals, review investment portfolio, plan major purchases</p>
                  </div>
                </div>
                
                <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20 flex items-start gap-4">
                  <div className="w-24 text-center bg-blue-600 text-white px-3 py-2 rounded font-semibold text-sm">Jul-Sep</div>
                  <div>
                    <h4 className="font-medium text-white mb-2">Mid-Year Review</h4>
                    <p className="text-sm text-gray-300">Assess tax saving progress, adjust investment strategies, advance tax planning</p>
                  </div>
                </div>
                
                <div className="bg-orange-500/10 p-4 rounded-lg border border-orange-500/20 flex items-start gap-4">
                  <div className="w-24 text-center bg-orange-600 text-white px-3 py-2 rounded font-semibold text-sm">Oct-Dec</div>
                  <div>
                    <h4 className="font-medium text-white mb-2">Year-End Planning</h4>
                    <p className="text-sm text-gray-300">Final tax saving investments, bonus planning, capital gains harvesting</p>
                  </div>
                </div>
                
                <div className="bg-red-500/10 p-4 rounded-lg border border-red-500/20 flex items-start gap-4">
                  <div className="w-24 text-center bg-red-600 text-white px-3 py-2 rounded font-semibold text-sm">Jan-Mar</div>
                  <div>
                    <h4 className="font-medium text-white mb-2">Final Quarter Actions</h4>
                    <p className="text-sm text-gray-300">Complete pending investments, prepare for ITR filing, plan next year strategy</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Get Started */}
            <section className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Start Your Tax Planning Journey</h2>
              <p className="text-xl mb-6 opacity-90">
                Professional tax planning services to maximize your savings and minimize your tax liability legally.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">Expert</div>
                  <div className="text-sm opacity-80">Guidance</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">Maximum</div>
                  <div className="text-sm opacity-80">Savings</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">Legal</div>
                  <div className="text-sm opacity-80">Compliance</div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Tax Planning Consultation</h3>
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
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Tax Planning Requirements
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Annual income, current investments, tax saving goals, business type (if applicable), planning timeline..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="file" className="block text-sm font-medium text-gray-300 mb-2">
                      Upload Financial Documents (Optional)
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
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Get Tax Planning Consultation
                  </button>
                </form>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span>Expert CAs</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 text-blue-400 mr-2" />
                      <span>Personalized Planning</span>
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