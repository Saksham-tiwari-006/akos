'use client'

import React, { useState } from 'react';
import { UserPlus, FileText, CheckCircle, AlertTriangle, Clock, Shield, Users, Briefcase } from 'lucide-react';

export default function AddDirectorPage() {
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
              <UserPlus className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Add Director
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Appoint new directors to strengthen your company's leadership. Handle DIN allocation, board resolution, and MCA compliance seamlessly.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* What is Director Addition */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <UserPlus className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">Adding Directors to Company</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6">
                  Adding a director to a company involves appointing a new person to the Board of Directors with legal authority to manage company affairs. This process requires proper documentation, DIN (Director Identification Number) allocation, and MCA compliance to ensure legal validity.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-6 rounded-lg border border-blue-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Briefcase className="w-5 h-5" />
                      Types of Directors
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>Executive Directors:</strong> Full-time management roles</li>
                      <li>• <strong>Non-Executive Directors:</strong> Advisory and governance roles</li>
                      <li>• <strong>Independent Directors:</strong> Required for public companies</li>
                      <li>• <strong>Additional Directors:</strong> Appointed between AGMs</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 p-6 rounded-lg border border-green-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      Director Limits
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>Minimum Directors:</strong> 2 for Pvt Ltd, 3 for Public</li>
                      <li>• <strong>Maximum Directors:</strong> 15 (can be increased with special resolution)</li>
                      <li>• <strong>Independent Directors:</strong> 1/3rd for listed companies</li>
                      <li>• <strong>Woman Director:</strong> Mandatory for specified companies</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Process for Adding Director */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Process to Add Director</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-blue-400">🆔 Obtain DIN (Director Identification Number)</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        The new director must first obtain DIN from MCA before appointment. DIN is a unique identification number for directors.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• File Form DIR-3 for DIN application</li>
                        <li>• Submit identity and address proof</li>
                        <li>• Pay ₹500 government fee</li>
                        <li>• Processing time: 7-15 days</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-green-400">📋 Pass Board Resolution</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Existing Board of Directors must pass a resolution to appoint the new director and authorize the appointment.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Convene Board meeting with proper notice</li>
                        <li>• Discuss new director's appointment</li>
                        <li>• Pass resolution for appointment</li>
                        <li>• Record complete details in minutes</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-purple-400">✍️ Director's Consent</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        New director must provide written consent and file necessary forms with MCA confirming the appointment.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• File Form DIR-2 (consent to act as director)</li>
                        <li>• Submit within 60 days of appointment</li>
                        <li>• Provide digital signature</li>
                        <li>• Pay prescribed fees</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-yellow-400">📝 File Form DIR-12</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Company must file Form DIR-12 with MCA to officially notify the appointment of new director.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Complete Form DIR-12 accurately</li>
                        <li>• Attach board resolution and consent</li>
                        <li>• Submit within 30 days of appointment</li>
                        <li>• Pay government fees (₹300)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-500/10 p-6 rounded-lg border border-indigo-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-indigo-400">🗳️ Shareholder Approval (if required)</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        For certain appointments, shareholder approval through ordinary resolution at AGM may be required.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Required for additional directors beyond authorized number</li>
                        <li>• Independent director appointments</li>
                        <li>• Managing director appointments</li>
                        <li>• Pass ordinary resolution (simple majority)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Director Qualifications & Disqualifications */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <CheckCircle className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Director Qualifications & Disqualifications</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">✅ Qualifications Required</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Must be an individual (not a company)</li>
                    <li>• Should be 18 years or above</li>
                    <li>• Must have valid DIN</li>
                    <li>• Should not be disqualified under Companies Act</li>
                    <li>• Must provide consent in writing</li>
                    <li>• Should have relevant experience/expertise</li>
                  </ul>
                </div>
                
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400">❌ Disqualifications</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Convicted of fraud or moral turpitude</li>
                    <li>• Undischarged insolvent</li>
                    <li>• Director of company with payment defaults</li>
                    <li>• Non-compliance with DIN or DIR-3 KYC</li>
                    <li>• Adjudged as person of unsound mind</li>
                    <li>• Disqualified by court or tribunal order</li>
                  </ul>
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
                  <h3 className="font-semibold text-lg mb-4 text-orange-400">🆔 Director's Personal Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• PAN Card copy</li>
                    <li>• Aadhaar Card copy</li>
                    <li>• Address proof (utility bill/bank statement)</li>
                    <li>• Passport size photographs</li>
                    <li>• Educational qualification certificates</li>
                    <li>• Experience certificates/resume</li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">📋 Corporate Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Board Resolution for appointment</li>
                    <li>• Notice of Board Meeting</li>
                    <li>• Minutes of Board Meeting</li>
                    <li>• Company's Certificate of Incorporation</li>
                    <li>• Memorandum & Articles of Association</li>
                    <li>• Latest Form MGT-7 (Annual Return)</li>
                  </ul>
                </div>
                
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">📝 MCA Forms</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Form DIR-3 (DIN application)</li>
                    <li>• Form DIR-2 (Consent to act as director)</li>
                    <li>• Form DIR-12 (Appointment notification)</li>
                    <li>• Digital Signature Certificate (DSC)</li>
                    <li>• Professional certification by CS/CA</li>
                    <li>• Fee payment receipts</li>
                  </ul>
                </div>
                
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-purple-400">✅ Additional Requirements</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Declaration of non-disqualification</li>
                    <li>• Consent letter from new director</li>
                    <li>• Conflict of interest disclosure</li>
                    <li>• Professional indemnity details (if applicable)</li>
                    <li>• Background verification report</li>
                    <li>• Director's undertaking letter</li>
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
                  <h3 className="font-semibold text-lg mb-4 text-yellow-400">⏰ Process Timeline</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>DIN Application:</strong> 7-15 days</li>
                    <li>• <strong>Board Resolution:</strong> 1-2 days</li>
                    <li>• <strong>DIR-2 Filing:</strong> Within 60 days</li>
                    <li>• <strong>DIR-12 Filing:</strong> Within 30 days</li>
                    <li>• <strong>Total Process:</strong> 30-45 days</li>
                  </ul>
                </div>
                
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400">💰 Fees & Penalties</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>DIN Application:</strong> ₹500</li>
                    <li>• <strong>DIR-2 Filing:</strong> ₹300</li>
                    <li>• <strong>DIR-12 Filing:</strong> ₹300</li>
                    <li>• <strong>Late Filing Penalty:</strong> ₹100/day</li>
                    <li>• <strong>Professional Fees:</strong> ₹3,000-₹8,000</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-6 rounded-lg border border-blue-500/30">
                <h3 className="font-semibold text-lg mb-3 text-blue-400 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Important Compliance Note
                </h3>
                <p className="text-sm text-gray-300">
                  Directors must complete DIR-3 KYC annually and maintain compliance with all regulatory requirements. Non-compliance can result in disqualification and penalties for both director and company.
                </p>
              </div>
            </section>

            {/* Get Started */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Add New Director?</h2>
              <p className="text-xl mb-6 opacity-90">
                Strengthen your board with expert director appointment services. Complete DIN allocation to MCA filing!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">30-45 Days</div>
                  <div className="text-sm opacity-80">Complete Process</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">₹5K-₹10K</div>
                  <div className="text-sm opacity-80">Total Cost</div>
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
                <h3 className="text-2xl font-bold text-white mb-6">Add New Director</h3>
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
                      New Director Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about the new director - name, role, experience..."
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