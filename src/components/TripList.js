// Style

import './TripList.css'

import {useState, useEffect} from 'react'

export default function TripList() {
    const [trips,setTrips] = useState([]) 

// To run a code block once and only once with useEffect, make the second argument array empty, this array is
// known as the dependency array
    useEffect(()=>{

        fetch ("http://localhost:3000/trips")
          .then(response=>response.json())
          .then(json=>setTrips(json))
          console.log(trips)
        },[])

  return (
    <div className='trip-list'>
        <h2>Trip List</h2>
        <ul>
            {trips.map(trip => (
                <li key={trip.id}>
                    <h2>{trip.title}</h2>
                    <h2>{trip.price}</h2>
                </li>
            ))}
        </ul>
    </div>
  )
}
