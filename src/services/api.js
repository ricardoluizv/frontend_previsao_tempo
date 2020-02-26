import axios from 'axios';

const apiWeather = axios.create({
  baseURL: 'http://localhost:51093/api/previsao_tempo',
});

export default apiWeather;
