import './yearpage.component.css';
import React, { Component } from 'react';
import { Month } from '..'
import { Link } from 'react-router-dom';
import { get } from 'lodash';


export default class YearComponent extends Component {
  render() {

    const months = Array(12).fill(null).map((x, index) => index + 1); 
    
    return (
      <div className="year">
        <div className="year-header">
          <Link to={`/year/${this.props.year - 1}`}>
            <button type="button" className="button-year">{'❮'}</button>
          </Link>
          <h1 className="year-title">{this.props.year}</h1>
          <Link to={`/year/${Number(this.props.year) + 1}`}>
            <button type="button" className="button-year">{'❯'}</button>
          </Link>
        </div>
        <div className="year-main">
          {months.map(month => (
            <Month  
            key={month}
            year={this.props.year}
            month={month}
            todos={get(this.props.todos, month, {})}/>
          ))}
        </div>
      </div>
    );
  }
}