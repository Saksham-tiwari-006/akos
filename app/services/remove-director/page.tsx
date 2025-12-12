'use client'

import React, { useState } from 'react';
import { UserMinus, FileText, CheckCircle, AlertTriangle, Clock, Shield, Users, XCircle } from 'lucide-react';

export default function RemoveDirectorPage() {
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-red-600 rounded-full mb-6">
              <UserMinus className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Remove Director
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Remove directors from your company board through resignation or removal process. Handle DIR-11, DIR-12 forms and ensure complete MCA compliance.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Types of Director Removal */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <UserMinus className="w-8 h-8 text-red-400" />
                <h2 className="text-3xl font-bold text-white">Types of Director Removal</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-6 h-6 text-blue-400" />
                    <h3 className="font-semibold text-lg text-blue-400">Resignation</h3>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">
                    Director voluntarily steps down from the position by submitting resignation letter to the company.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Voluntary decision by director</li>
                    <li>• Submit resignation letter</li>
                    <li>• File DIR-11 within 30 days</li>
                    <li>• Board acceptance not required</li>
                  </ul>
                </div>
                
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <XCircle className="w-6 h-6 text-red-400" />
                    <h3 className="font-semibold text-lg text-red-400">Removal by Company</h3>
                  </div>
                  <p className="text-sm text-gray-300 mb-3">
                    Company removes director through board resolution or shareholder resolution due to various reasons.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Requires board/shareholder resolution</li>
                    <li>• Give opportunity of being heard</li>
                    <li>• File DIR-12 for removal</li>
                    <li>• Follow proper legal procedure</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Resignation Process */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">Director Resignation Process</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-blue-400">📝 Submit Resignation Letter</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Director must submit formal resignation letter to the company stating reasons and effective date.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Address to Chairman/Board of Directors</li>
                        <li>• State clear reasons for resignation</li>
                        <li>• Mention effective date of resignation</li>
                        <li>• Hand over responsibilities and documents</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-green-400">📋 Board Meeting & Acceptance</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Board of Directors takes note of resignation and records in board meeting minutes.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Convene board meeting within 30 days</li>
                        <li>• Take note of director's resignation</li>
                        <li>• Record resignation in meeting minutes</li>
                        <li>• Issue resignation acceptance letter</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-purple-400">📄 File Form DIR-11</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Resigning director must file Form DIR-11 with MCA within 30 days of resignation.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• File within 30 days of resignation</li>
                        <li>• Attach resignation letter copy</li>
                        <li>• Pay prescribed fees (₹300)</li>
                        <li>• Submit digitally with DSC</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-yellow-400">🏛️ Company Files DIR-12</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Company must file Form DIR-12 with MCA to notify cessation of directorship.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• File within 30 days of resignation</li>
                        <li>• Attach board resolution copy</li>
                        <li>• Include resignation documents</li>
                        <li>• Pay government fees</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Removal Process */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <XCircle className="w-8 h-8 text-red-400" />
                <h2 className="text-3xl font-bold text-white">Director Removal Process</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-red-400">📋 Board Resolution for Removal</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Board must pass resolution proposing removal of director and call shareholders' meeting.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• State valid reasons for removal</li>
                        <li>• Provide opportunity to be heard</li>
                        <li>• Pass board resolution</li>
                        <li>• Call AGM/EGM for shareholder approval</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-orange-400">📢 Notice to Director</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Give proper notice to the director about proposed removal and provide opportunity to defend.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Send 21-day advance notice</li>
                        <li>• State reasons for removal clearly</li>
                        <li>• Provide opportunity to be heard</li>
                        <li>• Allow representation at meeting</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-500/10 p-6 rounded-lg border border-indigo-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-indigo-400">🗳️ Shareholder Resolution</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Shareholders must pass ordinary resolution to remove director from office.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Conduct AGM/EGM with proper quorum</li>
                        <li>• Pass ordinary resolution (simple majority)</li>
                        <li>• Allow director to present defense</li>
                        <li>• Record voting results in minutes</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-green-400">📄 MCA Filing</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        File necessary forms with MCA to notify removal of director from company records.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• File Form DIR-12 within 30 days</li>
                        <li>• Attach resolution copies</li>
                        <li>• Submit director's response (if any)</li>
                        <li>• Update statutory records</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Grounds for Removal */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <AlertTriangle className="w-8 h-8 text-yellow-400" />
                <h2 className="text-3xl font-bold text-white">Valid Grounds for Director Removal</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400">🚫 Legal Disqualifications</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Conviction for fraud or moral turpitude</li>
                    <li>• Declared insolvent/undischarged insolvent</li>
                    <li>• Non-compliance with DIN requirements</li>
                    <li>• Failure to file DIR-3 KYC</li>
                    <li>• Disqualification by court order</li>
                    <li>• Mental incapacity determination</li>
                  </ul>
                </div>
                
                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-orange-400">⚠️ Performance Issues</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Consistent absence from board meetings</li>
                    <li>• Breach of fiduciary duties</li>
                    <li>• Conflict of interest situations</li>
                    <li>• Poor performance in assigned roles</li>
                    <li>• Non-compliance with company policies</li>
                    <li>• Loss of confidence by shareholders</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-red-600/20 to-orange-600/20 p-6 rounded-lg border border-red-500/30">
                <h3 className="font-semibold text-lg mb-3 text-red-400 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Important Legal Notice
                </h3>
                <p className="text-sm text-gray-300">
                  Director removal must follow proper legal procedure with adequate notice and opportunity to be heard. Arbitrary removal without valid grounds can lead to legal challenges and compensation claims by the removed director.
                </p>
              </div>
            </section>

            {/* Required Documents */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-orange-400" />
                <h2 className="text-3xl font-bold text-white">Required Documents</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">📝 For Resignation</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Director's resignation letter</li>
                    <li>• Board resolution acknowledging resignation</li>
                    <li>• Form DIR-11 (by resigning director)</li>
                    <li>• Form DIR-12 (by company)</li>
                    <li>• Digital signature certificates</li>
                    <li>• Updated board meeting minutes</li>
                  </ul>
                </div>
                
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400">🗳️ For Removal</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Board resolution proposing removal</li>
                    <li>• Notice to director (21 days)</li>
                    <li>• Shareholders' resolution (ordinary)</li>
                    <li>• Minutes of AGM/EGM</li>
                    <li>• Director's representation (if any)</li>
                    <li>• Form DIR-12 filing</li>
                  </ul>
                </div>
                
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">🏛️ Supporting Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Current Certificate of Incorporation</li>
                    <li>• Memorandum & Articles of Association</li>
                    <li>• Latest Annual Return (MGT-7)</li>
                    <li>• Director's DIN details</li>
                    <li>• Company's statutory registers</li>
                    <li>• Professional certifications</li>
                  </ul>
                </div>
                
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-purple-400">✅ Compliance Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Reason for removal/resignation</li>
                    <li>• Evidence supporting grounds</li>
                    <li>• Legal opinion (if contested)</li>
                    <li>• Compliance certificates</li>
                    <li>• Fee payment receipts</li>
                    <li>• Updated director list</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Timeline and Compliance */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Clock className="w-8 h-8 text-yellow-400" />
                <h2 className="text-3xl font-bold text-white">Timeline & Compliance</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-yellow-400">⏰ Key Deadlines</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>DIR-11 Filing:</strong> Within 30 days of resignation</li>
                    <li>• <strong>DIR-12 Filing:</strong> Within 30 days of cessation</li>
                    <li>• <strong>Notice Period:</strong> 21 days for removal</li>
                    <li>• <strong>AGM/EGM:</strong> Within 60 days of board resolution</li>
                  </ul>
                </div>
                
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400">💰 Fees & Penalties</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>DIR-11 Fee:</strong> ₹300</li>
                    <li>• <strong>DIR-12 Fee:</strong> ₹300</li>
                    <li>• <strong>Late Filing Penalty:</strong> ₹100/day</li>
                    <li>• <strong>Professional Fees:</strong> ₹2,000-₹5,000</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Get Started */}
            <section className="bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Need to Remove a Director?</h2>
              <p className="text-xl mb-6 opacity-90">
                Handle director removal or resignation professionally with complete legal compliance and proper documentation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">30-60 Days</div>
                  <div className="text-sm opacity-80">Process Timeline</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">₹3K-₹8K</div>
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
                <h3 className="text-2xl font-bold text-white mb-6">Remove Director</h3>
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
                      Removal Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about the director removal - resignation or removal, reasons..."
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
                    className="w-full bg-gradient-to-r from-red-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-red-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
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