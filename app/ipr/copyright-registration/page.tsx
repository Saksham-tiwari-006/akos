'use client'

import React, { useState } from 'react';
import { BookOpen, FileText, CheckCircle, Camera, Clock, Shield, Building, DollarSign, Award } from 'lucide-react';

export default function CopyrightRegistrationPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    file: null as File | null
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({ ...prev, file }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-6 pt-20 pb-16">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-600 rounded-full mb-6">
              <BookOpen className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Copyright Registration
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive copyright protection for creative works with expert registration services and digital rights management.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            
            {/* Understanding Copyright */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <BookOpen className="w-8 h-8 text-teal-400" />
                <h2 className="text-3xl font-bold text-white">Understanding Copyright Protection</h2>
              </div>
              <div className="prose prose-invert max-w-none">
                <p className="text-gray-300 text-lg mb-6">
                  Copyright is an exclusive legal right granted to creators of original literary, dramatic, musical, and artistic works, as well as cinematographic films and sound recordings. In India, copyright protection is automatic upon creation, but registration provides legal advantages including presumption of ownership, easier enforcement, and stronger legal standing in infringement proceedings. Copyright registration covers digital works, software, creative content, and provides protection for the creator's lifetime plus 60 years.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-gradient-to-r from-teal-600/10 to-green-600/10 p-6 rounded-lg border border-teal-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <BookOpen className="w-5 h-5" />
                      Copyrightable Works
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>Literary Works:</strong> Books, articles, software code</li>
                      <li>• <strong>Musical Works:</strong> Songs, compositions, lyrics</li>
                      <li>• <strong>Artistic Works:</strong> Paintings, sculptures, photographs</li>
                      <li>• <strong>Dramatic Works:</strong> Plays, screenplays, choreography</li>
                      <li>• <strong>Cinematographic:</strong> Films, documentaries, videos</li>
                      <li>• <strong>Sound Recordings:</strong> Music albums, audiobooks</li>
                    </ul>
                  </div>
                  
                  <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 p-6 rounded-lg border border-blue-500/20">
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                      <Shield className="w-5 h-5" />
                      Rights Protection
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• <strong>Reproduction Rights:</strong> Control copying and printing</li>
                      <li>• <strong>Distribution Rights:</strong> Control public distribution</li>
                      <li>• <strong>Public Performance:</strong> Control public display/performance</li>
                      <li>• <strong>Adaptation Rights:</strong> Control derivative works</li>
                      <li>• <strong>Translation Rights:</strong> Control language translations</li>
                      <li>• <strong>Digital Rights:</strong> Control online distribution</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Registration Process */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <FileText className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Copyright Registration Process</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">1</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-green-400">📋 Work Assessment & Classification</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Detailed evaluation of creative work to determine copyrightability and appropriate classification category.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Originality and creativity assessment</li>
                        <li>• Work category classification (literary, artistic, etc.)</li>
                        <li>• Authorship and ownership verification</li>
                        <li>• Prior art and similarity searches</li>
                        <li>• Eligibility criteria compliance check</li>
                        <li>• Registration strategy development</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm">2</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-blue-400">📝 Form XIV-A Preparation</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Professional preparation and filing of Form XIV-A with Copyright Office along with required documents.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Complete Form XIV-A preparation</li>
                        <li>• Work samples and copies preparation</li>
                        <li>• Author and publisher details compilation</li>
                        <li>• Copyright ownership documentation</li>
                        <li>• Fee calculation and payment processing</li>
                        <li>• Supporting affidavits and declarations</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold text-sm">3</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-purple-400">🏛️ Copyright Office Filing</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Official submission to Copyright Office with complete documentation and compliance requirements.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Online filing through copyright e-portal</li>
                        <li>• Digital document upload and submission</li>
                        <li>• Fee payment and receipt generation</li>
                        <li>• Application number assignment</li>
                        <li>• Acknowledgment receipt processing</li>
                        <li>• Filing status monitoring and tracking</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold text-sm">4</div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-3 text-yellow-400">✅ Registration Certificate</h3>
                      <p className="text-sm text-gray-300 mb-3">
                        Copyright Office examination, approval, and issuance of official registration certificate.
                      </p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Copyright Office examination process</li>
                        <li>• Objection handling (if any)</li>
                        <li>• Registration approval confirmation</li>
                        <li>• Official certificate generation</li>
                        <li>• Digital certificate download</li>
                        <li>• Registration number assignment</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Types of Copyright Works */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Camera className="w-8 h-8 text-purple-400" />
                <h2 className="text-3xl font-bold text-white">Copyright Work Categories</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-purple-400">📚 Literary Works</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-white mb-2">Written Content:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Books and novels</li>
                        <li>• Articles and essays</li>
                        <li>• Poetry and lyrics</li>
                        <li>• Research papers</li>
                        <li>• Manuals and guides</li>
                        <li>• Website content</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Digital Content:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Software source code</li>
                        <li>• Database compilations</li>
                        <li>• Mobile applications</li>
                        <li>• Gaming content</li>
                        <li>• E-learning materials</li>
                        <li>• Digital publications</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Business Content:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Marketing materials</li>
                        <li>• Training content</li>
                        <li>• Business reports</li>
                        <li>• Technical documentation</li>
                        <li>• Legal documents</li>
                        <li>• Promotional content</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400">🎨 Artistic & Creative Works</h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-medium text-white mb-2">Visual Arts:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Paintings and drawings</li>
                        <li>• Sculptures and installations</li>
                        <li>• Photography</li>
                        <li>• Graphic designs</li>
                        <li>• Illustrations</li>
                        <li>• Digital artworks</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Musical Works:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Original compositions</li>
                        <li>• Song lyrics</li>
                        <li>• Musical arrangements</li>
                        <li>• Jingles and themes</li>
                        <li>• Sound effects</li>
                        <li>• Background scores</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-white mb-2">Performance Works:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Stage plays and scripts</li>
                        <li>• Choreographic works</li>
                        <li>• Performance art</li>
                        <li>• Dance compositions</li>
                        <li>• Theatrical productions</li>
                        <li>• Entertainment shows</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Digital Copyright Protection */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <Award className="w-8 h-8 text-orange-400" />
                <h2 className="text-3xl font-bold text-white">Digital Copyright & Online Protection</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-orange-500/10 p-6 rounded-lg border border-orange-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-orange-400 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Digital Rights Management
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Online Content Protection:</strong> Web content and digital media</li>
                    <li>• <strong>Software Copyright:</strong> Source code and applications</li>
                    <li>• <strong>E-book Protection:</strong> Digital publications and content</li>
                    <li>• <strong>Streaming Rights:</strong> Audio and video content protection</li>
                    <li>• <strong>Gaming Content:</strong> Game assets and interactive media</li>
                    <li>• <strong>Social Media Content:</strong> Posts, images, and videos</li>
                    <li>• <strong>Cloud Storage Rights:</strong> Digital asset management</li>
                  </ul>
                </div>
                
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400 flex items-center gap-2">
                    <Shield className="w-5 h-5" />
                    Online Infringement Protection
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>DMCA Takedown Notices:</strong> International platform enforcement</li>
                    <li>• <strong>Platform Reporting:</strong> YouTube, Facebook, Instagram protection</li>
                    <li>• <strong>Piracy Monitoring:</strong> Unauthorized distribution tracking</li>
                    <li>• <strong>Content Filtering:</strong> Automated detection systems</li>
                    <li>• <strong>Legal Enforcement:</strong> Court proceedings for infringement</li>
                    <li>• <strong>Settlement Negotiations:</strong> Amicable dispute resolution</li>
                    <li>• <strong>Damages Recovery:</strong> Financial compensation claims</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Benefits & Duration */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <CheckCircle className="w-8 h-8 text-green-400" />
                <h2 className="text-3xl font-bold text-white">Copyright Benefits & Duration</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-green-400 flex items-center gap-2">
                    <CheckCircle className="w-5 h-5" />
                    Registration Benefits
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Legal Presumption:</strong> Ownership prima facie evidence</li>
                    <li>• <strong>Enforcement Rights:</strong> Stronger legal standing in courts</li>
                    <li>• <strong>Licensing Authority:</strong> Legal basis for licensing agreements</li>
                    <li>• <strong>Transfer Rights:</strong> Clear ownership for assignments</li>
                    <li>• <strong>International Recognition:</strong> Global copyright treaty benefits</li>
                    <li>• <strong>Statutory Damages:</strong> Easier damages calculation</li>
                    <li>• <strong>Commercial Value:</strong> Enhanced business asset value</li>
                  </ul>
                </div>
                
                <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-blue-400 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Protection Duration
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Literary/Artistic Works:</strong> Author's lifetime + 60 years</li>
                    <li>• <strong>Cinematographic Films:</strong> 60 years from publication</li>
                    <li>• <strong>Sound Recordings:</strong> 60 years from publication</li>
                    <li>• <strong>Government Works:</strong> 60 years from publication</li>
                    <li>• <strong>Corporate Authorship:</strong> 60 years from publication</li>
                    <li>• <strong>Anonymous Works:</strong> 60 years from publication</li>
                    <li>• <strong>Posthumous Works:</strong> 60 years from publication</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Fee Structure & Timeline */}
            <section className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center gap-4 mb-6">
                <DollarSign className="w-8 h-8 text-yellow-400" />
                <h2 className="text-3xl font-bold text-white">Registration Fees & Timeline</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-yellow-500/10 p-6 rounded-lg border border-yellow-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-yellow-400">💰 Copyright Registration Fees</h3>
                  <div className="space-y-4">
                    <div className="bg-yellow-600/10 p-4 rounded border border-yellow-500/20">
                      <h4 className="font-medium text-white mb-2">Government Fees:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Literary/Artistic Work: ₹500</li>
                        <li>• Computer Software: ₹2,000</li>
                        <li>• Sound Recording: ₹2,000</li>
                        <li>• Cinematographic Film: ₹5,000</li>
                        <li>• Multiple works: Additional ₹500 each</li>
                        <li>• Expedited processing: 50% additional</li>
                      </ul>
                    </div>
                    <div className="bg-green-600/10 p-4 rounded border border-green-500/20">
                      <h4 className="font-medium text-white mb-2">Professional Fees:</h4>
                      <ul className="space-y-1 text-sm text-gray-300">
                        <li>• Simple registration: ₹5,000-₹15,000</li>
                        <li>• Complex works: ₹15,000-₹30,000</li>
                        <li>• Software copyright: ₹20,000-₹40,000</li>
                        <li>• Multiple works: ₹10,000-₹25,000</li>
                        <li>• International filing: ₹25,000-₹75,000</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-red-500/10 p-6 rounded-lg border border-red-500/20">
                  <h3 className="font-semibold text-lg mb-4 text-red-400 flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    Registration Timeline
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>• <strong>Work Assessment:</strong> 2-3 days</li>
                    <li>• <strong>Application Preparation:</strong> 3-5 days</li>
                    <li>• <strong>Copyright Office Filing:</strong> 1-2 days</li>
                    <li>• <strong>Acknowledgment Receipt:</strong> 7-15 days</li>
                    <li>• <strong>Examination Process:</strong> 30-60 days</li>
                    <li>• <strong>Registration Certificate:</strong> 30-45 days</li>
                    <li>• <strong>Total Process:</strong> 2-4 months</li>
                    <li>• <strong>Expedited Processing:</strong> 30-45 days</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Get Started */}
            <section className="bg-gradient-to-r from-teal-600 to-green-600 rounded-2xl p-8 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Protect Your Creative Works</h2>
              <p className="text-xl mb-6 opacity-90">
                Comprehensive copyright registration and digital rights management for complete creative work protection.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">Lifetime+60</div>
                  <div className="text-sm opacity-80">Years Protection</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">₹500+</div>
                  <div className="text-sm opacity-80">Govt Fees</div>
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-4">
                  <div className="text-2xl font-bold">2-4 Months</div>
                  <div className="text-sm opacity-80">Registration</div>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Form */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">Copyright Registration</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Work Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      placeholder="Type of work (literary/artistic/software), work title, creation date, authorship details, urgency..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <label htmlFor="file" className="block text-sm font-medium text-gray-300 mb-2">
                      Upload Work Sample (Optional)
                    </label>
                    <input
                      type="file"
                      id="file"
                      name="file"
                      onChange={handleFileChange}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-teal-600 to-green-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-teal-700 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Register Copyright
                  </button>
                </form>
                
                <div className="mt-8 pt-6 border-t border-white/10">
                  <div className="flex items-center justify-center space-x-6 text-sm text-gray-400">
                    <div className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      <span>Expert Filing</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-4 h-4 text-blue-400 mr-2" />
                      <span>Digital Protection</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}