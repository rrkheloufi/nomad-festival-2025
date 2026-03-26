import { motion } from "framer-motion";

interface ComingSoonProps {
  title: string;
}

export default function ComingSoon({ title }: ComingSoonProps) {
  return (
    <div
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor: "var(--color-background)" }}
    >
      {/* Background decorative circles */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          border: "1px solid rgba(var(--color-primary-rgb), 0.08)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          width: "900px",
          height: "900px",
          borderRadius: "50%",
          border: "1px solid rgba(var(--color-primary-rgb), 0.04)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Accent dot top-right */}
      <motion.div
        className="absolute top-32 right-16 hidden md:block"
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          backgroundColor: "var(--color-primary)",
        }}
      />
      <motion.div
        className="absolute bottom-40 left-20 hidden md:block"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        style={{
          width: "8px",
          height: "8px",
          borderRadius: "50%",
          backgroundColor: "var(--color-secondary)",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="text-center px-6 relative z-10 max-w-2xl"
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-poppins font-bold uppercase tracking-widest text-xs mb-6"
          style={{ color: "var(--color-secondary)" }}
        >
          Nomad Festival
        </motion.p>

        {/* Main title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-poppins font-black mb-4"
          style={{
            fontSize: "clamp(3rem, 10vw, 6.5rem)",
            color: "var(--color-primary)",
            letterSpacing: "-0.03em",
            lineHeight: "1",
          }}
        >
          {title}
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          className="mx-auto my-8"
          style={{
            height: "2px",
            width: "80px",
            background:
              "linear-gradient(90deg, var(--color-primary), var(--color-secondary))",
            borderRadius: "1px",
          }}
        />

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="font-poppins font-semibold text-lg md:text-xl"
          style={{ color: "var(--color-text)", opacity: 0.7 }}
        >
          Bientôt disponible
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="mt-3 text-base md:text-lg"
          style={{ color: "var(--color-text)", opacity: 0.6 }}
        >
          On prépare quelque chose de beau, revenez bientôt !
        </motion.p>
      </motion.div>
    </div>
  );
}
