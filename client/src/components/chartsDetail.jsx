var React = require('react');

var ChartsDetail = function(props) {
  return (
    <div className='top20charts'>
      <li> {props.position} 
       <b>Title</b> {props.title} 
       <b>Artist</b> {props.artist} </li>
    </div>
    )
};

module.exports = ChartsDetail;