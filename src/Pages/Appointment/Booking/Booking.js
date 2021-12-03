import { Button, Grid } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import BookingModal from '../BookingModal/BookingModal';


const Booking = ({ booking, date ,setBookingSuccess}) => {

    const { name, time, space,price } = booking;
    const [openBooking, setOpenBooking] = React.useState(false);
    const handleOpen = () => setOpenBooking(true);
    const handleBookingClose = () => setOpenBooking(false);
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ py: 5 }}>
                    <Typography style={{ color: '#5CE7ED' }} variant="h5" gutterBottom component="div">
                        {name}
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div">
                        {time}
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                      Price$  {price} 
                    </Typography>
                    <Typography variant="caption" display="block" gutterBottom>
                        {space} SPACES AVAILABLE
                    </Typography>
                    <Button onClick={handleOpen} variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Book Appointment</Button>
                </Paper>
            </Grid>
            <BookingModal
                date={date}
                booking={booking}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
            setBookingSuccess={setBookingSuccess}
            >
            </BookingModal>
        </>
    );
};

export default Booking;