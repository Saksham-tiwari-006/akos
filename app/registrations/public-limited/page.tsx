'use client';

import { useState } from 'react';
import { Building, CheckCircle, FileText, Upload, Mail, Phone, MapPin, ArrowRight, Shield, TrendingUp, Users, Globe, Award } from 'lucide-react';

export default function PublicLimitedPage() {
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
              <Building className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Public Limited Company Registration</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Register Your <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Public Limited Company</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Raise capital from the public and expand your business with a PLC structure
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">What is a Public Limited Company?</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  A Public Limited Company (PLC) is a business structure that allows its shares to be bought and sold by the general public, usually through a stock exchange. This makes it easier for the company to raise large amounts of capital from a wide range of investors.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  A PLC is typically governed by a board of directors, with a CEO or managing director handling day-to-day operations. Their primary responsibility is to act in the best interest of shareholders and maximize shareholder value.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Features of a Public Limited Company</h2>
                <div className="grid gap-4">
                  {[
                    { icon: Shield, title: 'Limited Liability', desc: 'Shareholders\' personal assets are protected, risk capped at investment amount' },
                    { icon: TrendingUp, title: 'Superior Access to Capital', desc: 'Raise substantial funds from public by issuing shares and debentures on stock market' },
                    { icon: Building, title: 'Separate Legal Entity', desc: 'Legally distinct from shareholders, can own property and enter contracts' },
                    { icon: Globe, title: 'Transferability of Shares', desc: 'Shares freely transferable and traded on stock exchanges for liquidity' },
                    { icon: FileText, title: 'Public Disclosure', desc: 'Required to publish annual statements promoting transparency and investor confidence' },
                    { icon: Users, title: 'Minimum Membership', desc: 'Must have at least 7 shareholders with no upper limit' },
                    { icon: Award, title: 'Board of Directors', desc: 'Managed by board responsible for strategic decisions and governance' },
                    { icon: CheckCircle, title: 'Regulatory Compliance', desc: 'Subject to stricter legal requirements ensuring accountability' }
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
                <h2 className="text-3xl font-bold text-white mb-6">Types of Public Limited Companies</h2>
                <div className="space-y-4">
                  <div className="p-6 bg-gradient-to-r from-blue-900/30 to-primary/20 border border-blue-500/30 rounded-xl">
                    <h3 className="text-xl font-bold text-white mb-3">Listed Public Companies</h3>
                    <p className="text-gray-300 mb-3">
                      Shares listed on recognized stock exchanges (BSE/NSE), allowing public to easily buy and sell shares through the exchange.
                    </p>
                    <p className="text-primary text-sm">Examples: Major corporations actively traded on stock markets</p>
                  </div>
                  <div className="p-6 bg-gradient-to-r from-purple-900/30 to-blue-900/20 border border-purple-500/30 rounded-xl">
                    <h3 className="text-xl font-bold text-white mb-3">Unlisted Public Companies</h3>
                    <p className="text-gray-300 mb-3">
                      Shares not traded on stock exchange. Can offer shares to public but choose not to list on exchange.
                    </p>
                    <p className="text-purple-400 text-sm">May raise capital through private placements while maintaining closer ownership control</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Minimum Requirements</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-5 bg-slate-900/50 border border-slate-700/50 rounded-xl">
                    <Users className="w-10 h-10 text-primary mb-3" />
                    <h3 className="text-lg font-bold text-white mb-2">Shareholders</h3>
                    <p className="text-gray-300 text-sm">Minimum 7 shareholders required with no maximum limit</p>
                  </div>
                  <div className="p-5 bg-slate-900/50 border border-slate-700/50 rounded-xl">
                    <Building className="w-10 h-10 text-green-400 mb-3" />
                    <h3 className="text-lg font-bold text-white mb-2">Directors</h3>
                    <p className="text-gray-300 text-sm">Minimum 3 directors to oversee company operations</p>
                  </div>
                  <div className="p-5 bg-slate-900/50 border border-slate-700/50 rounded-xl">
                    <TrendingUp className="w-10 h-10 text-yellow-400 mb-3" />
                    <h3 className="text-lg font-bold text-white mb-2">Paid-up Capital</h3>
                    <p className="text-gray-300 text-sm">No minimum capital requirement as per Companies Act 2015</p>
                  </div>
                  <div className="p-5 bg-slate-900/50 border border-slate-700/50 rounded-xl">
                    <Globe className="w-10 h-10 text-blue-400 mb-3" />
                    <h3 className="text-lg font-bold text-white mb-2">Company Name</h3>
                    <p className="text-gray-300 text-sm">Must end with "Limited" or "Ltd." suffix</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Get Started</h3>
                
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
                      placeholder="Tell us about your requirements..."
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
