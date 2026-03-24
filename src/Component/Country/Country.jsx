
import { useState } from 'react';
import './Country.css'

const Country = ({ country }) => {
    // console.log(country.flags.flags.png);
    const imgObj = {
        "width": "300px",
        "height": "300px",
    }

    const [visited, setVisited] = useState(false)

    const handleVisitBtn = () => {
        setVisited(visited ? false : true)
    }
    return (
        <div className={`country ${visited?'vistied':'country'}`} >
            <img src={country.flags.flags.png} alt={country.flags.flags.alt} width={imgObj.width} height={imgObj.height} />
            <h2 style={{ margin: "5px" }}>Name: {country.name.common} </h2>
            <p style={{ margin: "5px" }}>Capital : {country.capital.capital}</p>
            <button onClick={handleVisitBtn} className='btn btn-primary'>
                {visited ? "Visited" : "Not Visited"}
            </button>
        </div>
    );
};

export default Country;