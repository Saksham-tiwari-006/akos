import { CheckCircle, FileCheck } from 'lucide-react';
import Link from 'next/link';

export default function CompliancePage() {
  const services = [
    { name: 'Annual ROC Filing', features: ['Form AOC-4', 'Form MGT-7', 'Director KYC', 'Expert support'] },
    { name: 'GST Filing', features: ['GSTR-1', 'GSTR-3B', 'Monthly returns', 'Reconciliation'] },
    { name: 'TDS Filing', features: ['TDS return filing', 'Form 26Q/27Q', 'Compliance support'] },
    { name: 'Payroll Compliance', features: ['ESI/PF filing', 'Salary processing', 'Statutory compliance'] },
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-primary to-akos-blue py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Compliance Services</h1>
          <p className="text-lg max-w-2xl mx-auto">Stay compliant with all legal and statutory requirements</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-background-dark rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all">
              <FileCheck className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{service.name}</h3>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="block w-full text-center py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                Get Started
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
