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
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroBurger}
          alt="Hambúrguer artesanal na brasa"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-background/75" />

      {/* Radial glow behind logo */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(var(--ember) / 0.15) 0%, transparent 60%)",
        }}
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10" />
      
      {/* Content - Centered */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        {/* Logo Container with ember glow effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative inline-block mb-8"
        >
          {/* Outer glow ring */}
          <motion.div
            className="absolute -inset-4 rounded-2xl opacity-60"
            style={{
              background: "radial-gradient(circle, hsl(var(--ember) / 0.3), transparent 70%)",
              filter: "blur(20px)",
            }}
            animate={{
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          
          {/* Logo box */}
          <div className="relative w-28 h-28 md:w-36 md:h-36 bg-background rounded-xl flex items-center justify-center border border-primary/30 shadow-2xl">
            {/* Inner subtle glow */}
            <div 
              className="absolute inset-0 rounded-xl"
              style={{
                background: "linear-gradient(135deg, hsl(var(--ember) / 0.1) 0%, transparent 50%)",
              }}
            />
            {/* Placeholder M - user will replace with real logo */}
            <span className="font-display text-5xl md:text-6xl text-foreground relative z-10">M</span>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="block text-primary font-body text-sm tracking-[0.4em] uppercase mb-6"
        >
          Hamburgueria Artesanal
        </motion.span>
        
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
        >
          O fogo que <span className="text-gradient-ember">transforma</span> a carne.
        </motion.h1>
        
        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="font-body text-base md:text-lg text-muted-foreground max-w-xl mx-auto"
        >
          Hambúrgueres feitos na parrilla, com ingredientes selecionados e o sabor único das brasas.
        </motion.p>
      </div>

      {/* Scroll Arrow */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 group cursor-pointer"
        aria-label="Scroll para Quem Somos"
      >
        <div className="relative">
          {/* Glow on hover */}
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
