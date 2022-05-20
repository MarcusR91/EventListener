import propTypes from "prop-types";
import { CustomConfirm } from "./CustomConfirm";

function Button (props) {
    
    // let onClickValue = props.needConfirm = true ? () => CustomConfirm(props.onClick) : props.onClick;

    return <button type={props.type}  className = {props.className} onClick={props.onClick}>{props.children}</button>
}

// Button.propTypes = {
//     type: propTypes.string, 
//     className: propTypes.string, 
//     onClick: propTypes.func, 
//     needConfirm: propTypes.bool
// }
// Button.defaultProps = {
//     needConfirm: true
// }

export default Button;