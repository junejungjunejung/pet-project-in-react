import axios from 'axios';

export const forecast = (latitude, longitude) => {
  const url = 'http://api.weatherstack.com/current?access_key=cd9cdfae55d62f5b2cdc955e063c1a46&query='+ latitude +','+ longitude +'&units=m'

  axios.get(url).then(res => {
    return `${res.data.current.weather_descriptions[0]}. it is currently ${res.data.current.temperature} degress out. it feels like ${res.data.current.feelslike} degress out.`
  }).catch(() => `Can't connect to weather service. Try another search`);
};