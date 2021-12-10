import React, { useState } from 'react'

function Filter({ filter, allCategory }) {
  return (
    <div>
      {allCategory.map((category, index) => {
        return (
          <button className='btn' key={index} onClick={() => filter(category)}>
            {category}
          </button>
        )
      })}
    </div>
  )
}

export default Filter
