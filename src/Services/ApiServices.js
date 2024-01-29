// apiService.js
import axios from "axios";

const BASE_URL = "http://192.168.1.8:8090/v1/api"; // Set your base API URL here

const apiService = {

  checkIfEmailContactExists  : async (email, existingEmails) => {
    // Implement your logic to check if the email exists in the array or make a server call
    // Return true if the email exists, false otherwise
    return existingEmails.includes(email);
  },
  getJobCategories: () => {
    return axios.get(`${BASE_URL}/jobCategory`);  
  },

  getSubjectMaster: () => {
    return axios.get(`${BASE_URL}/subjectMaster`);
  },

  getCountries: () => {
    return axios.get("https://countriesnow.space/api/v0.1/countries");
  },

  getCandidates: () => {
    return axios.post(`${BASE_URL}/candidates`);
  },

  getExamTypes: () => {
    return axios.get(`${BASE_URL}/examTypeMaster`);
  },

  generateOTP: (otpData) => {
    return axios.post(`${BASE_URL}/otp/generateOTP`, otpData);
  },
  verifyContactOTP: (verificationData) => {
    return axios.post(`${BASE_URL}/otp/verifyCandidateContactOTP`, verificationData);
  },
  submitCandidateData: (formData) => {
    return axios.post(`${BASE_URL}/candidates/drop_cv`, formData);
  },
  submitApplyNowData: (formData) => {
    return axios.post(`${BASE_URL}/candidates/apply_now`, formData);
  },
  getAppliedPosts: () => {
    return axios.get(`${BASE_URL}/appliedPost`);
  },
  getDepartments: () => {
    return axios.get(`${BASE_URL}/departmentMaster`);
  },
  
};



export default apiService;
