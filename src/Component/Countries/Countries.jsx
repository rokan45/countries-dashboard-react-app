import React, { use } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    const countriesArray = use(countriesPromise);
    const countries = countriesArray.countries
    // console.log(countries);
    return (
        <div>
            <h2 style={{fontSize:'larger',fontWeight:'bold',marginTop:'20px'}}>Nations Of The World: {countries.length} </h2>
            <div className='countries'>
                {
                    countries.map(country =>
                        <Country
                            country={country}
                            key={country.ccn3.ccn3}>
                        </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;