'use client';

import ServiceConsultationForm from '@/app/components/ServiceConsultationForm';

export default function ShareholderAgreementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Shareholders' Agreement (SHA)
          </h1>
          <p className="text-xl text-gray-300">
            Private contract defining shareholder rights and company governance
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                What is a Shareholders' Agreement (SHA)?
              </h2>
              <p className="text-gray-200 mb-4">
                A Shareholders' Agreement is a private and legally binding contract entered into by a company's shareholders, sometimes including the company itself. It defines each shareholder's rights, responsibilities, and obligations regarding the business and its management.
              </p>
              <p className="text-gray-200 mb-4">
                This agreement acts as a clear roadmap, designed to avoid confusion and reduce the chances of internal conflicts. It also simplifies how key decisions are made within the company.
              </p>
              <p className="text-gray-200">
                Starting a business in India brings many opportunities, but it also comes with legal and operational challenges. For example, disputes may arise over profit sharing, decision-making power, exit rights, or transfer of shares. Things become more complicated when multiple founders or investors are involved. A well-drafted Shareholders' Agreement helps address such complexities upfront.
              </p>
            </div>

            {/* Legal Compulsory */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Is a Shareholders' Agreement Legally Compulsory in India?
              </h2>
              <p className="text-gray-200 mb-4">
                A Shareholders' Agreement (SHA) is not legally mandatory in India. No law requires a company to create one. It is a voluntary agreement between shareholders that defines their rights, duties, and how the company should be managed.
              </p>
              <p className="text-gray-200 mb-4">
                That said, an SHA is still a legally valid and enforceable contract under the Indian Contract Act, 1872, provided it does not conflict with Indian laws.
              </p>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-4">
                <p className="text-gray-200 text-sm mb-2"><strong>Legal Hierarchy:</strong></p>
                <ol className="space-y-1 text-gray-200 text-sm ml-4">
                  <li>1. Companies Act prevails over AoA</li>
                  <li>2. AoA prevails over SHA</li>
                </ol>
              </div>
              <p className="text-gray-200">
                To make your SHA stronger and legally sound, it's highly recommended to align its key provisions with the Articles of Association (AoA). This improves enforceability and reduces legal risks.
              </p>
            </div>

            {/* Difference from AoA */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Difference Between Shareholders' Agreement and AoA
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-gray-200 text-sm">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="p-3 font-semibold">Feature</th>
                      <th className="p-3 font-semibold">SHA</th>
                      <th className="p-3 font-semibold">AoA</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr>
                      <td className="p-3 font-medium">Nature</td>
                      <td className="p-3">Private contract</td>
                      <td className="p-3">Public/Statutory document</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Parties</td>
                      <td className="p-3">Shareholders (often the company is also a party)</td>
                      <td className="p-3">The company and its shareholders</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Compulsory</td>
                      <td className="p-3">No, voluntary agreement</td>
                      <td className="p-3">Yes, required for company registration</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Public Document</td>
                      <td className="p-3">No, private and confidential</td>
                      <td className="p-3">Yes, accessible to the public</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Flexibility</td>
                      <td className="p-3">High, tailored to specific needs</td>
                      <td className="p-3">Lower, must comply with Companies Act</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Enforceability</td>
                      <td className="p-3">Under Indian Contract Act, 1872</td>
                      <td className="p-3">Statutory, binding on all shareholders</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Purpose</td>
                      <td className="p-3">Detailed internal governance and dispute resolution</td>
                      <td className="p-3">Basic operational framework</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Why Needed */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Why do Indian Businesses Need a Shareholders' Agreement?
              </h2>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">To Prevent Fights Between Business Partners</h3>
                  <p className="text-gray-200 text-sm mb-2">
                    Shareholder disputes are a common reason many businesses fail. In smaller companies, such conflicts often arise from personal relationships, emotional decisions, or unclear roles.
                  </p>
                  <p className="text-gray-200 text-sm">
                    A Shareholders' Agreement (SHA) helps avoid these problems. It sets up clear rules for resolving disputes, often through mediation or arbitration, before they turn into costly legal battles.
                  </p>
                </div>

                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">To Protect Everyone's Investment, Big or Small</h3>
                  <p className="text-gray-200 text-sm mb-2">
                    An SHA safeguards the investment of all shareholders, regardless of their share size. It defines how much each person owns, how much they've contributed, and their rights in future funding rounds.
                  </p>
                  <div className="mt-2">
                    <p className="text-gray-200 text-sm font-medium mb-1">Key protections include:</p>
                    <ul className="space-y-1 text-gray-200 text-sm ml-4">
                      <li>• Anti-dilution rights: Prevent loss of share value</li>
                      <li>• Preemptive rights: Let existing shareholders maintain their stake</li>
                      <li>• Minority protection: Ensure fair treatment and voice</li>
                    </ul>
                  </div>
                  <div className="mt-3 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                    <p className="text-gray-200 text-xs">
                      <strong>Note:</strong> In 2024, promoters held 51.18% of equity in NIFTY 500 firms and voted on 78.69% of their shares, exerting large influence. An SHA helps balance this power structure.
                    </p>
                  </div>
                </div>

                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">To Make Clear Rules for Running the Company</h3>
                  <p className="text-gray-200 text-sm mb-2">
                    A Shareholders' Agreement provides a clear framework for how a company should operate.
                  </p>
                  <div className="space-y-1 text-gray-200 text-sm">
                    <p>• Roles and responsibilities of shareholders</p>
                    <p>• Decision-making authority and approval levels</p>
                    <p>• How and when meetings should be held</p>
                    <p>• What voting rights do shareholders have</p>
                    <p>• What happens during deadlocks or disputes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Consultation Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <ServiceConsultationForm 
                serviceName="Shareholders' Agreement"
                serviceCategory="Agreements & Contracts"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
