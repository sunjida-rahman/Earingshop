import React from 'react';

const Cart = () => {
  const CartItem=JSON.parse(localStorage.getItem("jhumkaItem"))||[]
  const total = (CartItem.reduce((total,item) => total - item.price, 0))
   const removeHandle = (id) => {
       
    const newcart = CartItem.filter((item) => item.id != id)
    localStorage.setItem("jhumkaItem", JSON.stringify(newcart))
    alert("Removed 1 item")

   }
  return (
    <div className='container'>
      <div className='row'>
     <div className="col-md-8">
      {
        CartItem.map((item)=>(
          <div className="card  p-3">
        <div className='cartDetails'>
        <div>
          <img style={{width:'150px',height:'100px'}} src={item.image_url} alt="" />
         </div>
         <div>
<h4>Name:{item.title}</h4>
<h4>Price:{item.price}TK</h4>
         </div>
         <div>
          <button onClick={()=>removeHandle(item.id)} className='btn btn-danger'>
            Remove
          </button>
         </div>
        </div>
         
      </div>
        ))
      }
     </div>
     <div className="col-md-4">
      <div className="card p-4">
      <h2>Total Price:{total}</h2>
      </div>
     </div>
      </div>
      
    </div>
  );
}

export default Cart;
