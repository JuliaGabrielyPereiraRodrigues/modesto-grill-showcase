import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Phone } from "lucide-react";
import aboutAmbiance from "@/assets/about-ambiance.jpg";

export function LocationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="unidade" className="section-padding" ref={ref}>
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase">
            Venha nos visitar
          </span>
          <h2 className="font-display text-4xl md:text-5xl mt-4">
            Nossa <span className="text-gradient-ember">Unidade</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Map/Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative rounded-lg overflow-hidden aspect-video"
          >
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block hover-zoom"
            >
              <img
                src={aboutAmbiance}
                alt="Modesto Hamburgueria"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-background/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                <span className="px-6 py-3 bg-primary text-primary-foreground font-body rounded">
                  Abrir no Google Maps
                </span>
              </div>
            </a>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="p-3 bg-muted rounded-lg">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl mb-1">Endereço</h3>
                <p className="text-muted-foreground font-body">
                  Rua das Brasas, 123 - Centro<br />
                  São Paulo - SP, 01000-000
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-muted rounded-lg">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl mb-1">Horários</h3>
                <p className="text-muted-foreground font-body">
                  Terça a Domingo: 18h às 00h<br />
                  Segunda: Fechado
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-muted rounded-lg">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-xl mb-1">Contato</h3>
                <p className="text-muted-foreground font-body">
                  (11) 99999-9999
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://www.ifood.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-body font-medium tracking-wide rounded transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
              >
                Pedir no iFood
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 border border-border text-foreground font-body font-medium tracking-wide rounded transition-all duration-300 hover:bg-muted hover:border-primary/50"
              >
                Fale no WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
