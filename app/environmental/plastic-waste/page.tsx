'use client';

import ServiceConsultationForm from '@/app/components/ServiceConsultationForm';

export default function PlasticWastePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Plastic Waste Authorization
          </h1>
          <p className="text-xl text-gray-300">
            EPR Compliance for Plastic Waste Management
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                What is Plastic Waste Authorization?
              </h2>
              <p className="text-gray-200 mb-4">
                Plastic Waste Authorization is a mandatory regulatory requirement under the Plastic Waste Management Rules, 2016 (as amended in 2018, 2021, and 2022), enforced by the Central Pollution Control Board (CPCB) and State Pollution Control Boards (SPCBs) in India. It implements the principle of Extended Producer Responsibility (EPR), holding producers, importers, and brand owners of plastic packaging accountable for the collection, recycling, and environmentally sound disposal of plastic waste generated from their products.
              </p>
              <p className="text-gray-200 mb-4">
                Under these rules, entities that introduce plastic packaging into the market must obtain EPR Authorization for Plastic Waste from the CPCB or the relevant SPCB. This authorization ensures that producers take responsibility for the lifecycle of their plastic packaging, particularly at its end-of-life stage, thereby reducing plastic pollution and promoting a circular economy.
              </p>
              <p className="text-gray-200">
                Plastic Waste Authorization is not just a compliance necessity—it is a commitment to environmental stewardship, sustainable business practices, and reducing India's plastic footprint.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Who Needs Plastic Waste Authorization?
              </h2>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Producers</h3>
                  <p className="text-gray-200 text-sm mb-2">
                    Manufacturers, importers, or brand owners who introduce plastic packaging materials into the market.
                  </p>
                  <p className="text-gray-200 text-sm">
                    This includes companies using plastic packaging for products such as food, beverages, cosmetics, electronics, and household goods.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Types of Plastic Packaging Covered</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                    <p className="text-gray-200 text-sm">• Multi-layered plastic (MLP)</p>
                    <p className="text-gray-200 text-sm">• Rigid plastic packaging</p>
                    <p className="text-gray-200 text-sm">• Flexible plastic packaging</p>
                    <p className="text-gray-200 text-sm">• Plastic carry bags</p>
                    <p className="text-gray-200 text-sm">• Sachets and pouches</p>
                    <p className="text-gray-200 text-sm">• Plastic bottles and containers</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Exemptions</h3>
                  <p className="text-gray-200 text-sm">
                    Small producers (those generating less than a certain threshold of plastic waste annually) may have simplified compliance procedures, but EPR principles still apply.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Key Components of Plastic Waste EPR
              </h2>
              <div className="space-y-3">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Collection Targets</h3>
                  <p className="text-gray-200 text-sm">
                    Producers must meet annual plastic waste collection and recycling targets as mandated by CPCB. These targets are category-specific and progressively increase. For example, a producer may need to collect and recycle 50% of plastic packaging in Year 1, increasing to 100% by Year 5.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Channelization to Authorized Recyclers</h3>
                  <p className="text-gray-200 text-sm">
                    Collected plastic waste must be sent only to CPCB-registered recyclers or waste processors. Producers must maintain detailed records of the quantity and type of waste handed over.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Annual Returns</h3>
                  <p className="text-gray-200 text-sm">
                    Submit annual returns to CPCB/SPCB detailing the amount of plastic packaging introduced into the market and the corresponding waste collected, recycled, or co-processed.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Use of Recycled Content</h3>
                  <p className="text-gray-200 text-sm">
                    The rules encourage or mandate the use of a minimum percentage of recycled plastic content in new packaging materials.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Phase-Out of Single-Use Plastics</h3>
                  <p className="text-gray-200 text-sm">
                    Compliance includes adherence to bans on certain single-use plastic items and low-utility plastics as notified by the government.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Extended Producer Responsibility Certificates (EPR Certificates)</h3>
                  <p className="text-gray-200 text-sm">
                    Producers can obtain EPR certificates from recyclers or Producer Responsibility Organizations (PROs) as proof of fulfilling their obligations.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Benefits of Plastic Waste Authorization
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Legal Compliance</h3>
                  <p className="text-gray-200 text-sm">
                    Avoids penalties, fines, and legal action for non-compliance with Plastic Waste Management Rules.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Environmental Impact</h3>
                  <p className="text-gray-200 text-sm">
                    Reduces plastic pollution, protects ecosystems, and promotes sustainable waste management.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Circular Economy</h3>
                  <p className="text-gray-200 text-sm">
                    Encourages recycling and reuse of plastic materials, contributing to resource conservation.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Brand Reputation</h3>
                  <p className="text-gray-200 text-sm">
                    Demonstrates corporate social responsibility and commitment to sustainability.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Market Access</h3>
                  <p className="text-gray-200 text-sm">
                    EPR compliance may be required for government tenders, export markets, and major retail contracts.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Consumer Trust</h3>
                  <p className="text-gray-200 text-sm">
                    Builds customer confidence by showcasing responsible environmental practices.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Plastic Waste Authorization Process
              </h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#3d9cf5] rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Registration on EPR Portal</h3>
                    <p className="text-gray-200 text-sm">Register on the CPCB's centralized EPR portal for plastic waste management.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#3d9cf5] rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Document Submission</h3>
                    <p className="text-gray-200 text-sm">Provide details about the type and quantity of plastic packaging, business operations, and proposed waste management plan.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#3d9cf5] rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Engage Recyclers or PROs</h3>
                    <p className="text-gray-200 text-sm">Enter into agreements with CPCB-authorized recyclers or join a Producer Responsibility Organization (PRO) to manage collection and recycling.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#3d9cf5] rounded-full flex items-center justify-center text-white font-bold mr-4">4</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Approval and Authorization</h3>
                    <p className="text-gray-200 text-sm">CPCB/SPCB reviews the application and issues EPR Authorization for Plastic Waste, typically valid for multiple years.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#3d9cf5] rounded-full flex items-center justify-center text-white font-bold mr-4">5</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Ongoing Compliance</h3>
                    <p className="text-gray-200 text-sm">Maintain records, submit quarterly and annual returns, and ensure meeting collection and recycling targets.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <ServiceConsultationForm 
                serviceName="Plastic Waste Authorization"
                serviceCategory="Environmental"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
