'use client';

import { TrendingUp, Target, DollarSign, PieChart, Shield, CheckCircle, BarChart3, Wallet, Building, Calculator, Clock, ArrowRight, Briefcase, LineChart } from 'lucide-react';
import ServiceConsultationForm from '@/app/components/ServiceConsultationForm';
import Link from 'next/link';

export default function FinancialPlanningPage() {
  const elements = [
    {
      title: 'Goal setting',
      description: 'Identifying financial goals such as buying a house, saving for education, building emergency funds, or business expansion.',
      icon: <Target className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Income and expense analysis',
      description: 'Reviewing current income sources and tracking expenses to understand cash flow and identify unnecessary spending.',
      icon: <BarChart3 className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Budgeting',
      description: 'Creating a monthly or annual budget to control expenses and ensure money is allocated toward savings, investments, and essential needs.',
      icon: <Calculator className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Savings planning',
      description: 'Setting aside a portion of income regularly to build a financial cushion for emergencies or future needs.',
      icon: <Wallet className="w-8 h-8 text-yellow-400" />
    },
    {
      title: 'Investment planning',
      description: 'Choosing the right investments like fixed deposits, mutual funds, stocks, bonds, real estate, or business expansion to grow wealth over time.',
      icon: <TrendingUp className="w-8 h-8 text-red-400" />
    },
    {
      title: 'Risk management',
      description: 'Using insurance or diversification strategies to protect against financial losses, uncertainties, or unexpected events.',
      icon: <Shield className="w-8 h-8 text-cyan-400" />
    },
    {
      title: 'Tax planning',
      description: 'Organizing finances to minimize tax liabilities legally by using deductions, exemptions, and suitable investment options.',
      icon: <DollarSign className="w-8 h-8 text-orange-400" />
    },
    {
      title: 'Retirement planning',
      description: 'Ensuring enough savings and assets are built for a comfortable life after retirement.',
      icon: <Clock className="w-8 h-8 text-pink-400" />
    },
    {
      title: 'Debt management',
      description: 'Handling loans and liabilities efficiently, reducing high-interest debt, and maintaining a healthy credit profile.',
      icon: <Building className="w-8 h-8 text-indigo-400" />
    },
    {
      title: 'Regular monitoring',
      description: 'Reviewing the financial plan periodically and adjusting it based on changes in income, goals, or market conditions.',
      icon: <LineChart className="w-8 h-8 text-teal-400" />
    }
  ];

  const benefits = [
    'Provides financial clarity and discipline',
    'Ensures better control over income and expenses',
    'Helps achieve long-term goals systematically',
    'Minimizes financial risks and uncertainties',
    'Improves savings and investment returns',
    'Strengthens long-term financial security'
  ];

  const planningAreas = [
    { title: 'Personal Financial Planning', description: 'Comprehensive planning for individuals and families' },
    { title: 'Business Financial Planning', description: 'Strategic financial planning for business growth' },
    { title: 'Investment Advisory', description: 'Expert guidance on investment decisions' },
    { title: 'Wealth Management', description: 'Complete wealth creation and preservation' },
    { title: 'Tax-Efficient Planning', description: 'Maximize savings through tax optimization' },
    { title: 'Succession Planning', description: 'Plan for smooth wealth transfer' }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-6">
              <PieChart className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">CA Services</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Financial Planning Services
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Financial planning is the process of managing finances in a structured way to achieve short-term and long-term goals. It involves analyzing income, expenses, savings, investments, and risks to create a clear plan for financial stability and future growth. Financial planning helps individuals and businesses make better decisions and use money more effectively.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Content - 2 columns */}
            <div className="lg:col-span-2 space-y-16">
              {/* Key Elements */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Key Elements of Financial Planning</h2>
                </div>
                <div className="space-y-6">
                  {elements.map((element, index) => (
                    <div
                      key={index}
                      className="bg-white/5 backdrop-blur-md rounded-xl border border-blue-500/30 p-6 hover:bg-white/10 transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-white/10 flex items-center justify-center">
                          {element.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{index + 1}. {element.title}</h3>
                          <p className="text-gray-300 leading-relaxed">{element.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Planning Areas */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Our Financial Planning Services</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {planningAreas.map((area, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-md rounded-xl border border-green-500/30 p-6 hover:bg-white/10 transition-all">
                      <h3 className="text-lg font-bold text-white mb-2">{area.title}</h3>
                      <p className="text-gray-300 text-sm">{area.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Benefits Section */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Benefits of Financial Planning</h2>
                </div>
                <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30 p-8">
                  <div className="space-y-4">
                    {benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm">
                          {index + 1}
                        </div>
                        <p className="text-lg text-white pt-1">{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Planning Process */}
              <div className="bg-white/5 backdrop-blur-md rounded-xl border border-blue-500/30 p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Our Financial Planning Process</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center text-white font-bold mx-auto mb-3">1</div>
                    <h3 className="font-bold text-white mb-1">Assessment</h3>
                    <p className="text-gray-300 text-sm">Understand your current financial situation</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center text-white font-bold mx-auto mb-3">2</div>
                    <h3 className="font-bold text-white mb-1">Goal Setting</h3>
                    <p className="text-gray-300 text-sm">Define short & long-term financial goals</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center text-white font-bold mx-auto mb-3">3</div>
                    <h3 className="font-bold text-white mb-1">Strategy</h3>
                    <p className="text-gray-300 text-sm">Create personalized financial plan</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center text-white font-bold mx-auto mb-3">4</div>
                    <h3 className="font-bold text-white mb-1">Monitoring</h3>
                    <p className="text-gray-300 text-sm">Regular review & adjustments</p>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white/5 backdrop-blur-md rounded-xl border border-blue-500/30 p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Why Choose AKOS for Financial Planning?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-white mb-1">Certified Financial Experts</h3>
                      <p className="text-gray-300 text-sm">Experienced CAs and financial advisors</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-white mb-1">Personalized Approach</h3>
                      <p className="text-gray-300 text-sm">Plans tailored to your unique needs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-white mb-1">Holistic Planning</h3>
                      <p className="text-gray-300 text-sm">Covering all aspects of financial health</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-white mb-1">Ongoing Support</h3>
                      <p className="text-gray-300 text-sm">Continuous monitoring and guidance</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar - Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <ServiceConsultationForm
                  serviceName="Financial Planning Services"
                  serviceCategory="CA Services"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary/20 to-blue-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <TrendingUp className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">
            Start Your Financial Planning Journey Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Take control of your finances with expert guidance
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-blue-500 text-white font-bold rounded-lg hover:from-blue-500 hover:to-primary transition-all shadow-lg shadow-primary/50"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href="/ca-services"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-all"
            >
              View All CA Services
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
