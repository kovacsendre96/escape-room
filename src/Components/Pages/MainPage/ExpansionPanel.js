import {Accordion, AccordionDetails, AccordionSummary, Grid, Typography} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {globalStyles} from "../../../GlobalHelpers/globalStyles";

const ExpansionPanel = ({question, answer}) => {
    const globalStyle = globalStyles();
    return (
        <Accordion
            className={globalStyle.marginAll}
        >
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1a-content"
                id="post-data"
                square
            >
                <Typography>{question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Grid container>
                    {answer}
                </Grid>
            </AccordionDetails>
        </Accordion>
    );
};

export default ExpansionPanel;