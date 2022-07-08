import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <div className="navbar-brand mx-auto my-3 fw-bold">{props.title}</div>
  </div>
</nav>
  )
}

Navbar.propTypes ={
    title: PropTypes.string,
}

Navbar.defaultProps={
    title: 'Title',
}