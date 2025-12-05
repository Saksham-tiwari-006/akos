'use client';

import ServiceConsultationForm from '@/app/components/ServiceConsultationForm';

export default function LegalHeirCertificatePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Legal Heir Certificate
          </h1>
          <p className="text-xl text-gray-300">
            Official document identifying rightful successors and legal heirs
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                What is a Legal Heir Certificate?
              </h2>
              <p className="text-gray-200 mb-4">
                A Legal Heir Certificate is an official document issued by the government that identifies the rightful living successors of a deceased person. It is similar to a formal introduction to the authorities, stating who is next in line to inherit the deceased's assets, liabilities, and responsibilities.
              </p>
              <p className="text-gray-200">
                When a person passes away without leaving a will (this is known as dying 'intestate'), this certificate becomes vital. It establishes the relationship between the deceased and their legal heirs, paving the way for the transfer of property, bank balances, and other assets. The certificate is issued after a proper inquiry by the concerned government authorities, such as the Tehsildar or Talukdar (Sub-Divisional Magistrate – SDM) of the district.
              </p>
            </div>

            {/* Who are Legal Heirs */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Who are the Legal Heirs?
              </h2>
              <p className="text-gray-200 mb-4">
                The law in India defines who is considered a legal heir based on the deceased person's religion. The rules of succession are governed by personal laws.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">For Hindus, Buddhists, Jains, and Sikhs</h3>
                  <p className="text-gray-200 text-sm mb-3">Hindu Succession Act, 1956 applies. The legal heirs are categorized into classes:</p>
                  <div className="space-y-2">
                    <div>
                      <h4 className="text-white font-medium mb-1">Class I Heirs (Primary heirs with first right):</h4>
                      <ul className="text-gray-200 text-sm space-y-1 ml-4">
                        <li>• Spouse (Wife or Husband)</li>
                        <li>• Sons and Daughters</li>
                        <li>• Mother</li>
                        <li>• Children of a predeceased son or daughter</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-white font-medium mb-1">Class II Heirs (If no Class I heirs):</h4>
                      <ul className="text-gray-200 text-sm space-y-1 ml-4">
                        <li>• Father</li>
                        <li>• Grandparents</li>
                        <li>• Grandchildren</li>
                        <li>• Siblings (Brothers and Sisters)</li>
                        <li>• Other relatives</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">For Christians</h3>
                  <p className="text-gray-200 text-sm">
                    The Indian Succession Act, 1925, governs the distribution of property. Generally, the spouse and children are the primary heirs. If there are no children, the spouse may share the assets with other relatives of the deceased, like the father or mother.
                  </p>
                </div>

                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">For Muslims</h3>
                  <p className="text-gray-200 text-sm">
                    Succession is governed by their law, which has its own distinct rules for identifying heirs and their respective shares. Islamic law defines specific shares for heirs (known as Sharers and Residuaries), which include the spouse, children, and parents. The distribution is based on a pre-defined framework within Sharia.
                  </p>
                </div>
              </div>

              <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <p className="text-gray-200 text-sm">
                  <strong>Note:</strong> Personal succession laws are complex. It is always advisable to consult a legal expert for specific cases.
                </p>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Why is a Legal Heir Certificate Important: Key Benefits
              </h2>
              <p className="text-gray-200 mb-4">
                A Legal Heir Certificate is crucial after the death of a loved one. It legally proves who the rightful successors are and helps in managing the person's financial and legal matters smoothly.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Claim Assets</h3>
                  <p className="text-gray-200 text-sm">
                    Transfer or claim the deceased's money, property, mutual funds, and bank accounts.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Banking & Insurance</h3>
                  <p className="text-gray-200 text-sm">
                    Banks and insurers require this certificate before allowing access to funds or processing claims.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Government Dues</h3>
                  <p className="text-gray-200 text-sm">
                    Claim pension, PF, gratuity, and other dues if the deceased was a government employee.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Property Transfer</h3>
                  <p className="text-gray-200 text-sm">
                    Update ownership of real estate, electricity, water, and property tax records.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Investment Access</h3>
                  <p className="text-gray-200 text-sm">
                    Manage the deceased's bank accounts or investments with this certificate.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Legal Protection</h3>
                  <p className="text-gray-200 text-sm">
                    Prevents future disputes by clearly naming all legal heirs.
                  </p>
                </div>
              </div>
            </div>

            {/* Governing Laws */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Rules & Regulations Governing Legal Heir Certificate
              </h2>
              <p className="text-gray-200 mb-4">
                The issuance of a Legal Heir Certificate is primarily a state-level process, and the procedures may vary slightly from one state to another. There is no single central law governing its issuance. Instead, state revenue authorities issue the certificate based on applicable personal succession laws.
              </p>
              <p className="text-gray-200">
                The certificate is generally issued by the Revenue Department of the respective state. Key authorities involved in the process include the District Collector, Tehsildar, Talukdar, or Sub-Divisional Magistrate (SDM). Their role is to verify the legal heir claims through a proper inquiry before approving and issuing the certificate.
              </p>
            </div>

            {/* Difference from Succession Certificate */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Difference Between Legal Heir Certificate and Succession Certificate
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-gray-200 text-sm">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="p-3 font-semibold">Feature</th>
                      <th className="p-3 font-semibold">Legal Heir Certificate</th>
                      <th className="p-3 font-semibold">Succession Certificate</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr>
                      <td className="p-3 font-medium">Purpose</td>
                      <td className="p-3">To identify the legal heirs of the deceased</td>
                      <td className="p-3">To grant authority to inherit debts and securities</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Issuing Authority</td>
                      <td className="p-3">Revenue Authority (Tehsildar/District Collector)</td>
                      <td className="p-3">Civil Court</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Scope</td>
                      <td className="p-3">Establishes relationship for inheriting property and benefits</td>
                      <td className="p-3">Specifically deals with movable assets like stocks, bonds, deposits</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Cost</td>
                      <td className="p-3">Nominal fees (small stamp fee and affidavit cost)</td>
                      <td className="p-3">Court fee (usually 2-3% of asset value)</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Legal Standing</td>
                      <td className="p-3">Primary document for most inheritance claims</td>
                      <td className="p-3">Greater legal authority for financial assets</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Who Can Apply */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Who Can Apply for a Legal Heir Certificate?
              </h2>
              <p className="text-gray-200 mb-4">
                The following individuals are typically eligible to apply:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">The spouse of the deceased</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">The children (sons and daughters) of the deceased</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">The parents of the deceased</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">The siblings (brothers and sisters) of the deceased (if there are no Class I heirs)</span>
                </li>
              </ul>
              <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <p className="text-gray-200 text-sm">
                  <strong>NRI Application:</strong> Yes, Non-Resident Indians (NRIs) can apply for a Legal Heir Certificate in India. They can apply directly through state online portals or appoint a representative using a Power of Attorney (POA).
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Consultation Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <ServiceConsultationForm 
                serviceName="Legal Heir Certificate"
                serviceCategory="Agreements & Contracts"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
