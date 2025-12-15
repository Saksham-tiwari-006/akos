'use client';

import { useState } from 'react';
import { User, CheckCircle, FileText, Upload, Mail, Phone, MapPin, ArrowRight, Shield, TrendingUp, DollarSign, Award, Scale, Building2 } from 'lucide-react';

export default function SoleProprietorshipPage() {
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
              <User className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Sole Proprietorship Registration</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Register Your <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Sole Proprietorship</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The simplest and most popular business structure for individual entrepreneurs in India
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
              {/* What is Sole Proprietorship */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">What is Sole Proprietorship Registration?</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The Ministry of Corporate Affairs reports that more than 63% of registered businesses in India operate as sole proprietorships, making this the most popular business structure among entrepreneurs. This shows how simple and accessible this format is for small-scale operations and startups.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Sole proprietorship registration is the process of formally establishing a business owned and operated by a single individual under Indian law. This business structure provides the simplest form of business organization, where the owner has complete control over business operations and decision-making.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  The registration process involves obtaining various licenses, registrations, and compliances required to operate a business legally, including GST registration, shop and establishment license, and other industry-specific permits based on the nature of business activities.
                </p>
              </div>

              {/* Why Choose */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Why Choose Sole Proprietorship Registration in India?</h2>
                <div className="grid gap-4">
                  {[
                    { icon: CheckCircle, title: 'Easy to Start and Manage', desc: 'Simplest form requiring minimal formalities - just basic documents, GST registration if applicable, and local business license' },
                    { icon: User, title: 'Complete Control', desc: 'Full authority to make business decisions without consulting anyone, ensuring fast and flexible management' },
                    { icon: DollarSign, title: 'Low Costs', desc: 'No expensive registration fees or mandatory professional services, with minimal operational expenses' },
                    { icon: FileText, title: 'Minimal Compliance', desc: 'No need to file annual returns with ROC or complex auditing requirements unless turnover exceeds certain limits' },
                    { icon: TrendingUp, title: 'Simplified Taxation', desc: 'Business income treated as personal income, taxed under individual income tax slabs with straightforward filing' },
                    { icon: Award, title: 'Quick Setup', desc: 'Establish your business within a few days depending on basic registrations like GST and MSME/Udyam' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-slate-900/30 rounded-xl hover:bg-slate-900/50 transition-all">
                      <item.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-white mb-1">{item.title}</h3>
                        <p className="text-gray-300 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Advantages & Disadvantages */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Advantages and Disadvantages</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-xl font-bold text-green-400 mb-4 flex items-center gap-2">
                      <CheckCircle className="w-6 h-6" />
                      Advantages
                    </h3>
                    <ul className="space-y-3">
                      {[
                        'Easy to start with minimal legal formalities',
                        'Single owner has full control over all decisions',
                        'Registration and compliance costs are low',
                        'No need to file annual returns with ROC',
                        'Income taxed as personal income',
                        'All profits belong solely to the proprietor',
                        'Quick decision-making process',
                        'Suitable for small-scale businesses'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-300 text-sm">
                          <span className="text-green-400 mt-1">✓</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                      <span className="text-2xl">⚠</span>
                      Disadvantages
                    </h3>
                    <ul className="space-y-3">
                      {[
                        'Owner personally responsible for all business debts',
                        'Difficult to raise large capital or attract investors',
                        'Business may not continue in case of owner\'s death',
                        'Business growth limited due to lack of external funding',
                        'May not be seen as credible by large clients',
                        'Selling or transferring business is not easy',
                        'No limited liability protection',
                        'Access to government schemes may be limited'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-2 text-gray-300 text-sm">
                          <span className="text-red-400 mt-1">✗</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Types */}
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Types of Sole Proprietorship Registration in India</h2>
                <div className="space-y-4">
                  {[
                    { title: 'Service-Based Sole Proprietorship', desc: 'Covers businesses providing professional services, consultancy, or skill-based offerings', example: 'Freelance graphic designer offering design services to corporate clients' },
                    { title: 'Trading Business Sole Proprietorship', desc: 'For businesses involved in buying and selling goods, retail or wholesale', example: 'Individual operating a retail clothing store or online marketplace' },
                    { title: 'Manufacturing Sole Proprietorship', desc: 'Covers small-scale manufacturing operations producing goods for sale', example: 'Small food processing unit or handicraft manufacturing business' },
                    { title: 'Online Business Sole Proprietorship', desc: 'For digital businesses, e-commerce operations, or online service providers', example: 'E-commerce website or digital marketing services online' },
                    { title: 'Professional Practice Sole Proprietorship', desc: 'For licensed professionals providing specialized services', example: 'Chartered accountant, lawyer, or doctor establishing independent practice' },
                    { title: 'Home-Based Business Sole Proprietorship', desc: 'For businesses operated from residential premises', example: 'Home-based catering service or tutoring center' },
                    { title: 'Freelance Business Sole Proprietorship', desc: 'For independent contractors providing specialized services on project basis', example: 'Content writer or software developer freelance business' }
                  ].map((type, index) => (
                    <div key={index} className="p-5 bg-slate-900/30 rounded-xl border border-slate-700/30 hover:border-primary/30 transition-all">
                      <h3 className="text-lg font-bold text-white mb-2">{type.title}</h3>
                      <p className="text-gray-300 text-sm mb-2">{type.desc}</p>
                      <p className="text-primary text-xs italic">Example: {type.example}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Start Your Business</h3>
                
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
                      placeholder="Tell us about your business..."
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
