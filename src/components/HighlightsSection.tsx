import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
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
  const [selectedIndex, setSelectedIndex] = useState(0);

  const selectedBurger = highlights[selectedIndex];

  return (
    <section id="destaques" className="section-padding bg-card overflow-hidden" ref={ref}>
      <div className="section-container">
        {/* Header */}
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Ingredients Panel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-2 lg:order-1"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedBurger.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.4 }}
                className="space-y-6"
              >
                {/* Burger Name */}
                <div>
                  <motion.span
                    className="text-primary text-sm font-body tracking-wider uppercase"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {selectedBurger.tagline}
                  </motion.span>
                  <motion.h3
                    className="font-display text-3xl md:text-4xl lg:text-5xl mt-2 text-gradient-ember"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                  >
                    {selectedBurger.name}
                  </motion.h3>
                </div>

                {/* Description */}
                <motion.p
                  className="font-body text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {selectedBurger.description}
                </motion.p>

                {/* Ingredients */}
                <div className="space-y-3">
                  <h4 className="font-display text-lg text-foreground">Ingredientes</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedBurger.ingredients.map((ingredient, i) => (
                      <motion.span
                        key={ingredient}
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 0.25 + i * 0.08, duration: 0.3 }}
                        className="px-3 py-1.5 bg-muted rounded-full text-sm font-body text-foreground border border-border hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                      >
                        {ingredient}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right Side - Gallery with Zoom */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2"
          >
            {/* Main Grid Gallery */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((burger, index) => {
                const isSelected = index === selectedIndex;

                return (
                  <motion.button
                    key={burger.id}
                    onClick={() => setSelectedIndex(index)}
                    className={`relative overflow-hidden rounded-xl transition-all duration-500 ${
                      isSelected ? "col-span-2 row-span-1" : ""
                    }`}
                    style={{
                      aspectRatio: isSelected ? "16/9" : "1/1",
                    }}
                    layout
                    whileHover={{ scale: isSelected ? 1 : 1.03 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Image */}
                    <motion.img
                      src={burger.image}
                      alt={burger.name}
                      className="w-full h-full object-cover"
                      layout
                    />

                    {/* Overlay */}
                    <motion.div
                      className={`absolute inset-0 transition-all duration-300 ${
                        isSelected
                          ? "bg-gradient-to-t from-background/80 via-transparent to-transparent"
                          : "bg-background/40 hover:bg-background/20"
                      }`}
                    />

                    {/* Selected Glow Border */}
                    {isSelected && (
                      <motion.div
                        layoutId="selectedBorder"
                        className="absolute inset-0 rounded-xl border-2 border-primary pointer-events-none"
                        style={{
                          boxShadow: "0 0 30px hsl(var(--ember) / 0.4), inset 0 0 20px hsl(var(--ember) / 0.1)",
                        }}
                      />
                    )}

                    {/* Name Label */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 p-3 transition-all duration-300 ${
                        isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                      }`}
                    >
                      <p className="font-display text-lg text-foreground">{burger.name}</p>
                    </div>

                    {/* Unselected number indicator */}
                    {!isSelected && (
                      <div className="absolute top-2 left-2 w-6 h-6 rounded-full bg-background/80 flex items-center justify-center">
                        <span className="text-xs font-body text-foreground">{index + 1}</span>
                      </div>
                    )}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
