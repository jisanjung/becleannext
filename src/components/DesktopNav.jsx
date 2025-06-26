import content from '../content.json';

const DesktopNav = ({ className }) => {

  const { home, services, contact, ourStory } = content.nav;

  return (
    <nav className={`${className}`}>
        <ul className='flex pt-2'>
            <li className='pr-4 hover:font-bold'><a href="/">{home}</a></li>
            <li className='pr-4 hover:font-bold'><a href="/#servicesSection">{services}</a></li>
            <li className='pr-4 hover:font-bold'><a href="/#contactSection">{contact}</a></li>
            <li className='hover:font-bold'><a href="/#ourStorySection">{ourStory}</a></li>
        </ul>
    </nav>
  )
}

export default DesktopNav