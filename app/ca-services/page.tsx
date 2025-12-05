import { BookOpen, TrendingUp, Users, Calculator, PieChart, Shield, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function CAServicesPage() {
  const services = [
    {
      icon: <BookOpen className="w-12 h-12 text-primary" />,
      title: 'Bookkeeping & Accounting',
      description: 'Professional bookkeeping and accounting services to maintain accurate financial records.',
      features: ['Daily Bookkeeping', 'Financial Statements', 'Account Reconciliation', 'MIS Reports'],
      link: '/ca-services/bookkeeping-accounting'
    },
    {
      icon: <Users className="w-12 h-12 text-primary" />,
      title: 'Virtual CFO Services',
      description: 'Strategic financial guidance and CFO-level expertise without the full-time cost.',
      features: ['Financial Strategy', 'Cash Flow Management', 'Budgeting & Forecasting', 'Business Planning'],
      link: '/ca-services/virtual-cfo'
    },
    {
      icon: <Shield className="w-12 h-12 text-primary" />,
      title: 'Audit & Assurance',
      description: 'Comprehensive audit services ensuring compliance and financial accuracy.',
      features: ['Statutory Audit', 'Internal Audit', 'Tax Audit', 'Concurrent Audit'],
      link: '/ca-services/audit-assurance'
    },
    {
      icon: <PieChart className="w-12 h-12 text-primary" />,
      title: 'Financial Planning',
      description: 'Expert financial planning services for business growth and sustainability.',
      features: ['Investment Planning', 'Risk Assessment', 'Growth Strategy', 'Financial Analysis'],
      link: '/ca-services/financial-planning'
    },
    {
      icon: <Calculator className="w-12 h-12 text-primary" />,
      title: 'Payroll Management',
      description: 'End-to-end payroll processing and compliance management services.',
      features: ['Salary Processing', 'PF & ESI Compliance', 'TDS on Salary', 'Payroll Reports'],
      link: '/ca-services/payroll-management'
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              CA Services
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Professional chartered accountant services for all your financial, accounting, and compliance needs
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
                  className="bg-white/10 backdrop-blur-md rounded-xl border border-blue-500/30 p-8 hover:shadow-2xl hover:shadow-primary/20 transition-all transform hover:-translate-y-2 group"
                >
                  <div className="mb-6">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl lg:text-4xl font-bold text-white text-center mb-12">
              Why Choose AKOS?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Qualified CAs</h3>
                <p className="text-gray-300">Team of experienced chartered accountants</p>
              </div>
              <div className="text-center">
                <TrendingUp className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Business Growth</h3>
                <p className="text-gray-300">Strategic guidance for sustainable growth</p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Compliance Assured</h3>
                <p className="text-gray-300">100% compliance with regulations</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Need Professional CA Services?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our expert chartered accountants handle your financial matters
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-blue-500 text-white font-bold rounded-lg hover:from-blue-500 hover:to-primary transition-all shadow-lg shadow-primary/50 hover:shadow-primary/70 transform hover:scale-105"
            >
              Get Started
            </Link>
          </div>
        </section>
      </main>
  );
}
