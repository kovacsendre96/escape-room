import {Grid, makeStyles} from "@material-ui/core";
import React from "react";
import {globalStyles} from "../../GlobalHelpers/globalStyles";

const useStyles = makeStyles(theme => ({
    footer: {
        height: 80
    }
}));

const Footer = () => {
        const globalStyle = globalStyles();
        const classes = useStyles();

        return (
            <Grid container justifyContent={'space-around'}
                  className={`${globalStyle.blackSection} ${classes.footer}`}>
                FOOTER
            </Grid>
        );
    }
;

export default Footer;
