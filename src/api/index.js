
import axios from 'axios';
//  const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';
// const options = {

//     params: {
//         bl_latitude: '11.847676',
//         tr_latitude: '12.838442',
//         bl_longitude: '109.095887',
//         tr_longitude: '109.149359',

//     },
//     headers: {
//         'x-rapidapi-key': 'f287950ef6msha3b119c80743067p1d1622jsnab26b4b69b44',
//         'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
//     }
// };



export const getPlacesData = async (type ,sw, ne) => {
    try {
        const { data: { data } } = await axios.get(`https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`, {
            params: {
                bl_latitude: sw.lat,
                tr_latitude: ne.lat,
                bl_longitude: sw.lng,
                tr_longitude: ne.lng,
            },
            headers: {
                'x-rapidapi-key': 'f287950ef6msha3b119c80743067p1d1622jsnab26b4b69b44',
                'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
            }
        });
        return data;
    }
    catch (error) {
        console.log(error);
    }
}
export const getWeatherData = async (lat, lng) => {
  try {
    const { data } = await axios.get('https://open-weather13.p.rapidapi.com/latlon', {
      params: {
        lat: lat,            // Latitude
        lon: lng,            // Longitude
        lang: 'EN'     // Optional: Celsius
      },
      headers: {
        'x-rapidapi-key': 'f287950ef6msha3b119c80743067p1d1622jsnab26b4b69b44',
        'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
      }
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}
