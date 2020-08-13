import { useEffect, useState }from 'react';
import axios from 'axios';

export const useWeatherApi = () => {
  const [forecast, setForecast] = useState('');
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async ()=>{
      setIsError(false);
      setIsLoading(true);

      try {
        const res = await axios(
          `http://api.weatherstack.com/current?access_key=cd9cdfae55d62f5b2cdc955e063c1a46&query=${search}&units=m`
        );
        setForecast(`${res.data.current.weather_descriptions[0]}. it is currently ${res.data.current.temperature} degress out. it feels like ${res.data.current.feelslike} degress out.`);
      } catch (error){
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  },[search]);
  
  return [{forecast, search, isLoading, isError}, setSearch];
}
