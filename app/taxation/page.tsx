import { DollarSign, Calculator, FileText, TrendingUp, Users, Building } from 'lucide-react';
import Link from 'next/link';

export default function TaxationPage() {
  const services = [
    {
      icon: <FileText className="w-12 h-12 text-primary" />,
      title: 'Income Tax Filing',
      description: 'Expert assistance in filing individual and business income tax returns with maximum deductions and compliance.',
      features: ['ITR-1 to ITR-7', 'Tax Planning', 'Refund Processing', 'Assessment Support']
    },
    {
      icon: <Calculator className="w-12 h-12 text-primary" />,
      title: 'Tax Planning',
      description: 'Strategic tax planning to minimize your tax liability legally and optimize your financial position.',
      features: ['Investment Planning', 'Tax Saving Strategies', 'Retirement Planning', 'Wealth Management']
    },
    {
      icon: <TrendingUp className="w-12 h-12 text-primary" />,
      title: 'Tax Advisory',
      description: 'Professional tax advisory services for complex tax matters and compliance requirements.',
      features: ['Tax Consultancy', 'Litigation Support', 'Transfer Pricing', 'International Taxation']
    },
    {
      icon: <DollarSign className="w-12 h-12 text-primary" />,
      title: 'GST Consultation',
      description: 'Comprehensive GST services including registration, filing, and compliance management.',
      features: ['GST Registration', 'GST Returns', 'Input Tax Credit', 'GST Audit']
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Taxation Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Expert tax planning, filing, and advisory services to optimize your tax position and ensure compliance
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-md rounded-xl border border-blue-500/30 p-8 hover:shadow-2xl hover:shadow-primary/20 transition-all transform hover:-translate-y-2"
                >
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
              Why Choose Our Tax Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Expert Team</h3>
                <p className="text-gray-300">Experienced tax professionals and chartered accountants</p>
              </div>
              <div className="text-center">
                <Building className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Comprehensive Solutions</h3>
                <p className="text-gray-300">End-to-end tax solutions for individuals and businesses</p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Maximize Savings</h3>
                <p className="text-gray-300">Strategic planning to minimize tax liability legally</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Optimize Your Taxes?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get expert tax advice and services tailored to your needs
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-blue-500 text-white font-bold rounded-lg hover:from-blue-500 hover:to-primary transition-all shadow-lg shadow-primary/50 hover:shadow-primary/70 transform hover:scale-105"
            >
              Schedule Consultation
            </Link>
          </div>
        </section>
      </main>
  );
}
