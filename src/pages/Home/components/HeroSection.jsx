import { Github, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";

const floatY = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
};

const floatX = {
  animate: {
    x: [0, 20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "loop",
      ease: "easeInOut",
    },
  },
};

const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-10  relative overflow-hidden">
      {/* Left Content */}
      <div className="w-full md:w-1/2 z-10">
        <p className="text-primary font-semibold tracking-widest mb-2 uppercase text-sm">
          A TRUSTED COMPANY
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight mb-4">
          Next-<span className="text-primary">Gen</span> Software <br />
          Services to <br />
          Businesses.
        </h1>
        <div className="border-l-2 border-primary pl-3 mb-4">
          <p className="text-gray-500 text-base">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
            Velit officia consequat duis enim <a href="#" className="text-primary underline">velit mollit</a>.
          </p>
        </div>
        <button className="btn btn-primary rounded-full px-6 py-2 shadow-lg mb-6">
          Get Started <span className="ml-2">→</span>
        </button>
        <div className="flex space-x-4 mt-2 text-gray-900">
          <a href="#" className="hover:text-primary transition-colors">
            <Twitter size={28} strokeWidth={2.5} />
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            <Github size={28} strokeWidth={2.5} />
          </a>
          <a href="#" className="hover:text-primary transition-colors">
            <Instagram size={28} strokeWidth={2.5} />
          </a>
        </div>
      </div>

      {/* Right Illustration */}
      <div className="w-full md:w-1/2 flex justify-center relative mt-10 md:mt-0">
        {/* Main 3D Character */}
        <img
          src="/images/3d-character.png"
          alt="3D Character"
          className="w-64 md:w-80 lg:w-96 z-10"
        />
        {/* Floating Icons with Animation */}
        <motion.img
          src="/images/monitor.png"
          alt="Monitor"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-16 md:w-20"
          variants={floatY}
          animate="animate"
        />
        <motion.img
          src="/images/code-card.png"
          alt="Code Card"
          className="absolute top-10 right-8 w-10 md:w-14"
          variants={floatX}
          animate="animate"
        />
        <motion.img
          src="/images/vr-headset.png"
          alt="VR Headset"
          className="absolute bottom-10 left-8 w-14 md:w-20"
          variants={floatX}
          animate="animate"
        />
        <motion.img
          src="/images/robot-car.png"
          alt="Robot Car"
          className="absolute bottom-0 right-8 w-14 md:w-20"
          variants={floatY}
          animate="animate"
        />
        {/* Decorative Blobs */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 left-1/3 w-32 h-32 bg-primary/10 rounded-full blur-2xl"></div>
      </div>
    </section>
  );
};

export default HeroSection;