'use client'

import React, { useState } from 'react';
import { MapPin, Building, CheckCircle, Clock, Shield, Plus, DollarSign, AlertCircle } from 'lucide-react';

export default function AdditionalPlaceGSTPage() {
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
            <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-600 rounded-full mb-6">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Additional Place of Business in GST
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              If a business operates from multiple locations within a state, each must be added as an additional place of business. It helps ensure proper GST compliance for storage, warehouses, or branches.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* What is Additional Place of Business */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
                <Building className="w-8 h-8 text-teal-400 mr-3" />
                What is Additional Place of Business?
              </h2>
              <div className="prose prose-lg text-gray-300">
                <p className="mb-6">
                  Additional Place of Business refers to any fixed place of business of a registered person, other than the principal place of business, from where the business is carried out. This includes branch offices, warehouses, distribution centers, manufacturing units, or any other place where business operations are conducted within the same state.
                </p>
                <p>
                  Under GST law, every additional place of business must be registered and included in the GST registration to ensure complete compliance and proper tax administration.
                </p>
              </div>
            </section>

            {/* When to Register Additional Place */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">When to Register Additional Place of Business?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-4">Business Operations</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Opening new branch office</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Setting up warehouse or storage facility</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Establishing distribution center</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Opening retail outlets or showrooms</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white mb-4">Manufacturing & Processing</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <Building className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">New manufacturing unit</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Building className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Processing or assembly plant</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Building className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Research and development center</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Building className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Quality control or testing facility</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Registration Process */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">Registration Process</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">File Amendment Application</h3>
                    <p className="text-gray-300">Submit Form GST REG-14 for amendment to existing GST registration</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Provide Location Details</h3>
                    <p className="text-gray-300">Submit complete address and operational details of the additional place</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Upload Supporting Documents</h3>
                    <p className="text-gray-300">Provide proof of address, authorization, and business operation documents</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Department Verification</h3>
                    <p className="text-gray-300">GST officer may conduct physical verification of the additional location</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center text-white font-bold">5</div>
                  <div>
                    <h3 className="font-semibold text-white mb-2">Receive Approval</h3>
                    <p className="text-gray-300">Get updated GST registration certificate with additional place details</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Required Documents */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">Required Documents</h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-white text-lg">Address Proof</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>Rent agreement or lease deed</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>Property ownership documents</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>Electricity or utility bills</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-white text-lg">Authorization</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>No Objection Certificate from landlord</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>Board resolution (for companies)</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>Authorization letter</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-white text-lg">Business Details</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>Nature of business operations</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>Photographs of the premises</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>Local area map or GPS coordinates</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Compliance Requirements */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">Compliance Requirements</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-white text-lg">Record Keeping</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start space-x-2">
                      <Shield className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>Maintain separate books for each location</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Shield className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>Track stock transfers between locations</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Shield className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>Document inter-location transactions</span>
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="font-semibold text-white text-lg">Tax Compliance</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-start space-x-2">
                      <Shield className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>Include all locations in GST returns</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Shield className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>Generate E-way bills for stock movement</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Shield className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                      <span>Ensure proper invoice series management</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Benefits */}
            <section className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-8">Benefits of Registering Additional Places</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Shield className="w-6 h-6 text-green-400" />
                    <span className="text-white font-medium">Legal Compliance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Building className="w-6 h-6 text-blue-400" />
                    <span className="text-white font-medium">Proper Business Documentation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-6 h-6 text-purple-400" />
                    <span className="text-white font-medium">Clear Operational Boundaries</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <DollarSign className="w-6 h-6 text-yellow-400" />
                    <span className="text-white font-medium">Proper Tax Credit Management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Plus className="w-6 h-6 text-teal-400" />
                    <span className="text-white font-medium">Smooth Business Expansion</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-6 h-6 text-red-400" />
                    <span className="text-white font-medium">Avoid Penalties</span>
                  </div>
                </div>
              </div>
            </section>

            {/* Important Guidelines */}
            <section className="bg-gradient-to-r from-blue-500/20 to-teal-500/20 rounded-2xl p-8 border border-blue-500/30">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <AlertCircle className="w-7 h-7 text-blue-400 mr-3" />
                Important Guidelines & Timeline
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-blue-400 mt-1" />
                    <span><strong>Registration Timeline:</strong> Within 30 days of setup</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-blue-400 mt-1" />
                    <span><strong>Processing Time:</strong> 7-15 working days</span>
                  </li>
                </ul>
                <ul className="space-y-3 text-gray-200">
                  <li className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-orange-400 mt-1" />
                    <span><strong>Same State:</strong> Only within same state as principal place</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-orange-400 mt-1" />
                    <span><strong>Inter-State:</strong> Requires separate GST registration</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">Register Additional Place</h2>
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
                  placeholder="Describe your new location, type of business operations, and current GST registration details..."
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-white/20 border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
                  required
                ></textarea>
                <div>
                  <label className="block text-sm font-medium mb-2">Upload Location Documents (Optional)</label>
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
                  className="w-full bg-white text-teal-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Request Registration Service
                </button>
              </form>
            </div>

            {/* Quick Facts */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Registration Facts</h3>
              <div className="space-y-4">
                <div>
                  <span className="text-gray-400 text-sm">Required Timeline</span>
                  <p className="text-white font-medium">Within 30 days</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Processing Time</span>
                  <p className="text-white font-medium">7-15 working days</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Form Required</span>
                  <p className="text-white font-medium">GST REG-14</p>
                </div>
                <div>
                  <span className="text-gray-400 text-sm">Verification</span>
                  <p className="text-white font-medium">May be required</p>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}