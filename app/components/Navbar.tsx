'use client';

import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { ChevronDown, Menu, X, User } from 'lucide-react';
import { SignInButton, SignUpButton, UserButton, useUser } from '@clerk/nextjs';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Always call useUser hook (required by React Hooks rules)
  const { isSignedIn } = useUser();

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 backdrop-blur-md shadow-lg border-b border-blue-500/30">
      <div className="max-w-[1920px] mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo - Left */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 text-white hover:text-primary transition-colors flex-shrink-0 z-10">
            <img src="/akos-logo.jpg" width={20} className="w-5 sm:w-6 lg:w-8" alt="AKOS Logo" />
            <h2 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-blue-300 bg-clip-text text-transparent">AKOS</h2>
          </Link>

          {/* Services - Center */}
          <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1 flex-1 justify-center mx-1 lg:mx-2 xl:mx-4">
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
          <div className="hidden lg:flex items-center gap-1 lg:gap-2 flex-shrink-0">
            <Link
              href="/about"
              className="text-xs lg:text-xs xl:text-sm font-semibold text-white hover:text-primary hover:bg-white/10 transition-all px-1.5 lg:px-2 xl:px-3 py-2 lg:py-2.5 rounded-lg whitespace-nowrap"
            >
              About Us
            </Link>
            <Link
              href="/contact"
              className="text-xs lg:text-xs xl:text-sm font-semibold text-white hover:text-primary hover:bg-white/10 transition-all px-1.5 lg:px-2 xl:px-3 py-2 lg:py-2.5 rounded-lg whitespace-nowrap"
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
                  <button className="text-xs lg:text-xs xl:text-sm font-semibold text-white hover:text-primary hover:bg-white/10 transition-all px-1.5 lg:px-2 xl:px-3 py-2 lg:py-2.5 rounded-lg whitespace-nowrap">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="text-xs lg:text-xs xl:text-sm font-semibold bg-[#3d9cf5] hover:bg-[#2d7cc5] text-white transition-all px-2 lg:px-3 xl:px-4 py-2 lg:py-2.5 rounded-lg whitespace-nowrap">
                    Sign Up
                  </button>
                </SignUpButton>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white hover:text-primary transition-colors p-1 touch-manipulation"
          >
            {mobileMenuOpen ? <X size={20} className="sm:w-6 sm:h-6" /> : <Menu size={20} className="sm:w-6 sm:h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-gradient-to-b from-slate-900 to-blue-900 border-t border-blue-500/30 shadow-xl max-h-[85vh] overflow-y-auto scrollbar-thin">
          <div className="px-3 sm:px-4 py-4 space-y-2">
            <MobileDropdownSection title="Registrations" items={[
              { label: 'Private Limited Company', href: '/registrations/company' },
              { label: 'LLP Registration', href: '/registrations/llp' },
              { label: 'GST Registration', href: '/registrations/gst' },
              { label: 'Startup India', href: '/registrations/startup-india' },
            ]} />
            <MobileDropdownSection title="Taxation" items={[
              { label: 'GST Return Filing', href: '/taxation/gst-return-filing' },
              { label: 'Income Tax Return', href: '/taxation/income-tax-return' },
              { label: 'TDS Return', href: '/taxation/tds-return' },
              { label: 'Tax Planning', href: '/taxation/tax-planning' },
            ]} />
            <MobileDropdownSection title="IPR Services" items={[
              { label: 'Trademark Registration', href: '/ipr/trademark-registration' },
              { label: 'Copyright Registration', href: '/ipr/copyright-registration' },
              { label: 'Patent Registration', href: '/ipr/patent-registration' },
            ]} />
            <Link href="/about" className="block px-3 py-2.5 text-sm text-white font-medium hover:bg-white/10 hover:text-primary rounded-lg transition-all">
              About Us
            </Link>
            <Link href="/contact" className="block px-3 py-2.5 text-sm text-white font-medium hover:bg-white/10 hover:text-primary rounded-lg transition-all">
              Contact Us
            </Link>
            {!isSignedIn && (
              <div className="pt-2 border-t border-blue-500/30 mt-3">
                <SignInButton mode="modal">
                  <button className="w-full text-left px-3 py-2.5 text-sm text-white font-medium hover:bg-white/10 hover:text-primary rounded-lg transition-all">
                    Sign In
                  </button>
                </SignInButton>
                <SignUpButton mode="modal">
                  <button className="w-full text-left px-3 py-2.5 text-sm bg-[#3d9cf5] hover:bg-[#2d7cc5] text-white font-medium rounded-lg transition-all mt-1">
                    Sign Up
                  </button>
                </SignUpButton>
              </div>
            )}
            {isSignedIn && (
              <div className="pt-2 border-t border-blue-500/30 mt-3">
                <Link href="/dashboard" className="block px-3 py-2.5 text-sm bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg transition-all">
                  Dashboard
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

function MobileDropdownSection({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-blue-500/20 pb-3 mb-3">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-3 py-3 sm:py-2.5 text-sm sm:text-base text-white font-medium hover:bg-white/10 hover:text-primary rounded-lg transition-all touch-manipulation"
      >
        <span>{title}</span>
        <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      {isOpen && (
        <div className="pl-2 mt-2 space-y-1">
          {items.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              className="block px-3 py-2.5 sm:py-2 text-sm text-gray-300 hover:text-primary hover:bg-white/5 rounded-lg transition-all touch-manipulation"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function DropdownMenu({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [timeoutId]);

  const handleMouseEnter = () => {
    if (timeoutId) {
      clearTimeout(timeoutId);
      setTimeoutId(null);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsOpen(false);
    }, 150);
    setTimeoutId(id);
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  return (
    <div 
      ref={dropdownRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button 
        onClick={handleClick}
        className="flex items-center gap-1 text-xs lg:text-xs xl:text-sm font-semibold text-white hover:text-primary hover:bg-white/10 transition-all px-1.5 lg:px-2 xl:px-3 py-2 lg:py-2.5 rounded-lg whitespace-nowrap touch-manipulation"
      >
        <span>{title}</span>
        <ChevronDown 
          size={12} 
          className={`w-3 h-3 lg:w-3.5 lg:h-3.5 xl:w-4 xl:h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      
      {isOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-[999] animate-in slide-in-from-top-2 duration-200">
          <div 
            className="w-[95vw] max-w-[400px] sm:max-w-[500px] lg:w-[450px] xl:w-[550px] 2xl:w-[600px] bg-gradient-to-br from-slate-900/98 to-blue-900/98 rounded-xl shadow-2xl border border-blue-500/30 p-3 sm:p-4 lg:p-6 backdrop-blur-md"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 sm:gap-x-4 gap-y-1 sm:gap-y-2 max-h-[50vh] sm:max-h-[60vh] lg:max-h-[70vh] overflow-y-auto scrollbar-thin">
              {items.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="block text-xs sm:text-sm text-gray-300 hover:text-primary hover:bg-white/10 transition-all p-2 sm:p-2.5 lg:p-3 rounded-lg font-medium touch-manipulation"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
