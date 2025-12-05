import { CheckCircle } from 'lucide-react';
import RegistrationForm from '../../components/RegistrationForm';

export default function GSTRegistrationPage() {
  return (
    <div className="container mx-auto px-6 py-12 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
        <div className="lg:col-span-2">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
            GST Registration in India
          </h1>
          <div className="prose prose-lg text-gray-600 dark:text-gray-300 space-y-4">
            <p>
              Goods and Services Tax (GST) registration is mandatory for businesses with turnover above ₹40 lakhs (₹20 lakhs for services). It's a crucial compliance requirement in India.
            </p>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Benefits of GST Registration</h2>
            <ul className="space-y-2">
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary mt-1" /> Legal recognition nationwide</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary mt-1" /> Input tax credit benefits</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary mt-1" /> Easier interstate business</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary mt-1" /> Competitive advantage</li>
              <li className="flex items-start gap-2"><CheckCircle className="w-5 h-5 text-primary mt-1" /> Government scheme eligibility</li>
            </ul>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Documents Required</h2>
            <p>PAN Card, Aadhaar Card, Business address proof, Bank account details, Business registration certificate</p>
          </div>
        </div>
        <aside className="lg:col-span-1">
          <RegistrationForm
            title="Register for GST"
            description="Complete GST registration in 5-7 days"
            serviceType="GST Registration"
          />
        </aside>
      </div>
    </div>
  );
}
