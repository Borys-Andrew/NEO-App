import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY
const BASE_URL = 'https://api.nasa.gov/neo/rest/v1/feed?'

export const getNeoData = async(startDate, endDate = startDate) => {
  const URL = `${BASE_URL}start_date=${startDate}&end_date=${endDate}&api_key=${API_KEY}`
  try {
    const response = await axios.get(URL);

    let result = []

    for (let key in response.data.near_earth_objects) {
      result.push(
        ...response.data.near_earth_objects[key].map((asteroid) => ({
          date: key,
          id: asteroid.id,
          max_diameter_km: +asteroid.estimated_diameter.kilometers.estimated_diameter_max,
          is_potentially_hazardous_asteroid: asteroid.is_potentially_hazardous_asteroid,
          miss_distance_km: +asteroid.close_approach_data[0].miss_distance.kilometers,
          relative_velocity_kph: +asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour
        }))
      )
    }

    console.log('result--->', result);
    return result;
  } catch (error) {
    console.log(error);
  }
}

