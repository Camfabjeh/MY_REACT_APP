function Button(props) {

  return (
    <div>
      {props.index >= 1 ? <button onClick={props.handleMinusClick}>Précédent</button> : ""}
      {props.index < 4 ? <button onClick={props.handlePlusClick}>Suivant</button> : ""}

    </div>)
}

export default Button;

