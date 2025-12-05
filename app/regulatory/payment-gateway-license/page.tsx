'use client';

import ServiceConsultationForm from '@/app/components/ServiceConsultationForm';

export default function PaymentGatewayLicensePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Payment Gateway License in India
          </h1>
          <p className="text-xl text-gray-300">
            Get RBI-authorized license to operate secure online payment processing systems
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                What is a Payment Gateway License in India?
              </h2>
              <p className="text-gray-200 mb-4">
                A Payment Gateway License, issued by the Reserve Bank of India (RBI) under Section 5 of the Payment and Settlement Systems (PSS) Act, 2007, is a mandatory authorization for any business that wants to operate a system for processing online payments. This license permits the entity to securely transmit transaction information between the customer, the merchant, and the respective banks.
              </p>
              <p className="text-gray-200">
                In simple words, it lets a business offer online payment services by safely connecting buyers and sellers for money transfers. Payment Gateways (PGs) that do not handle funds directly but only provide the underlying technology do not need a Payment Aggregator (PA) license. However, they must partner with an RBI-licensed Payment Aggregator and comply with RBI's regulations.
              </p>
            </div>

            {/* Laws Governing */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Law Governing Payment Gateway License in India
              </h2>
              <p className="text-gray-200 mb-4">
                To operate a payment gateway or act as a payment aggregator in India, businesses must comply with regulations set by the RBI and follow key financial, data, and IT laws. These ensure secure transactions, proper customer verification, and protection of sensitive information.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">
                    <strong>Payment and Settlement Systems Act, 2007:</strong> Governs and authorizes all payment systems in India under the RBI's control.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">
                    <strong>RBI Guidelines for Payment Aggregators and Gateways (2020):</strong> Mandates licensing, capital norms, and compliance standards for non-bank entities.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">
                    <strong>Information Technology Act, 2000:</strong> Ensures the legal validity and security of electronic transactions and records.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">
                    <strong>Prevention of Money Laundering Act (PMLA), 2002:</strong> Imposes mandatory KYC and anti-money laundering checks on financial intermediaries.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">
                    <strong>Digital Personal Data Protection (DPDP) Act, 2023:</strong> Regulates how personal data is collected, stored, and processed by digital platforms.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">
                    <strong>PCI-DSS Standards (Industry Standard):</strong> Requires secure handling and storage of card payment data to prevent breaches.
                  </span>
                </li>
              </ul>
            </div>

            {/* Benefits */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Benefits of Payment Gateway License in India
              </h2>
              <p className="text-gray-200 mb-4">
                A Payment Gateway License in India ensures legal compliance, enhances security, and enables smooth digital transactions. It helps businesses build trust, offer multiple payment options, and expand their market reach.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Enhanced Security and Trust</h3>
                  <p className="text-gray-200 text-sm">
                    The license mandates PCI-DSS compliance, ensuring you handle user data securely and building credibility with customers and partners.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Legal Authority to Operate</h3>
                  <p className="text-gray-200 text-sm">
                    The license provides the legal foundation to build and offer advanced payment solutions, including white-label wallets and integrated API platforms.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Fraud Screening Tools (FST)</h3>
                  <p className="text-gray-200 text-sm">
                    Licensed payment gateways offer tools like Card Code Value (CCV), Address Verification Service (AVS), and Card Verification Value (CVV) to detect and prevent fraud.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">One-Stop Solution</h3>
                  <p className="text-gray-200 text-sm">
                    A payment gateway acts as a single platform that connects different digital tools like shopping carts, e-commerce platforms, and software systems through one simple API integration.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Access to the Financial Ecosystem</h3>
                  <p className="text-gray-200 text-sm">
                    An RBI license is essential for establishing direct partnerships with multiple banks and card networks, allowing you to offer a wide array of payment options.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Market Expansion Opportunities</h3>
                  <p className="text-gray-200 text-sm">
                    The RBI-issued payment gateway license enables businesses to process international payments, helping them grow their reach beyond India and enter global markets.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Consultation Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <ServiceConsultationForm 
                serviceName="Payment Gateway License"
                serviceCategory="Regulatory"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
