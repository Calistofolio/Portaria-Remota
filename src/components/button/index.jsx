function Button(props) {

    return (
        <button type={props.bType} onClick={props.onclick}>{props.title}</button>
    )
  }
  
  export default Button
  