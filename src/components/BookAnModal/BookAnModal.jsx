// BookAnModal.js
import React, { useState } from 'react';
import Modal from '@mui/material/Modal';
import BookAn from './BookAn/BookAn';
import BookAnMaster from './BookAnMaster/BookAnMaster';
import BookMainServices from './BookMainServices/BookMainServices';
import BookShavingServices from './BookShavingServices/BookShavingServices';
import BookAdditionalServices from './BookAdditionalServices/BookAdditionalServices';
import BookHairstyle from './BookHairstyle/BookHairstyle';
import BookPayment from './BookPayment/BookPayment';
import Booked from './Booked/Booked';

export default function BookAnModal({ open, handleClose }) {
    const [step, setStep] = useState(1);
    const [bookingData, setBookingData] = useState({
        formData: {},
        selectedMaster: {},
        selectedMainService: {},
        selectedShavingService: {},
        selectedAdditionalService: {},
        selectedHairstyle: {},
    });

    const handleNextStep = () => setStep(prev => prev + 1);
    const handlePrevStep = () => setStep(prev => prev - 1);

    const handleFormData = (data) => {
        setBookingData(prev => ({ ...prev, formData: data }));
        handleNextStep();
    };

    const handleSelectMaster = (master) => {
        setBookingData(prev => ({ ...prev, selectedMaster: master }));
        handleNextStep();
    };

    const handleSelectService = (service, serviceType) => {
        setBookingData(prev => ({ ...prev, [serviceType]: service }));
        handleNextStep();
    };

    const handleFinishBooking = () => {
        console.log('Booking Complete!', bookingData);
        setStep(step + 1);
    };

    return (
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
            <div className="book_an_modal">
                {/* <Booked /> */}
                {step === 1 && <BookAn onNext={handleFormData} />}
                {step === 2 && <BookAnMaster onSelectMaster={handleSelectMaster} />}
                {step === 3 && <BookMainServices onSelectService={(service) => handleSelectService(service, 'selectedMainService')} />}
                {step === 4 && <BookShavingServices onSelectService={(service) => handleSelectService(service, 'selectedShavingService')} />}
                {step === 5 && <BookAdditionalServices onSelectService={(service) => handleSelectService(service, 'selectedAdditionalService')} />}
                {step === 6 && <BookHairstyle onSelectHairstyle={(hairstyle) => handleSelectService(hairstyle, 'selectedHairstyle')} />}
                {step === 7 && <BookPayment bookingData={bookingData} onFinishBooking={handleFinishBooking} />}
                {step === 8 && <p className='book_an_text'>The payment has been successfully completed and you have booked.</p>}
                
            </div>
        </Modal>
    );
}
