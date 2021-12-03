import React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import fluoride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import whitening from '../../../images/whitening.png';


const services = [
    { name: 'Fluoride Treatment', description: 'Fluoride treatments are typically professional treatments containing a high concentration of fluoride that a dentist or hygienist will apply to a persons teeth to improve health and reduce the risk of cavities. These in-office treatments may take the form of a solution, gel, foam, or varnish.', img: fluoride },
    { name: 'Cavity Filling', description: 'However, unless a cavity is in the beginning stages of formation, it cannot heal naturally, especially for one that has broken through the dentin. When you start feeling pain in the localized tooth, its a sign that the damage is too significant, and you should see a dentist for professional cavity treatment.', img: cavity },
    { name: 'Whitening Teeth', description: 'Hydrogen peroxide is a mild bleach that can help to whiten stained teeth . For optimal whitening, a person can try brushing with a mix of baking soda and hydrogen peroxide for 1–2 minutes twice a day for a week.Jul 10, 2018', img: whitening }
]

const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ fontWeight: 500, color: 'success.main', m: 5 }} variant="h6" component="div">
                    Our services
                </Typography>
                <Typography sx={{ fontWeight: 600, m: 2 }} variant="h5" component="div">
                    Services we provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;