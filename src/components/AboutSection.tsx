import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import aboutKitchen from "@/assets/about-kitchen.jpg";
import aboutAmbiance from "@/assets/about-ambiance.jpg";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="quem-somos" className="section-padding bg-card" ref={ref}>
      <div className="section-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase">
            Conheça nossa história
          </span>
          <h2 className="font-display text-4xl md:text-5xl mt-4">
            Quem <span className="text-gradient-ember">Somos</span>
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="hover-zoom rounded-lg overflow-hidden aspect-[3/4] hidden lg:block"
          >
            <img
              src={aboutKitchen}
              alt="Nossa cozinha com parrilla"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Center Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center flex flex-col justify-center py-4"
          >
            <p className="font-body text-muted-foreground leading-relaxed mb-4">
              Nascemos da vontade de fazer diferente. No Modesto, cada hambúrguer 
              é preparado na parrilla, com o respeito que a carne merece e o sabor 
              que só o fogo proporciona.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Nossa missão é simples: ingredientes de qualidade, técnica artesanal 
              e a experiência de comer um hambúrguer como ele deve ser — autêntico, 
              suculento e memorável.
            </p>
            <p className="font-display text-lg text-foreground italic">
              "Menos é mais quando o fogo faz a magia."
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hover-zoom rounded-lg overflow-hidden aspect-[3/4]"
          >
            <img
              src={aboutAmbiance}
              alt="Ambiente do restaurante"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Mobile - Kitchen image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:hidden mt-8 hover-zoom rounded-lg overflow-hidden aspect-video"
        >
          <img
            src={aboutKitchen}
            alt="Nossa cozinha com parrilla"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
