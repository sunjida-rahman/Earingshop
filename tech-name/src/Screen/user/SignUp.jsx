import { useState } from "react"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../Firebase/Firebase";
function SignUp(){
    const auth = getAuth(app);
    const [formData,setFormData]=useState({
        name:" ",
        email:" ",
        password:" ",
        confirmpassword:" "
    });

   const handleChange=(e)=>{
    const {name,value}=e.target;
    setFormData((prevData)=>({
        ...prevData,
        [name]:value,
       
    })
    );
   };
   
    const handleSubmit=(e)=>{
       e.preventDefault()
       createUserWithEmailAndPassword(auth, formData.email, formData.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    localStorage.setItem('user',JSON.stringify({email:user.email}));
    window.location.href= "/";
    console.log(user)
    // ...
    
  })
  .catch((error) => {
   
    const errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });
    }

    return(
        
           <div className="signup">
            <div className="Signup-form">
           
            <div className="container">

        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}  action="#" method="post">
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input onChange={handleChange} type="text" id="name" name="name" value={formData.name} required />
            </div>

            <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input onChange={handleChange} type="email" id="email" name="email" value={formData.email} required />
            </div>

            <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input onChange={handleChange} type="password" id="password" name="password" value={formData.password} required />
            </div>
            <div className="form-group">
                <label htmlFor="confirmpassword">Confirm Password:</label>
                <input onChange={handleChange} type="password" id="password" name="password" value={formData.confirmpasswordpassword} required />
            </div>
            <div className="form-group">
            <button type="submit">Sign Up</button></div>
        </form>
    </div>
    </div>
    </div>
        
    )
}
export default SignUp