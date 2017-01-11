var React = require('react');

var ChartsList = React.createClass({
  render: function() {
    var chartNodes = this.props.data.map(function(song, index) {
      return( <Song
        key={index}
        position={song['im:index']['label']}
        title={song['im:name']['label']}
        artist={song['im:artist']['label']}
        />
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

