import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import burgerDestaque1 from "@/assets/burger-destaque-1.jpg";
import burgerDestaque2 from "@/assets/burger-destaque-2.jpg";
import burgerDestaque3 from "@/assets/burger-destaque-3.jpg";
import burgerDestaque4 from "@/assets/burger-destaque-4.jpg";

const highlights = [
  {
    id: 1,
    name: "Bacon Lover",
    tagline: "O clássico irresistível",
    description: "Blend bovino de 200g, bacon crocante em tiras generosas, queijo cheddar derretido, cebola caramelizada no açúcar mascavo e nosso molho especial da casa.",
    ingredients: ["Blend bovino 200g", "Bacon artesanal", "Cheddar inglês", "Cebola caramelizada", "Molho especial"],
    image: burgerDestaque1,
  },
  {
    id: 2,
    name: "Smash Duplo",
    tagline: "Crocância por fora, suculência por dentro",
    description: "Dois smash patties de 90g cada, prensados na chapa até dourar, com queijo derretido entre as camadas, picles artesanal e maionese de alho negro.",
    ingredients: ["2x Smash patty 90g", "Queijo prato", "Picles artesanal", "Maionese de alho negro", "Pão brioche"],
    image: burgerDestaque2,
  },
  {
    id: 3,
    name: "Porco & Brasa",
    tagline: "A fusão perfeita",
    description: "Pulled pork desfiado lentamente por 12 horas, combinado com blend bovino, coleslaw cremoso, molho barbecue defumado e cebolas crispy.",
    ingredients: ["Pulled pork 12h", "Blend bovino 150g", "Coleslaw cremoso", "BBQ defumado", "Cebola crispy"],
    image: burgerDestaque3,
  },
  {
    id: 4,
    name: "Modesto Classic",
    tagline: "A essência da casa",
    description: "Nosso hambúrguer signature: blend especial de 200g na parrilla, queijo muçarela de búfala, alface americana, tomate confitado e maionese de ervas frescas.",
    ingredients: ["Blend especial 200g", "Muçarela de búfala", "Alface americana", "Tomate confitado", "Maionese de ervas"],
    image: burgerDestaque4,
  },
];

export function HighlightsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedBurger, setSelectedBurger] = useState<typeof highlights[0] | null>(null);

  return (
    <section id="destaques" className="section-padding bg-card" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase">
            Nossos Campeões
          </span>
          <h2 className="font-display text-4xl md:text-5xl mt-4">
            Destaques do <span className="text-gradient-ember">Modesto</span>
          </h2>
        </motion.div>

        {/* Creative Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights.map((burger, index) => (
            <motion.button
              key={burger.id}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedBurger(burger)}
              className="group relative overflow-hidden rounded-lg aspect-[4/3] text-left"
            >
              <div className="absolute inset-0 hover-zoom">
                <img
                  src={burger.image}
                  alt={burger.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="text-primary text-xs font-body tracking-wider uppercase">
                  {burger.tagline}
                </span>
                <h3 className="font-display text-2xl md:text-3xl mt-2 group-hover:text-gradient-ember transition-all duration-300">
                  {burger.name}
                </h3>
                <p className="text-muted-foreground font-body text-sm mt-2 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Clique para ver detalhes
                </p>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
              </div>
            </motion.button>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <a
            href="https://www.ifood.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-body font-medium tracking-wide rounded transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
          >
            Pedir agora no iFood
          </a>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedBurger && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedBurger(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 50 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-lg overflow-hidden max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video">
                <img
                  src={selectedBurger.image}
                  alt={selectedBurger.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedBurger(null)}
                  className="absolute top-4 right-4 p-2 bg-background/80 rounded-full text-foreground hover:bg-background transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
              <div className="p-6 md:p-8">
                <span className="text-primary text-sm font-body tracking-wider uppercase">
                  {selectedBurger.tagline}
                </span>
                <h3 className="font-display text-3xl mt-2 mb-4">
                  {selectedBurger.name}
                </h3>
                <p className="text-muted-foreground font-body leading-relaxed mb-6">
                  {selectedBurger.description}
                </p>
                <div>
                  <h4 className="font-display text-lg mb-3">Ingredientes</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedBurger.ingredients.map((ingredient, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-muted rounded-full text-sm font-body text-muted-foreground"
                      >
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
