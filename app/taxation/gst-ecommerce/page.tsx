'use client';
import React, { useState } from 'react';
import { ShoppingCart, Globe, Shield, Users, CheckCircle, AlertCircle, Clock, Star, DollarSign, Upload } from 'lucide-react';

export default function GSTEcommercePage() {
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
            <ShoppingCart className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-white mb-6">
            GST Registration for E-commerce
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Specialized GST registration services for e-commerce operators and marketplace sellers. Expert guidance on compliance requirements, tax collection, and regulatory obligations.
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
                <h2 className="text-3xl font-bold text-white mb-6">E-commerce GST Registration Services</h2>
                <p className="text-gray-300 text-lg mb-6">
                  Navigate the complex world of e-commerce GST compliance with our specialized registration services. We handle both marketplace operators and sellers, ensuring full compliance with GST laws and e-commerce regulations.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-600/20 rounded-lg p-6">
                    <Globe className="w-8 h-8 text-blue-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Marketplace Compliance</h3>
                    <p className="text-gray-300">Complete registration and compliance for e-commerce marketplaces.</p>
                  </div>
                  <div className="bg-green-600/20 rounded-lg p-6">
                    <Shield className="w-8 h-8 text-green-400 mb-4" />
                    <h3 className="text-xl font-semibold text-white mb-2">Seller Registration</h3>
                    <p className="text-gray-300">GST registration for individual sellers on various platforms.</p>
                  </div>
                </div>
              </div>

              {/* E-commerce GST Categories */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-8 border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-6">E-commerce GST Registration Types</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-xl font-semibold text-white mb-2">E-commerce Operator (Marketplace)</h3>
                    <p className="text-gray-300">Mandatory registration for all e-commerce platforms facilitating sales, regardless of turnover threshold.</p>
                  </div>
                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-xl font-semibold text-white mb-2">E-commerce Seller (Individual/Business)</h3>
                    <p className="text-gray-300">Registration for businesses selling through e-commerce platforms with turnover above ₹20 lakhs.</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold text-white mb-2">Inter-state E-commerce Seller</h3>
                    <p className="text-gray-300">Mandatory registration for sellers making inter-state supplies, regardless of turnover.</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-6">
                    <h3 className="text-xl font-semibold text-white mb-2">Casual Taxable Person</h3>
                    <p className="text-gray-300">Temporary registration for occasional sellers during festive seasons or special events.</p>
                  </div>
                </div>
              </div>

              {/* Registration Process */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-8 border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-6">E-commerce GST Registration Process</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold flex-shrink-0">1</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Business Structure Analysis</h3>
                      <p className="text-gray-300">Evaluation of your e-commerce business model to determine appropriate registration type.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold flex-shrink-0">2</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Document Preparation</h3>
                      <p className="text-gray-300">Collection and verification of required documents specific to e-commerce operations.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold flex-shrink-0">3</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Platform Integration Setup</h3>
                      <p className="text-gray-300">Configuration for integration with major e-commerce platforms and marketplaces.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold flex-shrink-0">4</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Online Application Filing</h3>
                      <p className="text-gray-300">Submission of GST registration application with e-commerce specific details.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-semibold flex-shrink-0">5</div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">Compliance Framework Setup</h3>
                      <p className="text-gray-300">Implementation of TCS collection system and return filing procedures.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Required Documents */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-8 border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-6">Required Documents</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Business Documents</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        PAN Card of business/proprietor
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        Business registration certificate
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        Partnership deed/MOA & AOA
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        Digital signature certificate
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Address Proof</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        Business premises NOC
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        Rental agreement/ownership deed
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        Electricity bill (latest)
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        Property tax receipt
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">E-commerce Specific</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        Website/app development details
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        Platform partnership agreements
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        Payment gateway integration
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        Logistics partner agreements
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Bank & Financial</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        Bank account statements
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        Payment processor agreements
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        Cancelled cheque/bank letter
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        Projected turnover estimates
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* E-commerce GST Compliance */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-8 border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-6">E-commerce GST Compliance Requirements</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Marketplace Operator Obligations</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300">TCS collection on supplier payments</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300">Monthly TCS return filing</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300">Supplier GST verification</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300">Transaction record maintenance</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">Seller Compliance</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300">Regular GST return filing</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300">Invoice generation system</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300">Input tax credit management</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300">Platform integration compliance</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 mb-8 border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our E-commerce GST Service?</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                      <span className="text-gray-300">E-commerce expertise</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                      <span className="text-gray-300">Platform integration support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                      <span className="text-gray-300">TCS compliance setup</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                      <span className="text-gray-300">Automated return filing</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                      <span className="text-gray-300">Multi-state registration</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                      <span className="text-gray-300">Ongoing compliance support</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                      <span className="text-gray-300">Marketplace onboarding</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-400" />
                      <span className="text-gray-300">Technology integration</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold text-white mb-6">Get E-commerce GST Registration</h2>
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
                      Upload Business Documents
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
                        PAN, business registration, address proof, bank documents
                      </p>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Business Details & Requirements
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Describe your e-commerce business model, platforms, and specific requirements..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
                  >
                    Get E-commerce GST Registration
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
                    <span className="text-gray-300 text-sm">Processing: 7-10 business days</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-300 text-sm">E-commerce specialists</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300 text-sm">100% compliance assured</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300 text-sm">Dedicated account manager</span>
                  </div>
                </div>
              </div>



              {/* Important Notes */}
              <div className="bg-orange-600/20 backdrop-blur-lg rounded-xl p-6 border border-orange-500/20">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-orange-400" />
                  Important Notes
                </h3>
                <div className="space-y-3">
                  <div className="text-sm">
                    <p className="text-orange-300 font-semibold">Mandatory Registration</p>
                    <p className="text-gray-300">All e-commerce operators must register regardless of turnover</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-orange-300 font-semibold">TCS Compliance</p>
                    <p className="text-gray-300">1% TCS collection on supplier payments above ₹500 per day</p>
                  </div>
                  <div className="text-sm">
                    <p className="text-orange-300 font-semibold">Inter-state Sales</p>
                    <p className="text-gray-300">Mandatory registration for any inter-state supply</p>
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