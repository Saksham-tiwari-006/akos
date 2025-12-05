'use client';

import ServiceConsultationForm from '@/app/components/ServiceConsultationForm';

export default function EPREWastePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            EPR Authorization for E-Waste
          </h1>
          <p className="text-xl text-gray-300">
            Extended Producer Responsibility Compliance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                What is EPR Authorization for E-Waste?
              </h2>
              <p className="text-gray-200 mb-4">
                Extended Producer Responsibility (EPR) Authorization for E-Waste is a regulatory requirement in India that holds manufacturers, importers, and brand owners of electrical and electronic equipment (EEE) responsible for the environmentally sound management of their products at the end of life. This is governed by the E-Waste (Management) Rules, 2016 (as amended in 2018 and 2022), which are enforced by the Central Pollution Control Board (CPCB) and State Pollution Control Boards (SPCBs).
              </p>
              <p className="text-gray-200 mb-4">
                Under EPR, producers must ensure that a certain percentage of the e-waste generated from their products is collected, recycled, or disposed of in an environmentally safe manner. They are required to obtain EPR Authorization from the CPCB or the concerned SPCB, depending on their scale and nature of operations.
              </p>
              <p className="text-gray-200">
                EPR Authorization is not just a legal obligation—it is a commitment to sustainability, reducing pollution, and conserving resources through responsible e-waste management.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Who Needs EPR Authorization?
              </h2>
              <p className="text-gray-200 mb-4">EPR Authorization is mandatory for:</p>
              <div className="space-y-3">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Producers</h3>
                  <p className="text-gray-200 text-sm">
                    Manufacturers, importers, or brand owners of electrical and electronic equipment.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Product Categories Covered</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                    <p className="text-gray-200 text-sm">• IT and telecommunications equipment</p>
                    <p className="text-gray-200 text-sm">• Consumer electronics (TVs, audio systems)</p>
                    <p className="text-gray-200 text-sm">• Household appliances (refrigerators, washing machines)</p>
                    <p className="text-gray-200 text-sm">• Lighting equipment</p>
                    <p className="text-gray-200 text-sm">• Medical devices</p>
                    <p className="text-gray-200 text-sm">• Toys and leisure equipment</p>
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Scale of Operations</h3>
                  <p className="text-gray-200 text-sm">
                    Both large and small-scale producers must obtain authorization, though the process may differ slightly based on the volume of production.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Key Components of EPR Authorization
              </h2>
              <div className="space-y-3">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Collection Targets</h3>
                  <p className="text-gray-200 text-sm">
                    Producers must meet annual collection targets set by CPCB, which progressively increase year on year. For instance, a producer might need to collect 10% of the e-waste generated in the first year, increasing to 70% over subsequent years.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Channelization</h3>
                  <p className="text-gray-200 text-sm">
                    E-waste must be channelized only to authorized recyclers or dismantlers registered under the E-Waste Rules. Producers must maintain records of the quantity of e-waste handed over for processing.
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Annual Returns and Reporting
              </h2>
              <p className="text-gray-200 mb-4">
                Producers must submit annual returns to the CPCB/SPCB detailing the quantity of EEE placed on the market and the corresponding e-waste collected and recycled.
              </p>
            </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Take-Back Systems</h3>
                  <p className="text-gray-200 text-sm">
                    Establish systems for consumers to return end-of-life products, such as collection centers, buyback schemes, or partnerships with recyclers.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Awareness Campaigns</h3>
                  <p className="text-gray-200 text-sm">
                    Producers are encouraged to conduct public awareness programs about the hazards of improper e-waste disposal and the availability of take-back facilities.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Benefits of EPR Authorization
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Legal Compliance</h3>
                  <p className="text-gray-200 text-sm">
                    Avoids penalties, legal action, and market bans for non-compliance with E-Waste Rules.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Environmental Sustainability</h3>
                  <p className="text-gray-200 text-sm">
                    Reduces environmental pollution and promotes responsible disposal and recycling.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Resource Conservation</h3>
                  <p className="text-gray-200 text-sm">
                    Facilitates recovery of valuable materials like gold, copper, and rare earth metals.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Brand Reputation</h3>
                  <p className="text-gray-200 text-sm">
                    Demonstrates commitment to environmental stewardship, enhancing corporate image.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Market Access</h3>
                  <p className="text-gray-200 text-sm">
                    EPR compliance may become a prerequisite for tenders, contracts, and export markets.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Consumer Trust</h3>
                  <p className="text-gray-200 text-sm">
                    Increases customer confidence by offering responsible take-back and recycling options.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                EPR Authorization Process
              </h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#3d9cf5] rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Registration on CPCB Portal</h3>
                    <p className="text-gray-200 text-sm">Register on the CPCB's online portal for EPR authorization.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#3d9cf5] rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Document Submission</h3>
                    <p className="text-gray-200 text-sm">Provide details about products, production volumes, and proposed e-waste collection mechanisms.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#3d9cf5] rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Tie-Up with Authorized Recyclers</h3>
                    <p className="text-gray-200 text-sm">Establish agreements with CPCB-authorized recyclers or Producer Responsibility Organizations (PROs).</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#3d9cf5] rounded-full flex items-center justify-center text-white font-bold mr-4">4</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Approval and Authorization</h3>
                    <p className="text-gray-200 text-sm">CPCB/SPCB reviews the application and grants EPR Authorization, typically valid for multiple years.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#3d9cf5] rounded-full flex items-center justify-center text-white font-bold mr-4">5</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Annual Compliance</h3>
                    <p className="text-gray-200 text-sm">Submit annual returns and maintain records of collection and recycling activities.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <ServiceConsultationForm 
                serviceName="EPR Authorization for E-Waste"
                serviceCategory="Environmental"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
