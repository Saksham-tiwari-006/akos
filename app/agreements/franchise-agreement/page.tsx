'use client';

import ServiceConsultationForm from '@/app/components/ServiceConsultationForm';

export default function FranchiseAgreementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Franchise Agreement
          </h1>
          <p className="text-xl text-gray-300">
            Formal contract for franchising your brand or starting a franchise business
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                What is a Franchise Agreement?
              </h2>
              <p className="text-gray-200 mb-4">
                A franchise agreement is a formal contract between two parties, the franchisor (the original business owner) and the franchisee (the person or entity buying the rights). It gives the franchisee permission to run a business using the franchisor's brand name, trademarks, systems, and methods of operation. In return, the franchisee pays an initial setup fee and regular royalties.
              </p>
              <p className="text-gray-200">
                This agreement lays the foundation for an ongoing business relationship, where the franchisee follows the franchisor's standards and benefits from its established reputation and support.
              </p>
            </div>

            {/* Types */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Types of Franchise Agreements
              </h2>
              <div className="space-y-3">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Individual Franchise Agreement</h3>
                  <p className="text-gray-200 text-sm">
                    The most common type, granting a single franchisee the right to operate one franchised unit. Also known as a single-unit franchise agreement.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Multi-Unit Franchise Agreement</h3>
                  <p className="text-gray-200 text-sm">
                    A franchisee is granted the right to open and operate more than one franchised unit within a specific territory.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Area Development Agreement</h3>
                  <p className="text-gray-200 text-sm">
                    Similar to multi-unit, but the franchisee commits to developing a certain number of units within a defined area over a set period.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Master Franchise Agreement</h3>
                  <p className="text-gray-200 text-sm">
                    A master franchisee can run their outlets and also give franchise rights to others in a large area, like a whole country. They sign sub-franchise agreements with these new franchisees.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Conversion Franchise Agreement</h3>
                  <p className="text-gray-200 text-sm">
                    An existing independent business converts into a franchised unit under a franchisor's system.
                  </p>
                </div>
              </div>
            </div>

            {/* How it Works */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                How Does a Franchise Agreement Work?
              </h2>
              <p className="text-gray-200 mb-4">
                When you enter into a franchise agreement, you get access to everything needed to run the business, including training, marketing support, and the right to use the brand and business model. In exchange, you invest your own money to set up and operate the business locally and pay regular fees (royalties) to the franchisor.
              </p>
              <p className="text-gray-200 mb-3">The agreement clearly outlines:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">How long will the franchise last</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">Rules for renewing or ending the contract</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">How disputes will be handled</span>
                </li>
              </ul>
              <p className="text-gray-200 mt-4">
                The goal is to ensure that every franchise location maintains the same high quality and customer experience, regardless of its location.
              </p>
            </div>

            {/* Governing Laws */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Laws that Govern Franchise Agreements in India
              </h2>
              <p className="text-gray-200 mb-4">
                India doesn't have a specific law dedicated to franchising. However, franchise agreements are legally valid and governed by several well-established Indian laws:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">
                    <strong>The Indian Contract Act, 1872:</strong> Lays down basic rules for creating and enforcing contracts.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">
                    <strong>The Trademarks Act, 1999:</strong> Protects the franchisor's trademarks and allows franchisee usage.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">
                    <strong>The Copyright Act, 1957 & Patents Act, 1970:</strong> Protect franchisor's intellectual property.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">
                    <strong>The Competition Act, 2002:</strong> Prevents unfair or restrictive business practices.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">
                    <strong>The Consumer Protection Act, 2019:</strong> Holds both franchisors and franchisees accountable for quality.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">
                    <strong>FEMA, 1999:</strong> Applies when a foreign franchisor is involved or cross-border payments are made.
                  </span>
                </li>
              </ul>
              <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <p className="text-gray-200 text-sm">
                  <strong>Note:</strong> Disclosure laws, such as the Franchise Disclosure Document (FDD), are not yet mandatory but are commonly followed voluntarily by reputable franchisors.
                </p>
              </div>
            </div>

            {/* Provisions */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Provisions of the Franchise Agreement
              </h2>
              <p className="text-gray-200 mb-4">
                A well-drafted franchise agreement outlines all important terms that govern the relationship between the franchisor and franchisee:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white/5 rounded-lg p-3">
                  <h3 className="text-base font-semibold text-[#3d9cf5] mb-1">Grant of Franchise</h3>
                  <p className="text-gray-200 text-xs">
                    Rights given to franchisee, including brand use and exclusive territory.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <h3 className="text-base font-semibold text-[#3d9cf5] mb-1">Franchise Fee & Royalties</h3>
                  <p className="text-gray-200 text-xs">
                    Initial fee and ongoing payments (typically 4-10% of gross sales in India).
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <h3 className="text-base font-semibold text-[#3d9cf5] mb-1">Term and Renewal</h3>
                  <p className="text-gray-200 text-xs">
                    Duration of agreement and conditions for renewal.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <h3 className="text-base font-semibold text-[#3d9cf5] mb-1">Territory</h3>
                  <p className="text-gray-200 text-xs">
                    Geographical area and exclusivity provisions.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <h3 className="text-base font-semibold text-[#3d9cf5] mb-1">Training & Support</h3>
                  <p className="text-gray-200 text-xs">
                    Initial training and ongoing operational support.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <h3 className="text-base font-semibold text-[#3d9cf5] mb-1">Operational Standards</h3>
                  <p className="text-gray-200 text-xs">
                    Quality, service standards, and brand consistency requirements.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <h3 className="text-base font-semibold text-[#3d9cf5] mb-1">Intellectual Property</h3>
                  <p className="text-gray-200 text-xs">
                    Proper use of trademarks, copyrights, and trade secrets.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <h3 className="text-base font-semibold text-[#3d9cf5] mb-1">Marketing & Advertising</h3>
                  <p className="text-gray-200 text-xs">
                    Responsibilities for local and national marketing efforts.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <h3 className="text-base font-semibold text-[#3d9cf5] mb-1">Confidentiality</h3>
                  <p className="text-gray-200 text-xs">
                    Protection of sensitive business information and trade secrets.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <h3 className="text-base font-semibold text-[#3d9cf5] mb-1">Default & Termination</h3>
                  <p className="text-gray-200 text-xs">
                    Conditions for termination and cure periods.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <h3 className="text-base font-semibold text-[#3d9cf5] mb-1">Post-Termination</h3>
                  <p className="text-gray-200 text-xs">
                    Obligations after agreement ends, including non-compete clauses.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <h3 className="text-base font-semibold text-[#3d9cf5] mb-1">Dispute Resolution</h3>
                  <p className="text-gray-200 text-xs">
                    Arbitration or mediation procedures for conflict resolution.
                  </p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                <p className="text-gray-200 text-sm">
                  <strong>Note:</strong> Most Indian franchise agreements include an arbitration clause under the Arbitration and Conciliation Act, 1996, with Delhi, Mumbai, or Bangalore often chosen as the arbitration seat.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column - Consultation Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <ServiceConsultationForm 
                serviceName="Franchise Agreement"
                serviceCategory="Agreements & Contracts"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
