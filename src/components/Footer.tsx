import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <footer ref={ref} className="relative overflow-hidden">
      {/* Fire/Ember Divider */}
      <div className="relative h-32 md:h-40 bg-gradient-to-t from-card to-background">
        {/* Glowing line */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1"
          style={{
            background: "linear-gradient(90deg, transparent 0%, hsl(var(--ember)) 20%, hsl(var(--parrilla-orange)) 50%, hsl(var(--ember)) 80%, transparent 100%)",
          }}
          animate={{
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Ember particles rising */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                left: `${10 + i * 7}%`,
                bottom: 0,
                background: `radial-gradient(circle, hsl(var(--ember)), hsl(var(--parrilla-orange)))`,
              }}
              animate={{
                y: [0, -60, -100],
                x: [0, (Math.random() - 0.5) * 20],
                opacity: [0, 0.8, 0],
                scale: [0.5, 1, 0.3],
              }}
              transition={{
                duration: 2.5 + Math.random() * 1.5,
                repeat: Infinity,
                delay: i * 0.3,
                ease: "easeOut",
              }}
            />
          ))}
        </div>

        {/* Heat glow at bottom */}
        <div
          className="absolute bottom-0 left-0 right-0 h-16"
          style={{
            background: "radial-gradient(ellipse 80% 100% at 50% 100%, hsl(var(--ember) / 0.3), transparent)",
          }}
        />
      </div>

      {/* Main Footer Content */}
      <div className="bg-card py-16 md:py-20">
        <div className="section-container text-center">
          {/* Main Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Volte sempre.
            </h3>
            <p className="font-display text-2xl md:text-3xl text-gradient-ember italic">
              O fogo nunca apaga aqui.
            </p>
          </motion.div>

          {/* Decorative ember dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center gap-3 mt-10"
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-primary"
                animate={{
                  opacity: [0.4, 1, 0.4],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.25,
                }}
              />
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-muted-foreground font-body text-sm mt-12"
          >
            © {new Date().getFullYear()} Modesto Hamburgueria. Todos os direitos reservados.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
