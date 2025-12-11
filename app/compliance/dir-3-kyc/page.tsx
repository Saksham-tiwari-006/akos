'use client'

import React from 'react';
import { Building2, Users, FileText, CheckCircle, AlertTriangle, Calendar, Shield, Scale, Clock, UserCheck, Globe } from 'lucide-react';
import GetStartedForm from '@/app/components/GetStartedForm';

export default function Dir3KycPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
              <UserCheck className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              DIR-3 KYC for Directors
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Complete guide to annual KYC compliance for directors, filing requirements, and processes for Indian, NRI, and Foreign National directors.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* What is DIR-3 KYC */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <UserCheck className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">What is DIR-3 KYC?</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6">
                  DIR-3 KYC is an annual KYC (Know Your Customer) form that must be filed by every person holding a Director Identification Number (DIN) to update their details with the Ministry of Corporate Affairs (MCA). It ensures that director information remains current and accurate.
                </p>
                
                <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-6 rounded-lg border border-blue-500/20 mb-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Key Features of DIR-3 KYC</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-blue-400">📋 Annual Requirement</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Must be filed by <strong>September 30</strong> every year</li>
                        <li>• Applies to all DIN holders as of March 31</li>
                        <li>• Mandatory even if director details unchanged</li>
                        <li>• Required for active and inactive directors</li>
                        <li>• Penalty of <strong>₹5,000</strong> for non-compliance</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-green-400">🎯 Purpose & Objective</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Update director personal details</li>
                        <li>• Verify current contact information</li>
                        <li>• Maintain accurate DIN database</li>
                        <li>• Ensure regulatory compliance</li>
                        <li>• Prevent DIN deactivation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* DIR-3 KYC vs DIR-3 KYC Web */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Scale className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">DIR-3 KYC vs DIR-3 KYC Web</h2>
              </div>
              
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left p-4 text-orange-400">Aspect</th>
                      <th className="text-left p-4 text-blue-400">DIR-3 KYC</th>
                      <th className="text-left p-4 text-green-400">DIR-3 KYC Web</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-300">
                    <tr className="border-b border-white/10">
                      <td className="p-4 font-semibold">Purpose</td>
                      <td className="p-4">First-time filing or when details need update</td>
                      <td className="p-4">Annual confirmation when no changes required</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-4 font-semibold">Applicability</td>
                      <td className="p-4">New directors or directors with changed information</td>
                      <td className="p-4">Existing directors who have previously filed DIR-3 KYC</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-4 font-semibold">Data Entry</td>
                      <td className="p-4">Complete fresh data entry required</td>
                      <td className="p-4">Pre-filled form, only confirmation needed</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-4 font-semibold">Document Attachments</td>
                      <td className="p-4">All supporting documents must be uploaded</td>
                      <td className="p-4">No document upload required</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-4 font-semibold">Verification</td>
                      <td className="p-4">OTP + DSC + Professional certification</td>
                      <td className="p-4">Simple OTP verification</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-4 font-semibold">Complexity</td>
                      <td className="p-4">Detailed and comprehensive form</td>
                      <td className="p-4">Simple and quick process</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-4 font-semibold">Due Date</td>
                      <td className="p-4">September 30 annually</td>
                      <td className="p-4">September 30 annually</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-4 font-semibold">Penalty</td>
                      <td className="p-4">₹5,000 for non-compliance</td>
                      <td className="p-4">₹5,000 for non-compliance</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-4 font-semibold">Processing Time</td>
                      <td className="p-4">2-5 working days</td>
                      <td className="p-4">Immediate confirmation</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-4 font-semibold">Professional Help</td>
                      <td className="p-4">Usually requires professional assistance</td>
                      <td className="p-4">Can be done by director personally</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Purpose and Legal Framework */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Scale className="w-8 h-8 text-purple-400" />
                <h2 className="text-3xl font-bold text-white">Purpose and Legal Framework</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-purple-400">🎯 Purpose of DIR-3 KYC</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-purple-300">Data Accuracy</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Ensure current and accurate director information</li>
                        <li>• Update contact details and addresses</li>
                        <li>• Verify identification documents</li>
                        <li>• Maintain reliable director database</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-purple-300">Transparency Enhancement</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Improve corporate governance standards</li>
                        <li>• Enhance transparency in director appointments</li>
                        <li>• Facilitate better regulatory oversight</li>
                        <li>• Enable effective communication with directors</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400">🛡️ Fraud Prevention</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-red-300">Identity Verification</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Prevent identity theft and misuse</li>
                        <li>• Verify genuine director appointments</li>
                        <li>• Detect suspicious directorship patterns</li>
                        <li>• Maintain integrity of DIN system</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-red-300">Regulatory Control</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Enable effective regulatory monitoring</li>
                        <li>• Facilitate compliance enforcement</li>
                        <li>• Support investigation activities</li>
                        <li>• Maintain active DIN status</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">⚖️ Legal Provisions</h3>
                  <div className="bg-blue-600/10 p-4 rounded border border-blue-500/20">
                    <h4 className="font-semibold mb-3 text-blue-300">Rule 12A of Companies (Appointment and Qualification of Directors) Rules, 2014</h4>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Mandatory annual KYC filing requirement</li>
                      <li>• Prescribed format and procedure</li>
                      <li>• Penalty provisions for non-compliance</li>
                      <li>• DIN deactivation consequences</li>
                      <li>• Professional certification requirements</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Who Should File */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Users className="w-8 h-8 text-yellow-400" />
                <h2 className="text-3xl font-bold text-white">Who Should File DIR-3 KYC?</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-yellow-400">📋 Universal Applicability</h3>
                  <p className="text-gray-300 mb-4">
                    Every person holding a Director Identification Number (DIN) as on March 31 must file DIR-3 KYC by September 30 of the same financial year, regardless of their current directorship status.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-yellow-300">Must File Even If:</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Not currently a director in any company</li>
                        <li>• Disqualified from being a director</li>
                        <li>• DIN has never been used for appointments</li>
                        <li>• Resigned from all directorships</li>
                        <li>• Companies have been dissolved/struck off</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-yellow-300">Filing Options:</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• <strong>DIR-3 KYC:</strong> First-time or when details need update</li>
                        <li>• <strong>DIR-3 KYC Web:</strong> For directors who previously filed DIR-3 KYC</li>
                        <li>• <strong>Both have same deadline:</strong> September 30</li>
                        <li>• <strong>Same penalty:</strong> ₹5,000 for non-compliance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* NRI Directors */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Globe className="w-8 h-8 text-indigo-400" />
                <h2 className="text-3xl font-bold text-white">NRI Directors Requirements</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-indigo-500/10 p-6 rounded-lg border border-indigo-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-indigo-400">🌏 Special Requirements for NRI Directors</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-indigo-300">Mandatory Requirements</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• <strong>Nationality:</strong> Must specify current nationality</li>
                        <li>• <strong>Passport:</strong> Passport details are mandatory</li>
                        <li>• <strong>PAN:</strong> PAN is optional but recommended</li>
                        <li>• <strong>Address Proof:</strong> Overseas address documentation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-indigo-300">Additional Compliance</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• <strong>DSC:</strong> Digital Signature Certificate required</li>
                        <li>• <strong>Contact Verification:</strong> Valid mobile and email</li>
                        <li>• <strong>Professional Certification:</strong> CA/CS/CMA attestation</li>
                        <li>• <strong>Online Filing:</strong> Must be filed electronically</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-orange-400">⚠️ Consequences of Non-Compliance for NRIs</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-orange-300">Immediate Impact</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• ₹5,000 penalty for delayed/non-filing</li>
                        <li>• DIN becomes inactive/deactivated</li>
                        <li>• Cannot accept new directorship appointments</li>
                        <li>• Existing directorships may be affected</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-orange-300">Long-term Consequences</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Difficulty in reactivating DIN</li>
                        <li>• Additional compliance requirements</li>
                        <li>• Potential disqualification proceedings</li>
                        <li>• Impact on investment and business activities</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Foreign National Directors */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Globe className="w-8 h-8 text-teal-400" />
                <h2 className="text-3xl font-bold text-white">Foreign National Directors</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-teal-500/10 p-6 rounded-lg border border-teal-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-teal-400">🌍 Special Requirements for Foreign Nationals</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-teal-300">Document Requirements</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• <strong>Passport:</strong> Valid passport is mandatory</li>
                        <li>• <strong>Address Proof:</strong> Notarized and apostilled/consularized</li>
                        <li>• <strong>Translation:</strong> Documents in English or certified translation</li>
                        <li>• <strong>Verification:</strong> Embassy/consulate verification may be required</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-teal-300">Contact Information</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• <strong>Mobile Number:</strong> International number acceptable</li>
                        <li>• <strong>Email Address:</strong> Valid and accessible email</li>
                        <li>• <strong>Address:</strong> Foreign residential address allowed</li>
                        <li>• <strong>Communication:</strong> English communication preferred</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-pink-500/10 p-6 rounded-lg border border-pink-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-pink-400">📋 Filing Process for Foreign Nationals</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-pink-300">Required Steps</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Obtain Digital Signature Certificate (DSC)</li>
                        <li>• Get documents notarized in home country</li>
                        <li>• Complete apostille/consularization process</li>
                        <li>• Professional attestation by Indian CA/CS/CMA</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-pink-300">Professional Assistance</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Mandatory professional certification</li>
                        <li>• Expert guidance for document preparation</li>
                        <li>• Assistance with DSC procurement</li>
                        <li>• Timely filing to avoid penalties</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Required Documents */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Required Documents for DIR-3 KYC</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">📄 Common Documents (All Directors)</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-green-300">Mandatory for All</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• <strong>Mobile Number:</strong> Valid and accessible</li>
                        <li>• <strong>Email Address:</strong> Active email for communication</li>
                        <li>• <strong>Digital Signature Certificate (DSC):</strong> For filing</li>
                        <li>• <strong>Recent Photograph:</strong> As per MCA specifications</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-green-300">Professional Certification</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Certificate by practicing CA/CS/CMA</li>
                        <li>• Verification of director identity</li>
                        <li>• Confirmation of document authenticity</li>
                        <li>• Professional seal and signature required</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">🇮🇳 Indian Directors</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-blue-300">Identity Documents (Mandatory)</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• <strong>PAN Card:</strong> Mandatory for all Indian directors</li>
                        <li>• <strong>Aadhaar Card:</strong> Required for identity verification</li>
                        <li>• Alternative: Voter ID/Driving License/Passport</li>
                        <li>• All documents must be clear and valid</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-blue-300">Address Proof</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• <strong>Aadhaar Card</strong> (if address is updated)</li>
                        <li>• <strong>Utility Bills:</strong> Electricity/Water/Gas</li>
                        <li>• <strong>Bank Statement:</strong> Not older than 3 months</li>
                        <li>• <strong>Voter ID/Driving License/Passport</strong></li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-purple-400">🌏 Foreign National Directors</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-purple-300">Identity Documents</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• <strong>Passport:</strong> Valid passport is mandatory</li>
                        <li>• <strong>Driving License:</strong> From country of residence</li>
                        <li>• <strong>National ID:</strong> If available from home country</li>
                        <li>• All documents must be in English or translated</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-purple-300">Address Proof</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• <strong>Bank Statement:</strong> Not older than 12 months</li>
                        <li>• <strong>Utility Bills:</strong> Recent utility/phone bills</li>
                        <li>• <strong>Rental Agreement:</strong> If applicable</li>
                        <li>• <strong>Must be notarized and apostilled/consularized</strong></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Get Started */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Need Help with DIR-3 KYC Filing?</h2>
              <p className="text-xl mb-6 opacity-90">
                Get expert assistance for timely DIR-3 KYC compliance. Don't risk DIN deactivation!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">Sep 30</div>
                  <div className="text-sm opacity-80">Annual Deadline</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">₹5,000</div>
                  <div className="text-sm opacity-80">Penalty for Non-Filing</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">All DINs</div>
                  <div className="text-sm opacity-80">Must File</div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Form */}
          <div className="lg:col-span-1">
            <GetStartedForm 
              serviceName="DIR-3 KYC Filing"
              serviceCategory="Compliance"
            />
          </div>
        </div>
      </div>
    </div>
  );
}