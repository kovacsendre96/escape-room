import React from "react";
import headerImg from '../../public/header-walpapper-img.jpg';
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    img: {
        backgroundImage: `url(${headerImg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: 500,
    },
    companyNameFirst: {
        color: 'white',
        marginBottom:10
    },
    companyNameSecond: {
        color: '#ffcb69'
    },
    headerTextWrapper:{
        padding:40,
        backgroundColor: 'rgba(0,0,0,0.4)',
        borderRadius:'5px'
    }
}));

const Header = () => {
    const classes = useStyles();

    return (
        <Grid container justifyContent={'center'}>
            <Grid container item xs={12} className={classes.img} justifyContent={'center'} alignItems={'center'}>
                <Typography variant={'h2'} className={classes.headerTextWrapper} align={'center'}>
                    <Grid container direction={'column'}>
                    <span className={classes.companyNameFirst}>Code<span className={classes.companyNameSecond}>Labor</span></span>
                    <small style={{color:'white'}}>Szabadulj ki a hétköznapokból!</small>
                    </Grid>
                </Typography>
            </Grid>
        </Grid>
    );
};
export default Header;
  