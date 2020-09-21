import React, { Component } from 'react';
import './day.component.css';
import classnames from 'classnames';
import { Link } from 'react-router-dom';
import { isEmpty } from 'lodash';

export default class DayComponent extends Component {
  
  render() {
    const { year, month, day} = this.props;
    const today = new Date(year, month, day);

    if (!day) {
      return (<div className="day"> </div>)
    }
    const isToday = new Date().toDateString() === today.toDateString();
    return (
      <Link to={`/year/${year}/month/${month}/day/${day}`} className={classnames({day: true, 'has-todos': !isEmpty(this.props.todos)})}>
        <div className={classnames({ today: isToday })}>
          {day || null}
        </div>
      </Link>
    )
  }
}
