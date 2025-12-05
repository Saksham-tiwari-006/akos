'use client';

import { useState } from 'react';
import { Receipt, CheckCircle, Upload, Mail, Phone, MapPin, ArrowRight, Shield, Award, Building2 } from 'lucide-react';

export default function ProfessionalTaxPage() {
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
              <Receipt className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Professional Tax Registration</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Get Your <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Professional Tax Registration</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              State-level registration for employers and professionals for collecting and paying professional tax
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">What is Professional Tax Registration?</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Professional tax registration is the process where employers and businesses register with their state's Commercial Tax Department for collecting and paying professional tax. It's a state-level levy regulated by the State Professional Tax Acts, allowing governments to tax professions, trades, and employment.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Professional tax collections have increased by 27% in major Indian states over the last two years, with enforcement becoming significantly stricter. This demonstrates the growing importance of timely registration for businesses and professionals.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Types of Professional Tax Registration</h2>
                <div className="space-y-4">
                  <div className="p-5 bg-gradient-to-r from-blue-900/30 to-primary/20 border border-blue-500/30 rounded-xl">
                    <h3 className="text-lg font-bold text-white mb-2">1. Employer Registration (PTRC)</h3>
                    <p className="text-gray-300 text-sm mb-2">Professional Tax Registration Certificate for employers</p>
                    <p className="text-gray-400 text-sm">Required to deduct professional tax from employee salaries and remit to state. Example: Software company with 50 employees in Karnataka.</p>
                  </div>
                  <div className="p-5 bg-gradient-to-r from-green-900/30 to-emerald-900/20 border border-green-500/30 rounded-xl">
                    <h3 className="text-lg font-bold text-white mb-2">2. Professional/Self-employed (PTEC)</h3>
                    <p className="text-gray-300 text-sm mb-2">Professional Tax Enrollment Certificate</p>
                    <p className="text-gray-400 text-sm">Mandatory for self-employed professionals, consultants, and individuals engaged in trade/profession. Example: Chartered accountant in Maharashtra.</p>
                  </div>
                  <div className="p-5 bg-gradient-to-r from-purple-900/30 to-blue-900/20 border border-purple-500/30 rounded-xl">
                    <h3 className="text-lg font-bold text-white mb-2">3. Business Entity Registration</h3>
                    <p className="text-gray-300 text-sm">Partnerships, LLPs, and other business entities must register based on structure and state laws. Includes multiple establishment, inter-state, digital platforms, special category, and composite registrations.</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Rules and Regulations</h2>
                <div className="space-y-3">
                  {[
                    'Article 276 of Constitution of India - Empowers states to levy taxes on professions, trades, with maximum of ₹2,500 per person annually',
                    'State-specific Professional Tax Acts - Each state has its own legislation (e.g., Maharashtra, Karnataka Acts)',
                    'Professional Tax Rules - Procedural regulations detailing registration, payment schedules, returns filing, penalties',
                    'State Finance Acts - Annual modifications to professional tax slabs, exemptions, and procedural requirements',
                    'Municipal Corporation Acts - In some states, municipal bodies authorized to collect professional tax'
                  ].map((rule, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-slate-900/30 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-300 text-sm">{rule}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Benefits of Professional Tax Registration</h2>
                <div className="grid gap-4">
                  {[
                    { icon: Shield, title: 'Legal Compliance', desc: 'Ensures adherence to state-specific tax laws and regulations' },
                    { icon: Building2, title: 'Business Credibility', desc: 'Enhances reputation with official tax registration status' },
                    { icon: CheckCircle, title: 'Penalty Avoidance', desc: 'Prevents costly fines and interest charges for non-compliance' },
                    { icon: Award, title: 'Tender Eligibility', desc: 'Essential for qualifying to bid on government contracts' },
                    { icon: Building2, title: 'Loan Facilitation', desc: 'Supports business loan applications by demonstrating compliance' },
                    { icon: Shield, title: 'Audit Protection', desc: 'Creates compliance records that simplify tax audits' }
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
                <h2 className="text-3xl font-bold text-white mb-6">Key Characteristics</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { title: 'State-Specific Nature', desc: 'Regulations vary across states; some states don\'t impose PT' },
                    { title: 'Slab-Based Structure', desc: 'Progressive rates - higher income earners face higher tax rates' },
                    { title: 'Dual Registration System', desc: 'PTRC for employers, PTEC for self-employed professionals' },
                    { title: 'No Annual Renewal', desc: 'One-time process; regular returns filing required' },
                    { title: 'Employer Responsibility', desc: 'Legal obligation to deduct and deposit PT for employees' },
                    { title: 'Location-Based Compliance', desc: 'Multiple branches may require separate registrations' },
                    { title: 'Calendar-Specific Payments', desc: 'Monthly, quarterly, or half-yearly based on state' },
                    { title: 'Limited Transferability', desc: 'Generally not portable between entities or states' }
                  ].map((char, index) => (
                    <div key={index} className="p-4 bg-slate-900/30 rounded-xl">
                      <h3 className="font-bold text-white mb-1">{char.title}</h3>
                      <p className="text-gray-300 text-sm">{char.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Apply for PT Registration</h3>
                
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
