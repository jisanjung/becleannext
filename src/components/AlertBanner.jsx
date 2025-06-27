
const AlertBanner = ({ children, className, background, color }) => {
  return (
    <div className={`${className} w-full text-center py-4 font-medium`}
        style={{
            background,
            color,
        }}
    >
        <div className="wrapper px-4 md:px-10">
            {children}
        </div>
    </div>
  )
}

export default AlertBanner