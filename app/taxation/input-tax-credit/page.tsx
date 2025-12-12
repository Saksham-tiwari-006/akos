'use client'

import React, { useState } from 'react';
import { CreditCard, Calculator, CheckCircle, Clock, Shield, Building, DollarSign, RefreshCw } from 'lucide-react';

export default function InputTaxCreditPage() {
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-600 rounded-full mb-6">
              <CreditCard className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Input Tax Credit (ITC)
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Maximize your Input Tax Credit benefits with expert ITC reconciliation, matching, and optimization services for enhanced cash flow.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Understanding ITC */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <CreditCard className="w-8 h-8 text-teal-400" />
                <h2 className="text-3xl font-bold text-white">Understanding Input Tax Credit</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6">
                  Input Tax Credit (ITC) is the GST paid on purchases that can be set off against the GST liability on sales, effectively reducing your overall tax burden. ITC is available on goods and services purchased for business use, allowing businesses to claim credit for taxes paid on inputs, input services, and capital goods. Proper ITC management ensures maximum credit utilization, improved cash flow, and reduced working capital requirements while maintaining complete GST compliance.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-teal-600/10 to-blue-600/10 p-6 rounded-lg border border-teal-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Calculator className="w-5 h-5" />
                      ITC Eligibility
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>Registered Taxpayer:</strong> Valid GST registration required</li>
                      <li>• <strong>Tax Invoice:</strong> Valid tax invoice possession</li>
                      <li>• <strong>Goods Receipt:</strong> Actual receipt of goods/services</li>
                      <li>• <strong>Tax Payment:</strong> Supplier has paid tax to government</li>
                      <li>• <strong>Return Filing:</strong> Supplier filed GST returns</li>
                      <li>• <strong>Business Use:</strong> Used for business purposes only</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-6 rounded-lg border border-blue-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <RefreshCw className="w-5 h-5" />
                      ITC Restrictions
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>Personal Use:</strong> Goods/services for personal consumption</li>
                      <li>• <strong>Motor Vehicles:</strong> Except specified business purposes</li>
                      <li>• <strong>Food & Beverages:</strong> Employee welfare (except business trips)</li>
                      <li>• <strong>Club Membership:</strong> Health, fitness, and recreation</li>
                      <li>• <strong>Rent-a-cab/Life Insurance:</strong> Employee benefits</li>
                      <li>• <strong>GTA Services:</strong> On transportation of goods</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* ITC Management Process */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Calculator className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">ITC Management & Optimization</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-blue-400">📊 ITC Reconciliation & Matching</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Systematic reconciliation and matching of ITC claims with supplier returns and government records.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• GSTR-2A/2B auto-population analysis</li>
                        <li>• Purchase invoice vs GSTR-2A matching</li>
                        <li>• Supplier return filing status verification</li>
                        <li>• Mismatched invoice identification and resolution</li>
                        <li>• ITC reversal calculation for non-available credit</li>
                        <li>• Monthly reconciliation reports and dashboards</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-green-400">🔍 ITC Optimization Strategies</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Strategic ITC optimization to maximize credit utilization and minimize cash flow impact.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• ITC vs cash discount analysis</li>
                        <li>• Vendor GST registration verification</li>
                        <li>• Purchase timing optimization for ITC benefits</li>
                        <li>• Capital goods ITC planning and utilization</li>
                        <li>• Input service distributor (ISD) optimization</li>
                        <li>• Cross-charge and inter-company ITC planning</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-purple-400">⚠️ ITC Compliance Management</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Complete compliance management to avoid ITC reversals, interest, and penalties.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Rule 36(4) compliance for blocked credits</li>
                        <li>• Rule 42 & 43 reversal calculations</li>
                        <li>• Time limit compliance for ITC claims</li>
                        <li>• ITC reversal in case of bad debts</li>
                        <li>• Export and deemed export ITC handling</li>
                        <li>• Annual reconciliation and adjustments</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-yellow-400">📈 ITC Monitoring & Reporting</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Continuous monitoring and comprehensive reporting for effective ITC management.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Real-time ITC availability tracking</li>
                        <li>• Monthly ITC utilization reports</li>
                        <li>• ITC aging analysis and action plans</li>
                        <li>• Supplier-wise ITC performance analytics</li>
                        <li>• ITC forecasting and cash flow planning</li>
                        <li>• Compliance dashboard and alerts</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ITC Categories */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Building className="w-8 h-8 text-purple-400" />
                <h2 className="text-3xl font-bold text-white">Types of Input Tax Credit</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-purple-400">🏭 Input Tax Credit Categories</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-white mb-2">Inputs:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Raw materials</li>
                        <li>• Components and parts</li>
                        <li>• Consumables</li>
                        <li>• Packing materials</li>
                        <li>• Fuel and power</li>
                        <li>• Other inputs used in production</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Input Services:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Professional services</li>
                        <li>• Consulting and advisory</li>
                        <li>• Rent and utilities</li>
                        <li>• Repairs and maintenance</li>
                        <li>• Transportation services</li>
                        <li>• Insurance and finance</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Capital Goods:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Plant and machinery</li>
                        <li>• Office equipment</li>
                        <li>• Furniture and fixtures</li>
                        <li>• Computer systems</li>
                        <li>• Vehicles (eligible)</li>
                        <li>• Building materials</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">🚫 Blocked ITC Items</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-white mb-2">Completely Blocked:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Motor vehicles for personal use</li>
                        <li>• Food, beverages for employee consumption</li>
                        <li>• Outdoor catering services</li>
                        <li>• Beauty treatment and health services</li>
                        <li>• Membership of clubs and fitness centers</li>
                        <li>• Rent-a-cab services</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Conditionally Blocked:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Works contract services (construction)</li>
                        <li>• Goods lost, stolen, destroyed, or gifted</li>
                        <li>• Personal consumption by employees</li>
                        <li>• Goods used for non-business purposes</li>
                        <li>• Services for personal consumption</li>
                        <li>• Input services on exempt supplies</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* ITC Rules & Compliance */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Shield className="w-8 h-8 text-red-400" />
                <h2 className="text-3xl font-bold text-white">ITC Rules & Time Limits</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    ITC Claiming Time Limits
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Normal Claim:</strong> Due date of GSTR-3B for September following FY</li>
                    <li>• <strong>Time Limit:</strong> Due date of annual return of FY or September 30 of next FY</li>
                    <li>• <strong>Amendment:</strong> GSTR-1 amendment by supplier required</li>
                    <li>• <strong>Capital Goods:</strong> Full ITC in month of receipt</li>
                    <li>• <strong>Works Contract:</strong> Progressive ITC as per completion</li>
                    <li>• <strong>Import Goods:</strong> Bill of Entry date consideration</li>
                  </ul>
                </div>
                
                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-orange-400 flex items-center gap-2">
                    <RefreshCw className="w-5 h-5" />
                    ITC Reversal Rules
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Rule 42:</strong> Common credit for exempt and taxable supplies</li>
                    <li>• <strong>Rule 43:</strong> Capital goods used for exempt supplies</li>
                    <li>• <strong>Bad Debts:</strong> ITC reversal when bad debt claimed</li>
                    <li>• <strong>Personal Use:</strong> Immediate reversal required</li>
                    <li>• <strong>Interest:</strong> 18% per annum on reversed amount</li>
                    <li>• <strong>Re-availment:</strong> When conditions are met again</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Service Fees */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <DollarSign className="w-8 h-8 text-yellow-400" />
                <h2 className="text-3xl font-bold text-white">ITC Management Service Fees</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-yellow-400">💰 Monthly Services</h3>
                  <div className="space-y-4">
                    <div className="bg-green-600/10 p-4 rounded border border-green-500/20">
                      <h4 className="font-medium text-white mb-2">Basic ITC Management:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Monthly ITC reconciliation</li>
                        <li>• GSTR-2A matching</li>
                        <li>• Basic compliance checks</li>
                        <li>• <strong>Fee: ₹5,000-₹15,000/month</strong></li>
                      </ul>
                    </div>
                    <div className="bg-blue-600/10 p-4 rounded border border-blue-500/20">
                      <h4 className="font-medium text-white mb-2">Advanced ITC Optimization:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Complete ITC optimization</li>
                        <li>• Advanced analytics and reporting</li>
                        <li>• Compliance management</li>
                        <li>• <strong>Fee: ₹15,000-₹40,000/month</strong></li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">🔧 One-time Services</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>ITC Audit & Health Check:</strong> ₹25,000-₹75,000</li>
                    <li>• <strong>Historical ITC Reconciliation:</strong> ₹15,000-₹50,000</li>
                    <li>• <strong>ITC Process Setup:</strong> ₹20,000-₹60,000</li>
                    <li>• <strong>Software Integration:</strong> ₹30,000-₹1,00,000</li>
                    <li>• <strong>ITC Recovery Services:</strong> ₹10,000-₹40,000</li>
                    <li>• <strong>Compliance Training:</strong> ₹15,000-₹35,000</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* ITC Benefits */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <CheckCircle className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">ITC Optimization Benefits</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Financial Benefits
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Reduced Tax Liability:</strong> Lower GST payment obligations</li>
                    <li>• <strong>Improved Cash Flow:</strong> Better working capital management</li>
                    <li>• <strong>Cost Optimization:</strong> Effective tax cost management</li>
                    <li>• <strong>Interest Savings:</strong> Avoid delayed payment interest</li>
                    <li>• <strong>Penalty Avoidance:</strong> Compliance with ITC rules</li>
                    <li>• <strong>Maximum Recovery:</strong> Claim all eligible credits</li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Operational Benefits
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Automated Reconciliation:</strong> Reduced manual effort</li>
                    <li>• <strong>Real-time Tracking:</strong> Live ITC availability status</li>
                    <li>• <strong>Compliance Assurance:</strong> Rule-based ITC management</li>
                    <li>• <strong>Error Reduction:</strong> Systematic validation processes</li>
                    <li>• <strong>Audit Readiness:</strong> Complete documentation trail</li>
                    <li>• <strong>Strategic Planning:</strong> Data-driven decision making</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Get Started */}
            <section className="bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Optimize Your Input Tax Credit</h2>
              <p className="text-xl mb-6 opacity-90">
                Expert ITC management and optimization services to maximize your GST benefits and improve cash flow.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">Maximum</div>
                  <div className="text-sm opacity-80">Credit Recovery</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">Real-time</div>
                  <div className="text-sm opacity-80">Monitoring</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm opacity-80">Compliance</div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">ITC Optimization</h3>
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
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      ITC Requirements
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Business turnover, monthly purchase value, current ITC utilization %, compliance issues, reconciliation needs, optimization goals..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="file" className="block text-sm font-medium text-gray-300 mb-2">
                      Upload Purchase Data (Optional)
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
                    className="w-full bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-teal-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Start ITC Optimization
                  </button>
                </form>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span>Expert Analysis</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 text-blue-400 mr-2" />
                      <span>Maximum Recovery</span>
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