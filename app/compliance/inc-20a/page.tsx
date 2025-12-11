'use client'

import React from 'react';
import { Building2, FileText, CheckCircle, AlertTriangle, Calendar, Shield, Scale, Clock, Play, TrendingUp } from 'lucide-react';
import GetStartedForm from '@/app/components/GetStartedForm';

export default function Inc20aPage() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-full mb-6">
              <Play className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Form INC-20A: Declaration of Commencement of Business
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Complete guide to Form INC-20A filing requirements, benefits, and compliance for companies incorporated on or after November 2, 2018.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* What is Form INC-20A */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-blue-400" />
                <h2 className="text-3xl font-bold text-white">What is Form INC-20A?</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6">
                  Form INC-20A is a "Declaration of Commencement of Business" that must be filed by companies incorporated on or after November 2, 2018. It declares that the company has commenced its business activities and that the subscription money (if any) has been received by the company.
                </p>
                
                <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 p-6 rounded-lg border border-blue-500/20 mb-6">
                  <h3 className="text-xl font-semibold text-white mb-4">Key Features of Form INC-20A</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-blue-400">📋 Filing Requirements</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Must be filed within <strong>180 days</strong> of incorporation</li>
                        <li>• Required for companies with share capital</li>
                        <li>• Mandatory declaration of business commencement</li>
                        <li>• Verification of subscription money receipt</li>
                        <li>• Digital filing through MCA portal</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-3 text-green-400">🎯 Purpose & Objective</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Confirm actual business operations</li>
                        <li>• Prevent creation of shell companies</li>
                        <li>• Enhance corporate transparency</li>
                        <li>• Enable legitimate business activities</li>
                        <li>• Facilitate regulatory oversight</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Objectives */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Scale className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Objectives of Form INC-20A</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <CheckCircle className="w-8 h-8 text-green-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-3">✅ Declare Business Commencement</h3>
                  <p className="text-sm text-gray-300 mb-3">
                    Formally notify the Registrar of Companies that the company has started its business operations and is ready to conduct legitimate business activities.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Official business commencement notification</li>
                    <li>• Legal confirmation of operational status</li>
                    <li>• Compliance with statutory requirements</li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <TrendingUp className="w-8 h-8 text-blue-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-3">💰 Confirm Subscription Money</h3>
                  <p className="text-sm text-gray-300 mb-3">
                    Verify that the subscription money raised from shares has been actually received by the company and properly utilized for business purposes.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Verification of capital contribution</li>
                    <li>• Proof of actual money receipt</li>
                    <li>• Transparency in fund utilization</li>
                  </ul>
                </div>
                
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <Shield className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-3">🛡️ Prevent Shell Companies</h3>
                  <p className="text-sm text-gray-300 mb-3">
                    Act as a safeguard against the formation of shell companies by ensuring genuine business operations and capital deployment.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Anti-money laundering measure</li>
                    <li>• Prevention of fraudulent activities</li>
                    <li>• Corporate governance enhancement</li>
                  </ul>
                </div>
                
                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <AlertTriangle className="w-8 h-8 text-yellow-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-3">⚖️ Legal Compliance</h3>
                  <p className="text-sm text-gray-300 mb-3">
                    Ensure compliance with Companies Act 2013 and avoid penalties for non-filing or delayed filing of mandatory declarations.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Statutory compliance requirement</li>
                    <li>• Avoid penalties and prosecution</li>
                    <li>• Maintain good corporate standing</li>
                  </ul>
                </div>
                
                <div className="bg-indigo-500/10 p-6 rounded-lg border border-indigo-500/20">
                  <Building2 className="w-8 h-8 text-indigo-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-3">🏢 Transparency & Credibility</h3>
                  <p className="text-sm text-gray-300 mb-3">
                    Build stakeholder confidence by demonstrating genuine business intent and transparent operations from the inception of the company.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Enhanced stakeholder confidence</li>
                    <li>• Improved corporate credibility</li>
                    <li>• Better access to funding and opportunities</li>
                  </ul>
                </div>
                
                <div className="bg-teal-500/10 p-6 rounded-lg border border-teal-500/20">
                  <Clock className="w-8 h-8 text-teal-400 mb-4" />
                  <h3 className="font-semibold text-lg mb-3">🔓 Enable Borrowing Powers</h3>
                  <p className="text-sm text-gray-300 mb-3">
                    Activate the company's borrowing powers and enable it to access various forms of financing and credit facilities for business growth.
                  </p>
                  <ul className="space-y-1 text-sm text-gray-300">
                    <li>• Unlock borrowing capabilities</li>
                    <li>• Access to bank loans and credit</li>
                    <li>• Enable financial growth opportunities</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How it Prevents Shell Companies */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Shield className="w-8 h-8 text-red-400" />
                <h2 className="text-3xl font-bold text-white">How Form INC-20A Prevents Shell Companies</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400">🎯 Key Anti-Shell Company Measures</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-red-300">Intent Verification</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Demonstrates genuine business intent</li>
                        <li>• Requires declaration of actual operations</li>
                        <li>• Prevents inactive company creation</li>
                        <li>• Encourages real business activities</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-red-300">Capital Verification</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Confirms actual capital contribution</li>
                        <li>• Prevents fake capital deployment</li>
                        <li>• Ensures money trail documentation</li>
                        <li>• Validates genuine investment</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-orange-400">🔍 Additional Safeguards</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-orange-300">Regulatory Oversight</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• MCA monitoring and verification</li>
                        <li>• Cross-verification with other filings</li>
                        <li>• Enhanced due diligence process</li>
                        <li>• Regular compliance tracking</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-orange-300">Legal Safeguards</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Statutory declaration requirement</li>
                        <li>• Legal consequences for false declarations</li>
                        <li>• Director liability for compliance</li>
                        <li>• Penalty provisions for non-compliance</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Benefits of Filing */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <TrendingUp className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Benefits of Filing Form INC-20A</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">🏢 Corporate Benefits</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-green-300">Limited Liability Protection</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Full corporate veil protection</li>
                        <li>• Separation of personal and business assets</li>
                        <li>• Risk limitation for shareholders</li>
                        <li>• Legal entity status confirmation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-green-300">Enhanced Credibility</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Improved market reputation</li>
                        <li>• Higher stakeholder confidence</li>
                        <li>• Professional business image</li>
                        <li>• Trust building with partners</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">💰 Financial Benefits</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-blue-300">Easier Funding Access</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Bank loan approvals</li>
                        <li>• Venture capital accessibility</li>
                        <li>• Angel investor attraction</li>
                        <li>• Government scheme eligibility</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-blue-300">Tax Benefits</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Corporate tax advantages</li>
                        <li>• Section 80C benefits</li>
                        <li>• Depreciation allowances</li>
                        <li>• Carry forward of losses</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-purple-400">🔧 Operational Benefits</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-purple-300">Business Continuity</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Perpetual succession rights</li>
                        <li>• Continuous business operations</li>
                        <li>• Transfer of ownership flexibility</li>
                        <li>• Legal entity permanence</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-purple-300">Brand Protection</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Exclusive company name rights</li>
                        <li>• Trademark registration eligibility</li>
                        <li>• Intellectual property protection</li>
                        <li>• Brand asset security</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-yellow-400">⚖️ Compliance Benefits</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-yellow-300">Legal Compliance</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Statutory requirement fulfillment</li>
                        <li>• Penalty avoidance</li>
                        <li>• Good corporate standing</li>
                        <li>• Regulatory compliance demonstration</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-yellow-300">Government Schemes</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Startup India registration eligibility</li>
                        <li>• MSME benefits access</li>
                        <li>• Government tender participation</li>
                        <li>• Subsidy and incentive programs</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-indigo-500/10 p-6 rounded-lg border border-indigo-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-indigo-400">👥 Employee Benefits</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-indigo-300">Employment Advantages</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Employee Stock Option Plans (ESOPs)</li>
                        <li>• Provident Fund registration</li>
                        <li>• ESI benefits provision</li>
                        <li>• Formal employment structure</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-indigo-300">Career Benefits</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Professional career development</li>
                        <li>• Skill enhancement opportunities</li>
                        <li>• Job security and benefits</li>
                        <li>• Growth and promotion prospects</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-teal-500/10 p-6 rounded-lg border border-teal-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-teal-400">🔐 IP Protection Benefits</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-teal-300">Intellectual Property</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Patent registration in company name</li>
                        <li>• Copyright ownership rights</li>
                        <li>• Trade secret protection</li>
                        <li>• Design registration eligibility</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-teal-300">Asset Protection</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Business asset protection</li>
                        <li>• Technology ownership security</li>
                        <li>• Confidential information safeguards</li>
                        <li>• Competitive advantage protection</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Applicability */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Building2 className="w-8 h-8 text-orange-400" />
                <h2 className="text-3xl font-bold text-white">Applicability of Form INC-20A</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-orange-400">📋 Companies Required to File</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-orange-300">Applicable Companies</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• <strong>Private Limited Companies</strong> with share capital</li>
                        <li>• <strong>Public Limited Companies</strong> with share capital</li>
                        <li>• <strong>One Person Companies (OPC)</strong> with share capital</li>
                        <li>• <strong>Section 8 Companies</strong> with share capital</li>
                        <li>• <strong>Producer Companies</strong> with share capital</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-orange-300">Key Conditions</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Incorporated <strong>on or after November 2, 2018</strong></li>
                        <li>• Companies having share capital</li>
                        <li>• Must file within <strong>180 days</strong> of incorporation</li>
                        <li>• Declaration of business commencement required</li>
                        <li>• Subscription money verification needed</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400">❌ Exemptions from Filing</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-red-300">Exempted Companies</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Companies incorporated <strong>before November 2, 2018</strong></li>
                        <li>• <strong>Companies limited by guarantee</strong> (without share capital)</li>
                        <li>• <strong>Unlimited companies</strong> without share capital</li>
                        <li>• <strong>Government companies</strong> specifically exempted</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-red-300">Special Cases</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Companies formed through amalgamation/reconstruction</li>
                        <li>• Companies under specific exemption notifications</li>
                        <li>• Dormant companies (with special status)</li>
                        <li>• Non-profit companies without share capital</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Date of Incorporation Significance */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Calendar className="w-8 h-8 text-purple-400" />
                <h2 className="text-3xl font-bold text-white">Significance of Date of Incorporation</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-purple-400">📅 Critical Date: November 2, 2018</h3>
                  <p className="text-gray-300 mb-4">
                    The date of incorporation is crucial as it determines the applicability of Form INC-20A. This cut-off date was introduced as part of the Companies (Amendment) Act, 2017, which came into effect from November 2, 2018.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-purple-300">Why November 2, 2018?</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Implementation of amended Companies Act</li>
                        <li>• Enhanced corporate governance measures</li>
                        <li>• Stricter compliance requirements introduction</li>
                        <li>• Prevention of shell company creation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-purple-300">Impact on Companies</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Triggers mandatory filing requirement</li>
                        <li>• Starts 180-day countdown for compliance</li>
                        <li>• Activates enhanced due diligence</li>
                        <li>• Enables legitimate business operations</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">⏰ 180-Day Timeline Calculation</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-blue-300">Timeline Calculation</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Starts from date of incorporation certificate</li>
                        <li>• 180 calendar days (approximately 6 months)</li>
                        <li>• Includes weekends and holidays</li>
                        <li>• No extension provisions available</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-blue-300">Compliance Importance</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Mandatory filing within deadline</li>
                        <li>• Penalties for delayed filing</li>
                        <li>• Potential striking off for non-compliance</li>
                        <li>• Director disqualification risks</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400">🔓 Business Operations Unlock</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-green-300">Before Filing INC-20A</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Limited business activities allowed</li>
                        <li>• Restricted borrowing powers</li>
                        <li>• Cannot access certain benefits</li>
                        <li>• Compliance uncertainty</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-green-300">After Filing INC-20A</h4>
                      <ul className="space-y-2 text-sm text-gray-300">
                        <li>• Full business operations enabled</li>
                        <li>• Complete borrowing powers activated</li>
                        <li>• Access to all corporate benefits</li>
                        <li>• Full compliance status achieved</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Get Started */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Need Help with Form INC-20A Filing?</h2>
              <p className="text-xl mb-6 opacity-90">
                Get expert assistance for timely and compliant Form INC-20A filing. Don't miss the 180-day deadline!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">180 Days</div>
                  <div className="text-sm opacity-80">Filing Deadline</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">₹300</div>
                  <div className="text-sm opacity-80">Government Fee</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">24-48hrs</div>
                  <div className="text-sm opacity-80">Processing Time</div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Form */}
          <div className="lg:col-span-1">
            <GetStartedForm 
              serviceName="INC-20A Filing"
              serviceCategory="Compliance"
            />
          </div>
        </div>
      </div>
    </div>
  );
}