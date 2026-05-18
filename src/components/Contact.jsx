import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn, fadeIn } from "../utils/motion";
import { MdEmail, MdLocationOn, MdSend } from "react-icons/md";
import { BsWhatsapp, BsTelephone } from "react-icons/bs";
import { FaUser, FaPaperPlane, FaLaptopCode, FaTools, FaCommentDots, FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const sectionRef = useRef();
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  const [form, setForm] = useState({
    name: "",
    email: "",
    helpType: "Build from Scratch",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "success",
  });

  const showToast = (message, type = "success") => {
    setToast({ show: true, message, type });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, show: false }));
    }, 4500);
  };

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    setLoading(true);

    formData.append("access_key", "0979291c-ba01-42a6-83ab-fb1087b636d8");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then(
      () => {
        setLoading(false);
        showToast("Message sent successfully! I will get back to you soon.", "success");

        setForm({
          name: "",
          email: "",
          helpType: "Build from Scratch",
          message: "",
        });
      },
      (error) => {
        setLoading(false);
        console.error(error);
        showToast("Oops, something went wrong. Please try again.", "error");
      }
    );

    if (res.success) {
      console.log("Success", res);
    }
  };

  const contactInfo = [
    {
      icon: MdEmail,
      label: "Email",
      value: "m.ismaeel.developer@gmail.com",
      link: "mailto:m.ismaeel.developer@gmail.com",
      color: "#915EFF"
    },
    {
      icon: BsWhatsapp,
      label: "WhatsApp",
      value: "+92 3126086671",
      link: "https://wa.me/923126086871",
      color: "#00e9ff"
    },
    {
      icon: BsTelephone,
      label: "Phone",
      value: "+92 3176096871",
      link: "tel:+923176096871",
      color: "#4CAF50"
    }
  ];

  return (
    <motion.div
      ref={sectionRef}
      initial="hidden"
      animate={isInView ? "show" : "hidden"}
      className="relative overflow-hidden"
    >
      {/* Background Elements removed from top level to prevent spillover */}

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch justify-center py-6 lg:py-12">

        {/* Contact Info Section */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-1 max-w-lg w-full flex"
        >
          <div className="bg-tertiary/30 backdrop-blur-sm p-8 rounded-3xl border border-white/10 w-full flex flex-col justify-between gap-6 relative overflow-hidden">
            {/* Embedded Ambient Glow (Perfect Boundary Clip) */}
            <div className="absolute top-[-10%] left-[-10%] w-72 h-72 bg-[#915EFF]/10 rounded-full filter blur-3xl pointer-events-none z-0"></div>

            <motion.div
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-left relative z-10"
            >
              <p className={styles.sectionSubText}>Get in touch</p>
              <h3 className={styles.sectionHeadText}>Contact.</h3>
              <p className="mt-4 text-secondary text-[16px] leading-relaxed">
                Let's discuss your project and bring your ideas to life.
                I'm always open to new opportunities and collaborations.
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              variants={fadeIn("up", "tween", 0.5, 1)}
              className="space-y-4 relative z-10"
            >
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-black/20 backdrop-blur-sm border border-white/5 hover:border-white/20 transition-all duration-300 group"
                    whileHover={{ scale: 1.02, x: 8 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <Icon className="text-xl" style={{ color: item.color }} />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-secondary text-sm">{item.label}</p>
                      <p className="text-white font-medium break-all">{item.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Availability Status */}
            <motion.div
              variants={fadeIn("up", "tween", 0.7, 1)}
              className="p-6 rounded-2xl bg-gradient-to-r from-[#915EFF]/10 to-[#00e9ff]/10 border border-[#915EFF]/20 relative z-10"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div className="text-left">
                  <p className="text-white font-semibold">Available for work</p>
                  <p className="text-secondary text-sm">Response time: Within 24 hours</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Form Section */}
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="flex-1 max-w-lg w-full flex"
        >
          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="bg-tertiary/30 backdrop-blur-sm p-8 rounded-3xl border border-white/10 w-full flex flex-col justify-between h-full relative overflow-hidden"
          >
            {/* Embedded Ambient Glow (Perfect Boundary Clip) */}
            <div className="absolute bottom-[-10%] right-[-10%] w-72 h-72 bg-[#00e9ff]/10 rounded-full filter blur-3xl pointer-events-none z-0"></div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6 flex flex-col justify-between h-full relative z-10"
            >
              {/* Name Field */}
              <motion.div
                variants={fadeIn("up", "tween", 0.4, 1)}
                className="relative text-left"
              >
                <label className="flex items-center gap-2 text-white font-medium mb-3">
                  <FaUser className="text-[#915EFF]" />
                  Your Name
                </label>
                <input
                  type='text'
                  name='name'
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your good name?"
                  className="w-full bg-black/30 backdrop-blur-sm py-4 px-4 placeholder:text-secondary text-white rounded-xl border-2 border-white/10 focus:border-[#915EFF] focus:ring-2 focus:ring-[#915EFF]/20 focus:bg-black/50 transition-all duration-300 outline-none"
                  required
                />
              </motion.div>

              {/* Email Field */}
              <motion.div
                variants={fadeIn("up", "tween", 0.5, 1)}
                className="relative text-left"
              >
                <label className="flex items-center gap-2 text-white font-medium mb-3">
                  <MdEmail className="text-[#00e9ff]" />
                  Your Email
                </label>
                <input
                  type='email'
                  name='email'
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your web address?"
                  className="w-full bg-black/30 backdrop-blur-sm py-4 px-4 placeholder:text-secondary text-white rounded-xl border-2 border-white/10 focus:border-[#00e9ff] focus:ring-2 focus:ring-[#00e9ff]/20 focus:bg-black/50 transition-all duration-300 outline-none"
                  required
                />
              </motion.div>

              {/* Service/Help Type Selection Grid */}
              <motion.div
                variants={fadeIn("up", "tween", 0.55, 1)}
                className="relative text-left"
              >
                <label className="flex items-center gap-2 text-white font-medium mb-3">
                  <FaLaptopCode className="text-[#915EFF]" />
                  How can I help you?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    {
                      id: "Build from Scratch",
                      label: "Build from Scratch",
                      description: "New SaaS or AI System",
                      icon: FaLaptopCode,
                      color: "#915EFF",
                    },
                    {
                      id: "Modify / Upgrade",
                      label: "Modify / Upgrade",
                      description: "Add AI, scale or style",
                      icon: FaTools,
                      color: "#00e9ff",
                    },
                    {
                      id: "Consult / Other",
                      label: "Consult / Other",
                      description: "Strategy & system design",
                      icon: FaCommentDots,
                      color: "#4CAF50",
                    }
                  ].map((type) => {
                    const Icon = type.icon;
                    const isSelected = form.helpType === type.id;
                    return (
                      <label
                        key={type.id}
                        className={`flex flex-col p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 relative overflow-hidden bg-black/20 group hover:bg-black/30 ${isSelected
                            ? "shadow-[0_0_20px_rgba(145,94,255,0.15)] scale-[1.02]"
                            : "border-white/10 hover:border-white/20"
                          }`}
                        style={{
                          borderColor: isSelected ? type.color : undefined,
                          backgroundColor: isSelected ? `${type.color}08` : undefined,
                        }}
                      >
                        <input
                          type="radio"
                          name="helpType"
                          value={type.id}
                          checked={isSelected}
                          onChange={() => setForm({ ...form, helpType: type.id })}
                          className="sr-only"
                        />
                        <div className="flex items-center gap-3 mb-2">
                          <div
                            className="w-8 h-8 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                            style={{
                              backgroundColor: `${type.color}15`,
                              color: type.color,
                              border: `1px solid ${type.color}30`
                            }}
                          >
                            <Icon className="text-sm" />
                          </div>
                          <span className="text-white font-bold text-sm tracking-tight leading-tight">{type.label}</span>
                        </div>
                        <span className="text-secondary text-[11px] leading-tight mt-1 group-hover:text-gray-300 transition-colors duration-200">
                          {type.description}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </motion.div>

              {/* Message Field */}
              <motion.div
                variants={fadeIn("up", "tween", 0.6, 1)}
                className="relative text-left"
              >
                <label className="flex items-center gap-2 text-white font-medium mb-3">
                  <FaPaperPlane className="text-[#4CAF50]" />
                  Your Message
                </label>
                <textarea
                  rows={5}
                  name='message'
                  value={form.message}
                  onChange={handleChange}
                  placeholder='What you want to say?'
                  className="w-full bg-black/30 backdrop-blur-sm py-4 px-4 placeholder:text-secondary text-white rounded-xl border-2 border-white/10 focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 focus:bg-black/50 transition-all duration-300 outline-none resize-none"
                  required
                />
              </motion.div>

              {/* Submit Button */}
              <motion.button
                variants={fadeIn("up", "tween", 0.7, 1)}
                type='submit'
                disabled={loading}
                className="w-full py-4 px-6 rounded-xl bg-gradient-to-r from-[#915EFF] to-[#00e9ff] text-white font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <MdSend className="text-lg" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </div>

      {/* Premium Glassmorphic Toast Notification */}
      <AnimatePresence>
        {toast.show && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-5 right-5 z-50 flex items-center gap-3.5 px-5 py-4 rounded-2xl border backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.5)] max-w-sm"
            style={{
              backgroundColor: toast.type === "success" ? "rgba(76, 175, 80, 0.12)" : "rgba(244, 67, 54, 0.12)",
              borderColor: toast.type === "success" ? "rgba(76, 175, 80, 0.3)" : "rgba(244, 67, 54, 0.3)"
            }}
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center text-sm"
              style={{
                backgroundColor: toast.type === "success" ? "rgba(76, 175, 80, 0.2)" : "rgba(244, 67, 54, 0.2)",
                color: toast.type === "success" ? "#4CAF50" : "#F44336"
              }}
            >
              {toast.type === "success" ? <FaCheckCircle /> : <FaExclamationTriangle />}
            </div>
            <div className="text-left flex-1">
              <p className="text-white font-black text-sm tracking-wide">
                {toast.type === "success" ? "Success!" : "System Error!"}
              </p>
              <p className="text-secondary text-xs mt-0.5 font-medium leading-tight">{toast.message}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default SectionWrapper(Contact, "contact");