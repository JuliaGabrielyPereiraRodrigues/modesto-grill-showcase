import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import burgerPequeno from "@/assets/burger-pequeno.jpg";
import burgerMedio from "@/assets/burger-medio.jpg";
import burgerGrande from "@/assets/burger-grande.jpg";

const sizes = [
  {
    name: "Pequeno",
    weight: "120g",
    description: "Para quem quer saborear sem exageros",
    image: burgerPequeno,
  },
  {
    name: "Médio",
    weight: "200g",
    description: "O equilíbrio perfeito de sabor e saciedade",
    image: burgerMedio,
  },
  {
    name: "Grande",
    weight: "280g",
    description: "Para os verdadeiros amantes de hambúrguer",
    image: burgerGrande,
  },
];

export function SizesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="tamanhos" className="section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">
            Qual o tamanho da sua <span className="text-gradient-ember">fome</span>?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {sizes.map((size, index) => (
            <motion.div
              key={size.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image Container with creative hover */}
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                {/* Base Image */}
                <motion.img
                  src={size.image}
                  alt={`Hambúrguer ${size.name}`}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredIndex === index ? 1.15 : 1,
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />

                {/* Dark overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-background/70"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Ember glow effect */}
                <motion.div
                  className="absolute inset-0 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    background: "radial-gradient(circle at center, hsl(var(--ember) / 0.2), transparent 70%)",
                  }}
                />

                {/* Hover Content */}
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center p-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    y: hoveredIndex === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  {/* Weight with fire effect */}
                  <motion.div
                    className="relative"
                    animate={{
                      scale: hoveredIndex === index ? [1, 1.05, 1] : 1,
                    }}
                    transition={{ duration: 0.8, repeat: hoveredIndex === index ? Infinity : 0 }}
                  >
                    <span className="font-display text-6xl md:text-7xl text-gradient-ember">
                      {size.weight}
                    </span>
                    {/* Fire particles */}
                    {hoveredIndex === index && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={i}
                            className="absolute w-2 h-2 rounded-full bg-primary/80"
                            style={{ left: `${(i - 1) * 15}px` }}
                            animate={{
                              y: [0, -20, -30],
                              opacity: [0.8, 0.4, 0],
                              scale: [1, 0.6, 0.2],
                            }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              delay: i * 0.2,
                            }}
                          />
                        ))}
                      </div>
                    )}
                  </motion.div>

                  <motion.p
                    className="font-body text-muted-foreground text-center mt-4 max-w-[200px]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {size.description}
                  </motion.p>

                  {/* Grill lines decoration */}
                  <motion.div
                    className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 0.3 : 0 }}
                  >
                    {[...Array(4)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-full h-1 bg-primary"
                        style={{ bottom: `${i * 12}px` }}
                      />
                    ))}
                  </motion.div>
                </motion.div>

                {/* Default label (when not hovered) */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-background via-background/80 to-transparent"
                  animate={{
                    opacity: hoveredIndex === index ? 0 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-display text-2xl text-center">{size.name}</h3>
                  <p className="text-primary font-body font-medium text-center mt-1">
                    {size.weight}
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
