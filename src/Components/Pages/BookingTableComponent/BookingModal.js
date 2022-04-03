import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import BookingForm from './BookingForm';
import { Grid } from '@material-ui/core';
import { clickedTimeData } from './BookingFromFunctions';
import {FORM_TYPE} from "../../../GlobalHelpers/GlobalFunctions";


const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const BookingModal = ({ openModal, setOpenModal, roomCapacity }) => {
  const classes = useStyles();

  const handleClose = () => {
    setOpenModal(false);
  };
  return (

    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={openModal}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openModal}>
        <div className={classes.paper}>
          <Grid container justifyContent='center' alignItems='center'>{clickedTimeData.date}</Grid>
          <BookingForm
            handleClose={handleClose}
            roomCapacity={roomCapacity}
            formType={FORM_TYPE.BOOKING_FORM}
          />
        </div>
      </Fade>
    </Modal>
  );
}
export default BookingModal;