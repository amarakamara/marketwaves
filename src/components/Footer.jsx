import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Footer() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Our Work", path: "/portfolio" },
    { name: "Our Team", path: "/team" },
    { name: "Contact Us", path: "/contact" },
  ];

  // Framer Motion variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const linkVariants = {
    hover: {
      scale: 1.05,
      color: "var(--mw-gold)",
      transition: { duration: 0.3 },
    },
  };

  const svgVariants = {
    hidden: { scaleX: 0 },
    visible: { scaleX: 1, transition: { duration: 0.8, ease: "easeInOut" } },
  };

  return (
    <footer className="bg-mw-forest text-mw-mint py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr_1fr] gap-12">
          {/* Brand Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            variants={sectionVariants}
          >
            <h3 className="text-mw-gold text-3xl font-extrabold uppercase tracking-wider font-[Poppins] mb-6">
              Marketwaves
            </h3>
            <p className="text-mw-mint text-lg leading-relaxed max-w-xs">
              Empowering Liberian service-based businesses with innovative
              digital marketing solutions.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
            variants={sectionVariants}
          >
            <h3 className="text-mw-gold text-2xl font-bold uppercase tracking-wider font-[Poppins] mb-6">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  whileHover="hover"
                  variants={linkVariants}
                >
                  <Link
                    to={link.path}
                    className="text-mw-mint text-lg uppercase tracking-wide"
                  >
                    {link.name}
                  </Link>
                  <motion.div
                    className="h-0.5 bg-mw-gold w-full"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
            variants={sectionVariants}
          >
            <h3 className="text-mw-gold text-2xl font-bold uppercase tracking-wider font-[Poppins] mb-6">
              Connect
            </h3>
            <div className="space-y-4">
              {["Facebook", "Instagram", "LinkedIn"].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="text-mw-mint text-lg uppercase tracking-wide block"
                  whileHover="hover"
                  variants={linkVariants}
                >
                  {social}
                  <motion.div
                    className="h-0.5 bg-mw-gold w-full"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Decorative SVG Separator */}
        <motion.svg
          className="w-full h-1 text-mw-gold my-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={svgVariants}
        >
          <line
            x1="0"
            y1="0"
            x2="100%"
            y2="0"
            stroke="currentColor"
            strokeWidth="2"
          />
        </motion.svg>

        {/* Copyright */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
          variants={sectionVariants}
          className="text-center text-mw-mint text-lg"
        >
          <p>© 2025 Marketwaves Media. All rights reserved.</p>
        </motion.div>
      </div>

      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 bg-mw-black opacity-10 pointer-events-none" />
    </footer>
  );
}

export default Footer;
