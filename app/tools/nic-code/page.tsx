'use client';

import { useState } from 'react';
import ServiceConsultationForm from '@/app/components/ServiceConsultationForm';
import { Search, FileText, Info } from 'lucide-react';

export default function NICCode() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<Array<{code: string, description: string}>>([]);

  // Sample NIC codes for demonstration
  const nicCodes = [
    { code: '47191', description: 'Retail sale in non-specialised stores' },
    { code: '62011', description: 'Computer programming activities' },
    { code: '62012', description: 'Web portals' },
    { code: '62013', description: 'Software publishing' },
    { code: '62021', description: 'Computer consultancy activities' },
    { code: '63111', description: 'Data processing, hosting and related activities' },
    { code: '70201', description: 'Management consultancy activities' },
    { code: '82990', description: 'Other business support service activities' },
    { code: '85422', description: 'Technical and vocational education' },
    { code: '47111', description: 'Retail sale of food, beverages and tobacco in specialized stores' },
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      const results = nicCodes.filter(
        item => 
          item.code.includes(searchTerm) || 
          item.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchResults(results);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                NIC Code Search
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find the right National Industrial Classification (NIC) code for your business activity
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="bg-white/10 backdrop-blur-md rounded-xl border border-blue-500/30 p-8 mb-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Search NIC Code</h2>
                  <form onSubmit={handleSearch} className="space-y-4">
                    <div className="relative">
                      <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Enter business activity or NIC code..."
                        className="w-full px-4 py-3 pl-12 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      />
                      <Search className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
                    </div>
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-gradient-to-r from-primary to-blue-500 text-white font-bold rounded-lg hover:from-blue-500 hover:to-primary transition-all shadow-lg"
                    >
                      Search
                    </button>
                  </form>

                  {searchResults.length > 0 && (
                    <div className="mt-6 space-y-3">
                      <h3 className="text-lg font-bold text-white mb-3">Search Results:</h3>
                      {searchResults.map((result, index) => (
                        <div key={index} className="bg-slate-900/50 p-4 rounded-lg border border-blue-500/20">
                          <div className="flex items-start gap-3">
                            <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-bold">
                              {result.code}
                            </span>
                            <p className="text-gray-300 text-sm flex-1">{result.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-xl border border-blue-500/30 p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Info className="w-6 h-6 text-primary" />
                    <h3 className="text-xl font-bold text-white">What is NIC Code?</h3>
                  </div>
                  <div className="space-y-3 text-gray-300 text-sm">
                    <p>
                      National Industrial Classification (NIC) is a system of classifying economic activities in India. 
                      It is used for company registration, GST registration, and various other compliance purposes.
                    </p>
                    <p>
                      The NIC code is a 5-digit number where each digit represents a level of classification from 
                      broad to specific business activities.
                    </p>
                    <p>
                      Choosing the correct NIC code is crucial as it determines the applicable regulations, tax rates, 
                      and compliance requirements for your business.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <ServiceConsultationForm 
                  serviceName="NIC Code Assistance"
                  serviceCategory="Tools & Calculators"
                />
                
                <div className="mt-8 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-xl border border-blue-500/30 p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Need Help?</h3>
                  <p className="text-gray-300 mb-4">
                    Our experts can help you identify the most appropriate NIC code for your business activities 
                    and ensure compliance with all regulatory requirements.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Expert consultation on business classification</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Multiple NIC codes for diverse business activities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-primary">•</span>
                      <span>Compliance guidance based on your NIC code</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Popular NIC Codes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {nicCodes.slice(0, 9).map((code, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-md rounded-lg border border-blue-500/30 p-4 hover:shadow-lg hover:shadow-primary/20 transition-all">
                  <div className="flex items-start gap-3">
                    <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs font-bold">
                      {code.code}
                    </span>
                    <p className="text-gray-300 text-sm flex-1">{code.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
  );
}
