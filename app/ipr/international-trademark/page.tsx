'use client'

import React, { useState } from 'react';
import { Globe, FileText, CheckCircle, AlertTriangle, Clock, Shield, Building, DollarSign, MapPin } from 'lucide-react';

export default function InternationalTrademarkPage() {
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              International Trademark Registration
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Protect your brand globally through Madrid Protocol with single application covering multiple countries via WIPO.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* What is Madrid Protocol */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Globe className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">Madrid Protocol System</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6">
                  The Madrid Protocol is an international treaty that allows businesses to register trademarks in multiple countries through a single application. Administered by the World Intellectual Property Organization (WIPO), it provides a cost-effective and efficient way to protect brands globally, covering over 100 member countries with one centralized filing system.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 p-6 rounded-lg border border-blue-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <MapPin className="w-5 h-5" />
                      Protocol Benefits
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>Single Application:</strong> File once, protect globally</li>
                      <li>• <strong>Cost Effective:</strong> Lower fees than individual filings</li>
                      <li>• <strong>Centralized Management:</strong> One office, one language</li>
                      <li>• <strong>Easy Expansion:</strong> Add countries later</li>
                      <li>• <strong>Renewal Simplicity:</strong> Single renewal covers all</li>
                      <li>• <strong>Portfolio Management:</strong> Unified record keeping</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-600/10 to-emerald-600/10 p-6 rounded-lg border border-green-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Building className="w-5 h-5" />
                      Coverage Statistics
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>Member Countries:</strong> 100+ countries covered</li>
                      <li>• <strong>Major Markets:</strong> US, EU, UK, Japan, China</li>
                      <li>• <strong>Emerging Markets:</strong> India, Brazil, Russia</li>
                      <li>• <strong>Population Coverage:</strong> 80% of global GDP</li>
                      <li>• <strong>Processing Languages:</strong> English, French, Spanish</li>
                      <li>• <strong>Annual Filings:</strong> 70,000+ applications</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Madrid Protocol Process */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Madrid Protocol Process</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-blue-400">🏛️ Base Application/Registration</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Secure base trademark application or registration in your home country (India) before filing international application.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• File trademark in India first</li>
                        <li>• Obtain application number or registration</li>
                        <li>• Ensure identical mark and similar goods/services</li>
                        <li>• Base application provides foundation for international filing</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-green-400">📋 File Through Indian Trademark Office</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Submit international application through the Indian Trademark Registry as the Office of Origin.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Complete Form MM2 (International Application)</li>
                        <li>• Pay Indian office fees and WIPO fees</li>
                        <li>• Select target member countries</li>
                        <li>• Specify goods/services classes</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-purple-400">🌍 Choose Target Countries</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Select specific Madrid Protocol member countries where you want trademark protection.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Major markets: US, EU, UK, Japan, China</li>
                        <li>• Emerging markets: Brazil, Russia, ASEAN</li>
                        <li>• Calculate country-specific fees</li>
                        <li>• Consider local trademark laws and requirements</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-yellow-400">🏛️ WIPO Examination</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        WIPO conducts formal examination and assigns international registration number.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Formal examination of application</li>
                        <li>• Verification of fee payments</li>
                        <li>• International registration certificate issued</li>
                        <li>• Publication in WIPO Gazette</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-500/10 p-6 rounded-lg border border-indigo-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-indigo-400">✅ Country-Specific Examination</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Each designated country examines the mark according to their national laws and grants or refuses protection.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• 12-18 months examination period per country</li>
                        <li>• Countries may grant or refuse protection</li>
                        <li>• Refusal can be contested locally</li>
                        <li>• Successful countries provide trademark protection</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Fee Structure */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <DollarSign className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Madrid Protocol Fee Structure</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">💰 WIPO Basic Fees (Swiss Francs)</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-gray-300">
                      <thead>
                        <tr className="border-b border-gray-600">
                          <th className="text-left py-2 font-medium text-white">Fee Type</th>
                          <th className="text-right py-2 font-medium text-white">B&W Mark</th>
                          <th className="text-right py-2 font-medium text-white">Color Mark</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-700">
                          <td className="py-2">Basic Fee (up to 3 classes)</td>
                          <td className="text-right py-2">CHF 653</td>
                          <td className="text-right py-2">CHF 903</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2">Additional Class Fee</td>
                          <td className="text-right py-2">CHF 100</td>
                          <td className="text-right py-2">CHF 100</td>
                        </tr>
                        <tr>
                          <td className="py-2">Complementary Fee (per country)</td>
                          <td className="text-right py-2">CHF 100</td>
                          <td className="text-right py-2">CHF 100</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">🌍 Individual Country Fees (Popular Destinations)</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-white mb-2">High-Fee Countries:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• <strong>United States:</strong> CHF 829 per class</li>
                        <li>• <strong>Japan:</strong> CHF 728 per class</li>
                        <li>• <strong>United Kingdom:</strong> CHF 896 per class</li>
                        <li>• <strong>South Korea:</strong> CHF 582 per class</li>
                        <li>• <strong>Australia:</strong> CHF 672 per class</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Standard-Fee Countries:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• <strong>China:</strong> CHF 300 per class</li>
                        <li>• <strong>European Union:</strong> CHF 896 (3 classes)</li>
                        <li>• <strong>Singapore:</strong> CHF 300 per class</li>
                        <li>• <strong>Russia:</strong> CHF 300 per class</li>
                        <li>• <strong>Brazil:</strong> CHF 400 per class</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-purple-400">📊 Cost Comparison Example</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                    <div className="bg-purple-600/10 p-4 rounded">
                      <h4 className="font-medium text-white mb-2">Madrid Protocol Route:</h4>
                      <ul className="space-y-1">
                        <li>• Basic Fee: CHF 653</li>
                        <li>• US Fee: CHF 829</li>
                        <li>• EU Fee: CHF 896</li>
                        <li>• China Fee: CHF 300</li>
                        <li>• <strong>Total: ~CHF 2,678 (~₹2,40,000)</strong></li>
                      </ul>
                    </div>
                    <div className="bg-red-600/10 p-4 rounded">
                      <h4 className="font-medium text-white mb-2">Individual Filings:</h4>
                      <ul className="space-y-1">
                        <li>• US Filing: ~$2,000</li>
                        <li>• EU Filing: ~€3,000</li>
                        <li>• China Filing: ~$1,500</li>
                        <li>• Legal Fees: ~$15,000</li>
                        <li>• <strong>Total: ~$21,500 (~₹18,00,000)</strong></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Advantages & Disadvantages */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <CheckCircle className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Advantages & Considerations</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Key Advantages
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Cost Savings:</strong> 60-70% cheaper than individual filings</li>
                    <li>• <strong>Time Efficient:</strong> Single application process</li>
                    <li>• <strong>Easy Management:</strong> One renewal for all countries</li>
                    <li>• <strong>Flexible Expansion:</strong> Add countries later via subsequent designation</li>
                    <li>• <strong>Centralized Records:</strong> Single point of contact with WIPO</li>
                    <li>• <strong>Language Convenience:</strong> File in English, French, or Spanish</li>
                    <li>• <strong>Portfolio Management:</strong> Unified record keeping and monitoring</li>
                  </ul>
                </div>
                
                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-orange-400 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Important Considerations
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Dependency Risk:</strong> 5-year dependency on base application</li>
                    <li>• <strong>Central Attack:</strong> Base cancellation affects all countries</li>
                    <li>• <strong>Limited Countries:</strong> Only Madrid Protocol members covered</li>
                    <li>• <strong>No Local Presence:</strong> May need local agents for enforcement</li>
                    <li>• <strong>Refusal Handling:</strong> Local responses required for objections</li>
                    <li>• <strong>Currency Risk:</strong> Fees in Swiss Francs subject to fluctuation</li>
                    <li>• <strong>Limited Flexibility:</strong> Changes affect all designated countries</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Required Documents */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">Required Documents</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">📋 Application Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Form MM2 (International Application)</li>
                    <li>• Copy of base Indian trademark application/registration</li>
                    <li>• Clear representation of trademark</li>
                    <li>• List of goods and services (Nice Classification)</li>
                    <li>• Priority claim documents (if claiming priority)</li>
                    <li>• Power of attorney (if filed through agent)</li>
                    <li>• Applicant's complete address and nationality</li>
                  </ul>
                </div>
                
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-purple-400">🌍 Country-Specific Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Declaration of intention to use (US)</li>
                    <li>• Representation authorization (EU)</li>
                    <li>• Translation of mark (if in non-Latin script)</li>
                    <li>• Description of mark (if not clear from representation)</li>
                    <li>• Disclaimer of non-distinctive elements</li>
                    <li>• Color claim (for color marks)</li>
                    <li>• Special form requirements (country-specific)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Timeline and Process */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Clock className="w-8 h-8 text-yellow-400" />
                <h2 className="text-3xl font-bold text-white">Timeline & Process</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-yellow-400">⏰ Registration Timeline</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Indian Base Filing:</strong> 0-6 months</li>
                    <li>• <strong>International Application:</strong> 1-2 months</li>
                    <li>• <strong>WIPO Examination:</strong> 2-4 months</li>
                    <li>• <strong>Country Notifications:</strong> 1 month</li>
                    <li>• <strong>National Examination:</strong> 12-18 months per country</li>
                    <li>• <strong>Total Process:</strong> 18-30 months</li>
                  </ul>
                </div>
                
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400">💰 Total Investment</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>WIPO Fees:</strong> CHF 650-2,000 (~₹60K-₹1.8L)</li>
                    <li>• <strong>Country Fees:</strong> CHF 300-900 per country</li>
                    <li>• <strong>Indian Office Fees:</strong> ₹10,000-₹25,000</li>
                    <li>• <strong>Professional Fees:</strong> ₹50,000-₹2,00,000</li>
                    <li>• <strong>Translation Costs:</strong> ₹5,000-₹25,000</li>
                    <li>• <strong>Total (5 countries):</strong> ₹3,00,000-₹8,00,000</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Get Started */}
            <section className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Go Global with Madrid Protocol</h2>
              <p className="text-xl mb-6 opacity-90">
                Protect your brand in 100+ countries with single application through WIPO's efficient Madrid Protocol system.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">100+</div>
                  <div className="text-sm opacity-80">Countries</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">60-70%</div>
                  <div className="text-sm opacity-80">Cost Savings</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">18-30 M</div>
                  <div className="text-sm opacity-80">Full Process</div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Global Trademark</h3>
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
                      International Requirements
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Trademark name, target countries, business nature, Indian base application status..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="file" className="block text-sm font-medium text-gray-300 mb-2">
                      Upload Trademark Logo (Optional)
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
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Start Global Protection
                  </button>
                </form>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span>WIPO Expert</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 text-blue-400 mr-2" />
                      <span>Global Coverage</span>
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