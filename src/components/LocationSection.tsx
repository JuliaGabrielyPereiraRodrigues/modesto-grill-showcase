import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Phone } from "lucide-react";

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
          className="text-center mb-12"
        >
          <span className="text-primary font-body text-sm tracking-[0.3em] uppercase">
            Venha nos visitar
          </span>
          <h2 className="font-display text-4xl md:text-5xl mt-4">
            Nossa <span className="text-gradient-ember">Unidade</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Left - Google Maps Embed */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative rounded-lg overflow-hidden aspect-[4/3] bg-card border border-border"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.1975886095874!2d-46.65512268502135!3d-23.56168288468119!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%20S%C3%A3o%20Paulo%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1699999999999!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Modesto Hamburgueria"
              className="absolute inset-0"
            />
          </motion.div>

          {/* Right - Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center space-y-6"
          >
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-muted rounded-lg shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg mb-1">Endereço</h3>
                <p className="text-muted-foreground font-body text-sm">
                  Rua das Brasas, 123 - Centro<br />
                  São Paulo - SP, 01000-000
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-muted rounded-lg shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg mb-1">Horários</h3>
                <p className="text-muted-foreground font-body text-sm">
                  Terça a Domingo: 18h às 00h<br />
                  Segunda: Fechado
                </p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex items-start gap-4">
              <div className="p-3 bg-muted rounded-lg shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display text-lg mb-1">Contato</h3>
                <p className="text-muted-foreground font-body text-sm">
                  (11) 99999-9999
                </p>
              </div>
            </div>


            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#cardapio"
                className="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary font-body font-medium tracking-wide rounded transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
              >
                Cardápio
              </a>
              <a
                href="https://www.ifood.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-body font-medium tracking-wide rounded transition-all duration-300 hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20"
              >
                Pedir no iFood
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
