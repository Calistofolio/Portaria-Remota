import style from "./Button.module.css"

function Button(props) {

    return (
        <button className={style.button} type={props.bType} onClick={props.onclick}>{props.title}</button>
    )
  }
  
  export default Button
  