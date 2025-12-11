'use client';

import React from 'react';
import { Award, Shield, TrendingUp, FileText, Users, CheckCircle, Building2, Clock, DollarSign } from 'lucide-react';
import GetStartedForm from '@/app/components/GetStartedForm';

export default function MSMERegistrationPage() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#3d9cf5]/20 rounded-full mb-6">
            <Award className="w-8 h-8 text-[#3d9cf5]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            MSME/Udyam Registration
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get your business officially recognized as a Micro, Small, or Medium Enterprise and unlock exclusive government benefits and support
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Information */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is Udyam Registration */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-4 text-[#3d9cf5]">What is Udyam Registration?</h2>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 mb-4">
                  Udyam Registration is the new MSME Registration system launched by the Ministry of Micro, Small, and Medium Enterprises in July 2020. It replaces the earlier Udyog Aadhaar registration process.
                </p>
                <p className="text-gray-300 mb-4">
                  This online system helps small businesses register themselves as Micro, Small, or Medium Enterprises. The Udyam Registration certificate serves as proof of your business's MSME status.
                </p>
                <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4 mt-6">
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Award className="w-5 h-5 text-[#3d9cf5]" />
                    Key Insight
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Udyam Registration and MSME Registration are the same thing. Udyam Registration is simply the current process for obtaining MSME Registration.
                  </p>
                </div>
              </div>
            </div>

            {/* Purpose of MSME Registration */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">Purpose of MSME Registration</h2>
              <p className="text-gray-300 mb-6">
                The main purpose of MSME Udyam Registration is to promote and develop small businesses in India. It helps the government in the following ways:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Identify and support genuine small businesses',
                  'Create focused policies for MSME growth',
                  'Provide financial assistance to deserving enterprises',
                  'Track the contribution of MSMEs to the economy',
                  'Implement various schemes for small business development'
                ].map((purpose, index) => (
                  <div key={index} className="flex items-start gap-3 bg-slate-800/50 rounded-lg p-4">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300 text-sm">{purpose}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Types of MSME */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">Types of MSME Registration</h2>
              <p className="text-gray-300 mb-6">
                MSMEs are classified based on investment and turnover criteria:
              </p>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-green-900/30 to-green-800/20 border border-green-500/30 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Building2 className="w-6 h-6 text-green-400" />
                    <h3 className="text-xl font-bold text-green-400">Micro Enterprises</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                    <div>
                      <p className="text-sm text-gray-400">Investment</p>
                      <p className="font-semibold">Up to ₹1 crore</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Turnover</p>
                      <p className="font-semibold">Up to ₹5 crore</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/20 border border-blue-500/30 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Building2 className="w-6 h-6 text-blue-400" />
                    <h3 className="text-xl font-bold text-blue-400">Small Enterprises</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                    <div>
                      <p className="text-sm text-gray-400">Investment</p>
                      <p className="font-semibold">Up to ₹10 crore</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Turnover</p>
                      <p className="font-semibold">Up to ₹50 crore</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-900/30 to-purple-800/20 border border-purple-500/30 rounded-lg p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Building2 className="w-6 h-6 text-purple-400" />
                    <h3 className="text-xl font-bold text-purple-400">Medium Enterprises</h3>
                  </div>
                  <div className="grid md:grid-cols-2 gap-4 text-gray-300">
                    <div>
                      <p className="text-sm text-gray-400">Investment</p>
                      <p className="font-semibold">Up to ₹50 crore</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Turnover</p>
                      <p className="font-semibold">Up to ₹250 crore</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">Benefits of MSME/Udyam Registration</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: <DollarSign className="w-6 h-6" />,
                    title: 'Easier Access to Credit',
                    description: 'Registered MSMEs get lower-interest loans from banks and NBFCs, helping them fund growth without heavy interest burdens.'
                  },
                  {
                    icon: <Shield className="w-6 h-6" />,
                    title: 'Exclusive Government Support',
                    description: 'Once registered, you qualify for subsidies and schemes that cut operating costs and boost your expansion plans.'
                  },
                  {
                    icon: <TrendingUp className="w-6 h-6" />,
                    title: 'Priority Lending',
                    description: 'Banks must allocate a portion of their lending to MSMEs. Your registration ensures you tap into this reserved pool of credit more easily.'
                  },
                  {
                    icon: <Award className="w-6 h-6" />,
                    title: 'Technology Upgrade Grants',
                    description: 'The government offers financial assistance to help registered MSMEs adopt modern tools and processes, so you stay competitive.'
                  },
                  {
                    icon: <FileText className="w-6 h-6" />,
                    title: 'Preferential Market Access',
                    description: 'Many public tenders and procurement contracts earmark opportunities specifically for MSMEs, giving you a competitive edge in the marketplace.'
                  },
                  {
                    icon: <Clock className="w-6 h-6" />,
                    title: 'Quick License Approvals',
                    description: 'Your Udyam registration certificate lets you get licences and permits faster, so you avoid long waits.'
                  }
                ].map((benefit, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
                    <div className="text-[#3d9cf5] mb-3">{benefit.icon}</div>
                    <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Eligibility */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">Who is Eligible for MSME Registration?</h2>
              <p className="text-gray-300 mb-6">
                Any of the following business structures can register as an MSME:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Partnership Firm',
                  'Private Limited Company',
                  'Limited Liability Partnerships (LLPs)',
                  'Sole Proprietorship',
                  'Trust',
                  'NGO',
                  'Startups',
                  'Both Manufacturing and Service Businesses'
                ].map((entity, index) => (
                  <div key={index} className="flex items-center gap-3 bg-slate-800/30 rounded-lg p-4">
                    <Users className="w-5 h-5 text-[#3d9cf5] flex-shrink-0" />
                    <span className="text-gray-300">{entity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-1">
            <GetStartedForm 
              serviceName="MSME/Udyam Registration"
              serviceCategory="Compliance"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
