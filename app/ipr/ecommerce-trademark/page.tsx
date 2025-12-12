'use client'

import React, { useState } from 'react';
import { ShoppingCart, FileText, CheckCircle, Shield, Clock, Building, DollarSign, Award, Globe } from 'lucide-react';

export default function EcommerceTrademarkPage() {
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-6">
              <ShoppingCart className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              E-commerce Trademark Registration
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Protect your brand on Amazon, Flipkart, and other marketplaces with specialized e-commerce trademark registration.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* What is E-commerce Trademark */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <ShoppingCart className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">E-commerce Trademark Registration</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6">
                  E-commerce trademark registration is specifically designed for online sellers and brands operating on digital marketplaces like Amazon, Flipkart, Myntra, and others. This specialized registration focuses on Class 35 (advertising and business services) and related classes to provide comprehensive protection for online businesses, enabling brand registry benefits, counterfeit protection, and enhanced seller privileges on major e-commerce platforms.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-green-600/10 to-emerald-600/10 p-6 rounded-lg border border-green-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      Marketplace Benefits
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>Brand Registry:</strong> Amazon, Flipkart brand enrollment</li>
                      <li>• <strong>Counterfeit Protection:</strong> Automated removal of fakes</li>
                      <li>• <strong>Enhanced Listings:</strong> Rich content and A+ pages</li>
                      <li>• <strong>Advertising Tools:</strong> Sponsored brand campaigns</li>
                      <li>• <strong>Analytics Access:</strong> Brand performance insights</li>
                      <li>• <strong>Seller Privileges:</strong> Premium seller features</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 p-6 rounded-lg border border-blue-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      Protection Coverage
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>Online Retail:</strong> E-commerce selling activities</li>
                      <li>• <strong>Digital Marketing:</strong> Online advertising services</li>
                      <li>• <strong>Customer Service:</strong> Online support services</li>
                      <li>• <strong>Marketplace Operations:</strong> Platform selling rights</li>
                      <li>• <strong>Brand Management:</strong> Online brand building</li>
                      <li>• <strong>Business Services:</strong> Comprehensive commercial use</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Class 35 Specifics */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Building className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">Class 35 for E-commerce</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">🛍️ Core E-commerce Services (Class 35)</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-white mb-2">Retail Services:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Online retail store services</li>
                        <li>• Electronic commerce services</li>
                        <li>• Online marketplace services</li>
                        <li>• Catalog ordering services</li>
                        <li>• Mail order services</li>
                        <li>• Wholesale services</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Advertising Services:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Online advertising</li>
                        <li>• Marketing services</li>
                        <li>• Promotional activities</li>
                        <li>• Search engine marketing</li>
                        <li>• Social media advertising</li>
                        <li>• Digital marketing campaigns</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">📋 Business Administration Services</h3>
                  <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
                    <div>
                      <h4 className="font-medium text-white mb-2">Customer Services:</h4>
                      <ul className="space-y-1">
                        <li>• Customer relationship management</li>
                        <li>• Order processing services</li>
                        <li>• Customer support services</li>
                        <li>• Help desk services</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Data Services:</h4>
                      <ul className="space-y-1">
                        <li>• Database management</li>
                        <li>• Information processing</li>
                        <li>• Data analysis services</li>
                        <li>• Business intelligence</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Office Functions:</h4>
                      <ul className="space-y-1">
                        <li>• Administrative services</li>
                        <li>• Business management</li>
                        <li>• Office administration</li>
                        <li>• Secretarial services</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Marketplace Brand Registry */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Award className="w-8 h-8 text-purple-400" />
                <h2 className="text-3xl font-bold text-white">Brand Registry Benefits</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">A</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-orange-400">🛒 Amazon Brand Registry</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Access exclusive Amazon tools and protections to build and protect your brand on the world's largest marketplace.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Enhanced Brand Content (A+ Content)</li>
                        <li>• Brand Story and Video content</li>
                        <li>• Proactive brand protection tools</li>
                        <li>• Report a Violation tool for counterfeits</li>
                        <li>• Sponsored Brand advertising</li>
                        <li>• Brand Analytics and insights</li>
                        <li>• Global brand protection program</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">F</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-blue-400">🏪 Flipkart Brand Authorization</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Gain authorized seller status and premium features on India's leading e-commerce platform.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Authorized brand seller status</li>
                        <li>• Enhanced product cataloging rights</li>
                        <li>• Priority customer support</li>
                        <li>• Brand page customization</li>
                        <li>• Exclusive promotional opportunities</li>
                        <li>• Advanced seller dashboard access</li>
                        <li>• Brand protection enforcement</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">M</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-purple-400">👗 Other Marketplaces</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Extend brand protection across multiple Indian and international e-commerce platforms.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• <strong>Myntra:</strong> Fashion brand registry and protection</li>
                        <li>• <strong>Snapdeal:</strong> Brand authorization program</li>
                        <li>• <strong>Nykaa:</strong> Beauty and cosmetics brand verification</li>
                        <li>• <strong>Ajio:</strong> Fashion brand partnership</li>
                        <li>• <strong>Paytm Mall:</strong> Brand seller privileges</li>
                        <li>• <strong>Meesho:</strong> Social commerce brand protection</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Registration Process */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">E-commerce Registration Process</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-green-400">🔍 Trademark Search & Strategy</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Conduct comprehensive search focusing on Class 35 and relevant e-commerce categories.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Class 35 comprehensive search</li>
                        <li>• Cross-class conflict analysis</li>
                        <li>• Marketplace name availability check</li>
                        <li>• Domain name availability verification</li>
                        <li>• International trademark conflicts</li>
                        <li>• E-commerce specific risk assessment</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-blue-400">📋 Application Filing with E-commerce Focus</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        File trademark application with comprehensive Class 35 coverage and additional relevant classes.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Primary Class 35 filing (advertising, retail services)</li>
                        <li>• Product-specific classes (9, 25, 42, etc.)</li>
                        <li>• Comprehensive service descriptions</li>
                        <li>• E-commerce specific terminologies</li>
                        <li>• Multi-class strategic filing</li>
                        <li>• Future expansion considerations</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-purple-400">⚖️ Examination & Response</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Navigate trademark office examination with expert responses to e-commerce specific objections.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Examination report handling</li>
                        <li>• E-commerce use evidence submission</li>
                        <li>• Distinctiveness arguments for online services</li>
                        <li>• Class 35 specification clarifications</li>
                        <li>• Marketplace usage documentation</li>
                        <li>• Expert legal responses</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-yellow-400">🏪 Marketplace Registration Setup</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Enroll in brand registry programs across major e-commerce platforms using registered trademark.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Amazon Brand Registry enrollment</li>
                        <li>• Flipkart brand authorization application</li>
                        <li>• Other marketplace registrations</li>
                        <li>• Brand protection tool setup</li>
                        <li>• Enhanced content creation rights</li>
                        <li>• Ongoing brand monitoring setup</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Fee Structure */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <DollarSign className="w-8 h-8 text-yellow-400" />
                <h2 className="text-3xl font-bold text-white">E-commerce Trademark Fees</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-yellow-400">💰 Government Fees (Per Class)</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-gray-300">
                      <thead>
                        <tr className="border-b border-gray-600">
                          <th className="text-left py-2 font-medium text-white">Entity Type</th>
                          <th className="text-right py-2 font-medium text-white">Filing Fee</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-700">
                          <td className="py-2">Individual</td>
                          <td className="text-right py-2">₹4,500</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2">Startup</td>
                          <td className="text-right py-2">₹4,500</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2">Small Entity</td>
                          <td className="text-right py-2">₹9,000</td>
                        </tr>
                        <tr>
                          <td className="py-2">Others</td>
                          <td className="text-right py-2">₹10,000</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">📊 Recommended Package</h3>
                  <div className="space-y-3">
                    <div className="bg-green-600/10 p-4 rounded border border-green-500/20">
                      <h4 className="font-medium text-white mb-2">E-commerce Starter Package:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Class 35 (Advertising & Retail): ₹4,500-₹10,000</li>
                        <li>• Product Class (9/25/etc.): ₹4,500-₹10,000</li>
                        <li>• Professional fees: ₹25,000</li>
                        <li>• Search & consultation: ₹5,000</li>
                        <li>• <strong>Total: ₹39,000-₹50,000</strong></li>
                      </ul>
                    </div>
                    <div className="bg-blue-600/10 p-4 rounded border border-blue-500/20">
                      <h4 className="font-medium text-white mb-2">Comprehensive Package:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• 3-4 Class filing: ₹18,000-₹40,000</li>
                        <li>• Brand registry setup: ₹10,000</li>
                        <li>• Professional fees: ₹40,000</li>
                        <li>• Ongoing support: ₹15,000</li>
                        <li>• <strong>Total: ₹83,000-₹1,05,000</strong></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Anti-Counterfeiting Benefits */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Shield className="w-8 h-8 text-red-400" />
                <h2 className="text-3xl font-bold text-white">Anti-Counterfeiting Protection</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Automated Protection Tools
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Amazon Project Zero:</strong> Automated counterfeit removal</li>
                    <li>• <strong>Brand Gating:</strong> Restrict unauthorized sellers</li>
                    <li>• <strong>Transparency Program:</strong> Product authentication</li>
                    <li>• <strong>Report a Violation:</strong> Easy infringement reporting</li>
                    <li>• <strong>Proactive Monitoring:</strong> Continuous brand scanning</li>
                    <li>• <strong>Predictive Protection:</strong> AI-powered detection</li>
                    <li>• <strong>Self-Service Removals:</strong> Instant takedown capability</li>
                  </ul>
                </div>
                
                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-orange-400 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Enforcement Benefits
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Faster Takedowns:</strong> Hours instead of weeks</li>
                    <li>• <strong>Seller Penalties:</strong> Account restrictions for infringers</li>
                    <li>• <strong>Brand Analytics:</strong> Infringement tracking data</li>
                    <li>• <strong>Legal Support:</strong> Marketplace legal team backing</li>
                    <li>• <strong>Customer Education:</strong> Authentic product identification</li>
                    <li>• <strong>Revenue Protection:</strong> Prevent sales diversion</li>
                    <li>• <strong>Reputation Management:</strong> Maintain brand quality</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Timeline & Investment */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Clock className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">Timeline & Investment</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Process Timeline
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Search & Strategy:</strong> 1-2 weeks</li>
                    <li>• <strong>Application Filing:</strong> 1 week</li>
                    <li>• <strong>Examination Report:</strong> 4-6 months</li>
                    <li>• <strong>Response Filing:</strong> 1 month</li>
                    <li>• <strong>Advertisement:</strong> 4-6 months</li>
                    <li>• <strong>Registration:</strong> 2-3 months</li>
                    <li>• <strong>Brand Registry Setup:</strong> 2-4 weeks</li>
                    <li>• <strong>Total Process:</strong> 12-18 months</li>
                  </ul>
                </div>
                
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-purple-400">💰 Total Investment Breakdown</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Government Fees:</strong> ₹9,000-₹40,000</li>
                    <li>• <strong>Professional Fees:</strong> ₹25,000-₹50,000</li>
                    <li>• <strong>Search & Analysis:</strong> ₹5,000-₹10,000</li>
                    <li>• <strong>Brand Registry Setup:</strong> ₹5,000-₹15,000</li>
                    <li>• <strong>Monitoring Tools:</strong> ₹10,000-₹25,000</li>
                    <li>• <strong>Annual Maintenance:</strong> ₹15,000-₹30,000</li>
                    <li>• <strong>ROI Timeline:</strong> 6-12 months</li>
                    <li>• <strong>Break-even:</strong> First year protection benefits</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Get Started */}
            <section className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Dominate E-commerce with Trademark Protection</h2>
              <p className="text-xl mb-6 opacity-90">
                Secure your online brand with specialized e-commerce trademark registration and marketplace benefits.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">Class 35</div>
                  <div className="text-sm opacity-80">Core Protection</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">5+ Platforms</div>
                  <div className="text-sm opacity-80">Marketplace Coverage</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">24x7</div>
                  <div className="text-sm opacity-80">Brand Monitoring</div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">E-commerce Trademark</h3>
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
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
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
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      E-commerce Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Brand name, marketplaces (Amazon/Flipkart), product categories, current selling status..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="file" className="block text-sm font-medium text-gray-300 mb-2">
                      Upload Brand Logo (Optional)
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
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Protect E-commerce Brand
                  </button>
                </form>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span>Marketplace Expert</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 text-blue-400 mr-2" />
                      <span>Brand Registry</span>
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