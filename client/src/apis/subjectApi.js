import axios from 'axios';

const subjectUrl = "http://localhost:5000/api/subject";
const semesterUrl = "http://localhost:5000/api/semester";

export const createTemplate = (header,semester) => axios.post(`${subjectUrl}/createTemplate`, {semester:semester}, { headers: header });

export const getSubjectBySemester = (semester, header) => axios.get(`${subjectUrl}/${semester}`, { headers: header });

export const createSubject = (header, data) => axios.post(`${subjectUrl}/new`, data, { headers: header });

export const deleteSubject = (header,id) => axios.delete(`${subjectUrl}/${id}`, { headers: header });

export const updateSubject = (header, data, id) => axios.patch(`${subjectUrl}/${id}`, data, { headers: header });

//semesters
export const deactivateSubject = (header, id) => axios.patch(`${subjectUrl}/deactivate/${id}`, {}, { headers: header });

export const deactivateAllSubject = (header, semester) => axios.patch(`${semesterUrl}/deactivate`, { semester }, { headers: header });

export const getAllSemesters = (header) => axios.get(`${semesterUrl}/all`, { headers: header });
