import React, {useState} from 'react';

const AuthContext = React.createContext({
    token: '',
    isLoggedIn:false,
    login: (token) => {},
    logout: () => {},
});

export const AuthContextProvider = (props) => {

    const [token,setToken] = useState(null);

    const userIsLoggedIn = !!token; // if token is a string thats not empty, return true, if token is an empty string, return false

    loginHandler = (token) => {
        setToken(token);
    }

    logoutHandler = () => {
        setToken(null); 
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

export default AuthContext;