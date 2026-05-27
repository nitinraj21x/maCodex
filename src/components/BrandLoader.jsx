import { motion } from "framer-motion";
import { brand } from "../data/siteContent";

const wordSequence = ["Murthy", "Atelier's"];

function BrandLoader({ message = "Curating heirlooms with memory and craft." }) {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ivory px-4">
      <div className="pointer-events-none absolute inset-0 heritage-noise opacity-80" />
      <div className="pointer-events-none absolute inset-0 temple-pattern opacity-40" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 w-full max-w-4xl"
      >
        <div className="mx-auto flex max-w-3xl flex-col items-center rounded-[2.25rem] border border-ruby/12 bg-[rgba(255,248,232,0.82)] px-6 py-14 text-center shadow-luxury backdrop-blur-md sm:px-12">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] uppercase tracking-[0.48em] text-ruby/80 sm:text-xs"
          >
            {brand.signature}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.16,
                },
              },
            }}
            className="mt-8 flex flex-col items-center"
          >
            {wordSequence.map((word) => (
              <motion.span
                key={word}
                variants={{
                  hidden: { opacity: 0, y: 18, filter: "blur(10px)" },
                  visible: {
                    opacity: 1,
                    y: 0,
                    filter: "blur(0px)",
                    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                className="signature-text text-[3rem] leading-[0.9] text-ruby sm:text-[4.75rem] lg:text-[5.5rem]"
              >
                {word}
              </motion.span>
            ))}

            <motion.span
              initial={{ opacity: 0, letterSpacing: "0.3em" }}
              animate={{ opacity: 1, letterSpacing: "0.06em" }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="signature-text mt-2 text-[2.15rem] text-ruby/90 sm:text-[3.15rem]"
            >
              by 9th
            </motion.span>
          </motion.div>

          <div className="relative mt-10 h-px w-full max-w-xl overflow-hidden rounded-full bg-ruby/10">
            <motion.span
              initial={{ x: "-100%" }}
              animate={{ x: "180%" }}
              transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              className="absolute top-0 h-px w-1/3 bg-gradient-to-r from-transparent via-gold to-transparent"
            />
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.35 }}
            className="mt-8 max-w-xl text-sm uppercase tracking-[0.32em] text-soot/58 sm:text-[13px]"
          >
            {message}
          </motion.p>

          <div className="mt-8 flex items-center gap-3">
            {[0, 1, 2].map((index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0.35, scale: 0.85 }}
                animate={{ opacity: [0.35, 1, 0.35], scale: [0.85, 1.12, 0.85] }}
                transition={{
                  duration: 1.25,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: index * 0.16,
                }}
                className="h-2.5 w-2.5 rounded-full bg-ruby shadow-[0_0_20px_rgba(161,34,48,0.35)]"
              />
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default BrandLoader;
