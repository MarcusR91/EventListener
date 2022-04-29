

function Button (props) {
    return <button type={props.type} className = {props.className} onClick={props.onclick}>{props.children}</button>
}

export default Button;