const LinkButton = ({ children, dark, href, className }) => {
  return (
    <a href={href} className={`${dark ? 'text-white' : 'text-dark'} hover:font-bold hover:underline ${className}`}>
        {children}
    </a>
  )
}

export default LinkButton