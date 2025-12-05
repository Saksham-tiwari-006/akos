'use client';

import { useState } from 'react';
import { Pill, CheckCircle, Upload, Mail, Phone, MapPin, ArrowRight, Shield, Building2 } from 'lucide-react';

export default function DrugLicensePage() {
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
              <Pill className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Drug License</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Get Your <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Drug License</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Legal permit to manufacture, sell, distribute, or import drugs and cosmetics
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">What is a Drug License?</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  A drug license is a legal permit that government authorities issue to a person or company. It allows you to manufacture, sell, distribute, or import drugs and cosmetics.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Governed by the Drugs and Cosmetics Act of 1940, this licensing system is crucial for controlling the quality and distribution of pharmaceuticals, ensuring all medicines available to the public are safe and effective. The license typically has a validity of five years.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Types of Drug Licenses</h2>
                <div className="space-y-4">
                  <div className="p-5 bg-gradient-to-r from-blue-900/30 to-primary/20 border border-blue-500/30 rounded-xl">
                    <h3 className="text-lg font-bold text-white mb-2">Drug Manufacturing License</h3>
                    <p className="text-gray-300 text-sm">Required for producing pharmaceutical products including allopathic, ayurvedic, and homeopathic medicines. Confirms facility follows Good Manufacturing Practices (GMP).</p>
                  </div>
                  <div className="p-5 bg-gradient-to-r from-green-900/30 to-emerald-900/20 border border-green-500/30 rounded-xl">
                    <h3 className="text-lg font-bold text-white mb-2">Drug Sale License</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• <strong>Wholesale License:</strong> For bulk supply to retailers, hospitals, institutions</li>
                      <li>• <strong>Retail License:</strong> For pharmacies selling directly to consumers</li>
                    </ul>
                  </div>
                  <div className="p-5 bg-gradient-to-r from-purple-900/30 to-blue-900/20 border border-purple-500/30 rounded-xl">
                    <h3 className="text-lg font-bold text-white mb-2">Loan License</h3>
                    <p className="text-gray-300 text-sm">For businesses marketing drug brands but manufacturing through another company's approved facility.</p>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-slate-900/30 rounded-xl">
                      <h3 className="font-bold text-white mb-1">Drug Import License</h3>
                      <p className="text-gray-300 text-sm">For importing pharmaceutical products or raw materials</p>
                    </div>
                    <div className="p-4 bg-slate-900/30 rounded-xl">
                      <h3 className="font-bold text-white mb-1">Drug Export License</h3>
                      <p className="text-gray-300 text-sm">For exporting pharmaceutical goods internationally</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Purpose of a Drug License</h2>
                <div className="grid gap-4">
                  {[
                    { icon: Shield, title: 'Protect Public Health', desc: 'Ensures medicines are sold from safe environment with qualified personnel' },
                    { icon: CheckCircle, title: 'Stop Fake Drugs', desc: 'Prevents counterfeit, contaminated, or low-quality medicines from reaching market' },
                    { icon: Building2, title: 'Create Accountability', desc: 'Names person/business legally responsible for medicines being sold' },
                    { icon: CheckCircle, title: 'Standardize Operations', desc: 'All legal pharmacies follow same rules for storage, records, and staffing' }
                  ].map((purpose, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-slate-900/30 rounded-xl hover:bg-slate-900/50 transition-all">
                      <purpose.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-white mb-1">{purpose.title}</h3>
                        <p className="text-gray-300 text-sm">{purpose.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Governing Laws and Authorities</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-900/30 rounded-lg">
                    <h3 className="font-bold text-white mb-2">Legal Framework</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• The Drugs and Cosmetics Act, 1940</li>
                      <li>• The Drugs and Cosmetics Rules, 1945</li>
                      <li>• The Pharmacy Act, 1948</li>
                      <li>• The Medical Device Rules, 2017</li>
                      <li>• New Drugs & Clinical Trials Rules, 2019</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-900/30 rounded-lg">
                    <h3 className="font-bold text-white mb-2">Regulatory Authorities</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• <strong>Central Drugs Standard Control Organisation (CDSCO):</strong> National-level authority for approving new drugs and clinical trials</li>
                      <li>• <strong>State Drug Control Organizations:</strong> Issue common licenses like retail pharmacy and wholesale distributor licenses</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Apply for Drug License</h3>
                
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
