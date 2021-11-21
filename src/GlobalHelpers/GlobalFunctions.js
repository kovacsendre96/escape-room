import { translate } from "./Lang/Lang";

export const readRoomName = (roomName) => {

return translate[roomName];

}; 

export const seRoomIdByRoomName = (room_name) => {
    let roomId;
    switch(room_name){
        case 'fogsagban':roomId='-Mp1W6hGMvV79dDM-K8U';
        break;
        case 'szoba-2':roomId='-Mp1WBHtwPG0NRkGTONd';
        break;
        case 'szoba-3':roomId='-Mp1WF1YL7dOnZUkm24h';
        break;
    }
    return(
        roomId
    );
}