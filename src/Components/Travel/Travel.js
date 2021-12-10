import React, { useState } from 'react'

function Travel({ id, name, info, image, price, removeItem }) {
  const [readMore, setReadMore] = useState(false)
  return (
    <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4>${price} </h4>
        </div>

        <p>
          {readMore ? info : `${info.substring(0, 200)}`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : 'show more'}
          </button>
        </p>

        <button className='delete-btn' onClick={() => removeItem(id)}>
          Not Interested
        </button>
      </footer>
    </article>
  )
}

export default Travel
