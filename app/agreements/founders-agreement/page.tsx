'use client';

import ServiceConsultationForm from '@/app/components/ServiceConsultationForm';

export default function FoundersAgreementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Founders' Agreement
          </h1>
          <p className="text-xl text-gray-300">
            Blueprint for startup success - defining roles, equity, and responsibilities
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                What is the Founders' Agreement?
              </h2>
              <p className="text-gray-200 mb-4">
                A founders' agreement is a binding contract between the individuals who start a company. It outlines the terms and conditions of their partnership, essentially serving as a blueprint for how the business will be run and how decisions will be made.
              </p>
              <p className="text-gray-200 mb-4">
                It's particularly important when there are multiple co-founders, as it addresses aspects like ownership, responsibilities, and even exit strategies. Think of it as a prenuptial agreement for your business, designed to protect everyone's interests.
              </p>
              <p className="text-gray-200">
                By articulating key aspects like equity distribution, decision-making processes, and dispute resolution, this agreement minimizes misunderstandings and provides a framework for collaboration.
              </p>
            </div>

            {/* Why Important */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Why is the Founders' Agreement Important?
              </h2>
              <p className="text-gray-200 mb-4">A founders' agreement is vital for several reasons:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Clarity and Expectations</h3>
                  <p className="text-gray-200 text-sm">
                    Clearly defines each founder's role, responsibilities, and expected contributions.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Equity Distribution</h3>
                  <p className="text-gray-200 text-sm">
                    Precisely outlines how equity will be divided, including vesting schedules and departure clauses.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Decision-Making</h3>
                  <p className="text-gray-200 text-sm">
                    Establishes clear process for making important business decisions.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Dispute Resolution</h3>
                  <p className="text-gray-200 text-sm">
                    Provides mechanism for resolving disagreements, avoiding costly litigation.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">IP Protection</h3>
                  <p className="text-gray-200 text-sm">
                    Includes provisions for assigning intellectual property created by founders to the company.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Exit Strategy</h3>
                  <p className="text-gray-200 text-sm">
                    Addresses what happens if a founder leaves, including buyback clauses and non-compete agreements.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Attracting Investors</h3>
                  <p className="text-gray-200 text-sm">
                    Investors look for a solid founders agreement as it demonstrates a well-thought-out and stable founding team.
                  </p>
                </div>
              </div>
            </div>

            {/* When Required */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                When is the Founders' Agreement Required?
              </h2>
              <p className="text-gray-200 mb-4">
                A founders' agreement is required and highly recommended at the very beginning of a startup's journey, ideally before or shortly after the formal incorporation of the company.
              </p>
              <p className="text-gray-200 mb-3">It's particularly crucial in the following situations:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">Before formalizing partnership</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">Before seeking investment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">Before developing products/services</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">When there's significant commitment of time or resources</span>
                </li>
              </ul>
            </div>

            {/* Components */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Components of the Founders' Agreement Template
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-gray-200 text-sm">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="p-3 font-semibold">Component</th>
                      <th className="p-3 font-semibold">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr>
                      <td className="p-3 font-medium">Equity Ownership</td>
                      <td className="p-3">Specifies the percentage of shares owned by each founder</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Roles and Responsibilities</td>
                      <td className="p-3">Defines each founder's duties and decision-making authority</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Capital Contributions</td>
                      <td className="p-3">Details initial investments (money, assets, or services)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Vesting Schedule</td>
                      <td className="p-3">Timeline over which founders earn their equity</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Intellectual Property</td>
                      <td className="p-3">Clarifies ownership of IP created before and during business</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Decision-Making</td>
                      <td className="p-3">Outlines how major business decisions will be made</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Confidentiality</td>
                      <td className="p-3">Requires founders to keep sensitive information private</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Dispute Resolution</td>
                      <td className="p-3">Methods to resolve conflicts (mediation, arbitration)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Exit and Buyout Terms</td>
                      <td className="p-3">How a founder can leave and how shares are handled</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Non-Compete Clause</td>
                      <td className="p-3">Restricts founders from competing during and after involvement</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Dividend Policy</td>
                      <td className="p-3">How and when profits will be distributed</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Amendments</td>
                      <td className="p-3">Procedure to change or update the agreement</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Column - Consultation Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <ServiceConsultationForm 
                serviceName="Founders' Agreement"
                serviceCategory="Agreements & Contracts"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
