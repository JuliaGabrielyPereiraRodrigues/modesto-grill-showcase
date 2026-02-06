import { motion } from "framer-motion";
import heroBurger from "@/assets/hero-burger.jpg";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("quem-somos");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/40 z-10" />
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBurger}
          alt="Hambúrguer artesanal na brasa"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10" />
      
      {/* Content */}
      <div className="section-container relative z-20">
        <div className="max-w-2xl">
          {/* Logo Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="w-20 h-20 md:w-24 md:h-24 bg-background rounded-lg flex items-center justify-center border border-border shadow-lg">
              <span className="font-display text-4xl md:text-5xl text-foreground">M</span>
            </div>
          </motion.div>

          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="inline-block text-primary font-body text-sm tracking-[0.3em] uppercase mb-4"
          >
            Hamburgueria Artesanal
          </motion.span>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
          >
            O fogo que
            <span className="block text-gradient-ember">transforma</span>
            a carne.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body text-base md:text-lg text-muted-foreground max-w-md"
          >
            Hambúrgueres feitos na parrilla, com ingredientes selecionados e o sabor único das brasas.
          </motion.p>
        </div>
      </div>

      {/* Scroll Arrow - Fixed at bottom, not overlapping content */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 group cursor-pointer"
        aria-label="Scroll para Quem Somos"
      >
        <div className="relative">
          {/* Outer glow */}
          <motion.div
            className="absolute -inset-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: "radial-gradient(circle, hsl(var(--ember) / 0.5), transparent 70%)",
              filter: "blur(10px)",
            }}
          />
          
          {/* Ember particles */}
          <div className="absolute -inset-4 pointer-events-none">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1.5 h-1.5 rounded-full bg-primary"
                style={{
                  left: `${50 + Math.cos((i * Math.PI * 2) / 4) * 24}%`,
                  top: `${50 + Math.sin((i * Math.PI * 2) / 4) * 24}%`,
                }}
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [0.6, 1.2, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.4,
                }}
              />
            ))}
          </div>

          {/* Main circle */}
          <motion.div
            className="relative w-12 h-12 rounded-full border-2 border-primary/60 flex items-center justify-center group-hover:border-primary transition-colors duration-300 bg-background/80 backdrop-blur-sm"
          >
            {/* Grill lines */}
            <div className="absolute inset-2 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-full h-0.5 bg-primary rounded"
                  style={{ top: `${25 + i * 25}%` }}
                />
              ))}
            </div>

            {/* Arrow */}
            <motion.div
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-5 h-5 text-primary" />
            </motion.div>
          </motion.div>
        </div>
      </motion.button>
    </section>
  );
}
