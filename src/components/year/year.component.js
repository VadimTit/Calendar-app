import './year.component.css';
import React, { Component } from 'react';
import { Month } from '..'
import { Link } from 'react-router-dom';

const currentYear = new Date().getFullYear();

export default class YearComponent extends Component {
  render() {

    const months = Array(12).fill(null).map((x, index) => new Date(this.props.year, index, 1)); 
    
    return (
      <div className="year">
        <div className="year-header">
          <Link to={`/year/${this.props.year - 1}`}>
            <button type="button" className="buttonYear">{'☚'}</button>
          </Link>
          <h1 className="year-title">{this.props.year}</h1>
          <Link to={`/year/${Number(this.props.year) + 1}`}>
            <button type="button" className="buttonYear">{'☛'}</button>
          </Link>
        </div>
        <div className="year-main">
          {months.map(startDate => (
            <Month className=" " key={startDate.toISOString()} startDate={startDate} />
          ))}
        </div>
      </div>
    );
  }
}