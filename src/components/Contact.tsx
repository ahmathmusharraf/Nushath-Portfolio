import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, Linkedin, Mail, CheckCircle2, AlertTriangle, Shield, Clock, ArrowUpRight } from "lucide-react";
import { PERSONAL_INFO } from "../data";
import { ContactMessage } from "../types";

export default function Contact() {
  const [formData, setFormData] = useState<ContactMessage>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [formErrors, setFormErrors] = useState<Partial<ContactMessage>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name as keyof ContactMessage]) {
      setFormErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const errors: Partial<ContactMessage> = {};
    if (!formData.name.trim()) errors.name = "Required";
    if (!formData.email.trim()) {
      errors.email = "Required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Invalid format";
    }
    if (!formData.subject.trim()) errors.subject = "Required";
    if (!formData.message.trim()) errors.message = "Required";
    return errors;
  };

  const handleInquiryAction = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);

    const subjectLine = encodeURIComponent(`[Strategic Alliance] ${formData.subject}`);
    const emailBody = encodeURIComponent(
      `Hello Nushath,\n\n` +
      `I would like to explore a potential collaboration. Here are my inquiry registration details:\n\n` +
      `Name: ${formData.name}\n` +
      `Email Reference: ${formData.email}\n` +
      `Subject / Purpose: ${formData.subject}\n\n` +
      `---------------- MESSAGE DETAILS ----------------\n` +
      `${formData.message}\n` +
      `-------------------------------------------------\n\n` +
      `Looking forward to connecting soon.\n\n` +
      `Best regards,\n` +
      `${formData.name}`
    );
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${subjectLine}&body=${emailBody}`;

    setTimeout(() => {
      window.location.href = mailtoUrl;
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="relative py-12 sm:py-14 bg-[#030303] dark:bg-[#030303] light:bg-[#ffffff] text-white dark:text-white light:text-black overflow-hidden border-t border-white/5"
    >
      {/* Subtle details */}
      <div className="absolute inset-0 z-0 bg-dots opacity-10 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] bg-[#d4af37]/5 rounded-full blur-[90px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10"
      >
        
        {/* Compact section header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-5 lg:mb-6 gap-2">
          <div className="text-left">
            <div className="flex items-center space-x-1.5">
              <span className="p-0.5 rounded bg-[#d4af37]/15 border border-[#d4af37]/25 text-[#d4af37]">
                <Shield size={11} />
              </span>
              <p className="text-[9px] font-mono tracking-widest text-[#d4af37] uppercase">SECURE NETWORK INTAKE</p>
            </div>
            <h2 className="text-xl sm:text-2xl font-display font-extrabold tracking-tight mt-0.5 text-white dark:text-white light:text-gray-900">
              Direct Contact & Portals
            </h2>
          </div>
          <p className="text-[10px] font-mono text-gray-500 max-w-xs sm:text-right leading-tight">
            Initiate communication with Executive Advisory & Technical desks.
          </p>
        </div>

        {/* Small & Unique Integrated Console Grid */}
        <div className="max-w-4xl mx-auto rounded-2xl border border-white/5 dark:border-white/5 light:border-black/5 bg-gradient-to-b from-white/[0.01] to-[#d4af37]/[0.01] overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 md:divide-x md:divide-white/5 dark:md:divide-white/5 light:md:divide-black/5">
            
            {/* Left Column: Instant Identity & Portal Touchpoints */}
            <div className="p-5 md:col-span-5 flex flex-col justify-between text-left space-y-6">
              
              {/* Profile Block */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-full ring-2 ring-[#d4af37]/25 p-0.5 bg-[#030303] flex-shrink-0 relative">
                    <img
                      src={PERSONAL_INFO.avatar}
                      alt={PERSONAL_INFO.name}
                      className="w-full h-full rounded-full object-cover object-top"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                    />
                    <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-emerald-400 ring-2 ring-[#030303] animate-pulse" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-sm text-white dark:text-white light:text-black leading-tight">
                      {PERSONAL_INFO.name}
                    </h3>
                    <p className="text-[9px] font-mono text-[#d4af37] tracking-wider uppercase mt-0.5">
                      Technical & Strategic Lead
                    </p>
                  </div>
                </div>

                <p className="text-[11px] text-gray-400 leading-relaxed font-sans">
                  Connect with me around systems engineering, joint-ventures, private-equity strategic options, or general professional interactions.
                </p>
              </div>

              {/* Action Channels */}
              <div className="space-y-2.5">
                {/* LinkedIn Badge */}
                <a
                  id="contact-linkedin-direct-link"
                  href={PERSONAL_INFO.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-between p-2.5 rounded-lg bg-blue-500/5 hover:bg-blue-500/10 border border-blue-500/15 transition-all text-xs group"
                >
                  <div className="flex items-center space-x-2">
                    <span className="p-1 rounded bg-blue-500/10 text-blue-400">
                      <Linkedin size={12} />
                    </span>
                    <span className="font-semibold text-white dark:text-white light:text-gray-900">LinkedIn Profile</span>
                  </div>
                  <div className="flex items-center space-x-1 font-mono text-[9px] text-[#d4af37]">
                    <span>Verified</span>
                    <ArrowUpRight size={10} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </a>

                {/* Email Direct */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="w-full flex items-center justify-between p-2.5 rounded-lg bg-white/[0.02] hover:bg-white/[0.05] border border-white/5 dark:border-white/5 light:border-black/5 transition-all text-xs"
                >
                  <div className="flex items-center space-x-2">
                    <span className="p-1 rounded bg-[#d4af37]/10 text-[#d4af37]">
                      <Mail size={12} />
                    </span>
                    <span className="font-mono text-[10px] text-gray-300 dark:text-gray-300 light:text-gray-700 truncate max-w-[130px]">
                      {PERSONAL_INFO.email}
                    </span>
                  </div>
                  <span className="font-mono text-[8px] text-gray-500 tracking-widest uppercase">DIRECT</span>
                </a>
              </div>

              {/* Stats Footer (Response Time) */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[9px] font-mono text-gray-500">
                <div className="flex items-center space-x-1.5">
                  <Clock size={10} className="text-emerald-400" />
                  <span>Response: &lt; 24 Hrs</span>
                </div>
                <span>SSL Encrypted</span>
              </div>

            </div>

            {/* Right Column: Secure Input Console */}
            <div className="p-5 md:col-span-7 flex flex-col justify-center bg-black/20">
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form
                    key="mini-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleInquiryAction}
                    className="space-y-4 text-left"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name input */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <label className="text-[10px] font-mono uppercase tracking-wider text-gray-400">Representative Name</label>
                          {formErrors.name && (
                            <span className="text-[9px] font-mono text-red-400">{formErrors.name}</span>
                          )}
                        </div>
                        <input
                          id="input-contact-name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Your Name"
                          className={`w-full text-xs font-sans px-3 py-2 rounded-lg bg-[#0d0d12]/90 text-white border transition-all focus:outline-none ${
                            formErrors.name 
                              ? "border-red-500/50 focus:border-red-500" 
                              : "border-white/10 focus:border-[#d4af37]"
                          }`}
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <label className="text-[10px] font-mono uppercase tracking-wider text-gray-400">Communication Email</label>
                          {formErrors.email && (
                            <span className="text-[9px] font-mono text-red-400">{formErrors.email}</span>
                          )}
                        </div>
                        <input
                          id="input-contact-email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="client@venture.com"
                          className={`w-full text-xs font-sans px-3 py-2 rounded-lg bg-[#0d0d12]/90 text-white border transition-all focus:outline-none ${
                            formErrors.email 
                              ? "border-red-500/50 focus:border-red-500" 
                              : "border-white/10 focus:border-[#d4af37]"
                          }`}
                        />
                      </div>
                    </div>

                    {/* Subject/Purpose input */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <label className="text-[10px] font-mono uppercase tracking-wider text-gray-400">Inquiry Purpose / Venture Title</label>
                        {formErrors.subject && (
                          <span className="text-[9px] font-mono text-red-400">{formErrors.subject}</span>
                        )}
                      </div>
                      <input
                        id="input-contact-subject"
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        placeholder="Alliance Proposal / Advisory Requirement"
                        className={`w-full text-xs font-sans px-3 py-2 rounded-lg bg-[#0d0d12]/90 text-white border transition-all focus:outline-none ${
                          formErrors.subject 
                            ? "border-red-500/50 focus:border-red-500" 
                            : "border-white/10 focus:border-[#d4af37]"
                        }`}
                      />
                    </div>

                    {/* Message detail area */}
                    <div className="space-y-1">
                      <div className="flex items-center justify-between">
                        <label className="text-[10px] font-mono uppercase tracking-wider text-gray-400">Brief Message Description</label>
                        {formErrors.message && (
                          <span className="text-[9px] font-mono text-red-400">{formErrors.message}</span>
                        )}
                      </div>
                      <textarea
                        id="input-contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={3}
                        placeholder="Detail your request, timeline or scope of technical consulting requirement..."
                        className={`w-full text-xs font-sans px-3 py-2 rounded-lg bg-[#0d0d12]/90 text-white border transition-all focus:outline-none resize-none ${
                          formErrors.message 
                            ? "border-red-500/50 focus:border-red-500" 
                            : "border-white/10 focus:border-[#d4af37]"
                        }`}
                      />
                    </div>

                    {/* Submit Action */}
                    <button
                      id="btn-contact-submit"
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center space-x-2 py-2.5 px-4 rounded-lg bg-gradient-to-r from-[#d4af37] to-amber-600 hover:from-white hover:to-white text-black hover:text-black font-bold text-[11px] tracking-wide uppercase transition-all duration-300 disabled:opacity-50 cursor-pointer select-none active:scale-95 hover:shadow-lg hover:shadow-amber-500/15"
                    >
                      {isSubmitting ? (
                        <>
                          <svg className="animate-spin h-3.5 w-3.5 text-black" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                          </svg>
                          <span>Packaging Transmission...</span>
                        </>
                      ) : (
                        <>
                          <Send size={11} />
                          <span>Transmit Secure Courier</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-6 space-y-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <CheckCircle2 size={24} className="animate-pulse" />
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="font-display font-extrabold text-sm text-white">
                        Inquiry Compiled!
                      </h3>
                      <p className="text-[11px] text-gray-400 max-w-sm mx-auto leading-relaxed">
                        Your secure courier has been prepared. Please review and hit <strong>Send</strong> in your pre-launched email client to target <strong>{PERSONAL_INFO.email}</strong>.
                      </p>
                    </div>

                    <button
                      id="btn-return-form"
                      onClick={() => setIsSuccess(false)}
                      className="px-4 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 text-[10px] font-mono text-[#d4af37] transition-all"
                    >
                      Reset Form
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>

      </motion.div>
    </section>
  );
}
