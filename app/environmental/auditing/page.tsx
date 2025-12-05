'use client';

import ServiceConsultationForm from '@/app/components/ServiceConsultationForm';

export default function EnvironmentalAuditPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Environmental Audit
          </h1>
          <p className="text-xl text-gray-300">
            Comprehensive Environmental Compliance Assessment
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                What is an Environmental Audit?
              </h2>
              <p className="text-gray-200 mb-4">
                An Environmental Audit is a systematic, documented, and objective evaluation of an organization's environmental performance, compliance with environmental laws and regulations, and the effectiveness of its environmental management systems. It is a critical tool for identifying environmental risks, ensuring legal compliance, and promoting sustainable business practices.
              </p>
              <p className="text-gray-200 mb-4">
                In India, environmental audits are governed by various legislations, including the Environment (Protection) Act, 1986, the Water (Prevention and Control of Pollution) Act, 1974, the Air (Prevention and Control of Pollution) Act, 1981, and the Hazardous and Other Wastes (Management and Transboundary Movement) Rules, 2016. Certain industries are mandated to conduct environmental audits periodically and submit audit reports to State Pollution Control Boards (SPCBs) or the Central Pollution Control Board (CPCB).
              </p>
              <p className="text-gray-200">
                An environmental audit is not just about regulatory compliance—it is a proactive approach to minimizing environmental impact, improving operational efficiency, and enhancing corporate reputation.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Types of Environmental Audits
              </h2>
              <div className="space-y-3">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Compliance Audit</h3>
                  <p className="text-gray-200 text-sm">
                    Evaluates adherence to environmental laws, regulations, permits, and standards. It identifies areas of non-compliance and recommends corrective actions.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Environmental Management System (EMS) Audit</h3>
                  <p className="text-gray-200 text-sm">
                    Assesses the effectiveness of an organization's EMS (such as ISO 14001 certification). It reviews policies, procedures, and practices for environmental management.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Energy Audit</h3>
                  <p className="text-gray-200 text-sm">
                    Focuses on energy consumption, efficiency, and conservation. Mandatory for certain energy-intensive industries under the Energy Conservation Act, 2001.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Waste Audit</h3>
                  <p className="text-gray-200 text-sm">
                    Examines the generation, handling, storage, treatment, and disposal of solid, hazardous, and other wastes. Ensures compliance with waste management rules.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Water Audit</h3>
                  <p className="text-gray-200 text-sm">
                    Evaluates water usage, wastewater generation, and treatment processes. Identifies opportunities for water conservation and pollution prevention.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Air Quality Audit</h3>
                  <p className="text-gray-200 text-sm">
                    Assesses air emissions, air pollution control measures, and compliance with emission standards.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Site/Facility Audit</h3>
                  <p className="text-gray-200 text-sm">
                    Comprehensive review of a specific facility or site for all environmental aspects, including land, water, air, waste, and hazardous materials.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Who Needs an Environmental Audit?
              </h2>
              <p className="text-gray-200 mb-4">Environmental audits are mandatory or recommended for:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-gray-200 text-sm">• Industries under Red and Orange categories (as per CPCB classification)</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-gray-200 text-sm">• Manufacturing units (chemicals, pharmaceuticals, textiles, etc.)</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-gray-200 text-sm">• Power plants and energy facilities</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-gray-200 text-sm">• Mining and mineral processing industries</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-gray-200 text-sm">• Hazardous waste generators and handlers</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-gray-200 text-sm">• Organizations with ISO 14001 certification</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-gray-200 text-sm">• Companies seeking environmental clearances</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-gray-200 text-sm">• Any organization aiming for sustainability and best practices</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Benefits of Environmental Audit
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Regulatory Compliance</h3>
                  <p className="text-gray-200 text-sm">
                    Ensures adherence to environmental laws, avoiding penalties, fines, and legal action.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Risk Management</h3>
                  <p className="text-gray-200 text-sm">
                    Identifies environmental risks and liabilities before they become major issues.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Cost Savings</h3>
                  <p className="text-gray-200 text-sm">
                    Highlights inefficiencies in resource use (energy, water, raw materials), leading to cost reductions.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Improved Performance</h3>
                  <p className="text-gray-200 text-sm">
                    Provides actionable recommendations to enhance environmental management systems.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Enhanced Reputation</h3>
                  <p className="text-gray-200 text-sm">
                    Demonstrates commitment to sustainability, improving stakeholder trust and brand value.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Competitive Advantage</h3>
                  <p className="text-gray-200 text-sm">
                    Meets client, investor, and market expectations for environmental responsibility.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Continuous Improvement</h3>
                  <p className="text-gray-200 text-sm">
                    Establishes a baseline for tracking progress and setting improvement goals.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Legal Protection</h3>
                  <p className="text-gray-200 text-sm">
                    Provides documented evidence of due diligence in environmental management.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Environmental Audit Process
              </h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#3d9cf5] rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Planning and Scoping</h3>
                    <p className="text-gray-200 text-sm">Define audit objectives, scope, criteria, and methodology. Assemble the audit team.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#3d9cf5] rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Data Collection and Review</h3>
                    <p className="text-gray-200 text-sm">Gather documents, permits, records, and conduct interviews with key personnel.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#3d9cf5] rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Site Inspection</h3>
                    <p className="text-gray-200 text-sm">Conduct physical inspection of facilities, equipment, waste storage, effluent treatment plants, etc.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#3d9cf5] rounded-full flex items-center justify-center text-white font-bold mr-4">4</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Analysis and Evaluation</h3>
                    <p className="text-gray-200 text-sm">Compare findings against legal requirements, standards, and best practices. Identify non-compliance and areas for improvement.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#3d9cf5] rounded-full flex items-center justify-center text-white font-bold mr-4">5</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Reporting</h3>
                    <p className="text-gray-200 text-sm">Prepare a comprehensive audit report with findings, observations, and recommendations.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#3d9cf5] rounded-full flex items-center justify-center text-white font-bold mr-4">6</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Corrective Action and Follow-Up</h3>
                    <p className="text-gray-200 text-sm">Implement corrective measures and monitor progress. Schedule follow-up audits as needed.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <ServiceConsultationForm 
                serviceName="Environmental Audit"
                serviceCategory="Environmental"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
