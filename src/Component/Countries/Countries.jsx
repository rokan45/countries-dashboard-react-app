import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({ countriesPromise }) => {
    const countriesArray = use(countriesPromise);
    const countries = countriesArray.countries


    // console.log(countries);
    const [visitedCountries, setVisitCount] = useState([]);

    const handleVisitCount = (country) => {
        console.log("Handle working!", country);
        const newVisitedCountries = [...visitedCountries, country]
        setVisitCount(newVisitedCountries);
    }


    return (
        <div>
            <h2 style={{ fontSize: 'larger', fontWeight: 'bold', marginTop: '20px' }}>Nations Of The World: {countries.length} </h2>
            <h2 style={{ fontSize: 'larger', fontWeight: 'bold', marginTop: '20px' }}>Visited Countries: {visitedCountries.length} </h2>

            {
                visitedCountries.map(country => <div className='visitedCountries'>
                    <button>{country.name.common}</button>
                </div>)
            }

            <div className='countries'>
                {
                    countries.map(country =>
                        <Country
                            country={country}
                            key={country.ccn3.ccn3}
                            handleVisitCount={handleVisitCount}

                        >
                        </Country>)
                }
            </div>
        </div>
    );
};

export default Countries;