import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import { SERVICE_INTERESTS } from '../../utils/constants';
import { validateEmail } from '../../utils/helpers';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: '',
    message: '',
    privacyAgreed: false
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(''); // 'submitting', 'success', 'error'

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.fullName || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.serviceInterest) {
      newErrors.serviceInterest = 'Please select a service';
    }

    if (!formData.message || formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    if (!formData.privacyAgreed) {
      newErrors.privacyAgreed = 'You must agree to the privacy policy';
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Submit
    setStatus('submitting');

    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      setStatus('success');

      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          company: '',
          serviceInterest: '',
          message: '',
          privacyAgreed: false
        });
        setStatus('');
      }, 3000);
    }, 1500);
  };

  return (
    <motion.form
      className="contact-form"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className="form-title">Send Us a Message</h3>

      {/* Full Name */}
      <div className="form-group">
        <label htmlFor="fullName" className="form-label">
          Full Name <span className="required">*</span>
        </label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          className={`form-input ${errors.fullName ? 'error' : ''}`}
          placeholder="John Smith"
          value={formData.fullName}
          onChange={handleChange}
        />
        {errors.fullName && <span className="error-message">{errors.fullName}</span>}
      </div>

      {/* Email */}
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email Address <span className="required">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className={`form-input ${errors.email ? 'error' : ''}`}
          placeholder="john.smith@company.com"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span className="error-message">{errors.email}</span>}
      </div>

      {/* Phone */}
      <div className="form-group">
        <label htmlFor="phone" className="form-label">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="form-input"
          placeholder="+971 XX XXX XXXX"
          value={formData.phone}
          onChange={handleChange}
        />
      </div>

      {/* Company */}
      <div className="form-group">
        <label htmlFor="company" className="form-label">
          Company Name
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="form-input"
          placeholder="Your Company"
          value={formData.company}
          onChange={handleChange}
        />
      </div>

      {/* Service Interest */}
      <div className="form-group">
        <label htmlFor="serviceInterest" className="form-label">
          Service Interest <span className="required">*</span>
        </label>
        <select
          id="serviceInterest"
          name="serviceInterest"
          className={`form-select ${errors.serviceInterest ? 'error' : ''}`}
          value={formData.serviceInterest}
          onChange={handleChange}
        >
          <option value="">Select a service...</option>
          {SERVICE_INTERESTS.map((service, index) => (
            <option key={index} value={service}>
              {service}
            </option>
          ))}
        </select>
        {errors.serviceInterest && <span className="error-message">{errors.serviceInterest}</span>}
      </div>

      {/* Message */}
      <div className="form-group">
        <label htmlFor="message" className="form-label">
          Message <span className="required">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          className={`form-textarea ${errors.message ? 'error' : ''}`}
          placeholder="Tell us about your requirements..."
          rows="5"
          value={formData.message}
          onChange={handleChange}
        />
        {errors.message && <span className="error-message">{errors.message}</span>}
      </div>

      {/* Privacy Checkbox */}
      <div className="form-group-checkbox">
        <input
          type="checkbox"
          id="privacyAgreed"
          name="privacyAgreed"
          className="form-checkbox"
          checked={formData.privacyAgreed}
          onChange={handleChange}
        />
        <label htmlFor="privacyAgreed" className="checkbox-label">
          I agree to the <a href="/privacy">privacy policy</a> and{' '}
          <a href="/terms">terms of service</a> <span className="required">*</span>
        </label>
        {errors.privacyAgreed && <span className="error-message-block">{errors.privacyAgreed}</span>}
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        variant="primary"
        size="large"
        disabled={status === 'submitting'}
        className="form-submit"
      >
        {status === 'submitting' && 'Sending...'}
        {status === 'success' && 'Message Sent! ✓'}
        {status === '' && 'Send Message'}
        {status === 'error' && 'Try Again'}
      </Button>

      {/* Success Message */}
      {status === 'success' && (
        <motion.div
          className="success-message"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Thank you! We'll get back to you within 24 hours.
        </motion.div>
      )}
    </motion.form>
  );
};

export default ContactForm;
