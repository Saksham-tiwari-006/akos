'use client';

import { Shield, FileText, CheckCircle, Search, Scale, AlertTriangle, ClipboardCheck, Eye, Users, BarChart3, ArrowRight, Building } from 'lucide-react';
import ServiceConsultationForm from '@/app/components/ServiceConsultationForm';
import Link from 'next/link';

export default function AuditAssurancePage() {
  const auditPoints = [
    {
      title: 'Verification',
      description: 'Auditors verify records, transactions, bank statements, invoices, and supporting documents.',
      icon: <Search className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'True and fair view',
      description: 'Auditors check if the financial statements reflect the actual financial position of the business.',
      icon: <Eye className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Compliance',
      description: 'Auditors ensure the financial statements follow accounting standards and legal requirements.',
      icon: <Scale className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Internal controls',
      description: 'Auditors review the company\'s internal systems to identify weaknesses or risks of fraud.',
      icon: <Shield className="w-8 h-8 text-yellow-400" />
    },
    {
      title: 'Audit report',
      description: 'After completing the audit, the auditor issues an audit report stating whether the financial statements are reliable or if there are any concerns.',
      icon: <FileText className="w-8 h-8 text-red-400" />
    }
  ];

  const assurancePoints = [
    {
      title: 'Reliability',
      description: 'Assurance services increase confidence in the information being reviewed.',
      icon: <CheckCircle className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Risk assessment',
      description: 'They help identify risks, errors, and areas for improvement.',
      icon: <AlertTriangle className="w-8 h-8 text-yellow-400" />
    },
    {
      title: 'Non-financial areas',
      description: 'Assurance can be used for operational data, sustainability reporting, internal controls, and compliance checks.',
      icon: <BarChart3 className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Independent review',
      description: 'Assurance is provided by an independent professional who evaluates the accuracy of information.',
      icon: <Users className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Recommendations',
      description: 'Assurance services often include suggestions to improve systems and processes.',
      icon: <ClipboardCheck className="w-8 h-8 text-red-400" />
    }
  ];

  const differences = [
    'Audit focuses mainly on financial statements, while assurance covers both financial and non-financial information.',
    'Audit is more detailed and structured, while assurance can be flexible depending on the client\'s needs.',
    'Every audit is an assurance engagement, but every assurance engagement is not an audit.'
  ];

  const auditTypes = [
    { title: 'Statutory Audit', description: 'Mandatory audit as per Companies Act' },
    { title: 'Internal Audit', description: 'Review of internal processes and controls' },
    { title: 'Tax Audit', description: 'Audit under Income Tax Act Section 44AB' },
    { title: 'GST Audit', description: 'Annual GST compliance verification' },
    { title: 'Concurrent Audit', description: 'Real-time transaction verification' },
    { title: 'Stock Audit', description: 'Physical verification of inventory' }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-6">
              <Shield className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">CA Services</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Audit & Assurance Services
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Audit and assurance are financial review services that help improve the reliability and accuracy of a business's financial information. They are essential for building trust with owners, lenders, investors, and regulators.
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
              {/* What is Audit */}
              <div>
                <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-xl border border-blue-500/30 p-8 mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">What is an Audit?</h2>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    An audit is an independent examination of a company's financial statements. The purpose of an audit is to check whether the financial statements are accurate, complete, and presented according to accounting standards.
                  </p>
                </div>
                
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Search className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Key Points About Audits</h2>
                </div>
                <div className="space-y-6">
                  {auditPoints.map((point, index) => (
                    <div
                      key={index}
                      className="bg-white/5 backdrop-blur-md rounded-xl border border-blue-500/30 p-6 hover:bg-white/10 transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-white/10 flex items-center justify-center">
                          {point.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{index + 1}. {point.title}</h3>
                          <p className="text-gray-300 leading-relaxed">{point.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Types of Audit */}
              <div>
                <h2 className="text-3xl font-bold text-white mb-8">Types of Audit Services We Offer</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {auditTypes.map((type, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-md rounded-xl border border-blue-500/30 p-6 hover:bg-white/10 transition-all">
                      <h3 className="text-lg font-bold text-white mb-2">{type.title}</h3>
                      <p className="text-gray-300 text-sm">{type.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* What is Assurance */}
              <div>
                <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30 p-8 mb-8">
                  <h2 className="text-3xl font-bold text-white mb-4">What is Assurance?</h2>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Assurance refers to a broader set of services that improve the quality and reliability of information used by decision-makers. Assurance does not always involve auditing financial statements. It can be applied to various areas like compliance, risk management, internal processes, or performance indicators.
                  </p>
                </div>
                
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Key Points About Assurance</h2>
                </div>
                <div className="space-y-6">
                  {assurancePoints.map((point, index) => (
                    <div
                      key={index}
                      className="bg-white/5 backdrop-blur-md rounded-xl border border-green-500/30 p-6 hover:bg-white/10 transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-white/10 flex items-center justify-center">
                          {point.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{index + 1}. {point.title}</h3>
                          <p className="text-gray-300 leading-relaxed">{point.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Difference Section */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <Scale className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Difference Between Audit and Assurance</h2>
                </div>
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30 p-8">
                  <div className="space-y-4">
                    {differences.map((diff, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <p className="text-lg text-white pt-1">{diff}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white/5 backdrop-blur-md rounded-xl border border-blue-500/30 p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Why Choose AKOS for Audit & Assurance?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-white mb-1">Qualified Auditors</h3>
                      <p className="text-gray-300 text-sm">Team of experienced CAs with audit expertise</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-white mb-1">Comprehensive Reports</h3>
                      <p className="text-gray-300 text-sm">Detailed audit reports with actionable insights</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-white mb-1">Timely Delivery</h3>
                      <p className="text-gray-300 text-sm">Complete audits within stipulated timelines</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-white mb-1">Confidentiality</h3>
                      <p className="text-gray-300 text-sm">Complete confidentiality of financial information</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar - Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <ServiceConsultationForm
                  serviceName="Audit & Assurance Services"
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
          <Shield className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">
            Need Professional Audit Services?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Get reliable audit and assurance services from our expert team
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
