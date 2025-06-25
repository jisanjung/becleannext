const OptionSelectionContent = ({ title, price, description }) => {
  return (
    <div>
        <div className='flex items-center justify-between'>
            <p className='font-bold text-xl'>{title}</p>
            <small>{price}</small>
        </div>
        {description &&
            <div>{description}</div>
        }
    </div>
  )
}

export default OptionSelectionContent