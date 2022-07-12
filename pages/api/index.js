import axios from 'axios';

axios.defaults.baseURL = 'https://appointments-server-ayygello.herokuapp.com';

export const loadAppointments = async () => {
  const response = await axios.get(`/appointments`);

  if (response.statusText !== 'OK') {
    throw new Error(response.statusText);
  }

  const appointments = await response.data;
  return appointments;
};

export const cancelAppointment = async (id) => {
  const response = await axios.delete(`/appointments/${id}`);

  if (response.statusText !== 'OK') {
    throw new Error(response.statusText);
  }
};

export const loadDays = async () => {
  const response = await axios.get(`/days`);

  if (response.statusText !== 'OK') {
    throw new Error(response.statusText);
  }

  const days = await response.data;
  return days;
};
