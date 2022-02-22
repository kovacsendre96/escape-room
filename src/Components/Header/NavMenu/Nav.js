import { Grid, makeStyles } from '@material-ui/core';
import React from 'react';
import { translate } from '../../../GlobalHelpers/Lang/Lang';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    navWrapper: {
        background: 'black',
        color: 'white',
        height: 60,
        padding: 0,
        margin: 0,
    },
    linkItem: {
        cursor: 'pointer',
        color: 'white',
        textDecoration:'none'
    }

});

const Nav = () => {
    const classes = useStyles();
    return (
        <Grid className={classes.navWrapper} container justifyContent={"space-around"} alignItems={"center"}>
            <Grid  item><Link className={classes.linkItem} to="escape-room/">{translate.mainPage}</Link></Grid>
            <Grid  item><Link className={classes.linkItem} to="escape-room/szobak">{translate.rooms}</Link></Grid>
            <Grid  item> <Link className={classes.linkItem} to="escape-room/foglalas"> {translate.booking} </Link> </Grid>
            <Grid  item> <Link className={classes.linkItem} to="escape-room/kapcsolat"> {translate.contact} </Link> </Grid>
        </Grid>
    );
};

export default Nav;