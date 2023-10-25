import React from 'react';
import './Country.css';

const Country = ({countries}) => {

    console.log(countries);

    return (
        <div>
            <h1>Countries</h1>
            <div className='country-container'>
                {
                    countries.map((country, index)=>{
                        // country.name.common = ('Israel')? '{country.name.common}' : 'ok';
                        if(country.name.common === 'Israel'){
                            console.log("does not exist btw");
                            return(
                                ""
                            );
                        }
                        else{
                            return (
                                <div key={index} className='country'>
                                    <div className='country-title'>{country.name.common}</div>
                                    <div className='country-region'>{country.region}</div>
                                    <div className='country-flag-container'><img className='country-flag' src={country.flags.svg} alt="" /></div>
                                </div>
                            )
                        }
                        
                    })
                }
            </div>
        </div>
    );
};

export default Country;