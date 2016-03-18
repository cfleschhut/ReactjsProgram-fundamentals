var React = require('react');

var UserDetailsWrapper = function(props) {
  return (
    <div className='col-sm-6'>
      <h2 className='text-center'>{props.header}</h2>
      {props.children}
    </div>
  );
};

module.exports = UserDetailsWrapper;
