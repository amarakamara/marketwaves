import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const MenuToggleIcon = ({ isOpen }) => (
  <svg
    className="h-10 w-10"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <motion.path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      initial={false}
      animate={{
        d: isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16",
        stroke: "#d8ba75",
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    />
  </svg>
);

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Work", path: "/portfolio" },
    { name: "Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  const menuVariants = {
    hidden: { opacity: 0, y: "-100%" },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeInOut", when: "beforeChildren" },
    },
  };

  return (
    <motion.nav
      className="fixed w-full z-30 top-0 bg-white/95 md:bg-white/40 md:backdrop-blur-lg shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-3 lg:px-2">
        <div className="flex items-center justify-between h-24 relative">
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.8, 0.25, 1] }}
          >
            <Link
              to="/"
              className="text-mw-gold text-4xl lg:text-5xl font-black tracking-tight font-[Poppins] relative"
            >
              Marketwaves
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            {navLinks.map((link) => (
              <motion.div key={link.name} className="relative">
                <Link
                  to={link.path}
                  className="text-mw-black text-xl font-medium uppercase tracking-widest"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Toggle */}
          <motion.div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.85 }}
              onClick={(e) => {
                e.preventDefault(); // Prevent any default behavior
                setIsOpen(!isOpen);
              }}
              className="text-mw-gold focus:outline-none"
            >
              <MenuToggleIcon isOpen={isOpen} />
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && ( // Ensure the menu renders only when open
        <motion.div
          variants={menuVariants}
          initial="hidden"
          animate="visible"
          className="md:hidden bg-white/95 backdrop-blur-md shadow-md absolute w-full h-screen top-full left-0"
        >
          <div className="px-8 py-8 space-y-6">
            {navLinks.map((link) => (
              <motion.div key={link.name}>
                <Link
                  to={link.path}
                  className="text-mw-black text-2xl font-semibold uppercase tracking-widest hover:text-mw-gold block py-3"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

export default Navbar;
