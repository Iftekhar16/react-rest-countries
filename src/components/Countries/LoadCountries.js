import React, { useEffect, useState } from 'react';
import Country from './Country';

const LoadCountries = () => {

    const [countries, setCountries] = useState([]);

    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data));
    },[])

    // console.log(countries);

    // Country(countries);

    return(
        <div>
            <Country countries={countries}/>
        </div>
    );
};

export default LoadCountries;