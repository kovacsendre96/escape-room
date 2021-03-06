import {Button, FormHelperText, makeStyles, TextField} from "@material-ui/core";
import React, {useContext, useEffect, useState} from "react";
import {translate} from "../../../GlobalHelpers/Lang/Lang";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import {BookingContext} from "./BookingTableComponent";
import {bookRoom, sendReservationsData} from "../../../GlobalHelpers/Api/ApiFunctions";
import {clickedTimeData} from "./BookingFromFunctions";
import {FORM_TYPE, INPUT_TYPE} from "../../../GlobalHelpers/GlobalFunctions";

const useStyles = makeStyles(theme => ({
    form: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent:'space-between',
        width: '100%',
        background: 'white',
        height: '100%'

    },
    input: {
        margin: 5,

    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectLabel: {
        paddingLeft: 10
    },
    message: {
        '& .MuiInputBase-formControl': {
            height: 150,
            display: 'flex',
            alignItems: 'flex-start',
        }
    },
    button: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

const BookingForm = ({handleClose, roomCapacity, formType}) => {
    const classes = useStyles();
    const ctx = useContext(BookingContext);
    const [groupNumber, setGroupNumber] = useState('');
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        phone: '',
        group_number: ''
    });
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [phone, setPhone] = useState(null);
    const [message, setMessage] = useState(null);
    const [formIsInvalid, setFormIsInvalid] = useState(true);

    const handleBlur = (e, changeType, setFunction) => {
        const targetValue = e.target.value;
        setFunction(targetValue);

        if (changeType === INPUT_TYPE.NAME && targetValue === "") {
            setErrors({
                ...errors,
                [changeType]: translate.nameIsRequired
            })
        } else {
            setErrors({
                ...errors,
                [changeType]: ''
            })
        }
        if (changeType === INPUT_TYPE.EMAIL) {
            const mailformat = /^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/;
            if (targetValue.match(mailformat)) {

                setErrors({
                    ...errors,
                    [changeType]: ''
                })
            } else {

                setErrors({
                    ...errors,
                    [changeType]: translate.invalidEmail
                })
            }
        }
        if (changeType === INPUT_TYPE.PHONE) {
            const phoneFormat = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im
            if (targetValue.match(phoneFormat)) {
                setErrors({
                    ...errors,
                    [changeType]: ''
                })
            } else {
                setErrors({
                    ...errors,
                    [changeType]: translate.invalidPhone
                })
            }
        }

        if (changeType === INPUT_TYPE.GROUP_NUMBER) {
            if (targetValue === '') {
                setErrors({
                    ...errors,
                    [changeType]: translate.numberOfGroupIsRequired
                })
            } else {
                setErrors({
                    ...errors,
                    [changeType]: ''
                })
            }
        }
    }

    const handleSelectChange = (event) => {
        setGroupNumber(event.target.value);
    };

    const generateMenuItem = () => {
        const menuItem = [];
        for (let i = 1; i < roomCapacity + 1; i++) {
            menuItem.push(
                <MenuItem key={i} value={i}>{i}</MenuItem>
            );
        }
        return menuItem;
    };

    useEffect(() => {
        if (name !== "" && email !== "" && phone !== "" && groupNumber !== "") {
            setFormIsInvalid(false);
        }

        if (errors.name !== "" || errors.email !== "" || errors.phone !== "" || errors.group_number !== "") {
            setFormIsInvalid(true);
        }
    }, [name, email, phone, groupNumber]);


    const submitBook = (e) => {
        if (!formIsInvalid) {
            e.preventDefault();
            const sendData = {
                id: ctx.id,
                roomId: ctx.roomId,
                weekNumber: ctx.weekNumber,
                dayNumber: clickedTimeData.clickedDay,
                timeNumber: clickedTimeData.clickedTime,
                time: clickedTimeData.time,
                reserved: true,
                setIsSentBook: ctx.setIsSentBook,
                isSentBook: ctx.isSentBook
            }
            bookRoom(sendData);
            sendReservationsData({
                name: name,
                email: email,
                phone: phone,
                message: message,
                groupNumber: groupNumber,
                date: clickedTimeData.date,
                time: clickedTimeData.time,
                room: clickedTimeData.roomId,
                id: ctx.id
            })
            handleClose();
        }
    };

    return (
        <form autoComplete="off" className={classes.form} onSubmit={submitBook}>
            <TextField
                id="name"
                key="name"
                label={translate.name}
                type="text"
                variant="outlined"
                className={classes.input}
                helperText={errors?.name}
                required
                inputProps={
                    {maxLength: 255}
                }
                error={Boolean(errors?.name)}
                onBlur={(e) => handleBlur(e, INPUT_TYPE.NAME, setName,)}
                onChange={(e) => handleBlur(e, INPUT_TYPE.NAME, setName,)}
            />
            <TextField
                id="email"
                key="email"
                label={translate.email}
                type="email"
                variant="outlined"
                className={classes.input}
                autoComplete="new-email"
                required
                error={errors?.email !== ''}
                helperText={errors?.email}
                onBlur={(e) => handleBlur(e, INPUT_TYPE.EMAIL, setEmail,)}
                onChange={(e) => handleBlur(e, INPUT_TYPE.EMAIL, setName,)}

            />
            <TextField
                id="phone"
                key="phone"
                label={translate.phone}
                type="number"
                variant="outlined"
                className={classes.input}
                autoComplete="new-phone"
                required
                error={errors?.phone !== ''}
                helperText={errors?.phone}
                onBlur={(e) => handleBlur(e, INPUT_TYPE.PHONE, setPhone,)}
                onChange={(e) => handleBlur(e, INPUT_TYPE.PHONE, setName,)}

            />
            {formType === FORM_TYPE.BOOKING_FORM &&
                <FormControl required variant="outlined" className={classes.formControl} key="form-control"
                             error={errors?.group_number !== ''}>
                    <InputLabel id="group-number" key="group-number">{translate.groupNumber}</InputLabel>
                    <Select
                        labelId="group-number"
                        label={translate.groupNumber}
                        id="group-number-select"
                        key="group-number-select"
                        value={groupNumber}
                        onChange={handleSelectChange}
                        onBlur={(e) => handleBlur(e, INPUT_TYPE.GROUP_NUMBER, setGroupNumber,)}

                    >
                        {generateMenuItem()}

                    </Select>
                    <FormHelperText>{errors?.group_number} </FormHelperText>
                </FormControl>
            }


            <FormControl fullWidth variant="outlined" className={classes.input}>
                <TextField
                    id="message"
                    key="message"
                    label={translate.message}
                    type="text"
                    variant="outlined"
                    className={`${classes.input} ${classes.message}`}
                    autoComplete="new-message"
                    onChange={(e) => setMessage(e.target.value)}
                    multiline
                    rows={5}
                />
            </FormControl>

            <Button disabled={formIsInvalid} key={"button"} type={"submit"} variant="contained" color="primary"
                    className={`${classes.button} ${classes.input}`}>
                {translate.booking}
            </Button>
        </form>
    );
};

export default BookingForm;
