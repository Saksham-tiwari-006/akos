import { CheckCircle } from 'lucide-react';
import RegistrationForm from '../../components/RegistrationForm';

export default function StartupIndiaPage() {
  return (
    <div className="container mx-auto px-6 py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
        <div className="lg:col-span-2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Startup India Registration
          </h1>
          <div className="prose prose-lg text-gray-600 dark:text-gray-300 space-y-4">
            <p>
              Startup India is a government initiative to promote and support entrepreneurship. Registration provides access to tax benefits, funding opportunities, and other incentives.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Key Benefits</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary mt-1" /> 3-year tax holiday</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary mt-1" /> Self-certification for compliance</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary mt-1" /> IPR fast-tracking</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary mt-1" /> Funding support</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary mt-1" /> Networking opportunities</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Eligibility</h2>
            <p>Company incorporated less than 10 years ago, annual turnover less than ₹100 crore, working towards innovation/development</p>
          </div>
        </div>
        <aside className="lg:col-span-1">
          <RegistrationForm
            title="Register Your Startup"
            description="Get Startup India recognition and benefits"
            serviceType="Startup India Registration"
          />
        </aside>
      </div>
    </div>
  );
}
