import {useState} from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import app from '../../Firebase/Firebase';

const Login = () => {

  const provider = new GoogleAuthProvider();
    const auth = getAuth(app);
    
    
   const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const handleSubmit=(e)=>{
  e.preventDefault()
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    localStorage.setItem('user',JSON.stringify({email:user.email}));
    window.location.href= "/";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    //const errorMessage = error.message;
  });
        console.log(email,password)
        //server(email,password)
    }
    const handleGooglesignin=()=>{
      signInWithPopup(auth, provider)
      .then((result) => {
       
        const user = result.user;
        console.log(user);
        localStorage.setItem('user',JSON.stringify({email:user.email}));
        window.location.href= "/";
        
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        console.log(error);
      });
    
    }
   
  return (
    <div>
       <div className="container">
        <h2>Login</h2>
        <form onSubmit={handleSubmit} action="#" method="post">
            <div className="form-group">
                <label htmlFor="username">Email:</label>
                <input onChange={(e)=>setEmail(e.target.value)} type="text" value={email} placeholder='email' required />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input onChange={(e)=>setPassword(e.target.value)} type="password" value={password} placeholder='password' required />
            </div>

            <button type="submit">Login</button>
        </form>
        
          <button onClick={handleGooglesignin}> Sign in with Google <i className="fab fa-google fa-spin"></i></button>
        
    </div>
    </div>
  );
}

export default Login;
