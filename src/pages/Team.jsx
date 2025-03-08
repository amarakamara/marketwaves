import { motion } from "framer-motion";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Team() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const teamMembers = [
    {
      name: "Bangalee Donzo",
      position: "Creative Director/Copywriter",
      image:
        "https://scontent.fblr1-10.fna.fbcdn.net/v/t39.30808-6/468361966_2062950984139020_1691548566407309407_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_ohc=opJzzfcSKbgQ7kNvgEOZgTC&_nc_oc=Adid5e-kXeEo9wKeNu6fK2CztdvQnvB27R6HC06vz9eZ3H68fFbNrlGU1jwc9M19zBU&_nc_zt=23&_nc_ht=scontent.fblr1-10.fna&_nc_gid=AONluCSr_SN-EYsnroDBZfl&oh=00_AYFQdu-ORTwpXCk36lU66G_HdAcc3H1Jwtt-2ttLNL10ng&oe=67D1FBCB",
      social: { facebook: "#", instagram: "#", linkedin: "#" },
    },
    {
      name: "Abraham MB Selebay",
      position: "Programmer/ Web Designer",
      image:
        "https://scontent.fblr1-5.fna.fbcdn.net/v/t39.30808-6/308474570_3240072232909414_482052863582118744_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=kOwNmYbR3K4Q7kNvgHaNloq&_nc_oc=Adh8NCtF6U1ln7gpHV3cdbHPenOSzSEZ5Q4r2vxF9-b29JaboHt9r9nnNOtkLlT94eM&_nc_zt=23&_nc_ht=scontent.fblr1-5.fna&_nc_gid=A4iBM896n1DZVwVKUcO1cWr&oh=00_AYH2S9khE6eXYeclKE-V_IQ0dAVLoWrTrQroxBnnBDz5wQ&oe=67D1EF83",
      social: { facebook: "#", instagram: "#", linkedin: "#" },
    },
    {
      name: "Omaru Kamara",
      position: "Video Editor/ Social Media Manager",
      image:
        "https://scontent.fblr1-4.fna.fbcdn.net/v/t39.30808-6/468299732_2934985820002173_6395273020839894605_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=DMa-_ZVSu64Q7kNvgFXrXR-&_nc_oc=AdgEJhq7eXmttSMAK-Nn9JX0ZMSX4wqRam7J3ow5OPyy8ljj3_chfZ6maYF3wdkiiD8&_nc_zt=23&_nc_ht=scontent.fblr1-4.fna&_nc_gid=ARh4cjwc5UoWB6HpIS0_FCC&oh=00_AYEY8LKC04J7uIT_prsIWVvjh25nqDqvBRgWJEUZcf59tQ&oe=67D1DD31",
      social: { facebook: "#", instagram: "#", linkedin: "#" },
    },
    {
      name: "Solomane Toure",
      position: "Videographer / Social Media Manager",
      image:
        "https://scontent.fblr1-10.fna.fbcdn.net/v/t39.30808-6/471024720_3928767734030745_4606834994735875731_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=gJcR3weJeYAQ7kNvgHgwk4G&_nc_oc=Adim6DTRAFQQh8aCO7qE-Next9p4HFlH9poZkYkRxIyif-C3dRtLTDPETCgGwOciu-Q&_nc_zt=23&_nc_ht=scontent.fblr1-10.fna&_nc_gid=A6j7nYerBQ0q7mv2eFJE98C&oh=00_AYHdTIjj3WUWTACPCg07kN6clpJmBdXzfGxX79tsDiSHvg&oe=67D1DFAC",
      social: { facebook: "#", instagram: "#", linkedin: "#" },
    },
    {
      name: "Layee Salia Sheriff",
      position: "Graphic Designer",
      image:
        "https://scontent.fblr1-7.fna.fbcdn.net/v/t39.30808-6/480604743_2124137474693595_8656009402773459955_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=BnS4P_u7GKYQ7kNvgFMA4N1&_nc_oc=Adg5Y984R-Kl6TjAsOOpQLn0qS8jXZBZwwJ0IBK5DiPr3-1QcCtwzmqKp7WdBRoMvac&_nc_zt=23&_nc_ht=scontent.fblr1-7.fna&_nc_gid=AJ4nzAClcTmCjbW98Js4dza&oh=00_AYGWGtOK2tW9KaDFDPtvZGbYh8p6lERZIKca1Sq8PlkZ6Q&oe=67D1F853",
      social: { facebook: "#", instagram: "#", linkedin: "#" },
    },
    {
      name: "Amara Kamara",
      position: "Programmer / Web Designer",
      image:
        "https://scontent.fblr1-9.fna.fbcdn.net/v/t39.30808-6/375593639_1440279463494343_5116941867635979966_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=WJRyewucpEcQ7kNvgH2Dn_y&_nc_oc=Adi-EO-HxDiLEgK8YUoBDJKo-YKTYf528cHLC-ZxQVTqofijTV3WykrB1ZdHNaTPGG0&_nc_zt=23&_nc_ht=scontent.fblr1-9.fna&_nc_gid=AJySGRFhdPwbGeHNyqvfI5w&oh=00_AYHjUp5Va6C71j9z6SeC9JvR_CRgB6GM-5RzwfjPC99usA&oe=67D2003E",
      social: { facebook: "#", instagram: "#", linkedin: "#" },
    },
  ];

  return (
    <div className="pt-24 min-h-screen bg-white overflow-hidden">
      {/* Hero Section with Background Image and Overlay Text */}
      <section
        className="relative h-screen flex items-center justify-center bg-cover bg-center m-6 lg:mx-12 rounded-3xl"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
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
            OUR TEAM
          </motion.h1>
        </div>
      </section>

      {/* Team Description Section */}
      <section className="py-32 relative">
        <div className="px-6 lg:px-12 w-full flex items-center justify-center">
          <motion.div
            className="text-center max-w-4xl"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-6xl lg:text-7xl font-black text-mw-black uppercase mb-12 tracking-widest text-nowrap">
              Who We Are
            </h2>
            <p className="text-2xl text-mw-black mb-6 leading-relaxed">
              Meet the heartbeat of Marketwaves Media—a dynamic crew of
              visionaries, creatives, and strategists united by a passion for
              digital excellence. Based in Liberia, our team thrives on
              transforming local businesses into digital powerhouses. From
              crafting stunning visuals to devising game-changing strategies, we
              bring diverse expertise and unyielding dedication to every
              project.
            </p>
            <p className="text-2xl text-mw-gold font-semibold">
              Together, we’re not just a team—we’re your partners in success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-32 relative">
        <div className="px-6 lg:px-12 w-full flex items-center justify-center">
          <div className="grid md:grid-cols-3 gap-16">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.3,
                  duration: 0.8,
                  ease: "easeOut",
                }}
                className="relative rounded-2xl shadow-sm overflow-hidden bg-gradient-to-br from-mw-forest/20 to-mw-black/10 backdrop-blur-md text-center hover:shadow-2xl hover:shadow-mw-gold/40 transition-all duration-500"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                  style={{ filter: "grayscale(100%)" }}
                />
                <div className="p-6">
                  <h2 className="text-2xl lg:text-3xl font-bold text-mw-black uppercase tracking-widest text-nowrap mb-2">
                    {member.name}
                  </h2>
                  <p className="text-xl text-mw-black mb-6">
                    {member.position}
                  </p>
                  <div className="flex justify-center space-x-6">
                    <a
                      href={member.social.facebook}
                      className="text-mw-black hover:text-mw-gold text-xl"
                      aria-label={`Facebook - ${member.name}`}
                    >
                      <i className="fab fa-facebook-f"></i>
                    </a>
                    <a
                      href={member.social.instagram}
                      className="text-mw-black hover:text-mw-gold text-xl"
                      aria-label={`Instagram - ${member.name}`}
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                    <a
                      href={member.social.linkedin}
                      className="text-mw-black hover:text-mw-gold text-xl"
                      aria-label={`LinkedIn - ${member.name}`}
                    >
                      <i className="fab fa-linkedin-in"></i>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Team;
