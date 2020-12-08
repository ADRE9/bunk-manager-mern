import axios from 'axios';

const subjectUrl = "http://localhost:5000/api/subject";

export const createTemplate = (header) => axios.post(`${subjectUrl}/createTemplate`,{},{headers:header});