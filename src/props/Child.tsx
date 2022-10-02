interface ChildProps {
  color: string
  onClick: () => void
  children?: React.ReactNode
}

export const Child = ({ color, onClick, children }: ChildProps) => {
  return (
    <div style={{ background: color }} onClick={onClick}>
      <h1>Child</h1>
      <p>{color}</p>
      {children}
    </div>
  )
}

export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children
}) => {
  return (
    <div style={{ background: color }} onClick={onClick}>
      <h1>ChildAsFC</h1>
      <p>{color}</p>
      {children}
    </div>
  )
}
