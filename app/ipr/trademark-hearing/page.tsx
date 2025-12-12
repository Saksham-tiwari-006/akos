'use client'

import React, { useState } from 'react';
import { Users, FileText, CheckCircle, Gavel, Clock, Shield, Building, DollarSign, AlertTriangle } from 'lucide-react';

export default function TrademarkHearingPage() {
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Trademark Hearing Representation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Expert oral advocacy and representation at trademark hearings before the Indian Trademark Registry.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* What is Trademark Hearing */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Gavel className="w-8 h-8 text-purple-400" />
                <h2 className="text-3xl font-bold text-white">Understanding Trademark Hearings</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6">
                  A trademark hearing is an oral proceeding conducted by the Indian Trademark Registry when written submissions are insufficient to decide on trademark applications, objections, oppositions, or other disputes. It provides an opportunity for applicants and their representatives to present arguments, clarify positions, and address concerns directly before the Hearing Officer, making it a crucial stage in securing trademark registration or resolving conflicts.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-purple-600/10 to-indigo-600/10 p-6 rounded-lg border border-purple-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Gavel className="w-5 h-5" />
                      When Hearings Occur
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>Examination Objections:</strong> Complex objections requiring clarification</li>
                      <li>• <strong>Opposition Proceedings:</strong> Inter partes disputes</li>
                      <li>• <strong>Rectification Matters:</strong> IPAB referred cases</li>
                      <li>• <strong>Renewal Issues:</strong> Disputed renewal applications</li>
                      <li>• <strong>Assignment Disputes:</strong> Transfer-related conflicts</li>
                      <li>• <strong>Cancellation Proceedings:</strong> Registration challenges</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 p-6 rounded-lg border border-blue-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Building className="w-5 h-5" />
                      Types of Hearings
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>Ex-Parte Hearings:</strong> Applicant only (objection responses)</li>
                      <li>• <strong>Inter-Partes Hearings:</strong> Multiple parties (oppositions)</li>
                      <li>• <strong>Evidence Hearings:</strong> Document and witness examination</li>
                      <li>• <strong>Argument Hearings:</strong> Legal point clarifications</li>
                      <li>• <strong>Compliance Hearings:</strong> Procedural requirement checks</li>
                      <li>• <strong>Final Hearings:</strong> Decision-making proceedings</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Pre-Hearing Preparation */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">Pre-Hearing Preparation Strategy</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-blue-400">📋 Case Analysis & Strategy</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Comprehensive review of case history, objections raised, and development of strategic response framework.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Complete file review and case chronology</li>
                        <li>• Identification of key issues and concerns</li>
                        <li>• Legal precedent research and citation preparation</li>
                        <li>• Weakness analysis and counter-argument development</li>
                        <li>• Evidence evaluation and gap identification</li>
                        <li>• Strategic positioning and argument prioritization</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-green-400">📊 Evidence Compilation & Organization</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Systematic organization of all supporting documents, evidence, and exhibits for hearing presentation.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Documentary evidence compilation and indexing</li>
                        <li>• Exhibit preparation with proper markings</li>
                        <li>• Witness statement preparation (if required)</li>
                        <li>• Technical evidence and expert reports</li>
                        <li>• Comparative analysis and market survey data</li>
                        <li>• Digital evidence authentication and certification</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-purple-400">⚖️ Legal Argument Development</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Crafting compelling legal arguments with statutory provisions, case law citations, and persuasive reasoning.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Statutory provision analysis and application</li>
                        <li>• Relevant case law research and distinction</li>
                        <li>• Logical argument structure and flow</li>
                        <li>• Counter-argument anticipation and responses</li>
                        <li>• Policy argument and public interest considerations</li>
                        <li>• International practice and comparative law</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-yellow-400">🎯 Presentation Rehearsal</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Mock hearing sessions and presentation practice to ensure confident and effective advocacy.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Argument presentation practice and timing</li>
                        <li>• Q&A session preparation and response drilling</li>
                        <li>• Key points emphasis and delivery techniques</li>
                        <li>• Visual aid and demonstrative preparation</li>
                        <li>• Contingency planning for different scenarios</li>
                        <li>• Client briefing and expectation management</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Hearing Conduct & Advocacy */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Users className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Hearing Conduct & Oral Advocacy</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-green-400">🎤 Opening Arguments & Position Statement</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Clear articulation of client's position with structured argument presentation and key point emphasis.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Concise case overview and factual background</li>
                        <li>• Clear legal position statement</li>
                        <li>• Issue framing and scope definition</li>
                        <li>• Key argument preview and roadmap</li>
                        <li>• Relief sought and outcome expectations</li>
                        <li>• Professional courtroom demeanor maintenance</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-blue-400">📚 Evidence Presentation & Examination</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Systematic presentation of evidence with proper authentication and relevance establishment.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Document authentication and admission</li>
                        <li>• Exhibit marking and identification</li>
                        <li>• Witness examination and cross-examination</li>
                        <li>• Technical evidence explanation</li>
                        <li>• Digital evidence verification</li>
                        <li>• Expert testimony coordination</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-purple-400">⚖️ Legal Argument & Statutory Interpretation</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Persuasive legal reasoning with authoritative citations and statutory interpretation.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Statutory provision interpretation and application</li>
                        <li>• Precedential authority citation and distinction</li>
                        <li>• Policy argument and legislative intent</li>
                        <li>• Comparative jurisprudence references</li>
                        <li>• Public interest and equity considerations</li>
                        <li>• Logical reasoning and persuasive advocacy</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-500/10 p-6 rounded-lg border border-indigo-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-indigo-400">❓ Response to Queries & Counter-Arguments</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Effective handling of Hearing Officer queries and opposition arguments with confident responses.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Immediate query response and clarification</li>
                        <li>• Counter-argument rebuttal and distinction</li>
                        <li>• Additional authority citation on demand</li>
                        <li>• Factual clarification and correction</li>
                        <li>• Alternative argument presentation</li>
                        <li>• Closing statement and summary</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Hearing Outcomes */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <CheckCircle className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Possible Hearing Outcomes</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Favorable Outcomes
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Objection Withdrawn:</strong> Complete acceptance of application</li>
                    <li>• <strong>Conditional Acceptance:</strong> Minor modifications required</li>
                    <li>• <strong>Opposition Dismissed:</strong> Third-party challenge rejected</li>
                    <li>• <strong>Registration Granted:</strong> Successful trademark approval</li>
                    <li>• <strong>Rectification Refused:</strong> Registration validity maintained</li>
                    <li>• <strong>Appeal Success:</strong> Lower decision overturned</li>
                    <li>• <strong>Settlement Approved:</strong> Mutually agreed resolution</li>
                  </ul>
                </div>
                
                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-orange-400 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Adverse Outcomes & Next Steps
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Application Refused:</strong> Appeal or fresh application options</li>
                    <li>• <strong>Opposition Sustained:</strong> Registration blocked or limited</li>
                    <li>• <strong>Rectification Granted:</strong> Registration cancelled or modified</li>
                    <li>• <strong>Conditional Orders:</strong> Compliance requirements imposed</li>
                    <li>• <strong>Adjournment Granted:</strong> Further evidence/argument needed</li>
                    <li>• <strong>Cost Orders:</strong> Legal cost liability imposed</li>
                    <li>• <strong>Appeal Rights:</strong> Higher forum challenge available</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Success Factors */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Shield className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">Success Factors & Best Practices</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Key Success Factors
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Thorough Preparation:</strong> Complete case analysis and strategy</li>
                    <li>• <strong>Expert Representation:</strong> Experienced trademark attorneys</li>
                    <li>• <strong>Strong Evidence:</strong> Compelling documentary support</li>
                    <li>• <strong>Clear Arguments:</strong> Logical and persuasive reasoning</li>
                    <li>• <strong>Professional Conduct:</strong> Courtroom etiquette and demeanor</li>
                    <li>• <strong>Quick Response:</strong> Effective handling of queries</li>
                    <li>• <strong>Strategic Flexibility:</strong> Adaptability during proceedings</li>
                  </ul>
                </div>
                
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-purple-400 flex items-center gap-2">
                    <Gavel className="w-5 h-5" />
                    Best Practices
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Punctuality:</strong> Arrive well before hearing time</li>
                    <li>• <strong>Documentation:</strong> Carry organized file copies</li>
                    <li>• <strong>Respectful Tone:</strong> Maintain professional courtesy</li>
                    <li>• <strong>Concise Arguments:</strong> Avoid unnecessary elaboration</li>
                    <li>• <strong>Direct Answers:</strong> Address queries specifically</li>
                    <li>• <strong>Record Maintenance:</strong> Note key points and directions</li>
                    <li>• <strong>Follow-up Action:</strong> Implement hearing directions promptly</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Fee Structure & Timeline */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <DollarSign className="w-8 h-8 text-yellow-400" />
                <h2 className="text-3xl font-bold text-white">Hearing Representation Fees</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-yellow-400">💰 Professional Fees</h3>
                  <div className="space-y-4">
                    <div className="bg-yellow-600/10 p-4 rounded border border-yellow-500/20">
                      <h4 className="font-medium text-white mb-2">Hearing Representation:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Simple hearings: ₹15,000-₹25,000</li>
                        <li>• Complex hearings: ₹25,000-₹50,000</li>
                        <li>• Opposition hearings: ₹30,000-₹75,000</li>
                        <li>• IPAB hearings: ₹50,000-₹1,00,000</li>
                        <li>• Appeal hearings: ₹75,000-₹1,50,000</li>
                      </ul>
                    </div>
                    <div className="bg-blue-600/10 p-4 rounded border border-blue-500/20">
                      <h4 className="font-medium text-white mb-2">Additional Services:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Case preparation: ₹10,000-₹25,000</li>
                        <li>• Evidence compilation: ₹5,000-₹15,000</li>
                        <li>• Travel & accommodation: Actual costs</li>
                        <li>• Adjournment handling: ₹5,000-₹10,000</li>
                        <li>• Post-hearing follow-up: ₹2,000-₹5,000</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Timeline & Process
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Hearing Notice:</strong> 15-30 days advance notice</li>
                    <li>• <strong>Preparation Time:</strong> 1-2 weeks intensive prep</li>
                    <li>• <strong>Hearing Duration:</strong> 30 minutes to 3 hours</li>
                    <li>• <strong>Decision Timeline:</strong> 2-8 weeks post-hearing</li>
                    <li>• <strong>Order Communication:</strong> 1-2 weeks</li>
                    <li>• <strong>Appeal Period:</strong> 30 days from order</li>
                    <li>• <strong>Compliance Time:</strong> As per order directions</li>
                    <li>• <strong>Total Process:</strong> 2-6 months</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Get Started */}
            <section className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Expert Hearing Representation</h2>
              <p className="text-xl mb-6 opacity-90">
                Secure favorable outcomes with professional oral advocacy and strategic hearing representation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">Expert</div>
                  <div className="text-sm opacity-80">Advocates</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">Strategic</div>
                  <div className="text-sm opacity-80">Preparation</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">Success</div>
                  <div className="text-sm opacity-80">Focused</div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Hearing Representation</h3>
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
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Hearing Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Hearing type, case details, hearing date/notice, trademark number, specific concerns..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="file" className="block text-sm font-medium text-gray-300 mb-2">
                      Upload Case Documents (Optional)
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
                    className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Get Hearing Representation
                  </button>
                </form>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span>Expert Advocates</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 text-blue-400 mr-2" />
                      <span>Success Focused</span>
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