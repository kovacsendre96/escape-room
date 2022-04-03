import {Grid, makeStyles, Typography} from '@material-ui/core';
import React from 'react';
import {globalStyles} from "../../../GlobalHelpers/globalStyles";
import RoomCard from "./RoomCard";
import {roomData} from "../RoomsPage/roomData";
import {Link} from "react-router-dom";
import {events} from "./events";
import ExpansionPanel from "./ExpansionPanel";
import {gyik} from './gyik';
import BookingForm from "../BookingTableComponent/BookingForm";
import {FORM_TYPE} from "../../../GlobalHelpers/GlobalFunctions";


const useStyles = makeStyles(theme => ({
    firstSection: {
        minHeight: 300
    },
    textWrapper: {
        letterSpacing: 1,
        lineHeight: 2,
    },
    footer:{
        height:80
    }

}));
const MainPage = () => {
    const classes = useStyles();
    const globalStyle = globalStyles();
    return (
        <React.Fragment>
            <Grid container justifyContent={'center'} className={`${globalStyle.blackSection} ${classes.firstSection}`}>
                <Grid item xs={5} container justifyContent={'center'} alignItems={'center'}
                      className={`${classes.textWrapper} ${globalStyle.paddingTopAndBottom}`}>
                    Derítsétek ki Szeged legújabb szabaduló szobájának rejtélyeit!
                    <br/>
                    Ti is odavagytok a szabadulószobákért?
                    <br/>
                    Kipróbálnátok egy újat?
                    <br/>
                    Kerestek egy élményekben gazdag programot?
                    <br/>
                    Gyertek el csapatban és pörgessétek fel az unalmas hétköznapokat!
                    <br/>
                    Nem voltál még szabaduló szobában?
                    <br/>
                    Ha szereted a nyomozós játékokat, jó csapatjátékos vagy és még a logikai fejtörőket is szereted,
                    akkor ezt a programot neked ajánljuk.
                </Grid>
            </Grid>
            <Grid container justifyContent={'space-around'} className={`${globalStyle.whiteSection}`}>

                {roomData.map(room => (
                    <Grid item xs={8} md={3} container justifyContent={'center'}
                          className={globalStyle.paddingTopAndBottom}>
                        <Link to={room.url}>
                            <RoomCard
                                description={room.description}
                                imgSrc={room.imgPath}
                                title={room.label}
                            />
                        </Link>
                    </Grid>

                ))}
            </Grid>
            <Grid container justifyContent={'space-around'}
                  className={`${globalStyle.blackSection} ${classes.firstSection}`}>
                {events.map(event => (
                    <Grid item xs={7} sm={5} md={2} container alignItems={'center'}
                          className={`${globalStyle.paddingTopAndBottom}`}>
                        <Typography variant={"h5"}>
                            {event.title}
                        </Typography>
                        <Grid>{event.description}</Grid>
                    </Grid>
                ))}
            </Grid>
        </React.Fragment>
    )
        ;
};
export default MainPage;