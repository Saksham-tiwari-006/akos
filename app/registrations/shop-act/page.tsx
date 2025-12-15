'use client';

import { useState } from 'react';
import { Store, CheckCircle, Upload, Mail, Phone, MapPin, ArrowRight, Shield, Award, Building2, Users, Clock, FileText } from 'lucide-react';

export default function ShopActLicensePage() {
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
              <Store className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Shop Act Licence</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Get Your <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Shop Act Licence</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Government registration under Shops and Establishment Act regulating working conditions and employee rights
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">What Is a Shop Act Licence?</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  A Shop Act Licence is a government registration under the Shops and Establishment Act, required for shops, offices, commercial establishments, small businesses, and retail/wholesale businesses. This licence regulates working conditions, employee rights, and business operations.
                </p>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Every state in India has its own Shop Act rules, but the purpose is the same everywhere - to ensure legal business operations and protect employee rights.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Shops & Retail Stores',
                    'Offices & Commercial Spaces',
                    'Small Businesses',
                    'Retail/Wholesale Businesses',
                    'Online Businesses (with office)',
                    'Service Establishments'
                  ].map((type, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-slate-900/30 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{type}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Why Is Shop Act Licence Needed?</h2>
                <div className="grid gap-4">
                  {[
                    { icon: Shield, title: 'Legally Start Operations', desc: 'Cannot run a shop/office without this registration' },
                    { icon: Building2, title: 'Open Current Bank Account', desc: 'Banks require Shop Act licence as business proof' },
                    { icon: FileText, title: 'Apply for GST Registration', desc: 'Essential KYC proof for most small traders' },
                    { icon: Users, title: 'Hire Employees Legally', desc: 'Defines working hours, leave rules, wages, safety rules, weekly holidays' },
                    { icon: Award, title: 'Compliance with Labour Laws', desc: 'Businesses with even 1 employee must register under this Act' },
                    { icon: CheckCircle, title: 'Business Credibility', desc: 'Establishes legitimacy and professionalism of your business' }
                  ].map((reason, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-slate-900/30 rounded-xl hover:bg-slate-900/50 transition-all">
                      <reason.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-white mb-1">{reason.title}</h3>
                        <p className="text-gray-300 text-sm">{reason.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Who Needs a Shop Act Licence?</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Retail Stores',
                    'Kirana Shops',
                    'Small Traders',
                    'IT/CA/Consultancy Offices',
                    'Restaurants & Cafés',
                    'Beauty Parlours / Salons',
                    'Warehouses',
                    'Online Seller Offices (Amazon, Flipkart)',
                    'Freelancers with Workplace',
                    'Home-based Businesses (with employees)',
                    'Tuition Centers',
                    'Service Centers'
                  ].map((business, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-slate-900/30 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{business}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Key Features Regulated by Shop Act</h2>
                <p className="text-gray-300 mb-4">The licence ensures compliance with:</p>
                <div className="grid md:grid-cols-2 gap-3">
                  {[
                    'Working Hours',
                    'Overtime Rules',
                    'Weekly Off',
                    'Employee Wages',
                    'Safety and Hygiene Rules',
                    'Holiday Rules',
                    'Opening & Closing Hours',
                    'Rules for Termination',
                    'Maternity Benefit',
                    'Child Labour Prohibition',
                    'Leave Entitlements',
                    'Work Environment Standards'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-slate-900/30 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-300 text-sm">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Documents Required</h2>
                <p className="text-gray-300 mb-4">These vary by state but usually include:</p>
                <div className="space-y-3">
                  {[
                    'Aadhaar / PAN of proprietor',
                    'Passport size photograph',
                    'Electricity bill / Rent agreement of business place',
                    'Business details (nature, employees, working hours)',
                    'Partnership deed / MOA & AOA (for firms/companies)',
                    'Identity proof of business owner',
                    'Address proof of establishment'
                  ].map((doc, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-slate-900/30 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-300 text-sm">{doc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Validity, Fees & Processing</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="p-5 bg-gradient-to-br from-blue-900/30 to-primary/20 border border-blue-500/30 rounded-xl">
                    <Clock className="w-8 h-8 text-primary mb-3" />
                    <h3 className="text-lg font-bold text-white mb-2">Validity</h3>
                    <p className="text-gray-300 text-sm">Most states issue licence for 1 to 5 years. Renewal required after expiry online.</p>
                  </div>
                  <div className="p-5 bg-gradient-to-br from-green-900/30 to-emerald-900/20 border border-green-500/30 rounded-xl">
                    <Award className="w-8 h-8 text-green-400 mb-3" />
                    <h3 className="text-lg font-bold text-white mb-2">Government Fees</h3>
                    <p className="text-gray-300 text-sm">₹300 – ₹10,000 yearly depending on business type, employees, and state rules.</p>
                  </div>
                  <div className="p-5 bg-gradient-to-br from-purple-900/30 to-blue-900/20 border border-purple-500/30 rounded-xl">
                    <Clock className="w-8 h-8 text-purple-400 mb-3" />
                    <h3 className="text-lg font-bold text-white mb-2">Processing Time</h3>
                    <p className="text-gray-300 text-sm">1-7 working days depending on state and documentation.</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">How to Apply (Online Steps)</h2>
                <div className="space-y-4">
                  {[
                    { step: '1', title: 'Visit State Labour Department Portal', desc: 'Access your state\'s official labour department website' },
                    { step: '2', title: 'Register as Employer', desc: 'Create account with business and owner details' },
                    { step: '3', title: 'Fill Shops & Establishment Form', desc: 'Complete application with accurate business information' },
                    { step: '4', title: 'Upload Required Documents', desc: 'Submit all necessary documents in specified format' },
                    { step: '5', title: 'Pay Fees Online', desc: 'Complete payment through online gateway' },
                    { step: '6', title: 'Download Certificate', desc: 'Receive and download your Shop Act Certificate' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-slate-900/30 rounded-xl">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/20 border border-primary/30 rounded-full flex items-center justify-center">
                        <span className="text-primary font-bold">{item.step}</span>
                      </div>
                      <div>
                        <h3 className="font-bold text-white mb-1">{item.title}</h3>
                        <p className="text-gray-300 text-sm">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Apply for Shop Act Licence</h3>
                
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
