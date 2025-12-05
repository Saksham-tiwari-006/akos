'use client';

import { useState } from 'react';
import { Award, CheckCircle, Upload, Mail, Phone, MapPin, ArrowRight, Building2, TrendingUp, Shield, Users } from 'lucide-react';

export default function UdyamRegistrationPage() {
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
              <Award className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Udyam (MSME) Registration</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Get Your <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Udyam Registration</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Official MSME registration system for small businesses - unlock government benefits and financial support
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">What is Udyam Registration?</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Udyam Registration is the new MSME Registration system launched by the Ministry of Micro, Small, and Medium Enterprises in July 2020. It replaces the earlier Udyog Aadhaar registration process.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  This online system helps small businesses register themselves as Micro, Small, or Medium Enterprises. The Udyam Registration certificate serves as proof of your business's MSME status.
                </p>
                <div className="p-5 bg-blue-900/30 border border-blue-500/30 rounded-xl mt-6">
                  <h3 className="text-lg font-bold text-white mb-2">Udyam vs MSME Registration</h3>
                  <p className="text-gray-300 text-sm">
                    People often get confused, but they're not different things. Udyam Registration is simply the current process for obtaining MSME Registration. Earlier, MSME Registration was done through Udyog Aadhaar. Now, the process is called Udyam Registration.
                  </p>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Benefits of MSME/Udyam Registration</h2>
                <div className="grid gap-4">
                  {[
                    { icon: TrendingUp, title: 'Easier Access to Credit', desc: 'Lower-interest loans from banks and NBFCs to fund growth without heavy interest burdens' },
                    { icon: Award, title: 'Exclusive Government Support', desc: 'Qualify for subsidies and schemes that cut operating costs and boost expansion plans' },
                    { icon: Shield, title: 'Priority Lending', desc: 'Tap into reserved pool of credit that banks must allocate to MSMEs' },
                    { icon: Building2, title: 'Technology Upgrade Grants', desc: 'Financial assistance to adopt modern tools and stay competitive' },
                    { icon: Users, title: 'Preferential Market Access', desc: 'Access to public tenders and contracts earmarked for MSMEs' },
                    { icon: CheckCircle, title: 'Quick License Approvals', desc: 'Faster license and permit approvals with your Udyam certificate' }
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

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Who is Eligible?</h2>
                <p className="text-gray-300 mb-6">Any of the following business structures can register as an MSME:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Partnership Firm',
                    'Private Limited Company',
                    'LLPs (Limited Liability Partnerships)',
                    'Sole Proprietorship',
                    'Trust',
                    'NGO',
                    'Startups',
                    'Hindu Undivided Family (HUF)'
                  ].map((type, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-slate-900/30 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{type}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Types of MSME Registration</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-5 bg-gradient-to-br from-green-900/30 to-emerald-900/20 border border-green-500/30 rounded-xl">
                    <h3 className="text-lg font-bold text-white mb-3">Micro Enterprises</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Investment: Up to ₹1 crore</li>
                      <li>• Turnover: Up to ₹5 crore</li>
                    </ul>
                  </div>
                  <div className="p-5 bg-gradient-to-br from-blue-900/30 to-primary/20 border border-blue-500/30 rounded-xl">
                    <h3 className="text-lg font-bold text-white mb-3">Small Enterprises</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Investment: Up to ₹10 crore</li>
                      <li>• Turnover: Up to ₹50 crore</li>
                    </ul>
                  </div>
                  <div className="p-5 bg-gradient-to-br from-purple-900/30 to-blue-900/20 border border-purple-500/30 rounded-xl">
                    <h3 className="text-lg font-bold text-white mb-3">Medium Enterprises</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Investment: Up to ₹50 crore</li>
                      <li>• Turnover: Up to ₹250 crore</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Documents Required</h2>
                <div className="space-y-3">
                  {[
                    'Aadhaar card of the business owner/partner/director',
                    'PAN card of the business and the owner',
                    'Business registration proof (certificate of incorporation, partnership deed, etc.)',
                    'Business address proof',
                    'Details of investment in plant and machinery',
                    'Turnover details of the business',
                    'Bank account details of the business'
                  ].map((doc, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-slate-900/30 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-300 text-sm">{doc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Apply for Udyam Registration</h3>
                
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
                    <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={4} className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Tell us about your business..." />
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
                    Submit Application
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
                    <a href="tel:+918521139114" className="hover:text-primary transition-colors text-sm">+91 85211 39114</a>
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
