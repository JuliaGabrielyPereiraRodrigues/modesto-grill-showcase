import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronUp, Instagram, Flame } from "lucide-react";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={ref} className="relative overflow-hidden bg-card">
      {/* Main Footer Content */}
      <div className="py-16 md:py-20">
        <div className="section-container text-center">
          {/* Scroll to Top Arrow */}
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="group cursor-pointer mb-10 mx-auto block"
            aria-label="Voltar ao topo"
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
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ChevronUp className="w-5 h-5 text-primary" />
                </motion.div>
              </motion.div>
            </div>
          </motion.button>

          {/* Social Media Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-12"
          >
            <p className="font-body text-muted-foreground text-sm tracking-wider uppercase mb-6">
              Nos acompanhe nas redes
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-muted/50 rounded-full text-muted-foreground hover:text-primary transition-all duration-300"
                aria-label="Instagram"
              >
                <motion.div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
                  style={{
                    background: "radial-gradient(circle, hsl(var(--ember) / 0.3), transparent 70%)",
                  }}
                  transition={{ duration: 0.3 }}
                />
                <Instagram size={24} className="relative z-10" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-muted/50 rounded-full text-muted-foreground hover:text-primary transition-all duration-300"
                aria-label="Facebook"
              >
                <motion.div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
                  style={{
                    background: "radial-gradient(circle, hsl(var(--ember) / 0.3), transparent 70%)",
                  }}
                  transition={{ duration: 0.3 }}
                />
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative z-10">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-4 bg-muted/50 rounded-full text-muted-foreground hover:text-primary transition-all duration-300"
                aria-label="WhatsApp"
              >
                <motion.div
                  className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
                  style={{
                    background: "radial-gradient(circle, hsl(var(--ember) / 0.3), transparent 70%)",
                  }}
                  transition={{ duration: 0.3 }}
                />
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 relative z-10">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Main Message with flame icons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-2xl mx-auto relative"
          >
            {/* Flame icons around the text */}
            <div className="flex items-center justify-center gap-6 mb-4">
              <motion.div
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.1, 1],
                  rotate: [-5, 5, -5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Flame className="w-8 h-8 text-primary" />
              </motion.div>
              
              <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
                Volte sempre.
              </h3>
              
              <motion.div
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.1, 1],
                  rotate: [5, -5, 5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
              >
                <Flame className="w-8 h-8 text-primary" />
              </motion.div>
            </div>

            <p className="font-display text-2xl md:text-3xl text-gradient-ember italic">
              O fogo nunca apaga aqui.
            </p>

            {/* Floating ember particles */}
            <div className="absolute inset-0 pointer-events-none overflow-visible">
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1.5 h-1.5 rounded-full"
                  style={{
                    left: `${10 + i * 12}%`,
                    bottom: "-20px",
                    background: `radial-gradient(circle, hsl(var(--ember)), hsl(var(--parrilla-orange)))`,
                  }}
                  animate={{
                    y: [0, -80, -120],
                    x: [0, (Math.random() - 0.5) * 40],
                    opacity: [0, 1, 0],
                    scale: [0.5, 1.2, 0.3],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeOut",
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Decorative ember dots */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center gap-3 mt-10"
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-primary"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.4, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
