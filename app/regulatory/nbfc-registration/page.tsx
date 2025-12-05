'use client';

import ServiceConsultationForm from '@/app/components/ServiceConsultationForm';
import { CheckCircle, FileText, Building, Landmark } from 'lucide-react';

export default function NBFCRegistration() {
  const benefits = [
    'Legally operate as a financial institution',
    'Accept deposits and provide loans',
    'Gain credibility and customer trust',
    'Access to RBI regulations and framework',
    'Expand financial services business',
  ];

  const documents = [
    'Certificate of Incorporation',
    'Memorandum and Articles of Association',
    'Board Resolution',
    'Details of Directors and Shareholders',
    'Net Worth Certificate from CA',
    'Business Plan and Financial Projections',
    'PAN and Address Proof of Directors',
    'Bank Certificate',
  ];

  const types = [
    {
      title: 'Investment and Credit Company',
      description: 'Provides loans and investments, major source of income'
    },
    {
      title: 'Asset Finance Company',
      description: 'Finances physical assets like vehicles, machinery'
    },
    {
      title: 'Loan Company',
      description: 'Primarily engaged in providing loans'
    },
    {
      title: 'Infrastructure Finance Company',
      description: 'Deploys 75% funds in infrastructure loans'
    },
    {
      title: 'Systemically Important Core Investment',
      description: 'Holds 90% investments in group companies'
    },
    {
      title: 'Micro Finance Institution',
      description: 'Provides financial services to low-income individuals'
    },
  ];

  const requirements = [
    {
      title: 'Minimum Net Worth',
      description: '₹2 Crore for NBFC registration'
    },
    {
      title: 'Minimum Capital',
      description: '₹5 Lakh as minimum paid-up capital'
    },
    {
      title: 'Company Structure',
      description: 'Must be registered as a company'
    },
    {
      title: 'Financial Activities',
      description: 'Principal business should be financial activities'
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                NBFC Registration
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Register your Non-Banking Financial Company with RBI and start providing financial services
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">What is NBFC Registration?</h2>
                <div className="space-y-4 text-gray-300">
                  <p>
                    A Non-Banking Financial Company (NBFC) is a company registered under the Companies Act that provides banking 
                    services without holding a banking license. NBFCs can engage in loans, advances, acquisition of shares, 
                    leasing, hire-purchase, insurance business, and chit fund activities.
                  </p>
                  <p>
                    NBFC registration is granted by the Reserve Bank of India (RBI) under the RBI Act, 1934. To operate as an 
                    NBFC, a company must obtain a Certificate of Registration (CoR) from RBI. The process involves strict 
                    compliance with RBI guidelines and regulatory requirements.
                  </p>
                  <p>
                    Our experienced team specializes in NBFC registration and compliance services, guiding you through the 
                    complex regulatory landscape and ensuring smooth approval from RBI.
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Benefits of NBFC Registration</h3>
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
                  serviceName="NBFC Registration"
                  serviceCategory="Regulatory"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Types of NBFCs</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {types.map((type, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl border border-blue-500/30 p-6 hover:shadow-xl hover:shadow-primary/20 transition-all">
                  <Building className="w-10 h-10 text-primary mb-4" />
                  <h3 className="text-lg font-bold text-white mb-3">{type.title}</h3>
                  <p className="text-sm text-gray-300">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Eligibility Requirements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {requirements.map((req, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl border border-blue-500/30 p-6 text-center hover:shadow-xl hover:shadow-primary/20 transition-all">
                  <h3 className="text-lg font-bold text-white mb-3">{req.title}</h3>
                  <p className="text-sm text-gray-300">{req.description}</p>
                </div>
              ))}
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
            <Landmark className="w-16 h-16 text-primary mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-white mb-6">
              Start Your Financial Services Business
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get expert assistance in obtaining RBI approval for your NBFC
            </p>
            <a
              href="#"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-blue-500 text-white font-bold rounded-lg hover:from-blue-500 hover:to-primary transition-all shadow-lg shadow-primary/50"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Begin Registration Process
            </a>
          </div>
        </section>
      </main>
  );
}
