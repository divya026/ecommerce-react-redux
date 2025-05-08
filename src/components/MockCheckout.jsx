import React, { useState } from 'react';
import './MockCheckout.css';
import PrimaryButton from './button/PrimaryButton';

const MockCheckout = ({ isOpen, onClose, totalAmount }) => {
  const [step, setStep] = useState(1);
  const [address, setAddress] = useState({ street: '', city: '', state: '', zip: '' });
  const [paymentMethod, setPaymentMethod] = useState('');

  if (!isOpen) return null;

  const handleAddressSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setStep(3);
  };

  const handleConfirmOrder = () => {
    alert(`Order confirmed! Total: Rs ${totalAmount}`);
    onClose();
  };

  return (
    <div className="checkout-overlay">
      <div className="checkout-content">
        {step === 1 && (
          <div>
            <h2>Shipping Address</h2>
            <form onSubmit={handleAddressSubmit}>
              <input
                type="text"
                placeholder="Street"
                value={address.street}
                onChange={(e) => setAddress({ ...address, street: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="City"
                value={address.city}
                onChange={(e) => setAddress({ ...address, city: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="State"
                value={address.state}
                onChange={(e) => setAddress({ ...address, state: e.target.value })}
                required
              />
              <input
                type="text"
                placeholder="ZIP Code"
                value={address.zip}
                onChange={(e) => setAddress({ ...address, zip: e.target.value })}
                required
              />
              <PrimaryButton name='NEXT' type="submit"/>
            </form>
          </div>
        )}

        {step === 2 && (
          <div>
            <h2>Payment Method</h2>
            <form onSubmit={handlePaymentSubmit}>
              <select
                value={paymentMethod}
                onChange={(e) => setPaymentMethod(e.target.value)}
                required
              >
                <option value="">Select Payment Method</option>
                <option value="UPI">UPI</option>
                <option value="Credit Card">Credit Card</option>
                <option value="Debit Card">Debit Card</option>
                <option value="Net Banking">Net Banking</option>
              </select>
              <PrimaryButton name = 'NEXT' type="submit"/>
            </form>
          </div>
        )}

        {step === 3 && (
          <div>
            <h2>Order Summary</h2>
            <p>Shipping to: {`${address.street}, ${address.city}, ${address.state} ${address.zip}`}</p>
            <p>Payment Method: {paymentMethod}</p>
            <p>Total Amount: Rs {totalAmount}</p>
            <PrimaryButton name='CONFIRM ORDER' onClick={handleConfirmOrder}/>
          </div>
        )}

        <PrimaryButton name='CLOSE' onClick={onClose}/>
      </div>
    </div>
  );
};

export default MockCheckout;