'use client';

import React from 'react';
import { Scale, Shield, FileText, CheckCircle, Calendar, AlertCircle } from 'lucide-react';
import GetStartedForm from '@/app/components/GetStartedForm';

export default function TrustAnnualCompliancePage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-500/10 p-4 rounded-full border border-blue-500/20">
              <Scale className="w-16 h-16 text-[#3d9cf5]" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Trust Annual Compliance
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Complete guide to annual compliance for trusts under the Indian Trusts Act, 1882
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is a Trust */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">What is a Trust?</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                A trust is a legal arrangement where one party (the "settlor") transfers assets to another party (the "trustee") to hold and manage for the benefit of a third party (the "beneficiary" or "beneficiaries").
              </p>
              
              <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20 mb-6">
                <h3 className="text-xl font-bold mb-4">Governed By:</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>• <strong>The Indian Trusts Act, 1882</strong> - for private trusts</li>
                  <li>• <strong>The Charitable and Religious Trusts Act, 1920</strong></li>
                  <li>• <strong>State-specific Public Trusts Acts</strong> (like Bombay Public Trusts Act, 1950)</li>
                </ul>
              </div>

              <h3 className="text-xl font-bold mb-4">Key Parties in a Trust:</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-purple-500/10 p-4 rounded-lg border border-purple-500/20">
                  <h4 className="font-semibold mb-2">Settlor/Grantor</h4>
                  <p className="text-gray-400 text-sm">Creates the trust and contributes assets</p>
                </div>
                <div className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                  <h4 className="font-semibold mb-2">Trustee</h4>
                  <p className="text-gray-400 text-sm">Manages trust assets with fiduciary duty</p>
                </div>
                <div className="bg-green-500/10 p-4 rounded-lg border border-green-500/20">
                  <h4 className="font-semibold mb-2">Beneficiary</h4>
                  <p className="text-gray-400 text-sm">Person who benefits from trust assets</p>
                </div>
              </div>
            </section>

            {/* Why Compliance is Important */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">Why is Annual Compliance Important?</h2>
              <div className="space-y-4">
                {[
                  {
                    title: '1. Maintaining Legal Standing',
                    desc: 'Regular filings of ITR-7, FCRA forms, and audited statements maintain legal validity. Non-compliance leads to penalties, loss of exemptions, or cancellation of registration.',
                  },
                  {
                    title: '2. Boosting Transparency and Accountability',
                    desc: 'Financial reporting and annual meetings enhance transparency, building trust with beneficiaries, donors, and stakeholders.',
                  },
                  {
                    title: '3. Fulfilling Tax Responsibilities',
                    desc: 'Timely filing of ITR-7, Form 10B, 10BD, and 10BE is paramount for retaining tax-exempt status under Sections 12A and 80G.',
                  },
                  {
                    title: '4. Safeguarding Trust Assets',
                    desc: 'Ensures assets are managed responsibly according to the trust deed, preventing misuse and legal challenges.',
                  },
                  {
                    title: '5. Cultivating Trust and Credibility',
                    desc: 'Transparent operations build trust among beneficiaries and donors, essential for ongoing support and long-term success.',
                  },
                ].map((item, idx) => (
                  <div key={idx} className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Documents Required */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">Documents Required for Annual Compliance</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold mb-3 text-blue-300">1. Core Documents</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {['Trust Deed (original & amended)', 'PAN Card of the trust', 'TAN (if TDS applicable)', 'Registration Certificate', '12A and 80G Certificates'].map((doc, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-blue-500/10 p-3 rounded-lg border border-blue-500/20">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-purple-300">2. Financial Documents</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {['Bank Statements', 'Bills and Vouchers', 'Books of Accounts', 'Investment Records', 'Loan & Advance Records'].map((doc, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-purple-500/10 p-3 rounded-lg border border-purple-500/20">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-green-300">3. Donation & Donor Records</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {['Donor Register with PAN', 'Donation Receipts', 'Grant Agreements', 'Corpus Donation Details'].map((doc, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-green-500/10 p-3 rounded-lg border border-green-500/20">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-3 text-orange-300">4. Foreign Contribution Records (if applicable)</h3>
                  <div className="grid md:grid-cols-2 gap-3">
                    {['FCRA Certificate', 'FCRA Bank Statements', 'Donor Details (foreign)', 'Utilization Reports', 'Form FC-4 (last filed)'].map((doc, idx) => (
                      <div key={idx} className="flex items-center gap-2 bg-orange-500/10 p-3 rounded-lg border border-orange-500/20">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-sm">{doc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Key Annual Compliances */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">Key Annual Compliances</h2>
              
              <div className="space-y-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="text-xl font-bold mb-3">1. Filing Income Tax Return (ITR)</h3>
                  <p className="text-gray-300 mb-3">
                    All trusts must file ITR if total income (before exemptions) exceeds ₹2.5 lakhs. Trusts registered under 12A/12AB and 80G file <strong>ITR-7</strong>.
                  </p>
                  <p className="text-yellow-300 text-sm">
                    <AlertCircle className="w-4 h-4 inline mr-1" />
                    Due Date: October 31st (if audited)
                  </p>
                </div>

                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="text-xl font-bold mb-3">2. Getting Accounts Audited</h3>
                  <p className="text-gray-300 mb-3">
                    Mandatory if income exceeds ₹2.5 lakhs. Audit report must be filed in <strong>Form 10B</strong> (for 12AB trusts) or <strong>Form 10BB</strong> along with ITR.
                  </p>
                </div>

                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="text-xl font-bold mb-3">3. Filing TDS Returns</h3>
                  <p className="text-gray-300 mb-3">
                    If making payments with TDS (salaries, professional fees, rent), file quarterly TDS returns (Form 24Q, 26Q).
                  </p>
                </div>

                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/20">
                  <h3 className="text-xl font-bold mb-3">4. Understanding GST Rules</h3>
                  <p className="text-gray-300 mb-3">
                    Charitable activities by 12AB trusts are GST-exempt. Commercial services are taxable if turnover exceeds ₹40 lakh (goods) or ₹20 lakh (services).
                  </p>
                </div>

                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="text-xl font-bold mb-3">5. FCRA Compliance</h3>
                  <p className="text-gray-300 mb-3">
                    For trusts receiving foreign contributions, file <strong>Form FC-4</strong> by December 31st annually. Even Nil returns must be filed.
                  </p>
                </div>

                <div className="bg-cyan-500/10 p-6 rounded-lg border border-cyan-500/20">
                  <h3 className="text-xl font-bold mb-3">6. Maintaining Books of Accounts</h3>
                  <p className="text-gray-300">
                    Maintain cash book, ledger, journal, bills, receipts, and records. Preserve for at least 10 years from the assessment year end.
                  </p>
                </div>
              </div>
            </section>

            {/* Private vs Public Trust */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">Specific Compliance Considerations</h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="text-2xl font-bold mb-4 text-red-300">Private Trusts</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• For specific individuals/families</li>
                    <li>• Determinable trusts: Taxed in hands of beneficiaries</li>
                    <li>• Discretionary trusts: Taxed at MMR (42.744%)</li>
                    <li>• File <strong>ITR-5</strong> annually</li>
                    <li>• No tax exemptions under 11, 12, 12A, 80G</li>
                    <li>• Exit tax under Section 115TD applies</li>
                  </ul>
                </div>

                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="text-2xl font-bold mb-4 text-green-300">Public Charitable Trusts</h3>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• For public welfare</li>
                    <li>• <strong>12A/12AB:</strong> Income tax exemption</li>
                    <li>• <strong>80G:</strong> Donors claim 50-100% deduction</li>
                    <li>• File <strong>ITR-7</strong> annually</li>
                    <li>• Form 10BD: Statement of donations (by May 31)</li>
                    <li>• Form 10BE: Donation certificates (by May 31)</li>
                    <li>• FCRA: Form FC-4 by Dec 31 (if foreign funds)</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Due Dates Table */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 overflow-x-auto">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5] flex items-center gap-3">
                <Calendar className="w-8 h-8" />
                Important Due Dates for Trust Filings
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left p-3 font-semibold">Compliance Type</th>
                      <th className="text-left p-3 font-semibold">Form No.</th>
                      <th className="text-left p-3 font-semibold">Due Date</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-white/10">
                      <td className="p-3">Quarterly TDS (Non-Salaried)</td>
                      <td className="p-3">Form 26Q/27Q</td>
                      <td className="p-3">Jul 31, Oct 31, Jan 31, May 31</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3">Income Tax Audit Report</td>
                      <td className="p-3">Form 10B/10BB</td>
                      <td className="p-3">September 30</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3">Annual ITR (Audited)</td>
                      <td className="p-3">ITR-7</td>
                      <td className="p-3">October 31</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3">Accumulated Income</td>
                      <td className="p-3">Form 10</td>
                      <td className="p-3">August 31</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3">Statement of Donations</td>
                      <td className="p-3">Form 10BD</td>
                      <td className="p-3">May 31</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3">Certificate to Donors</td>
                      <td className="p-3">Form 10BE</td>
                      <td className="p-3">May 31</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3">FCRA Annual Return</td>
                      <td className="p-3">Form FC-4</td>
                      <td className="p-3">December 31</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </div>

          {/* Sidebar Contact Form */}
          <div className="lg:col-span-1">
            <GetStartedForm 
              serviceName="Trust Annual Compliance"
              serviceCategory="Compliance"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
