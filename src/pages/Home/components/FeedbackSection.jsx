import { motion } from "framer-motion";
import { testimonials } from "../../../constant";

const cardVariants = {
  initial: { opacity: 0, y: 40 },
  animate: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, type: "spring" },
  }),
  hover: {
    scale: 1.04,
    boxShadow: "0 8px 32px 0 rgba(0,0,0,0.10)",
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const FeedbackSection = () => (
  <section className="relative w-full flex flex-col items-center py-12 px-2 md:px-0 bg-base-100 overflow-hidden mt-9">
    {/* Blobs */}
    {/* <div className="absolute -top-16 -left-16 w-80 h-80 bg-primary/10 rounded-full blur-2xl z-0 pointer-events-none"></div> */}
    <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-primary/10 rounded-full blur-2xl z-0 pointer-events-none"></div>

    <h2 className="text-2xl md:text-4xl font-bold text-neutral text-center z-10 mb-2">
      Feedback from our clients
    </h2>
    <p className="text-base-content text-center max-w-2xl mx-auto mb-10 z-10">
      Our WORK speaks louder than our WORD. Find out how we helped clients overcome challenges and succeed.
    </p>
    <div className="w-full max-w-5xl flex flex-col md:flex-row gap-8 justify-center items-stretch relative z-10">
      {/* Left Decoration */}
      <div className="hidden md:flex flex-col justify-center items-center bg-base-100 rounded-2xl border border-primary/20 min-w-[120px] max-w-[140px] mr-2">
        <div className="flex flex-col gap-6 h-full py-10 px-4">
          <div className="w-2 h-10 bg-primary rounded-full"></div>
          <div className="w-2 h-10 bg-primary rounded-full"></div>
          <div className="w-2 h-10 bg-primary rounded-full"></div>
        </div>
      </div>
      {/* Testimonials */}
      {testimonials.map((t, i) => (
        <motion.div
          key={i}
          className="flex-1 bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-4 border border-base-200"
          custom={i}
          initial="initial"
          whileInView="animate"
          whileHover="hover"
          viewport={{ once: true }}
          variants={cardVariants}
        >
          <div className="flex items-center gap-3">
            <img
              src={t.avatar}
              alt={t.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <div className="font-semibold text-base text-neutral">{t.name}</div>
              <div className="text-xs text-base-content/60">{t.handle}</div>
            </div>
          </div>
          <div className="text-base-content text-sm md:text-base flex-1">
            <span className="text-2xl font-bold leading-none mr-1">“</span>
            {t.feedback}
            <span className="text-2xl font-bold leading-none ml-1">”</span>
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default FeedbackSection;