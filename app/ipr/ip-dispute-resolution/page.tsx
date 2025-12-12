'use client'

import React, { useState } from 'react';
import { Scale, FileText, CheckCircle, Gavel, Clock, Shield, Building, DollarSign, Award } from 'lucide-react';

export default function IPDisputeResolutionPage() {
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
              <Scale className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IP Dispute Resolution
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive intellectual property litigation and alternative dispute resolution services for enforcement, defense, and strategic IP protection.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Understanding IP Disputes */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Scale className="w-8 h-8 text-red-400" />
                <h2 className="text-3xl font-bold text-white">Understanding IP Disputes & Resolution</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6">
                  Intellectual property disputes arise when IP rights are violated through unauthorized use, infringement, counterfeiting, or misappropriation of protected innovations, brands, or creative works. Effective IP dispute resolution requires strategic legal expertise, technical understanding, and commercial awareness to protect valuable IP assets, recover damages, and maintain competitive advantage. Our comprehensive dispute resolution services cover litigation, arbitration, mediation, and negotiated settlements across all IP categories including patents, trademarks, copyrights, designs, and trade secrets.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-red-600/10 to-orange-600/10 p-6 rounded-lg border border-red-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Scale className="w-5 h-5" />
                      Common IP Disputes
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>Patent Infringement:</strong> Unauthorized use of patented inventions</li>
                      <li>• <strong>Trademark Violations:</strong> Brand confusion and counterfeiting</li>
                      <li>• <strong>Copyright Piracy:</strong> Unauthorized reproduction and distribution</li>
                      <li>• <strong>Design Copying:</strong> Imitation of registered designs</li>
                      <li>• <strong>Trade Secret Theft:</strong> Misappropriation of confidential information</li>
                      <li>• <strong>Domain Disputes:</strong> Cybersquatting and bad faith registration</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 p-6 rounded-lg border border-blue-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Gavel className="w-5 h-5" />
                      Resolution Mechanisms
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>Litigation:</strong> Court proceedings and judicial decisions</li>
                      <li>• <strong>Arbitration:</strong> Private dispute resolution with binding awards</li>
                      <li>• <strong>Mediation:</strong> Facilitated negotiation and settlement</li>
                      <li>• <strong>Negotiation:</strong> Direct settlement discussions</li>
                      <li>• <strong>Cease & Desist:</strong> Formal infringement notices</li>
                      <li>• <strong>Administrative Actions:</strong> Patent/trademark office proceedings</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Litigation Services */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Gavel className="w-8 h-8 text-orange-400" />
                <h2 className="text-3xl font-bold text-white">IP Litigation & Court Proceedings</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-red-400">📋 Case Assessment & Strategy Development</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Comprehensive case evaluation and litigation strategy formulation for optimal outcomes.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• IP portfolio analysis and strength assessment</li>
                        <li>• Infringement evidence collection and analysis</li>
                        <li>• Validity challenges and prior art searches</li>
                        <li>• Damages assessment and economic analysis</li>
                        <li>• Litigation risk evaluation and cost-benefit analysis</li>
                        <li>• Strategic options and settlement considerations</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-orange-400">⚖️ Court Proceedings & Representation</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Professional court representation and litigation management across all judicial levels.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Civil suit filing and procedural compliance</li>
                        <li>• Injunction applications and interim relief</li>
                        <li>• Discovery proceedings and evidence presentation</li>
                        <li>• Expert witness coordination and testimony</li>
                        <li>• Trial advocacy and court arguments</li>
                        <li>• Appeal proceedings and higher court representation</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-yellow-400">🛡️ Enforcement & Criminal Proceedings</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Comprehensive enforcement actions including criminal prosecutions for IP violations.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Raids and search operations coordination</li>
                        <li>• Criminal complaints and police investigations</li>
                        <li>• Customs enforcement and border protection</li>
                        <li>• Online enforcement and digital piracy</li>
                        <li>• Asset seizure and preservation orders</li>
                        <li>• International enforcement coordination</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-green-400">💰 Damages Recovery & Settlement</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Damages quantification, recovery strategies, and negotiated settlement arrangements.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Economic damages calculation and proof</li>
                        <li>• Lost profits analysis and reasonable royalties</li>
                        <li>• Account of profits from infringement</li>
                        <li>• Settlement negotiation and agreement drafting</li>
                        <li>• Licensing arrangements and ongoing royalties</li>
                        <li>• Enforcement of judgments and awards</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Alternative Dispute Resolution */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">Alternative Dispute Resolution (ADR)</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">🤝 Arbitration Services</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-white mb-2">Domestic Arbitration:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Indian Arbitration & Conciliation Act</li>
                        <li>• Institutional arbitration (DIAC, MCIA)</li>
                        <li>• Ad-hoc arbitration proceedings</li>
                        <li>• Fast-track arbitration procedures</li>
                        <li>• Expert determination processes</li>
                        <li>• Enforcement of arbitral awards</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">International Arbitration:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• ICC, LCIA, SIAC arbitration</li>
                        <li>• WIPO arbitration and mediation</li>
                        <li>• Cross-border IP disputes</li>
                        <li>• Multi-jurisdictional proceedings</li>
                        <li>• New York Convention enforcement</li>
                        <li>• Emergency arbitrator proceedings</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">💬 Mediation & Conciliation</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-white mb-2">Mediation Process:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Neutral mediator facilitation</li>
                        <li>• Confidential settlement discussions</li>
                        <li>• Creative solution development</li>
                        <li>• Cost-effective resolution</li>
                        <li>• Relationship preservation</li>
                        <li>• Voluntary participation basis</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Benefits & Advantages:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Faster resolution timeline</li>
                        <li>• Lower costs than litigation</li>
                        <li>• Confidential proceedings</li>
                        <li>• Business relationship preservation</li>
                        <li>• Flexible settlement terms</li>
                        <li>• Win-win outcome possibilities</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Specialized IP Disputes */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Building className="w-8 h-8 text-purple-400" />
                <h2 className="text-3xl font-bold text-white">Specialized IP Dispute Categories</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-purple-400">⚗️ Patent Disputes</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-white mb-2">Infringement Actions:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Direct infringement claims</li>
                        <li>• Doctrine of equivalents</li>
                        <li>• Contributory infringement</li>
                        <li>• Induced infringement</li>
                        <li>• Willful infringement damages</li>
                        <li>• Preliminary injunctions</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Validity Challenges:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Prior art invalidation</li>
                        <li>• Obviousness challenges</li>
                        <li>• Enablement deficiencies</li>
                        <li>• Written description failures</li>
                        <li>• Subject matter eligibility</li>
                        <li>• Post-grant proceedings</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Commercial Disputes:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Licensing agreement disputes</li>
                        <li>• Royalty calculation issues</li>
                        <li>• Joint development conflicts</li>
                        <li>• Standard essential patents</li>
                        <li>• FRAND licensing terms</li>
                        <li>• Patent pool disputes</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">🏷️ Trademark & Brand Disputes</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-white mb-2">Infringement Cases:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Likelihood of confusion</li>
                        <li>• Passing off actions</li>
                        <li>• Counterfeiting enforcement</li>
                        <li>• Trade dress protection</li>
                        <li>• Well-known mark disputes</li>
                        <li>• Parallel imports issues</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Online & Digital:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Domain name disputes (UDRP)</li>
                        <li>• Cybersquatting actions</li>
                        <li>• Social media impersonation</li>
                        <li>• E-commerce platform enforcement</li>
                        <li>• Keyword advertising disputes</li>
                        <li>• Online brand protection</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Opposition & Cancellation:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Trademark opposition proceedings</li>
                        <li>• Cancellation petitions</li>
                        <li>• Prior use claims</li>
                        <li>• Generic mark challenges</li>
                        <li>• Abandonment disputes</li>
                        <li>• Coexistence agreements</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">📝 Copyright & Design Disputes</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-white mb-2">Copyright Infringement:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Reproduction violations</li>
                        <li>• Distribution without authorization</li>
                        <li>• Public performance disputes</li>
                        <li>• Digital piracy enforcement</li>
                        <li>• Fair use defenses</li>
                        <li>• DMCA takedown procedures</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Design Protection:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Industrial design copying</li>
                        <li>• Aesthetic infringement claims</li>
                        <li>• Design invalidation actions</li>
                        <li>• Novelty challenges</li>
                        <li>• Commercial exploitation</li>
                        <li>• International design disputes</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Trade Secrets:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Confidential information theft</li>
                        <li>• Employee mobility disputes</li>
                        <li>• Non-disclosure violations</li>
                        <li>• Reverse engineering issues</li>
                        <li>• Misappropriation claims</li>
                        <li>• Injunctive relief</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* International Disputes */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Award className="w-8 h-8 text-cyan-400" />
                <h2 className="text-3xl font-bold text-white">Cross-Border IP Dispute Resolution</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-cyan-500/10 p-6 rounded-lg border border-cyan-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-cyan-400 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    International Litigation Coordination
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Multi-Jurisdiction Strategy:</strong> Coordinated global enforcement</li>
                    <li>• <strong>Foreign Associate Network:</strong> Local counsel coordination</li>
                    <li>• <strong>Evidence Gathering:</strong> Cross-border discovery procedures</li>
                    <li>• <strong>Parallel Proceedings:</strong> Multiple jurisdiction management</li>
                    <li>• <strong>Forum Selection:</strong> Strategic venue considerations</li>
                    <li>• <strong>Enforcement Mechanisms:</strong> International judgment recognition</li>
                    <li>• <strong>Treaty Applications:</strong> Bilateral and multilateral agreements</li>
                  </ul>
                </div>
                
                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-orange-400 flex items-center gap-2">
                    <Scale className="w-5 h-5" />
                    Specialized International Forums
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>WIPO Arbitration:</strong> IP-specific dispute resolution</li>
                    <li>• <strong>ITC Section 337:</strong> US import ban proceedings</li>
                    <li>• <strong>UPC (Europe):</strong> Unified Patent Court proceedings</li>
                    <li>• <strong>WTO Dispute Settlement:</strong> Trade-related IP disputes</li>
                    <li>• <strong>Investment Treaties:</strong> Bilateral investment protection</li>
                    <li>• <strong>Regional Courts:</strong> EUIPO, EPO opposition procedures</li>
                    <li>• <strong>Online Platforms:</strong> E-commerce dispute mechanisms</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Costs & Timeline */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <DollarSign className="w-8 h-8 text-yellow-400" />
                <h2 className="text-3xl font-bold text-white">Dispute Resolution Costs & Timeline</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-yellow-400">💰 Legal Costs Structure</h3>
                  <div className="space-y-4">
                    <div className="bg-red-600/10 p-4 rounded border border-red-500/20">
                      <h4 className="font-medium text-white mb-2">Litigation Costs:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Court fees: ₹50,000-₹5,00,000</li>
                        <li>• Attorney fees: ₹10,00,000-₹1,00,00,000</li>
                        <li>• Expert witness fees: ₹5,00,000-₹25,00,000</li>
                        <li>• Discovery costs: ₹2,00,000-₹15,00,000</li>
                        <li>• International coordination: ₹25,00,000+</li>
                      </ul>
                    </div>
                    <div className="bg-green-600/10 p-4 rounded border border-green-500/20">
                      <h4 className="font-medium text-white mb-2">ADR Costs:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Arbitration: ₹5,00,000-₹50,00,000</li>
                        <li>• Mediation: ₹1,00,000-₹10,00,000</li>
                        <li>• Settlement negotiation: ₹2,00,000-₹15,00,000</li>
                        <li>• WIPO procedures: $5,000-$50,000 USD</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Resolution Timeline
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Cease & Desist:</strong> 2-4 weeks response</li>
                    <li>• <strong>Negotiated Settlement:</strong> 2-6 months</li>
                    <li>• <strong>Mediation Process:</strong> 3-6 months</li>
                    <li>• <strong>Arbitration Proceedings:</strong> 6-18 months</li>
                    <li>• <strong>District Court Litigation:</strong> 2-5 years</li>
                    <li>• <strong>High Court Appeals:</strong> 3-7 years</li>
                    <li>• <strong>Supreme Court:</strong> 5-10 years total</li>
                    <li>• <strong>International Disputes:</strong> Variable by jurisdiction</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Success Metrics */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <CheckCircle className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Dispute Resolution Benefits & Outcomes</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Enforcement Success Factors
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>IP Rights Protection:</strong> Comprehensive asset security</li>
                    <li>• <strong>Damages Recovery:</strong> Compensation for losses and profits</li>
                    <li>• <strong>Market Exclusivity:</strong> Competitive advantage restoration</li>
                    <li>• <strong>Injunctive Relief:</strong> Immediate infringement cessation</li>
                    <li>• <strong>Deterrence Effect:</strong> Future infringement prevention</li>
                    <li>• <strong>Brand Protection:</strong> Reputation and goodwill preservation</li>
                    <li>• <strong>Licensing Opportunities:</strong> Revenue generation potential</li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Strategic Advantages
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Portfolio Defense:</strong> Comprehensive IP protection strategy</li>
                    <li>• <strong>Commercial Leverage:</strong> Negotiation strength enhancement</li>
                    <li>• <strong>Industry Position:</strong> Market leadership establishment</li>
                    <li>• <strong>Investment Security:</strong> R&D investment protection</li>
                    <li>• <strong>Global Enforcement:</strong> International market access</li>
                    <li>• <strong>Technology Transfer:</strong> Safe licensing environment</li>
                    <li>• <strong>Competitive Intelligence:</strong> Market insight development</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Get Started */}
            <section className="bg-gradient-to-r from-red-600 to-orange-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Protect Your IP Rights</h2>
              <p className="text-xl mb-6 opacity-90">
                Expert IP dispute resolution services for comprehensive enforcement, defense, and strategic protection.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">Expert</div>
                  <div className="text-sm opacity-80">Advocacy</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">Global</div>
                  <div className="text-sm opacity-80">Reach</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">Strategic</div>
                  <div className="text-sm opacity-80">Solutions</div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">IP Dispute Resolution</h3>
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
                      Dispute Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                      placeholder="Dispute type (patent/trademark/copyright), infringement details, parties involved, urgency level, enforcement needs, damages assessment..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="file" className="block text-sm font-medium text-gray-300 mb-2">
                      Upload Dispute Documents (Optional)
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
                    Start Dispute Resolution
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
                      <span>Global Enforcement</span>
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