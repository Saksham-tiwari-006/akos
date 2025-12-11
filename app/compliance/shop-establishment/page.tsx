'use client';

import React from 'react';
import { Store, Shield, Building2, FileText, Users, Award, CheckCircle, TrendingUp, Clock } from 'lucide-react';
import GetStartedForm from '@/app/components/GetStartedForm';

export default function ShopEstablishmentPage() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <div className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#3d9cf5]/20 rounded-full mb-6">
            <Store className="w-8 h-8 text-[#3d9cf5]" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Shop and Establishment Registration
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Compulsory license for businesses to operate legally, protecting employee rights and ensuring compliance with labor laws
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Information */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is Shop & Establishment Registration */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-4 text-[#3d9cf5]">What is Shop and Establishment Registration?</h2>
              <div className="prose prose-invert max-w-none space-y-4">
                <p className="text-gray-300">
                  The Shop and Establishment Registration is a compulsory license that most businesses must obtain under the Shop and Establishment Act. It is granted by the Labour Department of the state where the business operates and serves as official proof that the business is legally recognized.
                </p>
                <p className="text-gray-300">
                  The Act aims to protect the rights of employees working in various commercial establishments such as shops, offices, hotels, restaurants, and theatres. It sets standards for work hours, wages, leave policies, holidays, and rest breaks to ensure fair and consistent treatment of workers.
                </p>
                <div className="bg-red-900/30 border border-red-500/30 rounded-lg p-4 mt-6">
                  <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-red-400" />
                    Important Timeline
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Every business must complete the registration process within <strong>30 days</strong> from the date it begins operations.
                  </p>
                </div>
              </div>
            </div>

            {/* Why Mandatory */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">Why is Shop & Establishment Registration Mandatory?</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  {
                    icon: <Shield className="w-5 h-5" />,
                    title: 'Provides Legal Identity',
                    description: 'Serves as the primary legal identifier for your business'
                  },
                  {
                    icon: <Building2 className="w-5 h-5" />,
                    title: 'Enables Bank Account Opening',
                    description: 'Crucial for opening a business current account'
                  },
                  {
                    icon: <TrendingUp className="w-5 h-5" />,
                    title: 'Facilitates Loans & Benefits',
                    description: 'Required when applying for business loans and government subsidies'
                  },
                  {
                    icon: <CheckCircle className="w-5 h-5" />,
                    title: 'Avoids Penalties',
                    description: 'Timely registration helps avoid significant fines and legal issues'
                  }
                ].map((reason, index) => (
                  <div key={index} className="flex items-start gap-3 bg-slate-800/50 rounded-lg p-4">
                    <div className="text-[#3d9cf5] flex-shrink-0">{reason.icon}</div>
                    <div>
                      <h3 className="font-semibold mb-1">{reason.title}</h3>
                      <p className="text-gray-400 text-sm">{reason.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Who Needs Registration */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">Who Needs to Register?</h2>
              
              <h3 className="text-xl font-semibold mb-4">Types of Businesses</h3>
              <div className="grid md:grid-cols-2 gap-3 mb-6">
                {[
                  'Retail Shops (grocery, clothing, electronics)',
                  'Restaurants, Cafes, and Eateries',
                  'Theatres and Entertainment Houses',
                  'Warehouses and Godowns',
                  'Banking and Financial Institutions',
                  'Insurance Companies',
                  'Consultancy Services',
                  'Advertising Agencies',
                  'Real Estate Agencies',
                  'IT Companies and Software Firms',
                  'Travel Agencies and Tour Operators',
                  'Media Houses and Publishing Companies',
                  'Educational Institutions (private)',
                  'Healthcare Facilities (private hospitals, clinics)'
                ].map((business, index) => (
                  <div key={index} className="flex items-start gap-3 bg-slate-800/30 rounded-lg p-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300 text-sm">{business}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-xl font-semibold mb-4">Online Businesses</h3>
              <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-4 mb-6">
                <p className="text-gray-300 text-sm">
                  Online businesses and e-commerce stores that operate with a physical office space or warehouse and/or employ individuals are required to obtain shop and establishment registration. Once there is a dedicated workspace for employees, registration becomes necessary.
                </p>
              </div>

              <h3 className="text-xl font-semibold mb-4">Home-Based Businesses</h3>
              <div className="space-y-3">
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-400 mb-2">Registration Required:</h4>
                  <p className="text-gray-300 text-sm">Home-based businesses with employees (even one person) require registration</p>
                </div>
                <div className="bg-slate-800/50 border border-slate-700/50 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-400 mb-2">Usually Exempt:</h4>
                  <p className="text-gray-300 text-sm">Individual freelancers working independently from home without employing anyone are usually exempt</p>
                </div>
              </div>
            </div>

            {/* Exemptions */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">Businesses Not Covered (Exemptions)</h2>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  'Government Offices (Central, State, Local)',
                  'Public Sector Banks',
                  'Offices of Parliament or State Legislatures',
                  'Establishments in Mines and Oil Fields',
                  'Factories (covered under Factories Act)',
                  'Government Educational Institutions',
                  'Certain Charitable Institutions',
                  'Family Businesses without Hired Employees'
                ].map((exemption, index) => (
                  <div key={index} className="flex items-start gap-3 bg-slate-800/30 rounded-lg p-3">
                    <span className="text-gray-400 text-sm">•</span>
                    <span className="text-gray-300 text-sm">{exemption}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Benefits */}
            <div className="bg-white/5 backdrop-blur-sm rounded-lg p-8 border border-white/10">
              <h2 className="text-3xl font-bold mb-6 text-[#3d9cf5]">Benefits of Shop and Establishment Registration</h2>
              <div className="space-y-4">
                {[
                  {
                    icon: <Shield className="w-6 h-6" />,
                    title: 'Legal Recognition and Proof of Business',
                    description: 'Gives your business official government recognition, acting like a legal ID proving that your operations are legitimate and authorized.'
                  },
                  {
                    icon: <Building2 className="w-6 h-6" />,
                    title: 'Smooth Opening of Business Bank Account',
                    description: 'Makes it easier to open a special bank account just for your business. Banks require this proof to set up an account for managing your money.'
                  },
                  {
                    icon: <TrendingUp className="w-6 h-6" />,
                    title: 'Helps in Getting Loans and Government Benefits',
                    description: 'Makes it simpler to get financial help like MSME loans from banks or special support (schemes or subsidies) from the government.'
                  },
                  {
                    icon: <FileText className="w-6 h-6" />,
                    title: 'Avoid Penalties and Legal Troubles',
                    description: 'By registering, you avoid getting into trouble or paying big fines from government authorities, keeping your business safe from legal problems.'
                  },
                  {
                    icon: <Users className="w-6 h-6" />,
                    title: 'Builds Trust with Customers and Employees',
                    description: 'Being registered makes your business look much more reliable and trustworthy. Customers feel confident, and good people want to work for your business.'
                  }
                ].map((benefit, index) => (
                  <div key={index} className="bg-slate-800/50 rounded-lg p-6 border border-slate-700/50">
                    <div className="flex items-start gap-4">
                      <div className="text-[#3d9cf5] flex-shrink-0">{benefit.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                        <p className="text-gray-400 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-1">
            <GetStartedForm 
              serviceName="Shop & Establishment Registration"
              serviceCategory="Compliance"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
