'use client';

import ServiceConsultationForm from '@/app/components/ServiceConsultationForm';
import { CheckCircle, FileText, Shield, Lock } from 'lucide-react';

export default function NDA() {
  const benefits = [
    'Protect confidential business information',
    'Prevent unauthorized disclosure',
    'Legally enforceable agreement',
    'Define clear confidentiality obligations',
    'Safeguard intellectual property',
  ];

  const documents = [
    'Details of parties involved',
    'Nature of confidential information',
    'Purpose of disclosure',
    'Duration of confidentiality',
    'Identity proof of signatories',
  ];

  const types = [
    {
      title: 'Unilateral NDA',
      description: 'One party discloses information to another party'
    },
    {
      title: 'Bilateral NDA',
      description: 'Both parties exchange confidential information'
    },
    {
      title: 'Multilateral NDA',
      description: 'Three or more parties involved in information sharing'
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Non-Disclosure Agreement (NDA)
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Protect your confidential business information with legally binding NDAs
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">What is a Non-Disclosure Agreement?</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    A Non-Disclosure Agreement (NDA), also known as a Confidentiality Agreement, is a legal contract between 
                    parties that outlines confidential material, knowledge, or information that the parties wish to share with 
                    one another for certain purposes, but wish to restrict access to or by third parties.
                  </p>
                  <p>
                    NDAs are essential when sharing sensitive business information with employees, contractors, partners, 
                    investors, or potential business partners. They create a confidential relationship to protect any type of 
                    proprietary information, trade secrets, or sensitive data.
                  </p>
                  <p>
                    Our legal experts draft comprehensive NDAs tailored to your specific needs, ensuring maximum protection 
                    of your confidential information while maintaining clarity and enforceability.
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <ServiceConsultationForm 
                  serviceName="Non-Disclosure Agreement (NDA)"
                  serviceCategory="Agreements & Contracts"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Types of NDAs</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {types.map((type, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl border border-blue-500/30 p-6 hover:shadow-xl hover:shadow-primary/20 transition-all">
                  <Lock className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{type.title}</h3>
                  <p className="text-gray-300">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl border border-blue-500/30 p-8">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold text-white">Information Required</h2>
              </div>
              <ul className="space-y-3">
                {documents.map((doc, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/20 to-blue-500/20">
          <div className="max-w-4xl mx-auto text-center">
            <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">
              Protect Your Business Secrets
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a professionally drafted NDA customized for your specific requirements
            </p>
            <a
              href="#"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-blue-500 text-white font-bold rounded-lg hover:from-blue-500 hover:to-primary transition-all shadow-lg shadow-primary/50"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Get Your NDA Drafted
            </a>
          </div>
        </section>
      </main>
  );
}
