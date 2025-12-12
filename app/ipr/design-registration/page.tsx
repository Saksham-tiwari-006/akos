'use client'

import React, { useState } from 'react';
import { Palette, FileText, CheckCircle, Eye, Clock, Shield, Building, DollarSign, Award } from 'lucide-react';

export default function DesignRegistrationPage() {
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
              <Palette className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Design Registration
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive design registration services to protect aesthetic and visual elements of your products with expert IP strategy.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Understanding Design Protection */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Palette className="w-8 h-8 text-purple-400" />
                <h2 className="text-3xl font-bold text-white">Understanding Industrial Design Protection</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6">
                  Industrial design registration protects the aesthetic and visual aspects of products, including shape, configuration, pattern, ornamentation, and color combinations that give products their distinctive appearance. Design registration grants exclusive rights for 10 years (extendable to 15 years) from the date of registration, preventing others from using, manufacturing, or selling products with identical or substantially similar designs. Design protection is crucial for product differentiation, brand value creation, and competitive market positioning across industries from fashion to technology.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 p-6 rounded-lg border border-purple-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Palette className="w-5 h-5" />
                      Protectable Design Elements
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>Shape:</strong> Three-dimensional product configuration</li>
                      <li>• <strong>Pattern:</strong> Surface decorations and motifs</li>
                      <li>• <strong>Ornamentation:</strong> Decorative elements and features</li>
                      <li>• <strong>Color Combinations:</strong> Specific color schemes</li>
                      <li>• <strong>Texture:</strong> Surface textures and finishes</li>
                      <li>• <strong>Composition:</strong> Arrangement of visual elements</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 p-6 rounded-lg border border-blue-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Eye className="w-5 h-5" />
                      Registration Criteria
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>Novelty:</strong> New and not previously published</li>
                      <li>• <strong>Originality:</strong> Not copied from existing designs</li>
                      <li>• <strong>Industrial Application:</strong> Capable of mass production</li>
                      <li>• <strong>Visual Appeal:</strong> Aesthetic value and distinctiveness</li>
                      <li>• <strong>Non-functionality:</strong> Purely aesthetic features</li>
                      <li>• <strong>Grace Period:</strong> 12-month disclosure grace period</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Design Registration Process */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Design Registration Process</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-blue-400">🔍 Design Search & Novelty Assessment</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Comprehensive prior art search and novelty analysis to ensure registrability.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Global design database search and analysis</li>
                        <li>• Prior publications and exhibition records</li>
                        <li>• Novelty and originality assessment</li>
                        <li>• Similar design identification and comparison</li>
                        <li>• Registrability opinion and strategy advice</li>
                        <li>• International design landscape analysis</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-green-400">📸 Design Documentation & Representation</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Professional design representation preparation for registration filing.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• High-quality design photographs and drawings</li>
                        <li>• Multiple view representations (6-7 views)</li>
                        <li>• Technical drawings and specifications</li>
                        <li>• Color photographs and variations</li>
                        <li>• Design description and statement of novelty</li>
                        <li>• Classification according to Locarno Agreement</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-purple-400">🏛️ Design Office Filing & Formalities</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Complete design registration application filing with patent office compliance.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Form 1 design application preparation and filing</li>
                        <li>• Fee calculation and payment processing</li>
                        <li>• Priority claim and convention applications</li>
                        <li>• Power of attorney and authorization</li>
                        <li>• Multiple design applications (if applicable)</li>
                        <li>• Application number and filing receipt</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-yellow-400">⚖️ Examination & Registration</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Design examination process and registration certificate issuance.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Formal examination and compliance check</li>
                        <li>• Novelty examination and prior art comparison</li>
                        <li>• Office action response (if required)</li>
                        <li>• Registration approval and certificate</li>
                        <li>• Publication in design journal</li>
                        <li>• Registration maintenance and renewals</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Design Categories */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Building className="w-8 h-8 text-orange-400" />
                <h2 className="text-3xl font-bold text-white">Design Categories & Applications</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-orange-400">🏠 Consumer Products & Appliances</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-white mb-2">Home Appliances:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Kitchen appliances design</li>
                        <li>• Home electronics styling</li>
                        <li>• Furniture and furnishings</li>
                        <li>• Lighting fixtures design</li>
                        <li>• Bathroom fittings</li>
                        <li>• Storage solutions</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Personal Products:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Consumer electronics</li>
                        <li>• Personal care devices</li>
                        <li>• Fashion accessories</li>
                        <li>• Jewelry and ornaments</li>
                        <li>• Sportswear and equipment</li>
                        <li>• Toys and games</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Technology Products:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Mobile device designs</li>
                        <li>• Computer hardware styling</li>
                        <li>• Wearable technology</li>
                        <li>• Automotive accessories</li>
                        <li>• IoT device designs</li>
                        <li>• Gaming peripherals</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">🏭 Industrial & Commercial Designs</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-white mb-2">Industrial Equipment:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Manufacturing machinery</li>
                        <li>• Industrial tools design</li>
                        <li>• Equipment housing and panels</li>
                        <li>• Control interfaces</li>
                        <li>• Safety equipment design</li>
                        <li>• Mechanical components</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Commercial Products:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Office equipment design</li>
                        <li>• Retail display systems</li>
                        <li>• Packaging and containers</li>
                        <li>• Commercial furniture</li>
                        <li>• Signage and displays</li>
                        <li>• Point-of-sale systems</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Automotive & Transport:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Vehicle exterior styling</li>
                        <li>• Interior design elements</li>
                        <li>• Dashboard and controls</li>
                        <li>• Wheel and tire designs</li>
                        <li>• Transport equipment</li>
                        <li>• Motorcycle and bicycle designs</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">🎨 Fashion & Lifestyle Designs</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-white mb-2">Fashion & Textiles:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Clothing and garment designs</li>
                        <li>• Textile patterns and motifs</li>
                        <li>• Footwear and accessories</li>
                        <li>• Handbags and luggage</li>
                        <li>• Fashion jewelry</li>
                        <li>• Home textile designs</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Lifestyle Products:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Decorative items</li>
                        <li>• Art and craft products</li>
                        <li>• Stationery and office supplies</li>
                        <li>• Gift and novelty items</li>
                        <li>• Lifestyle accessories</li>
                        <li>• Wellness and beauty products</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Digital & UI/UX:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Graphical user interfaces</li>
                        <li>• App icon designs</li>
                        <li>• Digital pattern designs</li>
                        <li>• Website layout designs</li>
                        <li>• Digital wallpapers</li>
                        <li>• Screen saver designs</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* International Design Registration */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Award className="w-8 h-8 text-cyan-400" />
                <h2 className="text-3xl font-bold text-white">International Design Protection</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-cyan-500/10 p-6 rounded-lg border border-cyan-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-cyan-400 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Hague System (International Registration)
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Single Application:</strong> File in multiple countries simultaneously</li>
                    <li>• <strong>Cost Efficiency:</strong> Reduced filing and maintenance costs</li>
                    <li>• <strong>Centralized Management:</strong> Single renewal for all countries</li>
                    <li>• <strong>Priority Benefits:</strong> 6-month convention priority</li>
                    <li>• <strong>Member Countries:</strong> 70+ contracting parties</li>
                    <li>• <strong>WIPO Administration:</strong> World Intellectual Property Organization</li>
                    <li>• <strong>Publication:</strong> International Design Bulletin</li>
                  </ul>
                </div>
                
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-purple-400 flex items-center gap-2">
                    <Building className="w-5 h-5" />
                    National Design Registration
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Country-Specific Filing:</strong> Direct national applications</li>
                    <li>• <strong>Convention Priority:</strong> 6-month priority period</li>
                    <li>• <strong>Local Requirements:</strong> Country-specific formalities</li>
                    <li>• <strong>Examination Variations:</strong> Different examination standards</li>
                    <li>• <strong>Protection Terms:</strong> Varying protection periods</li>
                    <li>• <strong>Enforcement Rights:</strong> Local enforcement mechanisms</li>
                    <li>• <strong>Foreign Associates:</strong> Local attorney coordination</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Fee Structure & Timeline */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <DollarSign className="w-8 h-8 text-yellow-400" />
                <h2 className="text-3xl font-bold text-white">Design Registration Fees & Timeline</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-yellow-400">💰 Indian Design Registration Fees</h3>
                  <div className="space-y-4">
                    <div className="bg-yellow-600/10 p-4 rounded border border-yellow-500/20">
                      <h4 className="font-medium text-white mb-2">Government Fees:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Application fee: ₹1,000 (natural person)</li>
                        <li>• Application fee: ₹4,000 (other than natural person)</li>
                        <li>• Multiple designs: ₹1,000 per additional design</li>
                        <li>• Classification fee: ₹1,000 per additional class</li>
                        <li>• Registration fee: ₹1,000</li>
                        <li>• Extension fee (5 years): ₹2,000</li>
                      </ul>
                    </div>
                    <div className="bg-blue-600/10 p-4 rounded border border-blue-500/20">
                      <h4 className="font-medium text-white mb-2">Professional Services:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Design search: ₹15,000-₹50,000</li>
                        <li>• Application drafting: ₹25,000-₹75,000</li>
                        <li>• Filing and prosecution: ₹15,000-₹40,000</li>
                        <li>• International filing: ₹1,00,000-₹5,00,000</li>
                        <li>• Portfolio management: ₹10,000-₹50,000/year</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Design Registration Timeline
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Design Search:</strong> 1-2 weeks</li>
                    <li>• <strong>Application Preparation:</strong> 2-3 weeks</li>
                    <li>• <strong>Filing Process:</strong> 1 week</li>
                    <li>• <strong>Formal Examination:</strong> 2-4 months</li>
                    <li>• <strong>Novelty Examination:</strong> 6-12 months</li>
                    <li>• <strong>Registration Certificate:</strong> 12-18 months</li>
                    <li>• <strong>Publication:</strong> Within 3 months of registration</li>
                    <li>• <strong>Total Timeline:</strong> 12-18 months average</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Design Benefits */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <CheckCircle className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Design Registration Benefits</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Exclusive Rights & Protection
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Design Monopoly:</strong> Exclusive rights for 15 years</li>
                    <li>• <strong>Market Differentiation:</strong> Unique product positioning</li>
                    <li>• <strong>Brand Value:</strong> Enhanced aesthetic appeal and recognition</li>
                    <li>• <strong>Licensing Opportunities:</strong> Design licensing revenue</li>
                    <li>• <strong>Investment Protection:</strong> Design development ROI security</li>
                    <li>• <strong>Competitive Advantage:</strong> Market exclusivity benefits</li>
                    <li>• <strong>Enforcement Rights:</strong> Legal remedies for infringement</li>
                  </ul>
                </div>
                
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-purple-400 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Commercial & Strategic Benefits
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Product Launch:</strong> Protected market entry</li>
                    <li>• <strong>Consumer Recognition:</strong> Distinctive visual identity</li>
                    <li>• <strong>Portfolio Building:</strong> Design asset development</li>
                    <li>• <strong>Export Markets:</strong> International design protection</li>
                    <li>• <strong>Franchise Opportunities:</strong> Design standardization</li>
                    <li>• <strong>Investment Attraction:</strong> IP asset valuation</li>
                    <li>• <strong>Technology Transfer:</strong> Design licensing partnerships</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Get Started */}
            <section className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Protect Your Design Innovation</h2>
              <p className="text-xl mb-6 opacity-90">
                Expert design registration services for comprehensive aesthetic protection and market differentiation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">15 Years</div>
                  <div className="text-sm opacity-80">Protection</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">Global</div>
                  <div className="text-sm opacity-80">Filing</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">Expert</div>
                  <div className="text-sm opacity-80">Service</div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Design Registration</h3>
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
                      Design Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      placeholder="Product category, design elements (shape/pattern/color), novelty features, international filing needs, target markets..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="file" className="block text-sm font-medium text-gray-300 mb-2">
                      Upload Design Images (Optional)
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
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Start Design Registration
                  </button>
                </form>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span>Design Experts</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 text-blue-400 mr-2" />
                      <span>Global Protection</span>
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