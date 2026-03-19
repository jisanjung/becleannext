import Link from "next/link";

const DesktopNav = ({ className }) => {
  return (
    <nav className={`${className}`}>
      <ul className="flex pt-2">
        <li className="pr-4 hover:font-bold">
          <Link href="/">Home</Link>
        </li>

        <li className="relative pr-4 group">
          <Link href="/services" className="block hover:font-bold">
            Services
          </Link>

          {/* Dropdown */}
          <div className="absolute left-0 top-full mt-6 w-64 z-50 
                          bg-[#363434] text-white rounded-xl 
                          opacity-0 invisible 
                          group-hover:opacity-100 group-hover:visible 
                          transition-all duration-200
                          shadow-lg shadow-black/50">
            <ul className="py-4">
              <li>
                <Link href="/level-1-ceramic-coating" className="block px-6 py-2 hover:bg-[#2c2b2b]">
                  Level 1 Ceramic Coating
                </Link>
              </li>
              <li>
                <Link href="/level-2-ceramic-coating" className="block px-6 py-2 hover:bg-[#2c2b2b]">
                  Level 2 Ceramic Coating
                </Link>
              </li>
              <li>
                <Link href="/level-3-ceramic-coating" className="block px-6 py-2 hover:bg-[#2c2b2b]">
                  Level 3 Ceramic Coating
                </Link>
              </li>
            </ul>
          </div>
        </li>

        <li className="pr-4 hover:font-bold">
          <Link href="/#contactSection">Contact</Link>
        </li>
        <li className="pr-4 hover:font-bold">
          <Link href="/#ourStorySection">Our Story</Link>
        </li>

        <li className="relative pr-4 group">
  <span className="cursor-pointer hover:font-bold">
    Service Areas
  </span>

  {/* Dropdown */}
  <div className="absolute left-0 top-full mt-6 w-64 z-50 
                  bg-[#363434] text-white rounded-xl 
                  opacity-0 invisible 
                  group-hover:opacity-100 group-hover:visible 
                  transition-all duration-200
                  shadow-lg shadow-black/50">
    <ul className="py-4">
      <li>
        <Link href="/harleysville" className="block px-6 py-2 hover:bg-[#2c2b2b]">
          Harleysville
        </Link>
      </li>
      <li>
        <Link href="/fort-washington" className="block px-6 py-2 hover:bg-[#2c2b2b]">
          Fort Washington
        </Link>
      </li>
      <li>
        <Link href="/doylestown" className="block px-6 py-2 hover:bg-[#2c2b2b]">
          Doylestown
        </Link>
      </li>
      <li>
        <Link href="/montgomeryville" className="block px-6 py-2 hover:bg-[#2c2b2b]">
          Montgomeryville
        </Link>
      </li>
      <li>
        <Link href="/quakertown" className="block px-6 py-2 hover:bg-[#2c2b2b]">
          Quakertown
        </Link>
      </li>
      <li>
        <Link href="/bryn-mawr" className="block px-6 py-2 hover:bg-[#2c2b2b]">
          Bryn Mawr
        </Link>
      </li>
      <li>
        <Link href="/wayne" className="block px-6 py-2 hover:bg-[#2c2b2b]">
          Wayne
        </Link>
      </li>
      <li>
        <Link href="/valley-forge" className="block px-6 py-2 hover:bg-[#2c2b2b]">
          Valley Forge
        </Link>
      </li>
      <li>
        <Link href="/gladwyne" className="block px-6 py-2 hover:bg-[#2c2b2b]">
          Gladwyne
        </Link>
      </li>
      <li>
        <Link href="/collegeville" className="block px-6 py-2 hover:bg-[#2c2b2b]">
          Collegeville
        </Link>
      </li>
      <li>
        <Link href="/lansdale" className="block px-6 py-2 hover:bg-[#2c2b2b]">
          Lansdale
        </Link>
      </li>
      <li>
        <Link href="/skippack" className="block px-6 py-2 hover:bg-[#2c2b2b]">
          Skippack
        </Link>
      </li>
    </ul>
  </div>
</li>

      </ul>
    </nav>
  );
};

export default DesktopNav;