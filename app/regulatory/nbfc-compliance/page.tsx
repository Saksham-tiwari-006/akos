'use client';

import ServiceConsultationForm from '@/app/components/ServiceConsultationForm';

export default function NBFCCompliancePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            NBFC Compliance in India
          </h1>
          <p className="text-xl text-gray-300">
            Comprehensive compliance services for Non-Banking Financial Companies
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                What is an NBFC?
              </h2>
              <p className="text-gray-200">
                A Non-Banking Financial Company (NBFC) is a financial entity providing diverse banking-like services without possessing a conventional banking license. These companies operate under the Companies Act, participating in activities such as lending, investing in securities, and asset financing. In essence, NBFCs function as financial intermediaries, delivering credit and other financial solutions outside the traditional banking system.
              </p>
            </div>

            {/* Purpose */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Purpose of NBFCs
              </h2>
              <p className="text-gray-200 mb-4">
                The core purpose of Non-Banking Financial Companies (NBFCs) is to expand financial access and offer specialized services beyond traditional banks. They aim to:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">Boost financial inclusion, reaching underserved individuals and small businesses.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">Provide niche lending for areas like retail, infrastructure, and microfinance.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">Offer flexible, tailored financial solutions that meet diverse customer needs.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">Contribute to economic growth by funding key sectors.</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">Drive innovation and competition within the financial landscape.</span>
                </li>
              </ul>
            </div>

            {/* Differences from Bank */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                How an NBFC is Different from a Bank
              </h2>
              <p className="text-gray-200 mb-4">
                While both Non-Banking Financial Companies (NBFCs) and Banks are crucial financial intermediaries, they operate under different regulations and have distinct functions.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-gray-200 text-sm">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="p-3 font-semibold">Feature</th>
                      <th className="p-3 font-semibold">Bank</th>
                      <th className="p-3 font-semibold">NBFC</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr>
                      <td className="p-3 font-medium">Banking License</td>
                      <td className="p-3">Requires a full banking license from the RBI</td>
                      <td className="p-3">Does not hold a banking license</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Deposit Acceptance</td>
                      <td className="p-3">Can accept demand deposits (savings, current accounts)</td>
                      <td className="p-3">Cannot accept demand deposits (only time deposits like FDs under specific conditions)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Payment System</td>
                      <td className="p-3">Part of payment and settlement system; can issue cheques</td>
                      <td className="p-3">Not part of payment and settlement system</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Deposit Insurance</td>
                      <td className="p-3">Deposits are insured by DICGC (up to ₹5 lakh)</td>
                      <td className="p-3">Deposits are generally not insured by DICGC</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">CRR/SLR</td>
                      <td className="p-3">Must maintain CRR and SLR with RBI</td>
                      <td className="p-3">Not required to maintain CRR and SLR</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Types of NBFCs */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Various Types of NBFCs in India
              </h2>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">1. Asset Finance Companies (AFCs)</h3>
                  <p className="text-gray-200 text-sm">
                    AFCs focus on providing finance for tangible assets such as machinery, vehicles, equipment, and more. They serve individuals, SMEs, and corporate clients by offering tailored financial solutions for purchasing essential assets.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">2. Loan Companies</h3>
                  <p className="text-gray-200 text-sm">
                    Loan Companies play a key role in the consumer finance market by offering personal loans, housing loans, education loans, and more. They also extend financial support to businesses in the form of trade finance, working capital loans, and project-specific funding.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">3. Infrastructure Finance Companies (IFCs)</h3>
                  <p className="text-gray-200 text-sm">
                    IFCs are dedicated to financing infrastructure-related projects, thereby aiding national development. They primarily support sectors like transportation, telecommunications, power, and roads.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">4. Microfinance Institutions (MFIs)</h3>
                  <p className="text-gray-200 text-sm">
                    MFIs play a pivotal role in financial inclusion by offering small loans, or microloans, to low-income individuals and self-help groups (SHGs). By funding micro-entrepreneurs and underprivileged communities, MFIs help them establish or grow small-scale businesses.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">5. Investment Companies</h3>
                  <p className="text-gray-200 text-sm">
                    These NBFCs specialize in acquiring and managing financial instruments such as stocks, bonds, mutual funds, and securities. They cater to both retail and institutional investors, promoting investments across diverse asset classes.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">6. Systemically Important Core Investment Companies (CICs–SI)</h3>
                  <p className="text-gray-200 text-sm">
                    CICs–SI are a specific category of investment companies that significantly influence the financial sector. These NBFCs invest at least 90% of their total assets in the form of equity shares, debt, or other financial assets of group companies. Due to their potential impact on financial system stability, the RBI closely monitors and regulates CICs–SI.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Consultation Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <ServiceConsultationForm 
                serviceName="NBFC Compliance"
                serviceCategory="Regulatory"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
