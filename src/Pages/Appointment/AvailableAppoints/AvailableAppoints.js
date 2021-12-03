import { Alert, Container, Grid } from '@mui/material';
import React, { useState } from 'react';
import Booking from '../Booking/Booking';

const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00AM-09.00AM',
        price:20,
        space: 10
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '09.00AM-10.00AM',
        price:15,
        space: 8
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '10.00AM-11.00AM',
        price:17,
        space: 9
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00AM-12.00AM',
        price:19,
        space: 5
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00PM-07.00PM',
        price:25,
        space: 10
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00PM-08.00PM',
        price:35,
        space: 10
    },
]

const AvailableAppoints = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);
    return (
        <Container>
            <h1 style={{ color: '#5CE7ED' }}>Available Appointments{date.toDateString()}</h1>
             
             {bookingSuccess && <Alert severity="success">Appointment Booked successfully!!</Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    ></Booking>)
                }
            </Grid>
        </Container>
    );
};

export default AvailableAppoints;