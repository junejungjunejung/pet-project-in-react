import { useEffect, useState }from 'react';
import axios from 'axios';
//change this to store (action, reducer)
//so i can bring state and use it at app router backgroundimage

export const useWeatherApi = () => {
  const [forecast, setForecast] = useState('');
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [bgiWeather,setBgiWeather] = useState('');
  const [bgiTime,setBgiTime] = useState('');

  useEffect(() => {
    const fetchData = async ()=>{
      setIsError(false);
      setIsLoading(true);

      try {
        const res = await axios(
          `http://api.weatherstack.com/current?access_key=cd9cdfae55d62f5b2cdc955e063c1a46&query=${search}&units=m`
        );
        setForecast(`${res.data.current.weather_descriptions[0]}. it is currently ${res.data.current.temperature} degress out. it feels like ${res.data.current.feelslike} degress out.`);
          
        let weather = res.data.current.weather_descriptions[0].toLowerCase();
        
        if(weather.includes('sun')){
          setBgiWeather('sunny')
        }else if(weather.includes('cloud')){
          setBgiWeather('cloudy')
        }else if(weather.includes('rain')){
          setBgiWeather('rainy')
        }else if(weather.includes('clear')){
          setBgiWeather('clear')
        }
        
        if(res.data.current.is_day==='no'){
          setBgiTime('night')
        } else {
          setBgiTime('day')
        }
      } catch (error){
        setIsError(true);
      }

      setIsLoading(false);
    };

    fetchData();
  },[search]);
  
  return [{forecast, search, isLoading, isError, bgiTime, bgiWeather}, setSearch];
}
