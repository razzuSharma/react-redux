// import { useState } from "react";
import './Home.css'
import React from "react";
import './cart.jpg'
function Home() {
  return (
    <div>
      <h1>Welcome to the shopping cart</h1>
      <div className='stocks'>
        <img src="https://www.shutterstock.com/shutterstock/photos/570153007/display_1500/stock-vector-shopping-cart-icon-flat-design-best-vector-icon-570153007.jpg" />
      </div>
      <div className="wrapper-image">
        <div className="wrapper-image item" >
          <img src="https://www.tatango.com/wp-content/uploads/2016/10/iOS-Link-Previews-SMS-Marketing-768x520.png" />
        </div>
        <span>Iphone price: $1000</span>  
      </div>
      <button className='btn'>ATC</button>
    </div>
  );
}

// function Profile() {
//   function clickHandle(e){
//     console.log(name, interest,checkTnC)
//     e.preventDefault()
//   }
//   const [name,SetName] = useState("")
//   const [interest, setInterest] = useState("")
//   const [checkTnC, setCheckTnC] = useState(false)
//   return (
//     <div>
//       <h1>Form for the following</h1>
//       <form onSubmit={clickHandle}>
//       Enter Your Name: <input type="text" onChange={(e)=>SetName(e.target.value)} placeholder="Enter Name"/> <br/>
//       <select onChange={(e)=>setInterest(e.target.value)}>
//         <option>LOWGUN</option>
//         <option>Casper</option>
//         <option>Ceaser</option>
//         <option>Nikita</option>
//       </select><br/>

// <input type="checkbox" onChange={(e)=>setCheckTnC(e.target.checked)}/><span>Accept Terms and Conditions</span><br/>
// <button type="submit">Click Me</button><br/>
//         </form>
//     </div>
//   )

// }
export default Home;
