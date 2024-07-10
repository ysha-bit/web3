import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/traffic";

export const traffficList = () => axios.get(REST_API_BASE_URL);

export const createTraffic = (traffic) => axios.post(REST_API_BASE_URL+'/add', traffic);

export const getTrafficById = (trafficId) =>  axios.get(REST_API_BASE_URL+'/'+trafficId);

export const updateTraffic = (trafficId, traffic) => axios.put(REST_API_BASE_URL+'/'+trafficId, traffic);

export const deleteTraffic =  (trafficId) =>  axios.delete(REST_API_BASE_URL+'/'+trafficId);