import axios from "axios";

const REST_API_BASE_URL = "http://localhost:8080/api/licence";

export const licenceList = () => axios.get(REST_API_BASE_URL);

export const createLicence = (licence) => axios.post(REST_API_BASE_URL+'/add', licence);

export const getLicence = (licenceId) =>  axios.get(REST_API_BASE_URL+'/'+licenceId);

export const updateLicence = (licenceId, licence) => axios.put(REST_API_BASE_URL+'/'+licenceId, licence);

export const deleteLicence =  (licenceId) =>  axios.delete(REST_API_BASE_URL+'/'+licenceId);