// Style

import './TripList.css'

import {useState} from 'react'
import useFetch from '../hooks/useFetch'

export default function TripList() {
    const [url,setUrl] = useState("http://localhost:3000/trips")
    const {data:trips, isPending} = useFetch(url)



  return (
    <div className='trip-list'>
        <h2>Trip List</h2>
        {isPending && <div>Loading trips...</div>}
        <ul>
            {trips && trips.map(trip => (
                <li key={trip.id}>
                    <h2>{trip.title}</h2>
                    <h2>{trip.price}</h2>
                </li>
            ))}
        </ul>
        <div className='filters'>
            <button onClick={()=>{setUrl("http://localhost:3000/trips?loc=Europe")}}>European Trips</button>
            <button onClick={()=>{setUrl("http://localhost:3000/trips")}}>All trips</button>
        </div>
    </div>
    
  )
}
