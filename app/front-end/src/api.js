import axios from 'axios';

const API_URL = 'http://localhost:3001';

export const getEvents = () => axios.get(`${API_URL}/events`);
