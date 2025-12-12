'use client'

import React, { useState } from 'react';
import { AlertCircle, FileText, CheckCircle, AlertTriangle, Clock, Shield, Building, DollarSign, MessageSquare } from 'lucide-react';

export default function TrademarkObjectionPage() {
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-600 rounded-full mb-6">
              <AlertCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Trademark Objection
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Overcome trademark examination objections with expert legal responses, evidence submission, and hearing representation.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* What is Trademark Objection */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <AlertCircle className="w-8 h-8 text-orange-400" />
                <h2 className="text-3xl font-bold text-white">What is Trademark Objection?</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6">
                  Trademark objection occurs during the examination process when the Trademark Registry raises concerns about a trademark application. The examiner may object based on similarity with existing marks, descriptiveness, incomplete documentation, or non-compliance with trademark laws. A proper response is crucial for the application to proceed toward publication and registration.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-orange-600/10 to-red-600/10 p-6 rounded-lg border border-orange-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <MessageSquare className="w-5 h-5" />
                      Common Objection Grounds
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>Similarity:</strong> Resemblance to existing trademarks</li>
                      <li>• <strong>Descriptiveness:</strong> Mark describes goods/services</li>
                      <li>• <strong>Generic Terms:</strong> Common words in trade</li>
                      <li>• <strong>Incomplete Documents:</strong> Missing required papers</li>
                      <li>• <strong>Prohibited Marks:</strong> Deceptive or offensive marks</li>
                      <li>• <strong>Absolute Grounds:</strong> Lack of distinctiveness</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-600/10 to-indigo-600/10 p-6 rounded-lg border border-blue-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      Response Timeline
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>Examination Report:</strong> Issued during examination</li>
                      <li>• <strong>Response Period:</strong> 30 days from objection</li>
                      <li>• <strong>Extension:</strong> Additional 30 days (with fee)</li>
                      <li>• <strong>Maximum Time:</strong> 60 days total response time</li>
                      <li>• <strong>Hearing:</strong> If written response insufficient</li>
                      <li>• <strong>Final Decision:</strong> Accept or reject application</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Types of Objections */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <AlertTriangle className="w-8 h-8 text-red-400" />
                <h2 className="text-3xl font-bold text-white">Types of Trademark Objections</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400">🚫 Absolute Grounds for Refusal</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-white mb-2">Distinctiveness Issues:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Lack of distinctive character</li>
                        <li>• Descriptive of goods/services</li>
                        <li>• Generic or common terms</li>
                        <li>• Customary language usage</li>
                        <li>• Laudatory or promotional words</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Prohibited Content:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Deceptive or misleading marks</li>
                        <li>• Offensive or scandalous content</li>
                        <li>• Religious sentiments violation</li>
                        <li>• National emblems or flags</li>
                        <li>• Chemical substances names</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-orange-400">⚖️ Relative Grounds for Refusal</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-white mb-2">Similarity Conflicts:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Identical to earlier trademark</li>
                        <li>• Confusingly similar marks</li>
                        <li>• Same phonetic sound</li>
                        <li>• Visual similarity concerns</li>
                        <li>• Conceptual resemblance</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Prior Rights:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Earlier filed applications</li>
                        <li>• Well-known trademarks</li>
                        <li>• Geographical indications</li>
                        <li>• Copyright conflicts</li>
                        <li>• Personality rights issues</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">📋 Procedural Objections</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-white mb-2">Documentation Issues:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Incomplete application form</li>
                        <li>• Missing required documents</li>
                        <li>• Incorrect fee payment</li>
                        <li>• Poor quality trademark representation</li>
                        <li>• Unclear goods/services description</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Formal Requirements:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Incorrect applicant details</li>
                        <li>• Missing power of attorney</li>
                        <li>• Wrong classification of goods</li>
                        <li>• Address verification issues</li>
                        <li>• Signature discrepancies</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Response Process */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Objection Response Process</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-blue-400">📥 Receive Examination Report</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Carefully analyze the examination report to understand specific objections raised by the examiner.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Review all objections mentioned</li>
                        <li>• Understand legal grounds cited</li>
                        <li>• Check conflicting trademarks cited</li>
                        <li>• Note response deadline (30 days)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-green-400">📝 Prepare Written Response</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Draft a comprehensive written reply addressing each objection with legal arguments and evidence.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Address each objection point-by-point</li>
                        <li>• Provide legal arguments and case laws</li>
                        <li>• Submit evidence of trademark use</li>
                        <li>• Clarify any misunderstandings</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-purple-400">📄 Submit Supporting Evidence</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Compile and submit relevant evidence to support your arguments and demonstrate trademark use.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Evidence of prior use and sales</li>
                        <li>• Marketing and advertising materials</li>
                        <li>• Customer testimonials</li>
                        <li>• International registrations (if any)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-yellow-400">⚖️ Attend Hearing (If Required)</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        If written response is insufficient, attend the hearing to present arguments before the examiner.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Prepare oral arguments</li>
                        <li>• Bring additional evidence if needed</li>
                        <li>• Professional legal representation</li>
                        <li>• Address examiner's concerns directly</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-500/10 p-6 rounded-lg border border-indigo-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-indigo-400">✅ Await Final Decision</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Registry will review your response and decide to accept the application for publication or reject it.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Application accepted for publication</li>
                        <li>• Additional objections raised</li>
                        <li>• Application rejected (appeal possible)</li>
                        <li>• Conditional acceptance with amendments</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Arguments & Evidence */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Shield className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">Key Arguments & Evidence</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">🎯 Strong Legal Arguments</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Distinctiveness:</strong> Trademark has acquired distinctiveness through use</li>
                    <li>• <strong>Co-existence:</strong> Cited marks can co-exist peacefully</li>
                    <li>• <strong>Different Classes:</strong> Goods/services in different categories</li>
                    <li>• <strong>Prior Rights:</strong> Earlier use in the market</li>
                    <li>• <strong>Case Laws:</strong> Relevant judicial precedents</li>
                    <li>• <strong>International Practice:</strong> Global registration acceptance</li>
                  </ul>
                </div>
                
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">📊 Supporting Evidence</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Sales Records:</strong> Invoices and financial statements</li>
                    <li>• <strong>Marketing Materials:</strong> Advertisements, brochures, website</li>
                    <li>• <strong>Media Coverage:</strong> Press releases, news articles</li>
                    <li>• <strong>Customer Recognition:</strong> Testimonials, market surveys</li>
                    <li>• <strong>Export Evidence:</strong> International sales documentation</li>
                    <li>• <strong>Awards & Recognition:</strong> Industry awards, certifications</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Success Strategies */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <CheckCircle className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Success Strategies</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Best Practices for Response
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                    <div>
                      <h4 className="font-medium text-white mb-2">Response Quality:</h4>
                      <ul className="space-y-1">
                        <li>• Address every objection specifically</li>
                        <li>• Use precise legal language</li>
                        <li>• Provide comprehensive evidence</li>
                        <li>• Maintain professional tone</li>
                        <li>• Cite relevant case laws</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Professional Approach:</h4>
                      <ul className="space-y-1">
                        <li>• Engage experienced trademark attorneys</li>
                        <li>• Conduct thorough prior art search</li>
                        <li>• Prepare multiple argument strategies</li>
                        <li>• Gather strong supporting evidence</li>
                        <li>• Ensure timely submission</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-orange-400 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Common Mistakes to Avoid
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                    <div>
                      <h4 className="font-medium text-white mb-2">Response Errors:</h4>
                      <ul className="space-y-1">
                        <li>• Generic or template responses</li>
                        <li>• Failing to address all objections</li>
                        <li>• Weak or insufficient evidence</li>
                        <li>• Missing response deadlines</li>
                        <li>• Aggressive or confrontational tone</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Strategic Mistakes:</h4>
                      <ul className="space-y-1">
                        <li>• Not seeking professional help</li>
                        <li>• Ignoring similar trademark risks</li>
                        <li>• Inadequate evidence compilation</li>
                        <li>• Poor hearing preparation</li>
                        <li>• Giving up too easily</li>
                      </ul>
                    </div>
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
                  <h3 className="font-semibold text-lg mb-4 text-yellow-400">⏰ Response Timeline</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Analysis & Strategy:</strong> 3-7 days</li>
                    <li>• <strong>Evidence Collection:</strong> 7-15 days</li>
                    <li>• <strong>Response Drafting:</strong> 5-10 days</li>
                    <li>• <strong>Review & Filing:</strong> 2-5 days</li>
                    <li>• <strong>Registry Processing:</strong> 2-6 months</li>
                    <li>• <strong>Hearing (if required):</strong> 1-3 months</li>
                  </ul>
                </div>
                
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400">💰 Service Costs</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Written Response:</strong> ₹15,000-₹50,000</li>
                    <li>• <strong>Evidence Compilation:</strong> ₹5,000-₹20,000</li>
                    <li>• <strong>Legal Research:</strong> ₹10,000-₹30,000</li>
                    <li>• <strong>Hearing Representation:</strong> ₹20,000-₹75,000</li>
                    <li>• <strong>Extension Fee:</strong> ₹5,000 (govt)</li>
                    <li>• <strong>Total Cost:</strong> ₹25,000-₹1,50,000</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Get Started */}
            <section className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Facing Trademark Objection?</h2>
              <p className="text-xl mb-6 opacity-90">
                Don't let objections stop your trademark registration. Get expert legal assistance to overcome examination hurdles.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">30 Days</div>
                  <div className="text-sm opacity-80">Response Time</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">85%+</div>
                  <div className="text-sm opacity-80">Success Rate</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">₹25K+</div>
                  <div className="text-sm opacity-80">Starting Cost</div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Objection Response</h3>
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
                      Objection Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Trademark application number, objection grounds, examination report details..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="file" className="block text-sm font-medium text-gray-300 mb-2">
                      Upload Examination Report (Optional)
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
                    className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-orange-700 hover:to-red-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Fight Trademark Objection
                  </button>
                </form>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span>Expert Response</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 text-blue-400 mr-2" />
                      <span>Legal Support</span>
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