'use client';

import ServiceConsultationForm from '@/app/components/ServiceConsultationForm';

export default function IncomeTaxReturnPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Income Tax Return (ITR) Filing
          </h1>
          <p className="text-xl text-gray-300">
            Professional ITR Filing Services for Individuals and Businesses
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Overview of Income Tax Return (ITR)
              </h2>
              <p className="text-gray-200 mb-4">
                An Income Tax Return (ITR) is a mandatory annual declaration filed by individuals and businesses with the Income Tax Department of India. It details all income earned from various sources (like salary, business, property, capital gains, and other sources) during a specific financial year.
              </p>
              <p className="text-gray-200">
                By submitting an ITR, taxpayers comply with legal requirements, establish proof of income for financial dealings, and facilitate the accurate assessment of their tax obligations to the government.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                What is Income Tax Return (ITR) Filing?
              </h2>
              <p className="text-gray-200 mb-4">
                Income Tax Return (ITR) filing is the annual process where individuals and entities report their earnings and claim deductions to the Income Tax Department of India. This declaration involves submitting a specific ITR form that details all income sources (like salary, business profits, or capital gains) and claims eligible tax-saving deductions, such as Section 80C for life insurance premiums, PPF, and EPF contributions, and Section 80D for health insurance premiums.
              </p>
              <p className="text-gray-200">
                The ITR form that a taxpayer needs to file depends on the nature and complexity of their income. There are different forms (ITR-1, ITR-2, ITR-3, etc.), each tailored for specific types of income and taxpayers.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Why is Filing Your Income Tax Return Important?
              </h2>
              <p className="text-gray-200 mb-4">
                Filing your income tax return offers significant benefits that go beyond just legal compliance. It helps you to:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Avoid Penalties</h3>
                  <p className="text-gray-200 text-sm">
                    Failing to file or late filing can lead to significant penalties.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Claim Refunds</h3>
                  <p className="text-gray-200 text-sm">
                    If you've paid excess tax (TDS), filing allows you to claim your income tax refund.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Carry Forward Losses</h3>
                  <p className="text-gray-200 text-sm">
                    Business losses can be carried forward to offset future income, reducing tax liability.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Loan and Visa Applications</h3>
                  <p className="text-gray-200 text-sm">
                    ITR acknowledgments are often required for loan applications, visa processing, and other financial transactions.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Proof of Income</h3>
                  <p className="text-gray-200 text-sm">
                    It serves as a legitimate proof of your income for various purposes.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Assessment Year vs. Financial Year: Key Difference
              </h2>
              <p className="text-gray-200 mb-4">
                In Income Tax Return (ITR) filing, understanding the distinction between the Financial Year (FY) and the Assessment Year (AY) is fundamental. While often confused, they represent different periods for income earning and tax assessment.
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white/5 rounded-lg overflow-hidden">
                  <thead className="bg-white/10">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-white">Feature</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-white">Financial Year (FY)</th>
                      <th className="px-6 py-3 text-left text-sm font-semibold text-white">Assessment Year (AY)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr>
                      <td className="px-6 py-4 text-gray-200 font-semibold">Definition</td>
                      <td className="px-6 py-4 text-gray-200">The year in which you earn your income.</td>
                      <td className="px-6 py-4 text-gray-200">The year in which the income earned in the Financial Year is assessed and taxed.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-200 font-semibold">Period</td>
                      <td className="px-6 py-4 text-gray-200">Always starts on April 1st and ends on March 31st of the following calendar year.</td>
                      <td className="px-6 py-4 text-gray-200">Always starts on April 1st and ends on March 31st of the year succeeding the Financial Year.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-200 font-semibold">Purpose</td>
                      <td className="px-6 py-4 text-gray-200">Period for income generation, expenses incurred, and financial transactions.</td>
                      <td className="px-6 py-4 text-gray-200">Period for filing Income Tax Returns (ITR), calculating tax liability, and paying taxes on the income earned in the preceding FY.</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-200 font-semibold">Examples</td>
                      <td className="px-6 py-4 text-gray-200">FY 2024-25: April 1, 2024, to March 31, 2025 (Income earned during this period).</td>
                      <td className="px-6 py-4 text-gray-200">AY 2025-26: April 1, 2025, to March 31, 2026 (ITR filed for income earned in FY 2024-25).</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-4 text-gray-200 font-semibold">Relation</td>
                      <td className="px-6 py-4 text-gray-200">The Assessment Year is always the year immediately following the Financial Year.</td>
                      <td className="px-6 py-4 text-gray-200">The Financial Year is always the year immediately preceding the Assessment Year.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Latest Income Tax Slabs and Rates
              </h2>
              <p className="text-gray-200 mb-6">
                Understanding the applicable tax slabs is crucial for accurate income tax return filing. India offers two tax regimes:
              </p>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-[#3d9cf5] mb-4">New Tax Regime (FY 2024-25)</h3>
                  <p className="text-gray-200 text-sm mb-4">
                    The New Tax Regime (default from FY 2023-24) offers lower tax rates but fewer deductions and exemptions.
                  </p>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white/5 rounded-lg overflow-hidden">
                      <thead className="bg-white/10">
                        <tr>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-white">Income Slabs (Rs.)</th>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-white">Income Tax Rate (%)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        <tr>
                          <td className="px-6 py-4 text-gray-200">0 - 3,00,000</td>
                          <td className="px-6 py-4 text-gray-200">0</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-gray-200">3,00,001 - 7,00,000</td>
                          <td className="px-6 py-4 text-gray-200">5</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-gray-200">7,00,001 - 10,00,000</td>
                          <td className="px-6 py-4 text-gray-200">10</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-gray-200">10,00,001 - 12,00,000</td>
                          <td className="px-6 py-4 text-gray-200">15</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-gray-200">12,00,001 - 15,00,000</td>
                          <td className="px-6 py-4 text-gray-200">20</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-gray-200">Above 15,00,000</td>
                          <td className="px-6 py-4 text-gray-200">30</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                    <p className="text-gray-200 text-sm">
                      <strong>Budget 2025 Update:</strong> The zero-tax limit has been raised to Rs. 12 lakh, and salaried taxpayers can benefit from an additional standard deduction of Rs. 75,000, making incomes up to Rs. 12.75 lakh effectively tax-free.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[#3d9cf5] mb-4">Old Tax Regime</h3>
                  <p className="text-gray-200 text-sm mb-4">
                    The Old Tax Regime allows taxpayers to claim various deductions and exemptions (e.g., 80C, HRA, LTA).
                  </p>
                  
                  <h4 className="text-lg font-semibold text-white mb-3">For Individuals below 60 years and HUF:</h4>
                  <div className="overflow-x-auto mb-4">
                    <table className="min-w-full bg-white/5 rounded-lg overflow-hidden">
                      <thead className="bg-white/10">
                        <tr>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-white">Income Slabs (Rs.)</th>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-white">Income Tax Rate (%)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        <tr>
                          <td className="px-6 py-4 text-gray-200">0 - 2,50,000</td>
                          <td className="px-6 py-4 text-gray-200">0</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-gray-200">2,50,001 - 5,00,000</td>
                          <td className="px-6 py-4 text-gray-200">5</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-gray-200">5,00,001 - 10,00,000</td>
                          <td className="px-6 py-4 text-gray-200">20</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-gray-200">Above 10,00,000</td>
                          <td className="px-6 py-4 text-gray-200">30</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h4 className="text-lg font-semibold text-white mb-3">For Senior Citizens (60 to 80 years):</h4>
                  <div className="overflow-x-auto mb-4">
                    <table className="min-w-full bg-white/5 rounded-lg overflow-hidden">
                      <thead className="bg-white/10">
                        <tr>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-white">Income Slabs (Rs.)</th>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-white">Income Tax Rate (%)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        <tr>
                          <td className="px-6 py-4 text-gray-200">0 - 3,00,000</td>
                          <td className="px-6 py-4 text-gray-200">0</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-gray-200">3,00,001 - 5,00,000</td>
                          <td className="px-6 py-4 text-gray-200">5</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-gray-200">5,00,001 - 10,00,000</td>
                          <td className="px-6 py-4 text-gray-200">20</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-gray-200">Above 10,00,000</td>
                          <td className="px-6 py-4 text-gray-200">30</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h4 className="text-lg font-semibold text-white mb-3">For Super Senior Citizens (80+ years):</h4>
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white/5 rounded-lg overflow-hidden">
                      <thead className="bg-white/10">
                        <tr>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-white">Income Slabs (Rs.)</th>
                          <th className="px-6 py-3 text-left text-sm font-semibold text-white">Income Tax Rate (%)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-white/10">
                        <tr>
                          <td className="px-6 py-4 text-gray-200">0 - 5,00,000</td>
                          <td className="px-6 py-4 text-gray-200">0</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-gray-200">5,00,001 - 10,00,000</td>
                          <td className="px-6 py-4 text-gray-200">20</td>
                        </tr>
                        <tr>
                          <td className="px-6 py-4 text-gray-200">Above 10,00,000</td>
                          <td className="px-6 py-4 text-gray-200">30</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Which Tax Regime Should You Choose?
              </h2>
              <p className="text-gray-200 mb-4">
                The choice between the old and new tax regimes depends largely on the deductions and exemptions you plan to claim. If you have significant tax-saving investments and expenses, the old regime might be more beneficial. If you prefer simplicity and fewer deductions, the new regime could be better.
              </p>
              <div className="p-4 bg-[#3d9cf5]/10 border border-[#3d9cf5]/30 rounded-lg">
                <p className="text-gray-200 text-sm">
                  <strong>Expert Advice:</strong> Connect with experts and make an informed decision for your income tax return filing. Taxpayers must carefully evaluate both regimes based on their specific financial situation before filing their ITR.
                </p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Who Needs to e-File an ITR?
              </h2>
              <p className="text-gray-200 mb-4">
                Generally, any individual or entity whose gross total income exceeds the basic exemption limit is required to file an ITR. This includes:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-gray-200 text-sm">• Salaried individuals</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-gray-200 text-sm">• Self-employed professionals and freelancers</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-gray-200 text-sm">• Businesses (companies, firms, LLPs)</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-gray-200 text-sm">• Individuals with income from house property</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-gray-200 text-sm">• Income from capital gains</p>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <p className="text-gray-200 text-sm">• Income from other sources</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Different Income Tax Return Forms in India
              </h2>
              <p className="text-gray-200 mb-4">
                Selecting the right ITR form is a critical step in how to file an income tax return. Choosing an incorrect form can lead to your return being treated as defective.
              </p>
              <div className="overflow-x-auto">
                <table className="min-w-full bg-white/5 rounded-lg overflow-hidden">
                  <thead className="bg-white/10">
                    <tr>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-white">Form Name</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-white">Applicable To</th>
                      <th className="px-4 py-3 text-left text-sm font-semibold text-white">Types of Income Covered</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    <tr>
                      <td className="px-4 py-4 text-gray-200 font-semibold">ITR-1 (SAHAJ)</td>
                      <td className="px-4 py-4 text-gray-200 text-sm">Salaried Individuals, Pensioners (Income ≤ Rs. 50 lakh)</td>
                      <td className="px-4 py-4 text-gray-200 text-sm">Salary, Pension, One house property, Other sources</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 text-gray-200 font-semibold">ITR-2</td>
                      <td className="px-4 py-4 text-gray-200 text-sm">Individuals and HUFs without business income</td>
                      <td className="px-4 py-4 text-gray-200 text-sm">Salary, Multiple house properties, Capital gains, Foreign assets</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 text-gray-200 font-semibold">ITR-3</td>
                      <td className="px-4 py-4 text-gray-200 text-sm">Individuals and HUFs with business income</td>
                      <td className="px-4 py-4 text-gray-200 text-sm">Proprietorship, Professional income, Partnership, All income types</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 text-gray-200 font-semibold">ITR-4 (SUGAM)</td>
                      <td className="px-4 py-4 text-gray-200 text-sm">Small Businesses under Presumptive Taxation</td>
                      <td className="px-4 py-4 text-gray-200 text-sm">Section 44AD, 44ADA, 44AE (presumptive schemes)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 text-gray-200 font-semibold">ITR-5</td>
                      <td className="px-4 py-4 text-gray-200 text-sm">Firms, LLPs, AOPs, BOIs, Co-operative Societies</td>
                      <td className="px-4 py-4 text-gray-200 text-sm">All business and other income</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 text-gray-200 font-semibold">ITR-6</td>
                      <td className="px-4 py-4 text-gray-200 text-sm">Companies (excluding Section 11)</td>
                      <td className="px-4 py-4 text-gray-200 text-sm">Corporate income</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-4 text-gray-200 font-semibold">ITR-7</td>
                      <td className="px-4 py-4 text-gray-200 text-sm">Trusts, Political Parties, Institutions</td>
                      <td className="px-4 py-4 text-gray-200 text-sm">Charitable trusts, Political parties, Research institutions</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-4">
                Documents Required for Income Tax Return E-Filing
              </h2>
              <p className="text-gray-200 mb-4">
                Having these documents ready will significantly speed up your income tax return filing process:
              </p>
              <div className="space-y-4">
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">PAN Card and Aadhaar Card</h3>
                  <p className="text-gray-200 text-sm">
                    Your PAN card is a unique tax ID, essential for all financial transactions and e-filing of income tax returns. Your Aadhaar card is now mandatory to link with PAN for tax filing, ensuring streamlined verification.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Form 16 from Your Employer</h3>
                  <p className="text-gray-200 text-sm">
                    For salaried individuals, Form 16 is crucial for income tax return filing. Issued by your employer, it details TDS (Tax Deducted at Source) from your salary and provides a breakup of salary components and declared deductions.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Bank Statements and Interest Certificates</h3>
                  <p className="text-gray-200 text-sm">
                    These are vital for accurate income tax return filing. They help report all interest income from savings accounts, FDs, and RDs, and assist in identifying high-value transactions and reconciling tax refunds.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Proof of Investments for Deductions (80C, 80D, etc.)</h3>
                  <p className="text-gray-200 text-sm">
                    To claim tax deductions, you need proof of investments and expenditures. For Section 80C, gather receipts for PPF, ELSS, life insurance, home loan principal, and children's tuition fees. For Section 80D, keep health insurance premium receipts.
                  </p>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-[#3d9cf5] mb-2">Form 26AS - Annual Tax Statement</h3>
                  <p className="text-gray-200 text-sm">
                    Form 26AS is an indispensable annual tax statement for income tax return filing. It shows all TDS/TCS, advance tax, self-assessment tax paid, and refunds received linked to your PAN. It's now complemented by the Annual Information Statement (AIS) and Taxpayer Information Summary (TIS) for a comprehensive financial view.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <ServiceConsultationForm 
                serviceName="Income Tax Return Filing"
                serviceCategory="Taxation"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
