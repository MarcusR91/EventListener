import {useNavigate} from 'react-router-dom';
import Button from './utils/Button';


const SignUpForm = () => {
    
    const navigation = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault;


        navigation('/message');
    }


    return(
        <div className='signup-form-container'>
        <form onSubmit={submitHandler}>
            <h1>Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
            <hr />

            <label className='signup-form-label'>Email</label>
            <input type="text" placeholder="Enter emali" required/>

            <label className='signup-form-label'>Password</label>
            <input type="password" placeholder="Enter password" required/>

            <Button type = "submit" className = "signup-form-button">Sign up</Button>
        </form>
        </div>
    )
 
}

export default SignUpForm;