import axios from 'axios';

const subjectUrl = "http://localhost:5000/api/subject";

export const createTemplate = (header) => axios.post(`${subjectUrl}/createTemplate`, {}, { headers: header });

export const getSubjectBySemester = (semester, header) => axios.get(`${subjectUrl}/${semester}`, { headers: header });

export const createSubject = (header, data) => axios.post(`${subjectUrl}/new`, { data }, { headers: header });

export const deleteSubject = (header) => axios.delete(`${subjectUrl}/:id`, { headers: header });

export const updateSubject = (header, data) => axios.patch(`${subjectUrl}/:id`, { data },{headers:header});
