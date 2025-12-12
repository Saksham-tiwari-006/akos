'use client'

import React, { useState } from 'react';
import { Building2, FileText, CheckCircle, AlertTriangle, Calendar, Shield, Scale, Clock, Target } from 'lucide-react';

export default function ChangeObjectClausePage() {
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
              <Target className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Change Object Clause
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Modify your company's business activities by changing the Object Clause in Memorandum of Association. Add new business lines or update existing activities legally.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* What is Object Clause */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Target className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">What is Object Clause?</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6">
                  The Object Clause defines the business activities a company is allowed to carry out. It is a crucial part of the Memorandum of Association (MOA) that specifies the purpose for which the company is established and the scope of its operations. Any business activity outside this clause is considered ultra vires (beyond powers).
                </p>
                
                <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-6 rounded-lg border border-blue-500/20 mb-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Types of Objects</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-blue-400">🎯 Main Objects</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Primary business activities</li>
                        <li>• Core revenue-generating operations</li>
                        <li>• Principal purpose of incorporation</li>
                        <li>• Most important business lines</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-green-400">🔄 Other Objects</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Secondary business activities</li>
                        <li>• Supporting or ancillary operations</li>
                        <li>• Future expansion possibilities</li>
                        <li>• Related business ventures</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Process for Change */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Process to Change Object Clause</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-blue-400">📋 Pass Board Resolution</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Board of Directors must pass a resolution to propose changes to the Object Clause and call shareholders' meeting.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Convene Board meeting with proper notice</li>
                        <li>• Discuss proposed new business activities</li>
                        <li>• Pass resolution for MOA amendment</li>
                        <li>• Authorize calling of AGM/EGM</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-green-400">📝 Draft Amended Objects</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Prepare detailed draft of new or modified business activities to be included in the Object Clause.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Define new business activities clearly</li>
                        <li>• Ensure compliance with regulatory requirements</li>
                        <li>• Check for any licensing requirements</li>
                        <li>• Prepare comprehensive object descriptions</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-purple-400">🗳️ Pass Special Resolution</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Shareholders must approve the Object Clause changes through Special Resolution at AGM or EGM.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Send 21-day notice to all shareholders</li>
                        <li>• Conduct meeting with proper quorum</li>
                        <li>• Pass Special Resolution (75% majority)</li>
                        <li>• Record minutes of the meeting</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-yellow-400">📄 Update MOA</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Prepare the amended Memorandum of Association incorporating the new Object Clause.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Incorporate approved changes in MOA</li>
                        <li>• Ensure proper clause numbering</li>
                        <li>• Get MOA printed on stamp paper</li>
                        <li>• Obtain signatures of subscribers</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-500/10 p-6 rounded-lg border border-indigo-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-indigo-400">🏛️ File Form MGT-14</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Submit Form MGT-14 with MCA along with required documents and fees within 30 days.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Complete Form MGT-14 accurately</li>
                        <li>• Attach all required documents</li>
                        <li>• Pay prescribed government fees</li>
                        <li>• Submit through MCA21 portal</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Benefits of Changing Objects */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <CheckCircle className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Benefits of Changing Object Clause</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-3 text-green-400">🚀 Business Expansion</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Enter new business segments legally</li>
                    <li>• Diversify revenue streams</li>
                    <li>• Explore new market opportunities</li>
                    <li>• Adapt to changing business environment</li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-3 text-blue-400">⚖️ Legal Compliance</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Avoid ultra vires activities</li>
                    <li>• Ensure all operations are within MOA</li>
                    <li>• Maintain corporate governance</li>
                    <li>• Protect from legal challenges</li>
                  </ul>
                </div>
                
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-3 text-purple-400">💰 Financial Benefits</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Access new funding opportunities</li>
                    <li>• Attract investors in new sectors</li>
                    <li>• Improve creditworthiness</li>
                    <li>• Enable strategic partnerships</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <h3 className="font-semibold text-lg mb-3 text-yellow-400">🎯 Strategic Advantage</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Respond to market changes quickly</li>
                    <li>• Gain competitive advantage</li>
                    <li>• Future-proof business operations</li>
                    <li>• Enable merger & acquisition opportunities</li>
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
                  <h3 className="font-semibold text-lg mb-4 text-orange-400">📋 Board Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Board Resolution for MOA amendment</li>
                    <li>• Notice of Board Meeting</li>
                    <li>• Minutes of Board Meeting</li>
                    <li>• Directors' approval for changes</li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">🗳️ Shareholders' Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Notice of AGM/EGM (21 days)</li>
                    <li>• Special Resolution copy</li>
                    <li>• Minutes of AGM/EGM</li>
                    <li>• Amended Memorandum of Association</li>
                  </ul>
                </div>
                
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">🏛️ MCA Filing</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Form MGT-14 (duly filled)</li>
                    <li>• Current Certificate of Incorporation</li>
                    <li>• Existing Memorandum of Association</li>
                    <li>• Professional certification</li>
                  </ul>
                </div>
                
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-purple-400">✅ Supporting Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Digital signatures of directors</li>
                    <li>• CA/CS certification</li>
                    <li>• Justification for object changes</li>
                    <li>• Fee payment receipts</li>
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
                    <li>• <strong>Board Resolution:</strong> 1-2 days</li>
                    <li>• <strong>Shareholder Meeting:</strong> 21+ days notice</li>
                    <li>• <strong>AGM/EGM conduct:</strong> 1 day</li>
                    <li>• <strong>MGT-14 filing:</strong> Within 30 days</li>
                    <li>• <strong>MCA processing:</strong> 15-30 days</li>
                    <li>• <strong>Total timeline:</strong> 60-90 days</li>
                  </ul>
                </div>
                
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400">⚠️ Important Compliance</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• File MGT-14 within 30 days of resolution</li>
                    <li>• Special Resolution requires 75% majority</li>
                    <li>• 21-day notice mandatory for EGM/AGM</li>
                    <li>• Penalty for late filing: ₹100/day</li>
                    <li>• Update business licenses if required</li>
                    <li>• Inform banks and stakeholders</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Get Started */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Change Object Clause?</h2>
              <p className="text-xl mb-6 opacity-90">
                Expand your business legally with expert Object Clause amendment services. Start new business activities!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">60-90 Days</div>
                  <div className="text-sm opacity-80">Complete Process</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">₹5K-₹15K</div>
                  <div className="text-sm opacity-80">Professional Fees</div>
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
                <h3 className="text-2xl font-bold text-white mb-6">Get Object Clause Amendment</h3>
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
                      Business Activities to Add
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Tell us about new business activities you want to add..."
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