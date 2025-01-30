function Input(props) {

  return (
    <div>
      <input required={props.req} type={props.inputType} name="" id={props.iId} defaultValue= {props.value} />
    </div>
  )
}

export default Input
