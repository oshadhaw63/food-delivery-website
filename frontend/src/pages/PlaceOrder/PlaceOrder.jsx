import React from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import { useContext } from 'react'

const PlaceOrder = () => {

  const {getTotalCartAmount}=useContext(StoreContext)
  return (
    <form className='place-order'>
      <div className="place-order-left">
        <p className='title'>Delivery Information</p>
        <div className='multi-fields'>
          <input type="text" placeholder='First Name' required />
          <input type="text" placeholder='Last Name' required />
        </div>

        <input type="email" placeholder='Email address' required />
        <input type="text" placeholder="Street"/>
        <div className='multi-fields'>
          <input type="text" placeholder='City' required />
          <input type="text" placeholder='State' required />
        </div>
        <div className='multi-fields'>
          <input type="text" placeholder='Zip code' required />
          <input type="text" placeholder='Country' required />
        </div>
        <input type="text" placeholder='Phone number' required />
      </div>
      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div className="cart-total-details">
            <div>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <div>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount()===0?0:2}</p>
            </div>
            <div>
              <p>Total</p>
              <p>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</p>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>

    </form>
  )
}

export default PlaceOrder
