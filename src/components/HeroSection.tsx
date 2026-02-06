import { motion, type Variants, type Easing } from "framer-motion";
import heroBurger from "@/assets/hero-burger.jpg";
import logoModesto from "@/assets/logo-modesto.png";
import { ChevronDown } from "lucide-react";

// Animated text component that reveals words one by one
function AnimatedHeadline() {
  const words = ["O", "fogo", "que"];
  const highlightWord = "transforma";
  const endWords = ["a", "carne."];

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3,
      },
    },
  };

  const easeOut: Easing = [0.33, 1, 0.68, 1];

  const wordAnimation: Variants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      filter: "blur(10px)",
    },
    visible: { 
      opacity: 1, 
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: easeOut,
      },
    },
  };

  const highlightAnimation: Variants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      filter: "blur(10px)",
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      filter: "blur(0px)",
      transition: {
        duration: 0.6,
        ease: easeOut,
      },
    },
  };

  return (
    <motion.h1
      variants={container}
      initial="hidden"
      animate="visible"
      className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-6"
    >
      {words.map((word, i) => (
        <motion.span key={i} variants={wordAnimation} className="inline-block mr-3 md:mr-4">
          {word}
        </motion.span>
      ))}
      <motion.span 
        variants={highlightAnimation} 
        className="inline-block text-gradient-ember mr-3 md:mr-4"
      >
        {highlightWord}
      </motion.span>
      {endWords.map((word, i) => (
        <motion.span key={i} variants={wordAnimation} className="inline-block mr-3 md:mr-4">
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}

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
      {/* Background Image with subtle zoom animation */}
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <img
          src={heroBurger}
          alt="Hambúrguer artesanal na brasa"
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Dark overlay with animated opacity */}
      <motion.div 
        className="absolute inset-0 bg-background/75"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      {/* Radial glow behind content */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, hsl(var(--ember) / 0.15) 0%, transparent 60%)",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.8, 1, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Floating ember particles in background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${10 + Math.random() * 80}%`,
              bottom: "-5%",
              background: `radial-gradient(circle, hsl(var(--ember)), hsl(var(--parrilla-orange)))`,
            }}
            animate={{
              y: [0, -window.innerHeight * 0.8],
              x: [0, (Math.random() - 0.5) * 100],
              opacity: [0, 0.8, 0],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent z-10" />
      
      {/* Content - Centered */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        {/* Logo with entrance animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: -30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-10"
        >
          <motion.img 
            src={logoModesto} 
            alt="Modesto Hamburgueria" 
            className="w-24 h-24 md:w-32 md:h-32 mx-auto rounded-2xl shadow-2xl"
            style={{
              boxShadow: "0 0 60px hsl(var(--ember) / 0.3), 0 20px 40px rgba(0,0,0,0.4)",
            }}
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 80px hsl(var(--ember) / 0.5), 0 25px 50px rgba(0,0,0,0.5)",
            }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>

        {/* Tagline with letter spacing animation */}
        <motion.span
          initial={{ opacity: 0, letterSpacing: "0.1em" }}
          animate={{ opacity: 1, letterSpacing: "0.4em" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="block text-primary font-body text-sm uppercase mb-6"
        >
          Hamburgueria Artesanal
        </motion.span>
        
        {/* Animated Headline */}
        <AnimatedHeadline />
        
        {/* Subtitle with fade in */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="font-body text-base md:text-lg text-muted-foreground max-w-xl mx-auto"
        >
          Hambúrgueres feitos na parrilla, com ingredientes selecionados e o sabor único das brasas.
        </motion.p>
      </div>

      {/* Scroll Arrow */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 group cursor-pointer"
        aria-label="Scroll para Quem Somos"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
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
