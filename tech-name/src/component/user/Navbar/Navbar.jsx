import { Link } from "react-router-dom"
import { getAuth, signOut } from "firebase/auth";
import app from "../../../Firebase/Firebase";

const Navbar = () =>{
    const userEmail=JSON.parse(localStorage.getItem("user"))
    const CartItem=JSON.parse(localStorage.getItem("jhumkaItem"))||[]
   
  const handleLogout=()=>{
    const auth = getAuth(app);
    signOut(auth).then(() => {
      localStorage.removeItem("user");
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
    
  }
return(

    <div className="navb " >
      <div className="page-cover"><h1>অতন্দ্রিয়া</h1></div>
<nav className="navbar navbar-dark  navbar-expand-lg  ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav bg-dark">
        
        <li className="nav-item ">
          <Link to="/" className="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/SignUP" className="nav-link" href="#">Register</Link>
        </li>
        {
          userEmail?<li className="nav-item">
          <button onClick={handleLogout} className="btn mt-2 btn-sm" >Logout</button>
        </li>:<li className="nav-item">
          <Link to="/Login" className="nav-link" href="#">Login</Link>
        </li>
 
        }
       
        <li className="nav-item">
          <Link to="/Product" className="nav-link" href="#">Product</Link>
        </li>
        <li className="nav-item">
          <Link to="/About" className="nav-link" href="#">About</Link>
        </li>
        <li className="nav-item">
          <Link to="/cart">
          <div className="  position-relative mt-2">
        <i className="fas fa-shopping-cart"></i>
  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
  {CartItem.length}
    <span class="visually-hidden">unread messages</span>
  </span>
</div>
          </Link>
      
        </li>
        
      
      </ul>
    </div>
  </div>
</nav>
    </div>
)
}
export default Navbar