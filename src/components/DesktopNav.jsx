const DesktopNav = ({ className }) => {
  return (
    <nav className={`${className}`}>
        <ul className='flex pt-2'>
            <li className='pr-4 hover:font-bold'><a href="/">Home</a></li>
            <li className='pr-4 hover:font-bold'><a href="/8-year-ceramic-coating">Services</a></li>
            <li className='pr-4 hover:font-bold'><a href="/#contactSection">Contact</a></li>
            <li className='hover:font-bold'><a href="/#ourStorySection">Our Story</a></li>
        </ul>
    </nav>
  )
}

export default DesktopNav