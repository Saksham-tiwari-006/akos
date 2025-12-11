'use client';

import { useState } from 'react';
import FileUpload from './FileUpload';

interface RegistrationFormProps {
  title: string;
  description: string;
  serviceType: string;
}

export default function RegistrationForm({ title, description, serviceType }: RegistrationFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    message: '',
  });
  const [file, setFile] = useState<File | null>(null);
  const [submitStatus, setSubmitStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');
    
    // Create FormData for file upload with Cloudinary
    const formDataToSend = new FormData();
    formDataToSend.append('service', serviceType);
    formDataToSend.append('name', formData.fullName);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('message', formData.message || '');
    
    // Add company name to message if provided
    if (formData.companyName) {
      const messageWithCompany = `Company: ${formData.companyName}\n${formData.message || ''}`.trim();
      formDataToSend.set('message', messageWithCompany);
    }
    
    // Add file if uploaded
    if (file) {
      formDataToSend.append('file', file);
    }

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        body: formDataToSend,
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus('Enquiry submitted successfully! We will contact you soon.');
        setFormData({ fullName: '', email: '', phone: '', companyName: '', message: '' });
        setFile(null);
        setTimeout(() => setSubmitStatus(''), 5000);
      } else {
        setSubmitStatus(result.message || 'Failed to submit enquiry. Please try again.');
        console.error('Submission error:', result);
      }
    } catch (error) {
      setSubmitStatus('Error submitting enquiry. Please try again.');
      console.error('Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg shadow-md sticky top-28">
      <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">{description}</p>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="fullName">
            Full Name *
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-primary focus:border-primary"
            id="fullName"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="John Doe"
            type="text"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="email">
            Email Address *
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-primary focus:border-primary"
            id="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="you@example.com"
            type="email"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="phone">
            Phone Number *
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-primary focus:border-primary"
            id="phone"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+91 9876543210"
            type="tel"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="companyName">
            Company Name (if applicable)
          </label>
          <input
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-primary focus:border-primary"
            id="companyName"
            value={formData.companyName}
            onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
            placeholder="Your Company Name"
            type="text"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="message">
            Additional Information
          </label>
          <textarea
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-primary focus:border-primary"
            id="message"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell us more about your requirements..."
            rows={4}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Upload Documents (Optional)
          </label>
          <FileUpload onFileSelect={setFile} />
        </div>
        <button
          className="w-full bg-primary text-white font-semibold py-3 px-4 rounded-lg shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
        </button>
        {submitStatus && (
          <p className={`text-sm ${submitStatus.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
            {submitStatus}
          </p>
        )}
      </form>
    </div>
  );
}
