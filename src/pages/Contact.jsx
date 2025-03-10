import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

function Contact() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  return (
    <div className="pt-24  px-3 lg:px-2 min-h-screen bg-white overflow-hidden">
      {/* Hero Section with Background Image and Overlay Text */}
      <section
        className="relative h-[500px] lg:h-screen flex items-center justify-center bg-cover bg-center my-4 mx-3 lg:my-3 lg:mx-12 rounded-3xl"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          filter: "grayscale(100%)",
        }}
      >
        <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>
        <div className="relative z-10 text-center px-6 lg:px-12">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-5xl lg:text-9xl font-black text-white uppercase mb-20 tracking-widest text-wrap"
          >
            CONTACT US
          </motion.h1>
        </div>
      </section>

      {/* Quote Form Section */}
      <section className="py-32 relative">
        <div className="w-full flex items-center justify-center text-center">
          <motion.div
            className="w-full max-w-5xl"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-mw-black uppercase mb-10 tracking-widest text-center text-nowrap">
              Request Quote
            </h2>
            <form className="space-y-6 bg-gradient-to-br from-mw-forest/20 to-mw-black/10 backdrop-blur-md py-10 px-2 rounded-3xl shadow-lg shadow-mw-gold/20">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 rounded-full bg-mw-black/10 text-mw-black border-none focus:outline-none placeholder-mw-black/50 text-lg"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 rounded-full bg-mw-black/10 text-mw-black border-none focus:outline-none placeholder-mw-black/50 text-lg"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Business Name"
                  className="w-full p-4 rounded-full bg-mw-black/10 text-mw-black border-none focus:outline-none placeholder-mw-black/50 text-lg"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full p-4 rounded-full bg-mw-black/10 text-mw-black border-none focus:outline-none placeholder-mw-black/50 text-lg"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <select
                  className="w-full p-4 rounded-full bg-mw-black/10 text-mw-black border-none focus:outline-none text-lg"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Type of Service
                  </option>
                  <option value="schoolboost">SchoolBoost Package</option>
                  <option value="business360">Business360 Package</option>
                  <option value="consultancy">Digital Consultancy</option>
                  <option value="standalone">Standalone Services</option>
                </select>
                <select
                  className="w-full p-4 rounded-full bg-mw-black/10 text-mw-black border-none focus:outline-none text-lg"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select Budget Range
                  </option>
                  <option value="under-500">Under $500</option>
                  <option value="500-1000">$500 - $1,000</option>
                  <option value="1000-2000">$1,000 - $2,000</option>
                  <option value="above-2000">Above $2,000</option>
                </select>
              </div>
              <textarea
                placeholder="Tell us about your project"
                className="w-full p-4 rounded-2xl bg-mw-black/10 text-mw-black border-none focus:outline-none placeholder-mw-black/50 h-40 text-lg"
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-mw-gold text-white px-12 py-5 text-sm lg:text-xl font-semibold uppercase tracking-widest text-nowrap rounded-full hover:bg-mw-gold hover:text-mw-black transition-all duration-300"
              >
                Submit Quote Request
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="py-12 lg:py-32 relative overflow-hidden px-10">
        <div className="w-full flex flex-col lg:flex-row items-stretch justify-between gap-16">
          {/* Contact Form Section */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col min-h-full"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-mw-black uppercase mb-10 tracking-widest text-center">
              Get in Touch
            </h2>
            <form className="flex flex-col flex-grow space-y-6 bg-gradient-to-br from-mw-forest/20 to-mw-black/10 backdrop-blur-md py-10 px-2 rounded-3xl shadow-lg shadow-mw-gold/20">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-4 rounded-full bg-mw-black/10 text-mw-black border-none focus:outline-none placeholder-mw-black/50 text-lg"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-4 rounded-full bg-mw-black/10 text-mw-black border-none focus:outline-none placeholder-mw-black/50 text-lg"
              />
              <textarea
                placeholder="Message"
                className="w-full p-4 rounded-2xl bg-mw-black/10 text-mw-black border-none focus:outline-none placeholder-mw-black/50 h-32 text-lg"
              ></textarea>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-mw-gold text-white px-12 py-5 text-sm lg:text-xl font-semibold uppercase tracking-widest text-nowrap rounded-full hover:bg-mw-gold hover:text-mw-black transition-all duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Location Section */}
          <motion.div
            className="w-full lg:w-1/2 flex flex-col min-h-full"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-mw-black uppercase mb-10 tracking-widest text-center">
              Our Location
            </h2>
            <div className="flex-grow bg-gradient-to-br from-mw-forest/20 to-mw-black/10 backdrop-blur-md py-6 px-2 rounded-3xl shadow-lg shadow-mw-gold/20">
              <p className="text-2xl text-mw-black mb-6 text-center">
                Monrovia, Liberia
              </p>
              <div className="h-96 overflow-hidden rounded-3xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127678.84469358912!2d-10.811543899999999!3d6.3156068!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a6f7f6e6f6f6f6f%3A0x6f6f6f6f6f6f6f6f!2sMonrovia%2C%20Liberia!5e0!3m2!1sen!2sus!4v1696891234567!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Marketwaves Media Location in Monrovia, Liberia"
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Contact Info */}
      <section className="py-12 sm:py-16 lg:py-32 relative">
        <div className=" w-full flex items-center justify-center">
          <motion.div
            className="text-center max-w-md sm:max-w-lg md:max-w-2xl lg:max-w-4xl"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-mw-black uppercase mb-8 sm:mb-10 lg:mb-12 tracking-widest">
              More Ways to Reach Us
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-mw-black mb-4 sm:mb-6 leading-relaxed">
              Have a question or ready to start your project? Reach out to us
              via email or phone, and let’s get the conversation started.
            </p>

            {/* Contact Info & Social Links */}
            <div className="flex flex-col sm:flex-col md:flex-col xl:flex-row items-center justify-between gap-6 sm:gap-8 mt-6 sm:mt-8">
              <div className="w-full sm:w-full md:w-full xl:w-1/2 bg-mw-black/5 text-center lg:text-left">
                <p className="text-lg sm:text-xl md:text-2xl text-mw-black font-bold">
                  <a
                    href="mailto:info@marketwavesmedia.com"
                    className="hover:underline mx-1 sm:mx-2 font-normal"
                  >
                    info@marketwavesmedia.com
                  </a>
                </p>
                <p className="text-lg sm:text-xl md:text-2xl text-mw-black mt-2 sm:mt-4 font-bold">
                  <a
                    href="tel:+231123456789"
                    className="hover:underline mx-1 sm:mx-2 font-normal"
                  >
                    +231 123 456 789
                  </a>
                </p>
              </div>

              {/* Right: Social Links */}
              <div className="flex items-center lg:items-left flex-col w-full sm:w-full md:w-full xl:w-1/2 bg-mw-black/5 p-4 sm:p-6 text-left">
                <h3 className="text-lg sm:text-xl md:text-2xl text-mw-black mb-2 sm:mb-4 font-bold">
                  Follow Us
                </h3>
                <div className="flex justify-start items-end space-x-4 sm:space-x-6">
                  <a
                    href="#"
                    className="text-mw-gold hover:text-mw-black text-2xl sm:text-3xl"
                    aria-label="Facebook"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                  <a
                    href="#"
                    className="text-mw-gold hover:text-mw-black text-2xl sm:text-3xl"
                    aria-label="Twitter"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a
                    href="#"
                    className="text-mw-gold hover:text-mw-black text-2xl sm:text-3xl"
                    aria-label="Instagram"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="#"
                    className="text-mw-gold hover:text-mw-black text-2xl sm:text-3xl"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
