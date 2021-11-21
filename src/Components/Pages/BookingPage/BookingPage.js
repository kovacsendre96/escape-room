import React, { useEffect, useState } from "react";
import { getRoomData } from "../../../GlobalHelpers/Api/ApiFunctions";
import BookingTable from "./BookingTable";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { translate } from "../../../GlobalHelpers/Lang/Lang";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import { useParams } from "react-router";
import { readRoomName, seRoomIdByRoomName } from "../../../GlobalHelpers/GlobalFunctions";




const useStyles = makeStyles({
    weekWrapper: {
        width: 'auto',
        padding: 20,
    },
    ArrowIcon: {
        cursor: 'pointer',
        padding: 10,
        fontSize: 50,
    }
});
const BookingPage = () => {
    /*============================ USE STATES /*============================*/
    const [response, setResponse] = useState([]);
    const [loading, setLoading] = useState(true);
    const [roomId, setRoomId] = useState(null);
    const todaysWeekNumber = 4;
    const maxWeekNumber = 51;
    const [weekNumber, setWeekNumber] = useState(null);
    const classes = useStyles();
    const {room_name} = useParams();

    /*============================ USE EFFECTS /*============================*/
    useEffect(()=>{
        setWeekNumber(todaysWeekNumber);
        setRoomId(seRoomIdByRoomName(room_name));
    },[])
    
    useEffect(() => {
        if(weekNumber !== null){
            getRoomData({ id: '-MoUTkg1gdkGpPFivBxy', setResponse: setResponse, setLoading: setLoading, roomId: roomId, weekNumber, weekNumber });
        }
        
    }, [weekNumber]);
    

    /*============================ HANDLE FUNCTIONS /*============================*/
    const handleArrowClick = (e) => {
        if (e.target.id === 'arrowLeft') {
            const prevNumber = weekNumber - 1;
            if (prevNumber >= todaysWeekNumber) {
                setWeekNumber(prevNumber);
            }
        }
        if (e.target.id === 'arrowRight') {
            const nextNumber = weekNumber + 1;
            if(nextNumber <= maxWeekNumber){
                setWeekNumber(nextNumber)
            }
        }
    }

    /*============================ RENDER /*============================*/
    return (
        loading
            ? <h1>Loading...</h1>
            :
            <Grid container justifyContent={'center'} alignItems={'center'} direction={'column'}>
                <Typography variant={"h4"}>{readRoomName(room_name)}</Typography>

                <Grid container alignItems={'center'} className={classes.weekWrapper}>
                    <ArrowLeftIcon id={'arrowLeft'} className={classes.ArrowIcon} /* style={{display: weekNumber === todaysWeekNumber ? 'none':'block'}} */ onClick={handleArrowClick} />
                    <Typography variant={"h4"}>{response.week}. {translate.week}</Typography>
                    <ArrowRightIcon id={'arrowRight'} className={classes.ArrowIcon} onClick={handleArrowClick} />
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

