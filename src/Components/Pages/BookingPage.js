import BookingTableComponent from "./BookingTableComponent/BookingTableComponent";
import React, {useEffect, useState} from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import {autoPlay} from 'react-swipeable-views-utils';
import {roomData} from "./RoomsPage/roomData";
import {Grid} from "@material-ui/core";
import {ROOM_NAMES} from "../../GlobalHelpers/GlobalFunctions";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 500,
        flexGrow: 1,
    },
    header: {
        display: 'flex',
        alignItems: 'center',
        height: 50,
        paddingLeft: theme.spacing(4),
        backgroundColor: theme.palette.background.default,
    },
    img: {
        height: 255,
        display: 'block',
        maxWidth: 500,
        overflow: 'hidden',
        width: '100%',
    },
}));


const BookingPage = () => {
    const classes = useStyles();
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = 3;
    const [roomName, setRoomName] = useState(ROOM_NAMES.FOGSAGBAN);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    // const handleStepChange = (step) => {
    //     console.log(step);
    //      setActiveStep(step);
    // };

    useEffect(() => {
        switch (activeStep) {
            case 0 :
                setRoomName(ROOM_NAMES.FOGSAGBAN);
                break;
            case 1 :
                setRoomName(ROOM_NAMES.SZOBA_2);
                break;
            case 2 :
                setRoomName(ROOM_NAMES.SZOBA_3);
        }
    }, [activeStep]);

    return (
        <Grid container justifyContent={'center'} alignItems={'center'} direction="column">
            <div className={classes.root}>
                <Paper square elevation={0} className={classes.header}>
                    <Typography>{roomData[activeStep].label}</Typography>
                </Paper>
                <AutoPlaySwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={activeStep}
                    // onChangeIndex={handleStepChange}
                    // enableMouseEvents
                >
                    {roomData.map((step, index) => (
                        <div key={step.label}>
                            {Math.abs(activeStep - index) <= 2 ? (
                                <img className={classes.img} src={step.imgPath} alt={step.label}/>
                            ) : null}
                        </div>
                    ))}
                </AutoPlaySwipeableViews>
                <MobileStepper
                    steps={maxSteps}
                    position="static"
                    variant="text"
                    activeStep={activeStep}
                    nextButton={
                        <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
                            Next
                            {theme.direction === 'rtl' ? <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
                        </Button>
                    }
                    backButton={
                        <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
                            {theme.direction === 'rtl' ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}
                            Back
                        </Button>
                    }
                />
            </div>
                <BookingTableComponent
                    roomNameFromBookingPage={roomName}
                />
        </Grid>
    );
};

export default BookingPage;