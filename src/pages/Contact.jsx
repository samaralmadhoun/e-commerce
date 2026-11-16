import React, { useState } from 'react';
import { MapPin, Mail, Phone, CircleCheck } from "lucide-react";

function Contact() {

const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
});

const [submitted, setSubmitted] = useState(false);

const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
};

const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
};

return (
    <div className="bg-[#070A0F] min-h-screen text-slate-100 py-12 px-6">
    <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-wider mb-3">
                Contact <span className="text-cyan-400">Us</span>
            </h1>

            <p className="text-slate-400 text-md md:text-xl">
                Have questions about our products or need technical support? We're here to help!
            </p>
        </div>

    <div className="grid grid-cols-1 md:grid-cols-2 h-240 md:h-140 gap-10 bg-[#0b0f19] border border-slate-800 p-6 translate-y-3 rounded-2xl shadow-xl"> 
        
        <div className="flex flex-col justify-between space-y-6">

            <div>
                <h3 className="text-4xl font-bold text-white mt-5 mb-5">Get in Touch</h3>
                <p className="text-slate-400 md:text-xl text-sm leading-relaxed mb-6 max-w-xs">
                    Fill out the form and our team will get back to you within 24 hours.
                </p>
            
            <div className="space-y-10 translate-y-10 text-sm">
                <div className="flex items-center gap-3 text-slate-300">
                    <span className="text-cyan-400 font-bold"><MapPin /></span>
                    <span className="md:text-xl text-2xl">Gaza, Palestine</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                    <span className="text-cyan-400 font-bold"><Mail /></span>
                    <span className="md:text-xl text-2xl">support-techhub@gmail.com</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                    <span className="text-cyan-400 font-bold"><Phone /></span>
                    <span className="md:text-xl text-2xl">+970 593 815 980</span>
                </div>
            </div>
            </div>

        </div>

        {/* Form */}
        <div>
            {submitted ? (
            <div className="bg-cyan-950/40 border border-cyan-500/40 text-cyan-300 p-6 rounded-xl text-center flex flex-col items-center justify-center h-full">
                <span className="text-3xl w-15 mb-7"><CircleCheck size={60} /></span>
                <h4 className="font-bold text-4xl mb-5">Thank You!</h4>
                <p className="text-md text-slate-300">Your message has been sent successfully.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10 mt-10">
                <div>
                  <label className="block text-md font-semibold text-slate-300 mb-2 mx-1">Your Name</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="" 
                    className="w-full bg-[#070A0F] border border-slate-800 rounded-xl px-5 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-md font-semibold text-slate-300 mb-1 mx-1">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="" 
                    className="w-full bg-[#070A0F] border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-md font-semibold text-slate-300 mb-1 mx-1">Message</label>
                  <textarea 
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="" 
                    className="w-full bg-[#070A0F] border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-cyan-500 hover:bg-cyan-400 cursor-pointer text-slate-950 font-bold py-2.5 rounded-xl text-sm transition-colors shadow-lg"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default Contact;