import React, { useState } from 'react';
import './MockPaymentModal.css';

const MockPaymentModal = ({ isOpen, onClose, totalAmount }) => {
  const [selectedMethod, setSelectedMethod] = useState('');

  if (!isOpen) return null;

  const handlePayment = () => {
    if (selectedMethod) {
      alert(`Payment of Rs ${totalAmount} successful via ${selectedMethod}!`);
      onClose();
    } else {
      alert('Please select a payment method');
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Select Payment Method</h2>
        <div className="payment-methods">
          <button onClick={() => setSelectedMethod('UPI')} className={selectedMethod === 'UPI' ? 'selected' : ''}>UPI</button>
          <button onClick={() => setSelectedMethod('Debit Card')} className={selectedMethod === 'Debit Card' ? 'selected' : ''}>Debit Card</button>
          <button onClick={() => setSelectedMethod('Credit Card')} className={selectedMethod === 'Credit Card' ? 'selected' : ''}>Credit Card</button>
          <button onClick={() => setSelectedMethod('Net Banking')} className={selectedMethod === 'Net Banking' ? 'selected' : ''}>Net Banking</button>
        </div>
        <p>Total Amount: Rs {totalAmount}</p>
        <div className="modal-actions">
          <button onClick={handlePayment}>Pay Now</button>
          <button onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
};

export default MockPaymentModal;