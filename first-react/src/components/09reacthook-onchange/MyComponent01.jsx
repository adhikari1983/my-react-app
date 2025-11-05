//onChange => is a react event handler used to handle changes made to input fields, 
// textareas, select elements, radio button and checkboxes.  
// e.g. <input>, <textarea>, <select> <radio>, <checkbox> etc.
// It is triggered whenever the value of the input element changes, allowing us to 
// capture and respond to user input in real-time.
import React, { useState } from 'react'

function MyComponent01() {
    const [name, setName] = useState('Guest')       // for text input field     
    const [quantity, setQuantity] = useState(0)   // for number input field   
    const [comment, setComment] = useState('')   // for textarea field
    const [payment, setPayment] = useState()      // for select dropdown field
    const [shipping, setShipping] = useState();  // for radio button field


    function handleNameChange(event) {
        setName(event.target.value)
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value)
    }

    function handleCommentChange(event) {
        setComment(event.target.value)
    }

    function handlePaymentChange(event) {
        setPayment(event.target.value)
    }

    function handleShippingChange(event) {
        setShipping(event.target.value)
    }
    return (
        <div>
            <input value={name} onChange={handleNameChange} />
            <p>Name : {name} </p>

            <input value={quantity} onChange={handleQuantityChange} type="number" />
            <p>Quantity : {quantity} </p>

            <textarea value={comment} onChange={handleCommentChange} placeholder='Delivery insruction' />
            <p>Comment : {comment} </p>

            <select value={payment} onChange={handlePaymentChange}>
                <option value="">-- Select Payment Method --</option>
                <option value="Visa">Visa</option>
                <option value="MC">MC</option>
                <option value="Amex">Amex</option>
            </select>
            <p>Payment Method : {payment} </p>

            <label>
                <input type="radio" value="Pick Up"
                    checked={shipping === "Pick up"} onChange={handleShippingChange}></input>
                Pick Up
            </label>
            <label>
                <input type="radio" value="Home Delivery"
                    checked={shipping === "Home Delivery"} onChange={handleShippingChange}></input>
                Home Delivery
            </label>
            <p>Shipping Method : {shipping} </p>
        </div>
    )
}

export default MyComponent01