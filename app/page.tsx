'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield, Users, DollarSign, FileText, Building, Award, TrendingUp, Clock, CheckCircle, Zap, Target, BarChart3, BookOpen, Briefcase, Scale, Rocket, Globe } from 'lucide-react';
import StarRating from './components/StarRating';
import FileUpload from './components/FileUpload';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      <HeroSection />
      <StatsSection />
      <ServicesOverview />
      <WhyChooseAKOS />
      <PopularServices />
      <HowItWorks />
      <ReviewsSection />
      <ConsultationSection />
      <CTASection />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full w-fit mx-auto lg:mx-0">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">India's Trusted Financial Partner</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              Expert <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">Taxation</span> & 
              <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent"> Accounting</span> Services
            </h1>
            
            <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
              We help startups, SMEs, and enterprises maximize returns, ensure compliance, and achieve financial success with our professional and personalized services.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-4">
              <Link
                href="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-primary to-blue-500 text-white text-lg font-bold rounded-lg hover:from-blue-500 hover:to-primary transition-all transform hover:scale-105 shadow-lg shadow-primary/50 flex items-center justify-center gap-2"
              >
                Get Started Free
                <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/#consultation"
                className="px-8 py-4 border-2 border-primary/50 text-white text-lg font-bold rounded-lg hover:bg-primary/10 backdrop-blur-sm transition-all flex items-center justify-center gap-2"
              >
                <FileText className="w-5 h-5" />
                View Services
              </Link>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 mt-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm">100% Secure</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm">Expert CAs</span>
              </div>
              <div className="flex items-center gap-2 text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span className="text-sm">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right side - Visual elements */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-500/20 to-primary/20 rounded-2xl p-8 backdrop-blur-sm border border-blue-500/30">
              <div className="grid grid-cols-2 gap-4">
                {/* Feature cards */}
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-blue-500/30 hover:scale-105 transition-transform">
                  <Building className="w-12 h-12 text-primary mb-3" />
                  <h3 className="text-white font-bold text-lg mb-2">Company Registration</h3>
                  <p className="text-gray-300 text-sm">Quick & hassle-free incorporation</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-blue-500/30 hover:scale-105 transition-transform">
                  <FileText className="w-12 h-12 text-green-400 mb-3" />
                  <h3 className="text-white font-bold text-lg mb-2">GST Filing</h3>
                  <p className="text-gray-300 text-sm">Accurate & timely returns</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-blue-500/30 hover:scale-105 transition-transform">
                  <BarChart3 className="w-12 h-12 text-yellow-400 mb-3" />
                  <h3 className="text-white font-bold text-lg mb-2">Tax Planning</h3>
                  <p className="text-gray-300 text-sm">Optimize your tax savings</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-blue-500/30 hover:scale-105 transition-transform">
                  <Scale className="w-12 h-12 text-purple-400 mb-3" />
                  <h3 className="text-white font-bold text-lg mb-2">Legal Services</h3>
                  <p className="text-gray-300 text-sm">Complete legal compliance</p>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-6 -right-6 bg-gradient-to-br from-primary to-blue-500 rounded-2xl p-4 shadow-2xl shadow-primary/50 animate-bounce">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl p-4 shadow-2xl shadow-green-500/50 animate-pulse">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatsSection() {
  const stats = [
    { icon: Users, value: '100+', label: 'Happy Clients', color: 'text-blue-400' },
    { icon: FileText, value: '500+', label: 'Projects Completed', color: 'text-green-400' },
    { icon: Award, value: '98%', label: 'Success Rate', color: 'text-yellow-400' },
    { icon: Clock, value: '24/7', label: 'Support Available', color: 'text-purple-400' },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-md rounded-xl p-6 border border-blue-500/30 hover:bg-white/10 transition-all hover:scale-105 text-center"
            >
              <stat.icon className={`w-10 h-10 ${stat.color} mx-auto mb-3`} />
              <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-sm text-gray-300">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesOverview() {
  const serviceHighlights = [
    {
      icon: Building,
      title: 'Business Registration',
      description: 'Complete assistance for company, LLP, partnership, and sole proprietorship registration with MCA and ROC.',
      features: ['Private Limited Company', 'LLP Registration', 'Partnership Firm', 'GST Registration'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FileText,
      title: 'Tax & Compliance',
      description: 'Expert tax filing, GST returns, TDS, and complete compliance management for your business.',
      features: ['Income Tax Returns', 'GST Filing', 'TDS Returns', 'Annual Compliance'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: BarChart3,
      title: 'Accounting Services',
      description: 'Professional bookkeeping, financial planning, payroll management, and virtual CFO services.',
      features: ['Bookkeeping', 'Financial Planning', 'Payroll Management', 'Virtual CFO'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Scale,
      title: 'Legal & IPR',
      description: 'Trademark registration, legal agreements, contracts, and complete intellectual property protection.',
      features: ['Trademark Registration', 'Legal Agreements', 'Patent Filing', 'Copyright'],
      color: 'from-orange-500 to-red-500',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Comprehensive Business Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From startup to scale-up, we provide end-to-end services to keep your business compliant and growing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {serviceHighlights.map((service, index) => (
            <div
              key={index}
              className="group bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-blue-500/30 hover:bg-white/10 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/30"
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-300 mb-6">{service.description}</p>
              
              <div className="space-y-2">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 mt-6 text-primary font-semibold hover:gap-3 transition-all"
              >
                Learn More
                <Rocket className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseAKOS() {
  const features = [
    {
      icon: Shield,
      title: 'Certified Experts',
      description: 'Our team consists of certified CAs, CSs, and legal professionals with 10+ years of industry experience.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Target,
      title: 'Personalized Service',
      description: 'We tailor our services to meet the unique needs of each client, ensuring optimal results.',
      gradient: 'from-green-500 to-emerald-500',
    },
    {
      icon: DollarSign,
      title: 'Affordable Solutions',
      description: 'No hidden fees. We believe in providing value-driven services with detailed quotes tailored to your needs.',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Quick processing and timely delivery of all services with dedicated support throughout.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Globe,
      title: 'Pan-India Service',
      description: 'We serve clients across India with both online and offline consultation options.',
      gradient: 'from-yellow-500 to-amber-500',
    },
    {
      icon: Briefcase,
      title: 'End-to-End Solutions',
      description: 'From registration to compliance, we handle everything so you can focus on your business.',
      gradient: 'from-indigo-500 to-purple-500',
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-6">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Why Choose Us</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Your Trusted Financial Partner
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are dedicated to providing top-tier financial services with a focus on reliability, expertise, and client success
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-md rounded-2xl border border-blue-500/30 p-8 hover:bg-white/10 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity`}></div>
              
              <div className="relative">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <feature.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PopularServices() {
  const serviceCategories = [
    {
      category: 'Business Registrations',
      icon: '🏢',
      description: 'Complete company incorporation and registration services',
      services: [
        { title: 'Private Limited Company', href: '/registrations/company' },
        { title: 'LLP Registration', href: '/registrations/llp' },
        { title: 'OPC Registration', href: '/registrations/company' },
        { title: 'Partnership Firm', href: '/registrations/company' },
        { title: 'GST Registration', href: '/registrations/gst' },
        { title: 'Startup India Registration', href: '/registrations/startup-india' },
        { title: 'MSME/Udyam Registration', href: '/registrations/startup-india' },
        { title: 'Import Export Code (IEC)', href: '/registrations/company' },
      ],
    },
    {
      category: 'Tax & Compliance',
      icon: '💰',
      description: 'Expert tax filing and compliance management services',
      services: [
        { title: 'Income Tax Return Filing', href: '/taxation/income-tax-return' },
        { title: 'GST Return Filing', href: '/taxation/gst-return-filing' },
        { title: 'TDS Return Filing', href: '/taxation/tds-return' },
        { title: 'Annual ROC Filing', href: '/compliance' },
        { title: 'Tax Planning', href: '/taxation/tax-planning' },
        { title: 'GST E-Invoice', href: '/taxation/gst-einvoice' },
        { title: 'E-Way Bill Registration', href: '/taxation/eway-bill' },
        { title: 'Input Tax Credit', href: '/taxation/input-tax-credit' },
      ],
    },
    {
      category: 'Intellectual Property',
      icon: '©️',
      description: 'Protect your brand and innovations with IPR services',
      services: [
        { title: 'Trademark Registration', href: '/registrations/trademark' },
        { title: 'Trademark Renewal', href: '/ipr/trademark-renewal' },
        { title: 'Copyright Registration', href: '/ipr/copyright-registration' },
        { title: 'Patent Registration', href: '/ipr/patent-registration' },
        { title: 'Design Registration', href: '/ipr/design-registration' },
        { title: 'Trademark Opposition', href: '/ipr/trademark-opposition' },
        { title: 'International Trademark', href: '/ipr/international-trademark' },
        { title: 'IP Dispute', href: '/ipr/ip-dispute-resolution' },
      ],
    },
    {
      category: 'Accounting Services',
      icon: '📊',
      description: 'Professional accounting and financial management',
      services: [
        { title: 'Bookkeeping & Accounting', href: '/ca-services' },
        { title: 'Virtual CFO Services', href: '/ca-services' },
        { title: 'Audit & Assurance', href: '/ca-services' },
        { title: 'Payroll Management', href: '/ca-services' },
        { title: 'Financial Planning', href: '/ca-services' },
      ],
    },
    {
      category: 'Legal & Agreements',
      icon: '📄',
      description: 'Legal documentation and contract services',
      services: [
        { title: 'Partnership Agreement', href: '/agreements/partnership' },
        { title: 'NDA', href: '/agreements/nda' },
        { title: 'MOU', href: '/agreements/mou' },
        { title: 'Shareholder Agreement', href: '/agreements/shareholder' },
        { title: 'Founders Agreement', href: '/agreements/founders' },
        { title: 'Legal Notice', href: '/regulatory/legal-notice' },
      ],
    },
    {
      category: 'Environmental',
      icon: '🌿',
      description: 'Environmental clearances and compliance',
      services: [
        { title: 'EPR Registration', href: '/environmental/epr-registration' },
        { title: 'Environmental Impact Assessment', href: '/environmental/eia' },
        { title: 'Consent to Establish', href: '/environmental/consent-to-establish' },
        { title: 'Fire Department NOC', href: '/environmental/fire-noc' },
      ],
    },
  ];

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-6">
            <Briefcase className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Our Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Popular Services
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive range of services across different categories
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group bg-white/5 backdrop-blur-md rounded-2xl border border-blue-500/30 p-8 hover:bg-white/10 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <span className="text-5xl group-hover:scale-110 transition-transform">{category.icon}</span>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{category.category}</h3>
                  <p className="text-sm text-gray-400">{category.description}</p>
                </div>
              </div>
              
              <div className="space-y-2 flex-grow mt-4">
                {category.services.map((service, serviceIndex) => (
                  <Link
                    key={serviceIndex}
                    href={service.href}
                    className="group/item flex items-center gap-2 text-sm text-gray-300 hover:text-primary hover:bg-white/10 transition-all p-3 rounded-lg font-medium"
                  >
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="group-hover/item:translate-x-1 transition-transform">{service.title}</span>
                  </Link>
                ))}
              </div>

              <Link
                href="/services"
                className="mt-6 px-6 py-3 bg-gradient-to-r from-primary/20 to-blue-500/20 border border-primary/30 text-primary text-center font-semibold rounded-lg hover:from-primary hover:to-blue-500 hover:text-white transition-all"
              >
                View All Services
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Share Your Requirements',
      description: 'Fill out our simple consultation form or call us directly to discuss your business needs.',
      icon: FileText,
    },
    {
      number: '02',
      title: 'Get Expert Consultation',
      description: 'Our certified experts will analyze your requirements and provide the best solution for your business.',
      icon: Users,
    },
    {
      number: '03',
      title: 'Document Submission',
      description: 'Upload required documents through our secure portal or email them to our dedicated team.',
      icon: BookOpen,
    },
    {
      number: '04',
      title: 'We Handle Everything',
      description: 'Sit back while we process your application, file returns, and ensure 100% compliance.',
      icon: Rocket,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get started in 4 simple steps - it's quick, easy, and hassle-free
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-primary via-blue-500 to-primary opacity-20"></div>

          {steps.map((step, index) => (
            <div
              key={index}
              className="relative bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-blue-500/30 hover:bg-white/10 transition-all hover:scale-105 text-center group"
            >
              {/* Step number */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-primary/50 group-hover:scale-110 transition-transform">
                {step.number}
              </div>

              <div className="mt-8 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/20 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  <step.icon className="w-8 h-8 text-primary" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-blue-500 text-white text-lg font-bold rounded-lg hover:from-blue-500 hover:to-primary transition-all transform hover:scale-105 shadow-lg shadow-primary/50"
          >
            Start Your Journey
            <Rocket className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ReviewsSection() {
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ name: '', rating: 0, message: '' });
  const [submitStatus, setSubmitStatus] = useState('');

  useEffect(() => {
    fetchReviews();
  }, []);

  const fetchReviews = async () => {
    try {
      const response = await fetch('/api/reviews?limit=100');
      const result = await response.json();
      
      if (result.success && result.data) {
        // Check if data has pagination structure
        const reviewsData = result.data.data || result.data;
        if (Array.isArray(reviewsData)) {
          setReviews(reviewsData);
        } else {
          console.error('Reviews data is not an array:', result.data);
          setReviews([]);
        }
      }
    } catch (error) {
      console.error('Error fetching reviews:', error);
      setReviews([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.rating || !formData.message) {
      setSubmitStatus('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch('/api/reviews', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setFormData({ name: '', rating: 0, message: '' });
        setSubmitStatus('Review submitted successfully! It will be visible after approval.');
        setTimeout(() => setSubmitStatus(''), 5000);
      } else {
        setSubmitStatus('Failed to submit review');
      }
    } catch (error) {
      setSubmitStatus('Error submitting review');
    }
  };

  return (
    <section className="py-20 sm:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full mb-6">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Client Testimonials</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We value our clients' feedback. Here are some of the experiences they've shared
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {loading ? (
            <div className="col-span-3 text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
              <p className="text-gray-300 mt-4">Loading reviews...</p>
            </div>
          ) : reviews.length === 0 ? (
            <div className="col-span-3 text-center py-12">
              <p className="text-gray-300">No reviews yet. Be the first to share your experience!</p>
            </div>
          ) : (
            reviews.map((review, index) => (
              <div
                key={review._id || index}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-blue-500/30 hover:bg-white/10 hover:shadow-2xl hover:shadow-primary/30 transition-all hover:scale-105"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    alt={review.name}
                    className="w-16 h-16 rounded-full border-2 border-primary shadow-lg object-cover"
                    src={review.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${review.name}`}
                  />
                  <div>
                    <p className="font-bold text-white text-lg">{review.name}</p>
                    {review.service && <p className="text-sm text-gray-400">{review.service}</p>}
                    <StarRating rating={review.rating} readonly />
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">{review.message}</p>
                
                <div className="mt-6 pt-6 border-t border-blue-500/30">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <CheckCircle className="w-4 h-4 text-green-400" />
                    <span>{review.isVerified ? 'Verified Customer' : 'Customer Review'}</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-md shadow-2xl rounded-2xl border border-blue-500/30 p-8">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Share Your Experience</h3>
          <form onSubmit={handleSubmitReview} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-200" htmlFor="review-name">
                Your Name
              </label>
              <input
                className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-blue-500/30 text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary transition-all"
                id="review-name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. John Doe"
                type="text"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-200" htmlFor="rating">
                Rating
              </label>
              <StarRating rating={formData.rating} setRating={(rating) => setFormData({ ...formData, rating })} />
            </div>
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-200" htmlFor="review-message">
                Your Review
              </label>
              <textarea
                className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-blue-500/30 text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary transition-all"
                id="review-message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Share your experience with us..."
                rows={4}
              />
            </div>
            <button
              className="w-full py-4 px-6 bg-gradient-to-r from-primary to-blue-500 text-white font-bold rounded-lg hover:from-blue-500 hover:to-primary transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 transform hover:scale-105"
              type="submit"
            >
              Submit Review
            </button>
            {submitStatus && (
              <p className={`text-sm text-center ${submitStatus.includes('success') ? 'text-green-400' : 'text-red-400'}`}>
                {submitStatus}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}

function ConsultationSection() {
  const [formData, setFormData] = useState({
    service: '',
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    message: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });
    if (file) {
      formDataToSend.append('file', file);
    }

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        body: formDataToSend,
      });

      if (response.ok) {
        setSubmitStatus('Consultation request submitted successfully!');
        setFormData({ service: '', name: '', email: '', phone: '', date: '', time: '', message: '' });
        setFile(null);
        setTimeout(() => setSubmitStatus(''), 3000);
      } else {
        setSubmitStatus('Failed to submit request');
      }
    } catch (error) {
      setSubmitStatus('Error submitting request');
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-white/5" id="consultation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/20 border border-primary/30 rounded-full w-fit">
              <FileText className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Free Consultation</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Schedule Your Free Consultation
            </h2>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              Take the first step towards financial clarity. Fill out the form, and one of our expert consultants will get back to you within 24 hours.
            </p>
            
            <div className="grid grid-cols-1 gap-6 mt-4">
              <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-6 hover:scale-105 transition-transform">
                <FileText className="w-10 h-10 text-green-400 mb-3" />
                <p className="text-3xl font-bold text-white">500+</p>
                <p className="text-sm text-gray-300 mt-1">Projects Done</p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span>100% confidential consultation</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span>Expert CA/CS assigned to your case</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span>Detailed cost breakdown provided</span>
              </div>
            </div>
          </div>

          <div className="w-full p-8 bg-white/5 backdrop-blur-md shadow-2xl rounded-2xl border border-blue-500/30">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-200" htmlFor="service">
                  Service Required *
                </label>
                <select
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-blue-500/30 text-white focus:border-primary focus:ring-2 focus:ring-primary transition-all"
                  id="service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="Company Registration">Company Registration</option>
                  <option value="GST Registration">GST Registration</option>
                  <option value="Income Tax Filing">Income Tax Filing</option>
                  <option value="Trademark Registration">Trademark Registration</option>
                  <option value="Accounting Services">Accounting Services</option>
                  <option value="Legal Services">Legal Services</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-200" htmlFor="name">
                  Full Name *
                </label>
                <input
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-blue-500/30 text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary transition-all"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your full name"
                  type="text"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-200" htmlFor="email">
                    Email *
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-blue-500/30 text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary transition-all"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your@email.com"
                    type="email"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-200" htmlFor="phone">
                    Phone *
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-blue-500/30 text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary transition-all"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 1234567890"
                    type="tel"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-200" htmlFor="date">
                    Preferred Date
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-blue-500/30 text-white focus:border-primary focus:ring-2 focus:ring-primary transition-all"
                    id="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    type="date"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-gray-200" htmlFor="time">
                    Preferred Time
                  </label>
                  <input
                    className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-blue-500/30 text-white focus:border-primary focus:ring-2 focus:ring-primary transition-all"
                    id="time"
                    value={formData.time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                    type="time"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-200" htmlFor="message">
                  Your Message
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg bg-slate-900/50 border border-blue-500/30 text-white placeholder-gray-400 focus:border-primary focus:ring-2 focus:ring-primary transition-all"
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your requirements..."
                  rows={3}
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold mb-2 text-gray-200">Upload Documents (optional)</label>
                <FileUpload onFileSelect={setFile} />
              </div>
              
              <button
                className="w-full py-4 px-6 bg-gradient-to-r from-primary to-blue-500 text-white font-bold rounded-lg hover:from-blue-500 hover:to-primary transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50 transform hover:scale-105"
                type="submit"
              >
                Submit Request
              </button>
              
              {submitStatus && (
                <p className={`text-sm text-center ${submitStatus.includes('success') ? 'text-green-400' : 'text-red-400'}`}>
                  {submitStatus}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 sm:py-28 bg-gradient-to-br from-primary via-blue-600 to-blue-500 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center px-4 relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 border border-white/30 rounded-full mb-6">
          <Rocket className="w-4 h-4 text-white" />
          <span className="text-sm font-semibold text-white">Get Started Today</span>
        </div>

        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
          Ready to Simplify Your Finances?
        </h2>
        
        <p className="text-xl text-white/90 mb-10 max-w-3xl mx-auto leading-relaxed">
          Let our certified experts handle the complexities of tax, accounting, and compliance so you can focus on what you do best - growing your business.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
          <Link
            href="/contact"
            className="group px-8 py-4 bg-white text-blue-600 text-lg font-bold rounded-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl flex items-center gap-2"
          >
            Contact Us Now
            <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/services"
            className="px-8 py-4 bg-slate-900 text-white text-lg font-bold rounded-lg hover:bg-slate-800 transition-all transform hover:scale-105 shadow-2xl border-2 border-white/30"
          >
            View Services
          </Link>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 text-white/90">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-white" />
            <span className="font-medium">No Hidden Charges</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-white" />
            <span className="font-medium">24/7 Support</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-6 h-6 text-white" />
            <span className="font-medium">100% Secure</span>
          </div>
        </div>
      </div>
    </section>
  );
}
