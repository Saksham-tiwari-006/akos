'use client';

import ServiceConsultationForm from '@/app/components/ServiceConsultationForm';

export default function ConsentToEstablishPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Consent to Establish (CTE)
          </h1>
          <p className="text-xl text-gray-300">
            Environmental Clearance for New Industrial Projects
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                What is Consent to Establish (CTE)?
              </h2>
              <p className="text-gray-200 mb-4">
                Consent to Establish (CTE) is a mandatory environmental clearance required before setting up a new industrial unit, expanding an existing facility, or undertaking any activity that may generate pollution. It is issued by the State Pollution Control Board (SPCB) or the Central Pollution Control Board (CPCB), depending on the nature and scale of the project.
              </p>
              <p className="text-gray-200 mb-4">
                CTE is governed by the Water (Prevention and Control of Pollution) Act, 1974, and the Air (Prevention and Control of Pollution) Act, 1981. It ensures that the proposed project complies with environmental norms and has adequate pollution control measures in place before construction or installation begins.
              </p>
              <p className="text-gray-200">
                Consent to Establish is the first step in environmental compliance for industries. After establishment, industries must obtain Consent to Operate (CTO) to commence production or operations.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Who Needs CTE?
              </h2>
              <p className="text-gray-200 mb-4">CTE is required for:</p>
              <div className="space-y-3">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">New Industrial Units</h3>
                  <p className="text-gray-200 text-sm">
                    Any new manufacturing, processing, or industrial facility that is likely to generate air emissions, wastewater, hazardous waste, or solid waste.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Expansion of Existing Units</h3>
                  <p className="text-gray-200 text-sm">
                    Expansion, modernization, or diversification of existing facilities that may increase pollution load.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Polluting Activities</h3>
                  <p className="text-gray-200 text-sm">
                    Activities that involve discharge of effluents into water bodies or emissions into the atmosphere.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Industries Covered</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
                    <p className="text-gray-200 text-sm">• Chemical and pharmaceutical plants</p>
                    <p className="text-gray-200 text-sm">• Textile and dyeing units</p>
                    <p className="text-gray-200 text-sm">• Food processing industries</p>
                    <p className="text-gray-200 text-sm">• Power plants and thermal units</p>
                    <p className="text-gray-200 text-sm">• Mining and mineral processing</p>
                    <p className="text-gray-200 text-sm">• Cement and construction material plants</p>
                    <p className="text-gray-200 text-sm">• Pulp and paper mills</p>
                    <p className="text-gray-200 text-sm">• Metal and metallurgical industries</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Key Requirements for CTE
              </h2>
              <div className="space-y-3">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Pollution Control Measures</h3>
                  <p className="text-gray-200 text-sm">
                    The applicant must provide detailed plans for pollution control, including:
                  </p>
                  <ul className="mt-2 space-y-1">
                    <li className="text-gray-200 text-sm ml-4">• Effluent Treatment Plant (ETP) for wastewater</li>
                    <li className="text-gray-200 text-sm ml-4">• Air Pollution Control Devices (APCDs) like scrubbers, filters, ESPs</li>
                    <li className="text-gray-200 text-sm ml-4">• Solid and hazardous waste management systems</li>
                    <li className="text-gray-200 text-sm ml-4">• Noise pollution control measures</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Environmental Impact Assessment (EIA)</h3>
                  <p className="text-gray-200 text-sm">
                    For large or highly polluting projects, an EIA report may be required to assess potential environmental impacts.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Compliance with Standards</h3>
                  <p className="text-gray-200 text-sm">
                    The proposed facility must meet emission and effluent discharge standards prescribed under the Water and Air Acts.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Site Suitability</h3>
                  <p className="text-gray-200 text-sm">
                    The location must be in compliance with zoning regulations, and not in ecologically sensitive areas unless permitted.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                CTE vs CTO
              </h2>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white/5 rounded-lg overflow-hidden">
                  <thead className="bg-white/10">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-white">Aspect</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-white">Consent to Establish (CTE)</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-white">Consent to Operate (CTO)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr>
                      <td className="px-6 py-4 text-gray-200 font-semibold">Purpose</td>
                      <td className="px-6 py-4 text-gray-200">For setting up/establishing a new unit or expansion</td>
                      <td className="px-6 py-4 text-gray-200">For operating or running the established unit</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-200 font-semibold">When Required</td>
                      <td className="px-6 py-4 text-gray-200">Before construction/installation begins</td>
                      <td className="px-6 py-4 text-gray-200">After construction, before starting production</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-200 font-semibold">Validity</td>
                      <td className="px-6 py-4 text-gray-200">Typically valid until the project is completed</td>
                      <td className="px-6 py-4 text-gray-200">Renewable periodically (1-5 years depending on category)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-200 font-semibold">Focus</td>
                      <td className="px-6 py-4 text-gray-200">Design and pollution control infrastructure</td>
                      <td className="px-6 py-4 text-gray-200">Actual pollution generation and compliance monitoring</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Benefits of Obtaining CTE
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Legal Compliance</h3>
                  <p className="text-gray-200 text-sm">
                    Avoids penalties, legal action, and project shutdowns for operating without consent.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Smooth Project Setup</h3>
                  <p className="text-gray-200 text-sm">
                    Facilitates uninterrupted construction and installation activities.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Environmental Protection</h3>
                  <p className="text-gray-200 text-sm">
                    Ensures pollution control measures are integrated from the design stage.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Easier CTO Approval</h3>
                  <p className="text-gray-200 text-sm">
                    Having CTE in place streamlines the process of obtaining Consent to Operate later.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Investor Confidence</h3>
                  <p className="text-gray-200 text-sm">
                    Demonstrates regulatory compliance, enhancing credibility with investors and lenders.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Access to Incentives</h3>
                  <p className="text-gray-200 text-sm">
                    Eligibility for government subsidies, grants, and environmental certifications.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                CTE Application Process
              </h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#3d9cf5] rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Prepare Project Report</h3>
                    <p className="text-gray-200 text-sm">Develop a detailed project report including pollution control plans, effluent/emission details, and waste management strategy.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#3d9cf5] rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Submit Application</h3>
                    <p className="text-gray-200 text-sm">File application with the SPCB/CPCB along with required documents, site plan, and consent fees.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#3d9cf5] rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Site Inspection</h3>
                    <p className="text-gray-200 text-sm">SPCB officials conduct site inspection to verify details and assess environmental feasibility.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#3d9cf5] rounded-full flex items-center justify-center text-white font-bold mr-4">4</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Review and Approval</h3>
                    <p className="text-gray-200 text-sm">SPCB reviews the application, project report, and inspection findings. May request additional information or modifications.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#3d9cf5] rounded-full flex items-center justify-center text-white font-bold mr-4">5</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Grant of CTE</h3>
                    <p className="text-gray-200 text-sm">Upon satisfactory review, SPCB issues Consent to Establish with specific conditions and timelines.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#3d9cf5] rounded-full flex items-center justify-center text-white font-bold mr-4">6</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Compliance and CTO</h3>
                    <p className="text-gray-200 text-sm">After construction completion, apply for Consent to Operate (CTO) to begin production.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <ServiceConsultationForm 
                serviceName="Consent to Establish (CTE)"
                serviceCategory="Environmental"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
