import { motion } from "framer-motion";

const WhyChooseUs = () => (
  <section className="relative w-full flex flex-col items-center py-12 px-4 bg-base-100 overflow-hidden">
    {/* Top Right Blob */}
    <div className="absolute right-64 w-72 h-72 bg-primary/10 rounded-full blur-2xl z-0 pointer-events-none"></div>

    <h2 className="text-2xl md:text-4xl font-bold text-neutral text-center z-10 mb-6">
      Why Choose Us
    </h2>
    <ul className="text-base-content  max-w-3xl mx-auto mb-10 z-10 space-y-2 list-disc list-inside">
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
    <div className="flex flex-col md:flex-row items-center justify-center gap-12 mt-4 z-10 w-full">
      <motion.div
        className="rounded-2xl overflow-hidden shadow-xl bg-white p-0 w-80 h-72 flex flex-col justify-center items-center"
        initial={{ opacity: 0, x: -40, rotate: -12 }}
        whileInView={{ opacity: 1, x: 0, rotate: -6 }}
        transition={{ duration: 0.7, type: "spring" }}
        viewport={{ once: true }}
      >
        <img
          src="/images/why-choose-us-1.jpg"
          alt="Workspace"
          className="w-full h-full object-cover"
        />
      </motion.div>
      <motion.div
        className="rounded-2xl overflow-hidden shadow-xl bg-white p-0 w-80 h-72 flex flex-col justify-center items-center"
        initial={{ opacity: 0, x: 40, rotate: 12 }}
        whileInView={{ opacity: 1, x: 0, rotate: 6 }}
        transition={{ duration: 0.7, type: "spring" }}
        viewport={{ once: true }}
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