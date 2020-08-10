import axios from 'axios';

export const geocode = (address) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoianVuZWp1bmdqdW5lanVuZyIsImEiOiJjanhkbThmNW4wMTdyM3VwZWpmeHFvZHI5In0.lQwRKuEcB0Le0KT5MyjGmw&limit=1'

  axios.get(url).then(res => ({
    latitude : res.data.features[0].center[1],
    longitude : res.data.features[0].center[0],
    location : res.data.features[0].place_name
  })).catch(() => `Can't find the location. Try another search`);
};