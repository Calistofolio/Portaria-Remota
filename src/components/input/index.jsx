import style from "./Input.module.css"

function Input(props) {

  return (
    <div>
      <label htmlFor={props.iId}><h3>{props.label}</h3></label>
      <input className={style.input} placeholder={props.place} required={props.req} type={props.inputType} name="" id={props.iId} defaultValue= {props.value} />
    </div>
  )
}

export default Input
