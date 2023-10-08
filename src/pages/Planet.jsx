import React from 'react'
import { useParams } from 'react-router-dom'
import data from "../../data.json"

export default function Planet() {
    const params = useParams();
    const planetData = data.find((item) => item.name.toLowerCase() == params.planet)
    console.log(planetData)
    return (
    <div>
        <h1>{planetData.name}</h1>
        <ul>
            <li>{planetData.radius}</li>
            <li>{planetData.revolution}</li>
            <li>{planetData.rotation}</li>
        </ul>
    </div>
  )
}
