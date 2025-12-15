'use client';

import { useState } from 'react';
import { FileKey, CheckCircle, Upload, Mail, Phone, MapPin, ArrowRight, Shield, Lock, Award } from 'lucide-react';

export default function DigitalSignaturePage() {
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
              <FileKey className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Digital Signature Certificate (DSC)</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-black text-white mb-6">
              Get Your <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Digital Signature</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Electronic credential proving your identity in digital transactions with enhanced security and legal validity
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">What is a Digital Signature Certificate?</h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  A Digital Signature Certificate (DSC) is an electronic credential that proves your identity in the digital realm. Think of it as a digital equivalent of a handwritten signature but with enhanced security and legal validity.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  When you "sign" a document digitally with your DSC, it creates a unique encrypted "hash" of the document. This hash is then encrypted with your private key. Anyone can verify this signature using your public key, ensuring the document's origin and that it hasn't been altered.
                </p>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">How DSC Secures Your Transactions</h2>
                <div className="grid gap-4">
                  {[
                    { icon: Shield, title: 'Authentication of Identity', desc: 'CA verifies identity using Aadhaar eKYC, video verification, and documents' },
                    { icon: Lock, title: 'Data Integrity', desc: 'Creates cryptographic hash to detect any alterations in signed documents' },
                    { icon: CheckCircle, title: 'Non-Repudiation', desc: 'You cannot deny having signed document - legally admissible proof' },
                    { icon: FileKey, title: 'Confidentiality', desc: 'Encrypt DSC ensures only intended recipient can decrypt and view data' },
                    { icon: Award, title: 'Timestamping', desc: 'Verifies exact date and time document was signed for legal compliance' },
                    { icon: Shield, title: 'Audit Trails', desc: 'Records every step including signer identity, time, and IP address' }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-slate-900/30 rounded-xl hover:bg-slate-900/50 transition-all">
                      <feature.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-bold text-white mb-1">{feature.title}</h3>
                        <p className="text-gray-300 text-sm">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Legal Framework in India</h2>
                <div className="space-y-4">
                  <div className="p-5 bg-gradient-to-r from-blue-900/30 to-primary/20 border border-blue-500/30 rounded-xl">
                    <h3 className="text-lg font-bold text-white mb-2">Information Technology Act, 2000</h3>
                    <p className="text-gray-300 text-sm">Cornerstone for recognizing and regulating electronic transactions including DSCs. Digital signatures have same legal weight as handwritten signatures.</p>
                  </div>
                  <div className="p-5 bg-gradient-to-r from-green-900/30 to-emerald-900/20 border border-green-500/30 rounded-xl">
                    <h3 className="text-lg font-bold text-white mb-2">Indian Contract Act & Evidence Act</h3>
                    <p className="text-gray-300 text-sm">Allows electronic contracts and ensures electronic records with DSCs are admissible as evidence in court.</p>
                  </div>
                  <div className="p-5 bg-slate-900/30 rounded-xl">
                    <h3 className="text-lg font-bold text-white mb-2">Controller of Certifying Authorities (CCA)</h3>
                    <p className="text-gray-300 text-sm">Apex regulatory body licensing and regulating Certifying Authorities (CAs) and setting DSC operation standards.</p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Why Your Business Needs DSC</h2>
                <div className="space-y-3">
                  {[
                    'Legal Validity and Compliance - Statutory requirement for income tax e-filing, GST returns, MCA filings, e-tendering',
                    'Enhanced Security - Verifies signer identity, ensures data integrity, prevents tampering and fraud',
                    'Time and Cost Savings - Eliminates printing, scanning, couriering; accelerates contract approvals',
                    'Convenience and Accessibility - Sign documents anytime, anywhere with internet connection',
                    'Regulatory Adherence - Ensures compliance with evolving digital requirements from government bodies',
                    'Improved Collaboration - Facilitates smoother teamwork across teams and locations in real-time'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3 p-3 bg-slate-900/30 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <p className="text-gray-300 text-sm">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h2 className="text-3xl font-bold text-white mb-6">Common Use Cases</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    'Income Tax E-Filing',
                    'GST Returns Filing',
                    'Company Incorporation (MCA)',
                    'Annual Returns & Compliance',
                    'E-Tendering & E-Procurement',
                    'Contract Signing',
                    'Bank Account Opening',
                    'Import-Export Documentation',
                    'Trademark & Patent Filing',
                    'Customs Clearance',
                    'Foreign Trade Agreements',
                    'Government Filings'
                  ].map((useCase, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-slate-900/30 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{useCase}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Apply for DSC</h3>
                
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
