import { useState } from "react";
function Profile() {
  function clickHandle(e){
    console.log(name, interest,checkTnC)
    e.preventDefault()
  }
  const [name,SetName] = useState("")
  const [interest, setInterest] = useState("")
  const [checkTnC, setCheckTnC] = useState(false)
  return (
    <div>
      <h1>Form for the following</h1>
      <form onSubmit={clickHandle}>
      Enter Your Name: <input type="text" onChange={(e)=>SetName(e.target.value)} placeholder="Enter Name"/> <br/>
      <select onChange={(e)=>setInterest(e.target.value)}>
        <option>LOWGUN</option>
        <option>Casper</option>
        <option>Ceaser</option>
        <option>Nikita</option>
      </select><br/>

<input type="checkbox" onChange={(e)=>setCheckTnC(e.target.checked)}/><span>Accept Terms and Conditions</span><br/>
<button type="submit">Click Me</button><br/>
        </form>
    </div>
  )
    
}
export default Profile;
