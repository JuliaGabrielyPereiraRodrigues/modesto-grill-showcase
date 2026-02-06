import { motion, useInView } from "framer-motion";
import { useRef } from "react";
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

  return (
    <section id="tamanhos" className="section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase">
            Escolha seu tamanho
          </span>
          <h2 className="font-display text-4xl md:text-5xl mt-4">
            Tamanhos <span className="text-gradient-ember">Perfeitos</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sizes.map((size, index) => (
            <motion.div
              key={size.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="hover-zoom rounded-lg overflow-hidden aspect-square mb-6 glow-ember">
                <img
                  src={size.image}
                  alt={`Hambúrguer ${size.name}`}
                  className="w-full h-full object-cover"
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="text-center">
                <h3 className="font-display text-2xl mb-1">{size.name}</h3>
                <p className="text-primary font-body font-medium text-lg mb-2">
                  {size.weight}
                </p>
                <p className="text-muted-foreground font-body text-sm">
                  {size.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
