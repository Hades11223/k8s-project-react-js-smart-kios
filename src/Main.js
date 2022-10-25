import React, { Component } from 'react';
import { connect } from 'react-redux';
import userProvider from "./data-access/user-provider";
import { BrowserRouter as Router, Route, Link, Redirect, Switch, matchPath } from 'react-router-dom';
import constants from "./resources/strings";
import { BrowserRouter } from 'react-router-dom';
import RouterWithPaths from './components/RouterWithPaths';
import Loadable from 'react-loadable';
import '@styles/App.css'

import LoginScreen from '@user/containers/auth/LoginScreen'
import routes from './routes';
import Header from '@src/components/header/Header';
import Home from './site/user/containers/home';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  openFullscreen() {
    var elem = document.documentElement;
    let video = document.getElementsByTagName('video')[0]
    if (video) {
      return
    }
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  }
  render() {
    return (<BrowserRouter>
      <div onDoubleClick={this.openFullscreen}>
        <Router>
          <div>
            {/* <Header /> */}
            <Switch>
              <Route exact path="/" component={Home} />
              {
                routes.map((route, key) => {
                  if (route.component)
                    return <RouterWithPaths exact key={key}
                      path={route.path}
                      render={props => (
                        <route.component {...props} />
                      )} />
                  return null;
                })
              }
            </Switch>
          </div>
        </Router>
      </div>
    </BrowserRouter>);
  }
}
function mapStateToProps(state) {
  return {
    userApp: state.userApp
  };
}

export default connect(mapStateToProps)(Main);