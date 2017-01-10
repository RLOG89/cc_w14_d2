var React = require('react');
var ReactDOM = require('react-dom');
var chartsContainer = require('./containers/chartsContainer.jsx')

window.onload = function(){
  ReactDOM.render(
    <chartsContainer />,
    document.getElementById('app')
  );
}
