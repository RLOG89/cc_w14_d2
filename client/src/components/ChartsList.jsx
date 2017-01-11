var React = require('react');
var ChartsDetail = require('./ChartsDetail');

var ChartsList = React.createClass({
  getInitialState: function() {
    return({selectedIndex: undefined});
  },
  render: function() {
    console.log(this.props.songs)
    var chartNodes = this.props.songs.map(function(song, index) {
      return( <ChartsDetail key={index} position={index+1} title={song['im:name']['label']} artist={song['im:artist']['label']} ></ChartsDetail>
        )
    });
   
    return(
      <div className='chartsList'>
      {chartNodes}
      </div>
      )
  }

});

module.exports = ChartsList

