import axiosClient from './axiosClient'

export const getVerificacion = async (userState) => {  
    return axiosClient
        .post(``,{
          ...userState
        })
        .then((res) => {
          return res.status
        })
        .catch((e) => {
          throw "Error 401"
        });
    };


export const getPlatos = async (userState) => {
  return client.get('').then(response => response.data)
  .catch(error => {
    console.log(error)
    throw error;
  });
}