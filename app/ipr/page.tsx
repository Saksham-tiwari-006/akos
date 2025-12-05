import { CheckCircle, Shield } from 'lucide-react';
import Link from 'next/link';

export default function IPRPage() {
  const services = [
    { name: 'Trademark Registration', description: 'Protect your brand name and logo' },
    { name: 'Copyright Registration', description: 'Protect your creative works' },
    { name: 'Patent Registration', description: 'Protect your innovations' },
    { name: 'Design Registration', description: 'Protect your product design' },
  ];

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-r from-primary to-akos-blue py-20 text-white">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Intellectual Property Rights (IPR)</h1>
          <p className="text-lg max-w-2xl mx-auto">Protect your intellectual assets</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-background-dark rounded-xl border border-gray-200 dark:border-gray-700 p-6 hover:shadow-xl transition-all">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{service.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">{service.description}</p>
              <Link href="/contact" className="block w-full text-center py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                Apply Now
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
