import React from 'react'

export const TitleSplit = ({ children }) => {
  const [a, b, ...rest] = React.Children.toArray(children)

  return (
    <div
      style={{
        display: 'grid',
        width: '100ww',
        height: '100vh',
        gridTemplate: `'a a' 'b rest'`,
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: '100px 10fr',
      }}
    >
      <div style={{ gridArea: 'a', alignSelf: 'end' }}>{a}</div>
      <div>{b}</div>
      <div>{rest}</div>
    </div>
  )
}
