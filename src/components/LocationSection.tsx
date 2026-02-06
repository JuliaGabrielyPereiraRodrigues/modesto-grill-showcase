import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Clock, Phone, Instagram } from "lucide-react";

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

            {/* Social Icons - Integrated */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-muted rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-muted rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="Facebook"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-muted rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
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
