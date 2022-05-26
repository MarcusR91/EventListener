import React, {useState} from 'react';
import propTypes from 'prop-types';

const AuthContext = React.createContext({
    token: '',
    isLoggedIn:false,
    login: (token) => {},
    logout: () => {},
});

export const AuthContextProvider = (props) => {
    const iniitalToken = localStorage.getItem('token');
    const [token,setToken] = useState(iniitalToken);

    const userIsLoggedIn = !!token; // if token is a string thats not empty, return true, if token is an empty string, return false

    loginHandler = (token) => {
        setToken(token);
        localStorage.setItem('token', token)
    }

    logoutHandler = () => {
        setToken(null); 
        localStorage.removeItem('token');
    }

    const contextValue = {
        token:token, 
        isLoggedIn: userIsLoggedIn,
        login:loginHandler,
        logout:logoutHandler
    }

    return <AuthContext.Provider value={contextValue}>
        {props.children}
    </AuthContext.Provider>
}

AuthContextProvider.propTypes = {
    children: propTypes.element
}

export default AuthContext;