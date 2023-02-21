import { useState } from 'react'
import './Checkbox.css'

interface IProps {
  partial: boolean
  label: string
  checked: boolean
  disabled: boolean
}

const Checkbox = ({ partial, label, checked, disabled }: Partial<IProps>) => {
  const [isChecked, setIsChecked] = useState(checked ? checked : false)

  return (
    <div className="checkbox-wrapper">
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
          className={`${isChecked ? 'checked' : ''} ${
            partial ? 'partial' : ''
          }`}
          disabled={disabled}
        />
        <span>{label}</span>
      </label>
    </div>
  )
}
export default Checkbox
