import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Services() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const services = [
    {
      title: "SchoolBoost Package (High Schools)",
      details: [
        "Website Design & Development: Blog, faculty/teachers, student council pages, online admission, alumni testimonials",
        "Monthly Maintenance & Updates",
        "Social Media Management: Branding, Monthly Content Plan",
        "10 monthly deliverables: 2 videos, 8 graphic materials",
        "Optional Ad Campaigns",
      ],
    },
    {
      title: "Business360 Package",
      details: [
        "Website Design & Development: Booking system, Service details, Contact info",
        "Monthly Maintenance & Updates",
        "Social Media Management: Monthly Content Plan",
        "10 monthly deliverables: 2 videos, 8 graphic materials",
        "Optional Ad Campaigns",
      ],
    },
    {
      title: "Digital Consultancy",
      details: [
        "Customized digital strategy planning for your business or school",
      ],
    },
    {
      title: "Standalone Services",
      details: [
        "Web Design & Development",
        "Branding: Logo, Full Package (Logo, Banners, Color Palette)",
        "Social Media Management: Creative Content Planning",
        "Campaign Creation & Account Management",
      ],
    },
  ];

  return (
    <div className="pt-24 min-h-screen bg-white overflow-hidden">
      {/* Hero Section with Background Image and Overlay Text */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center m-6 lg:mx-12 rounded-3xl"
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
            className="text-6xl lg:text-9xl font-black text-white uppercase mb-20 tracking-widest text-nowrap"
          >
            OUR SERVICES
          </motion.h1>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-48 relative">
        <div className="px-6 lg:px-12 w-full flex items-center justify-center">
          <div className="grid md:grid-cols-2 gap-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.3,
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="relative p-10 rounded-3xl shadow-sm bg-gradient-to-br from-mw-forest/20 to-mw-black/10 backdrop-blur-md hover:shadow-2xl hover:shadow-mw-gold/40 transition-all duration-500"
                whileHover={{ scale: 1.05 }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-mw-black uppercase tracking-widest text-nowrap mb-6">
                  {service.title}
                </h2>
                <ul className="text-mw-black space-y-4 mb-8">
                  {service.details.map((detail) => (
                    <li key={detail} className="flex items-start text-2xl">
                      <span className="mr-3 text-mw-gold">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <Link
                    to="/contact"
                    className="inline-block bg-mw-gold text-white px-8 py-4 text-lg font-bold uppercase tracking-wider rounded-full hover:bg-mw-gold hover:text-mw-black transition-all duration-300 shadow-md shadow-mw-forest/20"
                  >
                    Request a Quote
                  </Link>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Services;
