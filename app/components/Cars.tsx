import { CarSlide  } from "../components"


const Cars = () => {
  return (
    <section className='  flex flex-col py-[4rem] items-center bg-white' id="cars">
      <div className='container mx-auto xl:mt-0 px-4 xl:px-0'>
      <CarSlide/>
      </div>
    </section>
  )
}

export default Cars