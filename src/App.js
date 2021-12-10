import './App.css'
import React, { useState, useEffect } from 'react'
import Travels from './Components/Travel/Travels'
import Loading from './Components/Loading/Loading'
import Filter from './Components/Filter/Filter'

const url = 'https://course-api.com/react-tours-project'

function App() {
  const [loading, setLoading] = useState(true)
  const [travel, setTravel] = useState([])

  const FilterItem = (name) => {
    if (name == 'All') {
      setTravel(travel)
    }

    const newItem = travel.filter((names) => names.name == name)
    setTravel(newItem)
  }

  const allCategory = ['All', ...new Set(travel.map((names) => names.name))]

  const removeItem = (id) => {
    const newItem = travel.filter((trip) => trip.id !== id)
    setTravel(newItem)
  }

  const fetchData = async () => {
    setLoading(true)
    try {
      const response = await fetch(url)
      const tour = await response.json()
      setTravel(tour)
      setLoading(false)
    } catch (e) {
      setLoading(false)
      console.log(Error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (loading) {
    return <Loading />
  }

  if (travel.length == 0) {
    return (
      <main>
        <div className='title'>
          <h3>No Tour</h3>
          <button onClick={fetchData} className='btn'>
            Refresh
          </button>
        </div>
      </main>
    )
  }
  return (
    <div className='App'>
      <Filter filter={FilterItem} allCategory={allCategory} />
      <Travels travel={travel} removeItem={removeItem} />
    </div>
  )
}

export default App
