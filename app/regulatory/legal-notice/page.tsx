'use client';

import ServiceConsultationForm from '@/app/components/ServiceConsultationForm';

export default function LegalNoticePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Legal Notice in India
          </h1>
          <p className="text-xl text-gray-300">
            Formal legal document to resolve disputes before going to court
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* What is Section */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                What is a Legal Notice in India?
              </h2>
              <p className="text-gray-200 mb-4">
                A legal notice in India is a formal document sent by one party to another, informing them of a legal dispute and warning them of potential legal action if the issue remains unresolved. It acts as a first step before filing a lawsuit and can often help resolve matters without going to court. Legal notices are commonly used in civil disputes, such as consumer complaints, breaches of contract, or landlord-tenant issues.
              </p>
              <p className="text-gray-200">
                The notice outlines the nature of the problem and demands action within a specified timeframe. It also serves as evidence that an attempt was made to settle the issue before taking legal action. Governed by various Indian laws, such as the Civil Procedure Code, 1908, and the Negotiable Instruments Act, 1881, a legal notice is often drafted by a lawyer to ensure its effectiveness. In many cases, a well-drafted legal notice can lead to a resolution without the need for litigation.
              </p>
            </div>

            {/* Main Purpose */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Main Purpose of Legal Notice
              </h2>
              <p className="text-gray-200 mb-4">
                The main purpose of a legal notice is to make your complaint official. It formally communicates your grievance to the other party and specifies the remedial action you expect. The key goals are:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">
                    <strong>To Inform:</strong> It officially informs the other person about your grievances in a detailed manner.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">
                    <strong>To Demand:</strong> It clearly states your demand. This could be a request for money, a demand for an apology, or a requirement to perform a specific action.
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-[#3d9cf5] mr-2">•</span>
                  <span className="text-gray-200">
                    <strong>To Warn:</strong> It serves as a final warning. It tells the other party the consequences they will face if they ignore your demands.
                  </span>
                </li>
              </ul>
            </div>

            {/* How it Solves Problems */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                How a Legal Notice Can Solve Your Problem Without Going to Court?
              </h2>
              <p className="text-gray-200 mb-4">
                While a legal notice serves as a serious warning, its primary power lies in its ability to open a channel for negotiation and resolution.
              </p>
              <p className="text-gray-200">
                When a person receives a notice from a lawyer, they take it seriously. They understand that you are not just making empty threats. They know you have consulted a lawyer and are ready for the next step.
              </p>
              <p className="text-gray-200 mt-4">
                This often pushes them to contact you or your lawyer to find a solution. They might agree to pay the money, fix the faulty product, or negotiate a settlement. This process of settling the dispute outside of court is called an "out-of-court settlement."
              </p>
            </div>

            {/* Top Reasons */}
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Top Reasons for Sending a Legal Notice
              </h2>
              <p className="text-gray-200 mb-4">
                Sending a legal notice is a smart move for many reasons. It is not just a formality; it gives you several advantages. Let's look at the biggest benefits:
              </p>
              <div className="space-y-6">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Creates a Legal Record of Your Complaint</h3>
                  <p className="text-gray-200 text-sm mb-2">
                    When you send a legal notice, you create a solid piece of evidence. The notice, drafted by an advocate, clearly records the facts of your complaint. It shows the date you raised the issue and exactly what you demanded.
                  </p>
                  <p className="text-gray-200 text-sm">
                    If you send it through Registered Post with Acknowledgement Due (RPAD), you receive a receipt that serves as proof that the other party received your notice. This method is the most legally reliable and provides solid documentation in case you need it later.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Pushes for an Out-of-Court Settlement</h3>
                  <p className="text-gray-200 text-sm">
                    Nobody wants to get into a long and expensive court battle. A legal notice acts as a wake-up call for the other party. It shows that you are serious about your complaint and are willing to take legal action. This pressure often brings the other party to the negotiation table.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Saves Your Time and Money</h3>
                  <p className="text-gray-200 text-sm">
                    Think about the costs of filing a court case. There are court fees, lawyer's fees, and travel expenses. A case can also drag on for years, taking up a lot of your valuable time. In comparison, sending a legal notice is much cheaper and faster.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Shows the Other Party You Are Serious</h3>
                  <p className="text-gray-200 text-sm">
                    Sometimes, people might not take your verbal complaints seriously. They might think you will eventually give up. Sending a legal notice completely changes this perception. A formal document on a lawyer's letterhead signals your firm intention.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Consultation Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <ServiceConsultationForm 
                serviceName="Legal Notice"
                serviceCategory="Regulatory"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
