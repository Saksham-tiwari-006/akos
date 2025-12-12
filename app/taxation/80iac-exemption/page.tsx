'use client'

import React, { useState } from 'react';
import { Rocket, Star, CheckCircle, Clock, Shield, Building, DollarSign, AlertCircle } from 'lucide-react';

export default function ExemptionPage() {
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
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              80-IAC Tax Exemption for Startups
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Recognized startups under DPIIT can claim 100% tax exemption for 3 consecutive years out of first 10 years. Helps startups reduce tax burden and reinvest profits.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* What is 80-IAC */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Star className="w-8 h-8 text-yellow-400 mr-3" />
                What is 80-IAC Tax Exemption?
              </h2>
              <div className="prose prose-lg text-gray-300">
                <p className="mb-6">
                  Section 80-IAC provides a 100% tax exemption on profits and gains derived by eligible startups for any three consecutive assessment years out of their first ten years of existence. This exemption is designed to promote the startup ecosystem in India and encourage innovation.
                </p>
                <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-lg p-6 border border-green-500/30">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-white mb-2">100%</div>
                    <div className="text-gray-300">Tax Exemption for 3 Years</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Eligibility Criteria */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">Eligibility Criteria</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-2">DPIIT Certificate</h3>
                    <p className="text-gray-300">Must have a valid certificate of recognition from Department for Promotion of Industry and Internal Trade</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-2">Innovative Business Model</h3>
                    <p className="text-gray-300">Business must be innovative, scalable with high potential for employment generation or wealth creation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-2">Not Formed by Splitting</h3>
                    <p className="text-gray-300">Should not be formed by splitting up or reconstruction of existing business</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="w-6 h-6 text-green-400 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-white mb-2">Incorporation Date</h3>
                    <p className="text-gray-300">Must be incorporated after April 1, 2016</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Application Process */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">Application Process - IMB Route</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">DPIIT Recognition</h3>
                    <p className="text-gray-300">Obtain startup recognition certificate from DPIIT portal</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">IMB Application</h3>
                    <p className="text-gray-300">Apply to Inter-Ministerial Board (IMB) through prescribed form</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Document Submission</h3>
                    <p className="text-gray-300">Submit business plan, financial projections, and innovation details</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">IMB Review</h3>
                    <p className="text-gray-300">IMB evaluates the application based on innovation and scalability</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">5</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Certificate Issuance</h3>
                    <p className="text-gray-300">Upon approval, IMB issues exemption certificate</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Required Documents */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">Required Documents</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-white text-lg">Basic Documents</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">DPIIT recognition certificate</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Certificate of incorporation</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Memorandum & Articles</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">PAN & TAN certificates</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-white text-lg">Business Documents</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Detailed business plan</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Financial projections</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Innovation description</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Audited financial statements</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Benefits */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">Benefits of 80-IAC Exemption</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <DollarSign className="w-6 h-6 text-green-400" />
                    <span className="text-white font-medium">100% Tax Savings</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Rocket className="w-6 h-6 text-blue-400" />
                    <span className="text-white font-medium">Faster Business Growth</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building className="w-6 h-6 text-purple-400" />
                    <span className="text-white font-medium">Capital Reinvestment</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-yellow-400" />
                    <span className="text-white font-medium">Competitive Advantage</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="w-6 h-6 text-pink-400" />
                    <span className="text-white font-medium">Enhanced Valuation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-indigo-400" />
                    <span className="text-white font-medium">Extended Growth Period</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Important Notes */}
            <section className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl p-8 border border-yellow-500/30">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <AlertCircle className="w-7 h-7 text-yellow-400 mr-3" />
                Important Considerations
              </h2>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></span>
                  <span>Exemption is available only for 3 consecutive years out of first 10 years</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></span>
                  <span>IMB approval is mandatory before claiming exemption</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></span>
                  <span>Business should maintain innovation and scalability criteria</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></span>
                  <span>Regular compliance and reporting to authorities required</span>
                </li>
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Get 80-IAC Exemption Assistance</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Startup Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Contact Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Describe your startup business, innovation, and exemption requirements..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                ></textarea>
                <div>
                  <label className="block text-sm font-medium mb-2">Upload Business Plan (Optional)</label>
                  <input
                    type="file"
                    name="file"
                    onChange={handleFileChange}
                    accept=".pdf,.doc,.docx"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-green-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Request 80-IAC Assistance
                </button>
              </form>
            </div>

            {/* Quick Facts */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">80-IAC Quick Facts</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-gray-400 text-sm">Exemption Period</span>
                  <p className="text-white font-medium">3 Consecutive Years</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Tax Savings</span>
                  <p className="text-white font-medium">100% on Profits</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Approval Authority</span>
                  <p className="text-white font-medium">Inter-Ministerial Board</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Eligibility</span>
                  <p className="text-white font-medium">DPIIT Recognized Startups</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}