// import video from '../assets/hero.mp4'
import logo from "../assets/logo.jpg";

export const HeroSect = () => {
  return (
    <section className="relative flex h-screen items-center justify-center">
      <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
        <img src={logo} className="h-full w-full object-cover" />
        {/*
         <video src={video} ></video> 
         */}
      </div>
      <div className="flex-grow">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent from-70% to-black"></div>
        {/*<img src={logo} alt="restaurant" className='w-full p-4'/>*/}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative text-center text-white z-10">
          <h1 className="w-full text-8xl p-4 font-bold mb-4">
            SAZÓN OJEDA
          </h1>
          <p className="p-4 text-lg tracking-tighter text-white">
            Sabor Oaxaqueño
          </p>
        </div>
      </div>
    </section>
  );
};
