import { motion } from "framer-motion";

const petals = ['🌸', '🪷', '🌺', '🌸', '🪷'];

export function FloatingPetals() {
  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {petals.map((petal, index) => (
        <motion.div
          key={index}
          className="absolute text-2xl"
          initial={{ 
            x: `${10 + index * 20}%`, 
            y: -50,
            rotate: 0 
          }}
          animate={{ 
            y: '110vh',
            rotate: 360,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            delay: index * 2,
            ease: "linear"
          }}
        >
          {petal}
        </motion.div>
      ))}
    </div>
  );
}
