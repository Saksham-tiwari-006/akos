'use client'

import React, { useState } from 'react';
import { Globe, Building2, CheckCircle, Clock, Shield, MapPin, DollarSign, AlertCircle } from 'lucide-react';

export default function VirtualPlaceGSTPage() {
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-600 rounded-full mb-6">
              <Globe className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Virtual Place of Business in GST
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Businesses, especially e-commerce sellers and service providers, can register a virtual office address for GST. A virtual address helps operate PAN-India without maintaining physical offices.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* What is Virtual Place of Business */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Building2 className="w-8 h-8 text-purple-400 mr-3" />
                What is Virtual Place of Business?
              </h2>
              <div className="prose prose-lg text-gray-300">
                <p className="mb-6">
                  A Virtual Place of Business in GST refers to a registered business address that serves as the principal place of business for GST registration purposes, without requiring a physical office presence. This concept is particularly beneficial for e-commerce businesses, service providers, and startups who operate primarily online or from multiple locations.
                </p>
                <p>
                  Virtual addresses enable businesses to obtain GST registration and operate legally across India while maintaining flexibility in their operational setup.
                </p>
              </div>
            </section>

            {/* Who Can Use Virtual Address */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">Who Can Use Virtual Place of Business?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-4">Ideal for</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">E-commerce sellers and marketplaces</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Online service providers</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Startups and home-based businesses</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Consultants and freelancers</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-4">Business Types</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Globe className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Digital marketing agencies</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Globe className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Software development companies</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Globe className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Import/export businesses</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Globe className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Online content creators</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Required Documents */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">Required Documents for Virtual Address</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-white text-lg">Address Documents</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>Rent agreement with virtual office provider</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>Property ownership documents</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>Utility bills of the address</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-white text-lg">Authorization</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>No Objection Certificate (NOC)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>Authorization letter from landlord</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>Virtual office service agreement</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-white text-lg">Identity Proof</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>PAN card of business/proprietor</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>Aadhaar card</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>Business registration certificate</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Registration Process */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">Virtual Address GST Registration Process</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Select Virtual Office Provider</h3>
                    <p className="text-gray-300">Choose a reputable virtual office service provider with proper documentation</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Obtain Required Documents</h3>
                    <p className="text-gray-300">Secure rent agreement, NOC, and utility bills for the virtual address</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Prepare GST Application</h3>
                    <p className="text-gray-300">Fill GST REG-01 form with virtual address as principal place of business</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Submit Application</h3>
                    <p className="text-gray-300">Upload all documents and submit GST registration application online</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold">5</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Verification & Approval</h3>
                    <p className="text-gray-300">GST department may conduct verification before approving registration</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Benefits */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">Benefits of Virtual Place of Business</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <DollarSign className="w-6 h-6 text-green-400" />
                    <span className="text-white font-medium">Cost-Effective Solution</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-6 h-6 text-blue-400" />
                    <span className="text-white font-medium">PAN-India Operations</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-purple-400" />
                    <span className="text-white font-medium">Legal Compliance</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Building2 className="w-6 h-6 text-yellow-400" />
                    <span className="text-white font-medium">Professional Business Address</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-red-400" />
                    <span className="text-white font-medium">Quick Setup</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-indigo-400" />
                    <span className="text-white font-medium">Flexibility in Operations</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Important Considerations */}
            <section className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl p-8 border border-yellow-500/30">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <AlertCircle className="w-7 h-7 text-yellow-400 mr-3" />
                Important Considerations
              </h2>
              <ul className="space-y-3 text-gray-200">
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></span>
                  <span>Virtual office provider must have proper legal documentation and authorization</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></span>
                  <span>GST department may conduct physical verification of the virtual address</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></span>
                  <span>Regular compliance and filing obligations remain the same as physical offices</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></span>
                  <span>Some states may have specific requirements or restrictions for virtual addresses</span>
                </li>
              </ul>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Virtual Address GST Registration</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Business Name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Contact Number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                />
                <textarea
                  name="message"
                  placeholder="Describe your business type, preferred location for virtual address, and GST registration requirements..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                ></textarea>
                <div>
                  <label className="block text-sm font-medium mb-2">Upload Business Documents (Optional)</label>
                  <input
                    type="file"
                    name="file"
                    onChange={handleFileChange}
                    accept=".pdf,.jpg,.png"
                    className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-white text-purple-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Request Virtual Address Service
                </button>
              </form>
            </div>

            {/* Virtual Office Benefits */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Virtual Office Services</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-gray-400 text-sm">Mail Handling</span>
                  <p className="text-white font-medium">Professional mail forwarding</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Business Address</span>
                  <p className="text-white font-medium">Prime location address</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Call Answering</span>
                  <p className="text-white font-medium">Professional reception</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Meeting Rooms</span>
                  <p className="text-white font-medium">On-demand access</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}