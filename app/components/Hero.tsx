"use client";

import { useContext, useState } from "react"; // Importe o useState
import Image from "next/image";
import hero_bg_mobile from "../../public/hero/CarMobile.png"; // Importe a imagem para dispositivos móveis
import hero_bg_desktop from "../../public/hero/CarDesktop.png"; // Importe a imagem para desktop
import { motion } from "framer-motion";
import FadeIn from "@/variants"; // Certifique-se de importar corretamente o FadeIn
import Search from "./Search";
import { SearchContext, SearchContextValue } from "../context/search";
import { useMediaQuery } from 'react-responsive';


const Hero = () => {
  const { isSearching } = useContext(SearchContext) as SearchContextValue;

  const [animationCompleted, setAnimationCompleted] = useState(false); // Adicione o estado

  const desktopMode = useMediaQuery({ query: "(min-width: 1300px)" });
  const mobileMode = !desktopMode;

  return (
    <section className="h-[90vh] xl:h-screen bg-[#b2b7c2]/10 bg-right-bottom bg-none" id="home">
      <div className="container mx-auto h-full w-full xl:pt:10">
        <div className="flex flex-col xl:flex-row justify-center items-center xl:justify-between h-full md:px-4">
          <div className="text-center xl:max-w-2xl xl:text-left mt-8 xl:mt-0">
            <motion.h1
              variants={FadeIn("down", 0.1)}
              initial="hidden"
              animate={animationCompleted || isSearching ? "show" : "hidden"} // Ajuste a animação
              onAnimationComplete={() => setAnimationCompleted(true)} // Marque a animação como concluída
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="leading-[2.5rem] font-semibold xl:text-[3rem] xl:leading-[3rem] py-2 xl:py-4 mb-4"
            >
              Find, book and <br /> rent a car <span className="text-blue-500">Easily</span>
            </motion.h1>
            <motion.p
              variants={FadeIn("down", 0.2)}
              initial="hidden"
              animate={animationCompleted || isSearching ? "show" : "hidden"} // Ajuste a animação
              whileInView={"show"}
              viewport={{ once: false, amount: 0.6 }}
              className="description mx-auto xl:mx-0 mb-6 xl:mb-10 xl:max-w-xl"
            >
              Get a car wherever and whenever you  <br />
              need it with your IOS and Android device.
            </motion.p>
            <div className="flex justify-center mt-5 xl:justify-start">
              <motion.div
                variants={FadeIn("down", 0.4)}
                initial="hidden"
                animate={animationCompleted || isSearching ? "show" : "hidden"} // Ajuste a animação
                whileInView={"show"}
                viewport={{ once: false, amount: 0.4 }}
                className="flex justify-center xl:justify-start gap-4 cursor-pointer "
              >
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Image src="./hero/google_play.svg" alt="Download on Google Play" width={160} height={50} />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Image src="./hero/apple_store.svg" alt="Download on the App Store" width={160} height={50} />
                </a>
              </motion.div>
            </div>
            {/* Linha SVG */}
            <div className="relative ">
            {desktopMode && (
              <motion.svg
                variants={FadeIn("down", 0.6)}
                initial="hidden"
                animate={animationCompleted || isSearching ? "show" : "hidden"} // Ajuste a animação
                whileInView={"show"}
                viewport={{ once: false, amount: 0.4 }}
                width="135" height="20" viewBox="0 0 135 20" fill="none"
                className="absolute bottom-40 left-[245px] transform translate-x-[150px]"
              >
                <motion.path
                  d="M134.398 2.44549C57.1256 -2.5909 23.8505 5.91274 1.51269 9.4328C1.16554 12.3701 1.29738 14.7861 0.927661 19.4528C60.8229 -0.00283431 100.753 3.19444 134.353 4.43383C134.367 4.06436 134.357 3.5539 134.398 2.44549Z"
                  fill="#3B82F6"
                />
              </motion.svg>
            )}
            </div>
          </div>
          <motion.div
            variants={FadeIn("up", 0.6)}
            initial="hidden"
            animate={animationCompleted || isSearching ? "show" : "hidden"} // Ajuste a animação
            whileInView={"show"}
            viewport={{ once: true, amount: 0.6 }}
            className="text-center xl:max-w-2xl xl:text-right md:max-w-[70vw]"
          >
            {/* Usando a tag picture para especificar diferentes imagens com base no dispositivo */}
            <picture>
              {/* Imagem para dispositivos móveis */}
              <source srcSet={hero_bg_mobile.src} media="(max-width: 767px)" />
              {/* Imagem padrão para desktop */}
              <img src={hero_bg_desktop.src} alt="Car" style={{ maxWidth: "100%", height: "auto", marginTop: "20px" }} />
            </picture>
          </motion.div>
        </div>
      </div>
      {isSearching ? (
        <motion.div
          initial={{ y: "-100%" }}
          animate={{ y: 0 }}
          className="fixed top-[80px] z-10 w-full max-w-[1920px]"
        >
          <Search />
        </motion.div>
      ) : (
        <div className="-mt-12 w-full max-w-[1300px] mx-auto">
          <motion.div variants={FadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.2 }}>
            <Search />
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Hero;
