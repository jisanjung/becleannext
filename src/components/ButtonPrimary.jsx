"use client"

const ButtonPrimary = ({ children, className, onClick }) => {
  return (
    <button 
      className={`btn-primary text-white font-bold w-full p-4 rounded-xl cursor-pointer ${className}`}
      onClick={() => onClick()}
    >
        {children}
    </button>
  )
}

export default ButtonPrimary