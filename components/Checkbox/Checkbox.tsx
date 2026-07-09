import { Icon } from '../Icon'
import style from './Checkbox.module.css'

type CheckboxProps = {
  checked: boolean
  onChange: (value: boolean) => void
  disabled?: boolean
}

function Checkbox(props: CheckboxProps) {
  return (
    <div className={style.checkbox}>
        {props.checked && <Icon className={style.icon} name="check" size={22} />}
        <input
          className={style.input}
          type="checkbox"
          disabled={props.disabled}
          aria-disabled={props.disabled}
          checked={props.checked}
          onChange={(e) => props.onChange(e.target.checked)}
        />
    </div>
  )
}

export default Checkbox
