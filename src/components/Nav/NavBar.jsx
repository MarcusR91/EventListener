import {NavLink} from 'react-router-dom';
import Header from '../Header';
import "../style/NavBar.css"


export function NavBar () {

    return(
        <nav>
             <NavLink className="logo" to='/'><Header /></NavLink>
            <ul>
                <li>
                    <NavLink className="links" to='/addEvent'>Add Event</NavLink>
                </li>
                <li>
                    <NavLink className="links" to='/events'>Events</NavLink>
                </li>
                <li>
                    <NavLink className="links" to='/contact'>Contact</NavLink>
                </li>
            </ul>
            <button>
                    <NavLink className="button-link" to='/signup'>Sign up</NavLink>
                </button>
        </nav>
    )
}