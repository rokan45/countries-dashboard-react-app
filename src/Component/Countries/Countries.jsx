import React, { use } from 'react';

const Countries = ({countriesPromise}) => {
    const countriesArray=use(countriesPromise);
    const countriesData=countriesArray.countries
    console.log(countriesData);
    return (
        <div>
            <h2>Countries: {countriesData.length} </h2>
        </div>
    );
};

export default Countries;