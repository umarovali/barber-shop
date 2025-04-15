import React from 'react';
import useBookStore from '../../../Store/BookStore';

export default function Booked() {
    const { data } = useBookStore();

    console.log(data);
    return (
        <div className="booked">
            <h2>Booked</h2>
            <div>
            </div>
        </div>
    );
}