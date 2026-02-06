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

function GrillLines() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-full h-1 bg-gradient-to-r from-transparent via-primary/60 to-transparent"
          style={{ top: `${20 + i * 15}%` }}
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: i * 0.1, duration: 0.4 }}
        />
      ))}
    </div>
  );
}

function EmberSparks() {
  return (
    <div className="absolute inset-0 pointer-events-none z-20">
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary"
          style={{
            left: `${20 + Math.random() * 60}%`,
            bottom: "10%",
          }}
          animate={{
            y: [0, -60 - Math.random() * 40],
            x: [0, (Math.random() - 0.5) * 30],
            opacity: [0, 1, 0],
            scale: [0.5, 1, 0.3],
          }}
          transition={{
            duration: 1.5 + Math.random(),
            repeat: Infinity,
            delay: i * 0.2,
          }}
        />
      ))}
    </div>
  );
}

export function SizesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="tamanhos" className="section-padding" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase">
            Nossos Hambúrgueres
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl mt-4">
            Qual o tamanho da sua <span className="text-gradient-ember">fome</span>?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
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
              <div className="relative aspect-square rounded-xl overflow-hidden bg-card border border-border">
                {/* Base Image */}
                <motion.img
                  src={size.image}
                  alt={`Hambúrguer ${size.name}`}
                  className="w-full h-full object-cover"
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                    filter: hoveredIndex === index ? "brightness(0.4)" : "brightness(1)",
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                />

                {/* Grill lines overlay on hover */}
                {hoveredIndex === index && <GrillLines />}

                {/* Ember sparks on hover */}
                {hoveredIndex === index && <EmberSparks />}

                {/* Dark gradient overlay on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Hover Content */}
                <motion.div
                  className="absolute inset-0 flex flex-col items-center justify-center p-6 z-30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    y: hoveredIndex === index ? 0 : 20,
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.span
                    className="font-display text-5xl md:text-6xl lg:text-7xl text-gradient-ember"
                    animate={{
                      scale: hoveredIndex === index ? [1, 1.05, 1] : 1,
                    }}
                    transition={{ duration: 0.8, repeat: hoveredIndex === index ? Infinity : 0 }}
                  >
                    {size.weight}
                  </motion.span>
                  <p className="font-body text-muted-foreground text-center mt-4 max-w-[180px]">
                    {size.description}
                  </p>
                </motion.div>

                {/* Default label */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background via-background/90 to-transparent"
                  animate={{
                    opacity: hoveredIndex === index ? 0 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="font-display text-xl md:text-2xl text-center">{size.name}</h3>
                  <p className="text-primary font-body font-medium text-center text-sm mt-1">
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
