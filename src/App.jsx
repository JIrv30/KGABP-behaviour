import { useEffect, useState } from 'react'

import './App.css'

function App() {
  
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
  
    useEffect(()=>{
      const fetchArborData = async () => {
        try {
          const res = await fetch (
            "https://brune-park-community-school.uk.arbor.sc/rest-v2/students?format=json",
            {
              headers: {
                "Accept": "application/json",
                "X-AUTH-TOKEN": "$2y$13$MT3MvcTNUJnbqh66lsDtANqfqlXCwpYv43T8mb83lzKlcki7DEJ2",
              },
            }
          )
          if(!res.ok) {
            throw new Error (`HTTP Error! Status: ${res.status}`)
          }
          const result = await res.json()
          console.log(result)
          setData(result)
        } catch (error) {
          console.error('Error fetching Arbor data', error)
        } finally {
          setLoading(false)
        }
      }

      fetchArborData()
    },[])
  

  if(loading) return <div>Loading...</div>
  return (
    <>
      <p>Hello World</p>
    </>
  )
}

export default App
