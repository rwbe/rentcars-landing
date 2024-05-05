"use client";

import React, { useState, useEffect } from 'react';
import Logo from '/public/Símbolo.png'; // Importe a imagem da logo aqui

const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    loading ? (
      <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
        <div className="flex flex-col items-center">
          <div className="relative">
            <img src={Logo.src} alt="Logo" className="h-10 w-auto" /> {/* Exibir a logo usando a tag <img> */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
            </div>
          </div>
        </div>
      </div>
    ) : null
  );
};

export default Preloader;
