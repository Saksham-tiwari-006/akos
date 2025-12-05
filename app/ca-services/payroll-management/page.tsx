'use client';

import { Users, Calculator, FileText, Shield, CheckCircle, Calendar, Clock, DollarSign, ClipboardCheck, Building, ArrowRight, BarChart3, Briefcase } from 'lucide-react';
import ServiceConsultationForm from '@/app/components/ServiceConsultationForm';
import Link from 'next/link';

export default function PayrollManagementPage() {
  const components = [
    {
      title: 'Employee data management',
      description: 'Maintaining records such as employee names, roles, attendance, leaves, salary structure, and joining dates.',
      icon: <Users className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Salary calculation',
      description: 'Computing gross salary, allowances, overtime, and incentives. Calculating deductions such as PF, ESI, TDS, and professional tax to arrive at net salary.',
      icon: <Calculator className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Statutory compliance',
      description: 'Ensuring compliance with legal requirements like Provident Fund (PF), Employee State Insurance (ESI), Income Tax, Labor Welfare Fund, Gratuity, and other state-level laws.',
      icon: <Shield className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Attendance and leave tracking',
      description: 'Integrating attendance records with payroll to calculate accurate working days, leaves taken, and overtime.',
      icon: <Calendar className="w-8 h-8 text-yellow-400" />
    },
    {
      title: 'Payslip generation',
      description: 'Preparing and issuing payslips each month that show salary breakup, deductions, and net pay.',
      icon: <FileText className="w-8 h-8 text-red-400" />
    },
    {
      title: 'Payroll taxes',
      description: 'Calculating and depositing monthly and quarterly taxes such as TDS, PF contributions, and ESI contributions.',
      icon: <DollarSign className="w-8 h-8 text-cyan-400" />
    },
    {
      title: 'Record keeping',
      description: 'Maintaining proper payroll reports, employee information, tax filings, and audit trails for future reference.',
      icon: <ClipboardCheck className="w-8 h-8 text-orange-400" />
    },
    {
      title: 'Reimbursement and benefits management',
      description: 'Processing claims like travel reimbursements, medical bills, bonuses, and employee benefits.',
      icon: <Briefcase className="w-8 h-8 text-pink-400" />
    },
    {
      title: 'Coordinating with departments',
      description: 'Working with HR and Finance teams to update employee changes, process new joiners or exits, and maintain accurate data.',
      icon: <Building className="w-8 h-8 text-indigo-400" />
    },
    {
      title: 'Payroll audit and correction',
      description: 'Reviewing payroll regularly to identify errors, mismatches, or compliance issues and correcting them promptly.',
      icon: <BarChart3 className="w-8 h-8 text-teal-400" />
    }
  ];

  const benefits = [
    'Ensures timely and error-free salary payments',
    'Improves employee trust and satisfaction',
    'Avoids penalties due to compliance failures',
    'Saves time through automation and proper systems',
    'Provides accurate payroll reports for budgeting and decision-making'
  ];

  const complianceItems = [
    { title: 'Provident Fund (PF)', description: 'Monthly PF contribution and return filing' },
    { title: 'ESI (Employee State Insurance)', description: 'ESI registration and monthly contributions' },
    { title: 'TDS on Salary', description: 'Tax deduction at source and quarterly returns' },
    { title: 'Professional Tax', description: 'State-wise professional tax compliance' },
    { title: 'Labor Welfare Fund', description: 'LWF contributions as per state rules' },
    { title: 'Gratuity', description: 'Gratuity calculation and compliance' }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-6">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">CA Services</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              Payroll Management Services
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Payroll management refers to the process of handling all tasks related to paying employees accurately and on time. It includes calculating salaries, deductions, taxes, and ensuring compliance with labor laws. Proper payroll management helps maintain employee satisfaction and avoids legal issues.
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
              {/* Key Components */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Calculator className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Key Components of Payroll Management</h2>
                </div>
                <div className="space-y-6">
                  {components.map((component, index) => (
                    <div
                      key={index}
                      className="bg-white/5 backdrop-blur-md rounded-xl border border-blue-500/30 p-6 hover:bg-white/10 transition-all"
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex-shrink-0 w-14 h-14 rounded-lg bg-white/10 flex items-center justify-center">
                          {component.icon}
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">{index + 1}. {component.title}</h3>
                          <p className="text-gray-300 leading-relaxed">{component.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Statutory Compliance */}
              <div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Statutory Compliance We Handle</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {complianceItems.map((item, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-md rounded-xl border border-green-500/30 p-6 hover:bg-white/10 transition-all">
                      <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300 text-sm">{item.description}</p>
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
                  <h2 className="text-3xl font-bold text-white">Benefits of Proper Payroll Management</h2>
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

              {/* Process Flow */}
              <div className="bg-white/5 backdrop-blur-md rounded-xl border border-blue-500/30 p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Our Payroll Process</h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center text-white font-bold mx-auto mb-3">1</div>
                    <h3 className="font-bold text-white mb-1">Data Collection</h3>
                    <p className="text-gray-300 text-sm">Gather attendance & employee data</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center text-white font-bold mx-auto mb-3">2</div>
                    <h3 className="font-bold text-white mb-1">Processing</h3>
                    <p className="text-gray-300 text-sm">Calculate salary & deductions</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center text-white font-bold mx-auto mb-3">3</div>
                    <h3 className="font-bold text-white mb-1">Compliance</h3>
                    <p className="text-gray-300 text-sm">File returns & deposit taxes</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center text-white font-bold mx-auto mb-3">4</div>
                    <h3 className="font-bold text-white mb-1">Reporting</h3>
                    <p className="text-gray-300 text-sm">Generate payslips & reports</p>
                  </div>
                </div>
              </div>

              {/* Why Choose Us */}
              <div className="bg-white/5 backdrop-blur-md rounded-xl border border-blue-500/30 p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Why Choose AKOS for Payroll Management?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-white mb-1">Error-Free Processing</h3>
                      <p className="text-gray-300 text-sm">Accurate salary calculations every time</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-white mb-1">On-Time Delivery</h3>
                      <p className="text-gray-300 text-sm">Payroll processed by committed dates</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-white mb-1">Complete Compliance</h3>
                      <p className="text-gray-300 text-sm">All statutory requirements handled</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-bold text-white mb-1">Dedicated Support</h3>
                      <p className="text-gray-300 text-sm">Expert team for all payroll queries</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Sidebar - Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-32">
                <ServiceConsultationForm
                  serviceName="Payroll Management Services"
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
          <Users className="w-16 h-16 text-primary mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-white mb-6">
            Simplify Your Payroll Management
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let us handle your payroll while you focus on growing your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-blue-500 text-white font-bold rounded-lg hover:from-blue-500 hover:to-primary transition-all shadow-lg shadow-primary/50"
            >
              Get Started
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
