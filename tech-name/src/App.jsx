import { Route,Routes } from "react-router-dom"
import Login from "./Screen/user/Login"
import SignUp from "./Screen/user/SignUp"
import Product from "./Screen/user/Product"
import Cart from "./Screen/user/Cart"
import About from "./Screen/user/About"
import ErrorRouter from "./Screen/HomeScreen/ErrorRouter"
import Home from "./Screen/HomeScreen/Home"
import PrivateRoute from "./Route/PrivateRoute"

function App(){
  
  
  return(
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/Login" element={<Login />} />
  <Route path="/SignUP" element={<SignUp />} />
  <Route path="/About" element={<About />} />
  <Route path="/Cart" element={<PrivateRoute><Cart /></PrivateRoute>} />
  <Route path="/Product" element={<Product />} />
  
  <Route path="*" element={<ErrorRouter />} />
  </Routes>




  )
}
export default App