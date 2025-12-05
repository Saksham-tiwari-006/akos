'use client';

import { useState } from 'react';
import { Globe, CheckCircle, Upload, Mail, Phone, MapPin, ArrowRight, Ship, TrendingUp, Shield, FileText } from 'lucide-react';

export default function IECRegistrationPage() {
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
              <Globe className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">IEC (Import Export Code) Registration</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Get Your <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">IEC Registration</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              10-digit code that legally authorizes your business to import & export goods or services globally
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">What is IEC Registration?</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  IEC (Import Export Code) Registration grants businesses and individuals a 10-digit code, which legally authorizes them to import & export goods or services. This code, issued by the Directorate General of Foreign Trade (DGFT), serves as proof that your business complies with foreign trade regulations.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Without proper registration, you may face significant fines, business limitations, difficulties with customs clearance, and potential harm to your company's reputation.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Types of IEC Registration</h2>
                <div className="grid gap-4">
                  {[
                    { title: 'Sole Proprietors', desc: 'IEC issued in individual proprietor name with PAN card and address proof' },
                    { title: 'Partnership Firms', desc: 'Requires partnership deed, firm PAN card, and address proof' },
                    { title: 'Limited Liability Partnerships (LLPs)', desc: 'Need registration certificate, PAN, and address proof' },
                    { title: 'Private Limited Companies', desc: 'Incorporation certificate, company PAN, and registered office address' },
                    { title: 'Public Limited Companies', desc: 'Incorporation certificate, PAN, registered office proof required' },
                    { title: 'Trusts', desc: 'Trust deed, PAN card, and address proof for charitable/religious trusts' },
                    { title: 'Societies', desc: 'Society registration certificate, PAN, and proof of address' },
                    { title: 'Hindu Undivided Families (HUFs)', desc: 'HUF PAN and address proof for family business' }
                  ].map((type, index) => (
                    <div key={index} className="p-4 bg-slate-900/30 rounded-xl hover:bg-slate-900/50 transition-all">
                      <h3 className="font-bold text-white mb-1">{type.title}</h3>
                      <p className="text-gray-300 text-sm">{type.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Advantages of IEC Registration</h2>
                <div className="grid gap-4">
                  {[
                    { icon: Shield, title: 'Legal Authorization', desc: 'Official permission to conduct international trade without legal obstacles' },
                    { icon: TrendingUp, title: 'Banking Benefits', desc: 'Open foreign currency accounts and access specialized trade financing' },
                    { icon: FileText, title: 'Duty Benefits', desc: 'Eligible for duty drawbacks, MEIS, and other export incentives' },
                    { icon: Globe, title: 'Global Credibility', desc: 'Enhanced reputation with international buyers and suppliers' },
                    { icon: Ship, title: 'Customs Efficiency', desc: 'Faster clearance processes at ports and borders' },
                    { icon: CheckCircle, title: 'Market Access', desc: 'Participate in government tenders requiring IEC credentials' }
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
                <h2 className="text-3xl font-bold text-white mb-6">When You Need an IEC?</h2>
                <div className="space-y-3">
                  {[
                    'To Start an Import-Export Business - Legal must-have before initiating international trade',
                    'For Customs Clearance - Mandatory for Bill of Entry (imports) and Shipping Bill (exports)',
                    'To Receive or Send Foreign Payments - Required by banks for international transactions',
                    'To Claim Export Benefits - Necessary for government incentives and subsidies',
                    'To Stay Compliant - Recognition as legitimate trader by DGFT and regulatory bodies'
                  ].map((need, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-slate-900/30 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-300 text-sm">{need}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Documents Required</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'IEC Registration Application Form',
                    'PAN Card (mandatory for all)',
                    'Aadhaar Card, Voter ID, or utility bills',
                    'Business registration documents',
                    'Bank certificate or cancelled cheque',
                    'Passport-sized photograph',
                    'Digital Signature Certificate',
                    'Entity-specific documents (MOA/AOA, Partnership deed, etc.)'
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
                <h3 className="text-2xl font-bold text-white mb-6">Apply for IEC</h3>
                
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
                    <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={4} className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Tell us about your export/import plans..." />
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
