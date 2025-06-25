import { BECLEAN_PRIMARY_BLUE_COLOR } from '../constants';

const RadioOption = ({ label, name, value, checked, onChange, className, styleOverrides }) => {
  return (
      <label 
        className={`block radio-option border-1 border-gray-500 rounded-xl p-4 ${className} flex flex-col justify-center`}
        style={{
          borderColor: checked ? BECLEAN_PRIMARY_BLUE_COLOR : '#6b7280',
          borderWidth: checked ? '3px' : '1px',
          ...styleOverrides,
        }}
      >
          <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          />
          <span className='lg:cursor-pointer'>{label}</span>
      </label>
  )
}

export default RadioOption