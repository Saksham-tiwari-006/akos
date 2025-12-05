'use client';

import { useState } from 'react';
import { Leaf, CheckCircle, Upload, Mail, Phone, MapPin, ArrowRight, Award, Building2, TrendingUp } from 'lucide-react';

export default function ISOCertificationPage() {
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
              <Leaf className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">ISO 14001 Certification</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Get Your <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">ISO 14001 Certification</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              International standard for Environmental Management Systems - minimize environmental impact and promote sustainability
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">What is ISO 14001 Certification?</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  ISO 14001 Certification is an internationally recognized standard for Environmental Management Systems (EMS) developed by the International Organization for Standardisation (ISO). It helps organizations identify, manage, monitor, and systematically control their environmental issues.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Whether it's reducing waste, improving resource efficiency, or meeting legal compliance, ISO certification provides a framework to minimize negative environmental impact and promote sustainability across operations.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">ISO 14001:2015 – Latest Version</h2>
                <div className="grid gap-4">
                  {[
                    { title: 'Risk-Based Thinking', desc: 'Introduces risk and opportunity-based approach for proactive environmental issue management' },
                    { title: 'Leadership Involvement', desc: 'Emphasises stronger involvement of top management in environmental planning' },
                    { title: 'Lifecycle Perspective', desc: 'Encourages consideration of entire product/service lifecycle' },
                    { title: 'Legal Compliance', desc: 'Requires identification and compliance with all environmental laws' },
                    { title: 'Integration with Other Standards', desc: 'Uses High-Level Structure for easy integration with ISO 9001' },
                    { title: 'Continual Improvement', desc: 'Stresses ongoing improvement, not just one-time compliance' }
                  ].map((feature, index) => (
                    <div key={index} className="p-4 bg-slate-900/30 rounded-xl hover:bg-slate-900/50 transition-all">
                      <h3 className="font-bold text-white mb-1">{feature.title}</h3>
                      <p className="text-gray-300 text-sm">{feature.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Benefits of ISO 14001 Certification</h2>
                <div className="grid gap-4">
                  {[
                    { icon: Leaf, title: 'Improves Environmental Performance', desc: 'Structured approach to reduce emissions, manage waste, and use resources efficiently' },
                    { icon: CheckCircle, title: 'Ensures Legal Compliance', desc: 'Stay updated with environmental regulations and avoid penalties' },
                    { icon: Award, title: 'Builds Business Reputation', desc: 'Signals environmental responsibility to clients and stakeholders' },
                    { icon: Building2, title: 'Increases Business Opportunities', desc: 'Required for government tenders and international contracts' },
                    { icon: TrendingUp, title: 'Reduces Operational Costs', desc: 'Energy savings and waste reduction lead to lower costs' },
                    { icon: CheckCircle, title: 'Enhances Employee Involvement', desc: 'Promotes awareness and participation in sustainable practices' }
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
                <h2 className="text-3xl font-bold text-white mb-6">ISO 14001 Across Different Sectors</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    { sector: 'Manufacturing', use: 'Manage emissions, waste, and resource consumption' },
                    { sector: 'Service Industries', use: 'Reduce energy use, manage e-waste, promote sustainability' },
                    { sector: 'Construction', use: 'Control waste, manage water runoff, sustainable materials' },
                    { sector: 'Healthcare', use: 'Manage medical waste, reduce energy/water consumption' },
                    { sector: 'Education', use: 'Minimize resource use, promote recycling' },
                    { sector: 'Transportation', use: 'Lower fuel consumption, reduce emissions' },
                    { sector: 'Hospitality', use: 'Manage energy/water, cut food and plastic waste' },
                    { sector: 'Retail', use: 'Ensure eco-friendly supply chains' }
                  ].map((item, index) => (
                    <div key={index} className="p-4 bg-slate-900/30 rounded-xl">
                      <h3 className="font-bold text-white mb-1">{item.sector}</h3>
                      <p className="text-gray-300 text-sm">{item.use}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Documents Required</h2>
                <div className="space-y-3">
                  {[
                    'Environmental Policy statement',
                    'Environmental Aspects and Impacts list',
                    'Legal and regulatory requirements documentation',
                    'Objectives, Targets, and Programs',
                    'Operational Control Procedures',
                    'Emergency Preparedness and Response Plan',
                    'Monitoring and Measurement records',
                    'Internal Audit Reports',
                    'Management Review Minutes',
                    'Training Records',
                    'Communication Records',
                    'Corrective and Preventive Actions'
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
                <h3 className="text-2xl font-bold text-white mb-6">Apply for ISO 14001</h3>
                
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
                    <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={4} className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Tell us about your organization..." />
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
