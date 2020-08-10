import axios from 'axios';

export const catFact = () => {
  const url = 'https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1'

  axios.get(url).then(res => (
    res.data.text
  )).catch(() => `Can't get a cat fact. Try again.`);
};

export const catPicture = () => {
  const url = 'https://api.thecatapi.com/v1/images/search'

  axios.get(url).then(res => (
    res.data[0].url
  )).catch(() => `Can't get a cat picture. Try again.`);
};