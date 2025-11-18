import axios from 'axios';

export const getPlacesData = async (type, sw, ne) => {
  try {
    const response = await axios.get(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`,
      {
        params: {
          bl_latitude: sw?.lat,
          tr_latitude: ne?.lat,
          bl_longitude: sw?.lng,
          tr_longitude: ne?.lng,
        },
        headers: {
          'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
          'x-rapidapi-host': 'travel-advisor.p.rapidapi.com'
        },
      }
    );

    return response?.data?.data || []; // safely return empty array if undefined
  } catch (error) {
    console.error("🚨 API Error:", error?.response?.data || error.message);
    return []; // return empty to prevent app crash
  }
};
