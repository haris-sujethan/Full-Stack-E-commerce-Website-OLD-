import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from "./Payment";
import PaymentProcess from "./PaymentProcess";

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => { //lister
    auth.onAuthStateChanged(authUser =>{
      console.log('user is ', authUser); //debugging help

      if (authUser){
        //the user logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }else {
        //the user logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, []) //runs once when the app loads (basically a dynamic if statment)


  return (
    // BEM
    <Router>
      <div className="app">
     
        <Routes>
          <Route path="/login" element={[<Login/> ]}/> {/*Header not included in login page*/}
          <Route path="/checkout" element={[<><Header/><Checkout/></> ]}/> {/*wrap them in a fragment to include both header and checkout*/}
          <Route path="/" element={[<><Header/><Home/></>]}/> {/*wrap them in a fragment to include both header and home*/}
          <Route path="/payment" element={[<><Header/><Payment/></>]}/> {/*wrap them in a fragment to include both header and payment*/}
          <Route path="/paymentProcess" element={[<PaymentProcess/>]}/> {/*wrap them in a fragment to include both header and payment*/}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
