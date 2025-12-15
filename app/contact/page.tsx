'use client';

import { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    serviceType: '',
    customService: '',
    consultationTime: '',
    subject: '',
    message: '',
  });

  const [submitStatus, setSubmitStatus] = useState('');

  const serviceOptions = [
    'Company Registration',
    'GST Filing',
    'Tax Filing',
    'Trademark Registration',
    'Business Consultation',
    'Compliance Services',
    'Legal Services',
    'Other',
  ];

  const handleServiceChange = (value: string) => {
    setFormData({ 
      ...formData, 
      serviceType: value,
      service: value === 'Other' ? formData.customService : value
    });
  };

  const handleCustomServiceChange = (value: string) => {
    setFormData({ 
      ...formData, 
      customService: value,
      service: value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('submitting');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          service: formData.service || formData.serviceType,
          subject: formData.subject || `Inquiry about ${formData.service || formData.serviceType}`,
          message: formData.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          serviceType: '',
          customService: '',
          consultationTime: '',
          subject: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
        console.error('Error:', result.message);
      }
    } catch (error) {
      setSubmitStatus('error');
    }
  };

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 1:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM',
    '5:00 PM - 6:00 PM',
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Get In Touch
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Have a question or need assistance? We're here to help you with all your business needs.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white/10 backdrop-blur-md rounded-xl border border-blue-500/30 p-8">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="+91 1234567890"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">
                      Service Type *
                    </label>
                    <select
                      required
                      value={formData.serviceType}
                      onChange={(e) => handleServiceChange(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    >
                      <option value="">Select a service</option>
                      {serviceOptions.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  {formData.serviceType === 'Other' && (
                    <div>
                      <label className="block text-sm font-semibold text-gray-200 mb-2">
                        Custom Service *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.customService}
                        onChange={(e) => handleCustomServiceChange(e.target.value)}
                        className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                        placeholder="Enter your specific service need"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">
                      Preferred Consultation Time
                    </label>
                    <select
                      value={formData.consultationTime}
                      onChange={(e) => setFormData({ ...formData, consultationTime: e.target.value })}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    >
                      <option value="">Select a time slot</option>
                      {timeSlots.map((slot, index) => (
                        <option key={index} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-200 mb-2">
                      Message
                    </label>
                    <textarea
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={submitStatus === 'submitting'}
                    className="w-full px-6 py-4 bg-gradient-to-r from-primary to-blue-500 text-white font-bold rounded-lg hover:from-blue-500 hover:to-primary transition-all shadow-lg shadow-primary/50 hover:shadow-primary/70 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {submitStatus === 'submitting' ? 'Sending...' : 'Send Message'}
                  </button>

                  {submitStatus === 'success' && (
                    <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 text-center">
                      ✓ Message sent successfully! We'll get back to you soon.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 text-center">
                      ✗ Failed to send message. Please try again.
                    </div>
                  )}
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-white/10 backdrop-blur-md rounded-xl border border-blue-500/30 p-8">
                  <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-white mb-1">Email</h3>
                        <p className="text-gray-300">akos170620250626@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Phone className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-white mb-1">Phone</h3>
                        <p className="text-gray-300">+91 92119 01927</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-white mb-1">Address</h3>
                        <p className="text-gray-300">
                          Office No 202, Second Floor,<br />
                          Rohini Complex, Prop No WA-107 & WA-121,<br />
                          Shakarpur, New Delhi,<br />
                          East Delhi, Delhi - 110092
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold text-white mb-1">Business Hours</h3>
                        <p className="text-gray-300">Monday - Saturday: 10:00 AM - 7:00 PM</p>
                        <p className="text-gray-300">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-xl border border-blue-500/30 p-8">
                  <h3 className="text-xl font-bold text-white mb-4">Quick Response</h3>
                  <p className="text-gray-300 mb-4">
                    We typically respond to all inquiries within 24 hours during business days.
                  </p>
                  <p className="text-gray-300">
                    For urgent matters, please call us directly at +91 92119 01927
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
  );
}
