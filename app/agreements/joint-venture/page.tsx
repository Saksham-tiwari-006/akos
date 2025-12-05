'use client';

import ServiceConsultationForm from '@/app/components/ServiceConsultationForm';

export default function JointVentureAgreementPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Joint Venture Agreement
          </h1>
          <p className="text-xl text-gray-300">
            Expert JVA drafting for strategic business partnerships in India
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                What is a Joint Venture Agreement in India?
              </h2>
              <p className="text-gray-200 mb-4">
                A Joint Venture Agreement (JVA) is a powerful tool for small businesses to unlock new opportunities, reduce risks, and accelerate growth. By joining forces with another company, you can access new markets, pool resources, and leverage each other's strengths. This approach is especially valuable in India's dynamic business landscape, where collaboration often leads to faster innovation, cost savings, and a stronger competitive edge.
              </p>
              <p className="text-gray-200">
                A Joint Venture Agreement is essential because it clearly outlines the roles, responsibilities, and expectations of each partner. It helps prevent misunderstandings and provides a roadmap for resolving disputes. The agreement is regulated by the Indian Contract Act, 1872, ensuring that it is legally enforceable in case of disagreements. This legal framework adds security and protection for all parties involved.
              </p>
            </div>

            {/* What is a Joint Venture */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                What is a Joint Venture?
              </h2>
              <p className="text-gray-200 mb-4">
                A joint venture is a business arrangement where two or more parties agree to pool resources for a specific project or business activity. Each party remains independent but shares profits, losses, and control of the venture.
              </p>
              <p className="text-gray-200 mb-4">
                Joint ventures are quite common in India as they allow both local and foreign companies to work together effectively. This collaboration can be for a single project or a long-term business goal.
              </p>
              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-[#3d9cf5] mb-3">Example:</h3>
                <p className="text-gray-200">
                  A local Indian company and a foreign tech firm might form a Joint Venture to launch a new smartphone model in India. The local company brings in market knowledge, while the foreign company contributes technology and research. Together, they share the profits and risks from the sales of the new product.
                </p>
              </div>
            </div>

            {/* Why Form a JV */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Why Do Businesses Form a Joint Venture?
              </h2>
              <p className="text-gray-200 mb-4">
                Businesses form joint ventures for several key reasons, but a well-drafted Joint Venture Agreement is critical to their success. It provides a clear, legally enforceable framework that prevents misunderstandings and disputes, which are common without a formal agreement.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Access to New Markets</h3>
                  <p className="text-gray-200 text-sm">
                    A local partner can help a foreign company enter the Indian market, making it easier to navigate cultural and regulatory challenges.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Share Risks and Costs</h3>
                  <p className="text-gray-200 text-sm">
                    Partners can split investments and potential losses, reducing financial risks for each party.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Combine Strengths</h3>
                  <p className="text-gray-200 text-sm">
                    Each partner brings unique skills, technology, or resources that can make the joint venture stronger and more competitive.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Legal Requirements</h3>
                  <p className="text-gray-200 text-sm">
                    Some industries in India require foreign companies to partner with Indian firms to comply with sector-specific rules and regulations.
                  </p>
                </div>
              </div>
              <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                <p className="text-gray-200 text-sm">
                  <strong>Important:</strong> A written JVA is critical for making sure that all these goals are achieved successfully. It sets clear, enforceable terms to prevent misunderstandings and disputes. Without a written agreement, conflicts are common.
                </p>
              </div>
            </div>

            {/* Key Components */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Key Components of a Joint Venture Agreement
              </h2>
              <p className="text-gray-200 mb-4">A clear, written agreement helps avoid confusion and legal issues. A JVA outlines key details such as:</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">The business goal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">Each partner's contribution</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">Profit and loss sharing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">Management structure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">How to resolve disagreements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">Exit strategy and dissolution</span>
                </li>
              </ul>
            </div>

            {/* Legal Binding */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Is a Joint Venture Agreement Legally Binding in India?
              </h2>
              <p className="text-gray-200 mb-4">
                Yes, a Joint Venture Agreement is legally binding in India. Once signed, it is enforceable in court. If a partner does not follow the agreement, the other can seek legal remedy.
              </p>
              <p className="text-gray-200">
                The agreement must meet the requirements of the Indian Contract Act, 1872. If the joint venture forms a company, it must also comply with the Companies Act, 2013.
              </p>
            </div>

            {/* Types of JV */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Types of Joint Ventures in India
              </h2>
              <p className="text-gray-200 mb-4">
                Joint ventures in India can be structured in several ways, each catering to different business goals and regulatory requirements:
              </p>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">1. Incorporated Joint Venture</h3>
                  <p className="text-gray-200 text-sm">
                    An incorporated joint venture is a new company formed by the partners, who become shareholders. It is a separate legal entity registered under the Companies Act, 2013, offering limited liability protection. This is the most common form for large projects and foreign investments.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">2. Unincorporated Joint Venture</h3>
                  <p className="text-gray-200 text-sm">
                    An unincorporated joint venture is not a separate company. Instead, it is a contract between two or more parties, where each partner is responsible for its actions. If the venture earns income, it is generally taxed as an Association of Persons (AOP) under Indian tax law. This type is usually for short-term projects.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">3. Project-Based Joint Venture</h3>
                  <p className="text-gray-200 text-sm">
                    Formed for a specific project, such as building a road or launching a product. This joint venture ends when the project is completed.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">4. Functional Collaboration</h3>
                  <p className="text-gray-200 text-sm">
                    Partners work together for a specific business function, like marketing or distribution, with each party handling a part of the business.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Consultation Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <ServiceConsultationForm 
                serviceName="Joint Venture Agreement"
                serviceCategory="Agreements & Contracts"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
