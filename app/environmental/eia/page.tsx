'use client';

import ServiceConsultationForm from '@/app/components/ServiceConsultationForm';
import { CheckCircle, FileText, Leaf, AlertTriangle } from 'lucide-react';

export default function EIA() {
  const benefits = [
    'Identify potential environmental impacts early',
    'Ensure regulatory compliance',
    'Minimize project delays and costs',
    'Enhance stakeholder confidence',
    'Sustainable project development',
  ];

  const documents = [
    'Project details and site information',
    'Baseline environmental data',
    'Site maps and layout plans',
    'Details of raw materials and processes',
    'Waste generation estimates',
    'Environmental management plan',
  ];

  const sectors = [
    'Mining and Mineral Processing',
    'Thermal Power Plants',
    'Infrastructure Projects',
    'Manufacturing Industries',
    'Chemical and Petrochemical',
    'Real Estate and Construction',
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Environmental Impact Assessment (EIA)
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive environmental assessment for sustainable project development
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">What is Environmental Impact Assessment?</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    Environmental Impact Assessment (EIA) is a systematic process of identifying, predicting, evaluating, and 
                    mitigating the environmental, social, and other relevant effects of proposed development projects prior to 
                    major decisions being taken and commitments made.
                  </p>
                  <p>
                    EIA is mandatory for specific categories of projects as per the EIA Notification 2006 (amended from time to time) 
                    issued by the Ministry of Environment, Forest and Climate Change (MoEF&CC). It ensures that environmental 
                    considerations are explicitly addressed and incorporated into the development decision-making process.
                  </p>
                  <p>
                    Our team of environmental experts conducts thorough EIA studies, prepares detailed reports, and assists in 
                    obtaining environmental clearances from the appropriate authorities.
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
                  serviceName="Environmental Impact Assessment (EIA)"
                  serviceCategory="Environmental"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Sectors Requiring EIA</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sectors.map((sector, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl border border-blue-500/30 p-6 hover:shadow-xl hover:shadow-primary/20 transition-all">
                  <Leaf className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-bold text-white">{sector}</h3>
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
                <h2 className="text-3xl font-bold text-white">Required Information</h2>
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
            <AlertTriangle className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">
              Ensure Environmental Compliance
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get expert EIA services to secure environmental clearance for your project
            </p>
            <a
              href="#"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-blue-500 text-white font-bold rounded-lg hover:from-blue-500 hover:to-primary transition-all shadow-lg shadow-primary/50"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Request EIA Consultation
            </a>
          </div>
        </section>
      </main>
  );
}
