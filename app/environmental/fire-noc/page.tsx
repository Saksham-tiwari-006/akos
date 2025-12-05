'use client';

import ServiceConsultationForm from '@/app/components/ServiceConsultationForm';

export default function FireNOCPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            NOC from the Fire Department
          </h1>
          <p className="text-xl text-gray-300">
            Fire Safety Clearance Certificate for Buildings and Premises
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                What is an NOC from the Fire Department?
              </h2>
              <p className="text-gray-200 mb-4">
                A No Objection Certificate (NOC) from the Fire Department is a vital document. It confirms that a building or premise meets the necessary fire safety standards and is free from fire hazards. In India, these standards are primarily set by the National Building Code of India (NBC), 2016, along with state-specific Fire Services Acts and Rules, which guide local authorities in granting clearance.
              </p>
              <p className="text-gray-200">
                This certificate is crucial for the safety of occupants and the building itself, serving as an official clearance from the local fire service. It is mandatorily required under municipality by-laws for obtaining building plan approvals, trade licenses, and occupancy certificates. Furthermore, it is often a prerequisite for securing insurance claims in the event of a fire.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                For Whom is the Fire Safety NOC Mandatory?
              </h2>
              <p className="text-gray-200 mb-4">The Fire Department NOC is mandatory for a wide range of structures:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">Residential buildings (above 15 meters in height or 2,000–3,000 sq. meters)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">Commercial buildings (offices, shops, malls, complexes)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">Educational institutions (schools, colleges, coaching centers)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">Hospitals and healthcare facilities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">Hotels and guesthouses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">Industrial units and factories</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">Public assembly buildings (theatres, auditoriums, banquet halls)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">Storage facilities for hazardous materials</span>
                </li>
              </ul>
              <div className="mt-4 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <p className="text-gray-200 text-sm">
                  <strong>Note:</strong> Applicability can vary according to state regulations and the design or size of the building.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">Benefits of Getting the Fire Department NOC</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Ensures Safety</h3>
                  <p className="text-gray-200 text-sm">
                    Guarantees effective fire prevention and fighting measures are in place.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Legal Compliance</h3>
                  <p className="text-gray-200 text-sm">
                    Fulfills mandatory legal requirement, avoiding penalties and legal action.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Insurance Requirement</h3>
                  <p className="text-gray-200 text-sm">
                    Many insurance companies require Fire NOC for property coverage.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Occupancy Certificate</h3>
                  <p className="text-gray-200 text-sm">
                    Required prerequisite for obtaining Occupancy or Completion Certificate.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Peace of Mind</h3>
                  <p className="text-gray-200 text-sm">
                    Provides confidence that your building is fire-safe and compliant.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Business Credibility</h3>
                  <p className="text-gray-200 text-sm">
                    Reflects responsible practices, enhancing trust with stakeholders.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">Types of Fire NOC Certificates</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-[#3d9cf5] mb-3">Fire NOCs by Project Stage</h3>
                  <div className="space-y-3">
                    <div className="bg-white/5 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-2">Provisional Fire NOC</h4>
                      <p className="text-gray-200 text-sm">
                        Issued during construction phase. Certifies that building plans incorporate all necessary fire safety measures as per approved designs, allowing construction to proceed.
                      </p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4">
                      <h4 className="font-semibold text-white mb-2">Final Fire NOC</h4>
                      <p className="text-gray-200 text-sm">
                        Issued upon completion of construction after thorough inspection. Confirms all fire safety systems are installed, functional, and the building fully complies with all fire safety norms.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#3d9cf5] mb-3">Fire NOCs by Facility Type</h3>
                  <div className="grid grid-cols-1 gap-3">
                    <div className="bg-white/5 rounded-lg p-3">
                      <h4 className="font-medium text-white mb-1">Occupancy Fire NOC</h4>
                      <p className="text-gray-200 text-xs">Required for newly constructed buildings before occupation</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <h4 className="font-medium text-white mb-1">Hospital Fire NOC</h4>
                      <p className="text-gray-200 text-xs">Special requirements like fire-rated doors in ICUs, 24x7 fire detection</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <h4 className="font-medium text-white mb-1">Industrial Fire NOC</h4>
                      <p className="text-gray-200 text-xs">For factories with advanced systems like explosion suppression</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-3">
                      <h4 className="font-medium text-white mb-1">Temporary Fire NOC</h4>
                      <p className="text-gray-200 text-xs">For short-term setups like events, fairs (validity: 1-30 days)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <ServiceConsultationForm 
                serviceName="Fire Department NOC"
                serviceCategory="Environmental"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
