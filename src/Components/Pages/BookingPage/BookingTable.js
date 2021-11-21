import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { translate } from '../../../GlobalHelpers/Lang/Lang';
import { Grid, Typography } from '@material-ui/core';
import BookingModal from './BookingModal';

const useStyles = makeStyles({
    table: {
        maxWidth:700,
    },
    tableCell:{
        border: '2px solid white',
        padding: 20
    },
    tableRow:{

    },
    reserved:{
        cursor:"not-allowed",
        background:'red'
    },
    free:{
        cursor:'pointer',
        background:'#90EE90'
    },
});
const BookingTable = ({ response,roomId,weekNumber }) => {
    const [openModal, setOpenModal] = useState(false);
    const classes = useStyles();
    const rowsArray = [];
    const columns = [
        translate.monday,
        translate.tuesday,
        translate.wednesday,
        translate.thursday,
        translate.friday,
        translate.saturday,
        translate.sunday
    ];

    const handleClick = () => {
        setOpenModal(true);
    };

    const createRow = (index) => {
        return (
          <TableRow key={index} className={classes.tableRow}>
        {
         response.days.map(day => (
            
            <TableCell onClick={handleClick} key={`table-body-cell-${day.date}`} className={`${classes.tableCell} ${day.times[index].reserved? classes.reserved:classes.free}`} >{day.times[index].time}</TableCell>
            ))}
      </TableRow>
    )
  }

  const drawRows = () =>{
    
    for(let i =0;i<6;i++){
      rowsArray.push(createRow(i))
    }

  }
  drawRows();
    useEffect(() => {
    }, [response])

    return (
        <TableContainer>
            <Table className={classes.table} aria-label="simple table">
            <BookingModal
            openModal={openModal}
            setOpenModal={setOpenModal}
            />
                <TableHead>
                    <TableRow>
                        {columns.map((column,index) => (
                            <TableCell key={`table-head-${index}`}>
                                <Grid key={`table-head-cell${index}`}>{column}</Grid>
                                <Typography key={`table-head-date${index}`} variant={"caption"}>{response.days[index].date}</Typography>    
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                {rowsArray.map( row => row)}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default BookingTable