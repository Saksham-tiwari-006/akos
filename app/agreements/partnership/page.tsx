'use client';

import ServiceConsultationForm from '@/app/components/ServiceConsultationForm';
import { CheckCircle, FileText, Handshake, Users } from 'lucide-react';

export default function PartnershipAgreement() {
  const benefits = [
    'Clear definition of roles and responsibilities',
    'Prevent future disputes and conflicts',
    'Define profit sharing ratios',
    'Outline decision-making process',
    'Legal protection for all partners',
  ];

  const documents = [
    'Details of all partners (name, address, PAN)',
    'Business name and nature of business',
    'Capital contribution of each partner',
    'Profit sharing ratio',
    'Address of business premises',
    'Bank account details',
  ];

  const keyTerms = [
    {
      title: 'Capital Contribution',
      description: 'Amount each partner will invest in the business'
    },
    {
      title: 'Profit & Loss Sharing',
      description: 'Ratio in which profits and losses will be distributed'
    },
    {
      title: 'Roles & Responsibilities',
      description: 'Duties and authority of each partner'
    },
    {
      title: 'Decision Making',
      description: 'Process for making business decisions'
    },
    {
      title: 'Dissolution Terms',
      description: 'Conditions and process for ending the partnership'
    },
    {
      title: 'Dispute Resolution',
      description: 'Mechanism for resolving conflicts'
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Partnership Agreement
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Legally binding agreement defining the terms of your business partnership
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">What is a Partnership Agreement?</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    A Partnership Agreement, also known as a Partnership Deed, is a legal document that outlines the terms and 
                    conditions governing a partnership business. It defines the rights, duties, and obligations of each partner, 
                    as well as the rules for managing the business, sharing profits and losses, and resolving disputes.
                  </p>
                  <p>
                    While not mandatory for partnership registration, having a well-drafted partnership agreement is crucial for 
                    preventing misunderstandings and conflicts among partners. It serves as a reference document for all business 
                    decisions and helps maintain transparency in operations.
                  </p>
                  <p>
                    Our legal experts draft comprehensive partnership agreements that cover all essential aspects of your business 
                    relationship, ensuring clarity and legal protection for all partners involved.
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Why You Need This Agreement</h3>
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
                  serviceName="Partnership Agreement"
                  serviceCategory="Agreements & Contracts"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Key Terms Covered</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {keyTerms.map((term, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl border border-blue-500/30 p-6 hover:shadow-xl hover:shadow-primary/20 transition-all">
                  <h3 className="text-lg font-bold text-white mb-3">{term.title}</h3>
                  <p className="text-sm text-gray-300">{term.description}</p>
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
            <Handshake className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">
              Start Your Partnership on Solid Ground
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a professionally drafted partnership agreement that protects all partners
            </p>
            <a
              href="#"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-blue-500 text-white font-bold rounded-lg hover:from-blue-500 hover:to-primary transition-all shadow-lg shadow-primary/50"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Draft Your Agreement
            </a>
          </div>
        </section>
      </main>
  );
}
