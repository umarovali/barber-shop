import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { BsPencilSquare } from "react-icons/bs";

export default function BookAn({ onNext }) {
    const [formData, setFormData] = useState({ name: '', surname: '', number: '', date: '', time: '' });

    const handleChange = (e) => {
        const { id, value } = e.target;
        if (id === 'number' && !/^[\d+]*$/.test(value)) return;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onNext(formData);
    };

    const today = new Date();
    const tenDaysLater = new Date(today);
    tenDaysLater.setDate(today.getDate() + 10);

    const formatDate = (date) => date.toISOString().split('T')[0];

    return (
        <div className="book_an">
            <h2 className='book_an_title'>Book an Appointment</h2>
            <form className='book_an_form' onSubmit={handleSubmit}>
                <div className="book_an_input">
                    <input type="text" required id="name" value={formData.name} onChange={handleChange} />
                    <span>Name</span>
                </div>
                <div className="book_an_input">
                    <input type="text" required id="surname" value={formData.surname} onChange={handleChange} />
                    <span>Surname</span>
                </div>
                <div className="book_an_input">
                    <input type="text" required id="number" value={formData.number} onChange={handleChange} />
                    <span>Phone Number</span>
                </div>
                <div className="book_an_date_time">
                    <input className='book_an_date' type="date" id="date" value={formData.date} onChange={handleChange} required min={formatDate(today)} max={formatDate(tenDaysLater)} />
                    <select className='book_an_time' id="time" value={formData.time} onChange={handleChange} required>
                        <option disabled value=""> Time</option>
                        {["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"].map(time => (
                            <option key={time} value={time}>{time}</option>
                        ))}
                    </select>
                </div>
                <div className='book_an_btn'>
                    <Button variant="contained" endIcon={<BsPencilSquare />} type="submit">Book an</Button>
                </div>
            </form>
        </div>
    );
}
