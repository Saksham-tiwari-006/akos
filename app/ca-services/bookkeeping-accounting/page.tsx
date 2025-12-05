'use client';

import { 
  BookOpen, FileText, Calculator, TrendingUp, CreditCard, BarChart3, 
  PieChart, Receipt, FileCheck, Building, Users, ShoppingCart, 
  Briefcase, CheckCircle, ArrowRight, Clock, Shield, Target,
  Wallet, ClipboardList, LineChart, BadgeCheck
} from 'lucide-react';
import ServiceConsultationForm from '../../components/ServiceConsultationForm';

export default function BookkeepingAccountingPage() {
  const services = [
    {
      icon: BookOpen,
      title: 'Daily Bookkeeping Services',
      description: 'We record all daily business transactions, such as sales, purchases, payments, and receipts, to keep your financial records clean and updated.'
    },
    {
      icon: Receipt,
      title: 'Recording Financial Transactions',
      description: 'From sales slips to expense receipts, we carefully record every money transaction, classifying them into the right categories for clear financial reports.'
    },
    {
      icon: Wallet,
      title: 'Accounts Payable (AP) & Receivable (AR) Management',
      description: 'We manage your AP by tracking what your business owes to suppliers and handle AR by monitoring customer payments and follow-ups for collections.'
    },
    {
      icon: CreditCard,
      title: 'Bank and Credit Card Reconciliations',
      description: 'We regularly match your bank and credit card statements with your accounting records to catch errors and avoid mismatches.'
    },
    {
      icon: ClipboardList,
      title: 'General Ledger (GL) Maintenance',
      description: 'The General Ledger is the master record of all financial transactions. We maintain and update it regularly to ensure the accuracy of your books.'
    },
    {
      icon: FileText,
      title: 'Financial Statement Preparation',
      description: 'We prepare key financial reports such as the Profit and Loss (P&L) Statement, Balance Sheet, and Cash Flow Statement to help you track your business performance.'
    },
    {
      icon: LineChart,
      title: 'Budgeting and Cash Flow Forecasting',
      description: 'We help you plan smartly by setting realistic budgets and forecasting your future cash flow to avoid shortages and improve decision-making.'
    },
    {
      icon: BarChart3,
      title: 'Customized Financial Reporting (MIS)',
      description: 'We create Management Information System (MIS) reports tailored to your needs, giving you clear insights into your revenue, expenses, profits, and financial health.'
    },
    {
      icon: FileCheck,
      title: 'GST Registration and Return Filing',
      description: 'We help your business register under GST and handle timely monthly or quarterly GST return filings, so you stay compliant and penalty-free.'
    },
    {
      icon: Calculator,
      title: 'TDS Filing and Compliance',
      description: 'We handle all aspects of TDS from accurate deduction to timely deposit, return filing (Form 26Q), and issuing Form 16/16A using TRACES and TIN-NSDL portals.'
    },
    {
      icon: Receipt,
      title: 'Income Tax Return (ITR) Filing',
      description: 'Our team manages your ITR filings, whether you\'re a Sole proprietor, Partnership firm, or Company. We ensure timely and accurate submissions.'
    },
    {
      icon: Building,
      title: 'ROC and Statutory Compliances',
      description: 'We handle all ROC filings, such as annual returns, Director KYC, and MCA compliances through the MCA21 Portal to keep your company legally updated.'
    },
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: 'Accurate Financial Records',
      description: 'All your transactions are recorded correctly, giving a clear view of your business\'s finances.'
    },
    {
      icon: Target,
      title: 'Better Decision-Making',
      description: 'Up-to-date financial data helps you make informed business choices quickly.'
    },
    {
      icon: Shield,
      title: 'Tax Compliance',
      description: 'Ensures your tax returns are accurate and filed on time, reducing penalties.'
    },
    {
      icon: Clock,
      title: 'Time and Cost Savings',
      description: 'Saves you time and avoids costly mistakes by outsourcing financial tasks.'
    },
    {
      icon: TrendingUp,
      title: 'Improved Cash Flow Management',
      description: 'Helps you track income and expenses to manage cash flow better.'
    },
    {
      icon: PieChart,
      title: 'Financial Planning and Analysis',
      description: 'Provides insights for budgeting, forecasting, and tax planning.'
    },
    {
      icon: FileCheck,
      title: 'Regulatory Compliance',
      description: 'Keeps your records in order to meet legal requirements and ease audits.'
    },
    {
      icon: BadgeCheck,
      title: 'Enhanced Business Credibility',
      description: 'Builds trust with investors, lenders, and partners through clear and professional accounts.'
    },
  ];

  const whoNeeds = [
    {
      icon: TrendingUp,
      title: 'Startups and New Businesses',
      description: 'New companies often don\'t have enough resources for their accounting team. Our services give you a solid financial base from day one.'
    },
    {
      icon: Building,
      title: 'Small and Medium Enterprises (SMEs)',
      description: 'SMEs get a lot of benefits from outsourcing their accounting and bookkeeping services. It saves valuable time and resources.'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce and Online Sellers',
      description: 'With high volume of sales and special tax situations, online bookkeeping services are vital for e-commerce businesses.'
    },
    {
      icon: Users,
      title: 'Professionals (Doctors, Lawyers, Consultants)',
      description: 'Sole practitioners need good money management including Form 26AS checks, presumptive tax support (Section 44ADA), and GST help.'
    },
    {
      icon: Briefcase,
      title: 'Businesses in Any Industry',
      description: 'No matter what you do, keeping accurate financial records is important. Our flexible services can be adjusted to fit any business sector.'
    },
  ];

  const processSteps = [
    {
      number: '01',
      title: 'Free Consultation and Needs Assessment',
      description: 'Fill out the form on our website and start with a free chat. We\'ll understand your business needs and provide a customized bookkeeping cost estimate.'
    },
    {
      number: '02',
      title: 'Secure Document and Data Collection',
      description: 'We use safe and easy ways to collect your financial papers and data, making sure your information is private and easy to share.'
    },
    {
      number: '03',
      title: 'Processing and Updating Your Books',
      description: 'Our skilled bookkeepers and accountants process your data, updating your records carefully and correctly.'
    },
    {
      number: '04',
      title: 'Review, Reporting, and Finalisation',
      description: 'We give you regular reports to review, discuss important points, and finalize your books. This ensures you always have a clear financial picture.'
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-6">
                <BookOpen className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">CA Services</span>
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Bookkeeping & Accounting Services
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Professional bookkeeping and accounting services to keep your financial records accurate, 
                organized, and compliant. Focus on growing your business while we handle your finances.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Expert CA Support</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>100% Compliance</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Timely Reports</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/20 to-primary/20 rounded-2xl p-8 backdrop-blur-sm border border-blue-500/30">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-blue-500/30 text-center">
                    <BookOpen className="w-10 h-10 text-primary mx-auto mb-3" />
                    <p className="text-white font-bold">Daily Bookkeeping</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-blue-500/30 text-center">
                    <BarChart3 className="w-10 h-10 text-green-400 mx-auto mb-3" />
                    <p className="text-white font-bold">Financial Reports</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-blue-500/30 text-center">
                    <Calculator className="w-10 h-10 text-yellow-400 mx-auto mb-3" />
                    <p className="text-white font-bold">Tax Filing</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-blue-500/30 text-center">
                    <Shield className="w-10 h-10 text-purple-400 mx-auto mb-3" />
                    <p className="text-white font-bold">Compliance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is Bookkeeping Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">What is Bookkeeping?</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                <strong className="text-primary">Bookkeeping</strong> involves documenting all the daily financial activities of your business. 
                This involves systematically tracking all income sources, such as sales and client payments, and all expenditures, 
                such as purchases and operational costs.
              </p>
              <p className="text-gray-300 leading-relaxed">
                It is the first step to managing your business finances and helps keep your records organized. 
                Proper bookkeeping creates a solid foundation for all your financial decisions.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">What is Accounting?</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                <strong className="text-primary">Accounting</strong> takes bookkeeping further. It involves reviewing, summarizing, and 
                explaining these records to create financial reports. These reports show how your business is doing, 
                whether it is making a profit, and where improvements can be made.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Accounting also helps with better decision-making, planning, and meeting tax requirements. 
                It transforms raw financial data into actionable business insights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Difference Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Difference Between a Bookkeeper and an Accountant
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              While the terms are often used interchangeably, a bookkeeper and an accountant have distinct roles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl p-8 border border-blue-500/30">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Bookkeeper</h3>
              <p className="text-gray-300 leading-relaxed">
                A bookkeeper focuses on the <strong className="text-primary">daily job</strong> of recording all money movements 
                accurately and keeping everything up-to-date. Their primary responsibility is the precise and consistent 
                recording of all financial transactions.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span>Daily transaction recording</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span>Maintaining accurate records</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span>Bank reconciliations</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <span>Invoice management</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl p-8 border border-purple-500/30">
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                <Calculator className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Accountant</h3>
              <p className="text-gray-300 leading-relaxed">
                An accountant uses the bookkeeper's records to <strong className="text-primary">review the business's financial health</strong>, 
                prepare tax returns and financial statements, and advise on investments, tax planning, and compliance 
                with financial regulations.
              </p>
              <ul className="mt-6 space-y-3">
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span>Financial analysis & reporting</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span>Tax planning & filing</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span>Business advisory</span>
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <CheckCircle className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span>Compliance management</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Key Advantages of Bookkeeping and Accounting Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Using professional bookkeeping and accounting services can help your business stay organized, 
              save time, and make smarter financial decisions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-blue-500/30 hover:bg-white/10 transition-all hover:scale-105"
              >
                <benefit.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-400 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Our Comprehensive Accounting and Bookkeeping Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              AKOS offers complete accounting and bookkeeping services designed to ensure financial accuracy 
              and compliance, allowing you to focus on your core business operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-blue-500/30 hover:bg-white/10 transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Needs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              Who Needs Professional Bookkeeping Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Many types of businesses in India need professional bookkeeping services. From new startups 
              to established companies, having accurate financial records is a must.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whoNeeds.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-blue-500/30 hover:bg-white/10 transition-all hover:scale-105"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
              How Our Online Accounting and Bookkeeping Process Works
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our online accounting and bookkeeping services are designed to be easy and efficient, 
              making the experience smooth for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white/5 backdrop-blur-md rounded-xl p-8 border border-blue-500/30 hover:bg-white/10 transition-all text-center"
              >
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center text-white font-bold shadow-lg shadow-primary/50">
                  {step.number}
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-primary/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Consultation Form Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Get Expert Bookkeeping & Accounting Support
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let our team of experienced professionals handle your bookkeeping and accounting needs. 
                Fill out the form to get started with a free consultation.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Accurate Record Keeping</h3>
                    <p className="text-gray-400">Every transaction recorded with precision and care</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Tax Compliance Guaranteed</h3>
                    <p className="text-gray-400">Stay compliant with all tax regulations and deadlines</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <BarChart3 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Insightful Financial Reports</h3>
                    <p className="text-gray-400">Clear reports to help you make better business decisions</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Save Time & Resources</h3>
                    <p className="text-gray-400">Focus on your business while we handle your finances</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <ServiceConsultationForm 
                serviceName="Bookkeeping & Accounting Services" 
                serviceCategory="CA Services" 
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
