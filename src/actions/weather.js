export const getWeather = (weather) => ({
  type: 'GET_WEATHER',
  weather
});

export const startGetWeather = (weatherData = {}) => {
  return (dispatch, getState) => {
    const {
      forecast = '',
      isLoading = false,
      isError = false,
      bgiTime = '',
      bgiWeather = '',
    } = weatherData;
    const weather = { forecast, isLoading, isError, bgiTime, bgiWeather };
    return dispatch(getWeather(weather));
  };
};
