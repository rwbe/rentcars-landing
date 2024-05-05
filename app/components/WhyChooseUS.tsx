import { Services } from "@/lib/Services";
import Image from "next/image";

const WhyChooseUS = () => {
  return (
    <section className="py-8 xl:py-16" id="why">
      {/* Subtítulo */}
      <div className="bg-blue-100 font-medium py-3 px-1 text-blue-500 text-center mb-2 max-w-48 rounded-lg mx-auto">
        WHY CHOOSE US
      </div>
      {/* Título */}
      <h2 className="text-4xl font-bold text-center mb-12">We offer the best experience with our rental deals</h2>
      <div className="flex flex-col xl:flex-row gap-x-8 justify-arounded">
        <Image
          className="transform scale-x-[1] min-w-[50%] "
          src="/why-choose-us/audi_car.png"
          width={800}
          height={600}
          alt=""
        />
        <div className="py-8 px-4">
          {Services.map((Services) => {
            return (
              <div className="flex flex-col " key={Services.title}>
                <div className="flex space-x-4 items-center">
                  <div className=" p-4 bg-blue-100 rounded-md">
                    <Image
                      src={Services.iconUrl}
                      width={24}
                      height={24}
                      alt={Services.title}
                    />
                  </div>
                  <p className=" text-lg text-black leading-7 font-semibold ">
                    {Services.title}
                  </p>
                </div>
                <div>
                  <p className="py-2 ml-20 text-gray-400">
                    {Services.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUS;
