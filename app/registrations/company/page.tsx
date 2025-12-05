import { Building, CheckCircle, FileText, Users } from 'lucide-react';
import RegistrationForm from '../../components/RegistrationForm';

export default function CompanyRegistrationPage() {
  const benefits = [
    'Limited liability protection',
    'Separate legal entity',
    'Easy to raise funds',
    'Tax benefits and incentives',
    'Perpetual succession',
    'Professional credibility',
  ];

  const steps = [
    { title: 'Document Collection', description: 'Gather required documents like PAN, Aadhaar, address proof' },
    { title: 'Name Approval', description: 'Get company name approved from MCA' },
    { title: 'Filing Forms', description: 'Submit incorporation forms and MOA/AOA' },
    { title: 'Certificate Issuance', description: 'Receive Certificate of Incorporation' },
  ];

  return (
    <div className="container mx-auto px-6 py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
        <div className="lg:col-span-2">
          <div className="space-y-12">
            <section>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                Company Registration in India
              </h1>
              <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
                <p>
                  Company registration in India is the process of formally incorporating a business entity with the Ministry of Corporate Affairs (MCA). This legal process gives the business a distinct identity, making it a separate legal entity from its owners.
                </p>
                <p className="mt-4">
                  A registered company gains credibility and recognition in the eyes of the law, customers, suppliers, and investors. It provides limited liability protection, meaning the personal assets of shareholders are protected from business debts and obligations.
                </p>
              </div>
            </section>

            <section className="bg-gradient-to-br from-primary/5 to-akos-blue/5 dark:from-primary/10 dark:to-akos-blue/10 p-8 rounded-xl">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Benefits of Company Registration
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Registration Process
              </h2>
              <div className="space-y-6">
                {steps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{step.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 mt-1">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Types of Company Registration
              </h2>
              <div className="space-y-4">
                <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-primary mb-2">Private Limited Company</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Most popular structure for startups. Requires 2-200 shareholders and 2 directors minimum.
                  </p>
                </div>
                <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-primary mb-2">Public Limited Company</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Can raise capital from public. Requires minimum 7 shareholders and 3 directors.
                  </p>
                </div>
                <div className="p-6 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-lg transition-shadow">
                  <h3 className="text-xl font-semibold text-primary mb-2">One Person Company (OPC)</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Allows single entrepreneur to operate with limited liability. Requires 1 director and 1 nominee.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Why Choose AKOS?
              </h2>
              <div className="space-y-3 text-gray-600 dark:text-gray-300">
                <p>✓ Expert guidance throughout the registration process</p>
                <p>✓ Fast processing - Get registered in 7-10 days</p>
                <p>✓ Complete documentation support</p>
                <p>✓ Post-registration compliance assistance</p>
                <p>✓ Transparent pricing with no hidden costs</p>
              </div>
            </section>
          </div>
        </div>

        <aside className="lg:col-span-1">
          <RegistrationForm
            title="Get Started Today"
            description="Fill out the form below and our experts will contact you within 24 hours."
            serviceType="Company Registration"
          />
        </aside>
      </div>
    </div>
  );
}
