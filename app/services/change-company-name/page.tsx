'use client'

import React, { useState } from 'react';
import { Building2, FileText, CheckCircle, AlertTriangle, Calendar, Shield, Scale, Clock, Edit3 } from 'lucide-react';

export default function ChangeCompanyNamePage() {
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
              <Edit3 className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Change Company Name
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Change your company's legal identity while maintaining the same corporate structure. Complete legal name change process with MCA compliance.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* What is Company Name Change */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Building2 className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">What is Company Name Change?</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6">
                  Changing a company's name involves altering its legal identity while keeping the same corporate structure. This process allows businesses to rebrand, reflect new business directions, or comply with regulatory requirements without affecting the company's legal existence, assets, liabilities, or shareholding structure.
                </p>
                
                <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-6 rounded-lg border border-blue-500/20 mb-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Key Aspects of Name Change</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-blue-400">🏢 Legal Identity</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Changes only the company name</li>
                        <li>• Maintains same CIN and registration</li>
                        <li>• Preserves corporate structure</li>
                        <li>• Continues business operations</li>
                        <li>• Retains all legal rights and obligations</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-green-400">📋 Documentation Impact</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• New Certificate of Incorporation issued</li>
                        <li>• MOA and AOA amendments required</li>
                        <li>• All contracts and agreements need updates</li>
                        <li>• Bank accounts and licenses require changes</li>
                        <li>• Letterheads and branding updates needed</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Step-by-Step Process */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Step-by-Step Process</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-blue-400">📋 Pass Board Resolution</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        The Board of Directors must pass a resolution proposing the name change and calling for a shareholders' meeting.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Convene Board meeting with proper notice</li>
                        <li>• Pass resolution for name change proposal</li>
                        <li>• Decide on new proposed name</li>
                        <li>• Authorize calling of EGM/AGM</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-green-400">🔍 Check Name Availability</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Verify that the proposed new name is available and complies with MCA naming guidelines.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Search existing company names database</li>
                        <li>• Check trademark conflicts</li>
                        <li>• Ensure compliance with naming rules</li>
                        <li>• Verify no prohibited words used</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-purple-400">📝 File RUN Application</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Submit Reserve Unique Name (RUN) application to reserve the proposed name with MCA.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• File RUN through MCA21 portal</li>
                        <li>• Pay prescribed fees (₹1,000)</li>
                        <li>• Provide justification for name choice</li>
                        <li>• Wait for approval (usually 1-2 days)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-yellow-400">🗳️ Pass Special Resolution</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Shareholders must approve the name change through a Special Resolution at AGM or EGM.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Send 21-day notice to shareholders</li>
                        <li>• Conduct AGM/EGM with proper quorum</li>
                        <li>• Pass Special Resolution (75% majority)</li>
                        <li>• Amend Memorandum of Association</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-500/10 p-6 rounded-lg border border-indigo-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-indigo-400">📋 File Forms with MCA</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Submit required forms to MCA for official approval and new Certificate of Incorporation.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• File Form MGT-14 (within 30 days)</li>
                        <li>• File Form INC-24 for name change</li>
                        <li>• Pay government fees (₹200-₹500)</li>
                        <li>• Attach all required documents</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-teal-500/10 p-6 rounded-lg border border-teal-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm">6</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-teal-400">🏆 Obtain New Certificate</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Receive new Certificate of Incorporation with the changed name from ROC.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Wait for ROC processing (15-30 days)</li>
                        <li>• Download new Certificate of Incorporation</li>
                        <li>• Verify details are correct</li>
                        <li>• Begin updating all legal documents</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Required Documents */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-orange-400" />
                <h2 className="text-3xl font-bold text-white">Required Documents</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-orange-400">📋 Board Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Board Resolution for name change</li>
                    <li>• Notice of Board Meeting</li>
                    <li>• Minutes of Board Meeting</li>
                    <li>• Directors' consent for name change</li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">🗳️ Shareholder Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Notice of AGM/EGM (21 days)</li>
                    <li>• Special Resolution copy</li>
                    <li>• Amended Memorandum of Association</li>
                    <li>• Minutes of AGM/EGM</li>
                  </ul>
                </div>
                
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">🏛️ MCA Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• RUN approval letter</li>
                    <li>• Form MGT-14 (duly filled)</li>
                    <li>• Form INC-24 (duly filled)</li>
                    <li>• Current Certificate of Incorporation</li>
                  </ul>
                </div>
                
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-purple-400">✅ Supporting Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Digital signatures of directors</li>
                    <li>• Professional certification by CA/CS</li>
                    <li>• Justification for name change</li>
                    <li>• Payment receipts for fees</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Post-Approval Updates */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <CheckCircle className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Post-Approval Updates Required</h2>
              </div>
              
              <div className="space-y-6">
                <p className="text-gray-300 text-lg">
                  Once MCA approves the name change and issues a new Certificate of Incorporation, all legal documents, agreements, and registrations must be updated with the new company name.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                    <h3 className="font-semibold text-lg mb-4 text-red-400">🏦 Banking & Financial</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Update all bank account names</li>
                      <li>• Modify loan agreements and EMI details</li>
                      <li>• Update credit cards and financial instruments</li>
                      <li>• Notify credit rating agencies</li>
                      <li>• Update insurance policies</li>
                    </ul>
                  </div>
                  
                  <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                    <h3 className="font-semibold text-lg mb-4 text-blue-400">📜 Legal & Compliance</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Update GST registration</li>
                      <li>• Modify PF and ESI registrations</li>
                      <li>• Update trade licenses and permits</li>
                      <li>• Modify income tax records</li>
                      <li>• Update TDS and professional tax</li>
                    </ul>
                  </div>
                  
                  <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                    <h3 className="font-semibold text-lg mb-4 text-green-400">🤝 Contracts & Agreements</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Update all vendor and supplier contracts</li>
                      <li>• Modify customer agreements</li>
                      <li>• Update employment contracts</li>
                      <li>• Revise lease and rental agreements</li>
                      <li>• Modify partnership agreements</li>
                    </ul>
                  </div>
                  
                  <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                    <h3 className="font-semibold text-lg mb-4 text-purple-400">🎨 Branding & Marketing</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Update letterheads and stationery</li>
                      <li>• Modify website and digital presence</li>
                      <li>• Update business cards and marketing materials</li>
                      <li>• Revise signages and office displays</li>
                      <li>• Update social media accounts</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Timeline and Costs */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Clock className="w-8 h-8 text-yellow-400" />
                <h2 className="text-3xl font-bold text-white">Timeline & Costs</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-yellow-400">⏰ Expected Timeline</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>RUN Application:</strong> 1-2 days</li>
                    <li>• <strong>Board & Shareholder approvals:</strong> 2-3 weeks</li>
                    <li>• <strong>MCA processing:</strong> 15-30 days</li>
                    <li>• <strong>Total timeline:</strong> 45-60 days</li>
                    <li>• <strong>Post-approval updates:</strong> 30-45 days</li>
                  </ul>
                </div>
                
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">💰 Cost Breakdown</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>RUN fees:</strong> ₹1,000</li>
                    <li>• <strong>MCA filing fees:</strong> ₹200-₹500</li>
                    <li>• <strong>Professional fees:</strong> ₹5,000-₹15,000</li>
                    <li>• <strong>Document updates:</strong> ₹2,000-₹5,000</li>
                    <li>• <strong>Total cost:</strong> ₹8,200-₹21,500</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Get Started */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Change Your Company Name?</h2>
              <p className="text-xl mb-6 opacity-90">
                Get expert assistance for seamless company name change process. We handle all legal formalities!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">45-60 Days</div>
                  <div className="text-sm opacity-80">Complete Process</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">₹8K-₹22K</div>
                  <div className="text-sm opacity-80">Total Cost</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm opacity-80">Legal Compliance</div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Get Name Change Assistance</h3>
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
                      Current & Proposed Company Names
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us your current company name and proposed new name..."
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
                    Get Expert Assistance
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
                      <span>100% Compliant</span>
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