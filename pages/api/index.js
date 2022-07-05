import axios from 'axios';

export const loadAppointments = async () => {
  const response = await axios.get(`http://localhost:7777/appointments`);

  if (response.statusText !== 'OK') {
    throw new Error(response.statusText);
  }

  const appointments = await response.data;
  return appointments;
};

export const cancelAppointment = async (id) => {
  const response = await axios.delete(
    `http://localhost:7777/appointments/${id}`
  );

  if (response.statusText !== 'OK') {
    throw new Error(response.statusText);
  }
};

export const loadDays = async () => {
  const response = await axios.get(`http://localhost:7777/days`);

  if (response.statusText !== 'OK') {
    throw new Error(response.statusText);
  }

  const days = await response.data;
  return days;
};
