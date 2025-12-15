'use client';

import { useState } from 'react';
import { Heart, CheckCircle, FileText, Upload, Mail, Phone, MapPin, ArrowRight, Shield, Users, Award, TrendingUp, Building2, Globe } from 'lucide-react';

export default function Section8Page() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    document: null as File | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you soon.');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, document: e.target.files[0] });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-6">
              <Heart className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Section 8 Company (NGO) Registration</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Register Your <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Section 8 Company</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Establish a non-profit organization for charitable, educational, or social welfare activities
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">What is a Section 8 Company?</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  A Section 8 Company is a Non-Profit Organization (NPO) registered under the Companies Act, 2013. Its primary objective is to promote charitable activities such as commerce, art, science, sports, education, research, social welfare, religion, charity, or environmental protection.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Unlike typical companies, its profits cannot be distributed as dividends to members and must be reinvested into its objectives. While they can have share capital, it doesn't function in the traditional profit-making sense.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  A minimum of two individuals with a non-profit goal can obtain a Section 8 company registration. This creates a trusted legal structure, allowing the organization to manage its funds, sign contracts, and handle all legal matters in its name.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Features of a Section 8 Company</h2>
                <div className="grid gap-4">
                  {[
                    { icon: Heart, title: 'Focus on a Cause', desc: 'Created solely to promote non-profit goals like education, arts, social welfare, or environmental work' },
                    { icon: TrendingUp, title: 'Profits are Reinvested', desc: 'Any money earned must be put back into organization\'s mission, no dividend payouts' },
                    { icon: Building2, title: 'Distinct Legal Identity', desc: 'Legally separate from members, can own property and sign contracts in its name' },
                    { icon: Shield, title: 'Limited Liability for Members', desc: 'Personal assets protected, responsibility limited to contribution amount' },
                    { icon: Award, title: 'Official Government License', desc: 'Operates under MCA license, adding credibility with specific compliance rules' },
                    { icon: FileText, title: 'No "Ltd." in Name', desc: 'Exempt from adding "Limited" to name, highlighting non-profit nature' },
                    { icon: CheckCircle, title: 'Tax Exemptions', desc: 'Eligible for tax benefits under sections 12AB and 80G of Income Tax Act' }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-slate-900/30 rounded-xl hover:bg-slate-900/50 transition-all">
                      <feature.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-white mb-1">{feature.title}</h3>
                        <p className="text-gray-300 text-sm">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Purpose of Incorporating a Section 8 Company</h2>
                <div className="space-y-4">
                  {[
                    { title: 'Build a Formal Organization', desc: 'Provides official legal structure to carry out non-profit mission, transforming informal idea into recognized entity' },
                    { title: 'Gain Public Trust', desc: 'Government regulation makes organization more transparent and trustworthy to donors and partners' },
                    { title: 'Improve Access to Funding', desc: 'Often required to receive CSR funds, government grants, and large-scale donations' },
                    { title: 'Ensure Long-Term Existence', desc: 'Perpetual entity continues even if founding members change, mission outlives founders' },
                    { title: 'Legally Manage Funds', desc: 'Creates legal way to open dedicated bank account, own property, manage finances separately' }
                  ].map((item, index) => (
                    <div key={index} className="p-4 bg-slate-900/30 rounded-xl border-l-4 border-primary">
                      <h3 className="font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Benefits & Disadvantages</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-green-400 mb-4">Benefits</h3>
                    <ul className="space-y-3">
                      {[
                        'Legal recognition and credibility',
                        'Tax exemptions (12AB and 80G)',
                        'No minimum capital requirement',
                        'Stamp duty exemption in many states',
                        'Separate legal identity',
                        'Limited liability protection',
                        'Perpetual succession',
                        'Enhanced fundraising capabilities'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-red-400 mb-4">Disadvantages</h3>
                    <ul className="space-y-3">
                      {[
                        'Strict compliance requirements',
                        'No profit distribution to members',
                        'Complex regulations vs trust/society',
                        'Revocable government license',
                        'No personal member benefits',
                        'Substantial professional fees',
                        'Regular filings and meetings required'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-300 text-sm">
                          <span className="text-red-400 mt-1">⚠</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Eligibility Criteria</h2>
                <div className="grid gap-4">
                  <div className="p-5 bg-gradient-to-r from-blue-900/30 to-primary/20 border border-blue-500/30 rounded-xl">
                    <h3 className="text-lg font-bold text-white mb-2">Core Requirements</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Minimum 2 directors (3 for public limited structure)</li>
                      <li>• At least one director must be Indian resident</li>
                      <li>• Minimum 2 members/subscribers required</li>
                      <li>• Unique company name reflecting social objectives</li>
                      <li>• Valid physical address in India</li>
                    </ul>
                  </div>
                  <div className="p-5 bg-gradient-to-r from-purple-900/30 to-blue-900/20 border border-purple-500/30 rounded-xl">
                    <h3 className="text-lg font-bold text-white mb-2">Mandatory Prerequisites</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Basic KYC documents (PAN, Aadhaar)</li>
                      <li>• Digital Signature Certificate (DSC) for all directors</li>
                      <li>• Director Identification Number (DIN) for all directors</li>
                      <li>• Clear non-profit objectives in MOA and AOA</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Start Your NGO</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Tell us about your social mission..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Upload Document (Optional)</label>
                    <div className="relative">
                      <input
                        type="file"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                        className="hidden"
                        id="file-upload"
                      />
                      <label
                        htmlFor="file-upload"
                        className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-gray-400 cursor-pointer hover:border-primary transition-colors"
                      >
                        <Upload className="w-5 h-5" />
                        <span className="text-sm">{formData.document ? formData.document.name : 'Choose file'}</span>
                      </label>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Supported: PDF, DOC, DOCX, JPG, PNG (Max 10MB)</p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-blue-500 text-white font-bold py-4 rounded-lg hover:from-blue-500 hover:to-primary transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Submit Inquiry
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>

                <div className="mt-8 pt-8 border-t border-slate-700/50 space-y-4">
                  <h4 className="font-bold text-white mb-4">Contact Information</h4>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                    <a href="mailto:akos170620250626@gmail.com" className="hover:text-primary transition-colors text-sm">akos170620250626@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <a href="tel:+919211901927" className="hover:text-primary transition-colors text-sm">+91 92119 01927</a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Shakarpur, New Delhi</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
