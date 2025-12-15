import Link from 'next/link';
import { MapPin, Mail, Phone, Building, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 text-white border-t border-blue-500/30">
      <div className="max-w-8xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <svg className="h-10 w-10 text-primary" fill="currentColor" viewBox="0 0 48 48">
                <path d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z" />
                <path fillRule="evenodd" d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z" />
              </svg>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">AKOS</span>
            </div>
            <p className="text-lg font-semibold text-primary mb-2">AKOS Accounting And Tax Consultant</p>
            <p className="text-sm text-gray-400 mb-4">Proprietor: Om Prakash Jha</p>
            <p className="text-sm text-gray-300 leading-relaxed">
              Your trusted partner for all taxation, accounting, registration, and compliance services across India.
            </p>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li><Link href="/registrations/company" className="text-sm text-gray-300 hover:text-primary transition-colors">Company Registration</Link></li>
              <li><Link href="/registrations/llp" className="text-sm text-gray-300 hover:text-primary transition-colors">LLP Registration</Link></li>
              <li><Link href="/registrations/gst" className="text-sm text-gray-300 hover:text-primary transition-colors">GST Registration</Link></li>
              <li><Link href="/registrations/trademark" className="text-sm text-gray-300 hover:text-primary transition-colors">Trademark Registration</Link></li>
              <li><Link href="/taxation/income-tax-return" className="text-sm text-gray-300 hover:text-primary transition-colors">Income Tax Return</Link></li>
              <li><Link href="/taxation/gst-return-filing" className="text-sm text-gray-300 hover:text-primary transition-colors">GST Return Filing</Link></li>
              <li><Link href="/ca-services" className="text-sm text-gray-300 hover:text-primary transition-colors">CA Services</Link></li>
              <li><Link href="/compliance" className="text-sm text-gray-300 hover:text-primary transition-colors">Annual Compliance</Link></li>
              <li><Link href="/ipr/copyright" className="text-sm text-gray-300 hover:text-primary transition-colors">Copyright & Patent</Link></li>
              <li><Link href="/environmental/epr-registration" className="text-sm text-gray-300 hover:text-primary transition-colors">Environmental Services</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-sm text-gray-300 hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/services" className="text-sm text-gray-300 hover:text-primary transition-colors">All Services</Link></li>
              <li><Link href="/about" className="text-sm text-gray-300 hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="text-sm text-gray-300 hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="/registrations/startup-india" className="text-sm text-gray-300 hover:text-primary transition-colors">Startup India</Link></li>
              <li><Link href="/ca-services/bookkeeping-accounting" className="text-sm text-gray-300 hover:text-primary transition-colors">Bookkeeping</Link></li>
              <li><Link href="/taxation/tax-planning" className="text-sm text-gray-300 hover:text-primary transition-colors">Tax Planning</Link></li>
              <li><Link href="/tools/nic-code" className="text-sm text-gray-300 hover:text-primary transition-colors">NIC Code Search</Link></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-300">
                  Office No 202, Second Floor,<br />
                  Rohini Complex, Prop No WA-107 & WA-121,<br />
                  Shakarpur, New Delhi,<br />
                  East Delhi, Delhi - 110092
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:akos170620250626@gmail.com" className="text-sm text-gray-300 hover:text-primary transition-colors">
                  akos170620250626@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+919211901927" className="text-sm text-gray-300 hover:text-primary transition-colors">
                  +91 92119 01927
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-sm text-gray-300">Mon - Sat: 10:00 AM - 7:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-blue-500/30">
          <div className="flex justify-center items-center">
            <p className="text-sm text-gray-400">© 2025 AKOS Accounting And Tax Consultant. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
