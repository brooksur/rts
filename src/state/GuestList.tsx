import React, { useState } from 'react'

const GuestList: React.FC = () => {
  const [name, setName] = useState('')
  const [guests, setGuests] = useState<string[]>([])

  const addGuest = () => {
    setName('')
    setGuests([...guests, name])
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  const onEnter = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') addGuest()
  }

  return (
    <div>
      <h3>Guest List</h3>
      <input value={name} onChange={onChange} onKeyUp={onEnter} />
      <button onClick={addGuest}>Add Guest</button>
      <ol>
        {guests.map((g, i) => {
          return <li key={i}>{g}</li>
        })}
      </ol>
    </div>
  )
}

export default GuestList
