'use client'

import React, { useState } from 'react';
import { Lightbulb, FileText, CheckCircle, Cog, Clock, Shield, Building, DollarSign, Award } from 'lucide-react';

export default function PatentRegistrationPage() {
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-600 rounded-full mb-6">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Patent Registration
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Expert patent filing and prosecution services to protect your inventions and innovations with comprehensive IP strategy.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Understanding Patents */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Lightbulb className="w-8 h-8 text-yellow-400" />
                <h2 className="text-3xl font-bold text-white">Understanding Patent Protection</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6">
                  A patent is an exclusive right granted by the government to inventors for their novel, non-obvious, and useful inventions, providing monopoly protection for 20 years from filing date. Patents cover products, processes, methods, compositions, and improvements that meet specific criteria of novelty, inventive step, and industrial applicability. Patent protection prevents others from making, using, selling, or importing the patented invention without permission, enabling inventors to commercialize their innovations and recover research investments.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-yellow-600/10 to-orange-600/10 p-6 rounded-lg border border-yellow-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Lightbulb className="w-5 h-5" />
                      Patentable Inventions
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>Products:</strong> Machines, devices, compositions</li>
                      <li>• <strong>Processes:</strong> Manufacturing methods, chemical processes</li>
                      <li>• <strong>Software:</strong> Technical computer-implemented inventions</li>
                      <li>• <strong>Biotechnology:</strong> Pharmaceutical compounds, bio-processes</li>
                      <li>• <strong>Mechanical:</strong> Tools, equipment, mechanical systems</li>
                      <li>• <strong>Electronics:</strong> Circuits, electronic devices, systems</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 p-6 rounded-lg border border-blue-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      Patent Criteria
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>Novelty:</strong> New and not previously disclosed</li>
                      <li>• <strong>Inventive Step:</strong> Non-obvious to skilled person</li>
                      <li>• <strong>Industrial Application:</strong> Capable of industrial use</li>
                      <li>• <strong>Sufficiency:</strong> Adequate disclosure for reproduction</li>
                      <li>• <strong>Unity:</strong> Single inventive concept</li>
                      <li>• <strong>Patentable Subject Matter:</strong> Not excluded categories</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Patent Filing Process */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Patent Filing & Prosecution Process</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-blue-400">🔍 Prior Art Search & Patentability Assessment</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Comprehensive search and analysis to determine patentability and develop filing strategy.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Global prior art search across patent databases</li>
                        <li>• Non-patent literature search and analysis</li>
                        <li>• Novelty and inventive step assessment</li>
                        <li>• Freedom to operate analysis</li>
                        <li>• Competitive landscape mapping</li>
                        <li>• Patentability opinion and strategy report</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-green-400">📝 Patent Specification Drafting</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Professional patent specification drafting with comprehensive claims and detailed description.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Technical specification and detailed description</li>
                        <li>• Independent and dependent claims drafting</li>
                        <li>• Drawings and technical diagrams preparation</li>
                        <li>• Abstract and summary compilation</li>
                        <li>• Best mode and embodiment disclosure</li>
                        <li>• Claims strategy for broad protection</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-purple-400">🏛️ Patent Office Filing & Formalities</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Complete patent application filing with Indian Patent Office and formality compliance.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Form 1 and supporting documents preparation</li>
                        <li>• Fee calculation and payment processing</li>
                        <li>• Priority claim and convention filing</li>
                        <li>• Power of attorney execution</li>
                        <li>• Small entity and startup declarations</li>
                        <li>• Application number and filing date receipt</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-yellow-400">⚖️ Examination & Prosecution</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Patent examination handling and prosecution through objections and office actions.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Request for examination (RFE) filing</li>
                        <li>• First Examination Report (FER) response</li>
                        <li>• Claims amendment and argumentation</li>
                        <li>• Prior art distinction and technical arguments</li>
                        <li>• Hearing representation (if required)</li>
                        <li>• Patent grant and certificate issuance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Types of Patents */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Cog className="w-8 h-8 text-purple-400" />
                <h2 className="text-3xl font-bold text-white">Patent Categories & Technology Areas</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-purple-400">⚙️ Mechanical & Engineering Patents</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-white mb-2">Mechanical Systems:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Industrial machinery</li>
                        <li>• Manufacturing equipment</li>
                        <li>• Automotive components</li>
                        <li>• Aerospace innovations</li>
                        <li>• Robotics and automation</li>
                        <li>• Consumer appliances</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Engineering Solutions:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Construction methods</li>
                        <li>• Environmental technology</li>
                        <li>• Energy systems</li>
                        <li>• Agricultural equipment</li>
                        <li>• Transportation systems</li>
                        <li>• Safety devices</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Tools & Devices:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Hand tools and implements</li>
                        <li>• Measuring instruments</li>
                        <li>• Medical devices</li>
                        <li>• Sports equipment</li>
                        <li>• Kitchen appliances</li>
                        <li>• Personal care devices</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">💊 Pharmaceutical & Biotechnology Patents</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-white mb-2">Drug Development:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• New chemical entities</li>
                        <li>• Pharmaceutical formulations</li>
                        <li>• Drug delivery systems</li>
                        <li>• Dosage forms</li>
                        <li>• Combination therapies</li>
                        <li>• Biosimilars and generics</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Biotechnology:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Recombinant proteins</li>
                        <li>• Gene therapy methods</li>
                        <li>• Diagnostic methods</li>
                        <li>• Biomarkers</li>
                        <li>• Stem cell technology</li>
                        <li>• Tissue engineering</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Medical Technology:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Medical devices</li>
                        <li>• Surgical instruments</li>
                        <li>• Implants and prosthetics</li>
                        <li>• Diagnostic equipment</li>
                        <li>• Therapeutic devices</li>
                        <li>• Healthcare technology</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">💻 Technology & Software Patents</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-white mb-2">Computer Technology:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Software algorithms</li>
                        <li>• Data processing methods</li>
                        <li>• Computer systems</li>
                        <li>• Network protocols</li>
                        <li>• Database systems</li>
                        <li>• User interfaces</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Electronics:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Semiconductor devices</li>
                        <li>• Circuit designs</li>
                        <li>• Communication systems</li>
                        <li>• Display technology</li>
                        <li>• Power electronics</li>
                        <li>• Signal processing</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Emerging Tech:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Artificial intelligence</li>
                        <li>• Machine learning algorithms</li>
                        <li>• IoT devices and systems</li>
                        <li>• Blockchain technology</li>
                        <li>• Quantum computing</li>
                        <li>• Augmented/Virtual reality</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* International Filing */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Award className="w-8 h-8 text-orange-400" />
                <h2 className="text-3xl font-bold text-white">International Patent Filing & PCT</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-orange-400 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    PCT (Patent Cooperation Treaty)
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>International Application:</strong> Single filing for multiple countries</li>
                    <li>• <strong>Priority Benefits:</strong> 12-month priority from Indian filing</li>
                    <li>• <strong>Search Report:</strong> International search and opinion</li>
                    <li>• <strong>National Phase:</strong> Enter specific countries within 30/31 months</li>
                    <li>• <strong>Cost Efficiency:</strong> Delayed national phase expenses</li>
                    <li>• <strong>Strategic Time:</strong> Additional time for market assessment</li>
                    <li>• <strong>Global Coverage:</strong> 150+ member countries</li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400 flex items-center gap-2">
                    <Building className="w-5 h-5" />
                    Direct National Filing
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Target Markets:</strong> Direct filing in specific countries</li>
                    <li>• <strong>Major Jurisdictions:</strong> US, Europe, Japan, China</li>
                    <li>• <strong>Convention Priority:</strong> 12-month priority claim</li>
                    <li>• <strong>Local Requirements:</strong> Country-specific formalities</li>
                    <li>• <strong>Translation Needs:</strong> Local language requirements</li>
                    <li>• <strong>Local Agents:</strong> Foreign associate coordination</li>
                    <li>• <strong>Prosecution Support:</strong> Multi-jurisdiction management</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Fee Structure & Timeline */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <DollarSign className="w-8 h-8 text-yellow-400" />
                <h2 className="text-3xl font-bold text-white">Patent Fees & Timeline</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-yellow-400">💰 Indian Patent Fees</h3>
                  <div className="space-y-4">
                    <div className="bg-yellow-600/10 p-4 rounded border border-yellow-500/20">
                      <h4 className="font-medium text-white mb-2">Government Fees (Small Entity):</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Filing fee: ₹1,600</li>
                        <li>• Search fee: ₹2,500</li>
                        <li>• Examination fee: ₹4,000</li>
                        <li>• Grant fee: ₹2,400</li>
                        <li>• Annual maintenance: ₹800-₹8,000</li>
                        <li>• <strong>Total (first 4 years): ₹12,500+</strong></li>
                      </ul>
                    </div>
                    <div className="bg-blue-600/10 p-4 rounded border border-blue-500/20">
                      <h4 className="font-medium text-white mb-2">Professional Services:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Prior art search: ₹25,000-₹75,000</li>
                        <li>• Specification drafting: ₹1,50,000-₹5,00,000</li>
                        <li>• Filing and prosecution: ₹50,000-₹1,50,000</li>
                        <li>• International filing: ₹2,00,000-₹10,00,000</li>
                        <li>• Portfolio management: ₹25,000-₹1,00,000/year</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Patent Timeline
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Prior Art Search:</strong> 2-4 weeks</li>
                    <li>• <strong>Specification Drafting:</strong> 4-8 weeks</li>
                    <li>• <strong>Filing Process:</strong> 1-2 weeks</li>
                    <li>• <strong>18-Month Publication:</strong> Automatic publication</li>
                    <li>• <strong>Request for Examination:</strong> 48 months from filing/priority</li>
                    <li>• <strong>First Examination Report:</strong> 12-18 months from RFE</li>
                    <li>• <strong>Response & Prosecution:</strong> 6-18 months</li>
                    <li>• <strong>Patent Grant:</strong> 3-5 years from filing</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Patent Benefits */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <CheckCircle className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Patent Benefits & Commercialization</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Exclusive Rights & Benefits
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Market Exclusivity:</strong> 20-year monopoly protection</li>
                    <li>• <strong>Licensing Revenue:</strong> Royalty income opportunities</li>
                    <li>• <strong>Investment Attraction:</strong> Enhanced startup valuation</li>
                    <li>• <strong>Competitive Advantage:</strong> Market positioning strength</li>
                    <li>• <strong>Technology Transfer:</strong> Academia-industry collaboration</li>
                    <li>• <strong>Export Benefits:</strong> International market protection</li>
                    <li>• <strong>Tax Advantages:</strong> R&D and patent box benefits</li>
                  </ul>
                </div>
                
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-purple-400 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Commercialization Strategies
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Licensing Agreements:</strong> Technology licensing revenue</li>
                    <li>• <strong>Joint Ventures:</strong> Strategic partnerships</li>
                    <li>• <strong>Patent Sales:</strong> Asset monetization</li>
                    <li>• <strong>Manufacturing Rights:</strong> Exclusive production licenses</li>
                    <li>• <strong>Cross-Licensing:</strong> Technology exchange agreements</li>
                    <li>• <strong>Enforcement Actions:</strong> Infringement damages recovery</li>
                    <li>• <strong>Portfolio Building:</strong> Strategic IP asset development</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Get Started */}
            <section className="bg-gradient-to-r from-yellow-600 to-orange-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Protect Your Innovation</h2>
              <p className="text-xl mb-6 opacity-90">
                Expert patent filing and prosecution services for comprehensive invention protection and commercialization.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">20 Years</div>
                  <div className="text-sm opacity-80">Protection</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">Global</div>
                  <div className="text-sm opacity-80">Filing</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">Expert</div>
                  <div className="text-sm opacity-80">Prosecution</div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Patent Filing</h3>
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
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Invention Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                      placeholder="Invention description, technology area, development stage, prior art awareness, international filing needs..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="file" className="block text-sm font-medium text-gray-300 mb-2">
                      Upload Technical Documents (Optional)
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
                    className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-yellow-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Start Patent Filing
                  </button>
                </form>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span>Patent Experts</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 text-blue-400 mr-2" />
                      <span>Global Filing</span>
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