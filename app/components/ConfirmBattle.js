var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var styles = require('../styles');

function puke(obj) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>;
}

var ConfirmBattle = function(props) {
  return (
    props.isLoading ?
    <div>
      loading
    </div> :
    <div className='row'>
      <div className='col-sm-8 col-sm-offset-2'>
        <h1 className='page-header'>Confirm Players</h1>
        <div className='row'>
          <UserDetailsWrapper header={'Player 1'}>
            <UserDetails info={props.playersInfo[0]} />
          </UserDetailsWrapper>
          <UserDetailsWrapper header={'Player 2'}>
            <UserDetails info={props.playersInfo[1]} />
          </UserDetailsWrapper>
        </div>
        <div className='row' style={styles.space}>
          <div className='col-sm-6 col-sm-offset-3'>
            <button type='button' className='btn btn-lg btn-block btn-success'
              onClick={props.onInitiateBattle}>
              Initiate battle
            </button>
            <Link to='/playerOne' className='btn btn-lg btn-block btn-default'>
              Reselect Players
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  onInitiateBattle: PropTypes.func.isRequired,
  playersInfo: PropTypes.array.isRequired
};

module.exports = ConfirmBattle;
