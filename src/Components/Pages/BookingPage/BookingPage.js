import React, { useEffect, useState } from "react";
import { getRoomData } from "../../../GlobalHelpers/Api/ApiFunctions";
import BookingTable from "./BookingTable";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { translate } from "../../../GlobalHelpers/Lang/Lang";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';




const useStyles = makeStyles({
    weekWrapper: {
        width:'auto',
        padding: 20,
    },
    ArrowIcon:{
        cursor: 'pointer',
        padding: 10,
        fontSize:50,
    }
});
const BookingPage = () => {
    /*============================ USE STATES /*============================*/
    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState(true);
    const [roomId, setRoomId] = useState(0);
    const [weekNumber, setWeekNumber] = useState(0);
    const classes = useStyles();

    /*============================ USE EFFECTS /*============================*/

    useEffect(() => {
        getRoomData({ id: '-MoUTkg1gdkGpPFivBxy', setResponse: setResponse, setLoading: setLoading });

    }, []);

    /*============================ HANDLE FUNCTIONS /*============================*/
    const handleArrowClick = (e) => {
    if(e.target.id === 'arrowLeft'){
        setWeekNumber(weekNumber-1)
    }
    if(e.target.id === 'arrowRight'){
        setWeekNumber(weekNumber+1)
    }
    }
    /*============================ RENDER /*============================*/
    return (
        loading
            ? <h1>Loading...</h1>
            :
            <Grid container justifyContent={'center'} alignItems={'center'} direction={'column'}>
                <Typography variant={"h4"}>{response.rooms[roomId].room_name}</Typography>

                <Grid container alignItems={'center'} className={classes.weekWrapper}>
                    <ArrowLeftIcon id={'arrowLeft'} className={classes.ArrowIcon} onClick={handleArrowClick}/>
                    <Typography variant={"h4"}>{response.rooms[roomId].weeks[weekNumber].week}. {translate.week}</Typography>
                 <ArrowRightIcon id={'arrowRight'}  className={classes.ArrowIcon} onClick={handleArrowClick}/>
                </Grid>

                <Grid>
                    <BookingTable
                        response={response}
                        roomId={roomId}
                        weekNumber={weekNumber}
                    />
                </Grid>

            </Grid>

    );
};

export default BookingPage;

