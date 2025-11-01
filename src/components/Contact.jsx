import React, { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn, fadeIn } from "../utils/motion";
import { MdEmail, MdLocationOn, MdSend } from "react-icons/md";
import { BsWhatsapp, BsTelephone } from "react-icons/bs";
import { FaUser, FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  const formRef = useRef();
  const sectionRef = useRef();
  const isInView = useInView(sectionRef, { once: true, threshold: 0.2 });

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

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
        alert("Thank you. I will get back to you as soon as possible.");

        setForm({
          name: "",
          email: "",
          message: "",
        });
      },
      (error) => {
        setLoading(false);
        console.error(error);
        alert("Ahh, something went wrong. Please try again.");
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
      value: "+92 3176096871",
      link: "https://api.whatsapp.com/send/?phone=3176096871&text&app_absent=0&lang=en",
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
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#915EFF] rounded-full filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-80 h-70 bg-[#00e9ff] rounded-full filter blur-3xl opacity-5"></div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center justify-center min-h-screen py-12">

        {/* Contact Info Section */}
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-1 max-w-lg w-full"
        >
          <div className="space-y-8">
            <motion.div
              variants={fadeIn("up", "tween", 0.3, 1)}
              className="text-center lg:text-left"
            >
              <p className={styles.sectionSubText}>Get in touch</p>
              <h3 className={styles.sectionHeadText}>Contact.</h3>
              <p className="mt-4 text-secondary text-lg leading-relaxed">
                Let's discuss your project and bring your ideas to life.
                I'm always open to new opportunities and collaborations.
              </p>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              variants={fadeIn("up", "tween", 0.5, 1)}
              className="space-y-4"
            >
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-2xl bg-tertiary/30 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300 group"
                    whileHover={{ scale: 1.02, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                      style={{ backgroundColor: `${item.color}20` }}
                    >
                      <Icon className="text-xl" style={{ color: item.color }} />
                    </div>
                    <div className="flex-1">
                      <p className="text-secondary text-sm">{item.label}</p>
                      <p className="text-white font-medium">{item.value}</p>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>

            {/* Availability Status */}
            <motion.div
              variants={fadeIn("up", "tween", 0.7, 1)}
              className="p-6 rounded-2xl bg-gradient-to-r from-[#915EFF]/10 to-[#00e9ff]/10 border border-[#915EFF]/20"
            >
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
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
          className="flex-1 max-w-lg w-full"
        >
          <motion.div
            variants={fadeIn("up", "tween", 0.3, 1)}
            className="bg-tertiary/30 backdrop-blur-sm p-8 rounded-3xl border border-white/10"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Name Field */}
              <motion.div
                variants={fadeIn("up", "tween", 0.4, 1)}
                className="relative"
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
                  className="w-full bg-black/30 backdrop-blur-sm py-4 px-4 placeholder:text-secondary text-white rounded-xl border-2 border-white/10 focus:border-[#915EFF] focus:bg-black/50 transition-all duration-300 outline-none"
                  required
                />
              </motion.div>

              {/* Email Field */}
              <motion.div
                variants={fadeIn("up", "tween", 0.5, 1)}
                className="relative"
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
                  className="w-full bg-black/30 backdrop-blur-sm py-4 px-4 placeholder:text-secondary text-white rounded-xl border-2 border-white/10 focus:border-[#00e9ff] focus:bg-black/50 transition-all duration-300 outline-none"
                  required
                />
              </motion.div>

              {/* Message Field */}
              <motion.div
                variants={fadeIn("up", "tween", 0.6, 1)}
                className="relative"
              >
                <label className="flex items-center gap-2 text-white font-medium mb-3">
                  <FaPaperPlane className="text-[#4CAF50]" />
                  Your Message
                </label>
                <textarea
                  rows={6}
                  name='message'
                  value={form.message}
                  onChange={handleChange}
                  placeholder='What you want to say?'
                  className="w-full bg-black/30 backdrop-blur-sm py-4 px-4 placeholder:text-secondary text-white rounded-xl border-2 border-white/10 focus:border-[#4CAF50] focus:bg-black/50 transition-all duration-300 outline-none resize-none"
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
    </motion.div>
  );
};

export default SectionWrapper(Contact, "contact");