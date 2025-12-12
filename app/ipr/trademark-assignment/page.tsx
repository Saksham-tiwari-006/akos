'use client'

import React, { useState } from 'react';
import { RefreshCw, FileText, CheckCircle, Building, Clock, Shield, Users, DollarSign, Award } from 'lucide-react';

export default function TrademarkAssignmentPage() {
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-600 rounded-full mb-6">
              <RefreshCw className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Trademark Assignment & Transfer
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Professional trademark assignment and transfer services for seamless ownership transition and legal compliance.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Understanding Trademark Assignment */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <RefreshCw className="w-8 h-8 text-indigo-400" />
                <h2 className="text-3xl font-bold text-white">Understanding Trademark Assignment</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6">
                  Trademark assignment is the legal transfer of ownership rights in a registered trademark or pending application from one entity (assignor) to another (assignee). This transfer includes all associated goodwill, rights, and obligations connected to the trademark. Proper assignment ensures legal continuity, maintains trademark validity, and provides clear ownership documentation for business transactions, mergers, acquisitions, or strategic transfers.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-indigo-600/10 to-purple-600/10 p-6 rounded-lg border border-indigo-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <RefreshCw className="w-5 h-5" />
                      Types of Assignment
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>Complete Assignment:</strong> Full ownership transfer</li>
                      <li>• <strong>Partial Assignment:</strong> Specific goods/services transfer</li>
                      <li>• <strong>Territorial Assignment:</strong> Geographic-specific transfer</li>
                      <li>• <strong>Assignment with Goodwill:</strong> Business reputation included</li>
                      <li>• <strong>Merger & Acquisition:</strong> Corporate restructuring transfers</li>
                      <li>• <strong>Security Assignment:</strong> Collateral for financing</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 p-6 rounded-lg border border-blue-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Building className="w-5 h-5" />
                      Business Scenarios
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>Business Sale:</strong> Asset transfer to new owners</li>
                      <li>• <strong>Corporate Restructuring:</strong> Internal entity transfers</li>
                      <li>• <strong>Joint Ventures:</strong> Partnership trademark sharing</li>
                      <li>• <strong>Licensing Conversion:</strong> License to ownership change</li>
                      <li>• <strong>Succession Planning:</strong> Inheritance and estate planning</li>
                      <li>• <strong>Debt Recovery:</strong> Creditor asset realization</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Assignment Process */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Assignment Process & Documentation</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-blue-400">📋 Due Diligence & Verification</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Comprehensive verification of trademark status, ownership, and legal standing before assignment.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Trademark registration status verification</li>
                        <li>• Ownership title and rights confirmation</li>
                        <li>• Pending litigation and dispute checks</li>
                        <li>• License and encumbrance searches</li>
                        <li>• Opposition and objection history review</li>
                        <li>• Renewal status and maintenance compliance</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-green-400">📝 Assignment Agreement Drafting</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Professional drafting of comprehensive assignment agreements with legal protections.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Complete assignment deed preparation</li>
                        <li>• Terms and conditions specification</li>
                        <li>• Consideration and payment terms</li>
                        <li>• Warranties and representations</li>
                        <li>• Indemnification and liability clauses</li>
                        <li>• Effective date and transition provisions</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div className="flex-1">
                      <h3 className="font-semibent text-lg mb-3 text-purple-400">✍️ Execution & Authentication</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Proper execution of assignment documents with required authentication and witnessing.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Document signing and witnessing</li>
                        <li>• Notarization and attestation</li>
                        <li>• Stamp duty payment and compliance</li>
                        <li>• Apostille (for international assignments)</li>
                        <li>• Corporate authorization and board resolutions</li>
                        <li>• Power of attorney execution (if required)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-yellow-400">🏛️ Registry Recordal & Filing</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Official recordal of assignment with Indian Trademark Registry and international offices.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Form TM-P filing with Trademark Registry</li>
                        <li>• Supporting documents submission</li>
                        <li>• Fee payment and processing</li>
                        <li>• Registry examination and approval</li>
                        <li>• Official recordal certificate issuance</li>
                        <li>• International registry notifications (if applicable)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Legal Requirements */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Award className="w-8 h-8 text-orange-400" />
                <h2 className="text-3xl font-bold text-white">Legal Requirements & Compliance</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-orange-400">📋 Mandatory Requirements</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-white mb-2">Legal Compliance:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Written assignment agreement mandatory</li>
                        <li>• Proper consideration requirement</li>
                        <li>• Goodwill transfer inclusion</li>
                        <li>• Stamp duty payment compliance</li>
                        <li>• Registration within 6 months</li>
                        <li>• Corporate authorization requirements</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Documentation:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Assignment deed execution</li>
                        <li>• Identity proof of parties</li>
                        <li>• Corporate documents submission</li>
                        <li>• Power of attorney (if applicable)</li>
                        <li>• Board resolution copies</li>
                        <li>• Tax compliance certificates</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400">⚠️ Key Considerations</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-white mb-2">Assignment Validity:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Must include associated goodwill</li>
                        <li>• Cannot be assignment in gross</li>
                        <li>• Proper consideration essential</li>
                        <li>• Written format mandatory</li>
                        <li>• Effective date specification</li>
                        <li>• Clear scope definition required</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Risk Mitigation:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Title insurance consideration</li>
                        <li>• Indemnification clauses inclusion</li>
                        <li>• Warranty and representation terms</li>
                        <li>• Dispute resolution mechanisms</li>
                        <li>• Compliance monitoring systems</li>
                        <li>• Post-assignment support provisions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* International Assignments */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Users className="w-8 h-8 text-purple-400" />
                <h2 className="text-3xl font-bold text-white">International Assignment Considerations</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-purple-400 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Cross-Border Assignments
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Jurisdiction Compliance:</strong> Multiple country law adherence</li>
                    <li>• <strong>Tax Implications:</strong> International tax planning</li>
                    <li>• <strong>Currency Considerations:</strong> Foreign exchange compliance</li>
                    <li>• <strong>Treaty Benefits:</strong> Double taxation avoidance</li>
                    <li>• <strong>FEMA Compliance:</strong> Foreign exchange regulations</li>
                    <li>• <strong>Local Counsel:</strong> International legal representation</li>
                    <li>• <strong>Documentation:</strong> Multi-jurisdiction requirements</li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Madrid Protocol Assignments
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>WIPO Notifications:</strong> International Bureau intimation</li>
                    <li>• <strong>Centralized Recordal:</strong> Single assignment for multiple countries</li>
                    <li>• <strong>Country Validations:</strong> Individual country confirmations</li>
                    <li>• <strong>Language Requirements:</strong> Translation needs assessment</li>
                    <li>• <strong>Fee Coordination:</strong> Multiple jurisdiction costs</li>
                    <li>• <strong>Timeline Management:</strong> Sequential filing strategies</li>
                    <li>• <strong>Dependency Issues:</strong> Base registration considerations</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Valuation & Commercial Aspects */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <DollarSign className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Valuation & Commercial Considerations</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400 flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    Trademark Valuation Methods
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Cost Approach:</strong> Development and registration costs</li>
                    <li>• <strong>Market Approach:</strong> Comparable transaction analysis</li>
                    <li>• <strong>Income Approach:</strong> Future earnings potential</li>
                    <li>• <strong>Relief from Royalty:</strong> Licensing value assessment</li>
                    <li>• <strong>Brand Strength Analysis:</strong> Market position evaluation</li>
                    <li>• <strong>Economic Benefits:</strong> Premium pricing capabilities</li>
                    <li>• <strong>Risk Assessment:</strong> Market and legal risk factors</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-yellow-400">💰 Commercial Terms</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Purchase Price:</strong> Lump sum or installment payments</li>
                    <li>• <strong>Earnouts:</strong> Performance-based additional payments</li>
                    <li>• <strong>Royalty Arrangements:</strong> Ongoing revenue sharing</li>
                    <li>• <strong>Escrow Provisions:</strong> Payment security mechanisms</li>
                    <li>• <strong>Adjustment Clauses:</strong> Post-closing price modifications</li>
                    <li>• <strong>Tax Optimization:</strong> Structuring for tax efficiency</li>
                    <li>• <strong>Currency Hedging:</strong> Exchange rate risk management</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Fee Structure & Timeline */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Clock className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">Assignment Fees & Timeline</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">💰 Professional Fees</h3>
                  <div className="space-y-4">
                    <div className="bg-blue-600/10 p-4 rounded border border-blue-500/20">
                      <h4 className="font-medium text-white mb-2">Assignment Services:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Due diligence: ₹15,000-₹40,000</li>
                        <li>• Agreement drafting: ₹25,000-₹75,000</li>
                        <li>• Registry filing: ₹10,000-₹25,000</li>
                        <li>• International assignments: ₹50,000-₹2,00,000</li>
                        <li>• Complex transactions: ₹1,00,000-₹5,00,000</li>
                      </ul>
                    </div>
                    <div className="bg-green-600/10 p-4 rounded border border-green-500/20">
                      <h4 className="font-medium text-white mb-2">Government Fees:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Registry recordal: ₹10,000</li>
                        <li>• Stamp duty: 3-8% of consideration</li>
                        <li>• Notarization: ₹500-₹2,000</li>
                        <li>• International fees: Variable by country</li>
                        <li>• WIPO fees: CHF 177 per registration</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-yellow-400 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Process Timeline
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Due Diligence:</strong> 1-2 weeks</li>
                    <li>• <strong>Agreement Negotiation:</strong> 2-4 weeks</li>
                    <li>• <strong>Document Preparation:</strong> 1-2 weeks</li>
                    <li>• <strong>Execution & Authentication:</strong> 3-7 days</li>
                    <li>• <strong>Registry Filing:</strong> 1 week</li>
                    <li>• <strong>Registry Processing:</strong> 2-4 months</li>
                    <li>• <strong>International Recordal:</strong> 3-6 months</li>
                    <li>• <strong>Complete Process:</strong> 4-8 months</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Get Started */}
            <section className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Seamless Trademark Transfer</h2>
              <p className="text-xl mb-6 opacity-90">
                Professional assignment services ensuring smooth trademark ownership transfer with complete legal compliance.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">Expert</div>
                  <div className="text-sm opacity-80">Legal Support</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">Global</div>
                  <div className="text-sm opacity-80">Coverage</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">Secure</div>
                  <div className="text-sm opacity-80">Transfer</div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Assignment Services</h3>
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
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Assignment Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Trademark details, assignment type, parties involved, timeline requirements, international scope..."
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
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Start Assignment Process
                  </button>
                </form>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span>Legal Experts</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 text-blue-400 mr-2" />
                      <span>Secure Process</span>
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