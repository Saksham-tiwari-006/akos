'use client';

import { useState } from 'react';
import { Landmark, CheckCircle, FileText, Upload, Mail, Phone, MapPin, ArrowRight, Shield, Users, TrendingUp, Award } from 'lucide-react';

export default function NidhiCompanyPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    document: null as File | null
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
              <Landmark className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Nidhi Company Registration</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Register Your <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Nidhi Company</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Establish a non-banking financial company for mutual benefit and savings among members
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">What is a Nidhi Company?</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  A Nidhi Company is a type of Non-Banking Financial Company (NBFC) registered under the Companies Act, 2013. It functions as a mutual benefit society where members can save and borrow money among themselves.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The primary objective of a Nidhi Company is to cultivate the habit of thrift and savings among its members and to receive deposits from and lend money to its members only, for their mutual benefit.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Nidhi Companies operate on the principle of mutual benefit and cannot engage in activities like chit fund, hire purchase, insurance, or acquisition of securities issued by any corporate body.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Key Features</h2>
                <div className="grid gap-4">
                  {[
                    { icon: Users, title: 'Member-Centric', desc: 'Exclusively for members - can only accept deposits from and lend to its members' },
                    { icon: Shield, title: 'Limited Liability', desc: 'Members have limited liability protection like a company structure' },
                    { icon: Landmark, title: 'Non-Banking Finance', desc: 'NBFC that promotes savings and thrift among members' },
                    { icon: Award, title: 'Mutual Benefit', desc: 'Operates for mutual benefit of members, not for profit maximization' },
                    { icon: TrendingUp, title: 'Regulated Entity', desc: 'Governed by Companies Act 2013 and Nidhi Rules 2014' },
                    { icon: CheckCircle, title: 'Simple Operations', desc: 'Cannot engage in chit funds, hire purchase, insurance activities' }
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
                <h2 className="text-3xl font-bold text-white mb-6">Minimum Requirements</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-5 bg-gradient-to-r from-blue-900/30 to-primary/20 border border-blue-500/30 rounded-xl">
                    <h3 className="text-lg font-bold text-white mb-3">Basic Structure</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Minimum 7 shareholders required</li>
                      <li>• Minimum 3 directors needed</li>
                      <li>• Must have "Nidhi Limited" in name</li>
                      <li>• Registered office in India</li>
                    </ul>
                  </div>
                  <div className="p-5 bg-gradient-to-r from-green-900/30 to-emerald-900/20 border border-green-500/30 rounded-xl">
                    <h3 className="text-lg font-bold text-white mb-3">Capital Requirements</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Minimum paid-up capital: ₹5 lakh</li>
                      <li>• Must achieve within 1 year of incorporation</li>
                      <li>• Net owned funds requirement</li>
                      <li>• Capital adequacy norms apply</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Benefits & Restrictions</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-green-400 mb-4">Benefits</h3>
                    <ul className="space-y-3">
                      {[
                        'Promotes savings among members',
                        'Easy access to credit for members',
                        'Limited liability protection',
                        'Regulated and secure structure',
                        'Democratic member control',
                        'Lower interest rates for members',
                        'Tax benefits available'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-yellow-400 mb-4">Restrictions</h3>
                    <ul className="space-y-3">
                      {[
                        'Cannot accept deposits from non-members',
                        'Cannot lend to non-members',
                        'No chit fund activities allowed',
                        'No hire purchase business',
                        'Cannot engage in insurance',
                        'Cannot acquire securities',
                        'Strict compliance requirements'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-300 text-sm">
                          <span className="text-yellow-400 mt-1">⚠</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
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
                    <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors" placeholder="Enter your name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number *</label>
                    <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors" placeholder="+91 XXXXX XXXXX" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={4} className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Tell us about your requirements..." />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Upload Document (Optional)</label>
                    <div className="relative">
                      <input type="file" onChange={handleFileChange} accept=".pdf,.doc,.docx,.jpg,.jpeg,.png" className="hidden" id="file-upload" />
                      <label htmlFor="file-upload" className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-gray-400 cursor-pointer hover:border-primary transition-colors">
                        <Upload className="w-5 h-5" />
                        <span className="text-sm">{formData.document ? formData.document.name : 'Choose file'}</span>
                      </label>
                    </div>
                    <p className="text-xs text-gray-500 mt-2">Supported: PDF, DOC, DOCX, JPG, PNG (Max 10MB)</p>
                  </div>
                  <button type="submit" className="w-full bg-gradient-to-r from-primary to-blue-500 text-white font-bold py-4 rounded-lg hover:from-blue-500 hover:to-primary transition-all transform hover:scale-105 flex items-center justify-center gap-2">
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
