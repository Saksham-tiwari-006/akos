'use client'

import React, { useState } from 'react';
import { Truck, FileText, CheckCircle, Clock, Shield, Building, DollarSign, Route } from 'lucide-react';

export default function EWayBillPage() {
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 rounded-full mb-6">
              <Truck className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              E-Way Bill Registration
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Complete E-Way Bill registration, generation, and compliance services for smooth goods transportation and GST compliance.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Understanding E-Way Bill */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Truck className="w-8 h-8 text-orange-400" />
                <h2 className="text-3xl font-bold text-white">Understanding E-Way Bill</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6">
                  E-Way Bill is an electronic document generated on the E-Way Bill portal for movement of goods worth more than ₹50,000 (inter-state) or as per state rules (intra-state). It contains details of goods being transported, including consignor, consignee, transporter information, and goods description. E-Way Bill ensures smooth movement of goods while maintaining GST compliance and helps tax authorities track goods movement across states.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-orange-600/10 to-red-600/10 p-6 rounded-lg border border-orange-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Route className="w-5 h-5" />
                      E-Way Bill Requirements
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>Inter-state:</strong> Goods value &gt; ₹50,000</li>
                      <li>• <strong>Intra-state:</strong> As per state notifications</li>
                      <li>• <strong>Job work:</strong> Regardless of value</li>
                      <li>• <strong>Returns/Exchanges:</strong> When applicable</li>
                      <li>• <strong>Transport by owner:</strong> Above threshold</li>
                      <li>• <strong>Handicraft goods:</strong> Value &gt; ₹1,00,000</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-6 rounded-lg border border-blue-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <FileText className="w-5 h-5" />
                      Key Information
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>12-digit EWB Number:</strong> Unique identifier</li>
                      <li>• <strong>Validity Period:</strong> Based on distance traveled</li>
                      <li>• <strong>Part-A:</strong> Invoice details (by supplier)</li>
                      <li>• <strong>Part-B:</strong> Transporter details</li>
                      <li>• <strong>Vehicle Update:</strong> Change during transit</li>
                      <li>• <strong>Cancellation:</strong> Within 24 hours</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* E-Way Bill Process */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">E-Way Bill Generation Process</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-blue-400">🔐 Registration & Setup</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Complete E-Way Bill portal registration and user setup for seamless bill generation.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• GST registration verification and validation</li>
                        <li>• E-Way Bill portal user registration</li>
                        <li>• Sub-user creation for multiple operators</li>
                        <li>• API access setup for system integration</li>
                        <li>• Digital signature configuration</li>
                        <li>• Master data setup (vehicles, transporters)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-green-400">📄 Bill Generation</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Systematic E-Way Bill generation with complete document details and compliance.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Invoice details entry and verification</li>
                        <li>• Goods description with HSN/SAC codes</li>
                        <li>• Consignor and consignee GSTIN validation</li>
                        <li>• Transportation details and vehicle number</li>
                        <li>• Distance calculation and validity determination</li>
                        <li>• E-Way Bill number generation and printing</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-purple-400">🚛 Transportation Management</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Complete transportation workflow management with real-time tracking and updates.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Vehicle assignment and driver details</li>
                        <li>• Multi-vehicle shipment handling</li>
                        <li>• Transshipment and vehicle updates</li>
                        <li>• GPS-based movement tracking</li>
                        <li>• Delivery confirmation and closure</li>
                        <li>• Route optimization and compliance</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-yellow-400">📊 Compliance & Reporting</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Ongoing compliance monitoring and comprehensive reporting for audit purposes.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Monthly E-Way Bill summary reports</li>
                        <li>• Validity expiry alerts and notifications</li>
                        <li>• Cancellation and rejection management</li>
                        <li>• Audit trail and document archiving</li>
                        <li>• Integration with GSTR-1 and E-Invoice</li>
                        <li>• Compliance dashboard and analytics</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* E-Way Bill Types */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Building className="w-8 h-8 text-purple-400" />
                <h2 className="text-3xl font-bold text-white">Types of E-Way Bills</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-purple-400">📋 Based on Transaction Type</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-white mb-2">Regular Sales:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• B2B supply to registered dealers</li>
                        <li>• B2C supply above threshold</li>
                        <li>• Export and SEZ supplies</li>
                        <li>• Deemed exports</li>
                        <li>• Supply to unregistered persons</li>
                        <li>• Stock transfer between branches</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Special Cases:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Job work movement</li>
                        <li>• Returns and replacements</li>
                        <li>• Exhibition or fair supplies</li>
                        <li>• Inward supply from unregistered</li>
                        <li>• Bill of entry for imports</li>
                        <li>• Delivery challan movements</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">🚚 Based on Transportation</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-white mb-2">Own Conveyance:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Own vehicle transportation</li>
                        <li>• Company-owned fleet</li>
                        <li>• Employee vehicle usage</li>
                        <li>• Leased vehicle transportation</li>
                        <li>• Contract vehicle arrangements</li>
                        <li>• Two-wheeler and small vehicle</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Hired Transporter:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Registered transporter services</li>
                        <li>• Goods transport agency</li>
                        <li>• Multi-modal transportation</li>
                        <li>• Rail and air cargo</li>
                        <li>• Ship and vessel transport</li>
                        <li>• Courier and express delivery</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Validity Rules */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Clock className="w-8 h-8 text-red-400" />
                <h2 className="text-3xl font-bold text-white">E-Way Bill Validity Rules</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Validity Calculation
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>First 100 KM:</strong> 1 day validity</li>
                    <li>• <strong>Additional distance:</strong> 1 day per 300 KM</li>
                    <li>• <strong>Over-dimensional cargo:</strong> 1 day per 20 KM</li>
                    <li>• <strong>Minimum validity:</strong> 1 day from generation</li>
                    <li>• <strong>Extension:</strong> Before expiry by transporter</li>
                    <li>• <strong>Maximum extension:</strong> 8 times the original</li>
                  </ul>
                </div>
                
                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-orange-400 flex items-center gap-2">
                    <Route className="w-5 h-5" />
                    Distance Examples
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Up to 100 KM:</strong> 1 day validity</li>
                    <li>• <strong>300 KM distance:</strong> 1 day validity</li>
                    <li>• <strong>500 KM distance:</strong> 2 days validity</li>
                    <li>• <strong>1000 KM distance:</strong> 3 days validity</li>
                    <li>• <strong>1500 KM distance:</strong> 4 days validity</li>
                    <li>• <strong>Above 1500 KM:</strong> Additional days calculated</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Service Fees */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <DollarSign className="w-8 h-8 text-yellow-400" />
                <h2 className="text-3xl font-bold text-white">E-Way Bill Service Fees</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-yellow-400">💰 Service Packages</h3>
                  <div className="space-y-4">
                    <div className="bg-green-600/10 p-4 rounded border border-green-500/20">
                      <h4 className="font-medium text-white mb-2">Basic Package:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Registration and setup</li>
                        <li>• Up to 100 bills/month</li>
                        <li>• Basic support</li>
                        <li>• <strong>Fee: ₹3,000-₹8,000/month</strong></li>
                      </ul>
                    </div>
                    <div className="bg-blue-600/10 p-4 rounded border border-blue-500/20">
                      <h4 className="font-medium text-white mb-2">Premium Package:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Unlimited bill generation</li>
                        <li>• API integration</li>
                        <li>• Priority support</li>
                        <li>• <strong>Fee: ₹8,000-₹20,000/month</strong></li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">🔧 Additional Services</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>One-time Setup:</strong> ₹5,000-₹15,000</li>
                    <li>• <strong>API Integration:</strong> ₹25,000-₹75,000</li>
                    <li>• <strong>Per Bill Charges:</strong> ₹2-₹5 per E-Way Bill</li>
                    <li>• <strong>Training & Support:</strong> ₹10,000-₹25,000</li>
                    <li>• <strong>Bulk Upload Setup:</strong> ₹15,000-₹35,000</li>
                    <li>• <strong>Compliance Audit:</strong> ₹25,000-₹50,000</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Benefits */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <CheckCircle className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">E-Way Bill Benefits</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Business Benefits
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Smooth Transportation:</strong> No border check delays</li>
                    <li>• <strong>Reduced Paperwork:</strong> Digital documentation</li>
                    <li>• <strong>Faster Delivery:</strong> Streamlined logistics</li>
                    <li>• <strong>Cost Savings:</strong> Reduced administrative costs</li>
                    <li>• <strong>Real-time Tracking:</strong> Shipment visibility</li>
                    <li>• <strong>Customer Satisfaction:</strong> Timely deliveries</li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Compliance Benefits
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>GST Compliance:</strong> Mandatory requirement fulfillment</li>
                    <li>• <strong>Audit Trail:</strong> Complete movement history</li>
                    <li>• <strong>Tax Transparency:</strong> Clear tax documentation</li>
                    <li>• <strong>Penalty Avoidance:</strong> Compliance with regulations</li>
                    <li>• <strong>Legal Protection:</strong> Valid transportation documents</li>
                    <li>• <strong>Government Integration:</strong> Seamless data sharing</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Get Started */}
            <section className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Start E-Way Bill Registration</h2>
              <p className="text-xl mb-6 opacity-90">
                Complete E-Way Bill setup and generation services for seamless goods transportation and GST compliance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">Digital</div>
                  <div className="text-sm opacity-80">Documentation</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">Real-time</div>
                  <div className="text-sm opacity-80">Tracking</div>
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
                <h3 className="text-2xl font-bold text-white mb-6">E-Way Bill Registration</h3>
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
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      E-Way Bill Requirements
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Business type, monthly shipment volume, transportation mode, states covered, current compliance status, integration needs..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="file" className="block text-sm font-medium text-gray-300 mb-2">
                      Upload Business Documents (Optional)
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
                    className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Get E-Way Bill Setup
                  </button>
                </form>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span>Expert Support</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 text-blue-400 mr-2" />
                      <span>Quick Setup</span>
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