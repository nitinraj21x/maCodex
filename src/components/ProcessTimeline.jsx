import { motion } from "framer-motion";
import { fadeUp, staggerItem, staggerWrap } from "../utils/motion";

function ProcessTimeline({ steps }) {
  return (
    <motion.div
      {...fadeUp}
      variants={staggerWrap}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className="grid gap-5 lg:grid-cols-5"
    >
      {steps.map((step) => (
        <motion.div
          key={step.step}
          variants={staggerItem}
          className="vellum-card rounded-[1.8rem] p-6"
        >
          <p className="text-xs uppercase tracking-[0.36em] text-ruby">{step.step}</p>
          <h3 className="mt-4 font-display text-3xl text-soot">{step.title}</h3>
          <p className="mt-4 text-sm leading-7 text-soot/76">{step.text}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}

export default ProcessTimeline;
