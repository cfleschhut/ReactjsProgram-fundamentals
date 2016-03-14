var React = require('react');

function puke(obj) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>;
}

var ConfirmBattle = function(props) {
  return props.isLoading
    ? <div>loading</div>
    : <div>{puke(props)}</div>;
}

module.exports = ConfirmBattle;
