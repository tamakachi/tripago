import { useState, useEffect} from 'react'

const useFetch = (url) => {
    const [data,setData] = useState(null)
    useEffect(()=>{
        const fetchData = async () =>{
            const res = await fetch(url)
            const json = await res.json()
            setData(json)
        }
    },[url])

    fetchData()

    return{data: data}
    
}

export default useFetch