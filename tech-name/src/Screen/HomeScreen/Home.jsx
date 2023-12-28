import Navbar from "../../component/user/Navbar/Navbar"
import Product from "../user/Product"
import Carosol from "../../carousol/Carosol"
import { Footer } from "../../Footer/Footer"




const Home = () =>{
return(
<div>
    <div>
    <Navbar></Navbar>
    <Carosol></Carosol>
    <Product></Product>
    
    </div>
    <Footer>Footer</Footer>
    
    
</div>
)
}
export default Home