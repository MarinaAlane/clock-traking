import axios from "axios";
import { IClockInRequestParams, IData } from "./actions.interfaces";

export const clockInRegister = (params: IClockInRequestParams): Promise<any> => {
  return axios.post('http://localhost:5000/api/clock-in', params);
};

export const clockOutRegister = (params: IClockInRequestParams): Promise<any> => {
  return axios.post('http://localhost:5000/api/clock-out', params);
};

export const getStartData = (employeeId: IData): Promise<any> => {
  return axios.get(`http://localhost:5000/api/${employeeId}/start`);
};

export const getFinishData = (employeeId: IData): Promise<any> => {
  return axios.get(`http://localhost:5000/api/${employeeId}/finish`);
};

export const getTotalHours = (employeeId: IData): Promise<any> => {
  return axios.get(`http://localhost:5000/api/${employeeId}/total`);
};
