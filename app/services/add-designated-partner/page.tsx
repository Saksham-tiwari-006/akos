'use client'

import React, { useState } from 'react';
import { UserPlus, FileText, CheckCircle, AlertTriangle, Clock, Shield, Users, Briefcase } from 'lucide-react';

export default function AddDesignatedPartnerPage() {
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-6">
              <UserPlus className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Add Designated Partner
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Appoint new designated partners to your LLP. Handle DPIN allocation, partner consent, and regulatory compliance seamlessly.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* What is Designated Partner */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <UserPlus className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">What is Designated Partner?</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6">
                  A Designated Partner in an LLP is a partner who has been specifically designated to handle compliance and regulatory responsibilities. Every LLP must have at least 2 designated partners at all times, with at least one being a resident of India.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-green-600/10 to-blue-600/10 p-6 rounded-lg border border-green-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Briefcase className="w-5 h-5" />
                      Responsibilities
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Compliance with LLP Act provisions</li>
                      <li>• Filing annual returns and forms</li>
                      <li>• Maintaining statutory registers</li>
                      <li>• Representing LLP in legal matters</li>
                      <li>• Signing documents on behalf of LLP</li>
                      <li>• Ensuring regulatory compliance</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-6 rounded-lg border border-blue-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      Requirements
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Must have valid DPIN (Designated Partner Identification Number)</li>
                      <li>• At least one must be resident of India</li>
                      <li>• Individual person (not body corporate)</li>
                      <li>• Not disqualified under LLP Act</li>
                      <li>• Must provide consent for appointment</li>
                      <li>• Should have relevant experience</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Process for Adding Designated Partner */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">Process to Add Designated Partner</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-blue-400">🆔 Obtain DPIN</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        New designated partner must first obtain DPIN (Designated Partner Identification Number) from MCA.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• File Form DIR-3 for DPIN application</li>
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
                      <h3 className="font-semibold text-lg mb-3 text-green-400">📋 Partner Consent</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Existing partners must approve addition of new designated partner through partnership decision.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Obtain consent from all existing partners</li>
                        <li>• Pass resolution for new partner addition</li>
                        <li>• Update partnership deed if required</li>
                        <li>• Document decision in partner meetings</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-purple-400">✍️ Designated Partner Consent</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        New partner must provide written consent and file necessary forms with MCA.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Provide written consent for appointment</li>
                        <li>• Sign LLP agreement amendments</li>
                        <li>• Obtain digital signature certificate</li>
                        <li>• Submit required declarations</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-yellow-400">📄 File LLP Forms</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        File necessary forms with MCA to officially notify addition of new designated partner.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• File Form 4 (Change in partners/designated partners)</li>
                        <li>• Attach partner consent and resolution</li>
                        <li>• Submit within 30 days of appointment</li>
                        <li>• Pay prescribed government fees</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-500/10 p-6 rounded-lg border border-indigo-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-indigo-400">📋 Update Records</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Update all statutory registers and notify relevant authorities about new designated partner.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Update register of partners</li>
                        <li>• Amend LLP agreement if necessary</li>
                        <li>• Notify banks and financial institutions</li>
                        <li>• Update business registrations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Eligibility and Disqualifications */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <CheckCircle className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Eligibility & Disqualifications</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">✅ Eligibility Criteria</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Must be an individual person</li>
                    <li>• Should be 18 years or above</li>
                    <li>• Must have valid DPIN</li>
                    <li>• Should not be disqualified under LLP Act</li>
                    <li>• Must provide written consent</li>
                    <li>• At least one must be Indian resident</li>
                  </ul>
                </div>
                
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400">❌ Disqualifications</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Person of unsound mind</li>
                    <li>• Undischarged insolvent</li>
                    <li>• Convicted of fraud or moral turpitude</li>
                    <li>• Disqualified by court order</li>
                    <li>• Minor (below 18 years)</li>
                    <li>• Body corporate or artificial person</li>
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
                  <h3 className="font-semibold text-lg mb-4 text-orange-400">🆔 Personal Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• PAN Card copy</li>
                    <li>• Aadhaar Card copy</li>
                    <li>• Address proof (utility bill/bank statement)</li>
                    <li>• Passport size photographs</li>
                    <li>• Educational certificates</li>
                    <li>• Experience/professional certificates</li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">📋 LLP Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• LLP Agreement (current)</li>
                    <li>• Certificate of Incorporation</li>
                    <li>• Partner consent resolution</li>
                    <li>• Register of partners</li>
                    <li>• Latest Form 11 (Annual Return)</li>
                    <li>• Latest Form 8 (Statement of Account)</li>
                  </ul>
                </div>
                
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">📝 MCA Forms</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Form DIR-3 (DPIN application)</li>
                    <li>• Form 4 (Change in designated partners)</li>
                    <li>• Digital Signature Certificate</li>
                    <li>• Professional certification</li>
                    <li>• Consent letter from new partner</li>
                    <li>• Fee payment receipts</li>
                  </ul>
                </div>
                
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-purple-400">✅ Additional Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Non-disqualification declaration</li>
                    <li>• Residential status proof</li>
                    <li>• Partner contribution details</li>
                    <li>• Bank account details</li>
                    <li>• Professional indemnity (if applicable)</li>
                    <li>• Background verification</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Rights and Duties */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Shield className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">Rights & Duties of Designated Partner</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">🏛️ Rights</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Sign documents on behalf of LLP</li>
                    <li>• Represent LLP in official matters</li>
                    <li>• Access to LLP books and records</li>
                    <li>• Participate in management decisions</li>
                    <li>• Receive share of profits as agreed</li>
                    <li>• Vote on partnership matters</li>
                  </ul>
                </div>
                
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">⚖️ Duties</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Ensure LLP Act compliance</li>
                    <li>• File annual returns and forms timely</li>
                    <li>• Maintain statutory registers</li>
                    <li>• Act in good faith for LLP</li>
                    <li>• Avoid conflicts of interest</li>
                    <li>• Maintain confidentiality</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 p-6 rounded-lg border border-yellow-500/30">
                <h3 className="font-semibold text-lg mb-3 text-yellow-400 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Liability Note
                </h3>
                <p className="text-sm text-gray-300">
                  Designated partners have limited liability for LLP obligations but are personally liable for their own wrongful acts or omissions. They must ensure compliance with all regulatory requirements to avoid personal penalties.
                </p>
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
                    <li>• <strong>DPIN Application:</strong> 7-15 days</li>
                    <li>• <strong>Partner Consent:</strong> 2-5 days</li>
                    <li>• <strong>Form 4 Filing:</strong> Within 30 days</li>
                    <li>• <strong>Total Process:</strong> 30-45 days</li>
                  </ul>
                </div>
                
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400">💰 Fees & Penalties</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>DPIN Fee:</strong> ₹500</li>
                    <li>• <strong>Form 4 Fee:</strong> ₹300</li>
                    <li>• <strong>Late Filing Penalty:</strong> ₹100/day</li>
                    <li>• <strong>Professional Fees:</strong> ₹5,000-₹10,000</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Get Started */}
            <section className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Add Designated Partner?</h2>
              <p className="text-xl mb-6 opacity-90">
                Strengthen your LLP with expert designated partner addition services. From DPIN to MCA filing!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">30-45 Days</div>
                  <div className="text-sm opacity-80">Complete Process</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">₹6K-₹12K</div>
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
                <h3 className="text-2xl font-bold text-white mb-6">Add Designated Partner</h3>
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
                      New Partner Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about the new designated partner - name, experience, role..."
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
                    className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
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