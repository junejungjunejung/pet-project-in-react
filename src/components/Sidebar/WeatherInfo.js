import React from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import '../../styles/styles.css';
import axios from 'axios';

import { startGetWeather } from '../../actions/weather';

// const styles  = (theme) => ({
//   root: {
//     width: '100%',
//     maxWidth: 300,
//   },
//   form: {
//     '& > *': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   }
// });

class WeatherInfo extends React.Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  state = {
    location: '',
  };

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

        if(weather.includes('sun')){
          bgiWeather='sunny'
        }else if(weather.includes('cloud')){
          bgiWeather='cloudy'
        }else if(weather.includes('rain')){
          bgiWeather='rainy'
        }else if(weather.includes('clear')){
          bgiWeather='clear'
        }

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
    return (
      <div className = 'sidebar_weather_info'>
        <Typography variant="h5" component="h2">Weather Information</Typography>
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        >
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
                
          {this.props.weather.isLoading && <p>Loading...</p>}
          {(this.state.location && this.props.weather.isError) &&<p> Try another search </p>}

          <Typography variant="h6">See weather information</Typography>
          {!this.state.location || this.props.weather.isError ? 
            <Typography variant="body1" component="p" gutterBottom>Back ground image of the right side will change based on the location you input in the form above.</Typography>: console.log(this.props.weather.weather)//??????why
            }
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  weather: state.weather
});

const mapDispatchToProps = (dispatch) => ({
  startGetWeather: (value) => dispatch(startGetWeather(value))
});

export default connect(mapStateToProps, mapDispatchToProps)(WeatherInfo);
