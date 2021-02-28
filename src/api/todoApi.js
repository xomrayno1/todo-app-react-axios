import axiosClient from './axiosClient'
 

const taskApi =  {
    getAll: (params) => {
        const url = '/api/v1/tasks';
        return axiosClient.get(url, { params });
    },
    addUser: (params) => {
        const url = '/api/v1/tasks';
        return axiosClient.post(url, params)
    },
    deleteUser : (id) => {
        const url = `/api/v1/tasks/${id}`;
        return axiosClient.delete(url);
    }
}
 
export default taskApi;