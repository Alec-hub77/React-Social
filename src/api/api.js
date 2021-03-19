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
            .get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response=> {return response.data});
    },
    unfollowUserAPI(id){
        return instance.delete(`follow/${id}`).then(response => response.data)
    },
    followUserAPI(id){
        return instance.post(`follow/${id}`).then(response => response.data)
    },
    getUserProfileAPI(){
        return instance.get(`auth/me`).then(response => response.data)
    },
    getProfileAPI(userId){
        console.warn('Obsolete method')
        return profileAPI.getProfileAPI(userId)
        
    }
}

export const profileAPI = {
    getProfileAPI(userId){
        return instance.get(`profile/${userId}`).then(response => response.data)
    },
    getStatus(userId){
        return instance.get(`profile/status/${userId}`)
    },
    updateStatus(status){
        return instance.put(`profile/status`, {status: status})
    }
}






