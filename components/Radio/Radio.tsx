import style from './Radio.module.css'

type RadioProps = {
    value: string
    name: string
    checked: boolean
    label?: string
    onChange: (value: string) => void
}

function Radio(props: RadioProps) {
    return (
        <label className={style.radio}>
            <input
                className={style.input}
                type="radio"
                value={props.value}
                checked={props.checked}
                name={props.name}
                onChange={(e) => props.onChange(e.target.value)}
            />
            {props.label}
        </label>
    )
}

export default Radio
