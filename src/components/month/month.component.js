import './month.component.css';
import React, { Component } from 'react';

export default class MonthComponent extends Component {

  render() {
    const startDate = this.props.startDate;
    const title = startDate.toLocaleString('default', { month: 'long' });
    const tempDate = new Date(startDate);
    const days = [];

    let day = 1;
    while (tempDate.getMonth() === startDate.getMonth()) {
      days.push(day);
      day = day + 1;
      tempDate.setDate(day);
    }

    for (let i = startDate.getDay(); i > 0; i--) {
      days.unshift('');
    }

    const dayOfWeek = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'];

    return (
      <div className="month">
        <div className="month-header">
          {title}
        </div>
        <div className="month-main">
          {dayOfWeek.map(day => <div className="day day-title">{day}</div>)}
          {days.map(day => <div className="day">{day}</div>)}
        </div>
      </div>
    );
  }
}