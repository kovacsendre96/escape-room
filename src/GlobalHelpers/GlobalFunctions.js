import currentWeekNumber from "current-week-number";
import {translate} from "./Lang/Lang";

const JSJoda = require('js-joda');
const LocalDate = JSJoda.LocalDate;

export const readRoomName = (roomName) => {
    return translate[roomName];
};

export const ROOM_NAMES = {
    FOGSAGBAN: 'fogsagban',
    SZOBA_2: 'szoba-2',
    SZOBA_3: 'szoba-3',
};

export const getRoomIdByRoomName = (room_name) => {
    let roomId;
    switch (room_name) {
        case ROOM_NAMES.FOGSAGBAN:
            roomId = '-Mp1W6hGMvV79dDM-K8U';
            break;
        case ROOM_NAMES.SZOBA_2:
            roomId = '-Mp1WBHtwPG0NRkGTONd';
            break;
        case ROOM_NAMES.SZOBA_3:
            roomId = '-Mp1WF1YL7dOnZUkm24h';
            break;
        default:
            roomId = '';
    }
    return (
        roomId
    );
};

export const isReservedTime = (time) => {
    return time;
};

export const INPUT_TYPE = {
    NAME: "name",
    EMAIL: "email",
    PHONE: "phone",
    MESSAGE: "message",
    GROUP_NUMBER: "group_number"
};

export const getCurrentWeekNumber = () => {
    return currentWeekNumber() - 1;
};


export const isDisabledTime = (roomTime, roomDateFormat) => {
    function dateCorrection(number) {
        let newNumber = number;
        if (newNumber < 10) {
            newNumber = `0${newNumber}`
        }
        return newNumber;
    };
    const date = new Date();

    const todayFormat = `${date.getFullYear()}-${dateCorrection(date.getMonth() + 1)}-${dateCorrection(date.getDate())}`;

    function getNumberOfDays(start, end) {
        const start_date = new LocalDate.parse(start);
        const end_date = new LocalDate.parse(end);

        return JSJoda.ChronoUnit.DAYS.between(start_date, end_date);
    };
    if (getNumberOfDays(todayFormat, roomDateFormat) < 0) {
        return true;
    } else return getNumberOfDays(todayFormat, roomDateFormat) === 0 && parseInt(roomTime) <= date.getHours();
};

export function isExist(x) {
    return typeof (x) !== 'undefined';
};

export function isDefined(x) {
    return Boolean(isExist(x) && (x !== null));
};

export const FORM_TYPE = {
    BOOKING_FORM: 'booking_form',
    SEND_MAIL_FORM: 'send_mail_form'
}
