import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Home() {
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, [0, 400], [0, -60]); // Parallax for 3D element

  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const whyChooseUs = [
    { title: "Local Expertise", desc: "We know Liberia inside out." },
    { title: "Tailored Solutions", desc: "Built for your unique goals." },
    { title: "Proven Results", desc: "Real growth, real impact." },
  ];

  const testimonials = [
    {
      quote:
        "Our reach exploded! We saw engagement levels we never thought possible, and more parents are now involved in school events.",
      client: "Monrovia High",
    },
    {
      quote:
        "Bookings doubled fast. Our online presence went from almost nonexistent to being a major driver of new customers.",
      client: "Taste of Liberia",
    },
  ];

  return (
    <div className="pt-24 bg-white text-mw-black overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
        <div className="px-6 lg:px-12 w-full h-full flex items-center justify-center relative">
          <motion.div
            className="text-center relative z-10"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.25, 0.8, 0.25, 1] }}
          >
            <h1 className="text-6xl lg:text-8xl font-black text-mw-black uppercase tracking-tight leading-none">
              DIGITAL MARKETING <br /> FOR BOLD BRANDS
            </h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.9 }}
              className="text-2xl text-mw-black/80 mt-10 max-w-2xl mx-auto"
            >
              Marketwaves Media—unleashing brilliance in Liberia.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="mt-16"
            >
              <Link
                to="/contact"
                className="inline-block bg-mw-gold text-white px-12 py-5 text-xl font-semibold uppercase tracking-widest text-nowrap rounded-full hover:bg-mw-gold hover:text-mw-black transition-all duration-300"
              >
                Let’s Create
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="absolute inset-0 flex items-center justify-center z-0"
            style={{ y: parallaxY }}
            initial={{ opacity: 0, rotate: 20 }}
            animate={{ opacity: 0.2, rotate: 0 }}
            transition={{ duration: 1.4, ease: "easeOut" }}
          >
            <svg
              viewBox="0 0 600 600"
              className="w-full h-full max-w-4xl max-h-4xl"
              preserveAspectRatio="xMidYMid meet"
            >
              <motion.path
                d="M100 500 Q300 100 500 500"
                fill="none"
                stroke="#d8ba75"
                strokeWidth="8"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.path
                d="M500 100 Q300 500 100 100"
                fill="none"
                stroke="#004225"
                strokeWidth="8"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>
        </div>
      </section>
      {/* Why Choose Us */}
      <section className="py-32 bg-white relative">
        <div className="px-6 lg:px-12 w-full flex items-center justify-center">
          <div className="text-center">
            <div className="grid md:grid-cols-3 gap-16">
              {whyChooseUs.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.2,
                    duration: 0.7,
                    ease: "easeOut",
                  }}
                  className="text-center group"
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
                  <h3 className="text-3xl font-bold text-mw-black uppercase tracking-widest text-nowrap mb-4">
                    {item.title}
                  </h3>
                  <p className="text-mw-black/70 text-lg">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Request a Proposal */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="px-6 lg:px-12 w-full flex items-center justify-center relative">
          <motion.div
            className="absolute inset-0 bg-mw-gold/5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />
          <div className="text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-6xl lg:text-7xl font-black text-mw-black uppercase mb-24 tracking-widest text-nowrap"
            >
              Unleash Your Vision
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-2xl text-mw-black/80 mb-16 max-w-3xl mx-auto"
            >
              Bespoke digital strategies crafted for Liberia’s trailblazers.
            </motion.p>
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Link
                to="/contact"
                className="bg-mw-gold text-white px-12 py-5 text-xl font-bold uppercase tracking-widest text-nowrap rounded-full hover:bg-mw-gold hover:text-mw-black transition-all duration-300 shadow-lg shadow-mw-forest/20"
              >
                Request a Proposal
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      {/* Success Stories */}
      <section className=" bg-white py-32 relative overflow-hidden">
        <div className="px-6 lg:px-12 w-full flex items-center justify-center relative">
          <div className="text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="text-6xl lg:text-7xl font-black text-mw-black uppercase mb-24 tracking-widest text-nowrap"
            >
              Triumph Tales
            </motion.h2>
            <div className="flex flex-col md:flex-row justify-center items-center gap-16">
              {testimonials.map((story, i) => (
                <motion.div
                  key={story.client}
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: i * 0.4,
                    duration: 0.9,
                    ease: "easeOut",
                  }}
                  className="relative w-full md:w-4/5 p-12 rounded-3xl bg-gradient-to-br from-mw-forest/20 to-mw-black/10 backdrop-blur-md hover:shadow-2xl hover:shadow-mw-gold/40 transition-all duration-500"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-2xl lg:text-3xl text-mw-black  mb-8 leading-relaxed z-10 relative">
                    “{story.quote}”
                  </p>
                  <p className="text-mw-gold font-bold text-2xl lg:text-3xl tracking-widest text-nowrap z-10 relative">
                    {story.client}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Newsletter */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="px-6 lg:px-12 w-full flex items-center justify-center relative">
          <div className="text-center relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              className="text-6xl lg:text-7xl font-black text-mw-black uppercase mb-12 tracking-widest text-nowrap"
            >
              Stay Ahead
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-2xl text-mw-black/80 mb-16 max-w-2xl mx-auto"
            >
              Get the latest digital insights from Liberia.
            </motion.p>
            <motion.div
              className="flex max-w-xl mx-auto shadow-sm rounded-full"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6, ease: "easeOut" }}
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 px-8 py-5 bg-mw-black/10 text-mw-black  border-none focus:outline-none placeholder-mw-black/50"
              />
              <button className="bg-mw-gold text-white px-10 py-5 rounded-r-full  font-bold uppercase tracking-widest text-nowrap hover:bg-mw-gold hover:text-mw-black transition-all duration-300 shadow-md shadow-mw-forest/20">
                Join Now
              </button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
