"use client";

import { useForm, ValidationError } from "@formspree/react";
import { useState, useRef } from "react";

// Ensure environment variable is accessible
const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || "xbldngvk"; // Fallback to your ID

export default function ContactForm() {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form behavior

    await handleSubmit(event);
    if (state.succeeded) {
    setShowSuccessMessage(true);

    // Clear form inputs
    if (formRef.current) {
        formRef.current.reset();
    }

    // Hide success message after 5 seconds
    setTimeout(() => setShowSuccessMessage(false), 5000);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleFormSubmit} className="space-y-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            required
            placeholder="Your name"
            className="w-full rounded-md border border-slate-800 bg-slate-950/50 px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            required
            placeholder="Your email"
            className="w-full rounded-md border border-slate-800 bg-slate-950/50 px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">Subject</label>
        <input
          id="subject"
          type="text"
          name="subject"
          required
          placeholder="Subject"
          className="w-full rounded-md border border-slate-800 bg-slate-950/50 px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Your message"
          className="w-full rounded-md border border-slate-800 bg-slate-950/50 px-3 py-2 text-sm placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        ></textarea>
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </div>

      <button 
        type="submit" 
        disabled={state.submitting} 
        className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md"
      >
        {state.submitting ? "Sending..." : "Send Message"}
      </button>

      {/* Success Message */}
      {showSuccessMessage && (
        <p className="text-green-400 mt-2 text-center font-semibold bg-green-900/20 p-2 rounded-md">
          ✅ Thanks for reaching out! I'll get back to you soon. 🚀
        </p>
      )}
    </form>
  );
}