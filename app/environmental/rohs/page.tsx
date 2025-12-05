'use client';

import ServiceConsultationForm from '@/app/components/ServiceConsultationForm';

export default function RoHSPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            RoHS Certification
          </h1>
          <p className="text-xl text-gray-300">
            Restriction of Hazardous Substances Compliance
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                What is RoHS Certification?
              </h2>
              <p className="text-gray-200 mb-4">
                RoHS stands for the Restriction of Hazardous Substances. It is a European Union directive that restricts the use of certain hazardous materials commonly found in electrical and electronic products. Although it is an EU directive, its influence is global. Manufacturers worldwide, including those in India, must comply with RoHS standards if they wish to sell their electronic products in the EU or in markets that follow similar environmental norms.
              </p>
              <p className="text-gray-200 mb-4">
                The directive aims to reduce harmful substances such as lead, mercury, cadmium, hexavalent chromium, and certain brominated flame retardants. These substances can harm both the environment and human health when products are discarded improperly.
              </p>
              <p className="text-gray-200">
                RoHS certification ensures that a product contains only permissible levels of restricted substances, thereby making it safer, more environmentally friendly, and compliant with international regulations.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                RoHS Restricted Substances
              </h2>
              <p className="text-gray-200 mb-4">
                The RoHS directive restricts the following ten hazardous substances with specific concentration limits:
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white/5 rounded-lg overflow-hidden">
                  <thead className="bg-white/10">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-white">Substance</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-white">Maximum Concentration</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr>
                      <td className="px-6 py-4 text-gray-200">Lead (Pb)</td>
                      <td className="px-6 py-4 text-gray-200">0.1% (1000 ppm)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-200">Mercury (Hg)</td>
                      <td className="px-6 py-4 text-gray-200">0.1% (1000 ppm)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-200">Cadmium (Cd)</td>
                      <td className="px-6 py-4 text-gray-200">0.01% (100 ppm)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-200">Hexavalent Chromium (Cr6+)</td>
                      <td className="px-6 py-4 text-gray-200">0.1% (1000 ppm)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-200">Polybrominated Biphenyls (PBB)</td>
                      <td className="px-6 py-4 text-gray-200">0.1% (1000 ppm)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-200">Polybrominated Diphenyl Ethers (PBDE)</td>
                      <td className="px-6 py-4 text-gray-200">0.1% (1000 ppm)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-200">Bis(2-Ethylhexyl) Phthalate (DEHP)</td>
                      <td className="px-6 py-4 text-gray-200">0.1% (1000 ppm)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-200">Butyl Benzyl Phthalate (BBP)</td>
                      <td className="px-6 py-4 text-gray-200">0.1% (1000 ppm)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-200">Dibutyl Phthalate (DBP)</td>
                      <td className="px-6 py-4 text-gray-200">0.1% (1000 ppm)</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-200">Diisobutyl Phthalate (DIBP)</td>
                      <td className="px-6 py-4 text-gray-200">0.1% (1000 ppm)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Applicability of RoHS
              </h2>
              <p className="text-gray-200 mb-4">RoHS applies to a wide range of electrical and electronic equipment (EEE), including:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-gray-200 text-sm">• Large household appliances</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-gray-200 text-sm">• Small household appliances</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-gray-200 text-sm">• IT and telecommunications equipment</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-gray-200 text-sm">• Consumer electronics</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-gray-200 text-sm">• Lighting equipment (including LED bulbs)</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-gray-200 text-sm">• Electrical and electronic tools</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-gray-200 text-sm">• Toys, leisure, and sports equipment</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-gray-200 text-sm">• Medical devices</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-gray-200 text-sm">• Monitoring and control instruments</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-gray-200 text-sm">• Automatic dispensers</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Benefits of RoHS Compliance
              </h2>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Global Market Access</h3>
                  <p className="text-gray-200 text-sm">
                    RoHS certification opens doors to European markets and other regions that follow RoHS or similar environmental standards. It is often a prerequisite for selling electronics internationally.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Environmental Protection</h3>
                  <p className="text-gray-200 text-sm">
                    By reducing hazardous substances, RoHS compliance helps minimize environmental pollution, especially when electronic waste is disposed of or recycled.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Consumer Safety</h3>
                  <p className="text-gray-200 text-sm">
                    Products that are RoHS-compliant are safer for end-users, reducing exposure to toxic materials during use and disposal.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Brand Reputation</h3>
                  <p className="text-gray-200 text-sm">
                    Compliance demonstrates corporate responsibility and commitment to sustainability, enhancing brand image and customer trust.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Legal Compliance</h3>
                  <p className="text-gray-200 text-sm">
                    Helps avoid legal issues, fines, and market bans in countries where RoHS is mandated.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                RoHS Certification Process
              </h2>
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#3d9cf5] rounded-full flex items-center justify-center text-white font-bold mr-4">1</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Material Declaration</h3>
                    <p className="text-gray-200 text-sm">Gather detailed information about all materials and components used in the product.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#3d9cf5] rounded-full flex items-center justify-center text-white font-bold mr-4">2</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Testing</h3>
                    <p className="text-gray-200 text-sm">Submit samples to accredited laboratories for testing to verify compliance with RoHS limits.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#3d9cf5] rounded-full flex items-center justify-center text-white font-bold mr-4">3</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Documentation</h3>
                    <p className="text-gray-200 text-sm">Prepare technical documentation proving compliance, including test reports and supplier declarations.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-8 h-8 bg-[#3d9cf5] rounded-full flex items-center justify-center text-white font-bold mr-4">4</div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Certification</h3>
                    <p className="text-gray-200 text-sm">Obtain RoHS certification from recognized certification bodies based on successful testing and documentation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <ServiceConsultationForm 
                serviceName="RoHS Certification"
                serviceCategory="Environmental"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
