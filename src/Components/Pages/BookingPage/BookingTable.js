import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { translate } from '../../../GlobalHelpers/Lang/Lang';

const useStyles = makeStyles({
    table: {
        maxWidth:650
    },
});
const BookingTable = ({ response,roomId,weekNumber }) => {

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

    const createRow = (index) => {
        return (
          <TableRow>
        {
         response.rooms[roomId].weeks[weekNumber].days.map(day => (
            
            <TableCell style={{background:day.times[index].reserved?'red':'green'}}>{day.times[index].time}</TableCell>
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
                <TableHead>
                    <TableRow>
                        {columns.map(column => (
                            <TableCell>{column}</TableCell>
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