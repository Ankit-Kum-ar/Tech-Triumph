import { motion } from "framer-motion";

const leftImgVariants = {
  initial: { opacity: 0, x: -60, rotate: -14 },
  whileInView: { opacity: 1, x: 0, rotate: -10, transition: { duration: 0.7, type: "spring" } },
  whileHover: {
    rotate: [-10, -16, -6, -10],
    transition: { duration: 0.8, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }
  }
};

const rightImgVariants = {
  initial: { opacity: 0, x: 60, rotate: 14 },
  whileInView: { opacity: 1, x: 0, rotate: 10, transition: { duration: 0.7, type: "spring" } },
  whileHover: {
    rotate: [10, 16, 6, 10],
    transition: { duration: 0.8, repeat: Infinity, repeatType: "loop", ease: "easeInOut" }
  }
};

const WhyChooseUs = () => (
  <section className="relative w-full flex flex-col items-center py-12 px-4 bg-base-100 overflow-hidden">
    {/* Top Right Blob */}
    <div className="absolute right-5 w-72 h-72 bg-primary/10 rounded-full blur-2xl z-0 pointer-events-none"></div>

    <h2 className="text-2xl md:text-4xl font-bold text-neutral text-center z-10 mb-6">
      Why Choose Us
    </h2>
    <ul className="text-base-content max-w-4xl md:text-lg text-base mx-auto mb-10 z-10 space-y-2 list-disc list-inside">
      <li>
        <span className="font-medium">Expertise:</span> Our team has deep knowledge in mobile app development, ensuring top quality results.
      </li>
      <li>
        <span className="font-medium">Security First:</span> We prioritize cyber security to protect your app and user data.
      </li>
      <li>
        <span className="font-medium">Scalable Solutions:</span> From low code to SAAS, we build apps that grow with your business.
      </li>
      <li>
        <span className="font-medium">Client-Centric:</span> We work closely with you, ensuring every project aligns with your vision.
      </li>
    </ul>
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-8 z-10 w-full">
      {/* Left Illustration */}
      <motion.div
        className="rounded-2xl bg-white w-72 h-56 md:w-96 md:h-64 flex flex-col justify-center items-center shadow-2xl"
        variants={leftImgVariants}
        initial="initial"
        whileInView="whileInView"
        whileHover="whileHover"
        viewport={{ once: true }}
        style={{ boxShadow: "0 12px 40px 0 rgba(0,0,0,0.18)" }}
      >
        <img
          src="/images/why-choose-us-1.jpg"
          alt="Quality Services"
          className="w-full h-full object-contain"
        />
      </motion.div>
      {/* Right Workspace Photo */}
      <motion.div
        className="rounded-2xl bg-white w-72 h-56 md:w-96 md:h-64 flex flex-col justify-center items-center shadow-2xl"
        variants={rightImgVariants}
        initial="initial"
        whileInView="whileInView"
        whileHover="whileHover"
        viewport={{ once: true }}
        style={{ boxShadow: "0 12px 40px 0 rgba(0,0,0,0.18)" }}
      >
        <img
          src="/images/why-choose-us-2.jpg"
          alt="Workspace"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  </section>
);

export default WhyChooseUs;