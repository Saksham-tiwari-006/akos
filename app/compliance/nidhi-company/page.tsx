'use client';

import React from 'react';
import { Landmark, TrendingUp, CheckCircle, AlertTriangle, Calendar } from 'lucide-react';
import GetStartedForm from '@/app/components/GetStartedForm';

export default function NidhiCompanyCompliancePage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="bg-blue-500/10 p-4 rounded-full border border-blue-500/20">
              <Landmark className="w-16 h-16 text-[#3d9cf5]" />
            </div>
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Nidhi Company Compliances
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Complete guide to compliance requirements for Nidhi Companies under the Companies Act, 2013
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is Nidhi Company */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">What is a Nidhi Company?</h2>
              <p className="text-gray-300 leading-relaxed mb-4">
                A Nidhi Company is an NBFC (Non-Banking Financial Company) registered under the Companies Act, 2013. It operates like a small bank, accepting deposits and providing loans <strong>only to its members</strong>, and does not deal with outsiders.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                The word "Nidhi" means "treasure" in Hindi, reflecting its role in helping members save and grow their money.
              </p>

              <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <TrendingUp className="w-6 h-6 text-blue-400" />
                  Purpose of a Nidhi Company
                </h3>
                <p className="text-gray-300 mb-4">
                  The main objective is to encourage members to develop a habit of saving regularly and provide them with affordable loans when needed. It helps members during emergencies by offering easy access to credit at low-interest rates.
                </p>
                <p className="text-yellow-300 text-sm">
                  ℹ️ Nidhi Companies are especially popular in South India, where around 80% of them are based.
                </p>
              </div>
            </section>

            {/* Pre-Incorporation Compliances */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">Pre-Incorporation Compliances</h2>
              <p className="text-gray-300 mb-6">Before registering the company, you must:</p>
              
              <div className="space-y-4">
                {[
                  { title: 'Company Structure', desc: 'Form a public limited corporation with minimum 3 directors and 7 members' },
                  { title: 'Members and Directors', desc: 'Directors must have DIN, at least 3 directors should be Indian residents' },
                  { title: 'Company Name', desc: 'Name must end with "Nidhi Limited" and be unique' },
                  { title: 'Minimum Capital', desc: 'Company must have at least ₹10 lakh as paid-up share capital' },
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4 items-start bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/20">
                <p className="text-yellow-200 text-sm">
                  <strong>Note:</strong> Nidhi Companies do not require approval from RBI to operate, as they are exempt under the RBI Act, 1934. However, they must strictly comply with the Nidhi Rules, 2014, and amendments including those introduced in 2022.
                </p>
              </div>
            </section>

            {/* First Year Compliance */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">First-Year Compliance After Incorporation</h2>
              <p className="text-gray-300 mb-6">After registration, these are the key rules to follow in the first year:</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-2">Minimum Members</h3>
                  <p className="text-gray-300">Within a year, the firm must have <strong>200 members</strong> at the very least</p>
                </div>
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-2">Net Owned Fund (NOF)</h3>
                  <p className="text-gray-300">Maintain a minimum NOF of <strong>₹20 lakh</strong> after one year</p>
                </div>
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-2">NOF to Deposit Ratio</h3>
                  <p className="text-gray-300">Ratio should be at least <strong>1:20</strong> (for every ₹1 of NOF, max ₹20 in deposits)</p>
                </div>
                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/20">
                  <h3 className="font-semibold text-lg mb-2">Unencumbered Deposits</h3>
                  <p className="text-gray-300">Keep at least <strong>10%</strong> of total deposits as unencumbered term deposits in a scheduled bank</p>
                </div>
              </div>
            </section>

            {/* Annual Compliance Calendar */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5] flex items-center gap-3">
                <Calendar className="w-8 h-8" />
                Annual & Periodic Compliance Calendar
              </h2>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left p-3 font-semibold">Compliance Task</th>
                      <th className="text-left p-3 font-semibold">Form</th>
                      <th className="text-left p-3 font-semibold">Due Date</th>
                      <th className="text-left p-3 font-semibold">Frequency</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-white/10">
                      <td className="p-3">Annual Return of Statutory Compliances</td>
                      <td className="p-3">NDH-1</td>
                      <td className="p-3">Within 90 days after FY ends</td>
                      <td className="p-3">Yearly</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3">Half-Yearly Return</td>
                      <td className="p-3">NDH-3</td>
                      <td className="p-3">Within 30 days after each half-year</td>
                      <td className="p-3">Half-Yearly</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3">Financial Statements</td>
                      <td className="p-3">AOC-4</td>
                      <td className="p-3">Within 30 days of AGM</td>
                      <td className="p-3">Yearly</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3">Annual Return</td>
                      <td className="p-3">MGT-7</td>
                      <td className="p-3">Within 60 days of AGM</td>
                      <td className="p-3">Yearly</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3">Director KYC</td>
                      <td className="p-3">DIR-3 KYC</td>
                      <td className="p-3">By September 30</td>
                      <td className="p-3">Yearly</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-3">Income Tax Return</td>
                      <td className="p-3">ITR-6</td>
                      <td className="p-3">By September 30</td>
                      <td className="p-3">Yearly</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-6 bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                <p className="text-blue-200 text-sm">
                  <strong>Note:</strong> The due date for ITR may vary depending on whether the company requires an audit. Most Nidhi Companies do undergo audits.
                </p>
              </div>
            </section>

            {/* Event-Based Compliances */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">Event-Based Compliances</h2>
              <p className="text-gray-300 mb-6">
                These compliances are required only when specific changes occur in the company. They must be filed within 15 to 30 days depending on the event:
              </p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Change in company name or registered office address',
                  'Appointment, resignation, or removal of directors/auditors',
                  'Increase in authorized share capital',
                  'Transfer of shares',
                  'Change in company objectives',
                  'Appointment of key managerial personnel',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2 bg-blue-500/10 p-4 rounded-lg border border-blue-500/20">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <p className="text-gray-400 text-sm mt-6">
                All event-based changes must be filed with the ROC using appropriate MCA forms (such as DIR-12, MGT-14, INC-22, etc.)
              </p>
            </section>

            {/* Penalties */}
            <section className="bg-red-500/10 backdrop-blur-sm rounded-2xl p-8 border border-red-500/20">
              <h2 className="text-3xl font-bold mb-6 text-red-400 flex items-center gap-3">
                <AlertTriangle className="w-8 h-8" />
                Penalties for Non-Compliance
              </h2>
              
              <div className="space-y-4">
                <div className="bg-red-500/20 p-4 rounded-lg border border-red-500/30">
                  <h3 className="font-semibold text-lg mb-2 text-red-300">₹5,000 per Instance</h3>
                  <p className="text-gray-300 text-sm">Fine for every instance of non-compliance</p>
                </div>
                <div className="bg-red-500/20 p-4 rounded-lg border border-red-500/30">
                  <h3 className="font-semibold text-lg mb-2 text-red-300">₹500 per Day</h3>
                  <p className="text-gray-300 text-sm">If company continues to ignore rules, daily fine until issue is fixed</p>
                </div>
                <div className="bg-red-500/20 p-4 rounded-lg border border-red-500/30">
                  <h3 className="font-semibold text-lg mb-2 text-red-300">Legal Action</h3>
                  <p className="text-gray-300 text-sm">Officers in default (Directors) may face legal actions under Section 406 and other provisions of the Companies Act</p>
                </div>
              </div>

              <div className="mt-6 bg-yellow-500/10 p-4 rounded-lg border border-yellow-500/20">
                <p className="text-yellow-200 text-sm">
                  <strong>Important:</strong> Following Nidhi Company Compliances on time protects the company from fines and keeps member trust strong.
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar Contact Form */}
          <div className="lg:col-span-1">
            <GetStartedForm 
              serviceName="Nidhi Company Compliance"
              serviceCategory="Compliance"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
