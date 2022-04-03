import {Grid} from "@material-ui/core";
import BookingForm from "../Pages/BookingTableComponent/BookingForm";
import {FORM_TYPE} from "../../GlobalHelpers/GlobalFunctions";
import React from "react";
import {globalStyles} from "../../GlobalHelpers/globalStyles";

const Contact = () => {
    const globalStyle = globalStyles();
    return (<Grid container justifyContent={'space-around'}
                  className={`${globalStyle.whiteSection}`}>
        < Grid item xs={10} md={5}>
            <iframe
                width="600" height="500" id="gmap_canvas"
                src="https://maps.google.com/maps?q=szeged%20Takar%C3%A9kt%C3%A1r&t=&z=15&ie=UTF8&iwloc=&output=embed"
                frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"
            />
        </Grid>
        <Grid item xs={10} md={4}>
            <BookingForm
                formType={FORM_TYPE.SEND_MAIL_FORM}
            />
        </Grid>
        <Grid item xs={10} md={2}>
            <Grid>CodeLabor</Grid>
            <Grid>Nyitvatartási idő</Grid>
            <Grid>+36706349277</Grid>
            <Grid>Cím</Grid>
            <Grid>Social media elérhetőségek</Grid>
        </Grid>
    </Grid>);
}
export default Contact;
