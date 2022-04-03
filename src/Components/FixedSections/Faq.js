import {Grid} from "@material-ui/core";
import {gyik} from "../Pages/MainPage/gyik";
import ExpansionPanel from "../Pages/MainPage/ExpansionPanel";
import React from "react";
import {globalStyles} from "../../GlobalHelpers/globalStyles";

const Faq = () => {
    const globalStyle = globalStyles();

    return (<Grid container justifyContent={'space-around'}
                  className={`${globalStyle.brownSection}`}>
        {gyik.map(data => (
            <Grid item xs={7}>
                <ExpansionPanel
                    answer={data.answer}
                    question={data.question}
                />
            </Grid>
        ))}
    </Grid>)
}

export default Faq;
