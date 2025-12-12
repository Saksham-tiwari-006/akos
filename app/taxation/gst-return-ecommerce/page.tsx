'use client';
import React, { useState } from 'react';
import { FileSpreadsheet, ShoppingCart, Shield, Users, CheckCircle, AlertCircle, Clock, Star, DollarSign, Upload } from 'lucide-react';

export default function GSTReturnEcommercePage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    file: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFormData(prev => ({
        ...prev,
        file: e.target.files![0]
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-full mb-6">
            <FileSpreadsheet className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            GST Return Filing for E-commerce
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Specialized GST return filing services for e-commerce businesses. Expert handling of marketplace transactions, TCS returns, and complex e-commerce compliance requirements.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Overview */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-8 border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-6">E-commerce GST Return Filing Service</h2>
                <p className="text-gray-300 text-lg mb-6">
                  Navigate the complexities of e-commerce GST compliance with our specialized return filing service. We handle marketplace transactions, TCS reconciliation, and multi-platform sales reporting with precision and expertise.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-600/20 rounded-lg p-6">
                    <ShoppingCart className="w-8 h-8 text-blue-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Marketplace Integration</h3>
                    <p className="text-gray-300">Seamless integration with major e-commerce platforms for accurate reporting.</p>
                  </div>
                  <div className="bg-green-600/20 rounded-lg p-6">
                    <Shield className="w-8 h-8 text-green-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">TCS Compliance</h3>
                    <p className="text-gray-300">Expert handling of TCS collection, reconciliation, and return filing.</p>
                  </div>
                </div>
              </div>

              {/* E-commerce Return Types */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-8 border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-6">E-commerce GST Return Types</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-xl font-semibold text-white mb-2">GSTR-1 (Outward Supplies)</h3>
                    <p className="text-gray-300">Monthly/quarterly reporting of all sales made through e-commerce platforms with proper marketplace categorization.</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-xl font-semibold text-white mb-2">GSTR-3B (Summary Return)</h3>
                    <p className="text-gray-300">Monthly summary return with e-commerce specific reconciliation and TCS adjustment entries.</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold text-white mb-2">GSTR-8 (E-commerce Operator Return)</h3>
                    <p className="text-gray-300">Monthly return for marketplace operators showing supplies facilitated and TCS collected.</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-6">
                    <h3 className="text-xl font-semibold text-white mb-2">GSTR-2A/2B (Input Tax Credit)</h3>
                    <p className="text-gray-300">Auto-populated purchase returns for claiming input tax credit on business expenses and inventory.</p>
                  </div>
                </div>
              </div>

              {/* Filing Process */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-8 border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-6">E-commerce Return Filing Process</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Platform Data Extraction</h3>
                      <p className="text-gray-300">Automated extraction of sales data from multiple e-commerce platforms and marketplaces.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold flex-shrink-0">2</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">TCS Reconciliation</h3>
                      <p className="text-gray-300">Matching of TCS collected by marketplace operators with your sales transactions.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold flex-shrink-0">3</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Multi-Platform Consolidation</h3>
                      <p className="text-gray-300">Consolidation of data from various platforms for comprehensive return preparation.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold flex-shrink-0">4</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Return Preparation & Review</h3>
                      <p className="text-gray-300">Accurate preparation of all applicable returns with thorough review and validation.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold flex-shrink-0">5</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Online Filing & Payment</h3>
                      <p className="text-gray-300">Timely e-filing of returns and facilitation of tax payment through GST portal.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Required Data & Documents */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-8 border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-6">Required Data & Documents</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Sales Data</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        Platform-wise sales reports
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        Order-wise transaction details
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        Product-wise GST rate classification
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        Customer location data (SGST/IGST)
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">TCS Information</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        TCS certificates from platforms
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        Platform-wise TCS statements
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        Monthly TCS collection details
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        GSTR-8 data from operators
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Purchase Records</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        Supplier invoices with GST
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        Inventory purchase records
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        Business expense receipts
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        Import/export documentation
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Financial Records</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        Bank statements (all accounts)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        Payment gateway statements
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        Cash flow reconciliation
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        Previous return acknowledgments
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* E-commerce Specific Challenges */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-8 border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-6">E-commerce GST Challenges We Handle</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Complex Transactions</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300">Multi-state sales reconciliation</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300">Returns and refund adjustments</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300">Promotional discount treatments</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300">Shipping and handling charges</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Platform Compliance</h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300">Multiple platform data integration</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300">TCS credit utilization</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300">Place of supply determination</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300">B2B vs B2C classification</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-8 border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our E-commerce Return Service?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                      <span className="text-gray-300">E-commerce expertise</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                      <span className="text-gray-300">Automated data processing</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                      <span className="text-gray-300">TCS optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                      <span className="text-gray-300">Multi-platform integration</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                      <span className="text-gray-300">Timely compliance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                      <span className="text-gray-300">Maximum ITC recovery</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                      <span className="text-gray-300">Penalty avoidance</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                      <span className="text-gray-300">Ongoing support</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-6">Get E-commerce GST Return Service</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Business Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your business name"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Contact Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your contact number"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Upload E-commerce Data
                    </label>
                    <div className="border-2 border-dashed border-white/20 rounded-lg p-6 text-center">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <input
                        type="file"
                        onChange={handleFileChange}
                        className="hidden"
                        id="file-upload"
                        multiple
                      />
                      <label
                        htmlFor="file-upload"
                        className="cursor-pointer text-blue-400 hover:text-blue-300"
                      >
                        Click to upload your documents
                      </label>
                      <p className="text-sm text-gray-400 mt-1">
                        Sales reports, TCS certificates, purchase invoices
                      </p>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Platform Details & Requirements
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="List your selling platforms (Amazon, Flipkart, etc.) and specific requirements..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
                  >
                    Get E-commerce Return Filing Service
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Quick Facts */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 mb-6 border border-white/20">
                <h3 className="text-xl font-bold text-white mb-4">Quick Facts</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-300 text-sm">Processing: 3-5 business days</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-300 text-sm">E-commerce specialists</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300 text-sm">100% accuracy guaranteed</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300 text-sm">Dedicated support team</span>
                  </div>
                </div>
              </div>

              {/* Filing Calendar */}
              <div className="bg-blue-600/20 backdrop-blur-lg rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-blue-400" />
                  Filing Calendar
                </h3>
                <div className="space-y-3">
                  <div className="text-sm">
                    <p className="text-blue-300 font-semibold">GSTR-1: 11th of next month</p>
                    <p className="text-gray-300">Outward supply details</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-blue-300 font-semibold">GSTR-3B: 20th of next month</p>
                    <p className="text-gray-300">Summary return & payment</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-blue-300 font-semibold">GSTR-8: 10th of next month</p>
                    <p className="text-gray-300">E-commerce operator return</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}