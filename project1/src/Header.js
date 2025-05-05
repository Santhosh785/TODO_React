import React from 'react'

const Header = ({title}) => {
  return (
    <header><h1>{title}</h1></header>
    )
}
Header.defaultProps ={
  title:"To DO LIST"
}

export default Header