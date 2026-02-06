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
      <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
      
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBurger}
          alt="Hambúrguer artesanal na brasa"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Ember Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
      
      {/* Content */}
      <div className="section-container relative z-20 pt-20">
        <div className="max-w-2xl">
          {/* Logo Placeholder - Space for Modesto M Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-24 h-24 md:w-32 md:h-32 mb-8 bg-background rounded-lg flex items-center justify-center border border-border overflow-hidden"
          >
            {/* Placeholder for the M logo - user will provide the actual logo */}
            <span className="font-display text-5xl md:text-6xl text-foreground">M</span>
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
            className="font-display text-5xl md:text-7xl lg:text-8xl leading-tight mb-6"
          >
            O fogo que
            <span className="block text-gradient-ember">transforma</span>
            a carne.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="font-body text-lg text-muted-foreground mb-8 max-w-md"
          >
            Hambúrgueres feitos na parrilla, com ingredientes selecionados e o sabor único das brasas.
          </motion.p>
        </div>
      </div>

      {/* Scroll Arrow with Grill/Parrilla Effect */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 group cursor-pointer"
        aria-label="Scroll para Quem Somos"
      >
        {/* Ember Glow Ring */}
        <div className="relative">
          {/* Outer glow ring */}
          <motion.div
            className="absolute -inset-4 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: "radial-gradient(circle, hsl(var(--ember) / 0.4), transparent 70%)",
              filter: "blur(8px)",
            }}
          />
          
          {/* Animated ember particles */}
          <div className="absolute -inset-6 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-primary"
                style={{
                  left: `${50 + Math.cos((i * Math.PI * 2) / 6) * 30}%`,
                  top: `${50 + Math.sin((i * Math.PI * 2) / 6) * 30}%`,
                }}
                animate={{
                  opacity: [0.2, 1, 0.2],
                  scale: [0.5, 1.2, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>

          {/* Main arrow container */}
          <motion.div
            className="relative w-14 h-14 rounded-full border-2 border-primary/50 flex items-center justify-center group-hover:border-primary transition-colors duration-300"
            style={{
              background: "linear-gradient(180deg, hsl(var(--card)) 0%, hsl(var(--background)) 100%)",
            }}
          >
            {/* Grill lines effect */}
            <div className="absolute inset-2 opacity-20 group-hover:opacity-40 transition-opacity duration-300">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-full h-0.5 bg-primary rounded"
                  style={{ top: `${25 + i * 25}%` }}
                />
              ))}
            </div>

            {/* Animated Arrow */}
            <motion.div
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-6 h-6 text-primary" />
            </motion.div>
          </motion.div>

          {/* Heat waves effect */}
          <motion.div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-8 h-4 opacity-0 group-hover:opacity-100"
            animate={{
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          >
            <div 
              className="w-full h-full"
              style={{
                background: "linear-gradient(to top, hsl(var(--ember) / 0.3), transparent)",
                filter: "blur(4px)",
              }}
            />
          </motion.div>
        </div>
      </motion.button>
    </section>
  );
}
