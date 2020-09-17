import React, { Component } from 'react';
import './day.component.css';
import classnames from 'classnames';
import { Link } from 'react-router-dom';

export default class DayComponent extends Component {
  render() {
    const date = this.props.date;
    if (!date) {
      return (<div className="day"> </div>)
    }
    const isToday = date && (new Date().toDateString() === date.toDateString());
    
    
    
    return (
      <Link to={`/year/${date.getFullYear()}/month/${date.getMonth()}/day/${date.getDate()}`} className="day">
        <div className={classnames({ today: isToday })}>
          {date ? date.getDate() : null}
        </div>
      </Link>
    )
  }
}
