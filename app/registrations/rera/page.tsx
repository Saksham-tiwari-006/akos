'use client';

import { useState } from 'react';
import { Home, CheckCircle, Upload, Mail, Phone, MapPin, ArrowRight, Shield, Award, Building2, Users } from 'lucide-react';

export default function RERARegistrationPage() {
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
              <Home className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">RERA Registration</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Get Your <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">RERA Registration</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real Estate Regulatory Authority registration for transparency, accountability, and protection of homebuyers
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">What is RERA Registration?</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  RERA stands for Real Estate Regulatory Authority, established under the Real Estate (Regulation and Development) Act, 2016. This law was designed to regulate the real estate market, protect homebuyers, and make real estate more transparent and honest.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The real estate sector contributes approximately 7.3% to India's GDP and is expected to grow to $5.8 trillion by 2047. RERA was created after years of problems like project delays, hidden charges, and unclear commitments from builders.
                </p>
                <div className="p-5 bg-blue-900/30 border border-blue-500/30 rounded-xl mt-4">
                  <h3 className="text-lg font-bold text-white mb-2">Fast Implementation</h3>
                  <p className="text-gray-300 text-sm">Rajya Sabha passed the Bill on March 10, 2016, Lok Sabha on March 15, 2016, and President approved on March 25, 2016 - showing government's serious effort to protect homebuyers.</p>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Main Goals of RERA</h2>
                <div className="grid gap-4">
                  {[
                    { icon: Shield, title: 'Transparency', desc: 'Builders must share project details like carpet area, deadlines, and costs' },
                    { icon: Users, title: 'Consumer Protection', desc: 'Safeguards buyers from fraud and false promises' },
                    { icon: CheckCircle, title: 'Fast Dispute Solving', desc: 'Sets up quick process to handle complaints' },
                    { icon: Award, title: 'Accountability', desc: 'Builders and agents legally responsible for their promises' },
                    { icon: Building2, title: 'Standard Rules', desc: 'Defines important terms like "carpet area" to avoid confusion' },
                    { icon: Shield, title: 'Financial Discipline', desc: '70% of buyers\' money in separate bank account for that project only' }
                  ].map((goal, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-slate-900/30 rounded-xl hover:bg-slate-900/50 transition-all">
                      <goal.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-white mb-1">{goal.title}</h3>
                        <p className="text-gray-300 text-sm">{goal.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Benefits for Different Stakeholders</h2>
                <div className="space-y-6">
                  <div className="p-5 bg-gradient-to-r from-green-900/30 to-emerald-900/20 border border-green-500/30 rounded-xl">
                    <h3 className="text-lg font-bold text-white mb-3">For Buyers</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Legal safety: Builders stick to approved plans, designs, deadlines</li>
                      <li>• Clear information: Check project details on RERA website</li>
                      <li>• On-time delivery: Penalties if builders don't complete on time</li>
                      <li>• Secure payments: 70% in separate account for land and building costs</li>
                      <li>• Quick complaint handling via RERA or Appellate Tribunal</li>
                      <li>• Defect fixing: 5-year guarantee on quality issues at no cost</li>
                    </ul>
                  </div>
                  <div className="p-5 bg-gradient-to-r from-blue-900/30 to-primary/20 border border-blue-500/30 rounded-xl">
                    <h3 className="text-lg font-bold text-white mb-3">For Builders/Promoters</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Stronger reputation: Attract serious buyers and investors</li>
                      <li>• Fair rules: Clear and equal rules for all builders</li>
                      <li>• Easier dispute handling: Proper system to solve issues</li>
                      <li>• Better market image: Promotes honest and organized business</li>
                    </ul>
                  </div>
                  <div className="p-5 bg-gradient-to-r from-purple-900/30 to-blue-900/20 border border-purple-500/30 rounded-xl">
                    <h3 className="text-lg font-bold text-white mb-3">For Real Estate Agents</h3>
                    <ul className="space-y-2 text-gray-300 text-sm">
                      <li>• Increased responsibility and accountability</li>
                      <li>• Professional growth and enhanced trust</li>
                      <li>• Must be registered to deal in RERA-approved projects</li>
                      <li>• Legal and trustworthy business operations</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Who Needs RERA Registration?</h2>
                <div className="space-y-4">
                  <div className="p-4 bg-slate-900/30 rounded-lg">
                    <h3 className="font-bold text-white mb-2">Promoters and Developers</h3>
                    <p className="text-gray-300 text-sm mb-2">Mandatory for projects covering:</p>
                    <ul className="space-y-1 text-gray-300 text-sm">
                      <li>• More than 500 square meters of land</li>
                      <li>• More than 8 apartments or units (inclusive of all phases)</li>
                      <li>• Ongoing projects without completion certificate must register within 3 months</li>
                      <li>• Each phase requires individual registration</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-slate-900/30 rounded-lg">
                    <h3 className="font-bold text-white mb-2">Real Estate Agents</h3>
                    <p className="text-gray-300 text-sm">Agents facilitating sale/purchase in registered projects must register. Receive single registration number valid for entire state/UT.</p>
                  </div>
                  <div className="p-4 bg-slate-900/30 rounded-lg">
                    <h3 className="font-bold text-white mb-2">Commercial Properties</h3>
                    <p className="text-gray-300 text-sm">RERA applies if built-up area exceeds 500 sq meters or project includes more than 8 units (commercial/mixed-use).</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Documents Required</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'PAN Card',
                    'Aadhaar or other ID proof',
                    'Certificate of Incorporation',
                    'Legal title deed',
                    'Encumbrance Certificate (EC)',
                    'Commencement Certificate',
                    'Sanctioned layout and building plan',
                    'Project cost estimates',
                    'Escrow account details',
                    'Architect/Engineer details',
                    'Business address proof',
                    'ITRs of last 3 years'
                  ].map((doc, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-slate-900/30 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{doc}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Apply for RERA Registration</h3>
                
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
                    <textarea value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} rows={4} className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-primary transition-colors resize-none" placeholder="Tell us about your project..." />
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
