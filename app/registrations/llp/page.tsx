import { CheckCircle } from 'lucide-react';
import RegistrationForm from '../../components/RegistrationForm';

export default function LLPRegistrationPage() {
  return (
    <div className="container mx-auto px-6 py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
        <div className="lg:col-span-2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            LLP Registration in India
          </h1>
          <div className="prose prose-lg text-gray-600 dark:text-gray-300 space-y-4">
            <p>
              Limited Liability Partnership (LLP) registration offers a hybrid structure combining partnership flexibility with limited liability protection. It's ideal for professionals and SMEs.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Key Benefits</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary mt-1" /> Limited liability for partners</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary mt-1" /> Lower compliance requirements</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary mt-1" /> No minimum capital requirement</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary mt-1" /> Flexible management structure</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary mt-1" /> Separate legal entity</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Requirements</h2>
            <p>Minimum 2 partners required. At least one must be resident Indian. Can have maximum 100 partners.</p>
          </div>
        </div>
        <aside className="lg:col-span-1">
          <RegistrationForm
            title="Register Your LLP"
            description="Get your LLP registered in 7-10 working days"
            serviceType="LLP Registration"
          />
        </aside>
      </div>
    </div>
  );
}
