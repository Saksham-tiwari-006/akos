'use client'

import React, { useState } from 'react';
import { RefreshCw, FileText, CheckCircle, AlertTriangle, Clock, Shield, Building, DollarSign, Calendar } from 'lucide-react';

export default function TrademarkRenewalPage() {
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
              <RefreshCw className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Trademark Renewal
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Renew your trademark registration for continued 10-year protection. File TM-R forms and maintain your brand ownership rights.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* What is Trademark Renewal */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <RefreshCw className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">What is Trademark Renewal?</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6">
                  Trademark renewal is the process of extending the protection period of a registered trademark for another 10 years. A trademark is initially valid for 10 years from the date of registration, and to maintain exclusive ownership rights, it must be renewed before expiry. The renewal ensures continued legal protection and prevents the trademark from lapsing.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-green-600/10 to-emerald-600/10 p-6 rounded-lg border border-green-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Calendar className="w-5 h-5" />
                      Renewal Timeline
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>Initial Validity:</strong> 10 years from registration</li>
                      <li>• <strong>Renewal Period:</strong> Within 12 months before expiry</li>
                      <li>• <strong>Grace Period:</strong> 6 months after expiry (with penalty)</li>
                      <li>• <strong>Restoration:</strong> Up to 12 months after grace period</li>
                      <li>• <strong>Further Renewals:</strong> Every 10 years indefinitely</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-600/10 to-indigo-600/10 p-6 rounded-lg border border-blue-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <DollarSign className="w-5 h-5" />
                      Renewal Benefits
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Continued exclusive brand rights</li>
                      <li>• Legal protection against infringement</li>
                      <li>• Brand value and goodwill maintenance</li>
                      <li>• International registration eligibility</li>
                      <li>• Licensing and franchising opportunities</li>
                      <li>• Asset value for business transactions</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Trademark Renewal Process */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">Trademark Renewal Process</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-blue-400">📅 Check Renewal Due Date</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Verify the exact expiry date of your trademark and plan renewal well in advance.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Check trademark certificate for registration date</li>
                        <li>• Calculate 10-year expiry from registration</li>
                        <li>• Search trademark status on IP India portal</li>
                        <li>• Plan renewal 6-12 months before expiry</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-green-400">📋 Prepare Form TM-R</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Complete and file Form TM-R (Trademark Renewal) with accurate details and supporting documents.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Fill Form TM-R with trademark details</li>
                        <li>• Provide current proprietor information</li>
                        <li>• Update address or ownership changes</li>
                        <li>• Attach proof of continued use (if required)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-purple-400">💰 Pay Government Fees</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Pay the prescribed renewal fees based on applicant category and number of classes.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Individual: ₹9,000 per class</li>
                        <li>• Startup/Small Entity: ₹4,500 per class</li>
                        <li>• Others: ₹10,000 per class</li>
                        <li>• Late fees if filing after expiry</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-yellow-400">🏛️ File with Trademark Registry</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Submit the completed application through the appropriate trademark office.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• File online through IP India portal</li>
                        <li>• Submit to appropriate registry office</li>
                        <li>• Include all required documents</li>
                        <li>• Obtain acknowledgment receipt</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-500/10 p-6 rounded-lg border border-indigo-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-indigo-400">✅ Receive Renewal Certificate</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Obtain the renewal certificate confirming extended protection for another 10 years.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Registry processes renewal application</li>
                        <li>• Renewal certificate issued</li>
                        <li>• Updated trademark register entry</li>
                        <li>• Protection extended for 10 more years</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Renewal Fee Structure */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <DollarSign className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Renewal Fee Structure</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">💰 Government Fees (Per Class)</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm text-gray-300">
                      <thead>
                        <tr className="border-b border-gray-600">
                          <th className="text-left py-2 font-medium text-white">Applicant Category</th>
                          <th className="text-right py-2 font-medium text-white">Renewal Fee</th>
                          <th className="text-right py-2 font-medium text-white">Late Fee (After Expiry)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-700">
                          <td className="py-2">Individual/Natural Person</td>
                          <td className="text-right py-2">₹9,000</td>
                          <td className="text-right py-2">₹4,500 additional</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2">Startup (DPIIT recognized)</td>
                          <td className="text-right py-2">₹4,500</td>
                          <td className="text-right py-2">₹2,250 additional</td>
                        </tr>
                        <tr className="border-b border-gray-700">
                          <td className="py-2">Small Entity</td>
                          <td className="text-right py-2">₹4,500</td>
                          <td className="text-right py-2">₹2,250 additional</td>
                        </tr>
                        <tr>
                          <td className="py-2">Others (Companies/LLP)</td>
                          <td className="text-right py-2">₹10,000</td>
                          <td className="text-right py-2">₹5,000 additional</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">🕒 Timeline-Based Fees</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-white mb-2">Normal Renewal Period:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• <strong>12 months before expiry:</strong> Standard fees only</li>
                        <li>• <strong>6 months before expiry:</strong> Standard fees only</li>
                        <li>• <strong>1 month before expiry:</strong> Standard fees only</li>
                        <li>• <strong>Up to expiry date:</strong> Standard fees only</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Grace Period (After Expiry):</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• <strong>1-6 months after expiry:</strong> Standard + 50% late fee</li>
                        <li>• <strong>Beyond 6 months:</strong> Restoration required</li>
                        <li>• <strong>Restoration window:</strong> Up to 12 months total</li>
                        <li>• <strong>After 18 months:</strong> Trademark lapses permanently</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Required Documents */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-orange-400" />
                <h2 className="text-3xl font-bold text-white">Required Documents</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-orange-400">📋 Mandatory Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Form TM-R (duly filled and signed)</li>
                    <li>• Original trademark registration certificate</li>
                    <li>• Power of attorney (if filed by agent)</li>
                    <li>• Proof of fee payment</li>
                    <li>• Current proprietor's identity proof</li>
                    <li>• Address proof of proprietor</li>
                    <li>• Updated contact information</li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">✅ Additional Documents (If Applicable)</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Assignment deed (if ownership transferred)</li>
                    <li>• Name change certificate (if name changed)</li>
                    <li>• Evidence of continuous use</li>
                    <li>• Updated business registration certificate</li>
                    <li>• GST registration certificate</li>
                    <li>• Startup recognition certificate (for discounted fees)</li>
                    <li>• Board resolution (for companies)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Important Considerations */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <AlertTriangle className="w-8 h-8 text-red-400" />
                <h2 className="text-3xl font-bold text-white">Important Considerations</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400 flex items-center gap-2">
                    <AlertTriangle className="w-5 h-5" />
                    Critical Deadlines
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                    <div>
                      <h4 className="font-medium text-white mb-2">Renewal Timeline:</h4>
                      <ul className="space-y-1">
                        <li>• <strong>Best practice:</strong> Renew 6-12 months before expiry</li>
                        <li>• <strong>Last moment:</strong> Up to expiry date</li>
                        <li>• <strong>Grace period:</strong> 6 months after expiry (with penalty)</li>
                        <li>• <strong>Final chance:</strong> 12 months for restoration</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Consequences of Missing:</h4>
                      <ul className="space-y-1">
                        <li>• <strong>After expiry:</strong> 50% additional late fees</li>
                        <li>• <strong>After 6 months:</strong> Trademark protection lapses</li>
                        <li>• <strong>After 18 months:</strong> Permanent loss of rights</li>
                        <li>• <strong>Re-filing required:</strong> Fresh application needed</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">💡 Best Practices</h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                    <div>
                      <h4 className="font-medium text-white mb-2">Proactive Management:</h4>
                      <ul className="space-y-1">
                        <li>• Set calendar reminders 12 months before expiry</li>
                        <li>• Maintain updated ownership records</li>
                        <li>• Keep evidence of continuous trademark use</li>
                        <li>• Monitor trademark status regularly</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Professional Assistance:</h4>
                      <ul className="space-y-1">
                        <li>• Engage trademark professionals for timely renewal</li>
                        <li>• Conduct periodic trademark portfolio reviews</li>
                        <li>• Plan renewal budgets in advance</li>
                        <li>• Maintain proper documentation systems</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Timeline and Costs */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Clock className="w-8 h-8 text-yellow-400" />
                <h2 className="text-3xl font-bold text-white">Timeline & Total Costs</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-yellow-400">⏰ Processing Timeline</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Document Preparation:</strong> 1-3 days</li>
                    <li>• <strong>Filing & Payment:</strong> 1 day</li>
                    <li>• <strong>Registry Processing:</strong> 2-4 weeks</li>
                    <li>• <strong>Certificate Issuance:</strong> 2-4 weeks</li>
                    <li>• <strong>Total Timeline:</strong> 4-8 weeks</li>
                    <li>• <strong>Urgent Processing:</strong> Available for additional fee</li>
                  </ul>
                </div>
                
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">💰 Total Investment</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Government Fees:</strong> ₹4,500-₹10,000 per class</li>
                    <li>• <strong>Professional Fees:</strong> ₹5,000-₹15,000</li>
                    <li>• <strong>Documentation:</strong> ₹2,000-₹5,000</li>
                    <li>• <strong>Late Fees (if applicable):</strong> 50% of govt fees</li>
                    <li>• <strong>Total Cost (per class):</strong> ₹11,500-₹30,000</li>
                    <li>• <strong>Multi-class discounts:</strong> Available</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Get Started */}
            <section className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Renew Your Trademark?</h2>
              <p className="text-xl mb-6 opacity-90">
                Don't let your trademark expire! Renew today for continued 10-year protection and maintain your exclusive brand rights.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">10 Years</div>
                  <div className="text-sm opacity-80">Extended Protection</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">4-8 Weeks</div>
                  <div className="text-sm opacity-80">Processing Time</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">₹4.5K+</div>
                  <div className="text-sm opacity-80">Starting Cost</div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Trademark Renewal</h3>
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
                      Trademark Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Trademark name/logo, registration number, expiry date, number of classes..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="file" className="block text-sm font-medium text-gray-300 mb-2">
                      Upload Registration Certificate (Optional)
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
                    className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Renew My Trademark
                  </button>
                </form>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span>TM-R Expert</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 text-blue-400 mr-2" />
                      <span>10-Year Protection</span>
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