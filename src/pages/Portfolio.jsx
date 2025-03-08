import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Portfolio() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const projects = [
    {
      title: "Liberia High School Website",
      description:
        "Designed and developed a modern website with online admission system and alumni testimonials for a leading high school in Monrovia.",
      image:
        "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHJhbmRvbSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Restaurant Social Media Campaign",
      description:
        "Created a month-long social media campaign with 2 videos and 8 graphics, boosting engagement for a local Liberian restaurant.",
      image:
        "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHJhbmRvbSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Salon Booking System",
      description:
        "Developed a sleek website with an integrated booking system for a popular salon in Liberia.",
      image:
        "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHJhbmRvbSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Event Planner Branding",
      description:
        "Crafted a complete branding package including logo, banners, and social media assets for an event planning business.",
      image:
        "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHJhbmRvbSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "Clinic Digital Strategy",
      description:
        "Consulted on and implemented a digital strategy including website updates and social media management for a healthcare clinic.",
      image:
        "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHJhbmRvbSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      title: "School Event Posters",
      description:
        "Designed a series of posters and social media graphics for student activities and announcements at a Liberian high school.",
      image:
        "https://images.unsplash.com/photo-1493612276216-ee3925520721?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHJhbmRvbSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <div className="pt-24 min-h-screen bg-white overflow-hidden">
      {/* Hero Section with Background Image and Overlay Text */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center m-6 lg:mx-12 rounded-3xl"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
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
            OUR WORK
          </motion.h1>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-32 relative">
        <div className="px-6 lg:px-12 w-full flex flex-col lg:flex-row items-center justify-center">
          <motion.div
            className="w-full text-center px-16"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-6xl lg:text-7xl font-black text-mw-black uppercase mb-12 tracking-widestt">
              Case Study: Fragrance Mist
            </h2>
            {/* Images - Only visible on large screens */}
            <div className="hidden lg:flex w-full justify-center gap-8 py-10">
              <img
                src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHJhbmRvbSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
                alt="Case Study 1"
                className="w-1/3 rounded-sm shadow-sm"
              />
              <img
                src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHJhbmRvbSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
                alt="Case Study 2"
                className="w-1/3 rounded-sm shadow-sm"
              />
              <img
                src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHJhbmRvbSUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D"
                alt="Case Study 3"
                className="w-1/3 rounded-sm shadow-sm"
              />
            </div>
            <p className="text-2xl text-mw-black mb-6 leading-relaxed">
              We transformed Fragrance Mist’s online presence with a
              comprehensive social media management service. Our approach
              included designing a vibrant logo, crafting a cohesive branding
              package, and creating engaging content—featuring 2 videos and 8
              graphic assets monthly. This boosted their engagement by 150% and
              doubled their follower base within three months.
            </p>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <Link
                to="/contact"
                className="inline-block bg-mw-gold text-white mt-6 px-8 py-4 text-lg font-bold uppercase tracking-wider rounded-full hover:bg-mw-gold hover:text-mw-black transition-all duration-300 shadow-md shadow-mw-forest/20"
              >
                Request a Quote
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-48 relative">
        <div className="px-6 lg:px-12 w-full flex items-center justify-center">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.3,
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="relative rounded-2xl shadow-sm overflow-hidden bg-gradient-to-br from-mw-forest/20 to-mw-black/10 backdrop-blur-md hover:shadow-2xl hover:shadow-mw-gold/40 transition-all duration-500"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl lg:text-3xl font-bold text-mw-black uppercase tracking-widest mb-4">
                    {project.title}
                  </h2>
                  <p className="text-xl text-mw-black">{project.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
