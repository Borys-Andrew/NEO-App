import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = 'https://api.nasa.gov/neo/'

export const getNeoData = async(startDate, endDate) => {
  const URL = `${BASE_URL}rest/v1/feed?start_date=${startDate}&end_date=${endDate}&api_key=${API_KEY}`
  try {
    const response = await axios.get(URL);

    return response.data.near_earth_objects
  } catch (error) {
    console.log(error);
  }
}
