import axios from 'axios';

const attendanceUrl = "https://salty-brook-29410.herokuapp.com/api/subject/attendance";

export const createAttendance = (header, data,id) => axios.post(`${attendanceUrl}/${id}`,{data},{headers:header});

export const editAttendance = (header, data,id) => axios.patch(`${attendanceUrl}/${id}`, { data }, { headers: header });

export const getAttendance = (header,id) => axios.get(`${attendanceUrl}/${id}`, { headers: header });