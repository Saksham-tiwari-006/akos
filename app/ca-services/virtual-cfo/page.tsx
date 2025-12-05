'use client';

import { TrendingUp, Calculator, FileText, Shield, DollarSign, CheckCircle, BarChart3, Users, Building, Scale, ClipboardCheck, ArrowRight } from 'lucide-react';
import ServiceConsultationForm from '@/app/components/ServiceConsultationForm';
import Link from 'next/link';

export default function VirtualCFOPage() {
  const accountingFunctions = [
    {
      title: 'Setting up accounting systems',
      description: 'The Virtual CFO helps establish efficient accounting processes, selects the right software, and ensures that financial data is recorded correctly.',
      icon: <Calculator className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Maintaining books of accounts',
      description: 'They monitor bookkeeping accuracy, verify ledgers, reconcile accounts, and ensure that financial records comply with accounting standards.',
      icon: <FileText className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Financial reporting',
      description: 'They prepare monthly, quarterly, and annual financial statements like profit and loss, balance sheet, and cash flow statements. They also analyze these reports to guide business decisions.',
      icon: <BarChart3 className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Budgeting and forecasting',
      description: 'The Virtual CFO creates budgets, predicts future revenue and expenses, and helps the business plan for growth and risk management.',
      icon: <TrendingUp className="w-8 h-8 text-yellow-400" />
    },
    {
      title: 'Internal controls',
      description: 'They introduce internal checks and processes to prevent errors, fraud, and ensure smooth financial operations.',
      icon: <Shield className="w-8 h-8 text-red-400" />
    }
  ];

  const taxationFunctions = [
    {
      title: 'Tax planning',
      description: 'A Virtual CFO helps businesses plan their taxes in advance so that they can legally reduce tax liabilities and avoid unnecessary penalties.',
      icon: <DollarSign className="w-8 h-8 text-green-400" />
    },
    {
      title: 'GST management',
      description: 'They ensure proper GST registration, compliance, monthly returns, input tax credit management, and filing.',
      icon: <FileText className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Income tax compliance',
      description: 'The Virtual CFO manages advance tax calculations, TDS compliance, income tax filings, and communication with tax authorities.',
      icon: <Calculator className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Regulatory compliance',
      description: 'They make sure the business follows all required financial laws, including company law, statutory filings, and other regulatory obligations.',
      icon: <Scale className="w-8 h-8 text-yellow-400" />
    },
    {
      title: 'Representation before authorities',
      description: 'If there are tax notices, audits, or inquiries, the Virtual CFO can assist in preparing responses and representing the business.',
      icon: <Users className="w-8 h-8 text-red-400" />
    }
  ];

  const benefits = [
    'Cost-effective access to expert financial guidance',
    'Improved financial accuracy and compliance',
    'Better decision-making through data-driven reports',
    'Reduced risk of penalties or non-compliance',
    'Strengthened financial strategy for growth'
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-6">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">CA Services</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Virtual CFO Services
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              A Virtual CFO (Chief Financial Officer) is a remote financial expert who provides high-level financial management to businesses without being a full-time in-house employee. Small and medium enterprises often use Virtual CFOs because they offer professional financial guidance at a lower cost than hiring a full-time senior executive.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Content - 2 columns */}
            <div className="lg:col-span-2 space-y-16">
              {/* Accounting Functions */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Key Functions Related to Accounting</h2>
                </div>
                <div className="space-y-6">
                  {accountingFunctions.map((func, index) => (
                    <div
                      key={index}
                      className="bg-white/5 backdrop-blur-md rounded-xl border border-blue-500/30 p-6 hover:bg-white/10 transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-white/10 flex items-center justify-center">
                          {func.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{index + 1}. {func.title}</h3>
                          <p className="text-gray-300 leading-relaxed">{func.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Taxation Functions */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                    <DollarSign className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Key Functions Related to Taxation</h2>
                </div>
                <div className="space-y-6">
                  {taxationFunctions.map((func, index) => (
                    <div
                      key={index}
                      className="bg-white/5 backdrop-blur-md rounded-xl border border-green-500/30 p-6 hover:bg-white/10 transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-white/10 flex items-center justify-center">
                          {func.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{index + 1}. {func.title}</h3>
                          <p className="text-gray-300 leading-relaxed">{func.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits Section */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Benefits of Virtual CFO Services</h2>
                </div>
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30 p-8">
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <p className="text-lg text-white pt-1">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white/5 backdrop-blur-md rounded-xl border border-blue-500/30 p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Why Choose AKOS for Virtual CFO Services?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-white mb-1">Experienced Professionals</h3>
                      <p className="text-gray-300 text-sm">Our CAs and CFOs have 10+ years of industry experience</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-white mb-1">Cost-Effective</h3>
                      <p className="text-gray-300 text-sm">Get CFO-level expertise at a fraction of the cost</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-white mb-1">Dedicated Support</h3>
                      <p className="text-gray-300 text-sm">Personalized attention and regular consultations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-white mb-1">100% Compliance</h3>
                      <p className="text-gray-300 text-sm">Stay compliant with all regulatory requirements</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar - Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <ServiceConsultationForm
                  serviceName="Virtual CFO Services"
                  serviceCategory="CA Services"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/20 to-blue-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <Building className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Financial Management?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get expert Virtual CFO services tailored to your business needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-blue-500 text-white font-bold rounded-lg hover:from-blue-500 hover:to-primary transition-all shadow-lg shadow-primary/50"
            >
              Schedule Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/ca-services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-all"
            >
              View All CA Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
