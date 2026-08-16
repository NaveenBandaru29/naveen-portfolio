"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Phone,
  Mail,
  MapPin,
  Send,
  Sparkles,
  MessageSquare,
  Clock,
  CheckCircle2,
  ExternalLink,
  ArrowUpRight
} from "lucide-react";

const contactCards = [
  {
    icon: <Phone size={22} className="text-accent" />,
    title: "Phone",
    value: "(+91) 93908 08403",
    actionText: "Call Direct",
    href: "tel:+919390808403",
  },
  {
    icon: <Mail size={22} className="text-accent" />,
    title: "Email",
    value: "bandarun784@gmail.com",
    actionText: "Send Mail",
    href: "mailto:bandarun784@gmail.com",
  },
  {
    icon: <MapPin size={22} className="text-accent" />,
    title: "Location",
    value: "Hyderabad, Telangana, India",
    actionText: "UTC+5:30 (IST)",
    href: null,
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Inquiry: ${formData.service || 'General Contact'}`);
    const body = encodeURIComponent(
      `Name: ${formData.firstname} ${formData.lastname}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:bandarun784@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.2, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-8 pb-16"
    >
      <div className="container mx-auto">
        {/* Page Header */}
        <div className="mb-10">
          <div className="flex items-center gap-2 text-accent text-sm uppercase tracking-widest font-mono mb-3">
            <Sparkles size={16} />
            <span>Get in Touch</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight mb-3">
            Let's <span className="text-accent">Connect & Collaborate</span>
          </h1>
          <p className="text-white/60 text-sm leading-relaxed max-w-2xl">
            Have a project in mind, an opportunity to discuss, or just want to connect? Send a message or reach out directly.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 xl:gap-14">
          {/* Contact Form Card */}
          <div className="lg:w-[58%] order-2 lg:order-none">
            <div className="bg-[#27272c] border border-white/10 rounded-2xl p-5 sm:p-8 lg:p-10 shadow-xl">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div>
                  <div className="flex items-center gap-2 text-accent font-mono text-xs uppercase mb-1">
                    <MessageSquare size={14} />
                    <span>Send a Direct Message</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Let's build something exceptional</h3>
                  <p className="text-white/60 text-xs sm:text-sm mt-1 leading-relaxed">
                    Fill out the details below and I'll get back to you promptly.
                  </p>
                </div>

                {/* Form Inputs Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/70 text-xs font-mono block mb-1.5">First Name</label>
                    <Input
                      type="text"
                      placeholder="e.g. John"
                      required
                      value={formData.firstname}
                      onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
                      className="bg-[#1c1c22] border-white/10 focus-visible:border-accent text-white"
                    />
                  </div>
                  <div>
                    <label className="text-white/70 text-xs font-mono block mb-1.5">Last Name</label>
                    <Input
                      type="text"
                      placeholder="e.g. Doe"
                      value={formData.lastname}
                      onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
                      className="bg-[#1c1c22] border-white/10 focus-visible:border-accent text-white"
                    />
                  </div>
                  <div>
                    <label className="text-white/70 text-xs font-mono block mb-1.5">Email Address</label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-[#1c1c22] border-white/10 focus-visible:border-accent text-white"
                    />
                  </div>
                  <div>
                    <label className="text-white/70 text-xs font-mono block mb-1.5">Phone Number</label>
                    <Input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-[#1c1c22] border-white/10 focus-visible:border-accent text-white"
                    />
                  </div>
                </div>

                {/* Service Selection */}
                <div>
                  <label className="text-white/70 text-xs font-mono block mb-1.5">Topic / Service of Interest</label>
                  <Select onValueChange={(val) => setFormData({ ...formData, service: val })}>
                    <SelectTrigger className="w-full bg-[#1c1c22] border-white/10 text-white/80">
                      <SelectValue placeholder="Select an area of interest" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#1c1c22] border-white/15 text-white">
                      <SelectGroup>
                        <SelectLabel className="text-accent font-mono text-xs">Area of Discussion</SelectLabel>
                        <SelectItem value="Full-Stack Web Development">Full-Stack Web Application</SelectItem>
                        <SelectItem value="Cross-Platform Mobile App">Cross-Platform Mobile App (React Native)</SelectItem>
                        <SelectItem value="Frontend Architecture & UI">Frontend UI / Design Engineering</SelectItem>
                        <SelectItem value="Full-Time Engineering Role">Full-Time Career Opportunity</SelectItem>
                        <SelectItem value="Consulting or General Inquiry">Consulting / General Collaboration</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                {/* Message Textarea */}
                <div>
                  <label className="text-white/70 text-xs font-mono block mb-1.5">Your Message</label>
                  <Textarea
                    className="h-[140px] bg-[#1c1c22] border-white/10 focus-visible:border-accent text-white resize-none"
                    placeholder="Tell me about your project scope, requirements, or idea..."
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                {/* Submit Button */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto bg-accent hover:bg-accent-hover text-primary font-mono text-xs uppercase font-bold tracking-wider flex items-center justify-center gap-2 shadow-lg shadow-accent/15 transition-all duration-300"
                  >
                    <span>Send Message</span>
                    <Send size={14} />
                  </Button>
                  <span className="text-white/40 text-[11px] font-mono flex items-center gap-1">
                    <Clock size={12} className="text-accent" />
                    <span>Quick response within 24h</span>
                  </span>
                </div>
              </form>
            </div>
          </div>

          {/* Contact Information & Action Cards */}
          <div className="flex-1 flex flex-col justify-between order-1 lg:order-none gap-6">
            <div className="space-y-4">
              {contactCards.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#27272c] border border-white/10 hover:border-accent/40 rounded-2xl p-5 sm:p-6 transition-all duration-300 flex items-center justify-between gap-4 group"
                >
                  <div className="flex items-center gap-4 min-w-0">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-white/50 text-xs font-mono">{item.title}</p>
                      <h3 className="text-sm sm:text-base font-semibold text-white truncate">
                        {item.value}
                      </h3>
                    </div>
                  </div>

                  {item.href ? (
                    <a
                      href={item.href}
                      className="shrink-0 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-accent hover:text-primary border border-white/10 text-white/80 font-mono text-xs flex items-center gap-1.5 transition-all duration-300"
                    >
                      <span>{item.actionText}</span>
                      <ArrowUpRight size={13} />
                    </a>
                  ) : (
                    <span className="shrink-0 px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-white/50 font-mono text-[11px]">
                      {item.actionText}
                    </span>
                  )}
                </div>
              ))}
            </div>

            {/* Availability / Status Card */}
            <div className="bg-gradient-to-br from-[#0f2438] via-[#161c28] to-[#27272c] border border-accent/30 rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                <span className="text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
                  Open to Opportunities
                </span>
              </div>
              <h4 className="text-lg font-bold text-white mb-1.5">
                Ready for Full-Time Roles & Consulting
              </h4>
              <p className="text-white/70 text-xs leading-relaxed mb-4">
                Available to join dynamic engineering teams or build end-to-end full stack web and mobile solutions.
              </p>
              <div className="flex items-center gap-2 text-xs text-white/60 font-mono">
                <CheckCircle2 size={14} className="text-accent" />
                <span>Hyderabad • Remote • Relocation Friendly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
