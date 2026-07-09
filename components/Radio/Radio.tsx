import style from './Radio.module.css'

type RadioProps = {
    value: string
    name: string
    label?: string
    onChange: (value: string) => void
}

function Radio(props: RadioProps) {
    return (
        <label className={style.radio}>
            <input className={style.input} type="radio" value={props.value} name={props.name} />
            {props.label}
        </label>
    )
}

export default Radio
