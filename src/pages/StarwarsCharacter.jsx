import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const StarwarsCharacter = () => {

    const [data, setData] = useState({})
    const [isLoading, setLoading] = useState(true)

    useEffect( () => {

        async function fetchData() {
            const res = await fetch("https://swapi.dev/api/people/")
            const data  = await res.json()
            console.log(data);
            setData(data)
            setLoading(false)
        }

        fetchData()
    }, [] )

    if(isLoading){
        return (
            <h1>...loading</h1>
        )
    }

    return (
        <>
            {
               data.results.map( (item, index) => {
                return(
                    <div key={item.name}>
                        <Link to={`/characterDetails/${index+1}`}><h5>{item.name}</h5></Link>
                    </div>
                )
               } )
            }   
        </>
    );
};

export default StarwarsCharacter;
