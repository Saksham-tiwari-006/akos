import Link from 'next/link';
import { 
  Building, Users, Award, Target, Shield, Clock, MapPin, Mail, Phone,
  CheckCircle, TrendingUp, Briefcase, FileText, Scale, BarChart3,
  Globe, Zap
} from 'lucide-react';

export default function AboutPage() {
  const services = [
    {
      icon: Building,
      title: 'Business Registrations',
      description: 'Company, LLP, OPC, Partnership, GST, Startup India, MSME, IEC, and more',
      href: '/registrations/company'
    },
    {
      icon: FileText,
      title: 'Taxation Services',
      description: 'Income Tax, GST Returns, TDS Filing, Tax Planning & Advisory',
      href: '/taxation'
    },
    {
      icon: Shield,
      title: 'IPR Services',
      description: 'Trademark, Copyright, Patent, Design Registration & Protection',
      href: '/ipr'
    },
    {
      icon: BarChart3,
      title: 'CA Services',
      description: 'Bookkeeping, Accounting, Virtual CFO, Audit & Financial Planning',
      href: '/ca-services'
    },
    {
      icon: Scale,
      title: 'Compliance',
      description: 'Annual ROC Filing, Company Changes, Statutory Compliance',
      href: '/compliance'
    },
    {
      icon: Globe,
      title: 'Legal & Environmental',
      description: 'Legal Agreements, Environmental Clearances, EPR Registration',
      href: '/environmental/epr-registration'
    },
  ];

  const whyChooseUs = [
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Qualified CAs, CSs, and legal professionals with years of experience'
    },
    {
      icon: Target,
      title: 'Personalized Service',
      description: 'Tailored solutions to meet your unique business requirements'
    },
    {
      icon: Clock,
      title: 'Quick Turnaround',
      description: 'Fast and efficient processing of all registrations and filings'
    },
    {
      icon: Shield,
      title: '100% Compliance',
      description: 'Ensuring your business meets all regulatory requirements'
    },
    {
      icon: Zap,
      title: 'End-to-End Support',
      description: 'Complete assistance from start to finish with dedicated support'
    },
    {
      icon: Award,
      title: 'Trusted by 5000+',
      description: 'Businesses across India trust us for their financial needs'
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-6">
              <Building className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">About Us</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
              AKOS Accounting And Tax Consultant
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Your trusted partner for all taxation, accounting, registration, and compliance services. 
              We help businesses grow by handling their financial complexities.
            </p>
          </div>

          {/* Company Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-blue-500/30 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Om Prakash Jha</h3>
              <p className="text-primary font-semibold">Proprietor</p>
              <p className="text-gray-400 mt-2">Leading AKOS with expertise and dedication</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-blue-500/30 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mx-auto mb-4">
                <Building className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Proprietorship</h3>
              <p className="text-green-400 font-semibold">Business Type</p>
              <p className="text-gray-400 mt-2">Registered and compliant business entity</p>
            </div>

            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-blue-500/30 text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">5000+</h3>
              <p className="text-purple-400 font-semibold">Happy Clients</p>
              <p className="text-gray-400 mt-2">Businesses trust us across India</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive range of business, taxation, legal, and compliance services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group bg-white/5 backdrop-blur-md rounded-xl p-8 border border-blue-500/30 hover:bg-white/10 transition-all hover:scale-105"
              >
                <service.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-blue-500 text-white font-bold rounded-lg hover:from-blue-500 hover:to-primary transition-all shadow-lg shadow-primary/50"
            >
              View All Services
              <Briefcase className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Why Choose AKOS?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are dedicated to providing top-tier financial services with a focus on reliability and client success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-md rounded-xl p-8 border border-blue-500/30 hover:bg-white/10 transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Office Location Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Our Office</h2>
              <p className="text-xl text-gray-300 mb-8">
                Visit us at our office in Shakarpur, New Delhi. We're here to help you with all your 
                taxation and accounting needs.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Address</h3>
                    <p className="text-gray-400">
                      Office No 202, Second Floor,<br />
                      Rohini Complex, Prop No WA-107 & WA-121,<br />
                      Shakarpur, New Delhi,<br />
                      East Delhi, Delhi - 110092
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                    <a href="mailto:akos170620250626@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
                      akos170620250626@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Phone</h3>
                    <a href="tel:+919211901927" className="text-gray-400 hover:text-primary transition-colors">
                      +91 92119 01927
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1">Working Hours</h3>
                    <p className="text-gray-400">Monday - Saturday: 10:00 AM - 7:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map or Image placeholder */}
            <div className="bg-gradient-to-br from-blue-500/20 to-primary/20 rounded-2xl p-8 border border-blue-500/30 h-[400px] flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Shakarpur, New Delhi</h3>
                <p className="text-gray-400">East Delhi, Delhi - 110092</p>
                <a 
                  href="https://maps.google.com/?q=Shakarpur,New+Delhi,110092" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 text-primary hover:underline"
                >
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today for a free consultation. Let our experts help you with all your 
            taxation, accounting, and compliance needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-gradient-to-r from-primary to-blue-500 text-white text-lg font-bold rounded-lg hover:from-blue-500 hover:to-primary transition-all shadow-lg shadow-primary/50"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
