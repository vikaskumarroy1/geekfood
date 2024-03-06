import './Button.css'
function Button(props){
    return(
        <button style={props.CustomButtonStyle } id="ButtonStyles">{props.title  }</button>
    )
}
export default Button