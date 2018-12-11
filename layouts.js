import React from 'react'
import styled from 'styled-components'

const Root = styled.div`
  display: grid;
  width: 100vw;
  height: 100vh;
  grid-template:
    'a a'
    'b rest';
`

export const TitleSplit = ({ children }) => {
  const [a, b, ...rest] = React.Children.toArray(children.props.children)

  return (
    <Root>
      <div style={{ gridArea: 'a', alignSelf: 'end' }}>{a}</div>
      <div>{b}</div>
      <div>{rest}</div>
    </Root>
  )
}
