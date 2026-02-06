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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase">
            Nossos Campeões
          </span>
          <h2 className="font-display text-4xl md:text-5xl mt-4">
            Destaques do <span className="text-gradient-ember">Modesto</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
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

                <motion.p
                  className="font-body text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                >
                  {selectedBurger.description}
                </motion.p>

                {/* Animated Ingredients List */}
                <div className="space-y-3">
                  <h4 className="font-display text-lg text-foreground">Ingredientes</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedBurger.ingredients.map((ingredient, i) => (
                      <motion.span
                        key={ingredient}
                        initial={{ opacity: 0, scale: 0.8, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 0.25 + i * 0.08, duration: 0.3 }}
                        className="px-4 py-2 bg-muted rounded-full text-sm font-body text-foreground border border-border hover:border-primary/50 transition-colors duration-300"
                      >
                        {ingredient}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Right Side - Circular Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="order-1 lg:order-2 relative"
          >
            {/* Main Selected Image */}
            <div className="relative mx-auto w-full max-w-md aspect-square">
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedBurger.id}
                  initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.9, rotate: 5 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl"
                  style={{
                    boxShadow: "0 0 60px hsl(var(--ember) / 0.3), 0 0 100px hsl(var(--ember) / 0.1)",
                  }}
                >
                  <img
                    src={selectedBurger.image}
                    alt={selectedBurger.name}
                    className="w-full h-full object-cover"
                  />
                  {/* Inner glow */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "radial-gradient(circle at 30% 30%, transparent 50%, hsl(var(--background) / 0.3) 100%)",
                    }}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Circular Thumbnail Navigation */}
              <div className="absolute inset-0 pointer-events-none">
                {highlights.map((burger, index) => {
                  const isSelected = index === selectedIndex;
                  // Position thumbnails in a circle around the main image
                  const angle = (index * (360 / highlights.length) - 90) * (Math.PI / 180);
                  const radius = 58; // percentage from center
                  const x = 50 + radius * Math.cos(angle);
                  const y = 50 + radius * Math.sin(angle);

                  return (
                    <motion.button
                      key={burger.id}
                      onClick={() => setSelectedIndex(index)}
                      className={`absolute pointer-events-auto rounded-full overflow-hidden border-2 transition-all duration-300 ${
                        isSelected
                          ? "border-primary scale-110 z-10"
                          : "border-border/50 hover:border-primary/50 hover:scale-105"
                      }`}
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: "translate(-50%, -50%)",
                        width: isSelected ? "80px" : "60px",
                        height: isSelected ? "80px" : "60px",
                      }}
                      whileHover={{ scale: isSelected ? 1.1 : 1.15 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <img
                        src={burger.image}
                        alt={burger.name}
                        className="w-full h-full object-cover"
                      />
                      {isSelected && (
                        <motion.div
                          className="absolute inset-0 border-2 border-primary rounded-full"
                          initial={{ scale: 1.2, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          layoutId="selected-ring"
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>
            </div>

            {/* Mobile Dot Navigation */}
            <div className="flex justify-center gap-3 mt-8 lg:hidden">
              {highlights.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === selectedIndex
                      ? "bg-primary scale-125"
                      : "bg-muted hover:bg-primary/50"
                  }`}
                  aria-label={`Selecionar ${highlights[index].name}`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 md:mt-16"
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
    </section>
  );
}
