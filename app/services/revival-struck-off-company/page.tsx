'use client'

import React, { useState } from 'react';
import { RotateCcw, FileText, CheckCircle, AlertTriangle, Clock, Shield, Building, DollarSign, Users } from 'lucide-react';

export default function RevivalStruckOffCompanyPage() {
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-600 rounded-full mb-6">
              <RotateCcw className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Revival of Struck-off Company
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Restore your struck-off company through NCLT application process with comprehensive compliance and legal restoration procedures.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* What is Company Revival */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <RotateCcw className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">What is Company Revival?</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6">
                  Company revival is the legal process of restoring a company that has been struck off from the Register of Companies back to active status. This process allows the company to resume operations, enter into contracts, and exercise all legal rights that were suspended due to the strike-off. Revival must be done through NCLT under specific provisions of the Companies Act, 2013.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-green-600/10 to-emerald-600/10 p-6 rounded-lg border border-green-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Building className="w-5 h-5" />
                      Types of Strike-off
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>Voluntary Strike-off:</strong> Company applied for STK-2</li>
                      <li>• <strong>Administrative Strike-off:</strong> ROC initiated removal</li>
                      <li>• <strong>Compulsory Strike-off:</strong> Non-compliance based</li>
                      <li>• <strong>Dormant Company:</strong> Inactive for 2+ years</li>
                      <li>• <strong>Section 8 Strike-off:</strong> NGO/Non-profit removal</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-600/10 to-indigo-600/10 p-6 rounded-lg border border-blue-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <DollarSign className="w-5 h-5" />
                      Reasons for Revival
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Resume business operations</li>
                      <li>• Recover company assets</li>
                      <li>• Complete pending transactions</li>
                      <li>• Pursue legal remedies</li>
                      <li>• Settle outstanding liabilities</li>
                      <li>• Restore contractual rights</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Eligibility for Revival */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <CheckCircle className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">Eligibility for Company Revival</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">✅ Revival Eligibility</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Company struck off within 20 years</li>
                    <li>• Just and equitable grounds exist</li>
                    <li>• No fraudulent activities involved</li>
                    <li>• Applicant has locus standi</li>
                    <li>• Company was functioning before strike-off</li>
                    <li>• Valid business purpose for revival</li>
                    <li>• Assets available for recovery</li>
                  </ul>
                </div>
                
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400">❌ Revival Restrictions</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Beyond 20-year limitation period</li>
                    <li>• Involved in fraudulent activities</li>
                    <li>• Shell company with no operations</li>
                    <li>• No assets or business left</li>
                    <li>• Applicant lacks proper standing</li>
                    <li>• Criminal proceedings pending</li>
                    <li>• Revival against public interest</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-6 rounded-lg border border-blue-500/30">
                <h3 className="font-semibold text-lg mb-3 text-blue-400 flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  Who Can Apply for Revival
                </h3>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-gray-300">
                  <div>
                    <h4 className="font-medium text-white mb-2">Members/Shareholders:</h4>
                    <ul className="space-y-1">
                      <li>• Any member of the company</li>
                      <li>• Former shareholders</li>
                      <li>• Legal heirs of members</li>
                      <li>• Assignees of shares</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">Creditors:</h4>
                    <ul className="space-y-1">
                      <li>• Unpaid creditors</li>
                      <li>• Debenture holders</li>
                      <li>• Financial institutions</li>
                      <li>• Secured/unsecured lenders</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">Other Stakeholders:</h4>
                    <ul className="space-y-1">
                      <li>• Company's directors</li>
                      <li>• Employees with dues</li>
                      <li>• Liquidator (if appointed)</li>
                      <li>• Government authorities</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Revival Process through NCLT */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-purple-400" />
                <h2 className="text-3xl font-bold text-white">NCLT Revival Process</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-blue-400">📋 Prepare Application</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Draft comprehensive application with supporting documents demonstrating grounds for revival.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Draft application under Section 252</li>
                        <li>• Prepare affidavit of applicant</li>
                        <li>• Compile supporting evidence</li>
                        <li>• Calculate court fees and deposits</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-green-400">🏛️ File with NCLT</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Submit application to appropriate NCLT bench with jurisdiction over the company.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• File CA (Company Application) with NCLT</li>
                        <li>• Pay prescribed court fees</li>
                        <li>• Submit required documents</li>
                        <li>• Obtain case number and date</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-purple-400">📰 Publication & Notice</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Publish notice in newspapers and serve notice to Registrar of Companies.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Advertise in English and local language</li>
                        <li>• Serve notice to ROC</li>
                        <li>• Notify known creditors and members</li>
                        <li>• File proof of publication</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-yellow-400">⚖️ NCLT Hearings</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Attend NCLT hearings and respond to any objections from stakeholders.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Present case before NCLT bench</li>
                        <li>• Address objections if any</li>
                        <li>• Provide additional evidence if required</li>
                        <li>• Argue on merits and grounds</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-500/10 p-6 rounded-lg border border-indigo-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white font-bold text-sm">5</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-indigo-400">✅ Revival Order & Compliance</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Obtain revival order and complete post-revival compliance requirements.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Receive NCLT revival order</li>
                        <li>• File order with ROC</li>
                        <li>• Update company status</li>
                        <li>• Resume corporate compliance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Grounds for Revival */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <AlertTriangle className="w-8 h-8 text-orange-400" />
                <h2 className="text-3xl font-bold text-white">Grounds for Revival</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-orange-400">⚖️ Legal Grounds</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Asset Recovery:</strong> Company owns valuable assets</li>
                    <li>• <strong>Pending Litigation:</strong> Need to pursue/defend cases</li>
                    <li>• <strong>Contractual Rights:</strong> Enforce existing contracts</li>
                    <li>• <strong>Insurance Claims:</strong> Pending insurance matters</li>
                    <li>• <strong>Intellectual Property:</strong> Protect IP rights</li>
                    <li>• <strong>Debt Recovery:</strong> Recover outstanding debts</li>
                    <li>• <strong>Regulatory Benefits:</strong> Maintain licenses/approvals</li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">💼 Business Grounds</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Resume Operations:</strong> Restart business activities</li>
                    <li>• <strong>Complete Projects:</strong> Finish ongoing projects</li>
                    <li>• <strong>Honor Commitments:</strong> Meet stakeholder obligations</li>
                    <li>• <strong>Employee Benefits:</strong> Settle pending dues</li>
                    <li>• <strong>Creditor Settlement:</strong> Pay outstanding liabilities</li>
                    <li>• <strong>Asset Utilization:</strong> Monetize company assets</li>
                    <li>• <strong>Tax Benefits:</strong> Claim refunds/carry forwards</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-red-600/20 to-orange-600/20 p-6 rounded-lg border border-red-500/30">
                <h3 className="font-semibold text-lg mb-3 text-red-400 flex items-center gap-2">
                  <AlertTriangle className="w-5 h-5" />
                  Key Considerations
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                  <div>
                    <h4 className="font-medium text-white mb-2">NCLT Will Consider:</h4>
                    <ul className="space-y-1">
                      <li>• Genuineness of application</li>
                      <li>• Applicant's locus standi</li>
                      <li>• Just and equitable grounds</li>
                      <li>• Public interest factors</li>
                      <li>• Possibility of misuse</li>
                      <li>• Availability of assets</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">Strong Evidence Required:</h4>
                    <ul className="space-y-1">
                      <li>• Asset ownership documents</li>
                      <li>• Pending litigation details</li>
                      <li>• Outstanding debt proofs</li>
                      <li>• Business viability evidence</li>
                      <li>• Stakeholder support letters</li>
                      <li>• Financial impact assessment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Required Documents */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Required Documents</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">📋 Application Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Company Application (CA) form</li>
                    <li>• Affidavit of applicant</li>
                    <li>• Board resolution (if directors applying)</li>
                    <li>• Cause of action statement</li>
                    <li>• List of assets and liabilities</li>
                    <li>• Grounds for revival (detailed)</li>
                    <li>• Applicant's interest proof</li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">🏛️ Company Documents</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Certificate of Incorporation</li>
                    <li>• Memorandum & Articles of Association</li>
                    <li>• Last filed annual returns</li>
                    <li>• Last audited financial statements</li>
                    <li>• Strike-off order/notice</li>
                    <li>• Register of members/charges</li>
                    <li>• Director identification documents</li>
                  </ul>
                </div>
                
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-purple-400">💰 Financial Evidence</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Bank statements and reconciliation</li>
                    <li>• Asset valuation reports</li>
                    <li>• Outstanding debt schedules</li>
                    <li>• Creditor acknowledgments</li>
                    <li>• Insurance policy details</li>
                    <li>• Investment certificates</li>
                    <li>• Property documents</li>
                  </ul>
                </div>
                
                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-orange-400">✅ Supporting Evidence</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• Pending litigation documents</li>
                    <li>• Contract agreements</li>
                    <li>• License/approval certificates</li>
                    <li>• Intellectual property records</li>
                    <li>• Employee dues statements</li>
                    <li>• Newspaper publication proofs</li>
                    <li>• Stakeholder consent letters</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Post-Revival Compliance */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Shield className="w-8 h-8 text-indigo-400" />
                <h2 className="text-3xl font-bold text-white">Post-Revival Compliance</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-indigo-500/10 p-6 rounded-lg border border-indigo-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-indigo-400">📋 Immediate Actions</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• File NCLT order with ROC</li>
                    <li>• Update company status in MCA portal</li>
                    <li>• Reconstitute board of directors</li>
                    <li>• Appoint company secretary & auditor</li>
                    <li>• Update registered office address</li>
                    <li>• Renew PAN and TAN registrations</li>
                    <li>• Restore bank accounts</li>
                  </ul>
                </div>
                
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">⚖️ Ongoing Compliance</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• File pending annual returns</li>
                    <li>• Prepare and file financial statements</li>
                    <li>• Pay additional fees and penalties</li>
                    <li>• Resume statutory audit compliance</li>
                    <li>• Update GST and other registrations</li>
                    <li>• Maintain statutory registers</li>
                    <li>• Regular board meetings</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-gradient-to-r from-green-600/20 to-emerald-600/20 p-6 rounded-lg border border-green-500/30">
                <h3 className="font-semibold text-lg mb-3 text-green-400 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Benefits of Successful Revival
                </h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
                  <div>
                    <h4 className="font-medium text-white mb-2">Legal Status Restored:</h4>
                    <ul className="space-y-1">
                      <li>• Company becomes active again</li>
                      <li>• Can enter into new contracts</li>
                      <li>• Regains legal standing</li>
                      <li>• Can sue and be sued</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-white mb-2">Business Benefits:</h4>
                    <ul className="space-y-1">
                      <li>• Access to company assets</li>
                      <li>• Resume business operations</li>
                      <li>• Recover outstanding debts</li>
                      <li>• Settle pending matters</li>
                    </ul>
                  </div>
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
                  <h3 className="font-semibold text-lg mb-4 text-yellow-400">⏰ Revival Timeline</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Documentation & Filing:</strong> 30-45 days</li>
                    <li>• <strong>NCLT Processing:</strong> 6-18 months</li>
                    <li>• <strong>Publication & Notice Period:</strong> 30 days</li>
                    <li>• <strong>Hearings & Arguments:</strong> 3-12 months</li>
                    <li>• <strong>Order & Compliance:</strong> 15-30 days</li>
                    <li>• <strong>Total Timeline:</strong> 12-24 months</li>
                  </ul>
                </div>
                
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400">💰 Revival Costs</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>NCLT Filing Fees:</strong> ₹10,000-₹50,000</li>
                    <li>• <strong>Legal & Professional Fees:</strong> ₹2,00,000-₹10,00,000</li>
                    <li>• <strong>Publication Costs:</strong> ₹15,000-₹50,000</li>
                    <li>• <strong>ROC Compliance Fees:</strong> ₹50,000-₹2,00,000</li>
                    <li>• <strong>Additional Fees & Penalties:</strong> ₹1,00,000-₹5,00,000</li>
                    <li>• <strong>Total Estimate:</strong> ₹5,00,000-₹20,00,000+</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Get Started */}
            <section className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Need Help Reviving Your Company?</h2>
              <p className="text-xl mb-6 opacity-90">
                Navigate the complex NCLT revival process with expert legal guidance to restore your struck-off company successfully.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">12-24 Months</div>
                  <div className="text-sm opacity-80">Process Duration</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">₹5L-₹20L+</div>
                  <div className="text-sm opacity-80">Total Investment</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">NCLT</div>
                  <div className="text-sm opacity-80">Legal Process</div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Revival Consultation</h3>
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
                      Revival Requirements
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Company name, strike-off date, reason for revival, assets involved..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="file" className="block text-sm font-medium text-gray-300 mb-2">
                      Upload Company Documents (Optional)
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
                    className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Get Revival Expert Help
                  </button>
                </form>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span>NCLT Specialists</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 text-blue-400 mr-2" />
                      <span>Legal Expertise</span>
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