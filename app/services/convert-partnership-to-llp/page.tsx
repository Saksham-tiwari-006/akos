'use client'

import React, { useState } from 'react';
import { RefreshCw, FileText, CheckCircle, AlertTriangle, Clock, Shield, Building, DollarSign, Users } from 'lucide-react';

export default function ConvertPartnershipToLLPPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    file: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
              <RefreshCw className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Convert Partnership to LLP
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Convert your partnership firm to Limited Liability Partnership through FiLLiP process with complete legal compliance and partner protection.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* What is Partnership to LLP Conversion */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <RefreshCw className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">What is Partnership to LLP Conversion?</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6">
                  Partnership to LLP conversion is the legal process of transforming a partnership firm into a Limited Liability Partnership (LLP) under the Limited Liability Partnership Act, 2008. This conversion provides partners with limited liability protection while maintaining operational flexibility and tax pass-through benefits of a partnership structure.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 p-6 rounded-lg border border-blue-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Building className="w-5 h-5" />
                      Benefits of Conversion
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>Limited Liability:</strong> Partners not personally liable</li>
                      <li>• <strong>Perpetual Succession:</strong> Continuous existence</li>
                      <li>• <strong>Separate Legal Entity:</strong> Distinct from partners</li>
                      <li>• <strong>Operational Flexibility:</strong> No mandatory meetings</li>
                      <li>• <strong>Tax Efficiency:</strong> Pass-through taxation</li>
                      <li>• <strong>Easy Compliance:</strong> Less regulatory burden</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 p-6 rounded-lg border border-purple-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <DollarSign className="w-5 h-5" />
                      Key Differences
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>Liability:</strong> Limited vs Unlimited</li>
                      <li>• <strong>Legal Status:</strong> Separate entity vs Not separate</li>
                      <li>• <strong>Minimum Partners:</strong> 2 minimum (no maximum)</li>
                      <li>• <strong>Registration:</strong> Mandatory LLP registration</li>
                      <li>• <strong>Audit:</strong> Required if contribution > ₹25L</li>
                      <li>• <strong>Compliance:</strong> Annual filings required</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Eligibility for Conversion */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <CheckCircle className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Eligibility for Conversion</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">✅ Eligible Partnerships</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Registered partnership firms</li>
                    <li>• Unregistered partnership firms</li>
                    <li>• Minimum 2 partners required</li>
                    <li>• All partners must be individuals</li>
                    <li>• Partnership deed must exist</li>
                    <li>• No pending legal disputes</li>
                    <li>• Operational business activities</li>
                  </ul>
                </div>
                
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400">❌ Ineligible Entities</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Companies (Pvt Ltd/Public Ltd)</li>
                    <li>• One Person Company (OPC)</li>
                    <li>• Sole proprietorship concerns</li>
                    <li>• Societies and Trusts</li>
                    <li>• HUF (Hindu Undivided Family)</li>
                    <li>• Firms with corporate partners</li>
                    <li>• Dissolved partnerships</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-6 rounded-lg border border-blue-500/30">
                <h3 className="font-semibold text-lg mb-3 text-blue-400 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Partner Requirements
                </h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
                  <div>
                    <h4 className="font-medium text-white mb-2">Individual Partners:</h4>
                    <ul className="space-y-1">
                      <li>• Must be natural persons</li>
                      <li>• Age 18+ years</li>
                      <li>• Indian residents or NRIs</li>
                      <li>• Not disqualified under law</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">Partner Consent:</h4>
                    <ul className="space-y-1">
                      <li>• Written consent required</li>
                      <li>• Unanimous agreement</li>
                      <li>• Digital signature needed</li>
                      <li>• DIN allocation mandatory</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">Designated Partners:</h4>
                    <ul className="space-y-1">
                      <li>• Minimum 2 required</li>
                      <li>• At least 1 Indian resident</li>
                      <li>• Responsible for compliance</li>
                      <li>• Special responsibilities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* FiLLiP Conversion Process */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-purple-400" />
                <h2 className="text-3xl font-bold text-white">FiLLiP Conversion Process</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-blue-400">📋 Partner Consent & Documentation</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Obtain consent from all partners and prepare necessary documentation for conversion.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Written consent from all partners</li>
                        <li>• Partnership deed and amendments</li>
                        <li>• Resolution for LLP conversion</li>
                        <li>• Valuation of partnership assets</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-green-400">🆔 DIN & DPIN Allocation</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Allocate Director Identification Number (DIN) and Designated Partner Identification Number (DPIN) for partners.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Apply for DIN for all partners</li>
                        <li>• Obtain DPIN for designated partners</li>
                        <li>• Digital signature certificate (DSC)</li>
                        <li>• Partner verification and KYC</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-purple-400">📄 Name Reservation & LLP Agreement</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Reserve LLP name and draft comprehensive LLP agreement defining roles and responsibilities.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Apply for name availability (RUN-LLP)</li>
                        <li>• Reserve proposed LLP name</li>
                        <li>• Draft LLP agreement</li>
                        <li>• Define partner roles and contributions</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-yellow-400">🏛️ File FiLLiP with MCA</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Submit Form 17 (FiLLiP) for conversion of partnership firm into Limited Liability Partnership.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Complete Form 17 (FiLLiP) accurately</li>
                        <li>• Attach all required documents</li>
                        <li>• Pay government fees and charges</li>
                        <li>• Submit through MCA portal</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-500/10 p-6 rounded-lg border border-indigo-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-indigo-400">✅ Certificate & Post-Conversion Compliance</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Obtain LLP incorporation certificate and complete post-conversion regulatory compliance.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Receive Certificate of Incorporation</li>
                        <li>• Update business registrations</li>
                        <li>• Open LLP bank accounts</li>
                        <li>• Begin LLP compliance requirements</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Asset & Liability Transfer */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <AlertTriangle className="w-8 h-8 text-orange-400" />
                <h2 className="text-3xl font-bold text-white">Asset & Liability Transfer</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-orange-400">💰 Asset Transfer</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Fixed Assets:</strong> Land, buildings, machinery</li>
                    <li>• <strong>Current Assets:</strong> Stock, debtors, cash</li>
                    <li>• <strong>Investments:</strong> Securities, deposits</li>
                    <li>• <strong>Intellectual Property:</strong> Patents, trademarks</li>
                    <li>• <strong>Business Licenses:</strong> Permits, approvals</li>
                    <li>• <strong>Contracts:</strong> Ongoing agreements</li>
                    <li>• <strong>Bank Accounts:</strong> Transfer or close</li>
                  </ul>
                </div>
                
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400">🏛️ Liability Transfer</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Outstanding Loans:</strong> Bank loans, advances</li>
                    <li>• <strong>Trade Creditors:</strong> Supplier dues</li>
                    <li>• <strong>Employee Liabilities:</strong> Salaries, benefits</li>
                    <li>• <strong>Tax Obligations:</strong> Income tax, GST</li>
                    <li>• <strong>Statutory Dues:</strong> EPF, ESI, labor</li>
                    <li>• <strong>Legal Obligations:</strong> Pending litigations</li>
                    <li>• <strong>Contingent Liabilities:</strong> Guarantees given</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-green-600/20 to-blue-600/20 p-6 rounded-lg border border-green-500/30">
                <h3 className="font-semibold text-lg mb-3 text-green-400 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Transfer Process
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                  <div>
                    <h4 className="font-medium text-white mb-2">Legal Transfer:</h4>
                    <ul className="space-y-1">
                      <li>• Assets transfer by operation of law</li>
                      <li>• No stamp duty on asset transfer</li>
                      <li>• Liabilities automatically transferred</li>
                      <li>• Contracts remain valid</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">Documentation Required:</h4>
                    <ul className="space-y-1">
                      <li>• Asset valuation certificates</li>
                      <li>• Property title documents</li>
                      <li>• Loan agreement novations</li>
                      <li>• Creditor consent letters</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Tax Implications */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <DollarSign className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Tax Implications</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">💰 Income Tax Benefits</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>No Capital Gains:</strong> Conversion not treated as transfer</li>
                    <li>• <strong>Depreciation Continuity:</strong> WDV carries forward</li>
                    <li>• <strong>Loss Set-off:</strong> Unabsorbed losses transfer</li>
                    <li>• <strong>Pass-through Taxation:</strong> No double taxation</li>
                    <li>• <strong>PAN Continuity:</strong> Same PAN can be used</li>
                    <li>• <strong>Assessment Continuity:</strong> Ongoing cases continue</li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">🏛️ GST & Other Taxes</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>GST Registration:</strong> Transfer existing registration</li>
                    <li>• <strong>No GST on Conversion:</strong> Not treated as supply</li>
                    <li>• <strong>Input Tax Credit:</strong> ITC carries forward</li>
                    <li>• <strong>State Taxes:</strong> Registration transfer required</li>
                    <li>• <strong>Professional Tax:</strong> New registration needed</li>
                    <li>• <strong>TDS/TCS:</strong> Continue existing obligations</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-yellow-600/20 to-orange-600/20 p-6 rounded-lg border border-yellow-500/30">
                <h3 className="font-semibold text-lg mb-3 text-yellow-400 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Important Tax Considerations
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                  <div>
                    <h4 className="font-medium text-white mb-2">Before Conversion:</h4>
                    <ul className="space-y-1">
                      <li>• Clear all pending tax returns</li>
                      <li>• Settle outstanding tax liabilities</li>
                      <li>• Update books of accounts</li>
                      <li>• Obtain tax clearance certificates</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">After Conversion:</h4>
                    <ul className="space-y-1">
                      <li>• File intimation with tax authorities</li>
                      <li>• Update PAN and GST details</li>
                      <li>• Maintain separate books for LLP</li>
                      <li>• Begin LLP tax compliance</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Required Documents */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-indigo-400" />
                <h2 className="text-3xl font-bold text-white">Required Documents</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-indigo-500/10 p-6 rounded-lg border border-indigo-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-indigo-400">📋 Partnership Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Partnership deed (registered/unregistered)</li>
                    <li>• Partnership registration certificate</li>
                    <li>• Latest partnership agreement</li>
                    <li>• Partner consent letters</li>
                    <li>• Partnership dissolution resolution</li>
                    <li>• Power of attorney (if applicable)</li>
                    <li>• Minutes of partner meetings</li>
                  </ul>
                </div>
                
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-purple-400">🆔 Partner Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• PAN cards of all partners</li>
                    <li>• Aadhaar cards/identity proofs</li>
                    <li>• Address proofs (utility bills)</li>
                    <li>• Photographs of all partners</li>
                    <li>• DIN allocation forms</li>
                    <li>• DPIN applications</li>
                    <li>• Digital signature certificates</li>
                  </ul>
                </div>
                
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">💼 Financial Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Audited financial statements (3 years)</li>
                    <li>• Balance sheet and P&L account</li>
                    <li>• Asset valuation certificates</li>
                    <li>• Bank statements (6 months)</li>
                    <li>• Investment proofs and certificates</li>
                    <li>• Outstanding debt schedules</li>
                    <li>• Tax returns and assessments</li>
                  </ul>
                </div>
                
                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-orange-400">🏛️ Regulatory Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• GST registration certificate</li>
                    <li>• Professional tax registration</li>
                    <li>• ESI and EPF registrations</li>
                    <li>• Trade licenses and permits</li>
                    <li>• Property documents</li>
                    <li>• Insurance policy details</li>
                    <li>• NOC from regulatory authorities</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Post-Conversion Compliance */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Shield className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">Post-Conversion Compliance</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">📋 LLP Compliance Requirements</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Annual filing of Form 8 & Form 11</li>
                    <li>• Statement of Account & Solvency</li>
                    <li>• Audit if contribution > ₹25 lakhs</li>
                    <li>• Income tax returns as LLP</li>
                    <li>• GST returns and compliance</li>
                    <li>• Designated partner changes (Form 4)</li>
                    <li>• Change in LLP agreement (Form 3)</li>
                  </ul>
                </div>
                
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">✅ Immediate Actions</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Open LLP bank accounts</li>
                    <li>• Update all business registrations</li>
                    <li>• Inform creditors and customers</li>
                    <li>• Update contracts and agreements</li>
                    <li>• Print new letterheads and invoices</li>
                    <li>• Update website and marketing materials</li>
                    <li>• Maintain LLP books and records</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Timeline and Costs */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Clock className="w-8 h-8 text-yellow-400" />
                <h2 className="text-3xl font-bold text-white">Timeline & Costs</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-yellow-400">⏰ Conversion Timeline</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Documentation & Consent:</strong> 7-15 days</li>
                    <li>• <strong>DIN & DPIN Allocation:</strong> 10-20 days</li>
                    <li>• <strong>Name Reservation:</strong> 1-3 days</li>
                    <li>• <strong>FiLLiP Filing & Processing:</strong> 15-30 days</li>
                    <li>• <strong>Post-Conversion Setup:</strong> 7-15 days</li>
                    <li>• <strong>Total Timeline:</strong> 45-75 days</li>
                  </ul>
                </div>
                
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400">💰 Conversion Costs</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Government Fees:</strong> ₹5,000-₹15,000</li>
                    <li>• <strong>Professional Fees:</strong> ₹25,000-₹75,000</li>
                    <li>• <strong>DIN & DPIN:</strong> ₹2,000-₹5,000</li>
                    <li>• <strong>Digital Signatures:</strong> ₹3,000-₹8,000</li>
                    <li>• <strong>Documentation & Drafting:</strong> ₹10,000-₹25,000</li>
                    <li>• <strong>Total Estimate:</strong> ₹50,000-₹1,30,000</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Get Started */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Convert to LLP?</h2>
              <p className="text-xl mb-6 opacity-90">
                Convert your partnership to LLP with complete legal compliance and enjoy limited liability protection for all partners.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">45-75 Days</div>
                  <div className="text-sm opacity-80">Complete Process</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">₹50K-₹1.3L</div>
                  <div className="text-sm opacity-80">Total Cost</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">Limited</div>
                  <div className="text-sm opacity-80">Liability</div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">LLP Conversion</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Partnership Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Partnership name, number of partners, business nature, reason for conversion..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="file" className="block text-sm font-medium text-gray-300 mb-2">
                      Upload Partnership Deed (Optional)
                    </label>
                    <input
                      type="file"
                      id="file"
                      name="file"
                      onChange={handleFileChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Get LLP Conversion Help
                  </button>
                </form>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span>FiLLiP Expert</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 text-blue-400 mr-2" />
                      <span>Full Compliance</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}