import React from 'react';

const DownloadApp = () => {
  return (
    <section id="download" className="mt-36 flex justify-end">
      <div className="container mx-auto">
      <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Lado esquerdo */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            {/* Container para alinhar o texto DOWNLOAD */}
            <div className="text-center md:text-left mb-8">
              {/* Subtítulo */}
              <div className="bg-blue-100 font-medium py-3 px-4 text-blue-500 mb-4 rounded-lg md:text-center inline-block">
                DOWNLOAD
              </div>
              {/* Título */}
              <h2 className="text-3xl md:text-5xl font-semibold mb-6">
                Download Rentcars <br /> App for{' '}
                <span className="text-blue-500">FREE </span>
              </h2>
              {/* Descrição */}
              <p className="text-base md:text-lg text-gray-400 mb-8">
                For faster, easier booking and exclusive deals.
              </p>
              {/* Botões de Download */}
              <div className="flex justify-center md:justify-start">
                <img
                  src="./download/google_play.svg"
                  alt="Google Play Button"
                  className="w-48 h-auto mr-4 cursor-pointer"
                  style={{ width: "auto", height: "auto" }}
                />
                <img
                  src="./download/apple_store.svg"
                  alt="App Store Button"
                  className="w-48 h-auto cursor-pointer"
                  style={{ width: "auto", height: "auto" }}
                />
              </div>
            </div>
          </div>
          {/* Lado direito */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            {/* Imagem no lado direito */}
            <img
              src="./download/iphone.png"
              alt="Imagem"
              className="w-full max-w-lg h-auto mt-8 md:mt-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
