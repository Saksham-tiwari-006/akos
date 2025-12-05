'use client';

import { useState, useRef } from 'react';
import { Mail, Phone, User, MessageSquare, Upload, FileText, X, CheckCircle } from 'lucide-react';

interface ServiceConsultationFormProps {
  serviceName: string;
  serviceCategory: string;
}

export default function ServiceConsultationForm({ serviceName, serviceCategory }: ServiceConsultationFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    serviceName: serviceName,
    serviceCategory: serviceCategory,
  });

  const [documents, setDocuments] = useState<File[]>([]);
  const [submitStatus, setSubmitStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const allowedFileTypes = [
    'application/pdf',
    'image/jpeg',
    'image/png',
    'image/jpg',
    'application/msword',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/vnd.ms-excel',
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  ];

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const validFiles: File[] = [];
      Array.from(files).forEach(file => {
        if (allowedFileTypes.includes(file.type) && file.size <= 10 * 1024 * 1024) {
          validFiles.push(file);
        }
      });
      setDocuments(prev => [...prev, ...validFiles].slice(0, 5)); // Max 5 files
    }
  };

  const removeDocument = (index: number) => {
    setDocuments(prev => prev.filter((_, i) => i !== index));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1024 * 1024) return (bytes / 1024).toFixed(1) + ' KB';
    return (bytes / (1024 * 1024)).toFixed(1) + ' MB';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      // Create FormData to handle file uploads
      const submitData = new FormData();
      submitData.append('name', formData.name);
      submitData.append('email', formData.email);
      submitData.append('phone', formData.phone);
      submitData.append('message', formData.message);
      submitData.append('serviceName', formData.serviceName);
      submitData.append('serviceCategory', formData.serviceCategory);
      
      // Append documents
      documents.forEach((doc, index) => {
        submitData.append(`document_${index}`, doc);
      });

      const response = await fetch('/api/service-inquiry', {
        method: 'POST',
        body: submitData,
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: '',
          serviceName: serviceName,
          serviceCategory: serviceCategory,
        });
        setDocuments([]);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-xl border border-blue-500/30 p-8">
      <h3 className="text-2xl font-bold text-white mb-6">Request Consultation</h3>
      <p className="text-gray-300 mb-6">
        Fill out the form below and our experts will get back to you within 24 hours.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-gray-200 mb-2">
            <User className="inline w-4 h-4 mr-2" />
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
            <Mail className="inline w-4 h-4 mr-2" />
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
            <Phone className="inline w-4 h-4 mr-2" />
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
            <MessageSquare className="inline w-4 h-4 mr-2" />
            Message / Additional Details
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            rows={4}
            className="w-full px-4 py-3 bg-slate-900/50 border border-blue-500/30 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
            placeholder="Tell us more about your requirements..."
          />
        </div>

        {/* Document Upload Section */}
        <div>
          <label className="block text-sm font-semibold text-gray-200 mb-2">
            <Upload className="inline w-4 h-4 mr-2" />
            Upload Documents (Optional)
          </label>
          <p className="text-xs text-gray-400 mb-3">
            Upload relevant documents (PDF, JPG, PNG, DOC, XLS). Max 5 files, 10MB each.
          </p>
          
          {/* Upload Area */}
          <div 
            className="border-2 border-dashed border-blue-500/30 rounded-lg p-6 text-center hover:border-primary/50 transition-all cursor-pointer bg-slate-900/30"
            onClick={() => fileInputRef.current?.click()}
          >
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              multiple
              accept=".pdf,.jpg,.jpeg,.png,.doc,.docx,.xls,.xlsx"
              className="hidden"
            />
            <Upload className="w-10 h-10 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-300 font-medium">Click to upload or drag and drop</p>
            <p className="text-gray-500 text-sm mt-1">PDF, JPG, PNG, DOC, XLS (Max 10MB)</p>
          </div>

          {/* Uploaded Files List */}
          {documents.length > 0 && (
            <div className="mt-4 space-y-2">
              <p className="text-sm text-gray-300 font-medium">
                Uploaded Documents ({documents.length}/5):
              </p>
              {documents.map((doc, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between bg-slate-800/50 border border-blue-500/20 rounded-lg px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-primary" />
                    <div>
                      <p className="text-sm text-white truncate max-w-[200px]">{doc.name}</p>
                      <p className="text-xs text-gray-500">{formatFileSize(doc.size)}</p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeDocument(index)}
                    className="p-1 hover:bg-red-500/20 rounded-full transition-all"
                  >
                    <X className="w-4 h-4 text-red-400" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full px-6 py-4 bg-gradient-to-r from-primary to-blue-500 text-white font-bold rounded-lg hover:from-blue-500 hover:to-primary transition-all shadow-lg shadow-primary/50 hover:shadow-primary/70 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
        >
          {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
        </button>

        {submitStatus === 'success' && (
          <div className="p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-300 text-center">
            ✓ Your inquiry has been submitted successfully! We'll contact you soon.
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 text-center">
            ✗ There was an error submitting your inquiry. Please try again.
          </div>
        )}
      </form>
    </div>
  );
}
