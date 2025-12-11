'use client';

import { useState } from 'react';

interface GetStartedFormProps {
  serviceName: string;
  serviceCategory?: string;
}

export default function GetStartedForm({ serviceName, serviceCategory }: GetStartedFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.size <= 10 * 1024 * 1024) {
      setFile(selectedFile);
    } else {
      alert('File size must be less than 10MB');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    const formDataToSend = new FormData();
    formDataToSend.append('service', serviceName);
    if (serviceCategory) formDataToSend.append('serviceCategory', serviceCategory);
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('message', formData.message);
    if (file) formDataToSend.append('file', file);

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setFile(null);
        setTimeout(() => setSubmitStatus(''), 5000);
      } else {
        setSubmitStatus('error');
        console.error('Submission error:', result);
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="sticky top-8">
      <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 border border-white/20">
        <h3 className="text-2xl font-bold mb-6 text-white">Get Started Today</h3>
        <p className="text-gray-300 mb-6 text-sm">
          Fill out the form below and our experts will contact you within 24 hours.
        </p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-gray-200">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              required
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d9cf5] text-white placeholder-gray-500"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-200">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d9cf5] text-white placeholder-gray-500"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-2 text-gray-200">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              required
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d9cf5] text-white placeholder-gray-500"
              placeholder="+91 1234567890"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-200">
              Message (Optional)
            </label>
            <textarea
              id="message"
              rows={4}
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d9cf5] text-white placeholder-gray-500"
              placeholder="Tell us more about your requirements..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <div>
            <label htmlFor="file" className="block text-sm font-medium mb-2 text-gray-200">
              Upload Document (Optional)
            </label>
            <input
              type="file"
              id="file"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              className="w-full px-4 py-2 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3d9cf5] text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-[#3d9cf5] file:text-white file:cursor-pointer hover:file:bg-[#2d8ce5]"
              onChange={handleFileChange}
            />
            <p className="text-xs text-gray-400 mt-1">Max file size: 10MB (PDF, DOC, DOCX, JPG, PNG)</p>
            {file && (
              <p className="text-xs text-green-400 mt-1">✓ {file.name} selected</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-[#3d9cf5] to-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:from-blue-500 hover:to-[#3d9cf5] transition-all shadow-lg shadow-[#3d9cf5]/50 hover:shadow-[#3d9cf5]/70 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
          </button>

          {submitStatus === 'success' && (
            <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 text-center text-sm">
              ✓ Your enquiry has been submitted successfully! We'll contact you soon.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 text-center text-sm">
              ✗ There was an error submitting your enquiry. Please try again.
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
