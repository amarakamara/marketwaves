import { useEffect } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

function About() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="pt-24 min-h-screen bg-white overflow-hidden">
      {/* Hero Section with Background Image and Overlay Text */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center m-6 lg:mx-12 rounded-3xl"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
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
            className="text-6xl lg:text-9xl font-black text-white uppercase mb-20 tracking-widest"
          >
            OUR STORY
          </motion.h1>
        </div>
      </section>

      {/* Journey and Vision Combined */}
      <section className="py-32 relative">
        <div className="px-6 lg:px-12 w-full flex flex-col lg:flex-row justify-between gap-16">
          <motion.div
            className="w-full lg:w-1/2 text-center"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-6xl lg:text-7xl font-black text-mw-black uppercase mb-12 tracking-widest">
              Our Journey
            </h2>
            <p className="text-2xl text-mw-black mb-6 leading-relaxed">
              Marketwaves Media was born in 2020 in the vibrant heart of
              Liberia, driven by a passion to uplift local businesses with
              cutting-edge digital solutions. From humble beginnings, we’ve
              grown into a powerhouse of innovation, serving entrepreneurs
              across Monrovia and beyond.
            </p>
            <p className="text-2xl text-mw-gold font-semibold">
              We’re here to turn your vision into victory, one campaign at a
              time.
            </p>
          </motion.div>
          <motion.div
            className="w-full lg:w-1/2 text-center"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-6xl lg:text-7xl font-black text-mw-black uppercase mb-12 tracking-widest">
              Our Vision
            </h2>
            <p className="text-2xl text-mw-black mb-6 leading-relaxed">
              At Marketwaves, we envision a Liberia where every business thrives
              digitally. Our goal is to empower service-based
              industries—schools, restaurants, salons, and more—with tailored
              strategies that break barriers and build legacies.
            </p>
            <p className="text-2xl text-mw-gold font-semibold">
              Together, we’re shaping the future of Liberian entrepreneurship.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-32 relative">
        <div className="px-6 lg:px-12 w-full flex items-center justify-center relative">
          <motion.div className="text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-6xl lg:text-7xl font-black text-mw-black uppercase mb-12 tracking-widest"
            >
              Our Values
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-16">
              {[
                {
                  title: "Innovation",
                  desc: "Pushing boundaries with fresh ideas.",
                },
                {
                  title: "Integrity",
                  desc: "Building trust with every campaign.",
                },
                { title: "Impact", desc: "Driving measurable growth for you." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.3,
                    duration: 0.8,
                    ease: "easeOut",
                  }}
                  className="text-center"
                >
                  <motion.div
                    className="w-24 h-24 bg-mw-forest/10 rounded-full mx-auto mb-8 flex items-center justify-center"
                    whileHover={{ scale: 1.1, backgroundColor: "#d8ba75" }}
                    transition={{ duration: 0.4 }}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-12 h-12 text-mw-forest group-hover:text-mw-black"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      {i === 0 && (
                        <path d="M12 2a10 10 0 0 1 10 10c0 5.5-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2zm0 4v6h4" />
                      )}
                      {i === 1 && (
                        <path d="M12 2v4M12 18v4M2 12h4M18 12h4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                      )}
                      {i === 2 && (
                        <path d="M12 2a10 10 0 0 1 10 10c0 5.5-4.5 10-10 10S2 17.5 2 12 6.5 2 12 2zm-1 5l-4 4h3v4l4-4h-3V7z" />
                      )}
                    </svg>
                  </motion.div>
                  <h3 className="text-3xl font-bold text-mw-black uppercase tracking-widest mb-4">
                    {item.title}
                  </h3>
                  <p className="text-2xl text-mw-black">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default About;
