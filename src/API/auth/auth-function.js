


export const authenticateUser = (isLogin, enteredEmail, enteredPassword, AuthCtx, setIsLoading) => {

    let url;
    if (isLogin) {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC8guQtCGZiThtbsMv6sDyKw2XVUV9Dj78'
    } else {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC8guQtCGZiThtbsMv6sDyKw2XVUV9Dj78'
    }
    fetch(
      url,
      {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    ).then((res) => {
      setIsLoading(false);
      if (res.ok) {
        return res.json();
      } else {
        return res.json().then((data) => {
          let errorMessage = 'Authentication failed!';
    
          console.log(data);
          throw new Error(errorMessage)
        });
      }
    }).then(data => {
        AuthCtx.login(data.idToken)
        console.log(data)
    }).catch((err) => {
        if(email != null){
            alert(`${enteredEmail} already exists!`)
        }else{
            alert(err.message);
        }
       
    });
}

