'use client'

import React, { useState } from 'react';
import { AlertTriangle, FileText, CheckCircle, Scale, Clock, Shield, Building, DollarSign, Gavel } from 'lucide-react';

export default function TrademarkRectificationPage() {
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
              <AlertTriangle className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Trademark Rectification
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Remove or correct wrongly registered trademarks through IPAB rectification proceedings and legal challenges.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* What is Trademark Rectification */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Scale className="w-8 h-8 text-red-400" />
                <h2 className="text-3xl font-bold text-white">Understanding Trademark Rectification</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6">
                  Trademark rectification is a legal proceeding to correct, modify, or remove trademark registrations that were wrongly entered in the trademark register. Filed before the Intellectual Property Appellate Board (IPAB), it allows interested parties to challenge trademark registrations that shouldn't have been granted due to various legal grounds, providing a mechanism to clean up the trademark register and protect legitimate rights.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-red-600/10 to-orange-600/10 p-6 rounded-lg border border-red-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Gavel className="w-5 h-5" />
                      Types of Rectification
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>Removal/Expungement:</strong> Complete deletion from register</li>
                      <li>• <strong>Limitation:</strong> Restricting scope of protection</li>
                      <li>• <strong>Correction:</strong> Fixing errors in registration details</li>
                      <li>• <strong>Cancellation:</strong> Invalidating entire registration</li>
                      <li>• <strong>Amendment:</strong> Modifying specification of goods/services</li>
                      <li>• <strong>Partial Removal:</strong> Removing specific classes/goods</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 p-6 rounded-lg border border-blue-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Building className="w-5 h-5" />
                      Who Can File
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>Aggrieved Persons:</strong> Those affected by registration</li>
                      <li>• <strong>Prior Users:</strong> Earlier users of similar marks</li>
                      <li>• <strong>Competitors:</strong> Business competitors in same field</li>
                      <li>• <strong>Rights Holders:</strong> Owners of prior registered marks</li>
                      <li>• <strong>Registrar:</strong> Trademark Office in specific cases</li>
                      <li>• <strong>Central Government:</strong> In cases involving national emblems</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Grounds for Rectification */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-orange-400" />
                <h2 className="text-3xl font-bold text-white">Grounds for Rectification</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-red-400">🚫 Absolute Grounds for Refusal</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Registration violated absolute prohibitions under Section 9 of the Trademarks Act.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Lack of distinctiveness or descriptiveness</li>
                        <li>• Generic or common words for goods/services</li>
                        <li>• Geographical names without secondary meaning</li>
                        <li>• Misleading or deceptive nature</li>
                        <li>• Contrary to public policy or morality</li>
                        <li>• Use of prohibited emblems or symbols</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-orange-400">⚖️ Relative Grounds for Refusal</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Registration conflicts with existing rights under Section 11 of the Trademarks Act.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Identical/similar to earlier trademark</li>
                        <li>• Likelihood of confusion with prior marks</li>
                        <li>• Well-known trademark infringement</li>
                        <li>• Passing off of established business</li>
                        <li>• Copyright or design rights violation</li>
                        <li>• Personality rights infringement</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-yellow-400">📋 Procedural Defects</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Registration obtained through improper procedures or fraud.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Fraudulent application or false statements</li>
                        <li>• Improper classification of goods/services</li>
                        <li>• Lack of genuine intention to use</li>
                        <li>• Non-compliance with filing requirements</li>
                        <li>• Examination errors by trademark office</li>
                        <li>• Procedural lapses during registration</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-purple-400">🔄 Non-Use and Abandonment</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Registration should be removed due to non-use or abandonment by the proprietor.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Non-use for continuous period of 5+ years</li>
                        <li>• Abandonment of trademark rights</li>
                        <li>• Improper use leading to genericness</li>
                        <li>• Failure to maintain trademark distinctiveness</li>
                        <li>• Assignment in gross without goodwill</li>
                        <li>• Licensing violations causing loss of control</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Rectification Procedure */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Gavel className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">IPAB Rectification Procedure</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-blue-400">📋 Application Filing</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        File rectification application before IPAB with proper grounds and supporting evidence.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• File Form O-6 with IPAB</li>
                        <li>• Pay prescribed fees (₹2,500 for individuals/startups, ₹10,000 for others)</li>
                        <li>• Submit statement of case with grounds</li>
                        <li>• Provide supporting evidence and documents</li>
                        <li>• Serve notice on trademark proprietor</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-green-400">⚖️ Counter-Statement Filing</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Trademark owner files counter-statement defending the registration within prescribed time.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• 30-60 days time limit for response</li>
                        <li>• File counter-statement with IPAB</li>
                        <li>• Defend validity of trademark registration</li>
                        <li>• Provide evidence of use and distinctiveness</li>
                        <li>• Counter the grounds raised by applicant</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-purple-400">📊 Evidence Stage</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Both parties submit evidence in support of their respective cases.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Applicant files evidence-in-chief</li>
                        <li>• Respondent files evidence-in-reply</li>
                        <li>• Cross-examination of witnesses (if needed)</li>
                        <li>• Documentary evidence submission</li>
                        <li>• Expert testimony and market surveys</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-500/10 p-6 rounded-lg border border-indigo-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-indigo-400">🎯 Hearing and Decision</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        IPAB conducts hearing and delivers final decision on rectification application.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Oral hearing before IPAB bench</li>
                        <li>• Legal arguments presentation</li>
                        <li>• Evidence evaluation and analysis</li>
                        <li>• IPAB decision on rectification</li>
                        <li>• Order for removal, limitation, or dismissal</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Required Documents */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Required Documents</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">📋 Application Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Form O-6 (Rectification Application)</li>
                    <li>• Statement of case with grounds</li>
                    <li>• Copy of impugned trademark registration</li>
                    <li>• Evidence of prior rights or use</li>
                    <li>• Power of attorney (if filed through advocate)</li>
                    <li>• Proof of service on trademark proprietor</li>
                    <li>• Fee payment challan/receipt</li>
                    <li>• List of documents and evidence</li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">📊 Supporting Evidence</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Prior use evidence and invoices</li>
                    <li>• Registration certificates of earlier marks</li>
                    <li>• Market survey reports and consumer studies</li>
                    <li>• Advertising and promotional materials</li>
                    <li>• Expert opinions and legal precedents</li>
                    <li>• International registrations and use</li>
                    <li>• Cease and desist notices sent/received</li>
                    <li>• Court judgments and legal proceedings</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Fee Structure and Timeline */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <DollarSign className="w-8 h-8 text-yellow-400" />
                <h2 className="text-3xl font-bold text-white">Fees & Timeline</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-yellow-400">💰 IPAB Fees</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-gray-300">
                      <thead>
                        <tr className="border-b border-gray-600">
                          <th className="text-left py-2 font-medium text-white">Applicant Type</th>
                          <th className="text-right py-2 font-medium text-white">Filing Fee</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-700">
                          <td className="py-2">Individual/Startup</td>
                          <td className="text-right py-2">₹2,500</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2">Small Entity</td>
                          <td className="text-right py-2">₹5,000</td>
                        </tr>
                        <tr>
                          <td className="py-2">Others</td>
                          <td className="text-right py-2">₹10,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-yellow-500/20">
                    <h4 className="font-medium text-white mb-2">Additional Costs:</h4>
                    <ul className="space-y-1 text-sm text-gray-300">
                      <li>• Legal fees: ₹50,000-₹2,00,000</li>
                      <li>• Evidence collection: ₹10,000-₹50,000</li>
                      <li>• Expert witness fees: ₹25,000-₹1,00,000</li>
                      <li>• Appeal fees (if required): ₹5,000-₹20,000</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Process Timeline
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Application Filing:</strong> 1-2 weeks</li>
                    <li>• <strong>Service of Notice:</strong> 2-4 weeks</li>
                    <li>• <strong>Counter-Statement Filing:</strong> 30-60 days</li>
                    <li>• <strong>Evidence Stage:</strong> 3-6 months</li>
                    <li>• <strong>Cross-Examination:</strong> 2-3 months</li>
                    <li>• <strong>Hearing Date:</strong> 6-12 months</li>
                    <li>• <strong>Decision:</strong> 1-3 months</li>
                    <li>• <strong>Total Duration:</strong> 12-24 months</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Success Factors */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <CheckCircle className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Success Factors & Strategy</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Success Factors
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Strong Legal Grounds:</strong> Clear violation of trademark law</li>
                    <li>• <strong>Comprehensive Evidence:</strong> Prior use and rights documentation</li>
                    <li>• <strong>Expert Legal Representation:</strong> Experienced IP attorneys</li>
                    <li>• <strong>Proper Documentation:</strong> Complete and accurate filing</li>
                    <li>• <strong>Strategic Case Building:</strong> Compelling legal arguments</li>
                    <li>• <strong>Timely Filing:</strong> Action within limitation periods</li>
                    <li>• <strong>Market Evidence:</strong> Consumer confusion proof</li>
                  </ul>
                </div>
                
                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-orange-400 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Common Challenges
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Burden of Proof:</strong> Proving invalidity of registration</li>
                    <li>• <strong>Evidence Collection:</strong> Gathering historical use evidence</li>
                    <li>• <strong>Legal Costs:</strong> Expensive and time-consuming process</li>
                    <li>• <strong>Counter Evidence:</strong> Respondent's defensive evidence</li>
                    <li>• <strong>Procedural Compliance:</strong> Strict IPAB procedures</li>
                    <li>• <strong>Appeal Risk:</strong> Possibility of further appeals</li>
                    <li>• <strong>Enforcement Delay:</strong> Long process affects business</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Get Started */}
            <section className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Challenge Invalid Registrations</h2>
              <p className="text-xl mb-6 opacity-90">
                Protect your rights by rectifying wrongly registered trademarks through expert IPAB proceedings.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">12-24 M</div>
                  <div className="text-sm opacity-80">Process Time</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">₹2.5K-10K</div>
                  <div className="text-sm opacity-80">IPAB Fees</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">Strong</div>
                  <div className="text-sm opacity-80">Legal Grounds</div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Rectification Support</h3>
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
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Rectification Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Target trademark registration, grounds for rectification, prior rights, evidence available..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="file" className="block text-sm font-medium text-gray-300 mb-2">
                      Upload Evidence (Optional)
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
                    className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-red-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Challenge Registration
                  </button>
                </form>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span>IPAB Expert</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 text-blue-400 mr-2" />
                      <span>Rights Protection</span>
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