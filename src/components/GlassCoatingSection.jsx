import GlassCoatingRadio from "./GlassCoatingRadio"

const GlassCoatingSection = ({ disabled, className }) => {
  return (
    <section className={`py-4 md:py-6 ${className} relative`}>
        <div className={`${disabled ? 'block cursor-not-allowed' : 'hidden'} absolute inset-0 bg-white opacity-60`}></div>
        <h2 className='font-bold text-4xl mb-4 lg:text-2xl'>Glass Coating. <span className='text-gray-500'>Full Ceramic Protection.</span></h2>
        <GlassCoatingRadio/>
    </section>
  )
}

export default GlassCoatingSection