'use client';

import ServiceConsultationForm from '@/app/components/ServiceConsultationForm';
import { CheckCircle, FileText, Recycle } from 'lucide-react';

export default function EPRRegistration() {
  const benefits = [
    'Comply with Extended Producer Responsibility regulations',
    'Avoid hefty penalties and legal consequences',
    'Demonstrate environmental commitment',
    'Facilitate recycling and waste management',
    'Enhance brand reputation',
  ];

  const documents = [
    'Company registration certificate',
    'GST registration certificate',
    'Details of products manufactured/imported',
    'Pollution Control Board authorization',
    'Annual production/import data',
    'Waste management plan',
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                EPR Registration
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Extended Producer Responsibility certification for environmentally responsible waste management
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">What is EPR Registration?</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Extended Producer Responsibility (EPR) is an environmental policy approach where producers take responsibility 
                    for the entire lifecycle of their products, especially for take-back, recycling, and final disposal. EPR 
                    registration is mandatory for manufacturers, importers, and brand owners dealing with plastic packaging, 
                    e-waste, batteries, and other regulated products.
                  </p>
                  <p>
                    The Central Pollution Control Board (CPCB) mandates EPR registration to ensure that producers fulfill their 
                    environmental obligations. This includes setting up collection mechanisms, recycling facilities, and maintaining 
                    detailed records of waste management.
                  </p>
                  <p>
                    Our team provides end-to-end assistance in obtaining EPR registration, from documentation to compliance reporting, 
                    ensuring your business meets all regulatory requirements.
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Why Choose Our EPR Services?</h3>
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
                  serviceName="EPR Registration"
                  serviceCategory="Environmental"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-md rounded-xl border border-blue-500/30 p-8">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold text-white">Required Documents</h2>
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
            <Recycle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">
              Make Your Business Environmentally Compliant
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get your EPR registration done by our environmental compliance experts
            </p>
            <a
              href="#"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-blue-500 text-white font-bold rounded-lg hover:from-blue-500 hover:to-primary transition-all shadow-lg shadow-primary/50"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Start Your Application
            </a>
          </div>
        </section>
      </main>
  );
}
