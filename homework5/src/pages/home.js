import React from 'react';
import CountrySelector from '../components/country-selector';

const Home = () => {
  return (
    <div>
      <h3>
        So you’re thinking about going to university. With so many programs and
        universities, how do you pick? So that we can show you the most relevant
        information, first please select the country that most closely relates
        to you.
      </h3>
      <h5>Select Country:</h5>
      <CountrySelector />
    </div>
  )
}

export default Home;
