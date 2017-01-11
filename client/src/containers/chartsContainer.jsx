var React = require('react');
var ChartsList = require('../components/ChartsList.jsx')

var ChartsContainer = React.createClass({
  getInitialState: function() {
    return {songs: []}
  },
  componentDidMount: function() {
    var url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json'
    var request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = function() {
      var data = JSON.parse(request.responseText).feed.entry;
      console.log(data)
      this.setState({songs: data});
    }.bind(this);
    request.send(null);
  },
  render: function() { 
    return(
      <div>
        <h1>UK Top 20</h1>
        <ChartsList songs={this.state.songs}/>
      </div>
      );
    }
});

module.exports = ChartsContainer;
