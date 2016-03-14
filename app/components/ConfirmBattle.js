var React = require('react');

var ConfirmBattle = function(props) {
  return props.isLoading
    ? <p>loading</p>
    : <p>not loading</p>;
}

module.exports = ConfirmBattle;
