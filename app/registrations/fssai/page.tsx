'use client';

import { useState } from 'react';
import { UtensilsCrossed, CheckCircle, Upload, Mail, Phone, MapPin, ArrowRight, Shield, Award, Building2 } from 'lucide-react';

export default function FSSAIRegistrationPage() {
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
              <UtensilsCrossed className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">FSSAI Registration (Food License)</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Get Your <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">FSSAI Food License</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Legal food safety permit from Food Safety and Standards Authority of India
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">What is FSSAI Registration?</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  FSSAI Registration (Food License) is a legal permit from the Food Safety and Standards Authority of India. It shows your food business meets the required safety and quality standards.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  It's mandatory for anyone who makes, processes, packs, stores, transports, distributes, or sells food in India. FSSAI is the government authority for food safety, granting legal approval to run a food business.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Three Types of FSSAI Registration</h2>
                <div className="grid gap-6">
                  <div className="p-5 bg-gradient-to-r from-green-900/30 to-emerald-900/20 border border-green-500/30 rounded-xl">
                    <h3 className="text-lg font-bold text-white mb-2">1. Basic FSSAI Registration</h3>
                    <p className="text-gray-300 text-sm mb-2">For small food businesses with annual turnover below ₹12 lakhs</p>
                    <p className="text-gray-400 text-sm">14-digit number starting with '1' • Example: Home kitchen or small food stall</p>
                  </div>
                  <div className="p-5 bg-gradient-to-r from-blue-900/30 to-primary/20 border border-blue-500/30 rounded-xl">
                    <h3 className="text-lg font-bold text-white mb-2">2. State FSSAI License</h3>
                    <p className="text-gray-300 text-sm mb-2">For businesses with turnover between ₹12 lakhs and ₹20 crores</p>
                    <p className="text-gray-400 text-sm">Number begins with '2' • Example: Restaurant or food shop</p>
                  </div>
                  <div className="p-5 bg-gradient-to-r from-purple-900/30 to-blue-900/20 border border-purple-500/30 rounded-xl">
                    <h3 className="text-lg font-bold text-white mb-2">3. Central FSSAI License</h3>
                    <p className="text-gray-300 text-sm mb-2">For big businesses earning over ₹20 crores or multi-state operations</p>
                    <p className="text-gray-400 text-sm">Number starts with '1' • Example: Food operations across multiple states</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Benefits of FSSAI Registration</h2>
                <div className="grid gap-4">
                  {[
                    { icon: Shield, title: 'Legality and Compliance', desc: 'Run your business according to food safety laws, avoiding fines and shutdowns' },
                    { icon: Award, title: 'Enhanced Customer Trust', desc: 'Customers feel confident knowing your food is government-approved' },
                    { icon: CheckCircle, title: 'Quality Assurance', desc: 'Follow hygiene and safety guidelines to ensure product quality' },
                    { icon: Building2, title: 'Improved Market Credibility', desc: 'FSSAI registration adds credibility and makes your brand stand out' },
                    { icon: Shield, title: 'Legal Liability Protection', desc: 'Proves you took right legal steps to protect public health' },
                    { icon: CheckCircle, title: 'Streamlined Operations', desc: 'Develop better food handling, storage, and safety systems' }
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
                <h2 className="text-3xl font-bold text-white mb-6">Who Should Obtain FSSAI Registration?</h2>
                <p className="text-gray-300 mb-4">If you make, handle, move, or sell food in India, you must obtain an FSSAI Registration or License:</p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Manufacturers & Processors',
                    'Restaurants & Cafes',
                    'Hotels & Cloud Kitchens',
                    'Wholesalers & Distributors',
                    'Supermarkets & Kirana Stores',
                    'Online Food Sellers',
                    'Warehouses & Cold Storage',
                    'Food Transporters',
                    'Importers & Exporters',
                    'Caterers & Tiffin Services',
                    'Bakeries & Food Trucks',
                    'Institutional Suppliers'
                  ].map((type, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-slate-900/30 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{type}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Documents Required for FSSAI Registration</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-900/30 rounded-lg">
                    <h3 className="font-bold text-white mb-2">Common Documents (All Types)</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Completed application form (Form A/B/C depending on license type)</li>
                      <li>• Photo ID proof of the applicant/business owner</li>
                      <li>• Business address proof (electricity bill, rent agreement)</li>
                      <li>• Business registration documents</li>
                      <li>• Passport-sized photographs</li>
                      <li>• List of food categories to be manufactured/traded</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-900/30 rounded-lg">
                    <h3 className="font-bold text-white mb-2">For State License (Additional)</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Form B with business details</li>
                      <li>• Blueprint/layout plan of processing unit</li>
                      <li>• Water analysis report (if applicable)</li>
                      <li>• List of machinery and equipment</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-900/30 rounded-lg">
                    <h3 className="font-bold text-white mb-2">For Central License (Additional)</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Form C with comprehensive information</li>
                      <li>• IEC Certificate (for importers)</li>
                      <li>• Food safety management certification (HACCP/ISO 22000)</li>
                      <li>• Recall plan and traceability system documentation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Apply for FSSAI License</h3>
                
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
                    <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={4} className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Tell us about your food business..." />
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
