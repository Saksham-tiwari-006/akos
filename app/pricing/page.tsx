import { Check, X } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
  const plans = [
    {
      name: 'Startup',
      description: 'Perfect for new businesses getting started',
      features: [
        'Company Registration',
        'PAN & TAN',
        'GST Registration',
        'Basic Compliance',
        'Email Support',
      ],
      notIncluded: [
        'Monthly Bookkeeping',
        'Tax Planning',
        'Dedicated Account Manager',
      ],
      popular: false,
    },
    {
      name: 'Professional',
      description: 'Ideal for growing businesses',
      features: [
        'Everything in Startup',
        'Monthly Bookkeeping',
        'GST Filing (Monthly)',
        'Income Tax Filing',
        'Quarterly MIS Reports',
        'Phone & Email Support',
      ],
      notIncluded: [
        'Tax Planning',
        'Dedicated Account Manager',
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      description: 'For established businesses with complex needs',
      features: [
        'Everything in Professional',
        'Tax Planning & Advisory',
        'Virtual CFO Services',
        'Dedicated Account Manager',
        'Priority Support',
        'Custom Compliance Solutions',
        'Audit & Assurance',
      ],
      notIncluded: [],
      popular: false,
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that best fits your business needs
            </p>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {plans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-md rounded-xl border ${
                    plan.popular ? 'border-primary shadow-2xl shadow-primary/20 transform scale-105' : 'border-blue-500/30'
                  } p-8 relative`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 bg-gradient-to-r from-primary to-blue-500 text-white text-sm font-bold rounded-full">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-300">
                        <Check className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                    {plan.notIncluded.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-gray-500">
                        <X className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`block w-full px-6 py-3 text-center font-bold rounded-lg transition-all ${
                      plan.popular
                        ? 'bg-gradient-to-r from-primary to-blue-500 text-white hover:from-blue-500 hover:to-primary shadow-lg shadow-primary/50'
                        : 'border-2 border-primary text-primary hover:bg-primary hover:text-white'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ or Additional Info */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We offer flexible pricing for businesses with unique requirements. Contact us for a personalized quote.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-blue-500 text-white font-bold rounded-lg hover:from-blue-500 hover:to-primary transition-all shadow-lg shadow-primary/50 hover:shadow-primary/70 transform hover:scale-105"
            >
              Contact Sales
            </Link>
          </div>
        </section>
      </main>
  );
}
