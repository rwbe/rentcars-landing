import TestimonialSlider from './TestimonialSlider';
import Image from 'next/image';

const Testimonial = () => {
  return (
    <div className='h-full bg-testimonials py-6 items-center mx-4 xl:mx-0 relative' id='testmonial'>
      {/* Adicione os dois SVGs aqui como imagens */}
      <div className="absolute left-0 top-0 md:-left-6 xl:left-0">
        <Image src="/testimonials/aspasLeft.svg" alt="Aspas Esquerda" width={100} height={100} />
      </div>
      <div className="absolute right-0 top-0 md:-right-6 xl:right-0">
        <Image src="/testimonials/aspasRight.svg" alt="Aspas Direita" width={100} height={100} />
      </div>
      {/* Adicione o componente TestimonialSlider */}
      <div className="w-full">
        <TestimonialSlider />
      </div>
    </div>
  );
}

export default Testimonial;
