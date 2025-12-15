'use client';

import { useState } from 'react';
import { Handshake, CheckCircle, FileText, Upload, Mail, Phone, MapPin, ArrowRight, Users, Shield, TrendingUp, Scale, Building2, Award } from 'lucide-react';

export default function PartnershipFirmPage() {
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
              <Handshake className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Partnership Firm Registration</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Register Your <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Partnership Firm</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Establish a legal partnership business structure with shared responsibility and growth opportunities
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
              {/* What is Partnership */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">What is Partnership Firm Registration?</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Partnership firm registration is the legal process of establishing a business partnership under the Indian Partnership Act, 1932, with the Registrar of Firms. You need a minimum of two partners with no upper limit and zero minimum capital investment.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  After you register a partnership firm, your business gains official legal status and benefits like partner protection, easier loan approvals, improved market reputation, and you operate with complete legal authority.
                </p>
              </div>

              {/* Types */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Types of Partnership Firms Eligible for Registration</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-primary pl-6 py-3">
                    <h3 className="text-xl font-bold text-white mb-2">General Partnership</h3>
                    <p className="text-gray-300">Traditional partnership where all partners share equal responsibility and liability for business operations and debts.</p>
                  </div>
                  <div className="border-l-4 border-green-400 pl-6 py-3">
                    <h3 className="text-xl font-bold text-white mb-2">Limited Liability Partnership (LLP)</h3>
                    <p className="text-gray-300">A hybrid structure combining the benefits of partnership and corporate entities with limited liability protection.</p>
                  </div>
                  <div className="border-l-4 border-yellow-400 pl-6 py-3">
                    <h3 className="text-xl font-bold text-white mb-2">Limited Partnership</h3>
                    <p className="text-gray-300">A Structure where some partners have limited liability while others maintain unlimited liability.</p>
                  </div>
                </div>
              </div>

              {/* Key Features */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Key Features of a Partnership Firm</h2>
                <div className="grid gap-4">
                  {[
                    'Two or More Partners: At least 2 people to start with each bringing money, skills, or work to the business',
                    'Shared Control: Every partner can make business decisions and sign contracts',
                    'Profit and Loss Sharing: Partners divide profits and losses according to agreed percentage',
                    'Personal Liability: Partners must pay from personal assets if business funds run out',
                    'No Legal Separation: The law sees the firm and partners as the same entity',
                    'Mutual Agreement: Partners join willingly and can end the partnership by agreement'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-4 bg-slate-900/30 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                      <p className="text-gray-300">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Benefits of Partnership Firm Registration</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                      <Shield className="w-6 h-6 text-primary" />
                      Legal Recognition & Protection
                    </h3>
                    <ul className="space-y-2 ml-8">
                      <li className="text-gray-300">• Establish legal standing and enforce business contracts</li>
                      <li className="text-gray-300">• Protect business identity and prevent ownership disputes</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                      <Award className="w-6 h-6 text-primary" />
                      Enhanced Credibility & Trust
                    </h3>
                    <ul className="space-y-2 ml-8">
                      <li className="text-gray-300">• Build customer confidence and strengthen vendor relations</li>
                      <li className="text-gray-300">• Demonstrate commitment to formal business practices</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                      <TrendingUp className="w-6 h-6 text-primary" />
                      Financial Advantages
                    </h3>
                    <ul className="space-y-2 ml-8">
                      <li className="text-gray-300">• Access banking services and secure credit facilities</li>
                      <li className="text-gray-300">• Better credit terms and higher limits from institutions</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Disadvantages */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Disadvantages to Consider</h2>
                <div className="space-y-3">
                  {[
                    'Unlimited Personal Liability: Partners personally liable for all business debts',
                    'Joint and Several Liability: Each partner responsible for actions of other partners',
                    'Limited Growth Potential: Cannot issue shares or raise capital publicly',
                    'Restricted Ownership Transfer: Cannot freely transfer interests without consent',
                    'Lack of Separate Legal Entity: Firm does not exist independently from partners',
                    'Partnership Instability: Death or withdrawal of partner can dissolve partnership'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-red-900/10 border border-red-500/20 rounded-lg">
                      <span className="text-red-400 text-sm font-bold flex-shrink-0">⚠</span>
                      <p className="text-gray-300 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Register Your Partnership</h3>
                
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
