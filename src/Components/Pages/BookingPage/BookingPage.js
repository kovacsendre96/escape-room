import React, { createContext, useEffect, useState } from "react";
import { getRoomCapacity, getRoomData } from "../../../GlobalHelpers/Api/ApiFunctions";
import BookingTable from "./BookingTable";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { translate } from "../../../GlobalHelpers/Lang/Lang";
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import { useParams } from "react-router";
import { getCurrentWeekNumber, readRoomName, setRoomIdByRoomName } from "../../../GlobalHelpers/GlobalFunctions";




export const BookingContext = createContext();
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
    const [isSentBook, setIsSentBook] = useState(false);
    const todaysWeekNumber = getCurrentWeekNumber();
    const maxWeekNumber = 51;
    const [weekNumber, setWeekNumber] = useState(null);
    const classes = useStyles();
    const { room_name } = useParams();
    const id = '-MoUTkg1gdkGpPFivBxy';
    const [roomCapacity, setRoomCapacity] = useState();

    /*============================ USE EFFECTS /*============================*/
    useEffect(() => {
        setWeekNumber(todaysWeekNumber);
        setRoomId(setRoomIdByRoomName(room_name));
    }, []);

    useEffect(() => {
        if (weekNumber !== null) {
            getRoomData({ id: id, setResponse: setResponse, setLoading: setLoading, roomId: roomId, weekNumber: weekNumber });
        }

    }, [weekNumber, isSentBook]);

    useEffect(() => {
        getRoomCapacity({ id: id, setState: setRoomCapacity, roomId: roomId });
    }, [loading]);

    /*============================ HANDLE FUNCTIONS /*============================*/
    const handleArrowLeftClick = () => {
        const prevNumber = weekNumber - 1;
        if (prevNumber >= todaysWeekNumber) {
            setWeekNumber(prevNumber);
        }
    };

    const handleArrowRightClick = () => {
        const nextNumber = weekNumber + 1;
        if (nextNumber <= maxWeekNumber) {
            setWeekNumber(nextNumber)
        }
    };


    /*============================ RENDER /*============================*/
    return (
        loading
            ? <h1>Loading...</h1>
            :
            <Grid container justifyContent={'center'} alignItems={'center'} direction={'column'}>
                <Typography variant={"h4"}>{readRoomName(room_name)}</Typography>

                <Grid container alignItems={'center'} className={classes.weekWrapper}>
                    <ArrowLeftIcon id={'arrowLeft'} className={classes.ArrowIcon} onClick={handleArrowLeftClick} />
                    <Typography variant={"h4"}>{response.week}. {translate.week}</Typography>
                    <ArrowRightIcon id={'arrowRight'} className={classes.ArrowIcon} onClick={handleArrowRightClick} />
                </Grid>
                <BookingContext.Provider
                    value={{
                        id,
                        roomId,
                        weekNumber,
                        isSentBook,
                        setIsSentBook
                    }}

                >
                    <Grid>
                        <BookingTable
                            response={response}
                            roomId={roomId}
                            weekNumber={weekNumber}
                            roomCapacity={roomCapacity}
                        />
                    </Grid>
                </BookingContext.Provider>

            </Grid>

    );
};

export default BookingPage;

