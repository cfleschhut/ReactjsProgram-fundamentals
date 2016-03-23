var React = require('react');
var styles = require('../styles');

function MainContainer(props) {
  return (
    <div className='row'>
      <div className='col-sm-8 col-sm-offset-2'>
        {props.children}
      </div>
    </div>
  );
}

module.exports = MainContainer;
