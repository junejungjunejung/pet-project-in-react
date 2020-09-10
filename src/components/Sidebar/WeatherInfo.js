import React from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import '../../styles/styles.css';
import axios from 'axios';

import { startGetWeather } from '../../actions/weather';
import weather from '../../image/cloud-sun-solid.svg';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
  },
  header: {
    display: 'flex',
  },
  icon: {
    height: '2rem'
  },
};

class WeatherInfo extends React.Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  state = {
    location: '',
  };
  //sending request to weather stack api
  onSubmit = (e) => {
    e.preventDefault();
    let forecast, isLoading, isError, bgiTime, bgiWeather, weather, isDay;
    const search = new FormData(e.target).get('location');

    isError=false;
    isLoading=true;

    try {
      axios.get(
        `http://api.weatherstack.com/current?access_key=cd9cdfae55d62f5b2cdc955e063c1a46&query=${search}&units=m`
      ).then(res => {
        forecast = `${res.data.current.weather_descriptions[0]}. it is currently ${res.data.current.temperature} degress out. it feels like ${res.data.current.feelslike} degress out.`;
        weather = res.data.current.weather_descriptions[0].toLowerCase();
        isDay = res.data.current.is_day;

        //simplifying weather description to use it as Unsplash query
        if(weather.includes('sun')){
          bgiWeather='sunny'
        }else if(weather.includes('cloud')){
          bgiWeather='cloudy'
        }else if(weather.includes('rain')){
          bgiWeather='rainy'
        }else if(weather.includes('clear')){
          bgiWeather='clear'
        }
        //getting localized time from weatherstack to use is as Unsplash query
        if(isDay === 'no'){
          bgiTime='night'
        } else {
          bgiTime='day'
        }

        this.props.startGetWeather({forecast, isLoading, isError, bgiTime, bgiWeather})
      });
    } catch (error){
      isError=true;
      console.log(error);
    }
  
    isLoading=false;
  };

  render(){
    const weatherInfo = this.props.weather
    const {classes} = this.props;
    return (
      <div className = "sidebar-weather-info">
        <div className={classes.header}>
          <img src={weather} className={classes.icon} alt="weather icon"/>
          <Typography variant="h5" component="h2">Weather Information</Typography>
        </div>

        <div className={`sidebar-layout-toggle ${classes.sidebar}`}>
          <form onSubmit={this.onSubmit}>
            <TextField 
              name = "location"
              placeholder="Search a location" 
              variant="outlined" 
              value={this.state.location}
              onChange={e => this.setState({location : e.target.value})}
            />
            <Button type="submit" variant="outlined" color="primary">Click Here !</Button>
          </form>
                
          {weatherInfo.isLoading && <p>Loading...</p>}
          {(this.state.location && weatherInfo.isError) &&<p> Try another search </p>}

          <Typography variant="h6">See weather information</Typography>
          
          {!this.state.location || weatherInfo.isError || (Object.keys(weatherInfo).length === 0)? 
            <Typography variant="body1" component="p" gutterBottom>
            Back ground image of the right side will change based on the location you input in the form above.
            </Typography>: 
            <div>
              <Typography variant="body1" component="p" >{this.state.location}</Typography>
              <Typography variant="body1" component="p" gutterBottom>{weatherInfo.forecast}</Typography>
            </div>}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  weather: {...state.weather.weather}
});

const mapDispatchToProps = (dispatch) => ({
  startGetWeather: (value) => dispatch(startGetWeather(value))
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(WeatherInfo));
