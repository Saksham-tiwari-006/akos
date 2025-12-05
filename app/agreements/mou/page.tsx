'use client';

import ServiceConsultationForm from '@/app/components/ServiceConsultationForm';
import { CheckCircle, FileText, FileSignature, Handshake } from 'lucide-react';

export default function MOU() {
  const benefits = [
    'Establish clear understanding between parties',
    'Define roles and responsibilities',
    'Foundation for future formal agreements',
    'Demonstrate commitment and good faith',
    'Facilitate smooth negotiations',
  ];

  const documents = [
    'Details of all parties involved',
    'Purpose and objectives of MOU',
    'Terms and conditions',
    'Duration of the agreement',
    'Identity and address proof of signatories',
    'Company/business registration details',
  ];

  const components = [
    {
      title: 'Parties Involved',
      description: 'Names and details of all parties entering the MOU'
    },
    {
      title: 'Purpose',
      description: 'Clear statement of the objectives and intent'
    },
    {
      title: 'Terms & Conditions',
      description: 'Specific terms governing the understanding'
    },
    {
      title: 'Duration',
      description: 'Validity period of the MOU'
    },
    {
      title: 'Obligations',
      description: 'Responsibilities of each party'
    },
    {
      title: 'Termination',
      description: 'Conditions for ending the MOU'
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Memorandum of Understanding (MOU)
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Formalize your business understanding with professionally drafted MOUs
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">What is a Memorandum of Understanding?</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    A Memorandum of Understanding (MOU) is a formal agreement between two or more parties that outlines the 
                    terms and details of an understanding, including each party's requirements and responsibilities. While an 
                    MOU is generally not legally binding, it demonstrates a serious commitment from the parties involved.
                  </p>
                  <p>
                    MOUs are commonly used in business partnerships, collaborations, joint ventures, and service agreements. 
                    They serve as a foundation for future formal contracts and help parties establish a mutual understanding 
                    before entering into more complex legal agreements.
                  </p>
                  <p>
                    Our legal experts draft comprehensive MOUs that clearly articulate the intentions and commitments of all 
                    parties, ensuring a smooth path toward formal business relationships.
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Why You Need an MOU</h3>
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
                  serviceName="Memorandum of Understanding (MOU)"
                  serviceCategory="Agreements & Contracts"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Key Components of MOU</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {components.map((component, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl border border-blue-500/30 p-6 hover:shadow-xl hover:shadow-primary/20 transition-all">
                  <FileSignature className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-bold text-white mb-3">{component.title}</h3>
                  <p className="text-sm text-gray-300">{component.description}</p>
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
              Formalize Your Business Understanding
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get a professionally drafted MOU that sets the right foundation for your business relationship
            </p>
            <a
              href="#"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-blue-500 text-white font-bold rounded-lg hover:from-blue-500 hover:to-primary transition-all shadow-lg shadow-primary/50"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Draft Your MOU
            </a>
          </div>
        </section>
      </main>
  );
}
