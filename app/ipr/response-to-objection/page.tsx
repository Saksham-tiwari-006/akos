'use client'

import React, { useState } from 'react';
import { MessageCircle, FileText, CheckCircle, AlertTriangle, Clock, Shield, Building, DollarSign, Edit } from 'lucide-react';

export default function ResponseToObjectionPage() {
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
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Response to Trademark Objection
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Expert objection response services to overcome examination reports and secure trademark registration.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Understanding Objections */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <AlertTriangle className="w-8 h-8 text-orange-400" />
                <h2 className="text-3xl font-bold text-white">Understanding Trademark Objections</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6">
                  Trademark objections are formal concerns raised by the Trademark Examiner during the examination process, citing reasons why the application may not proceed to registration. These objections are detailed in the Examination Report and require a comprehensive response within 30 days to address the examiner's concerns, provide clarifications, and demonstrate the trademark's eligibility for registration through legal arguments, evidence, and precedent citations.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-red-600/10 to-orange-600/10 p-6 rounded-lg border border-red-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Common Objection Types
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>Similarity:</strong> Identical/similar to existing trademarks</li>
                      <li>• <strong>Descriptiveness:</strong> Describing goods/services directly</li>
                      <li>• <strong>Genericness:</strong> Common words for the product</li>
                      <li>• <strong>Geographical:</strong> Place names without distinctiveness</li>
                      <li>• <strong>Misleading:</strong> Deceptive or confusing nature</li>
                      <li>• <strong>Prohibited:</strong> Contrary to public policy/morality</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 p-6 rounded-lg border border-blue-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Building className="w-5 h-5" />
                      Response Strategies
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>Legal Arguments:</strong> Statutory interpretation and case law</li>
                      <li>• <strong>Evidence Submission:</strong> Use and distinctiveness proof</li>
                      <li>• <strong>Precedent Citation:</strong> Similar allowed registrations</li>
                      <li>• <strong>Disclaimer Addition:</strong> Non-distinctive elements</li>
                      <li>• <strong>Specification Amendment:</strong> Goods/services modification</li>
                      <li>• <strong>Classification Change:</strong> Different class filing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Response Strategy Development */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Edit className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Response Strategy Development</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-blue-400">📋 Examination Report Analysis</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Detailed analysis of examiner's objections to identify core issues and develop targeted response strategies.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Comprehensive objection review and categorization</li>
                        <li>• Legal basis analysis for each objection raised</li>
                        <li>• Strength assessment of examiner's arguments</li>
                        <li>• Identification of response opportunities and angles</li>
                        <li>• Timeline and compliance requirement review</li>
                        <li>• Risk assessment and success probability evaluation</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-green-400">🔍 Evidence Collection & Preparation</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Systematic compilation of supporting evidence to demonstrate trademark eligibility and address specific concerns.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Use evidence compilation (invoices, advertisements)</li>
                        <li>• Distinctiveness proof through market recognition</li>
                        <li>• Coexistence evidence with similar marks</li>
                        <li>• International registration and acceptance proof</li>
                        <li>• Expert opinions and market survey data</li>
                        <li>• Comparative analysis with allowed registrations</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-purple-400">⚖️ Legal Argument Formulation</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Development of compelling legal arguments with statutory provisions and precedent citations.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Statutory interpretation and legal principle application</li>
                        <li>• Case law research and precedent identification</li>
                        <li>• Distinguishing factors and unique circumstances</li>
                        <li>• Policy arguments and public interest considerations</li>
                        <li>• International practice and comparative law</li>
                        <li>• Logical argument structure and persuasive reasoning</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-yellow-400">📝 Response Drafting & Submission</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Professional drafting of comprehensive response addressing all objections with supporting documentation.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Point-by-point objection response structure</li>
                        <li>• Professional legal language and terminology</li>
                        <li>• Evidence integration and proper referencing</li>
                        <li>• Alternative arguments and fallback positions</li>
                        <li>• Compliance with format and filing requirements</li>
                        <li>• Timely submission within statutory deadlines</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Types of Objections & Responses */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-red-400" />
                <h2 className="text-3xl font-bold text-white">Objection Types & Response Strategies</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400">🚫 Absolute Grounds Objections</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-white mb-2">Common Objections:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Lack of distinctiveness (Section 9(1)(a))</li>
                        <li>• Descriptive nature (Section 9(1)(b))</li>
                        <li>• Generic terms (Section 9(1)(c))</li>
                        <li>• Geographical names (Section 9(1)(d))</li>
                        <li>• Misleading marks (Section 9(1)(e))</li>
                        <li>• Prohibited emblems (Section 9(2))</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Response Strategies:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Acquired distinctiveness through use evidence</li>
                        <li>• Secondary meaning establishment</li>
                        <li>• Non-descriptive usage demonstration</li>
                        <li>• Coined word or invented term arguments</li>
                        <li>• Combination distinctiveness proof</li>
                        <li>• International acceptance evidence</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-orange-400">⚖️ Relative Grounds Objections</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-white mb-2">Similarity Objections:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Identical marks (Section 11(1))</li>
                        <li>• Similar marks causing confusion</li>
                        <li>• Well-known trademark conflicts</li>
                        <li>• Phonetic similarity issues</li>
                        <li>• Visual similarity concerns</li>
                        <li>• Conceptual similarity problems</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Response Approaches:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Different goods/services classification</li>
                        <li>• No likelihood of confusion arguments</li>
                        <li>• Coexistence in marketplace evidence</li>
                        <li>• Different consumer segments</li>
                        <li>• Distinctive elements emphasis</li>
                        <li>• Prior use and honest adoption</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-purple-400">📋 Procedural Objections</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-white mb-2">Formality Issues:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Incorrect classification of goods/services</li>
                        <li>• Improper representation of mark</li>
                        <li>• Missing or inadequate declarations</li>
                        <li>• Power of attorney defects</li>
                        <li>• Priority claim deficiencies</li>
                        <li>• Fee payment discrepancies</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Correction Methods:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Specification amendments and corrections</li>
                        <li>• Proper classification resubmission</li>
                        <li>• Corrected representation filing</li>
                        <li>• Fresh declarations and affidavits</li>
                        <li>• Proper authorization documents</li>
                        <li>• Additional fee payments if required</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Supporting Documentation */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Supporting Documentation</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">📊 Evidence Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Use evidence (invoices, bills, receipts)</li>
                    <li>• Advertisement materials and campaigns</li>
                    <li>• Media coverage and press releases</li>
                    <li>• Website screenshots and online presence</li>
                    <li>• Product catalogs and brochures</li>
                    <li>• Export/import documentation</li>
                    <li>• Market survey reports</li>
                    <li>• Consumer recognition studies</li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">⚖️ Legal Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Affidavits from proprietor/authorized person</li>
                    <li>• Expert opinions and legal precedents</li>
                    <li>• Comparative analysis charts</li>
                    <li>• International registration certificates</li>
                    <li>• Coexistence agreements (if any)</li>
                    <li>• Prior trademark registrations</li>
                    <li>• Court judgments and legal precedents</li>
                    <li>• Authorization letters and power of attorney</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Fee Structure & Timeline */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <DollarSign className="w-8 h-8 text-yellow-400" />
                <h2 className="text-3xl font-bold text-white">Response Fees & Timeline</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-yellow-400">💰 Professional Fees</h3>
                  <div className="space-y-4">
                    <div className="bg-yellow-600/10 p-4 rounded border border-yellow-500/20">
                      <h4 className="font-medium text-white mb-2">Response Complexity:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Simple objections: ₹15,000-₹25,000</li>
                        <li>• Moderate complexity: ₹25,000-₹40,000</li>
                        <li>• Complex objections: ₹40,000-₹75,000</li>
                        <li>• Multiple objections: ₹50,000-₹1,00,000</li>
                        <li>• Appeal preparation: ₹75,000-₹1,50,000</li>
                      </ul>
                    </div>
                    <div className="bg-blue-600/10 p-4 rounded border border-blue-500/20">
                      <h4 className="font-medium text-white mb-2">Additional Services:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Evidence compilation: ₹5,000-₹15,000</li>
                        <li>• Expert witness fees: ₹10,000-₹25,000</li>
                        <li>• Market survey costs: ₹25,000-₹50,000</li>
                        <li>• Hearing representation: ₹15,000-₹35,000</li>
                        <li>• Urgent response (48hrs): 50% surcharge</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Critical Timeline
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Response Deadline:</strong> 30 days from objection</li>
                    <li>• <strong>Extension Available:</strong> Additional 30 days (₹1,000 fee)</li>
                    <li>• <strong>Response Preparation:</strong> 7-15 days</li>
                    <li>• <strong>Evidence Collection:</strong> 5-10 days</li>
                    <li>• <strong>Legal Research:</strong> 3-7 days</li>
                    <li>• <strong>Review & Finalization:</strong> 2-3 days</li>
                    <li>• <strong>Examiner Review:</strong> 2-6 months</li>
                    <li>• <strong>Hearing (if required):</strong> 3-8 months</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Success Factors */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <CheckCircle className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Success Factors & Best Practices</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Key Success Factors
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Thorough Analysis:</strong> Complete understanding of objections</li>
                    <li>• <strong>Strong Evidence:</strong> Compelling use and distinctiveness proof</li>
                    <li>• <strong>Legal Expertise:</strong> Professional argument development</li>
                    <li>• <strong>Timely Response:</strong> Meeting all statutory deadlines</li>
                    <li>• <strong>Comprehensive Coverage:</strong> Addressing all raised points</li>
                    <li>• <strong>Strategic Approach:</strong> Multiple argument layers</li>
                    <li>• <strong>Professional Presentation:</strong> Proper format and language</li>
                  </ul>
                </div>
                
                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/20">
                  <h3 className="font-semibent text-lg mb-4 text-orange-400 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Common Pitfalls to Avoid
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Incomplete Response:</strong> Missing key objection points</li>
                    <li>• <strong>Weak Evidence:</strong> Insufficient proof of use/distinctiveness</li>
                    <li>• <strong>Late Filing:</strong> Missing statutory deadlines</li>
                    <li>• <strong>Generic Arguments:</strong> Lack of specific case analysis</li>
                    <li>• <strong>Poor Presentation:</strong> Unprofessional format/language</li>
                    <li>• <strong>Limited Research:</strong> Inadequate precedent citation</li>
                    <li>• <strong>Single Strategy:</strong> No alternative arguments</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Get Started */}
            <section className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Overcome Trademark Objections</h2>
              <p className="text-xl mb-6 opacity-90">
                Expert objection response services to secure your trademark registration with comprehensive legal support.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">30 Days</div>
                  <div className="text-sm opacity-80">Response Time</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">Expert</div>
                  <div className="text-sm opacity-80">Legal Team</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">High</div>
                  <div className="text-sm opacity-80">Success Rate</div>
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
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      placeholder="Trademark application number, objection type, examination report details, deadline date..."
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
                    Get Expert Response
                  </button>
                </form>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span>Expert Legal Team</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 text-blue-400 mr-2" />
                      <span>Timely Response</span>
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