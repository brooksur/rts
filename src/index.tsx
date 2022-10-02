import ReactDOM from 'react-dom/client'
import Parent from './props/Parent'
import GuestList from './state/GuestList'
import UserSearch from './state/UserSearch'
import EventComponent from './events/EventComponent'
import { default as UserSearchAsClass } from './classes/UserSearch'
import { default as UserSearchWithRef } from './refs/UserSearch'
import { users } from './fixtures/users'

const el = document.getElementById('root')
const root = ReactDOM.createRoot(el!)

const App = () => {
  return (
    <div>
      <Parent />
      <GuestList />
      <UserSearch />
      <EventComponent />
      <UserSearchAsClass users={users} />
      <UserSearchWithRef />
    </div>
  )
}

root.render(<App />)
