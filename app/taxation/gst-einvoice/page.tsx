'use client'

import React, { useState } from 'react';
import { Receipt, FileText, CheckCircle, Clock, Shield, Building, DollarSign, Zap } from 'lucide-react';

export default function GSTEInvoicePage() {
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
              <Receipt className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              GST E-Invoice
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Complete GST E-Invoice implementation, IRN generation, and QR code compliance services for seamless digital invoicing.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Understanding E-Invoice */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Receipt className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">What is GST E-Invoice?</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6">
                  GST E-Invoice is a digitally signed electronic invoice generated through the Invoice Registration Portal (IRP) that ensures invoice authenticity and standardization. Every B2B invoice gets a unique Invoice Reference Number (IRN) and QR code, creating a centralized invoice management system. E-invoicing is mandatory for businesses with turnover exceeding prescribed thresholds and helps in real-time reporting, input tax credit matching, and fraud prevention.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-6 rounded-lg border border-blue-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Zap className="w-5 h-5" />
                      E-Invoice Features
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>Digital Signature:</strong> Cryptographically signed invoices</li>
                      <li>• <strong>IRN Generation:</strong> Unique 64-character identifier</li>
                      <li>• <strong>QR Code:</strong> Scannable code for verification</li>
                      <li>• <strong>Real-time Validation:</strong> Instant GSTIN verification</li>
                      <li>• <strong>Auto-population:</strong> Direct data to GSTR-1</li>
                      <li>• <strong>Standardization:</strong> Common JSON format</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 p-6 rounded-lg border border-green-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      Applicability Criteria
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>Turnover ≥ ₹10 Crore:</strong> Mandatory from Oct 2020</li>
                      <li>• <strong>Turnover ≥ ₹5 Crore:</strong> Mandatory from Jan 2021</li>
                      <li>• <strong>B2B Transactions:</strong> All business-to-business sales</li>
                      <li>• <strong>Export Invoices:</strong> All export transactions</li>
                      <li>• <strong>Special Categories:</strong> SEZ, deemed exports</li>
                      <li>• <strong>Exemptions:</strong> B2C, composition dealers</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* E-Invoice Implementation */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">E-Invoice Implementation Process</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-blue-400">🔧 System Setup & Configuration</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Complete technical setup and integration for E-Invoice generation and management.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• ERP/Accounting software integration</li>
                        <li>• IRP portal registration and setup</li>
                        <li>• API integration for automated processing</li>
                        <li>• Digital signature certificate setup</li>
                        <li>• User access and authorization configuration</li>
                        <li>• Testing and validation environment setup</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-green-400">📄 Invoice Format Standardization</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Invoice format conversion and standardization as per E-Invoice schema requirements.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• JSON schema compliance validation</li>
                        <li>• Mandatory field mapping and verification</li>
                        <li>• Invoice template customization</li>
                        <li>• Tax calculation and GST compliance</li>
                        <li>• Multi-currency invoice handling</li>
                        <li>• Document type classification setup</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-purple-400">🌐 IRN Generation & Processing</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Complete IRN generation process with real-time validation and QR code creation.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Real-time IRN generation through IRP</li>
                        <li>• Digital signature application</li>
                        <li>• QR code generation and embedding</li>
                        <li>• Invoice authentication and validation</li>
                        <li>• Error handling and resolution</li>
                        <li>• IRN cancellation process (if required)</li>
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
                        Ongoing compliance management and automated reporting for E-Invoice transactions.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Auto-population of GSTR-1 from E-Invoice</li>
                        <li>• E-way bill integration and generation</li>
                        <li>• Compliance monitoring and alerts</li>
                        <li>• Monthly reporting and reconciliation</li>
                        <li>• Audit trail maintenance</li>
                        <li>• Regular system updates and maintenance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* E-Invoice Benefits */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <CheckCircle className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">E-Invoice Benefits</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Business Benefits
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Fraud Prevention:</strong> Authenticated digital invoices</li>
                    <li>• <strong>Process Automation:</strong> Reduced manual intervention</li>
                    <li>• <strong>Real-time Validation:</strong> Instant GSTIN verification</li>
                    <li>• <strong>Faster Payments:</strong> Improved cash flow management</li>
                    <li>• <strong>Reduced Errors:</strong> Standardized format compliance</li>
                    <li>• <strong>Cost Savings:</strong> Paperless invoice processing</li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Compliance Benefits
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Auto GSTR-1:</strong> Direct population from E-Invoice</li>
                    <li>• <strong>ITC Matching:</strong> Seamless input credit verification</li>
                    <li>• <strong>E-way Bill:</strong> Integrated logistics compliance</li>
                    <li>• <strong>Audit Trail:</strong> Complete transaction history</li>
                    <li>• <strong>Government Reporting:</strong> Real-time tax authority updates</li>
                    <li>• <strong>Dispute Resolution:</strong> Clear documentation for disputes</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Technical Specifications */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Building className="w-8 h-8 text-purple-400" />
                <h2 className="text-3xl font-bold text-white">Technical Specifications</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-purple-400">📋 Mandatory Fields</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Document number and date</li>
                      <li>• Supplier and buyer GSTIN</li>
                      <li>• Place of supply and delivery</li>
                      <li>• Item description and HSN code</li>
                      <li>• Quantity and unit of measurement</li>
                      <li>• Taxable value and tax amounts</li>
                    </ul>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Total invoice value</li>
                      <li>• Payment terms (if applicable)</li>
                      <li>• Shipping details (for goods)</li>
                      <li>• Cess details (if applicable)</li>
                      <li>• Document type and category</li>
                      <li>• Reverse charge indicator</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">🔌 Integration Options</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>API Integration:</strong> Direct system-to-system</li>
                      <li>• <strong>Web Interface:</strong> Manual upload through portal</li>
                      <li>• <strong>Bulk Upload:</strong> JSON file batch processing</li>
                      <li>• <strong>ERP Integration:</strong> SAP, Oracle, Tally integration</li>
                    </ul>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>Cloud Solutions:</strong> SaaS-based E-Invoice platforms</li>
                      <li>• <strong>Mobile Apps:</strong> On-the-go invoice generation</li>
                      <li>• <strong>Third-party GSPs:</strong> GST Suvidha Provider integration</li>
                      <li>• <strong>Custom Development:</strong> Tailored integration solutions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Service Fees */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <DollarSign className="w-8 h-8 text-yellow-400" />
                <h2 className="text-3xl font-bold text-white">E-Invoice Service Fees</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-yellow-400">💰 Implementation Fees</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Basic Setup:</strong> ₹25,000-₹50,000</li>
                    <li>• <strong>ERP Integration:</strong> ₹50,000-₹2,00,000</li>
                    <li>• <strong>API Development:</strong> ₹75,000-₹3,00,000</li>
                    <li>• <strong>Custom Solutions:</strong> ₹1,00,000-₹5,00,000</li>
                    <li>• <strong>Training & Support:</strong> ₹10,000-₹50,000</li>
                    <li>• <strong>Testing & Go-live:</strong> ₹15,000-₹75,000</li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">🔄 Monthly Maintenance</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Basic Support:</strong> ₹5,000-₹15,000/month</li>
                    <li>• <strong>Advanced Monitoring:</strong> ₹10,000-₹25,000/month</li>
                    <li>• <strong>24x7 Support:</strong> ₹15,000-₹40,000/month</li>
                    <li>• <strong>Per Invoice Charges:</strong> ₹0.50-₹2.00 per invoice</li>
                    <li>• <strong>Compliance Updates:</strong> ₹5,000-₹20,000/month</li>
                    <li>• <strong>Reporting Services:</strong> ₹3,000-₹15,000/month</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Get Started */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Implement E-Invoice Today</h2>
              <p className="text-xl mb-6 opacity-90">
                Complete E-Invoice setup and integration services for seamless GST compliance and digital transformation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">Digital</div>
                  <div className="text-sm opacity-80">Authentication</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">Real-time</div>
                  <div className="text-sm opacity-80">Processing</div>
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
                <h3 className="text-2xl font-bold text-white mb-6">E-Invoice Implementation</h3>
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
                      E-Invoice Requirements
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Business turnover, current invoicing system, ERP software used, monthly invoice volume, integration requirements..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="file" className="block text-sm font-medium text-gray-300 mb-2">
                      Upload System Details (Optional)
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
                    Get E-Invoice Setup
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
                      <span>Secure Integration</span>
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