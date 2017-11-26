import axios from 'axios';

export const GET_ALL_PROCESSES = 'GET_ALL_PROCESSES';

export const getAllProcesses = () => {
  const request = axios.get('/api/processes');
  return {
    type: GET_ALL_PROCESSES,
    payload: request
  };
};

