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
import CustomTableCell from './CustomTableCell';

const useStyles = makeStyles({
    table: {
        maxWidth: 700,
    }
});
const BookingTable = ({ response,roomId,roomCapacity }) => {
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



    function createData(date, dayName, dayTimes) {
        return { date, dayName, dayTimes };
    }

    const rows = response.days.map(data =>
        createData(
            data.date,
            data.day_name,
            data.times.map(time => time)
        )
    )

    const createRow = (index) => {
        return (
            <TableRow key={index} className={classes.tableRow}>
                {
                    rows.map((day,rowIndex) => (
                        <CustomTableCell
                            response={day}
                            index={index}
                            setOpenModal={setOpenModal}
                            rowIndex={rowIndex}
                            key={rowIndex}
                            roomId={roomId}
                        />
                    ))}
            </TableRow>
        );
    }

    const drawRows = () => {
        for (let i = 0; i < 6; i++) {
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
                    response={response}
                    roomCapacity={roomCapacity}
                />
                <TableHead>
                    <TableRow>
                        {columns.map((column, index) => (
                            <TableCell key={`table-head-${index}`}>
                                <Grid key={`table-head-cell${index}`}>{column}</Grid>
                                <Typography key={`table-head-date${index}`} variant={"caption"}>{response.days[index].date}</Typography>
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rowsArray.map(row => row)}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default BookingTable;