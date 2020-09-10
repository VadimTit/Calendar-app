import './month.component.css';
import React, { Component } from 'react';

export default class MonthComponent extends Component {

  render() {
    const startDate = this.props.startDate;
    const title = startDate.toLocaleString('default', { month: 'long' });
    return (
      <div className="month">
        <div className="month-header">
          {title}
        </div>
      </div>
    );
  }
}