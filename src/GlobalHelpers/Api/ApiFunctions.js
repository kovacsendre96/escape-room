import api from "./Api";

export const getRoomData = ({id,setResponse,setLoading}) => {
    const fetchedResult = [];
    const response = api.get(`/users/${id}.json`).then((res) => {
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
    