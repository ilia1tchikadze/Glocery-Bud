import React, { useState } from 'react'
import './index.css'
import List from './List'
function App(props) {
  const [name, setName] = useState('')
  const [alert, setAlert] = useState(false)
  const [list, setList] = useState([])
  const [editID, setEditID] = useState(null)
  const [isEditing, setIsEditing] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!name) {
    } else if (name && isEditing) {
      setList(
        list.map((item) => {
          if (item.id === editID) {
            return { ...item, title: name }
          }
          return item
        })
      )
      setName('')
      setEditID(null)
      setIsEditing(false)
    } else {
      const newItem = { id: new Date().getTime().toString(), title: name }
      setList([...list, newItem])
    }
    setName('')
  }

  const ClearItem = () => {
    setList([])
  }

  const RemoveItem = (id) => {
    const remove = list.filter((item) => item.id !== id)
    setList(remove)
  }

  const EditItem = (id) => {
    const specificItem = list.find((item) => item.id === id)
    setIsEditing(true)
    setEditID(id)
    setName(specificItem.title)
  }

  return (
    <section className='section-center'>
      <form className='grocery-form' onSubmit={handleSubmit}>
        <h3>grocery bud</h3>
        <div className='form-control'>
          <input
            type='text'
            className='grocery'
            placeholder='e.g. eggs'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type='submit' className='submit-btn'>
            {isEditing ? 'Edit' : 'Submit'}
          </button>
        </div>

        <List items={list} RemoveItem={RemoveItem} EditItem={EditItem} />
      </form>
      {list.length > 0 && (
        <div className='grocery-container'>
          <button className='clear-btn' onClick={ClearItem}>
            clear items
          </button>
        </div>
      )}
    </section>
  )
}

export default App
