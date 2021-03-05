import * as axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:{
        "API-KEY":"be63cf21-e774-4782-8568-d27769082463"
    }
})
export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10){
        return instance
            .get(`users?page=${currentPage}&count=${pageSize}`,)
            .then(response=> response.data);
    },
    unfollowUserAPI(id){
        return instance.delete(`follow/${id}`).then(response=> response.data)
    },
    followUserAPI(id){
        return instance.post(`follow/${id}`).then(response=> response.data)
    }
}





