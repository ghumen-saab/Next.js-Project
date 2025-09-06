"use client";
import { useState } from "react";
import RestaurantLogin from "../_components/Login";
import RestaurantSignUp from "../_components/Signup";
import RestaurantHeader from "../_components/RestaurantHeader";
import "./style.css";
import RestaurantFooter from "../_components/RestautrantFooter";
const Restaurant = () => {
  const [login, setlogin] = useState(true);
  return (
    <div>
    <div className="container">
      <RestaurantHeader />
      <h1>Restaurant page</h1>
      {login ? <RestaurantLogin /> : <RestaurantSignUp />}
      <div>
        <button className="button-Link" onClick={() => setlogin(!login)}>
          {login ? "Do Not Have Account? Sign Up" : "Have Account? Log In"}
        </button>
      </div>
      </div>
      <RestaurantFooter />
      </div>
  );
};
export default Restaurant;
