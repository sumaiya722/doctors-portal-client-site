import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import AvailableAppoints from '../AvailableAppoints/AvailableAppoints';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AvailableAppoints date={date}></AvailableAppoints>
        </div>
    );
};

export default Appointment;