'use client'

import React, { useState } from 'react';
import { Building2, Users, FileText, CheckCircle, AlertTriangle, Calendar, Shield, Scale, Clock } from 'lucide-react';

export default function AppointmentAuditorPage() {
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
              <Users className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Appointment of Auditor (Form ADT-1)
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Complete guide to auditor appointment process, Form ADT-1 filing requirements, and compliance under Companies Act 2013.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* What is Form ADT-1 */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">What is Form ADT-1?</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6">
                  Form ADT-1 is a statutory form used to notify the Registrar of Companies (ROC) about the appointment of auditors in a company. It must be filed within 15 days of the auditor's appointment and contains comprehensive details about the appointed auditor(s).
                </p>
                
                <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-6 rounded-lg border border-blue-500/20 mb-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Auditor Details to be Submitted in ADT-1</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-blue-400">📋 Basic Information</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Category of auditor (Individual/Firm)</li>
                        <li>• Name of auditor/audit firm</li>
                        <li>• PAN of auditor/firm</li>
                        <li>• Membership number (ICAI)</li>
                        <li>• Address details (Registered office)</li>
                        <li>• Contact information (Phone/Email)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-green-400">🗓️ Appointment Details</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Appointment period (From & To dates)</li>
                        <li>• Date of Board resolution</li>
                        <li>• Date of Members' resolution (if applicable)</li>
                        <li>• Whether first auditor or subsequent</li>
                        <li>• Remuneration details</li>
                        <li>• Special terms and conditions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Laws Governing Auditor Appointment */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Scale className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Laws Governing Auditor Appointment</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-3 text-blue-400">📜 Section 139(1) of Companies Act, 2013</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    Every company shall, at the first annual general meeting, appoint an individual or a firm as an auditor who shall hold office from the conclusion of that meeting till the conclusion of its sixth annual general meeting.
                  </p>
                  <div className="bg-blue-600/10 p-4 rounded border border-blue-500/20">
                    <h4 className="font-semibold mb-2 text-blue-300">Key Provisions:</h4>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li>• Mandatory appointment for all companies</li>
                      <li>• 5-year term for auditors</li>
                      <li>• Ratification by members required</li>
                      <li>• Special resolution for removal</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-3 text-green-400">⚖️ The Companies (Audit and Auditors) Rules, 2014</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    These rules provide detailed procedures for auditor appointment, qualifications, duties, and removal processes.
                  </p>
                  <div className="bg-green-600/10 p-4 rounded border border-green-500/20">
                    <h4 className="font-semibold mb-2 text-green-300">Rule Highlights:</h4>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li>• Form ADT-1 filing requirements</li>
                      <li>• Auditor rotation norms</li>
                      <li>• Disqualification criteria</li>
                      <li>• Consent and certificate requirements</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-3 text-purple-400">🎯 Role of Appointing Authority</h3>
                  <p className="text-sm text-gray-300 mb-4">
                    The Board of Directors and shareholders play crucial roles in auditor appointment and oversight.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-purple-600/10 p-4 rounded border border-purple-500/20">
                      <h4 className="font-semibold mb-2 text-purple-300">Board Responsibilities:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• First auditor appointment</li>
                        <li>• Fixing remuneration</li>
                        <li>• Filing ADT-1 form</li>
                        <li>• Ensuring compliance</li>
                      </ul>
                    </div>
                    <div className="bg-purple-600/10 p-4 rounded border border-purple-500/20">
                      <h4 className="font-semibold mb-2 text-purple-300">Members' Role:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Appointment at AGM</li>
                        <li>• Annual ratification</li>
                        <li>• Removal by special resolution</li>
                        <li>• Fixing remuneration (if Board doesn't)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* First Auditor Appointment */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Clock className="w-8 h-8 text-yellow-400" />
                <h2 className="text-3xl font-bold text-white">First Auditor Appointment Process</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-yellow-400">⏰ Timeline Requirements</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-yellow-300">By Board of Directors</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• <strong>Within 30 days</strong> of incorporation</li>
                        <li>• Pass Board resolution</li>
                        <li>• Obtain auditor's consent</li>
                        <li>• File ADT-1 within 15 days</li>
                        <li>• Valid until first AGM</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-yellow-300">By Members (if Board fails)</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• <strong>Within 90 days</strong> of incorporation</li>
                        <li>• Call Extraordinary General Meeting</li>
                        <li>• Pass ordinary resolution</li>
                        <li>• Board to file ADT-1</li>
                        <li>• Valid until first AGM</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">📝 Required Documents</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-blue-300">From Company</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Board resolution copy</li>
                        <li>• Certificate of incorporation</li>
                        <li>• Memorandum & Articles of Association</li>
                        <li>• Details of proposed remuneration</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-blue-300">From Auditor</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Written consent letter</li>
                        <li>• Certificate of eligibility</li>
                        <li>• ICAI membership certificate</li>
                        <li>• PAN card copy</li>
                        <li>• Professional indemnity insurance</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">✅ Step-by-Step Process</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                      <div>
                        <h4 className="font-semibold text-white">Identify Suitable Auditor</h4>
                        <p className="text-sm text-gray-300">Research and shortlist eligible auditors based on expertise and availability.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                      <div>
                        <h4 className="font-semibold text-white">Verify Eligibility</h4>
                        <p className="text-sm text-gray-300">Check ICAI membership, practicing certificate, and ensure no disqualifications.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                      <div>
                        <h4 className="font-semibold text-white">Obtain Consent</h4>
                        <p className="text-sm text-gray-300">Get written consent from auditor along with eligibility certificate.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                      <div>
                        <h4 className="font-semibold text-white">Board Resolution</h4>
                        <p className="text-sm text-gray-300">Pass Board resolution appointing auditor and fixing remuneration.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                      <div>
                        <h4 className="font-semibold text-white">File Form ADT-1</h4>
                        <p className="text-sm text-gray-300">Submit ADT-1 with ROC within 15 days of appointment with required fees.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Subsequent Auditor Appointment */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Calendar className="w-8 h-8 text-purple-400" />
                <h2 className="text-3xl font-bold text-white">Subsequent Auditor Appointment & Re-appointment</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-purple-400">🔄 5-Year Term System</h3>
                  <p className="text-gray-300 mb-4">
                    Under Companies Act 2013, auditors are appointed for a maximum term of 5 years (or 10 years for individuals), subject to annual ratification by members.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-purple-600/10 p-4 rounded border border-purple-500/20">
                      <h4 className="font-semibold mb-2 text-purple-300">Individual Auditors:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Maximum 1 term of 5 years</li>
                        <li>• 5-year cooling-off period</li>
                        <li>• Cannot be re-appointed immediately</li>
                        <li>• Total 10 years in blocks of 5</li>
                      </ul>
                    </div>
                    <div className="bg-purple-600/10 p-4 rounded border border-purple-500/20">
                      <h4 className="font-semibold mb-2 text-purple-300">Audit Firms:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Maximum 2 consecutive terms (10 years)</li>
                        <li>• 6-year cooling-off period</li>
                        <li>• Partner rotation every 5 years</li>
                        <li>• New engagement partner required</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-orange-400">🏢 Rotation Rules by Company Type</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-white/20">
                          <th className="text-left p-3 text-orange-400">Company Type</th>
                          <th className="text-left p-3 text-blue-400">Individual Auditor</th>
                          <th className="text-left p-3 text-green-400">Audit Firm</th>
                          <th className="text-left p-3 text-purple-400">Cooling-off Period</th>
                        </tr>
                      </thead>
                      <tbody className="text-gray-300">
                        <tr className="border-b border-white/10">
                          <td className="p-3 font-semibold">Listed Companies</td>
                          <td className="p-3">5 years</td>
                          <td className="p-3">10 years (2 terms)</td>
                          <td className="p-3">5 years</td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="p-3 font-semibold">Public Companies</td>
                          <td className="p-3">5 years</td>
                          <td className="p-3">10 years (2 terms)</td>
                          <td className="p-3">5 years</td>
                        </tr>
                        <tr className="border-b border-white/10">
                          <td className="p-3 font-semibold">Private Companies</td>
                          <td className="p-3">5 years</td>
                          <td className="p-3">No rotation required</td>
                          <td className="p-3">As applicable</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400">⚠️ Re-appointment Process</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-red-300">At Annual General Meeting:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Auditor's re-appointment ratified annually</li>
                        <li>• Ordinary resolution required</li>
                        <li>• Remuneration may be revised</li>
                        <li>• File fresh ADT-1 if terms change</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-2 text-red-300">For New Term (after 5/10 years):</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Fresh appointment process required</li>
                        <li>• New consent and eligibility certificate</li>
                        <li>• Board resolution for appointment</li>
                        <li>• File new ADT-1 within 15 days</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Benefits */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <CheckCircle className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Benefits of Proper Auditor Appointment</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <Shield className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-3">🛡️ Legal Compliance</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Avoid penalties for non-compliance</li>
                    <li>• Meet statutory audit requirements</li>
                    <li>• Ensure proper corporate governance</li>
                    <li>• Maintain good standing with ROC</li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <FileText className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-3">📋 Official Intimation</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• ROC records updated officially</li>
                    <li>• Clear audit trail maintained</li>
                    <li>• Auditor's appointment documented</li>
                    <li>• Facilitates smooth audit process</li>
                  </ul>
                </div>
                
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <Building2 className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-3">🏢 Enhanced Credibility</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Improved stakeholder confidence</li>
                    <li>• Better access to funding</li>
                    <li>• Strengthened corporate image</li>
                    <li>• Professional audit standards</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <AlertTriangle className="w-8 h-8 text-yellow-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-3">⚠️ Risk Mitigation</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Avoid director disqualification</li>
                    <li>• Prevent company strike-off</li>
                    <li>• Reduce audit-related disputes</li>
                    <li>• Ensure timely audit completion</li>
                  </ul>
                </div>
                
                <div className="bg-indigo-500/10 p-6 rounded-lg border border-indigo-500/20">
                  <CheckCircle className="w-8 h-8 text-indigo-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-3">✅ Quality Assurance</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Professional audit standards</li>
                    <li>• Independent financial review</li>
                    <li>• Error detection and correction</li>
                    <li>• Improved internal controls</li>
                  </ul>
                </div>
                
                <div className="bg-teal-500/10 p-6 rounded-lg border border-teal-500/20">
                  <Scale className="w-8 h-8 text-teal-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-3">⚖️ Good Governance</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Transparent financial reporting</li>
                    <li>• Board accountability enhanced</li>
                    <li>• Stakeholder protection</li>
                    <li>• Compliance culture promotion</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Get Started */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Need Help with Auditor Appointment?</h2>
              <p className="text-xl mb-6 opacity-90">
                Get expert assistance for Form ADT-1 filing and auditor appointment compliance. Contact us today!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">15 Days</div>
                  <div className="text-sm opacity-80">Filing Deadline</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">₹300</div>
                  <div className="text-sm opacity-80">Government Fee</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">24-48hrs</div>
                  <div className="text-sm opacity-80">Processing Time</div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Get ADT-1 Filing Assistance</h3>
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
                      Company Details & Requirements
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about your company and auditor appointment needs..."
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