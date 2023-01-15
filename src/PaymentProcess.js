import React from 'react'
import { Link } from 'react-router-dom'
import "./PaymentProcess.css"
function PaymentProcess() {
  return (

    <div className='paymentProcess'>
        
        <img src='https://cdn.dribbble.com/users/3071180/screenshots/5881934/builder-drilling.gif'></img>
        <h2>Sorry, Still In Development...</h2>
        <Link to='/'> {/*the amazon logo brings the user to the home page*/}
                <img
                    className="login__logo"
                    src='https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Amazon-512.png' 
                />
        </Link>
    </div>
  )
}

export default PaymentProcess