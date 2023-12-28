import data from "../../data.json"
const Product = () => {
  const handlecart=(jhumka)=>{
  const CartItem=JSON.parse(localStorage.getItem("jhumkaItem"))||[]
  CartItem.push(jhumka)
    localStorage.setItem("jhumkaItem",JSON.stringify(CartItem))
    alert("Added!")
  }
  console.log(data)
  
  

  return (
    <div className="rt">
      <div className="container pr">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              {
                data.jhumkas.map((jhumka) => (
                  <div className="col-md-4">
                    <div className="cardproduct">
                      <img src={jhumka.image_url} className="card-img-top" alt="..." />
                      <div className="card-body">
                        <h5 className="card-title"><b><h3>Title :{jhumka.title}</h3></b></h5>
                        <b><h5>Price = {jhumka.price}Tk.</h5></b>
                        <b><h5>Rating : {jhumka.rate}</h5></b>
                        <a onClick={()=>handlecart(jhumka)} className="btn btn-primary qw"><b>Add to Cart!</b></a>
                        
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Product
