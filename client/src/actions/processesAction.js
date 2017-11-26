import axios from 'axios';

export const GET_ALL_PROCESSES = 'GET_ALL_PROCESSES';
export const GET_CURRENT_PROCESS = 'GET_CURRENT_PROCESS';

export const getAllProcesses = () => {
  const request = axios.get('/api/processes');
  return {
    type: GET_ALL_PROCESSES,
    payload: request
  };
};

export const getCurrentProcess = (process) => {
  return {
    type: GET_CURRENT_PROCESS,
    payload: process
  }
};

