import './year.component.css';
import React, { Component } from 'react';
import { Month } from '..'

const currentYear = new Date().getFullYear();

export default class YearComponent extends Component {
  state = this.calendarYear(currentYear);

  calendarYear(year) {
    return {
      currentYear: year,
      months: Array(12).fill(null).map((x, index) => {
        return {
          number: index,
          startDate: new Date(year, index, 1),
        }
      })
    }
  }

  nextYearHandler = () => {
    this.setState(this.calendarYear(this.state.currentYear + 1));
  }
  previousYearHandler = () => {
    this.setState(this.calendarYear(this.state.currentYear - 1));
  }

  render() {

    return (
      <div className="year">
        <div className="year-header">
          <button type="button" className="buttonYear" onClick={this.previousYearHandler}>{'<'}</button>
          <h1 className="year-title">{this.state.currentYear}</h1>
          <button type="button" className="buttonYear" onClick={this.nextYearHandler}>{'>'}</button>
        </div>
        <div className="year-main">
          {this.state.months.map(month => (
            <Month startDate={month.startDate} />
          ))}
        </div>
      </div>
    );
  }
}