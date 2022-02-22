import currentWeekNumber from "current-week-number";
import { translate } from "./Lang/Lang";
const JSJoda = require('js-joda');
const LocalDate = JSJoda.LocalDate;

export const readRoomName = (roomName) => {
    return translate[roomName];
};

export const setRoomIdByRoomName = (room_name) => {
    let roomId;
    switch (room_name) {
        case 'fogsagban': roomId = '-Mp1W6hGMvV79dDM-K8U';
            break;
        case 'szoba-2': roomId = '-Mp1WBHtwPG0NRkGTONd';
            break;
        case 'szoba-3': roomId = '-Mp1WF1YL7dOnZUkm24h';
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
    }
    else if (getNumberOfDays(todayFormat, roomDateFormat) === 0 && parseInt(roomTime) <= date.getHours()) {
        return true;
    }
    else {
        return false;
    }
};
