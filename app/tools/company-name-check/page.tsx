'use client';

import { useState } from 'react';
import ServiceConsultationForm from '@/app/components/ServiceConsultationForm';
import { Search, CheckCircle, Building2, AlertCircle } from 'lucide-react';

export default function CompanyNameCheck() {
  const [companyName, setCompanyName] = useState('');
  const [checkResult, setCheckResult] = useState<{available: boolean, message: string} | null>(null);
  const [isChecking, setIsChecking] = useState(false);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    setIsChecking(true);
    
    // Simulate API check
    setTimeout(() => {
      // Random availability for demo
      const available = Math.random() > 0.5;
      setCheckResult({
        available,
        message: available 
          ? `"${companyName}" appears to be available! However, please verify with MCA for final confirmation.`
          : `"${companyName}" is similar to an existing company name. Please try a different name.`
      });
      setIsChecking(false);
    }, 1500);
  };

  const guidelines = [
    'Should not be identical or similar to an existing company',
    'Should not be undesirable or offensive',
    'Should not violate trademark rights',
    'Should not use restricted words without approval',
    'Should be unique and distinguishable',
    'Avoid generic or common names',
  ];

  const restrictedWords = [
    'National', 'State', 'Government', 'President', 'Parliament', 
    'Reserve Bank', 'Stock Exchange', 'Insurance', 'Bank'
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Company Name Availability Check
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Verify if your desired company name is available for registration with MCA
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl border border-blue-500/30 p-8 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Check Name Availability</h2>
                  <form onSubmit={handleCheck} className="space-y-4">
                    <div className="relative">
                      <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="Enter proposed company name..."
                        className="w-full px-4 py-3 pl-12 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        required
                      />
                      <Building2 className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                    </div>
                    <button
                      type="submit"
                      disabled={isChecking}
                      className="w-full px-6 py-3 bg-gradient-to-r from-primary to-blue-500 text-white font-bold rounded-lg hover:from-blue-500 hover:to-primary transition-all shadow-lg disabled:opacity-50"
                    >
                      {isChecking ? 'Checking...' : 'Check Availability'}
                    </button>
                  </form>

                  {checkResult && (
                    <div className={`mt-6 p-4 rounded-lg border ${
                      checkResult.available 
                        ? 'bg-green-500/20 border-green-500/30' 
                        : 'bg-red-500/20 border-red-500/30'
                    }`}>
                      <div className="flex items-start gap-3">
                        {checkResult.available ? (
                          <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-0.5" />
                        ) : (
                          <AlertCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-0.5" />
                        )}
                        <div>
                          <h3 className={`font-bold mb-2 ${checkResult.available ? 'text-green-300' : 'text-red-300'}`}>
                            {checkResult.available ? 'Name Available!' : 'Name Not Available'}
                          </h3>
                          <p className={checkResult.available ? 'text-green-200' : 'text-red-200'}>
                            {checkResult.message}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl border border-blue-500/30 p-8">
                  <h3 className="text-xl font-bold text-white mb-4">Name Selection Guidelines</h3>
                  <ul className="space-y-3">
                    {guidelines.map((guideline, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-300 text-sm">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{guideline}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <ServiceConsultationForm 
                  serviceName="Company Name Check & Registration"
                  serviceCategory="Tools & Calculators"
                />

                <div className="mt-8 bg-white/10 backdrop-blur-md rounded-xl border border-blue-500/30 p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Restricted Words</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    The following words require special approval from relevant authorities:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {restrictedWords.map((word, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-red-500/20 border border-red-500/30 rounded-full text-red-300 text-xs"
                      >
                        {word}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-xl border border-blue-500/30 p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Our Services</h3>
                  <ul className="space-y-3 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Comprehensive name availability check</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Multiple name suggestions and alternatives</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Trademark search and verification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Name approval and reservation assistance</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Complete company registration support</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Need Help Choosing the Perfect Name?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our experts can help you select a unique, compliant, and memorable name for your company
            </p>
            <a
              href="#"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-blue-500 text-white font-bold rounded-lg hover:from-blue-500 hover:to-primary transition-all shadow-lg shadow-primary/50"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              Get Expert Assistance
            </a>
          </div>
        </section>
      </main>
  );
}
