import React from 'react'
import ReactDOM from 'react-dom'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'
import Main from 'Main'
import Timer from 'Timer'
import Countdown from 'Countdown'

//Load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="timer" component={Timer}/>
      <Route path="countdown" component={Countdown}/>
    </Route>
  </Router>
  ,
  document.getElementById("app")
);
