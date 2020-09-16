import React, { Component } from 'react';
import './day.component.css';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

export default class DayComponent extends Component {
  render() {
    const date = this.props.date;
    const isToday = date && (new Date().toDateString() === date.toDateString());
    return (
      <Link to="" className="day">
        <div className={classnames({ today: isToday })}>
          {date ? date.getDate() : null}
        </div>
      </Link>
    )
  }
}
