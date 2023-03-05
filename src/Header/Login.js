import { useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { useContext, useState } from "react";
import AuthContext from "../store/auth-Context";

const Login = () => {

  const history = useNavigate()
  const emailref = useRef();
  const passwordref = useRef();

  const authCtx = useContext(AuthContext)

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading,setisLoading]=useState(false)

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
  const submitHandler = (e) => {
    e.preventDefault()

    const enteredEmail = emailref.current.value;
    const enteredPassword = passwordref.current.value;
    setisLoading(true)
    let url

    if(isLogin) {
        url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCNgmjZ6lbRgU8TeM-YkpprB1uk9jhuNcg'
    }
    else {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCNgmjZ6lbRgU8TeM-YkpprB1uk9jhuNcg'
    }
    fetch(url,{
      method:'POST',
      body:JSON.stringify({
        email:enteredEmail,
        password:enteredPassword,
        returnSecureToken:true
      }),
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(response=>{
      setisLoading(false)
      if(response.ok){
        return response.json()
      }else{
        return response.json().then(data=>{
          let errorMessage = 'Authentication failed'
          if(data&&data.error&&data.error.message){
            errorMessage = data.error.message 

            throw new Error(errorMessage)

          }

          console.log(data)
        })
      }
    }).then(data=>{
      authCtx.login(data.idToken)
      history('/')
    
    }).catch((error)=>{
        alert(error.message)
    })
  }






 
  // const emailref = useRef();
  // const passwordref = useRef();
  // const sumitHandler = (e) => {
  //   e.preventDefault();
  //   const enteredEmail = emailref.current.value;
  //   const enteredPassword = passwordref.current.value;
  //   // console.log(email,password)

  //   fetch(
  //     "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCNgmjZ6lbRgU8TeM-YkpprB1uk9jhuNcg",
  //     {
  //       method: "POST",
  //       body: JSON.stringify({
  //         email: enteredEmail,
  //         password: enteredPassword,
  //         returnSecureToken: true,
  //       }),
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   )
  //     .then((res) => {
  //       if (res.ok) {
          
  //       } else {
  //         return res.json().then((data) => {
  //           // let errMsg = 'Authentication Failed';
  //           // if(data && data.error && data.error.message){
  //           //   errMsg = data.error.message
  //           // }
  //           // alert(errMsg)
  //           console.log(data)
  //         });
  //       }
  //     })
      
  // };
  return (
    <>
      <div className="flex items-center justify-center h-96">
        <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
          <h3 className="text-2xl font-bold text-center">
          {isLogin ? 'Login' : 'Sign Up'}
          </h3>
          <form onSubmit={submitHandler}>
            <div className="mt-4">
              <div>
                <label className="block" htmlFor="email">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  ref={emailref}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="mt-4">
                <label className="block" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  autoComplete="on"
                  placeholder="******"
                  ref={passwordref}
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="flex items-baseline justify-between">
                <button className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900">
                {isLogin ? 'login' : 'create account'  }
                </button>
                {isLoading&&<p>sending request.....</p>}
                <button
            type='button'
           
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
