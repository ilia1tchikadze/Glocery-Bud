import React from 'react'

function List({ items, RemoveItem, EditItem }) {
  {
  }
  return (
    <div className='grocery-list'>
      {items.map((item) => {
        const { id, title } = item
        return (
          <article className='grocery-item' key={id}>
            <p className='title'>{title}</p>
            <div className='btn-container'>
              <button
                type='button'
                className='edit-btn'
                onClick={() => EditItem(id)}
              >
                Edit
              </button>
              <button
                type='button'
                className='delete-btn'
                onClick={() => RemoveItem(id)}
              >
                X
              </button>
            </div>
          </article>
        )
      })}
    </div>
  )
}

export default List
