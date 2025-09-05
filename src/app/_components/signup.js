const RestaurantSignUp = () => {
  return (
    <>
      <h3> SignUp component</h3>
      <div className="input-Wrapper">
        <input
          className="input-Field"
          type="text"
          placeholder="Enter FullName"
        />
      </div>
      <div>
        <div className="input-Wrapper">
          <input
            className="input-Field"
            type="email"
            placeholder="Enter Email"
          />
        </div>
        <div className="input-Wrapper">
          <input
            className="input-Field"
            type="Password"
            placeholder="Password"
          />
        </div>
        <div className="input-Wrapper">
          <input
            className="input-Field"
            type="Password"
            placeholder="Confirm Password"
          />
        </div>
        <div className="input-Wrapper">
          <input
            className="input-Field"
            type="text"
            placeholder="Enter Restaurant Name"
          />
        </div>
        <div className="input-Wrapper">
          <input className="input-Field" type="text" placeholder="Enter City" />
        </div>
        <div className="input-Wrapper">
          <input
            className="input-Field"
            type="text"
            placeholder="Enter Full Address"
          />
        </div>
        <div className="input-Wrapper">
          <input
            className="input-Field"
            type="text"
            placeholder="Enter Valid Contact No."
          />
        </div>
        <div className="input-Wrapper">
          <button className="button">SignUp</button>
        </div>
      </div>
    </>
  );
};
export default RestaurantSignUp;
