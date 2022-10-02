import { useState, useRef, useEffect } from 'react'
import { users } from '../fixtures/users'

const UserSearch: React.FC = () => {
  const [name, setName] = useState('')
  const [user, setUser] = useState<{ name: string; age: number } | undefined>()

  const inputRef = useRef<HTMLInputElement | null>(null)

  const onClick = () => {
    const foundUser = users.find(u => {
      return new RegExp(name).test(u.name)
    })

    setUser(foundUser)
  }

  useEffect(() => {
    // call focus when ref is set
    inputRef.current && inputRef.current.focus()
  }, [])

  return (
    <div>
      User Search
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        ref={inputRef}
      />
      <button onClick={onClick}>Find User</button>
      <div>{user && user.name}</div>
      <div>{user && user.age}</div>
    </div>
  )
}

export default UserSearch
