import { Child, ChildAsFC } from './Child'

const onClick1 = () => {
  console.log('Bing')
}

const onClick2 = () => {
  console.log('Bong')
}

const Parent = () => {
  return (
    <div>
      <Child color="blue" onClick={onClick1}>
        <h2>Child #1</h2>
      </Child>
      <ChildAsFC color="red" onClick={onClick2}>
        <h2>Child #2</h2>
      </ChildAsFC>
    </div>
  )
}

export default Parent
