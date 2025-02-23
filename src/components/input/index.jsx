import style from "./Input.module.css"

function Input(props) {

  return (
    <div>
      <label><h3>{props.label}</h3>
        <input onChange={props.onchange} className={style.input} name={props.inputName} placeholder={props.place} required={props.req} type={props.inputType} defaultValue={props.inputValue} />
      </label>
    </div>
  )
}

export default Input