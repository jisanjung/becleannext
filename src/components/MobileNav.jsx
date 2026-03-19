import React, { useEffect, useRef, useState } from 'react';

const MobileNav = ({ menuToggled, className }) => {
  const menuContentRef = useRef(null);
  const [menuContentHeight, setMenuContentHeight] = useState(0);
  const [activePanel, setActivePanel] = useState('main');

  useEffect(() => {
    setMenuContentHeight(menuContentRef?.current?.scrollHeight);
  }, [menuToggled, activePanel]);

  return (
    <nav
      className={`transition-all overflow-hidden ${className}`}
      ref={menuContentRef}
      style={{
        height: menuToggled ? `${menuContentHeight}px` : '0px',
      }}
    >
      <div className="relative overflow-hidden">
        <div
          className={`flex transition-transform duration-500 ease-in-out ${
            activePanel === 'services'
              ? '-translate-x-1/3'
              : activePanel === 'areas'
              ? '-translate-x-2/3'
              : 'translate-x-0'
          }`}
          style={{ width: '300%' }}
        >

          {/* MAIN PANEL */}
          <div className="w-1/3 px-4 my-4">
            <ul>
              <li className="pb-6">
                <a href="/">Home</a>
              </li>

              <li className="pb-6">
                <button
                  onClick={() => setActivePanel('services')}
                  className="w-full text-left flex justify-between items-center"
                >
                  Services
                  <span className="text-lg">›</span>
                </button>
              </li>

              <li className="pb-6">
                <a href="/#contactSection">Contact</a>
              </li>

              <li className="pb-6">
                <a href="/#ourStorySection">Our Story</a>
              </li>

              <li>
                <button
                  onClick={() => setActivePanel('areas')}
                  className="w-full text-left flex justify-between items-center"
                >
                  Service Areas
                  <span className="text-lg">›</span>
                </button>
              </li>
            </ul>
          </div>

          {/* SERVICES PANEL */}
          <div className="w-1/3 px-4 my-4">
            <button
              onClick={() => setActivePanel('main')}
              className="mb-8 text-2xl leading-none"
            >
              ‹
            </button>

            <ul className="space-y-6">
              <li>
                <a href="/services" className="font-semibold">
                  Explore All Services
                </a>
              </li>

              <li>
                <a href="/level-1-ceramic-coating">
                  Level 1 Ceramic Coating
                </a>
              </li>

              <li>
                <a href="/level-2-ceramic-coating">
                  Level 2 Ceramic Coating
                </a>
              </li>

              <li>
                <a href="/level-3-ceramic-coating">
                  Level 3 Ceramic Coating
                </a>
              </li>
            </ul>
          </div>

          {/* SERVICE AREAS PANEL */}
          <div className="w-1/3 px-4 my-4">
            <button
              onClick={() => setActivePanel('main')}
              className="mb-8 text-2xl leading-none"
            >
              ‹
            </button>

            <ul className="space-y-6">
              <li><a href="/harleysville">Harleysville</a></li>
              <li><a href="/fort-washington">Fort Washington</a></li>
              <li><a href="/doylestown">Doylestown</a></li>
              <li><a href="/montgomeryville">Montgomeryville</a></li>
              <li><a href="/quakertown">Quakertown</a></li>
              <li><a href="/bryn-mawr">Bryn Mawr</a></li>
              <li><a href="/wayne">Wayne</a></li>
              <li><a href="/valley-forge">Valley Forge</a></li>
              <li><a href="/gladwyne">Gladwyne</a></li>
              <li><a href="/collegeville">Collegeville</a></li>
              <li><a href="/lansdale">Lansdale</a></li>
              <li><a href="/skippack">Skippack</a></li>
            </ul>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default MobileNav;