'use client'

import React, { useState } from 'react';
import { MapPin, FileText, CheckCircle, AlertTriangle, Clock, Shield, Building2, Truck } from 'lucide-react';

export default function ChangeRegisteredOfficePage() {
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
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Change Registered Office
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Relocate your company's registered office legally. Handle same city, same state, or interstate office changes with complete compliance.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Types of Office Changes */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <MapPin className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">Types of Registered Office Change</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Building2 className="w-6 h-6 text-green-400" />
                    <h3 className="font-semibold text-lg text-green-400">Same City</h3>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">
                    Moving within the same city limits requires simple board resolution and MCA filing.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Board Resolution only</li>
                    <li>• Form INC-22 filing</li>
                    <li>• 30 days timeline</li>
                    <li>• ₹300 government fee</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <Truck className="w-6 h-6 text-yellow-400" />
                    <h3 className="font-semibold text-lg text-yellow-400">Same State</h3>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">
                    Changing to different city within same state requires special resolution and detailed compliance.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Special Resolution needed</li>
                    <li>• Form INC-22 + MGT-14</li>
                    <li>• 60-90 days timeline</li>
                    <li>• ₹5,000 government fee</li>
                  </ul>
                </div>
                
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <MapPin className="w-6 h-6 text-red-400" />
                    <h3 className="font-semibold text-lg text-red-400">Interstate</h3>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">
                    Moving to different state requires Central Government approval and extensive documentation.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Central Govt approval</li>
                    <li>• Form INC-23 filing</li>
                    <li>• 4-6 months timeline</li>
                    <li>• ₹20,000+ government fee</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Process for Same City */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Building2 className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Process for Same City Change</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-blue-400">📋 Pass Board Resolution</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Board of Directors must approve the change of registered office address within the same city.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Convene Board meeting with proper notice</li>
                        <li>• Pass resolution for address change</li>
                        <li>• Record complete new address details</li>
                        <li>• Authorize directors to file forms</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-green-400">🏠 Secure New Premises</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Obtain proper documents for the new registered office address and ensure compliance.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Rent agreement or ownership documents</li>
                        <li>• NOC from property owner/landlord</li>
                        <li>• Utility bills (electricity/water)</li>
                        <li>• Property tax receipts</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-purple-400">📝 File Form INC-22</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Submit Form INC-22 with MCA within 30 days of board resolution along with required documents.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Complete Form INC-22 accurately</li>
                        <li>• Attach board resolution copy</li>
                        <li>• Include address proof documents</li>
                        <li>• Pay ₹300 government fee</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Process for Interstate Change */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <MapPin className="w-8 h-8 text-red-400" />
                <h2 className="text-3xl font-bold text-white">Process for Interstate Change</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-red-400">🗳️ Special Resolution</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Shareholders must pass Special Resolution to approve interstate registered office change.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Send 21-day notice to all shareholders</li>
                        <li>• Conduct AGM/EGM with proper quorum</li>
                        <li>• Pass Special Resolution (75% majority)</li>
                        <li>• Record minutes of the meeting</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-yellow-400">📄 File Application</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Submit application to Regional Director for Central Government approval for interstate change.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Prepare detailed application with justification</li>
                        <li>• Include financial statements (3 years)</li>
                        <li>• Attach compliance certificates</li>
                        <li>• Pay required fees and stamp duty</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-500/10 p-6 rounded-lg border border-indigo-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-indigo-400">✅ Obtain Approval</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Wait for Central Government approval and then proceed with MCA filing and certificate update.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Await Regional Director approval (3-4 months)</li>
                        <li>• File Form INC-23 after approval</li>
                        <li>• Update MOA with new address</li>
                        <li>• Obtain fresh Certificate of Incorporation</li>
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
                  <h3 className="font-semibold text-lg mb-4 text-orange-400">🏢 Address Proof Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Rent Agreement/Sale Deed</li>
                    <li>• NOC from Property Owner</li>
                    <li>• Electricity Bill (latest)</li>
                    <li>• Property Tax Receipt</li>
                    <li>• Utility Connection Proof</li>
                    <li>• Municipal Tax Receipt</li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">📋 Corporate Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Board Resolution (certified copy)</li>
                    <li>• Special Resolution (for interstate)</li>
                    <li>• Current Certificate of Incorporation</li>
                    <li>• Memorandum of Association</li>
                    <li>• Articles of Association</li>
                    <li>• Form INC-22/INC-23</li>
                  </ul>
                </div>
                
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">📊 Financial Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Balance Sheet (last 3 years)</li>
                    <li>• Profit & Loss Statement</li>
                    <li>• Annual Returns (MGT-7)</li>
                    <li>• Income Tax Returns</li>
                    <li>• Financial Statement (certified)</li>
                    <li>• Auditor's Report</li>
                  </ul>
                </div>
                
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-purple-400">✅ Compliance Certificates</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• CS/CA Compliance Certificate</li>
                    <li>• Director's KYC (DIR-3 KYC)</li>
                    <li>• Digital Signatures</li>
                    <li>• Professional Certification</li>
                    <li>• Justification Letter</li>
                    <li>• Fee Payment Receipt</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Compliance and Penalties */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <AlertTriangle className="w-8 h-8 text-yellow-400" />
                <h2 className="text-3xl font-bold text-white">Compliance & Penalties</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-yellow-400">⏰ Filing Deadlines</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Same City:</strong> 30 days from board resolution</li>
                    <li>• <strong>Same State:</strong> 60 days from special resolution</li>
                    <li>• <strong>Interstate:</strong> Before actual shifting</li>
                    <li>• <strong>AGM Filing:</strong> Within 60 days of AGM</li>
                  </ul>
                </div>
                
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400">💰 Penalties for Delay</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Late Filing:</strong> ₹100 per day</li>
                    <li>• <strong>Non-compliance:</strong> ₹5,000 - ₹25,000</li>
                    <li>• <strong>Director Penalty:</strong> ₹1,000 per day</li>
                    <li>• <strong>Compounding:</strong> 2x-5x of fees</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-red-600/20 to-orange-600/20 p-6 rounded-lg border border-red-500/30">
                <h3 className="font-semibold text-lg mb-3 text-red-400 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Important Notice
                </h3>
                <p className="text-sm text-gray-300">
                  Shifting registered office without proper MCA filing is illegal and can result in prosecution. Always complete the legal process before physically moving the office. For interstate changes, Central Government approval is mandatory before shifting.
                </p>
              </div>
            </section>

            {/* Post-Change Updates */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <CheckCircle className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Post-Change Updates Required</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">🏛️ Government Updates</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Income Tax Department (PAN update)</li>
                    <li>• GST Registration amendment</li>
                    <li>• EPF/ESI registration update</li>
                    <li>• Professional Tax registration</li>
                    <li>• Shop & Establishment License</li>
                    <li>• Municipal Corporation records</li>
                  </ul>
                </div>
                
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">🏦 Banking & Financial</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Bank account address update</li>
                    <li>• Credit card company notification</li>
                    <li>• Insurance policy updates</li>
                    <li>• Loan agreement amendments</li>
                    <li>• Investment account updates</li>
                    <li>• Financial institution records</li>
                  </ul>
                </div>
                
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-purple-400">📄 Legal & Contracts</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Customer contracts amendment</li>
                    <li>• Supplier agreements update</li>
                    <li>• Service provider notifications</li>
                    <li>• Legal document updates</li>
                    <li>• Partnership agreements</li>
                    <li>• Regulatory compliance updates</li>
                  </ul>
                </div>
                
                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-orange-400">📢 Business Updates</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Website address update</li>
                    <li>• Business cards & letterheads</li>
                    <li>• Digital signatures update</li>
                    <li>• Email signature changes</li>
                    <li>• Marketing material updates</li>
                    <li>• Customer communication</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Get Started */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Change Registered Office?</h2>
              <p className="text-xl mb-6 opacity-90">
                Get expert assistance for seamless registered office relocation with complete legal compliance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">30-180 Days</div>
                  <div className="text-sm opacity-80">Process Timeline</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">₹5K-₹50K</div>
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
                <h3 className="text-2xl font-bold text-white mb-6">Change Registered Office</h3>
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
                      Type of Office Change
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your office change requirements (same city/state/interstate)..."
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