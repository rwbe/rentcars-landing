"use client";
import { Cars } from "../../lib/Cars";
import Image from "next/image";
import { motion } from "framer-motion";
import FadeIn from "@/variants";

const CarSlide = () => {
  return (
    <div>
      {/* Subtítulo */}
      <div className="bg-blue-100 font-medium py-3 text-blue-500 text-center mb-2 max-w-64 rounded-lg mx-auto">
        POPULAR RENTAL DEALS
      </div>
      {/* Título */}
      <h2 className="text-4xl font-bold text-center mb-4">Most popular cars rental deals</h2>
      <section id='deals' className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 place-items-center gap-4 px-4 md:px-6 h-[100%] -z-50">
        {Cars.map((car, i) => (
          <motion.div
            key={i}
            variants={FadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.6 }}
            className="flex flex-col bg-white p-4 shadow-md rounded container mx-auto"
          >
            <div className="py-6 flex self-center rounded">
              <Image
                className="hover:scale-[1.2] inset-0 w-full h-full object-cover transition-all mobile-image"
                src={car.image}
                width={600}
                height={400}
                alt={`Image ${i}`}
              />
            </div>

            <div className="mt-4">
              <p className="text-xl text-black font-medium">{car.brand}</p>
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <Image src="./cars-card/star.svg" width={24} height={24} alt="Star Icon" style={{ marginRight: '6px' }} />
                <span style={{ fontWeight: 'bold', marginRight: '3px' }}>{car.rating} </span> ({car.reviews} reviews)
              </div>
            </div>

            <div className="flex flex-col items-center justify-center mt-4">
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="flex items-center gap-x-2">
                  <Image src="./cars-card/passenger-icon.svg" width={24} height={24} alt="Passenger Icon" />
                  <span className="text-sm text-gray-500">{car.passengers}</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <Image src={`./cars-card/gear.svg`} width={24} height={24} alt="Gear Icon" />
                  <span className="text-sm text-gray-500">{car.gear}</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <Image src="./cars-card/ac.svg" width={24} height={24} alt="AC Icon" />
                  <span className="text-sm text-gray-500">{car.ac}</span>
                </div>
                <div className="flex items-center gap-x-2">
                  <Image src="./cars-card/doors.svg" width={24} height={24} alt="Door Icon" />
                  <span className="text-sm text-gray-500">{car.doors}</span>
                </div>
              </div>
            </div>

            {/* Divisória */}
            <div className="border-t border-gray-300 mt-4 mb-4"></div>

            {/* Preço */}
            <div className="flex justify-between items-center">
              <div className="flex items-center"> {/* Container para Price */}
                <p className="text-base text-gray-500 mr-2">Price </p> {/* Texto "Price" */}
                <div className="flex items-center ml-28"> {/* Container para o preço e /day */}
                  <p className="text-black text-xl font-semibold">${car.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p> {/* Preço com vírgula */}
                  <p className="text-gray-400 ml-1">/day</p> {/* /day em outra cor */}
                </div>
              </div>
            </div>

            {/* Botão "Rent Now" */}
            <button className="py-3 px-6 bg-[#1572D3] text-white rounded font-semibold hover:bg-opacity-80 duration-200 w-full mt-4 flex items-center justify-center">
              <span className="block text-center mr-2">Rent Now</span> {/* Texto "Rent Now" */}
              <Image src="./cars-card/arrow-right-info.svg" width={20} height={20} alt="Arrow Icon" /> {/* Ícone da seta */}
            </button>
          </motion.div>
        ))}
      </section>

      {/* Botão "Show all vehicles" */}
      <div className="flex items-center justify-center mt-12">
        <button className="py-3 px-6 border border-gray-200 text-[#595959] rounded font-medium hover:bg-gray-50 duration-200 flex items-center space-x-2">
          <span>Show all vehicles</span>
          <Image src="./cars-card/arrow-right.svg" width={20} height={20} alt="Arrow Icon" />
        </button>
      </div>
    </div>
  );
};

export default CarSlide;
