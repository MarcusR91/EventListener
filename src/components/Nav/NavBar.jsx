import {NavLink} from 'react-router-dom';
import Header from '../Header';


export function NavBar () {

    return(
        <nav>
             <NavLink to='/'><Header /></NavLink>
            <ul>
                <li>
                    <NavLink to='/addEvent'>Add Event</NavLink>
                </li>
                <li>
                    <NavLink to='/events'>Events</NavLink>
                </li>
                <li>
                    <NavLink to='/contact'>Contact</NavLink>
                </li>
                <li>
                    <NavLink to='/signup'>Sign up</NavLink>
                </li>
            </ul>
        </nav>
    )
}