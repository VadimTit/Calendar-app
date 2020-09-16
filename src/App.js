import React, { Component } from 'react';
import './App.css';
import { YearPage, NavBar, Month, DayPage } from './components';
import { todoService } from './services/todo.service';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";


export default class App extends Component {

  state = {
    todos: todoService.load(),
  }

  render() {
    return (
      <Router>
        <NavBar />
        <Switch>
          <Route path="/" exact render={() => {
            const today = new Date();
            const redirectPath = `/year/${today.getFullYear()}`;
            return (<Redirect to={redirectPath} />);
          }} />

          <Route path="/currentyear" exact render={() => {
            const today = new Date();
            const redirectPath = `/year/${today.getFullYear()}`;
            return (<Redirect to={redirectPath} />);
          }} />

          <Route path="/currentmonth" exact render={() => {
            const today = new Date();
            const redirectPath = `/year/${today.getFullYear()}/month/${today.getMonth() - 1}`;
            return (<Redirect to={redirectPath} />);
          }} />

          <Route path="/today" exact render={() => {
            return (
              <div className="today">
                {new Date().toLocaleString('default', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
              </div>)
          }} />
          
          <Route path="/year/:year" exact render={({ match }) => {
            return (
              <YearPage year={match.params.year} todos={this.state.todos}/>
            )
          }} />

          <Route path="/year/:year/month/:month" exact render={({ match }) => {
            return (
              <div className="month-single-page">
                <Month startDate={new Date(Number(match.params.year), Number(match.params.month) + 1)} />
              </div>
            )
          }} />

          <Route path="/year/:year/month/:month/day/:day" exact render={({ match }) => {
            return (
              <DayPage startDate={new Date(
                Number(match.params.year), 
                Number(match.params.month) + 1, 
                Number(match.params.month.day))} />
            )
          }} />

        </Switch>
      </Router>
    );
  }
}
