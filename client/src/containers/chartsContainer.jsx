var React = require('react');
var Chartslist = require('../components/Chartslist.jsx')
var ChartsDetail = require('../components/ChartsDetail.jsx')

var ChartsContainer = React.createClass({
  getInitialState: function() {
    return {songs: []}
  },
  componentDidMount: function() {
    var url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function() {
      var data = JSON.parse(request.responseText);
      this.setState({songs: data});
    }.bind(this);
    request.send(null);
  },
  render: function() {
   
       
    return(
      <div>
        <h1>UK Top 20</h1>
      </div>
      );
    }
});

module.exports = ChartsContainer
