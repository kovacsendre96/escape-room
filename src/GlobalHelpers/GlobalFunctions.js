import { translate } from "./Lang/Lang";

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
    const today = new Date();
    const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
    const pastDaysOfYear = (today.valueOf() - firstDayOfYear.valueOf()) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7) -2;
};
