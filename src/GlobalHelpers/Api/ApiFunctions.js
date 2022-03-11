import api from "./Api";

export const getRoomData = ({ id, setResponse, setLoading, roomId, weekNumber }) => {
    const fetchedResult = [];
    const response = api.get(`/users/${id}/rooms/${roomId}/weeks/${weekNumber}.json`).then((res) => {
        for (let key in res.data) {
            fetchedResult.unshift({
                ...res.data[key],
                id: key
            });
        };
        setResponse(res.data);
        setLoading(false);
    });
    return response;
};

export const getRoomCapacity = ({id, setState, roomId}) => {
    const response = api.get(`/users/${id}/rooms/${roomId}/capacity.json`).then((res) => {
        setState(res.data);
    });
    return response;
};

// export const getRoomImg = (setState, roomId) => {
//     const response = api.get(`/users/-MoUTkg1gdkGpPFivBxy/rooms/${roomId}/room_img.json`).then((res) => {
//         setState(res.data);
//     });
//     return response;
// };
//
// export const getRoomName = (setState, roomId) => {
//     const response = api.get(`/users/-MoUTkg1gdkGpPFivBxy/rooms/${roomId}/room_name.json`).then((res) => {
//         setState(res.data);
//     });
//     return response;
// };

export const bookRoom = ({ id, roomId, weekNumber, dayNumber, timeNumber, time, reserved, setIsSentBook, isSentBook }) => {
    api.put(`/users/${id}/rooms/${roomId}/weeks/${weekNumber}/days/${dayNumber}/times/${timeNumber}.json`, { time: time, reserved: reserved }).then((res) => {
        if (res.status === 200) {
            setIsSentBook(!isSentBook);
        }
    }
    );
};

export const sendReservationsData = ({ name, phone, email, message, groupNumber, date, time, room, id }) => {
    api.post(`/users/${id}/reservations/.json`, { "Név": name, "Telefonszám": phone, "Email": email, "Megjegyzés": message, "Létszám:": groupNumber, "Dátum": date, "Óra": time, "Szoba": room }).then((res) => { }
    );
};
