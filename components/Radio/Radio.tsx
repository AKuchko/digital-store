import clsx from 'clsx'
import style from './Radio.module.css'

type RadioProps = {
    value: string
    name: string
    checked: boolean
    label?: string
    disabled?: boolean
    onChange: (value: string) => void
}

function Radio(props: RadioProps) {
    return (
        <label
            className={clsx(
                style.radio,
                props.disabled && style.disabled
            )}
        >
            <input
                className={style.input}
                type="radio"
                value={props.value}
                checked={props.checked}
                name={props.name}
                disabled={props.disabled}
                onChange={(e) => props.onChange(e.target.value)}
            />
            {props.label}
        </label>
    )
}

export default Radio
