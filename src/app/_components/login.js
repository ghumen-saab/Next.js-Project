const RestaurantLogin = () => {
  return (
    <>
   <h3> Login component</h3>
    <div>
     <div className="input-Wrapper"> 
      <input className="input-Field" type="email" placeholder="Enter Email" />
      </div>
      <div className="input-Wrapper">
        <input className="input-Field" type="Password" placeholder="Password" />
      </div>
       <div className="input-Wrapper">
      <button className="button">Login</button>
     </div>
     </div>
    </>
  )
}
export default RestaurantLogin;