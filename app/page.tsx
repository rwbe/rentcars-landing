
"use client";
import { useState, useEffect } from 'react';
import { Cars, Steps, Footer, Header, Hero, WhyChooseUS, Testmonial, DownloadApp, BackToTopBtn } from './components';
import Preloader from './components/element/Preloader';

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simula um tempo de carregamento para teste
    const timeout = setTimeout(() => {
      setLoading(false); // Após o tempo de simulação, define loading como false para ocultar o preloader
    }, 2000); // Tempo de simulação de 3 segundos

    return () => clearTimeout(timeout);
  }, []);

  return (
    <main className='max-w-[1920px] bg-white mx-auto relative overflow-hidden'> 
      {loading && <Preloader />} {/* Renderiza o preloader se loading for true */}
      <Header/>
      <Hero/>
      <Steps/>
      <WhyChooseUS/>
      <Cars/>
      <Testmonial/>
      <DownloadApp/>
      <Footer/>
      <BackToTopBtn />
    </main>
  )
}
