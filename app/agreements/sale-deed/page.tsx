'use client';

import ServiceConsultationForm from '@/app/components/ServiceConsultationForm';

export default function SaleDeedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Sale Deed Registration
          </h1>
          <p className="text-xl text-gray-300">
            Legal document for property ownership transfer and registration
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                What is a Sale Deed?
              </h2>
              <p className="text-gray-200 mb-4">
                A Sale Deed is a legal document that officially records the sale and transfer of ownership of an immovable property (such as land, a house, or a flat) from a seller to a buyer. It is executed after both parties have fulfilled all conditions outlined in the Sale Agreement.
              </p>
              <p className="text-gray-200">
                This document serves as definitive proof of your property ownership. Essentially, it's the final and most important step in establishing legal title. A properly executed and registered sale deed is paramount for any property transaction.
              </p>
            </div>

            {/* Registration */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                What is a Sale Deed Registration?
              </h2>
              <p className="text-gray-200 mb-4">
                Sale deed registration is a crucial legal process that finalises the transfer of property ownership from the seller to the buyer. It involves documenting the transaction with the local sub-registrar office, ensuring that the buyer's rights are officially recorded and recognised under the law.
              </p>
              <p className="text-gray-200">
                This process offers legal protection by serving as conclusive proof of ownership and preventing future disputes or claims over the property. Once registered, the sale deed becomes a legally binding document, making it essential for any real estate transaction in India.
              </p>
            </div>

            {/* Benefits */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Why is a Sale Deed Important: Benefits
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">
                    <strong>Legal Transfer of Ownership:</strong> A registered sale deed officially transfers the title of the property to the buyer.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">
                    <strong>Mandatory for Legal Recognition:</strong> Without registration, the buyer's ownership is not recognized by legal authorities.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">
                    <strong>Essential for Future Transactions:</strong> Only a registered owner can sell, lease, or mortgage the property legally.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">
                    <strong>Protects Both Parties:</strong> The deed outlines the terms, conditions, and responsibilities of both buyer and seller.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">
                    <strong>Acts as Legal Proof:</strong> It serves as vital evidence in case of disputes related to the property.
                  </span>
                </li>
              </ul>
              <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <p className="text-gray-200 text-sm">
                  <strong>Important:</strong> Sale deed registration is a legal requirement, not an optional step. It's also necessary for updating property records (mutation) and applying for home loans.
                </p>
              </div>
            </div>

            {/* Comparisons */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Sale Deed vs. Sale Agreement
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-gray-200 text-sm">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="p-3 font-semibold">Aspect</th>
                      <th className="p-3 font-semibold">Sale Agreement</th>
                      <th className="p-3 font-semibold">Sale Deed</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr>
                      <td className="p-3 font-medium">Definition</td>
                      <td className="p-3">A legal contract outlining terms of a future property sale</td>
                      <td className="p-3">A legal document completing the transfer of ownership</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Purpose</td>
                      <td className="p-3">To promise a future sale after conditions are met</td>
                      <td className="p-3">To legally transfer ownership rights immediately</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Nature</td>
                      <td className="p-3">Executory (promise to transfer)</td>
                      <td className="p-3">Executed (actual transfer)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Ownership Transfer</td>
                      <td className="p-3">Does not transfer ownership</td>
                      <td className="p-3">Transfers legal ownership of the property</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Registration</td>
                      <td className="p-3">Not mandatory, but recommended</td>
                      <td className="p-3">Mandatory under Registration Act, 1908</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Stamp Duty</td>
                      <td className="p-3">Usually lower or not required</td>
                      <td className="p-3">Stamp duty is mandatory</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Sale Deed vs Conveyance Deed */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Sale Deed vs. Conveyance Deed
              </h2>
              <p className="text-gray-200 mb-4">
                Often, the terms "Sale Deed" and "Conveyance Deed" are used interchangeably, and for most practical purposes, they refer to the same document in the context of a property sale.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-gray-200 text-sm">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="p-3 font-semibold">Aspect</th>
                      <th className="p-3 font-semibold">Sale Deed</th>
                      <th className="p-3 font-semibold">Conveyance Deed</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr>
                      <td className="p-3 font-medium">Definition</td>
                      <td className="p-3">Records sale and transfer of property ownership</td>
                      <td className="p-3">Broader document that conveys title by sale, gift, exchange, or mortgage</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Scope</td>
                      <td className="p-3">Specific to a sale transaction only</td>
                      <td className="p-3">Covers all types of property transfer</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Nature</td>
                      <td className="p-3">Part of conveyance deeds, but only when involving sale</td>
                      <td className="p-3">Umbrella term including various types of title transfers</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Examples</td>
                      <td className="p-3">Selling a flat from one individual to another</td>
                      <td className="p-3">Includes Sale Deed, Gift Deed, Lease Deed, Relinquishment Deed, etc.</td>
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
                serviceName="Sale Deed Registration"
                serviceCategory="Agreements & Contracts"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
