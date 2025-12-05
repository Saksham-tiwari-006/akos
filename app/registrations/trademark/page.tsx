import { CheckCircle } from 'lucide-react';
import RegistrationForm from '../../components/RegistrationForm';

export default function TrademarkPage() {
  return (
    <div className="container mx-auto px-6 py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
        <div className="lg:col-span-2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            Trademark Registration in India
          </h1>
          <div className="prose prose-lg text-gray-600 dark:text-gray-300 space-y-4">
            <p>
              Trademark registration protects your brand identity including name, logo, slogan. It provides exclusive rights to use and prevent others from using similar marks.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Benefits</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary mt-1" /> Legal protection for 10 years</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary mt-1" /> Exclusive usage rights</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary mt-1" /> Brand value enhancement</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary mt-1" /> Asset for business</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary mt-1" /> Legal recourse against infringement</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Process Timeline</h2>
            <p>Application filing, examination, publication in journal, registration (typically 12-18 months)</p>
          </div>
        </div>
        <aside className="lg:col-span-1">
          <RegistrationForm
            title="Protect Your Brand"
            description="Register your trademark today"
            serviceType="Trademark Registration"
          />
        </aside>
      </div>
    </div>
  );
}
