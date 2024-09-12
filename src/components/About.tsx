import about from "../assets/about.jpg";
// import { ABOUT } from "../constants";
import { motion } from "framer-motion";

export const About = () => {
  const ABOUT = {
    header: "Cocinamos con pasión",
    content:
      "En Sazón Ojeda, traemos lo mejor de la gastronomía oaxaqueña a tu mesa. Nuestro restaurante está comprometido con ofrecerte una experiencia culinaria auténtica, con platillos que capturan los sabores tradicionales de Oaxaca, elaborados con ingredientes frescos y técnicas ancestrales. Desde los famosos moles oaxaqueños hasta tlayudas crujientes y mezcal artesanal, cada bocado es una muestra del rico patrimonio culinario de esta región. Ven y disfruta de una atmósfera acogedora donde el sazón, la tradición y la calidad se fusionan para brindarte una experiencia gastronómica inigualable. ¡Te esperamos para compartir el auténtico sabor de Oaxaca!",
  };
  return (
    <section className="container mx-auto mb-8" id="about">
      <h2 className="mb-8 text-center text-3xl tracking-lighter lg:text-4xl text-white">
        Sobre nosotros
      </h2>
      <div className="flex flex-wrap">
        <div className="w-full p-4 lg:w-1/2">
          <img src={about} alt="" className="rounded-3xl lg:-rotate-3" />
        </div>
        <div className="w-full px-2 lg:w-1/2">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl tracking-tighter lg:text-6xl text-white"
          >
            {ABOUT.header}
          </motion.h2>
          <div className="mb-8 mt-1 h-2 w-36 bg-rose-300 lg:-rotate-3"></div>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="m-8 text-2xl leading-relaxed tracking-tight lg:max-w-xl text-white"
          >
            {ABOUT.content}
          </motion.p>
        </div>
      </div>
    </section>
  );
};
