// import video from '../assets/hero.mp4'
import logo from "../assets/logo.jpg";
import { motion } from "framer-motion";

export const HeroSect = () => {
  return (
    <section className="relative flex h-screen items-center justify-center">
      <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
        <motion.img
          src={logo}
          className="h-full w-full object-cover"
          initial={{ opacity: 0, y: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ ease: "easeOut", duration: 2 }}
        />
        {/*
         <video src={video} ></video> 
         */}
      </div>
      <div className="flex-grow">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black"></div>
        {/*<img src={logo} alt="restaurant" className='w-full p-4'/>*/}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div
          className="relative text-center text-white z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="w-full text-8xl p-4 font-bold mb-4">SAZÓN OJEDA</h1>
          <p className="p-4 text-4xl tracking-tighter text-white">
            Sabor Oaxaqueño
          </p>
        </motion.div>
      </div>
    </section>
  );
};
