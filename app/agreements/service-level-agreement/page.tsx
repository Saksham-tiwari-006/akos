'use client';

import ServiceConsultationForm from '@/app/components/ServiceConsultationForm';

export default function ServiceLevelAgreementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Service Level Agreement (SLA)
          </h1>
          <p className="text-xl text-gray-300">
            Formal contract defining service standards and performance metrics
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                What is a Service Level Agreement?
              </h2>
              <p className="text-gray-200 mb-4">
                A Service Level Agreement (SLA) is a formal contract between a service provider and a client that clearly defines the expected level of service, performance standards, and responsibilities of both parties. It outlines specific metrics such as uptime, response time, issue resolution, and support availability, ensuring accountability and transparency.
              </p>
              <p className="text-gray-200">
                In India, SLAs are often integrated into Master Service Agreements (MSAs) or vendor contracts, and their enforceability depends on them being part of a legally valid agreement under the Indian Contract Act, 1872. SLAs are widely used in IT services, telecommunications, cloud computing, customer support, and managed services to build trust, prevent misunderstandings, and ensure that services are delivered as promised.
              </p>
            </div>

            {/* Why Essential */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Why is an SLA Essential for Every Indian Business?
              </h2>
              <p className="text-gray-200 mb-4">
                In today's competitive and service-driven economy, a Service Level Agreement (SLA) isn't just a corporate formality; it's a critical tool for business success. Whether you're a startup, SME, or large enterprise in India, having an SLA in place can dramatically improve your service delivery, client relationships, and long-term growth.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Clarity in Commitments</h3>
                  <p className="text-gray-200 text-sm">
                    Sets clear expectations between the service provider and client regarding scope, timelines, quality, and responsibilities.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Builds Trust and Professionalism</h3>
                  <p className="text-gray-200 text-sm">
                    A documented SLA signals credibility and professionalism, vital for winning and retaining customers.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Performance Tracking</h3>
                  <p className="text-gray-200 text-sm">
                    Defines measurable service benchmarks like response times, helping track performance and improve efficiency.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Legal Protection</h3>
                  <p className="text-gray-200 text-sm">
                    Offers legal safeguards in case of service failures, ensuring remedies like penalties or corrective action.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Strengthens Vendor Relationships</h3>
                  <p className="text-gray-200 text-sm">
                    Essential for enforcing standards and ensuring smooth delivery of outsourced services.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Improves Customer Satisfaction</h3>
                  <p className="text-gray-200 text-sm">
                    By setting and meeting defined service levels, businesses enhance customer experience and brand loyalty.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">B2B & Government Deals</h3>
                  <p className="text-gray-200 text-sm">
                    Most B2B clients and government tenders in India require SLAs as part of contract compliance.
                  </p>
                </div>
              </div>
              <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <p className="text-gray-200 text-sm">
                  <strong>Note:</strong> For industries like IT, telecom, cloud services, and BPO, SLAs may also have to comply with sector-specific regulations such as TRAI regulations for ISPs, RBI guidelines for banking IT outsourcing, or MeitY's cloud guidelines.
                </p>
              </div>
            </div>

            {/* SLA vs Regular Contract */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Is an SLA Different from a Regular Contract?
              </h2>
              <p className="text-gray-200 mb-4">
                Yes, a Service Level Agreement (SLA) is different from a regular contract. While both are legally binding, an SLA specifically focuses on service performance and expectations, whereas a regular contract covers broader terms like payment, duration, and general obligations.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-gray-200 text-sm">
                  <thead className="bg-white/5">
                    <tr>
                      <th className="p-3 font-semibold">Aspect</th>
                      <th className="p-3 font-semibold">SLA</th>
                      <th className="p-3 font-semibold">Regular Contract</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr>
                      <td className="p-3 font-medium">Purpose</td>
                      <td className="p-3">Defines service performance metrics and quality expectations</td>
                      <td className="p-3">Defines general terms of a business agreement</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Scope</td>
                      <td className="p-3">Narrow – focuses on specific services and performance levels</td>
                      <td className="p-3">Broad – includes pricing, legal terms, liabilities, etc.</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Key Elements</td>
                      <td className="p-3">Uptime, response time, resolution time, and penalties</td>
                      <td className="p-3">Deliverables, payment terms, confidentiality, dispute resolution</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Measurement</td>
                      <td className="p-3">Emphasizes measurable KPIs and monitoring mechanisms</td>
                      <td className="p-3">May or may not include performance measurements</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Modification</td>
                      <td className="p-3">Updated regularly to reflect service changes</td>
                      <td className="p-3">Modified less frequently</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Penalty Clause</td>
                      <td className="p-3">Common and specific to SLA violations</td>
                      <td className="p-3">May or may not include penalties</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Example Use Case</td>
                      <td className="p-3">IT services, cloud hosting, customer support</td>
                      <td className="p-3">Employment agreement, lease contract, vendor agreement</td>
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
                serviceName="Service Level Agreement"
                serviceCategory="Agreements & Contracts"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
