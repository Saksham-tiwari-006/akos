'use client'

import React, { useState } from 'react';
import { AlertTriangle, FileText, CheckCircle, Scale, Clock, Shield, Building, DollarSign, Gavel } from 'lucide-react';

export default function TrademarkInfringementPage() {
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
              Trademark Infringement Protection
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive trademark infringement enforcement and protection services to safeguard your brand rights.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Understanding Trademark Infringement */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Scale className="w-8 h-8 text-red-400" />
                <h2 className="text-3xl font-bold text-white">Understanding Trademark Infringement</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6">
                  Trademark infringement occurs when an unauthorized party uses a trademark that is identical or confusingly similar to a registered trademark in connection with goods or services, causing likelihood of confusion among consumers. This unauthorized use can dilute brand value, confuse customers, and cause financial losses to the rightful trademark owner. Effective infringement enforcement involves identifying violations, gathering evidence, and pursuing legal remedies to protect brand integrity and market position.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-red-600/10 to-orange-600/10 p-6 rounded-lg border border-red-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <AlertTriangle className="w-5 h-5" />
                      Types of Infringement
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>Direct Infringement:</strong> Identical mark usage</li>
                      <li>• <strong>Confusing Similarity:</strong> Similar marks causing confusion</li>
                      <li>• <strong>Dilution:</strong> Weakening of distinctive character</li>
                      <li>• <strong>Counterfeiting:</strong> Fake products with identical marks</li>
                      <li>• <strong>Cybersquatting:</strong> Domain name infringement</li>
                      <li>• <strong>Passing Off:</strong> Misrepresentation of goods/services</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 p-6 rounded-lg border border-blue-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      Protection Measures
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>Monitoring Systems:</strong> Continuous brand surveillance</li>
                      <li>• <strong>Cease & Desist:</strong> Formal infringement notices</li>
                      <li>• <strong>Legal Action:</strong> Court proceedings and injunctions</li>
                      <li>• <strong>Customs Enforcement:</strong> Border protection measures</li>
                      <li>• <strong>Online Protection:</strong> Digital platform enforcement</li>
                      <li>• <strong>Settlement Negotiations:</strong> Amicable dispute resolution</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Infringement Identification Process */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-orange-400" />
                <h2 className="text-3xl font-bold text-white">Infringement Identification & Assessment</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-orange-400">🔍 Brand Monitoring & Surveillance</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Systematic monitoring of market and online platforms to identify potential trademark infringements.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Continuous market surveillance and monitoring</li>
                        <li>• Online marketplace scanning (Amazon, eBay, etc.)</li>
                        <li>• Social media platform monitoring</li>
                        <li>• Domain name watch services</li>
                        <li>• Trademark application monitoring</li>
                        <li>• Competitor activity tracking</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-red-400">⚖️ Legal Analysis & Infringement Assessment</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Detailed legal analysis to determine infringement validity and strength of enforcement case.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Similarity analysis (visual, phonetic, conceptual)</li>
                        <li>• Likelihood of confusion assessment</li>
                        <li>• Goods/services relatedness evaluation</li>
                        <li>• Consumer survey and market research</li>
                        <li>• Prior rights and registration validity</li>
                        <li>• Strength of trademark and distinctiveness</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-purple-400">📊 Evidence Collection & Documentation</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Comprehensive evidence gathering to support infringement claims and legal proceedings.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Photographic and video evidence collection</li>
                        <li>• Digital evidence preservation and authentication</li>
                        <li>• Market presence documentation</li>
                        <li>• Sales and distribution evidence</li>
                        <li>• Consumer confusion evidence</li>
                        <li>• Expert witness statements and affidavits</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-blue-400">📈 Damage Assessment & Quantification</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Financial impact evaluation to determine damages and losses caused by infringement.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Lost sales and revenue calculation</li>
                        <li>• Brand dilution and reputation damage</li>
                        <li>• Infringer's profits assessment</li>
                        <li>• Market share loss evaluation</li>
                        <li>• Corrective advertising costs</li>
                        <li>• Legal and enforcement expenses</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Enforcement Strategies */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Gavel className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">Enforcement Strategies & Legal Remedies</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-yellow-400">📃 Cease & Desist Notices</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Formal legal notices to infringers demanding immediate cessation of infringing activities.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Professional legal notice drafting</li>
                        <li>• Clear infringement identification and evidence</li>
                        <li>• Specific demands and compliance timeline</li>
                        <li>• Consequences of non-compliance warning</li>
                        <li>• Settlement offer and negotiation opening</li>
                        <li>• Follow-up and escalation procedures</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-green-400">🤝 Settlement Negotiations</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Strategic negotiation to resolve infringement disputes through mutually acceptable settlements.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Settlement terms negotiation and drafting</li>
                        <li>• Monetary compensation discussions</li>
                        <li>• Coexistence agreement possibilities</li>
                        <li>• Future conduct restrictions</li>
                        <li>• Confidentiality and non-disclosure terms</li>
                        <li>• Enforcement and compliance monitoring</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-red-400">⚖️ Civil Litigation & Court Proceedings</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Comprehensive court litigation for serious infringement cases requiring judicial intervention.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Civil suit filing and case preparation</li>
                        <li>• Temporary and permanent injunction applications</li>
                        <li>• Damages claim and monetary relief</li>
                        <li>• Account of profits from infringement</li>
                        <li>• Destruction of infringing goods orders</li>
                        <li>• Court representation and advocacy</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-purple-400">🌐 Online & Digital Enforcement</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Specialized enforcement for digital platforms, e-commerce sites, and online infringements.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• E-commerce platform takedown requests</li>
                        <li>• Domain name dispute proceedings (UDRP)</li>
                        <li>• Social media platform reporting</li>
                        <li>• Search engine delisting requests</li>
                        <li>• Online marketplace brand protection</li>
                        <li>• Digital content removal and enforcement</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Criminal Enforcement */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Building className="w-8 h-8 text-purple-400" />
                <h2 className="text-3xl font-bold text-white">Criminal Enforcement & Raid Actions</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-purple-400 flex items-center gap-2">
                    <Building className="w-5 h-5" />
                    Criminal Complaint Filing
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Police Complaint:</strong> FIR filing for counterfeiting</li>
                    <li>• <strong>Evidence Submission:</strong> Supporting documents and proof</li>
                    <li>• <strong>Investigation Support:</strong> Assistance to investigating officers</li>
                    <li>• <strong>Witness Coordination:</strong> Expert and fact witness arrangement</li>
                    <li>• <strong>Legal Representation:</strong> Court proceedings support</li>
                    <li>• <strong>Follow-up Actions:</strong> Case status monitoring</li>
                  </ul>
                </div>
                
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Raid & Seizure Operations
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Search Warrant:</strong> Court authorization for premises search</li>
                    <li>• <strong>Raid Coordination:</strong> Police and enforcement agency coordination</li>
                    <li>• <strong>Evidence Seizure:</strong> Infringing goods and materials collection</li>
                    <li>• <strong>Inventory Preparation:</strong> Detailed seizure documentation</li>
                    <li>• <strong>Suspect Detention:</strong> Legal custody and interrogation</li>
                    <li>• <strong>Media Coverage:</strong> Deterrent publicity and awareness</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Preventive Measures */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Shield className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Preventive Protection Measures</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Proactive Protection
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Comprehensive Registration:</strong> Multi-class trademark protection</li>
                    <li>• <strong>Watch Services:</strong> Continuous monitoring systems</li>
                    <li>• <strong>Brand Guidelines:</strong> Proper usage documentation</li>
                    <li>• <strong>Licensing Controls:</strong> Authorized use management</li>
                    <li>• <strong>Quality Control:</strong> Brand standards maintenance</li>
                    <li>• <strong>Employee Training:</strong> Brand protection awareness</li>
                    <li>• <strong>Digital Presence:</strong> Official website and social media</li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Detection Systems
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Automated Monitoring:</strong> AI-powered infringement detection</li>
                    <li>• <strong>Market Intelligence:</strong> Industry and competitor tracking</li>
                    <li>• <strong>Customer Reports:</strong> Consumer feedback systems</li>
                    <li>• <strong>Trade Shows:</strong> Physical market surveillance</li>
                    <li>• <strong>Distributor Network:</strong> Channel partner monitoring</li>
                    <li>• <strong>Legal Alerts:</strong> Trademark application watching</li>
                    <li>• <strong>Investigation Services:</strong> Professional detective agencies</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Fee Structure & Timeline */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <DollarSign className="w-8 h-8 text-yellow-400" />
                <h2 className="text-3xl font-bold text-white">Enforcement Fees & Timeline</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-yellow-400">💰 Enforcement Costs</h3>
                  <div className="space-y-4">
                    <div className="bg-yellow-600/10 p-4 rounded border border-yellow-500/20">
                      <h4 className="font-medium text-white mb-2">Initial Actions:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Infringement analysis: ₹25,000-₹50,000</li>
                        <li>• Cease & desist notice: ₹15,000-₹30,000</li>
                        <li>• Settlement negotiation: ₹25,000-₹75,000</li>
                        <li>• Evidence collection: ₹20,000-₹1,00,000</li>
                        <li>• Online enforcement: ₹10,000-₹50,000</li>
                      </ul>
                    </div>
                    <div className="bg-red-600/10 p-4 rounded border border-red-500/20">
                      <h4 className="font-medium text-white mb-2">Litigation Costs:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Civil suit filing: ₹1,00,000-₹5,00,000</li>
                        <li>• Court representation: ₹50,000-₹2,00,000</li>
                        <li>• Injunction proceedings: ₹75,000-₹3,00,000</li>
                        <li>• Criminal complaint: ₹25,000-₹1,00,000</li>
                        <li>• Raid operations: ₹50,000-₹2,00,000</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Enforcement Timeline
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Infringement Analysis:</strong> 1-2 weeks</li>
                    <li>• <strong>Cease & Desist Response:</strong> 15-30 days</li>
                    <li>• <strong>Settlement Negotiations:</strong> 1-3 months</li>
                    <li>• <strong>Court Filing:</strong> 2-4 weeks</li>
                    <li>• <strong>Injunction Order:</strong> 3-6 months</li>
                    <li>• <strong>Trial Proceedings:</strong> 1-3 years</li>
                    <li>• <strong>Criminal Proceedings:</strong> 2-5 years</li>
                    <li>• <strong>Damage Recovery:</strong> 6 months-2 years</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Get Started */}
            <section className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Protect Your Brand from Infringement</h2>
              <p className="text-xl mb-6 opacity-90">
                Comprehensive trademark enforcement and infringement protection services to safeguard your brand value.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">24x7</div>
                  <div className="text-sm opacity-80">Monitoring</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">Expert</div>
                  <div className="text-sm opacity-80">Legal Team</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">Rapid</div>
                  <div className="text-sm opacity-80">Response</div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Infringement Protection</h3>
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
                      Infringement Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Your trademark details, infringement description, infringer information, evidence available, urgency level..."
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
                    Start Enforcement Action
                  </button>
                </form>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span>Expert Enforcement</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 text-blue-400 mr-2" />
                      <span>Brand Protection</span>
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