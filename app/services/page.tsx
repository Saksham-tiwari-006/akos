'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Building, FileText, Scale, BarChart3, Shield, Search, 
  ChevronRight, Briefcase, Leaf, Clock
} from 'lucide-react';

export default function AllServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const serviceCategories = [
    {
      id: 'registrations',
      category: 'Business Registrations',
      icon: Building,
      color: 'from-blue-500 to-cyan-500',
      description: 'Complete company incorporation and registration services for all business types',
      services: [
        { 
          title: 'Private Limited Company Registration', 
          href: '/registrations/company',
          description: 'Register your Pvt Ltd company with MCA compliance',
          duration: '7-10 days'
        },
        { 
          title: 'LLP Registration', 
          href: '/registrations/llp',
          description: 'Limited Liability Partnership registration with ROC',
          duration: '7-10 days'
        },
        { 
          title: 'One Person Company (OPC)', 
          href: '/registrations/company',
          description: 'Single owner company registration',
          duration: '10-12 days'
        },
        { 
          title: 'Partnership Firm Registration', 
          href: '/registrations/company',
          description: 'Register partnership firm with deed',
          duration: '3-5 days'
        },
        { 
          title: 'Sole Proprietorship', 
          href: '/registrations/company',
          description: 'Simple single owner business setup',
          duration: '1-2 days'
        },
        { 
          title: 'GST Registration', 
          href: '/registrations/gst',
          description: 'Get your GST number for tax compliance',
          duration: '3-5 days'
        },
        { 
          title: 'Startup India Registration', 
          href: '/registrations/startup-india',
          description: 'DPIIT recognition for startups',
          duration: '5-7 days'
        },
        { 
          title: 'MSME/Udyam Registration', 
          href: '/registrations/startup-india',
          description: 'Government MSME certification',
          duration: '1-2 days'
        },
        { 
          title: 'Import Export Code (IEC)', 
          href: '/registrations/company',
          description: 'License for international trade',
          duration: '3-5 days'
        },
        { 
          title: 'FSSAI License', 
          href: '/registrations/company',
          description: 'Food business license and registration',
          duration: '15-30 days'
        },
        { 
          title: 'Professional Tax Registration', 
          href: '/registrations/company',
          description: 'State-wise professional tax registration',
          duration: '5-7 days'
        },
        { 
          title: 'Shop & Establishment License', 
          href: '/registrations/company',
          description: 'Municipal license for business premises',
          duration: '7-10 days'
        },
      ],
    },
    {
      id: 'taxation',
      category: 'Tax & Compliance',
      icon: FileText,
      color: 'from-green-500 to-emerald-500',
      description: 'Expert tax filing and compliance management services for individuals and businesses',
      services: [
        { 
          title: 'Income Tax Return Filing (Individual)', 
          href: '/taxation/income-tax-return',
          description: 'ITR filing for salaried and self-employed',
          duration: '1-2 days'
        },
        { 
          title: 'Income Tax Return Filing (Business)', 
          href: '/taxation/income-tax-return',
          description: 'ITR filing for businesses and professionals',
          duration: '3-5 days'
        },
        { 
          title: 'GST Return Filing (Monthly)', 
          href: '/taxation/gst-return-filing',
          description: 'GSTR-1, GSTR-3B monthly filing',
          duration: 'Monthly'
        },
        { 
          title: 'GST Annual Return (GSTR-9)', 
          href: '/taxation/gst-return-filing',
          description: 'Annual GST return filing',
          duration: '5-7 days'
        },
        { 
          title: 'TDS Return Filing', 
          href: '/taxation/tds-return',
          description: 'Quarterly TDS return filing',
          duration: 'Quarterly'
        },
        { 
          title: 'Tax Planning & Advisory', 
          href: '/taxation/tax-planning',
          description: 'Strategic tax planning to minimize liability',
          duration: 'Consultation'
        },
        { 
          title: 'GST E-Invoice Setup', 
          href: '/taxation/gst-einvoice',
          description: 'E-invoicing setup and compliance',
          duration: '2-3 days'
        },
        { 
          title: 'E-Way Bill Registration', 
          href: '/taxation/eway-bill',
          description: 'E-way bill registration and management',
          duration: '1-2 days'
        },
        { 
          title: 'Input Tax Credit (ITC) Reconciliation', 
          href: '/taxation/input-tax-credit',
          description: 'ITC matching and reconciliation',
          duration: '5-7 days'
        },
        { 
          title: 'GST LUT Filing', 
          href: '/taxation/gst-lut',
          description: 'Letter of Undertaking for exporters',
          duration: '1-2 days'
        },
        { 
          title: 'GST Refund', 
          href: '/taxation/gst-refund',
          description: 'GST refund application and processing',
          duration: '15-30 days'
        },
        { 
          title: 'GST Cancellation', 
          href: '/taxation/gst-cancellation',
          description: 'GST registration cancellation',
          duration: '7-10 days'
        },
        { 
          title: 'Tax Notice Response', 
          href: '/taxation/tax-notice',
          description: 'Handle income tax and GST notices',
          duration: 'As required'
        },
        { 
          title: 'Advance Tax Calculation', 
          href: '/taxation/advance-tax',
          description: 'Quarterly advance tax computation',
          duration: 'Quarterly'
        },
      ],
    },
    {
      id: 'ipr',
      category: 'Intellectual Property',
      icon: Shield,
      color: 'from-purple-500 to-pink-500',
      description: 'Protect your brand, innovations, and creative works with comprehensive IPR services',
      services: [
        { 
          title: 'Trademark Registration', 
          href: '/registrations/trademark',
          description: 'Register and protect your brand name/logo',
          duration: '1-2 days filing'
        },
        { 
          title: 'Trademark Renewal', 
          href: '/ipr/trademark-renewal',
          description: 'Renew your trademark registration',
          duration: '2-3 days'
        },
        { 
          title: 'Trademark Objection Reply', 
          href: '/ipr/trademark-objection',
          description: 'Respond to trademark examination reports',
          duration: '5-7 days'
        },
        { 
          title: 'Trademark Opposition', 
          href: '/ipr/trademark-opposition',
          description: 'File or defend trademark opposition',
          duration: 'As required'
        },
        { 
          title: 'Copyright Registration', 
          href: '/ipr/copyright',
          description: 'Protect your creative and artistic works',
          duration: '30-45 days'
        },
        { 
          title: 'Patent Registration', 
          href: '/ipr/patent',
          description: 'Protect your inventions and innovations',
          duration: '2-4 years'
        },
        { 
          title: 'Design Registration', 
          href: '/ipr/design',
          description: 'Protect product designs and aesthetics',
          duration: '3-6 months'
        },
        { 
          title: 'International Trademark (Madrid Protocol)', 
          href: '/ipr/international-trademark',
          description: 'Global trademark protection',
          duration: '12-18 months'
        },
        { 
          title: 'Trademark Search & Report', 
          href: '/ipr/trademark-search',
          description: 'Comprehensive trademark availability search',
          duration: '2-3 days'
        },
        { 
          title: 'Trademark Assignment', 
          href: '/ipr/trademark-assignment',
          description: 'Transfer trademark ownership',
          duration: '7-10 days'
        },
        { 
          title: 'IP Portfolio Management', 
          href: '/ipr/ip-portfolio',
          description: 'Manage all your intellectual property',
          duration: 'Ongoing'
        },
        { 
          title: 'IP Dispute Resolution', 
          href: '/ipr/ip-dispute',
          description: 'Handle IP infringement cases',
          duration: 'As required'
        },
      ],
    },
    {
      id: 'ca-services',
      category: 'Accounting & CA Services',
      icon: BarChart3,
      color: 'from-orange-500 to-red-500',
      description: 'Professional accounting, bookkeeping, and chartered accountant services',
      services: [
        { 
          title: 'Bookkeeping & Accounting', 
          href: '/ca-services',
          description: 'Complete accounting and bookkeeping services',
          duration: 'Monthly'
        },
        { 
          title: 'Virtual CFO Services', 
          href: '/ca-services/virtual-cfo',
          description: 'Strategic financial guidance and CFO expertise',
          duration: 'Monthly'
        },
        { 
          title: 'Audit & Assurance', 
          href: '/ca-services/audit-assurance',
          description: 'Statutory, internal, and tax audit services',
          duration: 'Annual'
        },
        { 
          title: 'Payroll Management', 
          href: '/ca-services/payroll-management',
          description: 'Complete payroll processing and compliance',
          duration: 'Monthly'
        },
        { 
          title: 'Financial Planning', 
          href: '/ca-services/financial-planning',
          description: 'Strategic financial planning and advisory',
          duration: 'Consultation'
        },
        { 
          title: 'MIS Reports', 
          href: '/ca-services',
          description: 'Management information system reports',
          duration: 'Monthly'
        },
        { 
          title: 'Budget Preparation', 
          href: '/ca-services',
          description: 'Annual budget planning and preparation',
          duration: 'Annual'
        },
        { 
          title: 'Cash Flow Management', 
          href: '/ca-services/virtual-cfo',
          description: 'Cash flow analysis and optimization',
          duration: 'Consultation'
        },
      ],
    },
    {
      id: 'compliance',
      category: 'Annual Compliance',
      icon: Clock,
      color: 'from-yellow-500 to-amber-500',
      description: 'Ensure your business stays compliant with all regulatory requirements',
      services: [
        { 
          title: 'Annual ROC Filing (Private Limited)', 
          href: '/compliance',
          description: 'AOC-4 and MGT-7 annual filing',
          duration: 'Annual'
        },
        { 
          title: 'Annual ROC Filing (LLP)', 
          href: '/compliance',
          description: 'Form 8 and Form 11 annual filing',
          duration: 'Annual'
        },
        { 
          title: 'Director KYC (DIR-3 KYC)', 
          href: '/compliance',
          description: 'Annual director KYC compliance',
          duration: 'Annual'
        },
        { 
          title: 'Company Annual Compliance Package', 
          href: '/compliance',
          description: 'Complete annual compliance for Pvt Ltd',
          duration: 'Annual'
        },
        { 
          title: 'LLP Annual Compliance Package', 
          href: '/compliance',
          description: 'Complete annual compliance for LLP',
          duration: 'Annual'
        },
        { 
          title: 'DIN Reactivation', 
          href: '/compliance',
          description: 'Reactivate deactivated DIN',
          duration: '7-10 days'
        },
        { 
          title: 'Registered Office Change', 
          href: '/compliance',
          description: 'Change company registered address',
          duration: '15-20 days'
        },
        { 
          title: 'Share Transfer', 
          href: '/compliance',
          description: 'Transfer company shares',
          duration: '5-7 days'
        },
      ],
    },
    {
      id: 'legal',
      category: 'Legal & Agreements',
      icon: Scale,
      color: 'from-indigo-500 to-purple-500',
      description: 'Legal documentation, contracts, and agreement drafting services',
      services: [
        { 
          title: 'Partnership Deed', 
          href: '/agreements/partnership',
          description: 'Draft and register partnership agreement',
          duration: '2-3 days'
        },
        { 
          title: 'Non-Disclosure Agreement (NDA)', 
          href: '/agreements/nda',
          description: 'Confidentiality agreement drafting',
          duration: '1-2 days'
        },
        { 
          title: 'Memorandum of Understanding (MOU)', 
          href: '/agreements/mou',
          description: 'Business MOU drafting',
          duration: '2-3 days'
        },
        { 
          title: 'Shareholder Agreement', 
          href: '/agreements/shareholder',
          description: 'Agreement between company shareholders',
          duration: '3-5 days'
        },
        { 
          title: 'Founders Agreement', 
          href: '/agreements/founders',
          description: 'Agreement for startup co-founders',
          duration: '3-5 days'
        },
        { 
          title: 'Employment Agreement', 
          href: '/agreements/employment',
          description: 'Employee contract drafting',
          duration: '1-2 days'
        },
        { 
          title: 'Service Agreement', 
          href: '/agreements/service',
          description: 'Service provider contract',
          duration: '2-3 days'
        },
        { 
          title: 'Legal Notice', 
          href: '/regulatory/legal-notice',
          description: 'Draft and send legal notices',
          duration: '1-2 days'
        },
        { 
          title: 'Will Drafting', 
          href: '/legal/will',
          description: 'Draft legally valid will',
          duration: '3-5 days'
        },
        { 
          title: 'Power of Attorney', 
          href: '/legal/poa',
          description: 'General/Special POA drafting',
          duration: '2-3 days'
        },
      ],
    },
    {
      id: 'environmental',
      category: 'Environmental Compliance',
      icon: Leaf,
      color: 'from-teal-500 to-green-500',
      description: 'Environmental clearances, licenses, and compliance services',
      services: [
        { 
          title: 'EPR Registration', 
          href: '/environmental/epr-registration',
          description: 'Extended Producer Responsibility registration',
          duration: '30-45 days'
        },
        { 
          title: 'Environmental Impact Assessment', 
          href: '/environmental/eia',
          description: 'EIA report and clearance',
          duration: '60-90 days'
        },
        { 
          title: 'Consent to Establish (CTE)', 
          href: '/environmental/consent-to-establish',
          description: 'Pollution control board consent',
          duration: '30-60 days'
        },
        { 
          title: 'Consent to Operate (CTO)', 
          href: '/environmental/consent-to-operate',
          description: 'Operating consent from PCB',
          duration: '30-45 days'
        },
        { 
          title: 'Fire Department NOC', 
          href: '/environmental/fire-noc',
          description: 'Fire safety no-objection certificate',
          duration: '15-30 days'
        },
        { 
          title: 'Hazardous Waste Authorization', 
          href: '/environmental/hazardous-waste',
          description: 'Authorization for hazardous waste handling',
          duration: '30-45 days'
        },
        { 
          title: 'Plastic Waste Management', 
          href: '/environmental/plastic-waste',
          description: 'PWM compliance and registration',
          duration: '15-30 days'
        },
        { 
          title: 'E-Waste Authorization', 
          href: '/environmental/e-waste',
          description: 'E-waste handling authorization',
          duration: '30-45 days'
        },
      ],
    },
  ];

  const allServices = serviceCategories.flatMap(cat => 
    cat.services.map(service => ({
      ...service,
      category: cat.category,
      categoryId: cat.id,
      categoryColor: cat.color,
      categoryIcon: cat.icon
    }))
  );

  const filteredServices = allServices.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'all' || service.categoryId === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const filteredCategories = activeCategory === 'all' 
    ? serviceCategories 
    : serviceCategories.filter(cat => cat.id === activeCategory);

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-6">
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Complete Service Catalog</span>
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            All Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
            Explore our comprehensive range of business, taxation, legal, and compliance services. 
            Click on any service to learn more and get started.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search for a service..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-md border border-blue-500/30 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary transition-all text-lg"
            />
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 sticky top-20 z-40 bg-slate-900/80 backdrop-blur-md border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeCategory === 'all'
                  ? 'bg-primary text-white shadow-lg shadow-primary/50'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20'
              }`}
            >
              All Services
            </button>
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
                  activeCategory === cat.id
                    ? 'bg-primary text-white shadow-lg shadow-primary/50'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <cat.icon className="w-4 h-4" />
                {cat.category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {searchTerm ? (
            // Search Results View
            <div>
              <p className="text-gray-300 mb-8 text-lg">
                Found <span className="text-primary font-bold">{filteredServices.length}</span> services matching "{searchTerm}"
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredServices.map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="group bg-white/5 backdrop-blur-md rounded-xl border border-blue-500/30 p-6 hover:bg-white/10 hover:shadow-2xl hover:shadow-primary/20 transition-all hover:scale-105"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${service.categoryColor} text-white`}>
                        {service.category}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {service.duration}
                      </span>
                    </div>
                    <div className="mt-4 flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                      Learn More <ChevronRight className="w-4 h-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : (
            // Category View
            <div className="space-y-16">
              {filteredCategories.map((category) => (
                <div key={category.id} id={category.id}>
                  <div className="flex items-center gap-4 mb-8">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg`}>
                      <category.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-white">{category.category}</h2>
                      <p className="text-gray-400">{category.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {category.services.map((service, index) => (
                      <Link
                        key={index}
                        href={service.href}
                        className="group bg-white/5 backdrop-blur-md rounded-xl border border-blue-500/30 p-6 hover:bg-white/10 hover:shadow-2xl hover:shadow-primary/20 transition-all hover:scale-105"
                      >
                        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-primary transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{service.description}</p>
                        <div className="flex items-center mb-4">
                          <span className="text-gray-400 text-sm flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {service.duration}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-primary font-semibold text-sm group-hover:gap-3 transition-all">
                          Get Started <ChevronRight className="w-4 h-4" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Can't find what you're looking for?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact our experts for a free consultation. We offer customized solutions for all your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-primary to-blue-500 text-white text-lg font-bold rounded-lg hover:from-blue-500 hover:to-primary transition-all transform hover:scale-105 shadow-lg shadow-primary/50"
            >
              Contact Us
            </Link>
            <Link
              href="/#consultation"
              className="px-8 py-4 border-2 border-primary/50 text-white text-lg font-bold rounded-lg hover:bg-primary/10 transition-all"
            >
              Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
