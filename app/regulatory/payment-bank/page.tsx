'use client';

import ServiceConsultationForm from '@/app/components/ServiceConsultationForm';

export default function PaymentBankPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Payment Bank in India
          </h1>
          <p className="text-xl text-gray-300">
            Specialized banking services for financial inclusion and digital payments
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                What is a Payment Bank in India?
              </h2>
              <p className="text-gray-200 mb-4">
                A Payment Bank in India is a special type of bank designed to offer basic financial services like payments, money transfers, and savings accounts. Introduced by the Reserve Bank of India (RBI) in 2014, payment banks aim to promote financial inclusion, particularly for people in rural areas, migrant workers, and low-income households with limited access to traditional banks. Unlike regular banks, payment banks do not provide loans or investment products.
              </p>
              <p className="text-gray-200">
                They rely heavily on mobile technology to reach underserved populations, making banking services more affordable and accessible. To operate, these institutions must obtain a payment bank license from the RBI, ensuring they meet required safety, capital, and operational standards.
              </p>
            </div>

            {/* List of Payment Banks */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                List of Existing Payment Banks in India
              </h2>
              <p className="text-gray-200 mb-4">Some of the common Payment Banks are mentioned below:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">Airtel Payments Bank</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">Jio Payments Bank</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">India Post Payments Bank (IPPB)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">Fino Payments Bank</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">NSDL Payments Bank</span>
                </li>
              </ul>
            </div>

            {/* Differences */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                How are Payment Banks Different from Other Banks?
              </h2>
              <p className="text-gray-200 mb-4">
                While they both handle money, payment banks and traditional commercial banks (like SBI or HDFC) have key differences in their goals and operations. Understanding these differences helps to see the unique role of a payment bank.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-gray-200">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="p-3 font-semibold">Feature</th>
                      <th className="p-3 font-semibold">Payment Bank</th>
                      <th className="p-3 font-semibold">Traditional Bank</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr>
                      <td className="p-3 font-medium">Main Goal</td>
                      <td className="p-3">Focus on payments, remittances, and reaching unbanked people.</td>
                      <td className="p-3">Offers a full range of services, including loans and investments.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Deposit Limit</td>
                      <td className="p-3">Can accept deposits up to ₹2 lakhs per customer.</td>
                      <td className="p-3">No limit on deposits.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Loans</td>
                      <td className="p-3">Cannot give loans</td>
                      <td className="p-3">The main business is giving loans (home, car, personal).</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Credit Cards</td>
                      <td className="p-3">Cannot issue credit cards.</td>
                      <td className="p-3">Can issue credit cards.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* What they can and cannot do */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                What Payment Banks Can and Cannot Do
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold text-[#3d9cf5] mb-3">What a Payment Bank CAN Do:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span className="text-gray-200 text-sm">Accept Deposits (up to ₹2 lakhs per customer)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span className="text-gray-200 text-sm">Issue Debit Cards</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span className="text-gray-200 text-sm">Handle Payments and Money Transfers</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span className="text-gray-200 text-sm">Act as Business Correspondent for other banks</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span className="text-gray-200 text-sm">Sell simple insurance and mutual fund products</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span className="text-gray-200 text-sm">Handle Forex services</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-400 mr-2">✓</span>
                      <span className="text-gray-200 text-sm">e-KYC and Aadhaar-based Onboarding</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-red-400 mb-3">What a Payment Bank CANNOT Do:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">✗</span>
                      <span className="text-gray-200 text-sm">No Lending (no loans of any kind)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">✗</span>
                      <span className="text-gray-200 text-sm">No Credit Cards</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">✗</span>
                      <span className="text-gray-200 text-sm">No High-Risk Investments</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">✗</span>
                      <span className="text-gray-200 text-sm">No NRI Accounts</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-400 mr-2">✗</span>
                      <span className="text-gray-200 text-sm">Cannot Create Subsidiaries</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Who is Eligible */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Who is Eligible to Apply for a Payment Bank License?
              </h2>
              <p className="text-gray-200 mb-4">
                The RBI wants serious, capable, and well-intentioned players to enter the banking space. They have created a list of those who are eligible to apply for an RBI license for payment banks.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Existing PPI Issuers</h3>
                  <p className="text-gray-200 text-sm">
                    Companies that already offer mobile wallets or prepaid cards, with experience in digital payments.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">NBFCs</h3>
                  <p className="text-gray-200 text-sm">
                    Non-Banking Finance Companies with experience in financial services and market understanding.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Corporate Business Correspondents</h3>
                  <p className="text-gray-200 text-sm">
                    Companies that run a large network of banking agents in underserved areas.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Mobile Telephone Companies</h3>
                  <p className="text-gray-200 text-sm">
                    Telecom companies like Airtel and Jio with millions of customers and nationwide networks.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Supermarket Chains</h3>
                  <p className="text-gray-200 text-sm">
                    Retail chains with stores across the country and direct customer connections.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Public Sector Entities</h3>
                  <p className="text-gray-200 text-sm">
                    Government-owned entities like India Post with vast networks of service points.
                  </p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <p className="text-gray-200 text-sm">
                  <strong>Note:</strong> Large industrial or business groups cannot promote a payment bank, except for owning up to 10% of the bank's stake.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Consultation Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <ServiceConsultationForm 
                serviceName="Payment Bank License"
                serviceCategory="Regulatory"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
