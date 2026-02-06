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
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl">
            Tradição e <span className="text-gradient-ember">Paixão</span>
          </h2>
        </motion.div>

        {/* Main Content - Images on sides, text in center */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-4 hover-zoom rounded-lg overflow-hidden aspect-[4/5] hidden lg:block"
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
            className="lg:col-span-4 text-center flex flex-col justify-center"
          >
            <p className="font-body text-muted-foreground leading-relaxed mb-4 text-sm md:text-base">
              Nascemos da vontade de fazer diferente. No Modesto, cada hambúrguer 
              é preparado na parrilla, com o respeito que a carne merece e o sabor 
              que só o fogo proporciona.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-6 text-sm md:text-base">
              Nossa missão é simples: ingredientes de qualidade, técnica artesanal 
              e a experiência de comer um hambúrguer como ele deve ser — autêntico, 
              suculento e memorável.
            </p>
            <p className="font-display text-lg md:text-xl text-foreground italic">
              "Menos é mais quando o fogo faz a magia."
            </p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-4 hover-zoom rounded-lg overflow-hidden aspect-[4/5]"
          >
            <img
              src={aboutAmbiance}
              alt="Ambiente do restaurante"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Mobile - Show kitchen image below */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="lg:hidden mt-6 hover-zoom rounded-lg overflow-hidden aspect-video"
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
