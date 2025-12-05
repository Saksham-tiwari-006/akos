import { Leaf, Recycle, CheckCircle, FileText, Shield, AlertTriangle } from 'lucide-react';
import Link from 'next/link';

export default function EnvironmentalPage() {
  const services = [
    {
      icon: <FileText className="w-12 h-12 text-primary" />,
      title: 'Consent to Establish',
      description: 'Obtain environmental clearance for setting up new industrial units or expanding facilities.',
      link: '/environmental/consent-to-establish'
    },
    {
      icon: <Recycle className="w-12 h-12 text-primary" />,
      title: 'EPR Registration',
      description: 'Extended Producer Responsibility certification for environmentally responsible waste management.',
      link: '/environmental/epr-registration'
    },
    {
      icon: <AlertTriangle className="w-12 h-12 text-primary" />,
      title: 'Environmental Impact Assessment',
      description: 'Comprehensive environmental assessment for sustainable project development.',
      link: '/environmental/eia'
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: 'Environmental Auditing',
      description: 'Systematic evaluation of environmental performance and compliance.',
      link: '/environmental'
    },
    {
      icon: <Leaf className="w-12 h-12 text-primary" />,
      title: 'Plastic Waste Authorization',
      description: 'Authorization for plastic waste management and disposal.',
      link: '/environmental'
    },
    {
      icon: <Recycle className="w-12 h-12 text-primary" />,
      title: 'E-Waste Authorization',
      description: 'EPR authorization for electronic waste collection and recycling.',
      link: '/environmental'
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Environmental Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive environmental compliance and sustainability services for your business
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Link
                  key={index}
                  href={service.link}
                  className="bg-white/10 backdrop-blur-md rounded-xl border border-blue-500/30 p-8 hover:shadow-2xl hover:shadow-primary/20 transition-all transform hover:-translate-y-2"
                >
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300">{service.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Environmental Compliance */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
              Why Environmental Compliance Matters
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Legal Compliance</h3>
                <p className="text-gray-300">Avoid penalties and legal actions with proper environmental clearances</p>
              </div>
              <div className="text-center">
                <Leaf className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Sustainability</h3>
                <p className="text-gray-300">Contribute to environmental protection and sustainable development</p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Business Reputation</h3>
                <p className="text-gray-300">Enhance your brand image with environmental responsibility</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Ensure Environmental Compliance?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get expert assistance for all your environmental clearance needs
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-blue-500 text-white font-bold rounded-lg hover:from-blue-500 hover:to-primary transition-all shadow-lg shadow-primary/50 hover:shadow-primary/70 transform hover:scale-105"
            >
              Contact Our Experts
            </Link>
          </div>
        </section>
      </main>
  );
}
