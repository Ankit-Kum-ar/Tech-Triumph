import { motion } from "framer-motion";

const EndToEndSection = () => (
  <section className="relative w-full flex flex-col items-center py-12 px-4 bg-base-100 overflow-hidden">
    {/* Top Left Blob */}
    <div className="absolute md:block hidden -top-2 -left-2 w-72 h-72 bg-primary/20 rounded-full blur-2xl z-0 pointer-events-none"></div>
    {/* Bottom Right Blob */}
    <div className="absolute -bottom-2 -right-24 w-72 h-72 bg-accent/20 rounded-full blur-2xl z-0 pointer-events-none"></div>

    <h2 className="text-2xl md:text-4xl font-bold text-neutral text-center z-10">
      End-To-End Development Services
    </h2>
    <p className="text-base-content text-center mt-4 max-w-2xl z-10">
      Sometimes, we need to check the time, wondering when our work or meeting
      will finish, without getting caught by others.
    </p>
    <div className="flex justify-center mt-16 z-10 w-full">
      <motion.img
        src="/images/end-to-end-illustration.png"
        alt="End-to-End Development Illustration"
        className="w-full max-w-xl"
        animate={{ y: [0, -24, 0] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />
    </div>
  </section>
);

export default EndToEndSection;