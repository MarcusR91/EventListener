import {useNavigate} from 'react-router-dom';
import Button from './utils/Button';


const SignUpForm = () => {
    
    const navigation = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault;


        navigation('/message');
    }


    return(
        <div>
        <form onSubmit={submitHandler}>
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />

            <label>Email</label>
            <input type="text" placeholder="Enter emali" required/>

            <label>Password</label>
            <input type="password" placeholder="Enter password" required/>

            <Button type = "submit" className = "form-button">Sign up</Button>
        </form>
        </div>
    )
 
}

export default SignUpForm;