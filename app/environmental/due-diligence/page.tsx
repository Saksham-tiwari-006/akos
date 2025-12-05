'use client';

import ServiceConsultationForm from '@/app/components/ServiceConsultationForm';

export default function DueDiligencePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Due Diligence Services
          </h1>
          <p className="text-xl text-gray-300">
            Comprehensive Business Risk Assessment and Verification
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                What is Due Diligence?
              </h2>
              <p className="text-gray-200 mb-4">
                Due Diligence is a comprehensive and systematic investigation, audit, or review conducted to evaluate the viability, risks, opportunities, and compliance status of a business, investment, transaction, or partnership. It is a critical process undertaken before making significant business decisions such as mergers and acquisitions (M&A), investments, partnerships, or entering into major contracts.
              </p>
              <p className="text-gray-200 mb-4">
                In India, due diligence involves examining legal, financial, operational, environmental, and regulatory aspects of a target entity. It is governed by principles established under various laws, including the Companies Act, 2013, SEBI regulations, environmental laws, and industry-specific statutes. The goal is to uncover hidden liabilities, verify claims, and ensure informed decision-making.
              </p>
              <p className="text-gray-200">
                Due diligence is not just a risk mitigation tool—it is a strategic process that provides deep insights, enhances negotiation positions, and builds confidence among stakeholders.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Types of Due Diligence
              </h2>
              <div className="space-y-3">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Legal Due Diligence</h3>
                  <p className="text-gray-200 text-sm mb-2">
                    Examines legal standing, compliance, contracts, intellectual property, litigation, and regulatory approvals.
                  </p>
                  <p className="text-gray-200 text-xs">
                    Key Areas: Corporate structure, shareholder agreements, licenses, permits, pending litigation, property titles, employment contracts.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Financial Due Diligence</h3>
                  <p className="text-gray-200 text-sm mb-2">
                    Reviews financial statements, tax compliance, assets, liabilities, cash flow, and profitability.
                  </p>
                  <p className="text-gray-200 text-xs">
                    Key Areas: Audited financials, tax returns, debt obligations, working capital, revenue recognition, off-balance-sheet liabilities.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Operational Due Diligence</h3>
                  <p className="text-gray-200 text-sm mb-2">
                    Assesses business operations, processes, supply chain, technology, and organizational efficiency.
                  </p>
                  <p className="text-gray-200 text-xs">
                    Key Areas: Production capacity, quality control, vendor relationships, IT infrastructure, human resources.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Environmental Due Diligence</h3>
                  <p className="text-gray-200 text-sm mb-2">
                    Evaluates environmental compliance, pollution control, waste management, and sustainability practices.
                  </p>
                  <p className="text-gray-200 text-xs">
                    Key Areas: Environmental clearances, pollution permits, waste disposal records, contamination risks.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Commercial Due Diligence</h3>
                  <p className="text-gray-200 text-sm mb-2">
                    Analyzes market position, competitive landscape, customer base, and growth potential.
                  </p>
                  <p className="text-gray-200 text-xs">
                    Key Areas: Market size, customer contracts, competitive advantages, pricing strategy, sales pipeline.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Tax Due Diligence</h3>
                  <p className="text-gray-200 text-sm mb-2">
                    Reviews tax compliance, returns, assessments, disputes, and potential tax liabilities.
                  </p>
                  <p className="text-gray-200 text-xs">
                    Key Areas: Income tax, GST, customs duty, TDS compliance, tax litigation, transfer pricing.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">HR/Cultural Due Diligence</h3>
                  <p className="text-gray-200 text-sm mb-2">
                    Evaluates workforce, employee relations, organizational culture, and HR policies.
                  </p>
                  <p className="text-gray-200 text-xs">
                    Key Areas: Employee contracts, compensation structures, labor disputes, retention rates, culture fit.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                When is Due Diligence Required?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white/5 rounded-lg p-3">
                  <h3 className="font-semibold text-white mb-1">Mergers & Acquisitions</h3>
                  <p className="text-gray-200 text-xs">Before acquiring or merging with another company</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <h3 className="font-semibold text-white mb-1">Investment Decisions</h3>
                  <p className="text-gray-200 text-xs">Private equity, venture capital, or angel investments</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <h3 className="font-semibold text-white mb-1">Partnerships & JVs</h3>
                  <p className="text-gray-200 text-xs">Entering into joint ventures or strategic partnerships</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <h3 className="font-semibold text-white mb-1">Real Estate Transactions</h3>
                  <p className="text-gray-200 text-xs">Purchasing commercial or industrial property</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <h3 className="font-semibold text-white mb-1">IPO Preparation</h3>
                  <p className="text-gray-200 text-xs">Preparing for public listing and investor scrutiny</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <h3 className="font-semibold text-white mb-1">Vendor Assessment</h3>
                  <p className="text-gray-200 text-xs">Evaluating suppliers or service providers</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <h3 className="font-semibold text-white mb-1">Loan/Financing</h3>
                  <p className="text-gray-200 text-xs">Banks and lenders conducting credit assessments</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <h3 className="font-semibold text-white mb-1">Exit Strategy</h3>
                  <p className="text-gray-200 text-xs">Preparing a business for sale or investor exit</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Benefits of Due Diligence
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Risk Identification</h3>
                  <p className="text-gray-200 text-sm">
                    Uncovers hidden liabilities, legal issues, financial irregularities, and operational risks.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Informed Decision-Making</h3>
                  <p className="text-gray-200 text-sm">
                    Provides comprehensive information to make confident business decisions.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Valuation Accuracy</h3>
                  <p className="text-gray-200 text-sm">
                    Ensures fair valuation by verifying assets, liabilities, and earnings potential.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Negotiation Leverage</h3>
                  <p className="text-gray-200 text-sm">
                    Findings can be used to renegotiate terms, price adjustments, or indemnities.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Compliance Verification</h3>
                  <p className="text-gray-200 text-sm">
                    Confirms adherence to legal, regulatory, and tax requirements.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Fraud Detection</h3>
                  <p className="text-gray-200 text-sm">
                    Identifies potential fraud, misrepresentation, or financial manipulation.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Stakeholder Confidence</h3>
                  <p className="text-gray-200 text-sm">
                    Builds trust among investors, lenders, and partners by demonstrating thorough review.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Post-Transaction Success</h3>
                  <p className="text-gray-200 text-sm">
                    Provides insights for smooth integration and operational alignment post-deal.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Due Diligence Process
              </h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#3d9cf5] rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Planning and Scoping</h3>
                    <p className="text-gray-200 text-sm">Define objectives, scope, timeline, and due diligence team. Develop checklist and information request list.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#3d9cf5] rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Information Gathering</h3>
                    <p className="text-gray-200 text-sm">Request and collect documents, records, financial statements, contracts, licenses, and other relevant data from the target entity.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#3d9cf5] rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Document Review and Analysis</h3>
                    <p className="text-gray-200 text-sm">Examine documents for accuracy, compliance, risks, and discrepancies. Conduct financial, legal, and operational analysis.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#3d9cf5] rounded-full flex items-center justify-center text-white font-bold mr-4">4</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Site Visits and Interviews</h3>
                    <p className="text-gray-200 text-sm">Visit facilities, meet management, interview key personnel, and observe operations firsthand.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#3d9cf5] rounded-full flex items-center justify-center text-white font-bold mr-4">5</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Risk Assessment</h3>
                    <p className="text-gray-200 text-sm">Identify and evaluate risks, liabilities, and red flags. Assess their impact on the transaction.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#3d9cf5] rounded-full flex items-center justify-center text-white font-bold mr-4">6</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Reporting</h3>
                    <p className="text-gray-200 text-sm">Prepare a detailed due diligence report with findings, observations, risk ratings, and recommendations.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#3d9cf5] rounded-full flex items-center justify-center text-white font-bold mr-4">7</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Decision and Negotiation</h3>
                    <p className="text-gray-200 text-sm">Use findings to make go/no-go decisions, renegotiate terms, or structure deal protections.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <ServiceConsultationForm 
                serviceName="Due Diligence Services"
                serviceCategory="Environmental"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
