import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png';
import bg from '../../../images/appointment-bg.png';
import { Button, Typography } from '@mui/material';


const appointBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45,58,74,0.9)',
    backgroundBlendMode: 'darken,luminosity',
    marginTop: 175
}
const AppointmentBanner = () => {
    return (
        <Box style={appointBg} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <img style={{ width: 400, marginTop: '-110px' }} src={doctor} alt="" />
                </Grid>
                <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left', alignItems: 'center' }}>
                    <Box>
                        <Typography variant="h6" sx={{ mb: 5 }} style={{ color: '#5CE7ED' }}>
                            Appoint
                        </Typography>
                        <Typography variant="h4" style={{ color: 'white' }}>
                            Make an appointment Today
                        </Typography>
                        <Typography variant="h6" sx={{ my: 5 }} style={{ color: 'white', fontSize: 14, fontWeight: 300 }}>
                            It is a long established fact that a reader will be distractedby the readable content of a page when looking at its.
                        </Typography>
                        <Button variant="contained" style={{ backgroundColor: '#5CE7ED' }}>Learn More</Button>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};

export default AppointmentBanner;