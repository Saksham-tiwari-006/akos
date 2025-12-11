'use client';

import React from 'react';
import { Handshake, Shield, FileText, TrendingUp, CheckCircle, Award, Users, Clock, DollarSign } from 'lucide-react';
import GetStartedForm from '@/app/components/GetStartedForm';

export default function PartnershipAnnualCompliancePage() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#3d9cf5]/20 rounded-full mb-6">
            <Handshake className="w-8 h-8 text-[#3d9cf5]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Partnership Firm Annual Compliance
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Complete guide to annual compliance requirements for partnership firms including tax, GST, and regulatory obligations
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Information */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is Annual Compliance */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-4 text-[#3d9cf5]">What is Annual Compliance for Partnership Firm?</h2>
              <div className="prose prose-invert max-w-none space-y-4">
                <p className="text-gray-300">
                  Annual compliance for a partnership firm involves fulfilling various legal and financial obligations to ensure its continued operation and adherence to Indian regulations. The primary requirements include filing the firm's income tax return (Form 5) and individual partners' tax returns, along with maintaining proper books of accounts.
                </p>
                <p className="text-gray-300">
                  Depending on the firm's turnover and nature of business, it may also need to comply with Goods and Services Tax (GST) regulations, including filing periodic GST returns.
                </p>
                <p className="text-gray-300">
                  Additionally, if the partnership firm's turnover exceeds the prescribed limit (currently ₹1 crore, or ₹10 crores for firms with less than 5% cash transactions), a tax audit by a Chartered Accountant is mandatory.
                </p>
              </div>
            </div>

            {/* Benefits of Compliance */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">Benefits of Compliance for Partnership Firms</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <FileText className="w-6 h-6" />,
                    title: 'Transparency',
                    description: 'Maintain accurate and up-to-date financial and operational records, fostering transparency and cultivating trust among partners, creditors, and investors.'
                  },
                  {
                    icon: <Shield className="w-6 h-6" />,
                    title: 'Good Governance',
                    description: 'Promotes sound governance practices, ensuring firm affairs are managed ethically and in alignment with partners\' best interests.'
                  },
                  {
                    icon: <Award className="w-6 h-6" />,
                    title: 'Credibility',
                    description: 'Compliant firms are viewed as more credible by banks, financial institutions, suppliers, and customers, enhancing reputation and business relationships.'
                  },
                  {
                    icon: <TrendingUp className="w-6 h-6" />,
                    title: 'Risk Mitigation',
                    description: 'Helps identify and reduce potential risks associated with legal, financial, and regulatory obligations before they escalate.'
                  },
                  {
                    icon: <DollarSign className="w-6 h-6" />,
                    title: 'Access to Funding',
                    description: 'Firms with consistent compliance are favorably positioned to attract funding from investors, lenders, or venture capitalists.'
                  },
                  {
                    icon: <CheckCircle className="w-6 h-6" />,
                    title: 'Business Continuity',
                    description: 'Diligent compliance contributes to uninterrupted business operations, preventing disruptions from legal disputes or penalties.'
                  }
                ].map((benefit, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
                    <div className="text-[#3d9cf5] mb-3">{benefit.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Annual Compliances Involved */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">Annual Compliances Involved</h2>
              <div className="space-y-4">
                {[
                  {
                    title: 'Income Tax Return Filing',
                    description: 'Partnership firms must file income tax returns using Form ITR-5 by the designated due date. The return reports the firm\'s income and tax liability for the financial year.',
                    icon: <FileText className="w-6 h-6" />,
                    color: 'blue'
                  },
                  {
                    title: 'GST Return Filing',
                    description: 'If the firm holds GST registration, it must file returns (GSTR-1 for outward supplies and GSTR-3B for summary). Filing frequency can be monthly or quarterly based on turnover.',
                    icon: <CheckCircle className="w-6 h-6" />,
                    color: 'green'
                  },
                  {
                    title: 'TDS Return Filing',
                    description: 'Firms making certain payments above specified limits must deduct TDS at prescribed rates and file TDS returns periodically (quarterly) using forms like 24Q or 26Q.',
                    icon: <DollarSign className="w-6 h-6" />,
                    color: 'yellow'
                  },
                  {
                    title: 'Tax Audit',
                    description: 'Mandatory if gross receipts/turnover exceed ₹1 crore (₹10 crore for firms with less than 5% cash transactions). Audit report (Form 3CD) must be filed with ITR by due date.',
                    icon: <Award className="w-6 h-6" />,
                    color: 'purple'
                  },
                  {
                    title: 'Maintaining Financial Records',
                    description: 'Fundamental requirement to maintain proper books of accounts including ledgers, journals, vouchers, invoices, and bank statements to support tax filings and audits.',
                    icon: <Shield className="w-6 h-6" />,
                    color: 'orange'
                  },
                  {
                    title: 'EPF/ESI (if applicable)',
                    description: 'If employee count reaches statutory threshold, comply with Employee Provident Fund and Employee State Insurance schemes including registration, contributions, and filing returns.',
                    icon: <Users className="w-6 h-6" />,
                    color: 'red'
                  }
                ].map((compliance, index) => (
                  <div key={index} className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-5">
                    <div className="flex items-start gap-4">
                      <div className="text-[#3d9cf5] flex-shrink-0">{compliance.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{compliance.title}</h3>
                        <p className="text-gray-400 text-sm">{compliance.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Documents Required */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">Documents Required for Compliance</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Partnership Deed',
                  'PAN Card of the Firm',
                  'PAN Card of all Partners',
                  'Address Proof of all Partners',
                  'GST Registration Certificate (if applicable)',
                  'Bank Account Statements of the Firm',
                  'Financial Statements (Balance Sheet, P&L)',
                  'TAN (if deducting TDS/TCS)'
                ].map((doc, index) => (
                  <div key={index} className="flex items-start gap-3 bg-slate-800/30 rounded-lg p-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{doc}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Due Dates */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">Key Compliance Due Dates 2024-25</h2>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-lg p-5">
                  <h3 className="text-lg font-bold text-blue-400 mb-3 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Income Tax
                  </h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex justify-between">
                      <span>Advance Tax Instalment 1:</span>
                      <span className="font-semibold">June 15, 2024 (15%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Advance Tax Instalment 2:</span>
                      <span className="font-semibold">Sep 15, 2024 (45%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Advance Tax Instalment 3:</span>
                      <span className="font-semibold">Dec 15, 2024 (75%)</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Advance Tax Instalment 4:</span>
                      <span className="font-semibold">Mar 15, 2025 (100%)</span>
                    </div>
                    <div className="flex justify-between border-t border-blue-500/20 pt-2 mt-2">
                      <span>Tax Audit Report (Form 3CD):</span>
                      <span className="font-semibold">Sep 30, 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ITR Filing (Non-Audit Cases):</span>
                      <span className="font-semibold">Sep 15, 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ITR Filing (Audit Cases):</span>
                      <span className="font-semibold">Oct 31, 2025</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-900/30 to-green-800/20 border border-green-500/30 rounded-lg p-5">
                  <h3 className="text-lg font-bold text-green-400 mb-3 flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    GST Compliance
                  </h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex justify-between">
                      <span>GSTR-1 (Monthly Filers):</span>
                      <span className="font-semibold">11th of following month</span>
                    </div>
                    <div className="flex justify-between">
                      <span>GSTR-3B (Monthly Filers):</span>
                      <span className="font-semibold">20th of following month</span>
                    </div>
                    <div className="flex justify-between">
                      <span>GSTR-1 (Quarterly - QRMP):</span>
                      <span className="font-semibold">13th of month after quarter</span>
                    </div>
                    <div className="flex justify-between">
                      <span>GSTR-3B (Quarterly - QRMP):</span>
                      <span className="font-semibold">22nd/24th after quarter</span>
                    </div>
                    <div className="flex justify-between border-t border-green-500/20 pt-2 mt-2">
                      <span>GSTR-9 (Annual Return):</span>
                      <span className="font-semibold">Dec 31, 2025</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-lg p-5">
                  <h3 className="text-lg font-bold text-purple-400 mb-3 flex items-center gap-2">
                    <DollarSign className="w-5 h-5" />
                    TDS Compliance
                  </h3>
                  <div className="space-y-2 text-sm text-gray-300">
                    <div className="flex justify-between">
                      <span>TDS Payment:</span>
                      <span className="font-semibold">7th of next month</span>
                    </div>
                    <div className="flex justify-between">
                      <span>TDS Returns Q1 (Apr-Jun):</span>
                      <span className="font-semibold">July 31, 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span>TDS Returns Q2 (Jul-Sep):</span>
                      <span className="font-semibold">Oct 31, 2025</span>
                    </div>
                    <div className="flex justify-between">
                      <span>TDS Returns Q3 (Oct-Dec):</span>
                      <span className="font-semibold">Jan 31, 2026</span>
                    </div>
                    <div className="flex justify-between">
                      <span>TDS Returns Q4 (Jan-Mar):</span>
                      <span className="font-semibold">May 31, 2026</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Filing Process */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">Annual Return Filing Process</h2>
              <div className="space-y-3">
                {[
                  {
                    step: '1',
                    title: 'Review Compliance Requirements',
                    description: 'Understand obligations including income tax, GST, EPF, ESI, Professional Tax, and RoF intimations.'
                  },
                  {
                    step: '2',
                    title: 'Gather Documents',
                    description: 'Collect Partnership Deed, PAN cards, bank statements, invoices, vouchers, salary details, and TDS/GST records.'
                  },
                  {
                    step: '3',
                    title: 'Prepare Financial Statements',
                    description: 'Create detailed Profit & Loss Account and Balance Sheet for the financial year.'
                  },
                  {
                    step: '4',
                    title: 'Income Tax Filing',
                    description: 'File ITR-5 for the partnership firm. Undergo tax audit if turnover exceeds prescribed limits.'
                  },
                  {
                    step: '5',
                    title: 'GST Filing',
                    description: 'File monthly/quarterly GSTR-1 and GSTR-3B, and annual GSTR-9 if applicable.'
                  },
                  {
                    step: '6',
                    title: 'Statutory Filings',
                    description: 'File EPF ECR, ESI returns, TDS returns (Form 24Q, 26Q) with respective payments.'
                  },
                  {
                    step: '7',
                    title: 'Review and Verification',
                    description: 'Double-check all documents and filings for accuracy and compliance with applicable laws.'
                  }
                ].map((process, index) => (
                  <div key={index} className="flex items-start gap-4 bg-slate-800/50 border border-slate-700/50 rounded-lg p-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-[#3d9cf5] rounded-full flex items-center justify-center font-bold text-sm">
                      {process.step}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{process.title}</h3>
                      <p className="text-gray-400 text-sm">{process.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-1">
            <GetStartedForm 
              serviceName="Partnership Annual Filing"
              serviceCategory="Compliance"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
