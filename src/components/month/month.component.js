import './month.component.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Day } from '..';

export default class MonthComponent extends Component {

  render() {
    const startDate = this.props.startDate;
    const title = startDate.toLocaleString('default', { month: 'long' });
    
    const tempDate = new Date(startDate);
    const days = [];

    let day = 1;
    tempDate.setDate(day);

    while (tempDate.getMonth() === startDate.getMonth()) {
      days.push(new Date(tempDate));
      day = day + 1;
      tempDate.setDate(day);
    }

    for (let i = startDate.getDay(); i > 0; i--) {
      days.unshift(null);
    }

    const dayOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

    return (
      <div className="month">
        <div className="month-header">
        <Link to={`/year/${startDate.getFullYear()}/month/${startDate.getMonth() - 1}`}>
          {title}
        </Link>
        </div>
        <div className="month-main">
          {dayOfWeek.map((day, index) => <div key={index} className="day day-title">{day}</div>)}
          {days.map((day, index)=> <Day key={index} date={day}/>)}
        </div>
      </div>
    );
  }
}