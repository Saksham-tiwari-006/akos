'use client'

import React, { useState } from 'react';
import { Shield, FileText, CheckCircle, AlertTriangle, Clock, Users, Building, DollarSign, MessageSquare } from 'lucide-react';

export default function TrademarkOppositionPage() {
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
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Trademark Opposition
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Handle trademark opposition proceedings with expert legal representation, evidence preparation, and hearing advocacy.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* What is Trademark Opposition */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Shield className="w-8 h-8 text-red-400" />
                <h2 className="text-3xl font-bold text-white">What is Trademark Opposition?</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6">
                  Trademark opposition is a legal proceeding where any third party can challenge a trademark application after it has been published in the Trade Marks Journal but before registration. The opposition must be filed within 4 months of publication, and it allows interested parties to prevent registration of marks that may conflict with their existing rights or interests.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-red-600/10 to-orange-600/10 p-6 rounded-lg border border-red-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <MessageSquare className="w-5 h-5" />
                      Opposition Grounds
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>Similarity:</strong> Confusingly similar to existing marks</li>
                      <li>• <strong>Bad Faith:</strong> Fraudulent or dishonest filing</li>
                      <li>• <strong>Prior Rights:</strong> Earlier use or registration</li>
                      <li>• <strong>Misleading Mark:</strong> Deceptive or offensive content</li>
                      <li>• <strong>Well-known Mark:</strong> Conflicts with famous brands</li>
                      <li>• <strong>Generic Terms:</strong> Common words in trade</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-600/10 to-indigo-600/10 p-6 rounded-lg border border-blue-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      Opposition Timeline
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>Publication:</strong> Mark published in TM Journal</li>
                      <li>• <strong>Opposition Window:</strong> 4 months from publication</li>
                      <li>• <strong>Notice Period:</strong> 30 days for opponent's evidence</li>
                      <li>• <strong>Counter-statement:</strong> 30 days for applicant reply</li>
                      <li>• <strong>Evidence Stage:</strong> 3 months each party</li>
                      <li>• <strong>Hearing & Decision:</strong> 3-12 months</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Opposition Process */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">Opposition Process</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-blue-400">📋 File Opposition Notice</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Submit Notice of Opposition within 4 months of trademark publication in the Trade Marks Journal.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• File Form TM-O with grounds of opposition</li>
                        <li>• Pay prescribed government fees</li>
                        <li>• State clear reasons for opposition</li>
                        <li>• Provide opponent's details and interest</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-green-400">📤 Send Notice to Applicant</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Registry serves copy of opposition notice to the trademark applicant for their response.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Copy sent to applicant's address</li>
                        <li>• 30 days time for counter-statement</li>
                        <li>• Option to amend application</li>
                        <li>• Opportunity for settlement</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-purple-400">📝 Counter-Statement Filing</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Applicant files counter-statement defending their application against opposition grounds.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Address each ground of opposition</li>
                        <li>• Provide legal and factual defense</li>
                        <li>• Challenge opponent's locus standi</li>
                        <li>• Counter-claim if applicable</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-yellow-400">📊 Evidence Stage</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Both parties submit evidence supporting their respective positions in the opposition.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Opponent's evidence (3 months)</li>
                        <li>• Applicant's evidence (3 months)</li>
                        <li>• Opponent's evidence in reply (1 month)</li>
                        <li>• Affidavits and documentary evidence</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-500/10 p-6 rounded-lg border border-indigo-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-indigo-400">⚖️ Hearing & Decision</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Registry conducts hearing and decides whether to allow or refuse the trademark application.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Oral hearing before Assistant Registrar</li>
                        <li>• Both parties present arguments</li>
                        <li>• Registry evaluates evidence and law</li>
                        <li>• Final decision: Allow or refuse registration</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Grounds for Opposition */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <AlertTriangle className="w-8 h-8 text-orange-400" />
                <h2 className="text-3xl font-bold text-white">Grounds for Opposition</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400">🚫 Absolute Grounds</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-white mb-2">Inherent Issues:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Lack of distinctive character</li>
                        <li>• Descriptive of goods/services</li>
                        <li>• Generic or common terms</li>
                        <li>• Customary language usage</li>
                        <li>• Deceptive or misleading nature</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Prohibited Content:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Offensive or scandalous marks</li>
                        <li>• Religious sentiments violation</li>
                        <li>• National emblems misuse</li>
                        <li>• Geographical indications</li>
                        <li>• Chemical substances names</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-orange-400">⚖️ Relative Grounds</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-white mb-2">Prior Rights Conflicts:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Identical to earlier trademark</li>
                        <li>• Confusingly similar marks</li>
                        <li>• Same class of goods/services</li>
                        <li>• Related goods likelihood of confusion</li>
                        <li>• Well-known trademark dilution</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Other Rights:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Copyright infringement</li>
                        <li>• Design rights violation</li>
                        <li>• Personality rights</li>
                        <li>• Trade name conflicts</li>
                        <li>• Domain name disputes</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">💼 Bad Faith Grounds</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-white mb-2">Fraudulent Filing:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Knowledge of opponent's prior use</li>
                        <li>• Dishonest adoption</li>
                        <li>• Agent/distributor betrayal</li>
                        <li>• Squatting on famous marks</li>
                        <li>• Intentional copying</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Commercial Dishonesty:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Passing off attempts</li>
                        <li>• Unfair competition</li>
                        <li>• Consumer deception</li>
                        <li>• Market confusion creation</li>
                        <li>• Goodwill misappropriation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Defense Strategies */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <CheckCircle className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Defense Strategies</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">🛡️ Strong Defense Arguments</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>No Similarity:</strong> Marks are clearly distinguishable</li>
                    <li>• <strong>Different Classes:</strong> Goods/services in unrelated categories</li>
                    <li>• <strong>Honest Adoption:</strong> Independent creation without copying</li>
                    <li>• <strong>Prior Use:</strong> Applicant's earlier use than opponent</li>
                    <li>• <strong>Locus Standi:</strong> Opponent lacks standing to oppose</li>
                    <li>• <strong>Co-existence:</strong> Marks can peacefully co-exist</li>
                    <li>• <strong>Acquiescence:</strong> Opponent's delay in objection</li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">📊 Supporting Evidence</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Usage Evidence:</strong> Sales, marketing, advertising materials</li>
                    <li>• <strong>Market Recognition:</strong> Customer surveys, testimonials</li>
                    <li>• <strong>Media Coverage:</strong> Press coverage, industry recognition</li>
                    <li>• <strong>Distinctiveness:</strong> Acquired secondary meaning proof</li>
                    <li>• <strong>Co-existence:</strong> Peaceful use without confusion</li>
                    <li>• <strong>International Use:</strong> Global recognition and registration</li>
                    <li>• <strong>Investment Evidence:</strong> Substantial promotional expenses</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Required Documents */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-purple-400" />
                <h2 className="text-3xl font-bold text-white">Required Documents</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-purple-400">📋 Opposition Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Notice of Opposition (Form TM-O)</li>
                    <li>• Statement of grounds and particulars</li>
                    <li>• Evidence of opponent's prior rights</li>
                    <li>• Power of attorney (if filed by agent)</li>
                    <li>• Proof of interest/locus standi</li>
                    <li>• Registration certificates of earlier marks</li>
                    <li>• Evidence of use and reputation</li>
                  </ul>
                </div>
                
                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-orange-400">✅ Counter-Statement Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Counter-statement defending application</li>
                    <li>• Evidence of applicant's prior use</li>
                    <li>• Proof of honest adoption</li>
                    <li>• Sales and marketing evidence</li>
                    <li>• Customer recognition proof</li>
                    <li>• International registration certificates</li>
                    <li>• Expert opinions on distinctiveness</li>
                  </ul>
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
                  <h3 className="font-semibold text-lg mb-4 text-yellow-400">⏰ Opposition Timeline</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Opposition Filing:</strong> Within 4 months of publication</li>
                    <li>• <strong>Counter-statement:</strong> 30 days from notice</li>
                    <li>• <strong>Evidence Stage:</strong> 6-7 months total</li>
                    <li>• <strong>Hearing Preparation:</strong> 1-2 months</li>
                    <li>• <strong>Hearing & Decision:</strong> 3-12 months</li>
                    <li>• <strong>Total Duration:</strong> 12-24 months</li>
                  </ul>
                </div>
                
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400">💰 Opposition Costs</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Filing Fee:</strong> ₹2,500</li>
                    <li>• <strong>Legal Fees:</strong> ₹50,000-₹3,00,000</li>
                    <li>• <strong>Evidence Preparation:</strong> ₹25,000-₹1,00,000</li>
                    <li>• <strong>Hearing Representation:</strong> ₹25,000-₹1,50,000</li>
                    <li>• <strong>Expert Witnesses:</strong> ₹20,000-₹1,00,000</li>
                    <li>• <strong>Total Investment:</strong> ₹1,25,000-₹7,50,000</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Get Started */}
            <section className="bg-gradient-to-r from-red-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Trademark Opposition Assistance</h2>
              <p className="text-xl mb-6 opacity-90">
                Protect your trademark rights or defend against opposition with expert legal representation and strategic advocacy.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">4 Months</div>
                  <div className="text-sm opacity-80">Opposition Window</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">12-24 M</div>
                  <div className="text-sm opacity-80">Full Process</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">₹1.25L+</div>
                  <div className="text-sm opacity-80">Legal Investment</div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Opposition Support</h3>
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
                      Opposition Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Trademark details, opposition/defense requirements, publication date..."
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
                    Get Opposition Help
                  </button>
                </form>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span>Expert Advocacy</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 text-blue-400 mr-2" />
                      <span>Legal Strategy</span>
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