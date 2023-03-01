import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': "7baf989ce5mshc6ceb9f8537ab39p1ca9b8jsn477439d6f53e" ,
    },
  });
    
  return data;
}