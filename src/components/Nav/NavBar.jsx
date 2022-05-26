import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../Context/AuthContext';
import Header from '../Shared/Header';
import "./style/NavBar.css"


export function NavBar() {

    const AuthCtx = useContext(AuthContext);

    const isLoggedIn = AuthCtx.isLoggedIn;

    logoutHandler = () => {
        AuthCtx.logout();
    }

    return (
        <nav>
            <NavLink className="logo" to='/'><Header /></NavLink>
            <ul>
                {isLoggedIn && (
                    <li>
                        <NavLink className="links" to='/addEvent'>Add Event</NavLink>
                    </li>
                )}
                <li>
                    <NavLink className="links" to='/events'>Events</NavLink>
                </li>
                <li>
                    <NavLink className="links" to='/contact'>Contact</NavLink>
                </li>
            </ul>
            {!isLoggedIn && (
                <button>
                    <NavLink className="button-link" to='/signup'>Sign up</NavLink>
                </button>
            )}
            {isLoggedIn && (<button onClick={logoutHandler}>Logout</button>
            )}

        </nav>
    )
}