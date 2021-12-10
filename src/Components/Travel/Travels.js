import React from 'react'
import Travel from './Travel'

function Travels({ travel, removeItem }) {
  return (
    <section>
      <div>
        <h2 className='title'>Our trips</h2>
        <div className='underline'></div>
      </div>
      <div>
        {travel.map((trip) => {
          return <Travel key={trip.id} {...trip} removeItem={removeItem} />
        })}
      </div>
    </section>
  )
}

export default Travels
