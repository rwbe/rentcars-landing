"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import Brands from "./Brands"; // Importando o componente Brands

const Step = ({ icon, title, description }: { icon: string; title: string; description: string }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-blue-100 w-24 h-24 rounded-lg flex justify-center items-center">
        <Image src={icon} width={40} height={40} alt={title} />
      </div>
      <h3 className="text-xl font-medium mt-8">{title}</h3>
      <p className="text-sm font-medium text-description text-center">{description}</p>
    </div>
  );
};

const CarSlideWithSteps = () => {
  return (
    <section id="steps" className="py-8 xl:py-16 mt-48">
      {/* Subtítulo */}
      <div className="bg-blue-100 font-medium py-3 px-1 text-blue-500 text-center mb-2 max-w-48 rounded-lg mx-auto">
        HOW IT WORK
      </div>
      {/* Título */}
      <h2 className="text-4xl font-bold text-center mb-12">Rent with following 3 working steps</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 place-items-center gap-4 px-4 md:px-6 h-[100%] -z-50">
        {/* Etapa 1 */}
        <motion.div
          key={1}
          className="flex flex-col bg-white p-4 rounded container mx-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Step
            icon="./steps/location-tick.svg"
            title="Choose location"
            description="Choose your and find your best car"
          />
        </motion.div>

        {/* Etapa 2 */}
        <motion.div
          key={2}
          className="flex flex-col bg-white p-4 rounded container mx-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Step
            icon="./steps/calendar.svg"
            title="Pick-up date"
            description="Select your pick up date and time to book your car"
          />
        </motion.div>

        {/* Etapa 3 */}
        <motion.div
          key={3}
          className="flex flex-col bg-white p-4 rounded container mx-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Step
            icon="./steps/car.svg"
            title="Book your car"
            description="Book your car and we will deliver it directly to you"
          />
        </motion.div>
      </div>

      {/* Inclusão do componente Brands */}
      <Brands />
    </section>
  );
};

export default CarSlideWithSteps;
