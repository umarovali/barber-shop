import React, { useState } from 'react';
import useBookStore from "../../../Store/BookStore";

export default function BookPayment({ bookingData, onFinishBooking }) {
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');
    const [inputAmount, setInputAmount] = useState('');

    const { setData } = useBookStore();

    const totalAmount = [
        bookingData.selectedMaster?.price || 0,
        bookingData.selectedMainService?.price || 0,
        bookingData.selectedShavingService?.price || 0,
        bookingData.selectedAdditionalService?.price || 0,
        bookingData.selectedHairstyle?.price || 0,
    ].reduce((acc, price) => acc + price, 0);

    const handlePayment = () => {
        if (cardNumber && expiryDate && cvv && parseFloat(inputAmount) === totalAmount) {
            alert('Booking successful!');
            onFinishBooking();
            // setData({
            //     cardNumber,
            //     expiryDate,
            //     cvv,
            //     inputAmount,
            //     totalAmount,
            //     ...bookingData.formData,
            //     selectedMaster: bookingData.selectedMaster,
            //     selectedMainService: bookingData.selectedMainService,
            //     selectedShavingService: bookingData.selectedShavingService,
            //     selectedAdditionalService: bookingData.selectedAdditionalService,
            //     selectedHairstyle: bookingData.selectedHairstyle,
            // });
        } else {
            alert('Please enter valid payment details and ensure the amount is correct.');
        }
    };

    return (
        <div className="book-payment">
            <h2>Total Amount: ${totalAmount.toFixed(2)}</h2>
            <div className="payment-form">
                <div className="payment-input">
                    <label>Card Number</label>
                    <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="1234 5678 9012 3456"
                    />
                </div>
                <div className="payment-input">
                    <label>Expiry Date</label>
                    <input
                        type="text"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                        placeholder="MM/YY"
                    />
                </div>
                <div className="payment-input">
                    <label>CVV</label>
                    <input
                        type="text"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        placeholder="123"
                    />
                </div>
                <div className="payment-input">
                    <label>Amount</label>
                    <input
                        type="text"
                        value={inputAmount}
                        onChange={(e) => setInputAmount(e.target.value)}
                        placeholder={`$${totalAmount.toFixed(2)}`}
                    />
                </div>
                <button onClick={handlePayment}>Pay</button>
            </div>
        </div>
    );
}
