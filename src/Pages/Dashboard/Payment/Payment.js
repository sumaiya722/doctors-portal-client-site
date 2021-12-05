import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { loadStripe } from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm.js';
// import Appointment from '../../Appointment/Appointment/Appointment.js';

const stripePromise=loadStripe('pk_test_51K1Da4ET27hT7jtkuKH1Ux2840FSmIxisw2h3aan6RWtS6CK6qDYEukcN2Kf2X9U6zIEe1yRAwwrymX3gTlSy0TH00p71p0baM')
const Payment = () => {
    const { appointmentId } = useParams();
    const [appointment, setAppointment] = useState({});
    useEffect(() => {
        fetch(`https://shrouded-garden-47119.herokuapp.com/appointments/${appointmentId}`)
            .then(res => res.json())
            .then(data => setAppointment(data));
    },[appointmentId])
    return (
        <div>
            <h2>Please pay for:{appointment.patientName} for{ appointment.serviceName}</h2>
            <h4>Pay:{appointment.price}</h4>
            {appointment?.price && <Elements stripe={stripePromise}>
                <CheckoutForm
               appointment={appointment}
                />
    </Elements>}
        </div>
    );
};

export default Payment;