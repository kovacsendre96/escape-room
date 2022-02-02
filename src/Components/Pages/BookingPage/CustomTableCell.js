import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import { isReservedTime } from '../../../GlobalHelpers/GlobalFunctions';
import { clickedTimeData } from './BookingFromFunctions';
import { CodeSharp } from '@material-ui/icons';

const useStyles = makeStyles({
    tableCell: {
        border: '2px solid white',
        padding: 20
    },
    reserved: {
        cursor: "not-allowed",
        background: 'red'
    },
    free: {
        cursor: 'pointer',
        background: '#90EE90'
    },
});

const CustomTableCell = ({ response,index,setOpenModal,rowIndex,roomId }) => {
    const classes = useStyles();
    const handleClick = () => {
        if (!isReservedTime(response.dayTimes[index].reserved)){
            setOpenModal(true);
            clickedTimeData.clickedDay = rowIndex;
            clickedTimeData.clickedTime = index;
            clickedTimeData.time = response.dayTimes[index].time;
            clickedTimeData.date = response.date;
            clickedTimeData.roomId = roomId;
        }
    };

    return (

            <TableCell
                onClick={handleClick}
                key={`table-body-cell-${response.date}`}
                className={`${classes.tableCell} ${response.dayTimes[index].reserved ? classes.reserved : classes.free}`}
            >
                {response.dayTimes[index].time}
            </TableCell>
    
    );
}

export default CustomTableCell;