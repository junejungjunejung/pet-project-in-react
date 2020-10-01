import React from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import '../../styles/styles.css';
import axios from 'axios';

import { startGetWeather } from '../../actions/weather';
import weather from '../../image/cloud-sun-solid.svg';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center'
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    margin: '.75rem'
  },
  icon: {
    height: '2rem',
    paddingRight: '.25rem'
  },
  form: {
    margin: '.5rem'
  },
  input: {
    width: '250px',
    background: 'rgba(255,255,255,0.5)',
    borderRadius: 5,
  },
  button: {
    width: '250px',
    height: '40px',
    marginBottom: '.5rem'
  },
  forecast: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'flex-start',
    textAlign: 'left',
    marginLeft: '1rem',
    marginRight: '.5rem'
  },
  instruction: {
    textAlign: 'left',
    paddingLeft: '1.5rem'
  }
};

class WeatherInfo extends React.Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  state = {
    location: '',
    locationString: '',
    visible: false,
  };

  //sending request to weather stack api
  onSubmit = (e) => {
    e.preventDefault();
    let forecast, isLoading, isError, bgiTime, bgiWeather, weather, isDay;
    const search = new FormData(e.target).get('location');
   
    if(search.length<1){ return isError = true };

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
        if(weather.includes('cloud')){
          bgiWeather='cloudy'
        }else if(weather.includes('rain')){
          bgiWeather='rainy'
        }else if(weather.includes('clear')){
          bgiWeather='clear'
        }else if(weather.includes('smoke')){
          bgiWeather='smoky weather'
        }else if(weather.includes('thunder')){
          bgiWeather='thunder'
        }else if(weather.includes('overcast')){
          bgiWeather='overcast'
        }else{
          bgiWeather='sunny'
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
    this.setState({locationString : this.state.location});

  };

  render(){
    const weatherInfo = this.props.weather
    const {classes} = this.props;
    return (
      <div className = "sidebar-weather-info">
        <div className={classes.header} onClick={this.toggle}>
          <img src={weather} className={classes.icon} alt="weather icon"/>
          <Typography variant="h6" component="h2">Weather Information</Typography>
        </div>

        <div className={`sidebar-mobile-hide ${classes.sidebar}`}>
          <form className={classes.form} onSubmit={this.onSubmit}>
            <TextField 
              name = "location"
              placeholder="Search a location" 
              variant="outlined" 
              value={this.state.location}
              onChange={e => this.setState({location : e.target.value})}
              className={classes.input}
            />
            <Button className={classes.button} type="submit" variant="outlined" color="primary">Click Here !</Button>
          </form>
                
          {weatherInfo.isLoading && <p>Loading...</p>}
          {(this.state.location && weatherInfo.isError) &&<p> Try another search </p>}

          <Typography variant="h6">See weather information</Typography>
          
          {this.state.locationString !== this.state.location || weatherInfo.isError || (Object.keys(weatherInfo).length === 0)? 
            <Typography className={classes.instruction} variant="body1" component="p" gutterBottom>
            Back ground image of the right side will change based on the location you input in the form above.
            </Typography>: 
            <div className={classes.forecast}>
              <Typography variant="body1" component="p" >{this.state.locationString}</Typography>
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
