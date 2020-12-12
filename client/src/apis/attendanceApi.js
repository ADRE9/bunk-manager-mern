import axios from 'axios';

const attendanceUrl = "http://localhost:5000/api/subject/attendance";

export const createAttendance = (header, data) => axios.post(`${attendanceUrl}/:id`,{data},{headers:header});

export const editAttendance = (header, data) => axios.patch(`${attendanceUrl}/:id`, { data }, { headers: header });

export const getAttendance = (header) => axios.get(`${attendanceUrl}/:id`, { headers: header });