import VehicleTypeRadio from "./VehicleTypeRadio "

const VehicleTypeSection = ({ className }) => {
  return (
    <section className={`pb-4 md:pb-6 ${className}`}>
        <h2 className='hidden lg:block font-bold text-lg mt-12 mb-4 text-center lg:text-left lg:text-2xl'>Size. <span className='text-gray-500'>How Big is Your Car?</span></h2>
        <VehicleTypeRadio/>
    </section>
  )
}

export default VehicleTypeSection