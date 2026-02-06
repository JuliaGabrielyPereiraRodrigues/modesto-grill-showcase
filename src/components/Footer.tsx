import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";

function EmberParticle({ delay, left, size }: { delay: number; left: number; size: number }) {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        left: `${left}%`,
        bottom: "0",
        width: `${size}px`,
        height: `${size}px`,
        background: `radial-gradient(circle, hsl(var(--ember)), hsl(var(--parrilla-orange)))`,
      }}
      animate={{
        y: [0, -80, -150],
        x: [0, Math.random() * 40 - 20, Math.random() * 60 - 30],
        opacity: [0, 1, 0],
        scale: [0.5, 1, 0.3],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay: delay,
        ease: "easeOut",
      }}
    />
  );
}

function FlameWave({ delay }: { delay: number }) {
  return (
    <motion.div
      className="absolute bottom-0 left-0 right-0 h-32"
      style={{
        background: "linear-gradient(to top, hsl(var(--ember) / 0.4), hsl(var(--parrilla-orange) / 0.2), transparent)",
      }}
      animate={{
        opacity: [0.3, 0.6, 0.3],
        scaleY: [1, 1.2, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  );
}

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const emberParticles = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      delay: Math.random() * 5,
      left: Math.random() * 100,
      size: Math.random() * 6 + 3,
    }));
  }, []);

  return (
    <footer ref={ref} className="relative bg-card overflow-hidden">
      {/* Fire/Ember Animation Container */}
      <div className="relative h-48 md:h-64 overflow-hidden">
        {/* Base glow */}
        <div 
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, hsl(var(--ember) / 0.15), transparent 80%)",
          }}
        />

        {/* Flame waves */}
        <FlameWave delay={0} />
        <FlameWave delay={0.5} />
        <FlameWave delay={1} />

        {/* Grill grate pattern */}
        <div className="absolute bottom-0 left-0 right-0 h-8 opacity-30">
          <div className="flex justify-between h-full">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-full bg-foreground/20 rounded-t"
              />
            ))}
          </div>
        </div>

        {/* Ember particles */}
        <div className="absolute inset-0 pointer-events-none">
          {emberParticles.map((particle) => (
            <EmberParticle
              key={particle.id}
              delay={particle.delay}
              left={particle.left}
              size={particle.size}
            />
          ))}
        </div>

        {/* Hot coals glow at bottom */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-16"
          style={{
            background: "radial-gradient(ellipse 100% 100% at 50% 100%, hsl(var(--ember) / 0.8), hsl(var(--parrilla-orange) / 0.4), transparent)",
          }}
          animate={{
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Center highlight glow */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-24"
          style={{
            background: "radial-gradient(ellipse at bottom, hsl(var(--ember) / 0.6), transparent 70%)",
            filter: "blur(20px)",
          }}
          animate={{
            opacity: [0.5, 0.9, 0.5],
            scaleX: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Message Section */}
      <div className="relative bg-background py-16 md:py-20">
        {/* Top ember glow line */}
        <div 
          className="absolute top-0 left-0 right-0 h-1"
          style={{
            background: "linear-gradient(to right, transparent, hsl(var(--ember)), hsl(var(--parrilla-orange)), hsl(var(--ember)), transparent)",
          }}
        />

        <div className="section-container text-center">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4"
          >
            Volte sempre.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-display text-2xl md:text-3xl lg:text-4xl text-gradient-ember italic"
          >
            O fogo nunca apaga aqui.
          </motion.p>

          {/* Decorative ember dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex justify-center gap-3 mt-8"
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-primary"
                animate={{
                  opacity: [0.4, 1, 0.4],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-muted-foreground font-body text-sm mt-12"
          >
            © {new Date().getFullYear()} Modesto Hamburgueria. Todos os direitos reservados.
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
