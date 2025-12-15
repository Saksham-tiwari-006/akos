'use client';

import React, { useState } from 'react';

export default function TDSReturnFilingPage() {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    document: null as File | null,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you! We will contact you shortly.');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, document: e.target.files[0] });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-slate-900 text-white py-20">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">TDS Return Filing Services</h1>
            <p className="text-xl text-gray-300">
              Expert TDS compliance and return filing services for individuals and businesses
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* What is TDS Return Filing */}
            <section className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-white mb-6">What is TDS Return Filing?</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                A TDS return is a quarterly statement that summarizes all Tax Deducted at Source (TDS) transactions for a specific period. A TDS return includes key information such as:
              </p>
              <ul className="space-y-3 text-gray-300 ml-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  The PAN of both the deductor and the deductee.
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Details of the TDS paid to the government.
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Challan information for the tax deposited.
                </li>
              </ul>
              <p className="text-gray-300 mt-4 leading-relaxed">
                All information provided in the TDS return is also reflected in the payee's Form 26AS. Filing a TDS return is mandatory for all individuals and entities who are required to deduct tax under the provisions of the Income Tax Act.
              </p>
            </section>

            {/* Revised TDS Return */}
            <section className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-white mb-6">What is Revised TDS Return?</h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                A revised TDS return is a corrected statement submitted to fix errors in an original return. Filing a revised return is necessary to correct inaccuracies such as:
              </p>
              <ul className="space-y-3 text-gray-300 ml-6">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Incorrect PAN details.
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Errors in deductee information.
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  Wrong TDS amount or challan details.
                </li>
              </ul>
              <p className="text-gray-300 mt-4 leading-relaxed">
                This revised submission ensures that accurate data is recorded with the Income Tax Department, helping deductees claim their TDS credit smoothly. Inaccurate TDS returns can result in penalties, delays, or tax disputes. Promptly filing a revised return guarantees compliance and prevents avoidable fines. This return can be filed online via the TRACES portal once corrections are completed.
              </p>
            </section>

            {/* Purpose of Filing TDS Return */}
            <section className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Purpose of Filing TDS Return</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                The purpose of filing a TDS return is multifaceted, serving both the Income Tax Department (Government) and the taxpayers (deductors and deductees):
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">For the Government:</h3>
                  <ul className="space-y-3 text-gray-300 ml-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <div>
                        <strong>Ensuring Timely Tax Collection:</strong> TDS is a mechanism for collecting income tax at the very source of income generation (e.g., salary, rent, professional fees). Filing TDS returns ensures that the tax deducted by the deductor is promptly deposited with the government, providing a consistent and stable revenue stream throughout the year.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <div>
                        <strong>Preventing Tax Evasion:</strong> By requiring deductors to withhold tax at the source and report these deductions, TDS helps expand the tax net and makes it more difficult for recipients of income to evade tax liability. The detailed information in the TDS returns helps the Income Tax Department track income streams.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <div>
                        <strong>Facilitating Tax Administration:</strong> TDS returns provide the Income Tax Department with crucial data about various transactions, aiding in reconciliation, auditing, and overall tax administration. This information is reflected in the deductee's Form 26AS, allowing the department to verify reported income and TDS credits.
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">For Deductors (those deducting tax):</h3>
                  <ul className="space-y-3 text-gray-300 ml-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <div>
                        <strong>Compliance with Legal Obligations:</strong> Filing TDS returns is a mandatory legal requirement under the Income Tax Act, 1961. Timely and accurate filing ensures compliance and avoids penalties, interest, and even prosecution for non-compliance.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <div>
                        <strong>Maintaining Records and Transparency:</strong> TDS returns serve as official documentation of tax deductions and deposits. This helps deductors maintain clear financial records and demonstrates transparency in their tax practices.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <div>
                        <strong>Avoiding Penalties:</strong> Late or incorrect filing of TDS returns can lead to significant penalties and interest charges. Prompt filing ensures that deductors avoid these financial repercussions.
                      </div>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-3">For Deductees (those from whom tax is deducted):</h3>
                  <ul className="space-y-3 text-gray-300 ml-6">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <div>
                        <strong>Claiming Tax Credit:</strong> The TDS deducted from a deductee's income is a pre-payment of their tax liability. The TDS return filed by the deductor ensures that this deducted amount is accurately reflected in the deductor's tax records (like Form 26AS), allowing them to claim credit for it when filing their own Income Tax Return (ITR). This reduces their final tax payable or enables them to claim a refund if excess TDS was deducted.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <div>
                        <strong>Verification of Income:</strong> The details in the TDS return and Form 26AS provide deductees with a record of their income on which tax has been deducted, aiding in the accurate reporting of income in their ITR.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* TDS Changes from April 2025 */}
            <section className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-white mb-6">TDS Changes from 1st April, 2025</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                The government has revised the threshold limits for TDS deduction under various sections, effective from April 1st, 2025. The relaxed threshold limits are as follows:
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-slate-900/50 rounded-lg overflow-hidden">
                  <thead>
                    <tr className="bg-gradient-to-r from-primary to-blue-500 text-white">
                      <th className="px-6 py-4 text-left font-semibold">Section</th>
                      <th className="px-6 py-4 text-left font-semibold">Till 31st March, 2025</th>
                      <th className="px-6 py-4 text-left font-semibold">From 1st April, 2025</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700">
                    <tr className="hover:bg-blue-900/30 transition-colors text-gray-300">
                      <td className="px-6 py-4 font-medium">193 - Interest on securities</td>
                      <td className="px-6 py-4">NIL</td>
                      <td className="px-6 py-4">10,000</td>
                    </tr>
                    <tr className="hover:bg-blue-900/30 transition-colors text-gray-300">
                      <td className="px-6 py-4 font-medium">194A - Interest other than Interest on securities</td>
                      <td className="px-6 py-4">
                        <div className="space-y-1 text-sm">
                          <p><strong>Bank/Co-op/Post Office:</strong></p>
                          <p>• Senior citizens: ₹50,000</p>
                          <p>• Others: ₹40,000</p>
                          <p><strong>Others:</strong> ₹5,000</p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1 text-sm">
                          <p><strong>Bank/Co-op/Post Office:</strong></p>
                          <p>• Senior citizens: ₹1,00,000</p>
                          <p>• Others: ₹50,000</p>
                          <p><strong>Others:</strong> ₹10,000</p>
                        </div>
                      </td>
                    </tr>
                    <tr className="hover:bg-blue-900/30 transition-colors text-gray-300">
                      <td className="px-6 py-4 font-medium">194 – Dividend, for an individual shareholder</td>
                      <td className="px-6 py-4">₹5,000</td>
                      <td className="px-6 py-4">₹10,000</td>
                    </tr>
                    <tr className="hover:bg-blue-900/30 transition-colors text-gray-300">
                      <td className="px-6 py-4 font-medium">194K - Income in respect of units of a mutual fund</td>
                      <td className="px-6 py-4">₹5,000</td>
                      <td className="px-6 py-4">₹10,000</td>
                    </tr>
                    <tr className="hover:bg-blue-900/30 transition-colors text-gray-300">
                      <td className="px-6 py-4 font-medium">194B - Winnings from lottery, crossword puzzle, etc.</td>
                      <td className="px-6 py-4">Aggregate exceeding ₹10,000/- during FY</td>
                      <td className="px-6 py-4">₹10,000/- per transaction</td>
                    </tr>
                    <tr className="hover:bg-blue-900/30 transition-colors text-gray-300">
                      <td className="px-6 py-4 font-medium">194BB - Winnings from a horse race</td>
                      <td className="px-6 py-4">Aggregate exceeding ₹10,000/- during FY</td>
                      <td className="px-6 py-4">₹10,000/- per transaction</td>
                    </tr>
                    <tr className="hover:bg-blue-900/30 transition-colors text-gray-300">
                      <td className="px-6 py-4 font-medium">194D - Insurance commission</td>
                      <td className="px-6 py-4">₹15,000</td>
                      <td className="px-6 py-4">₹20,000</td>
                    </tr>
                    <tr className="hover:bg-blue-900/30 transition-colors text-gray-300">
                      <td className="px-6 py-4 font-medium">194G - Commission, prize on lottery tickets</td>
                      <td className="px-6 py-4">₹15,000</td>
                      <td className="px-6 py-4">₹20,000</td>
                    </tr>
                    <tr className="hover:bg-blue-900/30 transition-colors text-gray-300">
                      <td className="px-6 py-4 font-medium">194H - Commission or brokerage</td>
                      <td className="px-6 py-4">₹15,000</td>
                      <td className="px-6 py-4">₹20,000</td>
                    </tr>
                    <tr className="hover:bg-blue-900/30 transition-colors text-gray-300">
                      <td className="px-6 py-4 font-medium">194-I - Rent</td>
                      <td className="px-6 py-4">₹2,40,000 per FY</td>
                      <td className="px-6 py-4">₹50,000 per month</td>
                    </tr>
                    <tr className="hover:bg-blue-900/30 transition-colors text-gray-300">
                      <td className="px-6 py-4 font-medium">194J - Fee for professional or technical services</td>
                      <td className="px-6 py-4">₹30,000</td>
                      <td className="px-6 py-4">₹50,000</td>
                    </tr>
                    <tr className="hover:bg-blue-900/30 transition-colors text-gray-300">
                      <td className="px-6 py-4 font-medium">194LA - Enhanced compensation</td>
                      <td className="px-6 py-4">₹2,50,000</td>
                      <td className="px-6 py-4">₹5,00,000</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-400 mt-4 italic">
                Note: These changes were proposed in the Finance Bill, 2025, and are subject to final legislation. Please consult the official Income Tax portal for the latest effective rates.
              </p>
            </section>

            {/* TDS Rate Chart - Residents */}
            <section className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-white mb-6">TDS Rate Chart – Applicable for Residents</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Below are the applicable TDS rates when payment is made to a resident individual or entity:
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse bg-slate-900/50 rounded-lg overflow-hidden text-sm">
                  <thead>
                    <tr className="bg-gradient-to-r from-primary to-blue-500 text-white">
                      <th className="px-4 py-3 text-left font-semibold">Section</th>
                      <th className="px-4 py-3 text-left font-semibold">Nature of Transaction</th>
                      <th className="px-4 py-3 text-left font-semibold">Threshold Limit (₹)</th>
                      <th className="px-4 py-3 text-left font-semibold">TDS Rate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-700">
                    <tr className="hover:bg-blue-900/30 transition-colors text-gray-300">
                      <td className="px-4 py-3 font-medium">192</td>
                      <td className="px-4 py-3">Salary Payment</td>
                      <td className="px-4 py-3">Basic exemption limit</td>
                      <td className="px-4 py-3">As per IT Slab</td>
                    </tr>
                    <tr className="hover:bg-blue-900/30 transition-colors text-gray-300">
                      <td className="px-4 py-3 font-medium">192A</td>
                      <td className="px-4 py-3">Premature EPF withdrawal</td>
                      <td className="px-4 py-3">50,000</td>
                      <td className="px-4 py-3">With PAN: 10%, Without: 20%</td>
                    </tr>
                    <tr className="hover:bg-blue-900/30 transition-colors text-gray-300">
                      <td className="px-4 py-3 font-medium">193</td>
                      <td className="px-4 py-3">Interest on securities</td>
                      <td className="px-4 py-3">10,000</td>
                      <td className="px-4 py-3">10%</td>
                    </tr>
                    <tr className="hover:bg-blue-900/30 transition-colors text-gray-300">
                      <td className="px-4 py-3 font-medium">194</td>
                      <td className="px-4 py-3">Dividend Payment</td>
                      <td className="px-4 py-3">10,000</td>
                      <td className="px-4 py-3">10%</td>
                    </tr>
                    <tr className="hover:bg-blue-900/30 transition-colors text-gray-300">
                      <td className="px-4 py-3 font-medium">194A</td>
                      <td className="px-4 py-3">Interest (bank/post office)</td>
                      <td className="px-4 py-3">Senior: 1,00,000; Others: 50,000</td>
                      <td className="px-4 py-3">10%</td>
                    </tr>
                    <tr className="hover:bg-blue-900/30 transition-colors text-gray-300">
                      <td className="px-4 py-3 font-medium">194B</td>
                      <td className="px-4 py-3">Lottery, card games</td>
                      <td className="px-4 py-3">10,000 per transaction</td>
                      <td className="px-4 py-3">30%</td>
                    </tr>
                    <tr className="hover:bg-blue-900/30 transition-colors text-gray-300">
                      <td className="px-4 py-3 font-medium">194BA</td>
                      <td className="px-4 py-3">Online Gaming</td>
                      <td className="px-4 py-3">No threshold</td>
                      <td className="px-4 py-3">30%</td>
                    </tr>
                    <tr className="hover:bg-blue-900/30 transition-colors text-gray-300">
                      <td className="px-4 py-3 font-medium">194BB</td>
                      <td className="px-4 py-3">Horse Races</td>
                      <td className="px-4 py-3">10,000 per transaction</td>
                      <td className="px-4 py-3">30%</td>
                    </tr>
                    <tr className="hover:bg-blue-900/30 transition-colors text-gray-300">
                      <td className="px-4 py-3 font-medium">194C</td>
                      <td className="px-4 py-3">Contract Payment</td>
                      <td className="px-4 py-3">Single: 30,000; Aggregate: 1,00,000</td>
                      <td className="px-4 py-3">1% / 2%</td>
                    </tr>
                    <tr className="hover:bg-blue-900/30 transition-colors text-gray-300">
                      <td className="px-4 py-3 font-medium">194D</td>
                      <td className="px-4 py-3">Insurance Commission</td>
                      <td className="px-4 py-3">20,000</td>
                      <td className="px-4 py-3">5%</td>
                    </tr>
                    <tr className="hover:bg-blue-900/30 transition-colors text-gray-300">
                      <td className="px-4 py-3 font-medium">194DA</td>
                      <td className="px-4 py-3">Life Insurance payout</td>
                      <td className="px-4 py-3">1,00,000</td>
                      <td className="px-4 py-3">5%</td>
                    </tr>
                    <tr className="hover:bg-blue-900/30 transition-colors text-gray-300">
                      <td className="px-4 py-3 font-medium">194EE</td>
                      <td className="px-4 py-3">NSS Withdrawal</td>
                      <td className="px-4 py-3">2,500</td>
                      <td className="px-4 py-3">10%</td>
                    </tr>
                    <tr className="hover:bg-blue-900/30 transition-colors text-gray-300">
                      <td className="px-4 py-3 font-medium">194G</td>
                      <td className="px-4 py-3">Lottery ticket commission</td>
                      <td className="px-4 py-3">15,000</td>
                      <td className="px-4 py-3">5%</td>
                    </tr>
                    <tr className="hover:bg-blue-900/30 transition-colors text-gray-300">
                      <td className="px-4 py-3 font-medium">194H</td>
                      <td className="px-4 py-3">Commission or Brokerage</td>
                      <td className="px-4 py-3">15,000</td>
                      <td className="px-4 py-3">5%</td>
                    </tr>
                    <tr className="hover:bg-blue-900/30 transition-colors text-gray-300">
                      <td className="px-4 py-3 font-medium">194-I</td>
                      <td className="px-4 py-3">Rent</td>
                      <td className="px-4 py-3">2,40,000 p.a.</td>
                      <td className="px-4 py-3">2% (Plant) / 10% (Land/Building)</td>
                    </tr>
                    <tr className="hover:bg-blue-900/30 transition-colors text-gray-300">
                      <td className="px-4 py-3 font-medium">194-IA</td>
                      <td className="px-4 py-3">Property Transfer</td>
                      <td className="px-4 py-3">50 lakhs</td>
                      <td className="px-4 py-3">1%</td>
                    </tr>
                    <tr className="hover:bg-blue-900/30 transition-colors text-gray-300">
                      <td className="px-4 py-3 font-medium">194-IB</td>
                      <td className="px-4 py-3">Rent by Individual/HUF</td>
                      <td className="px-4 py-3">50,000 per month</td>
                      <td className="px-4 py-3">5%</td>
                    </tr>
                    <tr className="hover:bg-blue-900/30 transition-colors text-gray-300">
                      <td className="px-4 py-3 font-medium">194J</td>
                      <td className="px-4 py-3">Professional/Technical Services</td>
                      <td className="px-4 py-3">50,000</td>
                      <td className="px-4 py-3">10% / 2%</td>
                    </tr>
                    <tr className="hover:bg-blue-900/30 transition-colors text-gray-300">
                      <td className="px-4 py-3 font-medium">194K</td>
                      <td className="px-4 py-3">Mutual Fund income</td>
                      <td className="px-4 py-3">10,000</td>
                      <td className="px-4 py-3">10%</td>
                    </tr>
                    <tr className="hover:bg-blue-900/30 transition-colors text-gray-300">
                      <td className="px-4 py-3 font-medium">194M</td>
                      <td className="px-4 py-3">Payments by Individual/HUF</td>
                      <td className="px-4 py-3">50 lakhs</td>
                      <td className="px-4 py-3">5%</td>
                    </tr>
                    <tr className="hover:bg-blue-900/30 transition-colors text-gray-300">
                      <td className="px-4 py-3 font-medium">194O</td>
                      <td className="px-4 py-3">E-commerce operators</td>
                      <td className="px-4 py-3">5 lakhs</td>
                      <td className="px-4 py-3">0.10%</td>
                    </tr>
                    <tr className="hover:bg-blue-900/30 transition-colors text-gray-300">
                      <td className="px-4 py-3 font-medium">194Q</td>
                      <td className="px-4 py-3">Purchase of Goods</td>
                      <td className="px-4 py-3">50 lakhs</td>
                      <td className="px-4 py-3">0.10%</td>
                    </tr>
                    <tr className="hover:bg-blue-900/30 transition-colors text-gray-300">
                      <td className="px-4 py-3 font-medium">194S</td>
                      <td className="px-4 py-3">Virtual Digital Assets</td>
                      <td className="px-4 py-3">10,000 - 50,000</td>
                      <td className="px-4 py-3">1%</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* TDS Return Forms */}
            <section className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-white mb-6">Different TDS Return Forms/Certificates</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                In India, TDS is a system where a portion of income is deducted as tax at the very source of payment. To facilitate this, the Income Tax Department prescribes various forms for filing TDS returns and for issuing TDS certificates.
              </p>

              <div className="space-y-6">
                {/* Form 24Q */}
                <div className="border-l-4 border-primary pl-6 py-2">
                  <h3 className="text-xl font-bold text-white mb-2">FORM 24Q</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Form 24Q is a quarterly TDS return filed for salaries paid to resident employees under Section 192 of the Income Tax Act. Employers must provide details like the salary paid, the TDS deducted, and information about both the deductor and the deductee. It comprises two annexures—Annexure I with deductor/deductee/challan info, and Annexure II with employee salary details. Accurate and timely filing of Form 24Q is necessary for issuing Form 16 to employees and helps avoid penalties for non-compliance.
                  </p>
                </div>

                {/* Form 26Q */}
                <div className="border-l-4 border-blue-500 pl-6 py-2">
                  <h3 className="text-xl font-bold text-white mb-2">FORM 26Q</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Form 26Q is a quarterly TDS return filed for payments made to resident Indians other than salaries. These payments may include interest, commission, professional fees, and rent. The form captures PAN of the deductee, amount paid, TDS details, and challan info. Proper filing of Form 26Q ensures that the deductees get TDS credit in their ITR. Incorrect or delayed filing may lead to penalties and interest.
                  </p>
                </div>

                {/* Form 27Q */}
                <div className="border-l-4 border-green-500 pl-6 py-2">
                  <h3 className="text-xl font-bold text-white mb-2">FORM 27Q</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Form 27Q is used for quarterly TDS filing on payments made to non-resident Indians and foreign entities. These payments include interest, dividends, royalties, and technical service fees. The form requires PAN, payment amount, TDS deducted, and challan details. Filing Form 27Q accurately ensures legal compliance, prevents penalties, and allows non-resident deductees to claim TDS credit.
                  </p>
                </div>

                {/* Form 26QB */}
                <div className="border-l-4 border-purple-500 pl-6 py-2">
                  <h3 className="text-xl font-bold text-white mb-2">FORM 26QB</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Form 26QB is a challan-cum-statement used to report TDS on immovable property purchases under Section 194-IA. When the property value exceeds ₹50 lakhs, the buyer must deduct 1% TDS and file this form within 30 days of the month when TDS is deducted. Timely filing helps avoid penalties and ensures the seller can claim TDS credit. It also facilitates the generation of Form 16B for the seller.
                  </p>
                </div>

                {/* Form 26QC */}
                <div className="border-l-4 border-orange-500 pl-6 py-2">
                  <h3 className="text-xl font-bold text-white mb-2">FORM 26QC</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Form 26QC is a challan-cum-statement for TDS on rent exceeding ₹50,000 per month, filed under Section 194-IB. Individuals or HUFs not under tax audit must deduct TDS at 5% and file the form within 30 days from the month-end of deduction. Filing on time helps avoid penalties and ensures landlords receive credit for TDS through Form 16C.
                  </p>
                </div>

                {/* Form 27EQ */}
                <div className="border-l-4 border-red-500 pl-6 py-2">
                  <h3 className="text-xl font-bold text-white mb-2">FORM 27EQ</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Form 27EQ is used for filing quarterly TCS (Tax Collected at Source) returns as per Section 206C of the Income Tax Act. It applies to sellers who collect tax on specific goods/services. The form must include PAN, TCS amount, and challan details. Proper filing ensures compliance, helps avoid penalties, and allows collectees to claim TCS credit in their tax returns.
                  </p>
                </div>
              </div>
            </section>

            {/* How to Download Forms */}
            <section className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-white mb-6">How to Download TDS Return Forms?</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                TDS return forms are available for download on the official TIN-NSDL website. To download them, follow these steps:
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <p className="text-gray-300 pt-1">Visit the official TIN-NSDL website</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <p className="text-gray-300 pt-1">Click on the "Downloads" option in the top menu</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <p className="text-gray-300 pt-1">Choose "e-TDS/e-TCS" from the dropdown</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    4
                  </div>
                  <p className="text-gray-300 pt-1">Scroll to the "Quarterly Returns" section</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    5
                  </div>
                  <p className="text-gray-300 pt-1">Click on "Regular"</p>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                    6
                  </div>
                  <p className="text-gray-300 pt-1">A list of all TDS return forms will appear. Click on the desired form to download its PDF version.</p>
                </div>
              </div>
            </section>

          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Get TDS Return Filing Assistance</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-white placeholder-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-2">
                      Working Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-white placeholder-gray-400"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div>
                    <label htmlFor="document" className="block text-sm font-medium text-gray-200 mb-2">
                      Upload Document (Optional)
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        id="document"
                        onChange={handleFileChange}
                        className="w-full px-4 py-3 bg-slate-900/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-white hover:file:bg-blue-600 file:cursor-pointer"
                        accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      />
                    </div>
                    {formData.document && (
                      <p className="mt-2 text-sm text-gray-300">
                        Selected: {formData.document.name}
                      </p>
                    )}
                    <p className="mt-2 text-xs text-gray-400">
                      Accepted formats: PDF, DOC, DOCX, JPG, PNG (Max 5MB)
                    </p>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-blue-500 text-white font-semibold py-4 px-6 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-200"
                  >
                    Submit Request
                  </button>
                </form>

                {/* Contact Info */}
                <div className="mt-8 pt-8 border-t border-slate-700">
                  <h4 className="font-semibold text-white mb-4">Contact Information</h4>
                  <div className="space-y-3 text-sm text-gray-300">
                    <p className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      akos170620250626@gmail.com
                    </p>
                    <p className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      +91 92119 01927
                    </p>
                    <p className="flex items-start">
                      <svg className="w-5 h-5 mr-2 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      Office No 202, Rohini Complex, Shakarpur, New Delhi-110092
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


