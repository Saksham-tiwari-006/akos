'use client'

import React, { useState } from 'react';
import { FileText, Users, CheckCircle, Clock, Shield, Building, DollarSign, AlertCircle } from 'lucide-react';

export default function ITR2Page() {
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
              <Users className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              ITR-2 Form Filing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              ITR-2 is for individuals and HUFs having salary, more than one house property, capital gains, foreign assets/income, and dividend income. More detailed than ITR-1.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Eligibility Criteria */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <CheckCircle className="w-8 h-8 text-purple-400 mr-3" />
                Who Should File ITR-2?
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-4">Individual Taxpayers</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Salaried individuals with complex income</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Having more than one house property</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Capital gains from investments</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Foreign assets or income</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-4">HUF (Hindu Undivided Family)</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">HUF with property income</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Investment income from stocks</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Dividend income above exemption</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Income from other sources</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Income Types Covered */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">Income Types Covered in ITR-2</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-white text-lg">Salary Income</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2"></span>
                      <span>Basic salary & allowances</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2"></span>
                      <span>Pension income</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mt-2"></span>
                      <span>Perquisites & benefits</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-white text-lg">House Property</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
                      <span>Multiple house properties</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
                      <span>Rental income</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-blue-400 rounded-full mt-2"></span>
                      <span>Home loan interest</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-white text-lg">Capital Gains</h3>
                  <ul className="text-gray-300 space-y-2">
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2"></span>
                      <span>Short-term capital gains</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2"></span>
                      <span>Long-term capital gains</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-2 h-2 bg-green-400 rounded-full mt-2"></span>
                      <span>Equity & mutual funds</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Filing Process */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">ITR-2 Filing Process</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Document Collection</h3>
                    <p className="text-gray-300">Gather Form 16, property documents, investment statements, and capital gains records</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Income Computation</h3>
                    <p className="text-gray-300">Calculate income under all heads, compute capital gains and house property income</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Fill ITR-2 Form</h3>
                    <p className="text-gray-300">Enter detailed income information, deductions, and foreign asset details if applicable</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Tax Calculation</h3>
                    <p className="text-gray-300">Compute tax liability, claim deductions under Chapter VI-A</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">5</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Submit & Verify</h3>
                    <p className="text-gray-300">E-file return and verify using Aadhaar OTP, net banking, or ITR-V</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Key Features */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">ITR-2 Suitability</h2>
              <div className="prose prose-lg text-gray-300">
                <p className="mb-6">
                  ITR-2 is more detailed and comprehensive compared to ITR-1, making it suitable for high-income salaried individuals and those with investment-heavy portfolios. It accommodates complex income structures including multiple property holdings, significant capital gains transactions, and foreign asset declarations.
                </p>
                <p>
                  This form is ideal for taxpayers who have outgrown the simplicity of ITR-1 but don't have business income that would require ITR-3 or ITR-4. It provides detailed sections for proper reporting of various income sources while ensuring compliance with tax regulations.
                </p>
              </div>
            </section>

            {/* Benefits */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">Benefits of Proper ITR-2 Filing</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <DollarSign className="w-6 h-6 text-green-400" />
                    <span className="text-white font-medium">Optimize Capital Gains Tax</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building className="w-6 h-6 text-blue-400" />
                    <span className="text-white font-medium">Multiple Property Benefits</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-purple-400" />
                    <span className="text-white font-medium">Foreign Asset Compliance</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-6 h-6 text-yellow-400" />
                    <span className="text-white font-medium">Detailed Income Reporting</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-400" />
                    <span className="text-white font-medium">Loss Carry Forward</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-red-400" />
                    <span className="text-white font-medium">Avoid Scrutiny</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Important Note */}
            <section className="bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-2xl p-8 border border-orange-500/30">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <AlertCircle className="w-7 h-7 text-orange-400 mr-3" />
                Important Considerations
              </h2>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mt-2"></span>
                  <span>ITR-2 requires more detailed documentation than ITR-1</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mt-2"></span>
                  <span>Capital gains calculations need proper cost and sale price records</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mt-2"></span>
                  <span>Foreign asset reporting is mandatory if applicable</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-orange-400 rounded-full mt-2"></span>
                  <span>Professional assistance recommended for complex cases</span>
                </li>
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Get ITR-2 Filing Assistance</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Describe your income sources (salary, property, capital gains, etc.)..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                ></textarea>
                <div>
                  <label className="block text-sm font-medium mb-2">Upload Income Documents (Optional)</label>
                  <input
                    type="file"
                    name="file"
                    onChange={handleFileChange}
                    accept=".pdf,.jpg,.png"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-purple-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Request ITR-2 Filing
                </button>
              </form>
            </div>

            {/* Quick Facts */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">ITR-2 Quick Facts</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-gray-400 text-sm">Applicable For</span>
                  <p className="text-white font-medium">Individuals & HUF</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Due Date</span>
                  <p className="text-white font-medium">July 31st</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Complexity</span>
                  <p className="text-white font-medium">Moderate to High</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Income Types</span>
                  <p className="text-white font-medium">Multiple Sources</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}