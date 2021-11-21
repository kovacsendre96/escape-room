import api from "./Api";

export const getRoomData = ({id,setResponse,setLoading,roomId,weekNumber}) => {
    const fetchedResult = [];
    const response = api.get(`/users/${id}/rooms/${roomId}/weeks/${weekNumber}.json`).then((res) => {
        for (let key in res.data) {
            fetchedResult.unshift({
                ...res.data[key],
                id: key
            });
        }
        setResponse(res.data);
        setLoading(false);
    })
    return response;
}
    