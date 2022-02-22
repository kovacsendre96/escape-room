import { Grid } from "@material-ui/core";
import React from "react";
import { Link } from 'react-router-dom';

const RoomsPage = () => {

    return (
        <Grid container direction={'column'}>
            <Grid><Link to={`/escape-room/szobak/fogsagban`}>SZOBA 1</Link></Grid>
            <Grid><Link to={`/escape-room/szobak/szoba-2`}>SZOBA 2</Link></Grid>
            <Grid><Link to={`/escape-room/szobak/szoba-3`}>SZOBA 3</Link></Grid>
        </Grid>
        );
};

export default RoomsPage;