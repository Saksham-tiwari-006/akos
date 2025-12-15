'use client';

import { useState } from 'react';
import { Building2, CheckCircle, FileText, Upload, Mail, Phone, MapPin, ArrowRight, Users, Shield, TrendingUp, Clock, Award, Scale } from 'lucide-react';
import Link from 'next/link';

export default function OPCRegistrationPage() {
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
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-6">
              <Building2 className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">One Person Company Registration</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Start Your <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">One Person Company</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Simple, professional business structure combining sole proprietorship benefits with limited liability protection
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Content Column */}
            <div className="lg:col-span-2 space-y-8">
              {/* What is OPC */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">What is One Person Company Registration?</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  A One Person Company (OPC) is a business structure introduced under the Companies Act, 2013, that allows a single Indian citizen and resident to form a private limited company. It gives the sole owner full control while offering limited liability, separate legal status, and perpetual succession. OPCs must appoint a nominee who will take over if the owner is incapacitated or dies.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Combining the simplicity of a sole proprietorship with limited liability, an OPC has a single owner who acts as both shareholder and director, with a nominee appointed for succession. Initiated by a promoter, it is a separate legal entity that can own assets and enter into contracts.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  With minimal compliance, no capital requirement, and professional credibility, an OPC supports growth and can convert into a private or public company if financial thresholds are exceeded.
                </p>
              </div>

              {/* Types of OPC */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Types of One Person Company in India</h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-primary pl-6">
                    <h3 className="text-xl font-bold text-white mb-2">OPC Limited by Shares</h3>
                    <p className="text-gray-300">It falls under Section 2(22) & 2(68). Your liability stays limited to your unpaid share value. This gives you solid protection from business debts. This is the most popular option amongst entrepreneurs for OPC registration.</p>
                  </div>
                  <div className="border-l-4 border-green-400 pl-6">
                    <h3 className="text-xl font-bold text-white mb-2">OPC Limited by Guarantee with Share Capital</h3>
                    <p className="text-gray-300">This type combines shares with a guarantee clause. Your liability includes both unpaid shares and the guaranteed amount. It offers a flexible capital structure.</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-6">
                    <h3 className="text-xl font-bold text-white mb-2">OPC Limited by Guarantee without Share Capital</h3>
                    <p className="text-gray-300">This type, under Section 2(21), creates an entity without shares. Your liability is based only on your contribution guarantee if the company shuts down.</p>
                  </div>
                  <div className="border-l-4 border-orange-400 pl-6">
                    <h3 className="text-xl font-bold text-white mb-2">Unlimited OPC with Share Capital</h3>
                    <p className="text-gray-300">This type includes share capital but offers no liability protection. You remain personally responsible for all company debts. High-risk option, but with flexible capital handling.</p>
                  </div>
                  <div className="border-l-4 border-red-400 pl-6">
                    <h3 className="text-xl font-bold text-white mb-2">Unlimited OPC without Share Capital</h3>
                    <p className="text-gray-300">This has neither share capital nor liability protection. You face unlimited personal responsibility. Very few choose this due to the high personal risk.</p>
                  </div>
                </div>
              </div>

              {/* Characteristics */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Characteristics of a One Person Company in India</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { icon: Users, title: 'Single Member Ownership', desc: 'Formed and owned by a single individual who is both shareholder and director' },
                    { icon: Building2, title: 'Separate Legal Entity', desc: 'Distinct legal entity, separate from its owner' },
                    { icon: Shield, title: 'Limited Liability', desc: 'Owner\'s liability limited to shareholding extent' },
                    { icon: TrendingUp, title: 'Perpetual Succession', desc: 'Company continues even if owner dies or becomes incapacitated' },
                    { icon: Users, title: 'Nominee Requirement', desc: 'Must appoint nominee at registration time' },
                    { icon: Scale, title: 'Restricted Share Transfer', desc: 'Shares cannot be freely transferred to outsiders' }
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4 p-4 bg-slate-900/50 rounded-xl border border-slate-700/30 hover:border-primary/30 transition-all">
                      <item.icon className="w-8 h-8 text-primary flex-shrink-0" />
                      <div>
                        <h3 className="font-bold text-white mb-1">{item.title}</h3>
                        <p className="text-sm text-gray-300">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Benefits of One Person Company Registration</h2>
                <div className="space-y-4">
                  {[
                    { icon: Shield, title: 'Complete Control with Legal Protection', desc: 'Full control over decisions while enjoying limited liability protection' },
                    { icon: FileText, title: 'Simplified Compliance', desc: 'Fewer regulatory requirements and annual compliance obligations' },
                    { icon: Clock, title: 'Continuity and Stability', desc: 'Perpetual succession ensures uninterrupted existence' },
                    { icon: TrendingUp, title: 'Easier Access to Funding', desc: 'Raise capital through loans or investments' },
                    { icon: Award, title: 'Credibility and Trust', desc: 'Enhanced professional credibility with clients and vendors' },
                    { icon: CheckCircle, title: 'Tax Advantages', desc: 'Benefit from corporate tax rates and government incentives' }
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-slate-900/30 rounded-xl hover:bg-slate-900/50 transition-all">
                      <benefit.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-white mb-1">{benefit.title}</h3>
                        <p className="text-gray-300 text-sm">{benefit.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Get Started Today</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Your Name *
                    </label>
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
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number *
                    </label>
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
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Upload Document (Optional)
                    </label>
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
                        <span className="text-sm">
                          {formData.document ? formData.document.name : 'Choose file'}
                        </span>
                      </label>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">
                      Supported: PDF, DOC, DOCX, JPG, PNG (Max 10MB)
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-blue-500 text-white font-bold py-4 rounded-lg hover:from-blue-500 hover:to-primary transition-all transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    Submit Inquiry
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>

                {/* Contact Info */}
                <div className="mt-8 pt-8 border-t border-slate-700/50 space-y-4">
                  <h4 className="font-bold text-white mb-4">Contact Information</h4>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                    <a href="mailto:akos170620250626@gmail.com" className="hover:text-primary transition-colors text-sm">
                      akos170620250626@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                    <a href="tel:+919211901927" className="hover:text-primary transition-colors text-sm">
                      +91 92119 01927
                    </a>
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
