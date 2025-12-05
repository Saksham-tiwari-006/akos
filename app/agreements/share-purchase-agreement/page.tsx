'use client';

import ServiceConsultationForm from '@/app/components/ServiceConsultationForm';

export default function SharePurchaseAgreementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Share Purchase Agreement (SPA)
          </h1>
          <p className="text-xl text-gray-300">
            Legally binding contract for buying and selling company shares
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                What is a Share Purchase Agreement (SPA)?
              </h2>
              <p className="text-gray-200 mb-4">
                A Share Purchase Agreement (SPA) is a legally binding contract used when buying or selling shares of a company. It clearly outlines the obligations and expectations of each party.
              </p>
              <p className="text-gray-200 mb-3">The SPA typically covers:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">The number of shares being sold and the price</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">Payment terms (lump sum or installments)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">Conditions that need to be fulfilled before closing (conditions precedent)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">Representations and warranties from both parties</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">The closing process and timeline</span>
                </li>
              </ul>
            </div>

            {/* Why Need SPA */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Why Do You Need a Share Purchase Agreement?
              </h2>
              <p className="text-gray-200 mb-4">A Share Purchase Agreement is crucial for several reasons:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Protects Both Parties</h3>
                  <p className="text-gray-200 text-sm">
                    Clearly defines the rights and responsibilities of both the buyer and the seller.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Prevents Misunderstandings</h3>
                  <p className="text-gray-200 text-sm">
                    By outlining all terms in detail, it reduces chances of confusion or disputes.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Provides Legal Protection</h3>
                  <p className="text-gray-200 text-sm">
                    If a dispute arises, the SPA provides a legal framework to resolve it.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Ensures Safe Transaction</h3>
                  <p className="text-gray-200 text-sm">
                    Without an SPA, a share transfer can be risky, leaving both parties vulnerable.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Guarantees Transparency</h3>
                  <p className="text-gray-200 text-sm">
                    Ensures that the transfer of ownership is clear and lawful.
                  </p>
                </div>
              </div>
            </div>

            {/* Key Laws */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                The Key Laws That Govern SPAs in India
              </h2>
              <p className="text-gray-200 mb-4">
                Several important Indian laws govern Share Purchase Agreements (SPAs), ensuring compliance and enforceability:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">
                    <strong>Indian Contract Act, 1872:</strong> Foundation of contract law in India, defines how agreements are legally binding.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">
                    <strong>Companies Act, 2013:</strong> Provides framework for corporate governance and share transfers in India.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">
                    <strong>Specific Relief Act, 1963:</strong> Deals with remedies for breaches of contract.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">
                    <strong>FEMA, 1999:</strong> Governs foreign exchange and foreign investment transactions in India.
                  </span>
                </li>
              </ul>
            </div>

            {/* Share Purchase Process */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                The Share Purchase Process in India: A Step-by-Step Guide
              </h2>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Step 1: Letter of Intent (LOI) or Term Sheet</h3>
                  <p className="text-gray-200 text-sm">
                    The process often begins with an LOI or Term Sheet, a preliminary, non-binding document that outlines the main points of the deal. It shows a serious intention to proceed.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Step 2: Due Diligence</h3>
                  <p className="text-gray-200 text-sm mb-2">
                    The buyer thoroughly examines the target company's financials, legal documents, and operations to uncover potential risks or liabilities.
                  </p>
                  <div className="mt-2 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                    <p className="text-gray-200 text-xs">
                      <strong>Important Note:</strong> If the target company is listed, the transaction must comply with SEBI (SAST) Regulations, 2011 and SEBI (LODR) Regulations, 2015.
                    </p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Step 3: Negotiating and Drafting the SPA</h3>
                  <p className="text-gray-200 text-sm">
                    After due diligence, the parties negotiate the specific terms of the SPA. Lawyers draft a detailed agreement that reflects these negotiations and the findings from the due diligence review.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Step 4: Board Approval and Resolutions</h3>
                  <p className="text-gray-200 text-sm">
                    The company's board of directors must pass resolutions authorizing the share sale or purchase. This ensures internal compliance and confirms the legal authority of the signatories.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Step 5: Executing the Agreement</h3>
                  <p className="text-gray-200 text-sm">
                    After final negotiations, the SPA is executed. Both the buyer and seller sign the agreement, making the contract legally binding.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Step 6: The Closing Day</h3>
                  <p className="text-gray-200 text-sm">
                    The actual transfer of shares takes place. For physical shares, this is done through Form SH-4. For dematerialized shares, transfer instructions are given electronically.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Step 7: Post-Closing Formalities</h3>
                  <p className="text-gray-200 text-sm">
                    The share transfer must be recorded in the company's official records. Forms such as SH-4 (for physical shares) or SH-6 (for transmissions) need to be filed with the Registrar of Companies (RoC).
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Consultation Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <ServiceConsultationForm 
                serviceName="Share Purchase Agreement"
                serviceCategory="Agreements & Contracts"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
