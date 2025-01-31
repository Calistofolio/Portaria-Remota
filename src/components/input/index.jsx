import style from "./Input.module.css"

function Input(props) {

  return (
    <div>
      <input className={style.input} placeholder={props.place} required={props.req} type={props.inputType} name="" id={props.iId} defaultValue= {props.value} />
    </div>
  )
}

export default Input
