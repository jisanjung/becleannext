import Link from "next/link";
import { IoChevronDown } from "react-icons/io5";
import { MAIN_LINKS, SERVICE_AREA_LINKS, SERVICE_LINKS } from "./navLinks";

const linkClass =
  "text-sm font-medium text-white/80 transition hover:text-white focus-visible:text-white focus-visible:outline-none";

const Dropdown = ({ label, href, links, wide, footer }) => (
  <li className="group relative">
    {href ? (
      <Link href={href} className={`${linkClass} inline-flex items-center gap-1 py-6`}>
        {label}
        <IoChevronDown className="text-xs transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
      </Link>
    ) : (
      <button type="button" className={`${linkClass} inline-flex items-center gap-1 py-6 cursor-default`}>
        {label}
        <IoChevronDown className="text-xs transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" />
      </button>
    )}

    <div
      className={`invisible absolute left-1/2 top-full z-50 -translate-x-1/2 translate-y-1 opacity-0 transition-all duration-200
        group-hover:visible group-hover:translate-y-0 group-hover:opacity-100
        group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100
        ${wide ? 'w-[420px]' : 'w-64'}`}
    >
      <div className="rounded-2xl bg-white p-2 text-ink shadow-xl shadow-black/15 ring-1 ring-black/5">
        <ul className={wide ? 'grid grid-cols-2' : ''}>
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block rounded-xl px-4 py-2.5 text-sm transition hover:bg-mist hover:text-brand-dark focus-visible:bg-mist focus-visible:outline-none"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        {footer}
      </div>
    </div>
  </li>
);

const DesktopNav = ({ className }) => {
  return (
    <nav className={className} aria-label="Main">
      <ul className="flex items-center gap-7">
        <li>
          <Link href="/" className={linkClass}>Home</Link>
        </li>
        <Dropdown
          label="Services"
          href="/services"
          links={SERVICE_LINKS}
          footer={
            <Link
              href="/services"
              className="mt-1 block border-t border-black/5 px-4 pt-3 pb-2 text-sm font-semibold text-brand hover:text-brand-dark"
            >
              Explore all services →
            </Link>
          }
        />
        {MAIN_LINKS.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={linkClass}>{link.label}</Link>
          </li>
        ))}
        <Dropdown label="Service Areas" links={SERVICE_AREA_LINKS} wide />
      </ul>
    </nav>
  );
};

export default DesktopNav;
