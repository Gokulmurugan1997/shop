import {useState} from 'react'

function Cart({cart, setCart, product}) {
    
    let [toggle,setToggle] = useState(true)
  return <>

  <div className="col mb-5">
                        <div className="card h-100">
                           
                            <div className="badge bg-dark text-white position-absolute" style={{top: "0.5rem", right: "0.5rem"}}>Sale</div>
                            
                            <img className="card-img-top" src={product.img} alt="..." />
                        
                            <div className="card-body p-4">
                                <div className="text-center">
                                
                                    <h5 className="fw-bolder">{product.name}</h5>
                                 
                                    <span><i className="fa-solid fa-indian-rupee-sign"></i> {product.price}</span>
                                    
                                </div>
                            </div>
                          
                            <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                               { toggle?<div className="text-center"><button className="btn btn-outline-dark" onClick={()=>
                                {
                                    setCart(cart+1)
                                    setToggle(curr=>!curr)
                               }
                                }>Add to cart</button></div>:
                                <div className="text-center"><button className="btn btn-outline-dark" onClick={()=>
                                {
                                    setCart(curr=>curr-1)
                                    setToggle(curr=>!curr)
                                }
                                
                                }>Remove from cart</button></div>}
                            </div>
                        </div>
                    </div>
  </>
}

export default Cart