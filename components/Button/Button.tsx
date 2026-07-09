import clsx from 'clsx'
import { Icon, type IconName } from '../Icon'
import style from './Button.module.css'

type ButtonProps = {
  theme?: 'primary' | 'secondary' | 'shop'
  disabled?: boolean
  label: string
  icon?: IconName
  iconSize?: number
}

function Button(props: ButtonProps) {
  return (
    <button
      className={clsx(
        style.button,
        style[props.theme || 'primary'],
        props.disabled && style.disabled
      )}
      disabled={props.disabled}
      aria-disabled={props.disabled}
    >
      {
        props.icon &&
        <Icon
          name={props.icon}
          size={props.iconSize || 12}
        />
      }
      {props.label}
    </button>
  )
}

export default Button
