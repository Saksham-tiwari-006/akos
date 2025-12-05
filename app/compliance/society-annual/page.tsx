'use client';

import React, { useState } from 'react';
import { FileCheck, Users, Building, CheckCircle, AlertCircle, Calendar } from 'lucide-react';

export default function SocietyAnnualCompliancePage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    file: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, file: e.target.files[0] });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-500/10 p-4 rounded-full border border-blue-500/20">
              <Users className="w-16 h-16 text-[#3d9cf5]" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Society Annual Compliance
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Complete guide to annual compliance requirements for societies registered under the Societies Registration Act, 1860
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is Annual Compliance */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">What is Annual Compliance for a Society?</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                Annual compliance for a society means the set of rules and tasks that a registered society must follow every year. These are legal requirements that help ensure the society runs properly, stays transparent with its finances, and follows the purpose for which it was formed.
              </p>
              <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                <h3 className="text-xl font-bold mb-4">This includes:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Holding regular meetings (like the Annual General Meeting)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Preparing and auditing financial statements</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Filing important documents with the Registrar of Societies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span>Submitting the income tax return, if applicable</span>
                  </li>
                </ul>
              </div>
            </section>

            {/* Importance */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">Importance of Annual Compliance</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: 'Legal Validity', desc: 'Maintains society\'s legal status and prevents registration revocation' },
                  { title: 'Transparency', desc: 'Ensures activities and finances are transparent to members and authorities' },
                  { title: 'Access to Benefits', desc: 'Eligible for tax exemptions, government grants, and institutional services' },
                  { title: 'Smooth Functioning', desc: 'Better internal governance and informed decision-making' },
                  { title: 'Credibility', desc: 'Builds trust among members, stakeholders, and the public' },
                  { title: 'Avoid Penalties', desc: 'Prevents hefty fines and legal complications' },
                ].map((item, idx) => (
                  <div key={idx} className="bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                    <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Must-Do Compliances */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">Must-Do Annual Compliance for Society</h2>

              <div className="space-y-6">
                {/* AGM */}
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <Calendar className="w-6 h-6 text-purple-400" />
                    1. Annual General Meeting (AGM)
                  </h3>
                  <p className="text-gray-300 mb-3">
                    Every society must hold an AGM within 6 months from the end of the financial year (by September 30 for March 31 FY end).
                  </p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Review society's activities and financial statements</li>
                    <li>• Elect new members to the governing body</li>
                    <li>• Discuss and approve the annual budget</li>
                    <li>• Make important decisions concerning society's future</li>
                  </ul>
                </div>

                {/* Annual Returns */}
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    <FileCheck className="w-6 h-6 text-blue-400" />
                    2. Filing Annual Returns with Registrar
                  </h3>
                  <p className="text-gray-300 mb-3">
                    File within 30-60 days after AGM with the Registrar of Societies in your state:
                  </p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• Details about managing committee members</li>
                    <li>• Copy of audited financial statements</li>
                    <li>• Report on society's activities during the year</li>
                  </ul>
                  <p className="text-yellow-300 text-sm mt-3">
                    <AlertCircle className="w-4 h-4 inline mr-1" />
                    Note: This does not apply to Cooperative Housing Societies under the Cooperative Societies Act
                  </p>
                </div>

                {/* Audit */}
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="text-xl font-bold mb-3">3. Getting Accounts Audited</h3>
                  <p className="text-gray-300 mb-3">
                    Societies must get their financial accounts audited by a qualified Chartered Accountant. The audit ensures:
                  </p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>✓ Accuracy and fairness of financial statements</li>
                    <li>✓ Promoting transparency and accountability</li>
                    <li>✓ Detection of irregularities</li>
                  </ul>
                </div>

                {/* ITR Filing */}
                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/20">
                  <h3 className="text-xl font-bold mb-3">4. Income Tax Return Filing</h3>
                  <p className="text-gray-300 mb-3">
                    Generally required for all societies, even if income is tax-exempt:
                  </p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• <strong>Form:</strong> ITR-5 (for firms, AOPs, and BOIs)</li>
                    <li>• <strong>Deadline:</strong> 31st October (for societies requiring audit)</li>
                    <li>• <strong>Purpose:</strong> Maintain complete financial records with tax authorities</li>
                  </ul>
                </div>

                {/* 12A and 80G */}
                <div className="bg-cyan-500/10 p-6 rounded-lg border border-cyan-500/20">
                  <h3 className="text-xl font-bold mb-3">5. Form 12A and 80G for Tax Benefits</h3>
                  <p className="text-gray-300 mb-3">
                    For charitable or religious societies:
                  </p>
                  <ul className="space-y-2 text-gray-300 text-sm">
                    <li>• <strong>12A Registration:</strong> Grants tax exemption on society's income</li>
                    <li>• <strong>80G Registration:</strong> Allows donors to claim tax deductions</li>
                    <li>• Both valid for 5 years, require renewal</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Other Compliances */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">Other Important Compliances</h2>

              <div className="space-y-4">
                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <h3 className="font-semibold text-lg mb-2">1. GST Registration and Filing</h3>
                  <p className="text-gray-400 text-sm">
                    Mandatory if turnover exceeds ₹20 lakh (services) or ₹40 lakh (goods). Housing societies must register if monthly contribution exceeds ₹7,500 per member.
                  </p>
                </div>

                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <h3 className="font-semibold text-lg mb-2">2. TDS Compliance</h3>
                  <p className="text-gray-400 text-sm mb-2">
                    Deduct TDS on rent, professional fees, contractor payments, and interest. File quarterly returns:
                  </p>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li>• Form 24Q (TDS on salaries)</li>
                    <li>• Form 26Q (TDS on payments to residents)</li>
                    <li>• Form 27Q (TDS on non-resident payments)</li>
                  </ul>
                </div>

                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <h3 className="font-semibold text-lg mb-2">3. Maintaining Records and Registers</h3>
                  <p className="text-gray-400 text-sm">
                    Membership registers, meeting minutes books, account books, fixed asset registers, receipt books, and voucher files.
                  </p>
                </div>

                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <h3 className="font-semibold text-lg mb-2">4. Renewing Society's Registration</h3>
                  <p className="text-gray-400 text-sm">
                    While no central renewal requirement exists under the 1860 Act, some states mandate re-registration. Check state-specific rules.
                  </p>
                </div>

                <div className="bg-white/5 p-4 rounded-lg border border-white/10">
                  <h3 className="font-semibold text-lg mb-2">5. Reporting Changes</h3>
                  <p className="text-gray-400 text-sm">
                    Report changes in governing body members or registered address to the Registrar of Societies promptly.
                  </p>
                </div>
              </div>
            </section>

            {/* Compliance Checklist Table */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 overflow-x-auto">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">Annual Compliance Checklist</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left p-3 font-semibold">Compliance Area</th>
                      <th className="text-left p-3 font-semibold">Requirement</th>
                      <th className="text-left p-3 font-semibold">Due Date / Frequency</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-white/10">
                      <td className="p-3">AGM</td>
                      <td className="p-3">Hold AGM to approve accounts</td>
                      <td className="p-3">Within 6 months from FY end</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3">Audit</td>
                      <td className="p-3">Prepare audited financial statements</td>
                      <td className="p-3">Before AGM</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3">Annual Return</td>
                      <td className="p-3">Submit to Registrar</td>
                      <td className="p-3">Within 30-60 days after AGM</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3">ITR Filing</td>
                      <td className="p-3">File ITR-5</td>
                      <td className="p-3">By Oct 31</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3">GST (if applicable)</td>
                      <td className="p-3">GSTR-1, GSTR-3B, GSTR-9</td>
                      <td className="p-3">Monthly/Quarterly/Annual</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3">TDS (if applicable)</td>
                      <td className="p-3">Deposit & file quarterly returns</td>
                      <td className="p-3">Jul 31, Oct 31, Jan 31, May 31</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Documents Required */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">Documents Required for Annual Filings</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Audited Financial Statements',
                  'Audit Report',
                  'AGM Notice & Minutes',
                  'List of Office Bearers',
                  'PAN and TAN',
                  'Bank Account Statements',
                  'Supporting Bills & Receipts',
                  'GST Documents',
                  'TDS Filings',
                  'Registration Certificate',
                  'Proof of Registered Office',
                  'Annual Activity Report',
                ].map((doc, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-blue-500/10 p-3 rounded-lg border border-blue-500/20">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-sm">{doc}</span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar Contact Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-center">Get Expert Assistance</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d9cf5] text-white"
                    placeholder="Enter your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d9cf5] text-white"
                    placeholder="Enter your phone"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d9cf5] text-white resize-none"
                    placeholder="How can we help you?"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="file" className="block text-sm font-medium mb-2">
                    Attach Document (Optional)
                  </label>
                  <input
                    type="file"
                    id="file"
                    onChange={handleFileChange}
                    className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d9cf5] text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#3d9cf5] file:text-white hover:file:bg-[#2d7cd5] file:cursor-pointer"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-[#3d9cf5] hover:bg-[#2d7cd5] text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Submit Request
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
