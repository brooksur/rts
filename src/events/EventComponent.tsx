import React from 'react'

const EventComponent: React.FC = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e)
  }

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(e.ctrlKey)
  }

  return (
    <div>
      <input onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag me
      </div>
    </div>
  )
}

export default EventComponent
