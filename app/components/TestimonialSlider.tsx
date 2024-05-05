"use client";

import React, { useState } from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Charlie Johnson",
      message:
        "“I feel very secure when using caretall's services. Your customer care team is very enthusiastic and the driver is always on time.”",
      location: "From New York, US",
      stars: 5,
      avatar: "/testimonials/avatar1.png",
    },
    {
      id: 2,
      name: "Jane Smith",
      message:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      location: "Los Angeles, US",
      stars: 4,
      avatar: "/testimonials/avatar2.png",
    },
    {
      id: 3,
      name: "Jonny Wilson",
      message:
        "“I have been using your services for 3 years. Your service is great, I will continue to use your service.”",
      location: "From New York, US ",
      stars: 5,
      avatar: "/testimonials/avatar3.png",
    },
  ];

  const fadeInVariants = {
    hidden: {
      opacity: 0,
      y: -50,
      x: 0,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    afterChange: (index: number) => setCurrentIndex(index),
    appendDots: (dots: any) => (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul style={{ padding: 0, margin: 0, listStyleType: "none" }}>{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div
        style={{
          width: "12px", // Tamanho dos pontos
          height: "12px", // Tamanho dos pontos
          borderRadius: "50%", // Forma dos pontos
          background: "#bbb", // Cor dos pontos
          marginLeft: "6px", // Espaçamento entre os pontos
          marginRight: "6px", // Espaçamento entre os pontos
          marginTop: "22px", // Espaçamento entre os pontos
        }}
      ></div>
    ),
  };

  return (
    <div className="py-8 flex justify-center items-center flex-col">
      <div className="bg-blue-100 font-medium py-2 px-4 text-blue-500 text-center mb-4 max-w-72 rounded-lg mx-auto xl:text-center">
        TESTIMONIALS
      </div>
      <h1 className="text-3xl xl:text-4xl font-bold mb-4 text-center">What people say about us?</h1>
      <div className="w-11/12 sm:w-4/5 lg:w-3/5 xl:w-2/4 mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="flex items-center justify-center rounded-xl">
              <div className="flex items-center bg-white rounded-xl">
                {/* Exibe a imagem apenas em telas maiores que o breakpoint md */}
                <div className="hidden md:block">
                  <img
                    src={testimonial.avatar}
                    alt="User Avatar"
                    style={{ width: "400px", height: "450px", objectFit: "cover", borderRadius: "0.5rem" }}
                  />
                </div>
                <motion.div variants={fadeInVariants} initial="hidden" animate="show" className="text-left max-w-md p-4 md:p-8">
                  <div className="flex items-center mb-2">
                    <p className="text-4xl text-black font-bold mr-2 md:mr-4">{testimonial.stars.toFixed(1)}</p>
                    <p className="text-lg text-black font-bold md:text-2xl mt-1 ">stars</p>
                  </div>
                  <div className="flex mb-2">
                    {[...Array(testimonial.stars)].map((_, index: number) => (
                      <img
                        key={index}
                        src="./testimonials/star.svg" // Caminho para o SVG
                        alt="Star Icon"
                        className="h-5 w-5 md:h-6 md:w-6 mr-1"
                      />
                    ))}
                  </div>
                  <p className="text-base md:text-lg leading-7 text-black italic mb-4">{testimonial.message}</p>
                  <p className="text-lg md:text-xl text-black capitalize font-bold mb-2">{testimonial.name}</p>
                  <p className="text-base md:text-lg text-gray-500">{testimonial.location}</p>
                </motion.div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TestimonialSlider;
