'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ChevronDown, Menu, X, User } from 'lucide-react';
import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Always call useUser hook (required by React Hooks rules)
  const { isSignedIn } = useUser();

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 backdrop-blur-md shadow-lg border-b border-blue-500/30">
      <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center gap-3 text-white hover:text-primary transition-colors flex-shrink-0 z-10">
            <svg className="h-10 w-10 text-primary drop-shadow-lg" fill="currentColor" viewBox="0 0 48 48">
              <path d="M39.5563 34.1455V13.8546C39.5563 15.708 36.8773 17.3437 32.7927 18.3189C30.2914 18.916 27.263 19.2655 24 19.2655C20.737 19.2655 17.7086 18.916 15.2073 18.3189C11.1227 17.3437 8.44365 15.708 8.44365 13.8546V34.1455C8.44365 35.9988 11.1227 37.6346 15.2073 38.6098C17.7086 39.2069 20.737 39.5564 24 39.5564C27.263 39.5564 30.2914 39.2069 32.7927 38.6098C36.8773 37.6346 39.5563 35.9988 39.5563 34.1455Z" />
              <path fillRule="evenodd" d="M10.4485 13.8519C10.4749 13.9271 10.6203 14.246 11.379 14.7361C12.298 15.3298 13.7492 15.9145 15.6717 16.3735C18.0007 16.9296 20.8712 17.2655 24 17.2655C27.1288 17.2655 29.9993 16.9296 32.3283 16.3735C34.2508 15.9145 35.702 15.3298 36.621 14.7361C37.3796 14.246 37.5251 13.9271 37.5515 13.8519C37.5287 13.7876 37.4333 13.5973 37.0635 13.2931C36.5266 12.8516 35.6288 12.3647 34.343 11.9175C31.79 11.0295 28.1333 10.4437 24 10.4437C19.8667 10.4437 16.2099 11.0295 13.657 11.9175C12.3712 12.3647 11.4734 12.8516 10.9365 13.2931C10.5667 13.5973 10.4713 13.7876 10.4485 13.8519ZM37.5563 18.7877C36.3176 19.3925 34.8502 19.8839 33.2571 20.2642C30.5836 20.9025 27.3973 21.2655 24 21.2655C20.6027 21.2655 17.4164 20.9025 14.7429 20.2642C13.1498 19.8839 11.6824 19.3925 10.4436 18.7877V34.1275C10.4515 34.1545 10.5427 34.4867 11.379 35.027C12.298 35.6207 13.7492 36.2054 15.6717 36.6644C18.0007 37.2205 20.8712 37.5564 24 37.5564C27.1288 37.5564 29.9993 37.2205 32.3283 36.6644C34.2508 36.2054 35.702 35.6207 36.621 35.027C37.4573 34.4867 37.5485 34.1546 37.5563 34.1275V18.7877ZM41.5563 13.8546V34.1455C41.5563 36.1078 40.158 37.5042 38.7915 38.3869C37.3498 39.3182 35.4192 40.0389 33.2571 40.5551C30.5836 41.1934 27.3973 41.5564 24 41.5564C20.6027 41.5564 17.4164 41.1934 14.7429 40.5551C12.5808 40.0389 10.6502 39.3182 9.20848 38.3869C7.84205 37.5042 6.44365 36.1078 6.44365 34.1455L6.44365 13.8546C6.44365 12.2684 7.37223 11.0454 8.39581 10.2036C9.43325 9.3505 10.8137 8.67141 12.343 8.13948C15.4203 7.06909 19.5418 6.44366 24 6.44366C28.4582 6.44366 32.5797 7.06909 35.657 8.13948C37.1863 8.67141 38.5667 9.3505 39.6042 10.2036C40.6278 11.0454 41.5563 12.2684 41.5563 13.8546Z" />
            </svg>
            <h2 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">AKOS</h2>
          </Link>

          {/* Services - Center */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center mx-4"
            style={{ maxWidth: 'calc(100% - 500px)' }}>
            <Link href="/" className="text-sm font-semibold text-white hover:text-primary hover:bg-white/10 transition-all px-3 py-2.5 rounded-lg whitespace-nowrap">
              Home
            </Link>
            <DropdownMenu
              title="Registrations"
              items={[
                { label: 'Private Limited Company', href: '/registrations/company' },
                { label: 'LLP Registration', href: '/registrations/llp' },
                { label: 'OPC Registration', href: '/registrations/opc' },
                { label: 'Partnership Firm', href: '/registrations/partnership' },
                { label: 'Sole Proprietorship', href: '/registrations/sole-proprietorship' },
                { label: 'Public Limited Company', href: '/registrations/public-limited' },
                { label: 'Section 8 Company (NGO)', href: '/registrations/section8' },
                { label: 'Producer Company', href: '/registrations/producer' },
                { label: 'Nidhi Company', href: '/registrations/nidhi' },
                { label: 'GST Registration', href: '/registrations/gst' },
                { label: 'Startup India Registration', href: '/registrations/startup-india' },
                { label: 'MSME/Udyam Registration', href: '/registrations/udyam' },
                { label: 'Import Export Code (IEC)', href: '/registrations/iec' },
                { label: 'FSSAI License', href: '/registrations/fssai' },
                { label: 'ISO Certification', href: '/registrations/iso' },
                { label: 'Drug License', href: '/registrations/drug-license' },
                { label: 'Digital Signature (DSC)', href: '/registrations/digital-signature' },
                { label: 'Professional Tax Registration', href: '/registrations/professional-tax' },
                { label: 'Shop Act License', href: '/registrations/shop-act' },
                { label: 'RERA Registration', href: '/registrations/rera' },
              ]}
            />
            <DropdownMenu
              title="Compliance"
              items={[
                { label: 'MSME Registration', href: '/compliance/msme' },
                { label: 'EPF Registration', href: '/compliance/epf' },
                { label: 'Shop & Establishment', href: '/compliance/shop-establishment' },
                { label: 'LLP Annual Compliance', href: '/compliance/llp-annual' },
                { label: 'Private Ltd Annual Compliance', href: '/compliance/pvt-ltd-annual' },
                { label: 'Partnership Firm Compliance', href: '/compliance/partnership-annual' },
                { label: 'NGO Compliance', href: '/compliance/ngo-compliance' },
                { label: 'Society Annual Compliance', href: '/compliance/society-annual' },
                { label: 'Trust Annual Compliance', href: '/compliance/trust-annual' },
                { label: 'Nidhi Company Compliance', href: '/compliance/nidhi-company' },
                { label: 'Annual ROC Filing', href: '/compliance/annual-roc' },
                { label: 'GST Filing', href: '/compliance/gst-filing' },
                { label: 'TDS Filing', href: '/compliance/tds-filing' },
                { label: 'Income Tax Return', href: '/compliance/itr-filing' },
                { label: 'Bookkeeping Services', href: '/compliance/bookkeeping-services' },
                { label: 'Outsource Bookkeeping', href: '/compliance/outsourced-bookkeeping' },
                { label: 'Appointment of Auditor', href: '/compliance/appointment-auditor' },
                { label: 'Change of Auditor', href: '/compliance/change-auditor' },
                { label: 'Form INC-20A', href: '/compliance/inc-20a' },
                { label: 'DIR-3 KYC for Directors', href: '/compliance/dir-3-kyc' },
              ]}
            />
            <DropdownMenu
              title="Company Changes"
              items={[
                { label: 'Change Company Name', href: '/services/change-company-name' },
                { label: 'Change Object Clause', href: '/services/change-object-clause' },
                { label: 'Change Registered Office', href: '/services/change-registered-office' },
                { label: 'Add Director', href: '/services/add-director' },
                { label: 'Remove Director', href: '/services/remove-director' },
                { label: 'Add Designated Partner', href: '/services/add-designated-partner' },
                { label: 'Change in LLP Agreement', href: '/services/change-llp-agreement' },
                { label: 'Increase Authorized Capital', href: '/services/increase-authorized-capital' },
                { label: 'Issue of Shares', href: '/services/issue-of-shares' },
                { label: 'Transfer of Shares', href: '/services/transfer-of-shares' },
                { label: 'Close Private Limited Company', href: '/services/close-private-limited-company' },
                { label: 'Winding Up of Company', href: '/services/winding-up-company' },
                { label: 'Strike off Section 8 Company', href: '/services/strike-off-section-8' },
                { label: 'Revival of Struck Off Company', href: '/services/revival-struck-off-company' },
                { label: 'Convert Partnership to LLP', href: '/services/convert-partnership-to-llp' },
              ]}
            />
            <DropdownMenu
              title="IPR"
              items={[
                { label: 'Trademark Registration', href: '/registrations/trademark' },
                { label: 'Trademark Renewal', href: '/ipr/trademark-renewal' },
                { label: 'Trademark Objection', href: '/ipr/trademark-objection' },
                { label: 'Trademark Opposition', href: '/ipr/trademark-opposition' },
                { label: 'International Trademark Registration', href: '/ipr/international-trademark' },
                { label: 'Trademark Rectification', href: '/ipr/trademark-rectification' },
                { label: 'Trademark Registration for E-commerce', href: '/ipr/ecommerce-trademark' },
                { label: 'Trademark Hearing', href: '/ipr/trademark-hearing' },
                { label: 'Response to Trademark Objection', href: '/ipr/response-to-objection' },
                { label: 'Trademark Infringement', href: '/ipr/trademark-infringement' },
                { label: 'Trademark Assignment', href: '/ipr/trademark-assignment' },
                { label: 'Copyright Registration', href: '/ipr/copyright-registration' },
                { label: 'Patent Registration', href: '/ipr/patent-registration' },
                { label: 'Design Registration', href: '/ipr/design-registration' },
                { label: 'Intellectual Property Dispute', href: '/ipr/ip-dispute-resolution' },
              ]}
            />
            <DropdownMenu
              title="Taxation"
              items={[
                { label: 'Income Tax Return Filing', href: '/taxation/income-tax-return' },
                { label: 'TDS Return Filing', href: '/taxation/tds-return' },
                { label: 'PF Return', href: '/taxation/pf-return' },
                { label: 'ITR 1 Form Filing', href: '/taxation/itr-1' },
                { label: 'ITR 2 Form Filing', href: '/taxation/itr-2' },
                { label: 'ITR 7 Form Filing', href: '/taxation/itr-7' },
                { label: '80-IAC Tax Exemption for Startups', href: '/taxation/80iac-exemption' },
                { label: 'GST Registration', href: '/taxation/gst-registration' },
                { label: 'GST Return Filing', href: '/taxation/gst-return-filing' },
                { label: 'GSTR9 Return', href: '/taxation/gstr9-return' },
                { label: 'Cancel GST Registration', href: '/taxation/cancel-gst-registration' },
                { label: 'Virtual Place of Business in GST', href: '/taxation/virtual-place-gst' },
                { label: 'Additional Place of Business in GST', href: '/taxation/additional-place-gst' },
                { label: 'GST Registration for E-commerce', href: '/taxation/gst-ecommerce' },
                { label: 'GST Return Filing for E-commerce', href: '/taxation/gst-return-ecommerce' },
                { label: 'Input Tax Credit', href: '/taxation/input-tax-credit' },
                { label: 'GST E-Invoice', href: '/taxation/gst-einvoice' },
                { label: 'E-Way Bill Registration', href: '/taxation/eway-bill' },
                { label: 'Tax Planning', href: '/taxation/tax-planning' },
                { label: 'Tax Advisory', href: '/taxation/tax-advisory' },
              ]}
            />
            <DropdownMenu
              title="CA Services"
              items={[
                { label: 'Bookkeeping & Accounting', href: '/ca-services' },
                { label: 'Virtual CFO Services', href: '/ca-services' },
                { label: 'Audit & Assurance', href: '/ca-services' },
                { label: 'Financial Planning', href: '/ca-services' },
                { label: 'Payroll Management', href: '/ca-services' },
              ]}
            />
            <DropdownMenu
              title="Legal & Environmental"
              items={[
                { label: 'Consent to Establish', href: '/environmental/consent-to-establish' },
                { label: 'Environmental Due Diligence', href: '/environmental/due-diligence' },
                { label: 'EPR Registration', href: '/environmental/epr-registration' },
                { label: 'Environmental Auditing', href: '/environmental/auditing' },
                { label: 'Plastic Waste Authorization', href: '/environmental/plastic-waste' },
                { label: 'EPR Authorization for E-Waste', href: '/environmental/epr-ewaste' },
                { label: 'Environmental Impact Assessment', href: '/environmental/eia' },
                { label: 'ROHS Certification', href: '/environmental/rohs' },
                { label: 'Fire Department NOC', href: '/environmental/fire-noc' },
                { label: 'Partnership Agreement', href: '/agreements/partnership' },
                { label: 'MOU', href: '/agreements/mou' },
                { label: 'Joint Venture Agreement', href: '/agreements/joint-venture' },
                { label: 'Franchise Agreement', href: '/agreements/franchise-agreement' },
                { label: 'Shareholders Agreement', href: '/agreements/shareholder-agreement' },
                { label: 'Founders Agreement', href: '/agreements/founders-agreement' },
                { label: 'NDA', href: '/agreements/nda' },
                { label: 'Share Purchase Agreement', href: '/agreements/share-purchase-agreement' },
                { label: 'Service Level Agreement', href: '/agreements/service-level-agreement' },
                { label: 'Legal Heir Certificate', href: '/agreements/legal-heir-certificate' },
                { label: 'Sale Deed', href: '/agreements/sale-deed' },
                { label: 'Gift Deed', href: '/agreements/gift-deed' },
                { label: 'NBFC Registration', href: '/regulatory/nbfc-registration' },
                { label: 'NBFC Compliance', href: '/regulatory/nbfc-compliance' },
                { label: 'Payment Bank', href: '/regulatory/payment-bank' },
                { label: 'Payment Gateway License', href: '/regulatory/payment-gateway-license' },
                { label: 'Legal Notice', href: '/regulatory/legal-notice' },
                { label: 'NIC Code Search', href: '/tools/nic-code' },
                { label: 'Company Name Check', href: '/tools/company-name-check' },
              ]}
            />
          </nav>

          {/* About, Contact Us, Login & Sign Up - Right */}
          <div className="hidden lg:flex items-center gap-2 flex-shrink-0">
            <Link
              href="/about"
              className="text-sm font-semibold text-white hover:text-primary hover:bg-white/10 transition-all px-3 py-2.5 rounded-lg whitespace-nowrap"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-sm font-semibold text-white hover:text-primary hover:bg-white/10 transition-all px-3 py-2.5 rounded-lg whitespace-nowrap"
            >
              Contact Us
            </Link>

            {/* Authentication - Clerk Integration */}
            {isSignedIn ? (
              <div className="flex items-center gap-2">
                <Link
                  href="/dashboard"
                  className="text-sm font-semibold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all px-4 py-2.5 rounded-lg shadow-lg hover:shadow-xl whitespace-nowrap"
                >
                  Dashboard
                </Link>
                <UserButton
                  appearance={{
                    elements: {
                      avatarBox: "w-10 h-10",
                      userButtonPopoverCard: "bg-slate-900 border border-blue-500/30",
                      userButtonPopoverActionButton: "hover:bg-white/10",
                      userButtonPopoverActionButtonText: "text-white",
                      userButtonPopoverFooter: "hidden"
                    }
                  }}
                />
              </div>
            ) : (
              <>
                <SignInButton mode="modal">
                  <button className="text-sm font-semibold text-white hover:text-primary hover:bg-white/10 transition-all px-3 py-2.5 rounded-lg whitespace-nowrap">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="text-sm font-semibold bg-[#3d9cf5] hover:bg-[#2d7cc5] text-white transition-all px-4 py-2.5 rounded-lg whitespace-nowrap">
                    Sign Up
                  </button>
                </SignUpButton>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white hover:text-primary transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-gradient-to-b from-slate-900 to-blue-900 border-t border-blue-500/30 shadow-xl">
          <div className="px-4 py-4 space-y-2">
            <Link href="/" className="block px-4 py-3 text-white font-semibold hover:bg-white/10 hover:text-primary rounded-lg transition-all">
              Home
            </Link>
            <Link href="/registrations/company" className="block px-4 py-3 text-white font-semibold hover:bg-white/10 hover:text-primary rounded-lg transition-all">
              Company Registration
            </Link>
            <Link href="/registrations/llp" className="block px-4 py-3 text-white font-semibold hover:bg-white/10 hover:text-primary rounded-lg transition-all">
              LLP Registration
            </Link>
            <Link href="/registrations/gst" className="block px-4 py-3 text-white font-semibold hover:bg-white/10 hover:text-primary rounded-lg transition-all">
              GST Registration
            </Link>
            <Link href="/about" className="block px-4 py-3 text-white font-semibold hover:bg-white/10 hover:text-primary rounded-lg transition-all">
              About Us
            </Link>
            <Link href="/contact" className="block px-4 py-3 text-white font-semibold hover:bg-white/10 hover:text-primary rounded-lg transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}

function DropdownMenu({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div className="group relative">
      <button className="flex items-center gap-1 text-sm font-semibold text-white hover:text-primary hover:bg-white/10 transition-all px-3 py-2.5 rounded-lg whitespace-nowrap">
        <span>{title}</span>
        <ChevronDown size={16} className="transition-transform duration-300 group-hover:rotate-180" />
      </button>
      <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto invisible group-hover:visible transition-all duration-200 z-[60]">
        <div className="w-[600px] bg-gradient-to-br from-slate-900 to-blue-900 rounded-xl shadow-2xl border border-blue-500/30 p-6 backdrop-blur-md">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 max-h-[70vh] overflow-y-auto">
            {items.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block text-sm text-gray-300 hover:text-primary hover:bg-white/10 transition-all p-3 rounded-lg font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
