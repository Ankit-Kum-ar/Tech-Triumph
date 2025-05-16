import { useState } from "react";
import { motion } from "framer-motion";
import { companies, services } from "../../../constant";

const cardVariants = {
  initial: { opacity: 0, y: 40 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.5, type: "spring" },
  }),
  hover: { scale: 1.05, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.10)" },
  tap: { scale: 0.97 },
};

const ServicesSection = () => {
  const [active, setActive] = useState(1); // Default: 2nd card (App Development)

  return (
    <section className="w-full flex flex-col items-center py-10 px-2 md:px-0 bg-white relative overflow-hidden">
      {/* BG Color Fragment */}
      <div className="absolute -left-1 w-96 h-96 bg-primary/10 rounded-full blur-3xl z-0 pointer-events-none"></div>

      {/* Trusted Companies */}
      <div className="mb-6 text-center z-10">
        <p className="text-gray-500 text-sm mb-5">Trusted By 4,000+ Companies</p>
        <div className="flex flex-wrap justify-center items-center md:gap-20 gap-8">
          {companies.map((c) => (
            <img
              key={c.alt}
              src={c.src}
              alt={c.alt}
              className="md:h-12 h-8 w-auto grayscale opacity-90"
            />
          ))}
        </div>
      </div>

      {/* Services Cards */}
      <div className="w-full max-w-5xl mt-8 bg-blue-50 rounded-2xl border border-primary p-4 md:p-6 flex flex-col md:flex-row gap-4 md:gap-0 justify-between relative z-10">
        {services.map((s, i) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.title}
              className={`flex-1 flex flex-col items-start gap-2 p-5 rounded-xl cursor-pointer transition-all duration-300
                ${
                  active === i
                    ? "bg-white shadow-xl scale-105 z-10 border-2 border-primary"
                    : "bg-transparent hover:bg-white/70"
                }
              `}
              custom={i}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap"
              variants={cardVariants}
              onClick={() => setActive(i)}
            >
              <motion.div
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.6, repeat: 0 }}
                className="bg-primary/10 rounded-full p-2 mb-2"
              >
                <Icon className="w-7 h-7 text-primary" />
              </motion.div>
              <h3 className="font-semibold text-lg md:text-xl text-gray-900">{s.title}</h3>
              <p className="text-gray-500 text-sm mb-3">{s.desc}</p>
              <a
                href={s.link}
                className="text-primary font-medium flex items-center gap-1 group"
                tabIndex={-1}
              >
                Learn More
                <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
              </a>
            </motion.div>
          );
        })}
      </div>

      {/* Show More Button */}
      <motion.button
        className="btn btn-primary mt-8 px-8 rounded-full shadow-lg z-10"
        whileHover={{ scale: 1.05, boxShadow: "0 8px 32px 0 rgba(0,0,0,0.10)" }}
        whileTap={{ scale: 0.97 }}
      >
        SHOW MORE
      </motion.button>
    </section>
  );
};

export default ServicesSection;