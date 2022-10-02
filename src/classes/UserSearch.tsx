import { Component } from 'react'

interface UserSearchProps {
  users: { name: string; age: number }[]
}

interface UserSearchState {
  name: string
  user: { name: string; age: number } | undefined
}

class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined
  }

  setName = (name: string) => {
    this.setState({ name })
  }

  setUser = (user: { name: string; age: number } | undefined) => {
    this.setState({ user })
  }

  findUser = () => {
    const foundUser = this.props.users.find(u => {
      return new RegExp(this.state.name).test(u.name)
    })

    this.setUser(foundUser)
  }

  render() {
    const { name, user } = this.state

    return (
      <div>
        User Search As Class
        <input value={name} onChange={e => this.setName(e.target.value)} />
        <button onClick={this.findUser}>Find User</button>
        <div>{user && user.name}</div>
        <div>{user && user.age}</div>
      </div>
    )
  }
}

export default UserSearch
