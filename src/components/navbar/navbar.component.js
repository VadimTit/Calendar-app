import './navbar.component.css'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class NavbarComponent extends Component {
  render() {
    return (
      <div className="navbar">
      <Link to="/currentyear">
        <div>Current Year</div>
      </Link>
      <Link to="/currentmonth">
        <div>Current Month</div>
      </Link>
      <Link to="/today">
        <div>Today</div>
      </Link>
      </div>
    )
  }
}
