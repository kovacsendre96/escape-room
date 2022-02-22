import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import AboutTheEscapeRoom from './Sections/AboutTheEscapeRoom';
import StarterSection from './Sections/StartingSection';

const useStyles = makeStyles(theme => ({
    
}));
const MainPage = () => {
    const classes = useStyles();
    return (
        <React.Fragment>
            <StarterSection />
            <AboutTheEscapeRoom />
        </React.Fragment>
    );
};
export default MainPage;