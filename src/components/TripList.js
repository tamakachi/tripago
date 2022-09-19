// Style

import './TripList.css'

import {useState, useEffect, useCallback} from 'react'

export default function TripList() {
    const [trips,setTrips] = useState([]) 
    const [url,setUrl] = useState("http://localhost:3000/trips")
    const [message,setMessage] = useState("Hello user")

// Be sure that the dependencies in the useCallback function do not
// Also get triggered by the useEffect that triggers it, otherwise
// It will create an infinite loop

    const printJson = useCallback(() => {
        console.log(message);
      }, [message]);

// To run a code block once and only once with useEffect, make the second argument array empty, this array is
// known as the dependency array

// When using a function inside useEffect, be sure to use the useCallback hook
// Otherwise the function will execute every time the app remounts

    useEffect(()=>{

        fetch (url)
          .then(response=>response.json())
          .then(json=>setTrips(json))
            printJson()
        },[url,printJson])

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
        <div className='filters'>
            <button onClick={()=>{setUrl("http://localhost:3000/trips?loc=Europe")}}>European Trips</button>
            <button onClick={()=>{setUrl("http://localhost:3000/trips")}}>All trips</button>
        </div>
    </div>
    
  )
}
