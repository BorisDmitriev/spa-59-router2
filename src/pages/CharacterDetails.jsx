import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'

export default function CharacterDetails() {

  const { characterId } = useParams()

  const [data, setData] = useState({})
  const [isLoading, setLoading] = useState(true)

  useEffect( () => {
    async function fetchData() {

        const res = await fetch("https://swapi.dev/api/people/"+characterId)
        const data = await res.json()
        setData(data)
        setLoading(false)
    }

    fetchData()
  }, [] )

  if(isLoading){
    return(
        <h1>...loading</h1>
    )
  }

  return (
    <>
      <div>
            <h2>Name: {data.name}</h2>
            <h2>Mass: {data.mass}</h2>
            <h2>Eye-Color: {data.eye_color}</h2>
      </div>
    </>
  )
}
