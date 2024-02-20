import {useState} from 'react'
import Navbar from './components/Navbar'
import Cart from './components/cart'

function App() {
  let [cart, setCart]=useState(0);
  let product = [
    {
      name:"Stich Ball",
      price:"400",
      img:"https://img.jagranjosh.com/imported/images/E/Articles/cricket-balls-kookaburra.webp"
    },
    {
      name:"Stumber Ball",
      price:"40",
      img:"https://5.imimg.com/data5/GK/TT/AP/SELLER-32602432/stumper-ball-500x500.jpg"
    },
    {
      name:"Vicky cork",
      price:"80",
      img:"https://m.media-amazon.com/images/I/61gm-jcdp7L._SX569_.jpg"
    },
    {
      name:"Red Tennis",
      price:"70",
      img:"https://5.imimg.com/data5/NA/DE/AY/SELLER-46283264/tennis-ball-red-color-500x500.jpg"
    },
    {
      name:"Boost Ball",
      price:"65",
      img:"https://assets.ajio.com/medias/sys_master/root/20220630/bgz0/62bca4bbf997dd03e2aa0b6d/-473Wx593H-4924081170-multi-MODEL2.jpg"
    },
    {
      name:"white stich ball",
      price:"600",
      img:"https://5.imimg.com/data5/QK/KS/MY-37124512/leather-cricket-ball-2-1000x1000.jpg"
    },
  ]
  return <>
  <Navbar cart={cart} setCart={setCart}/>
  <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                  {
                    product.map((e,i)=>{
                      return <Cart cart={cart} setCart={setCart} product={e} key={i}/>
})}
                
                </div>
            </div>
  </section>
  </>
}

export default App