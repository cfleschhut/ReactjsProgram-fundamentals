var React = require('react');
var PropTypes = React.PropTypes;
var UserDetailsWrapper = require('./UserDetailsWrapper');
var UserDetails = require('./UserDetails');
var Link = require('react-router').Link;
var styles = require('../styles');
var MainContainer = require('./MainContainer');
var Loading = require('./Loading');

function StartOver() {
  return (
    <div className='row' style={styles.space}>
      <div className='col-sm-6 col-sm-offset-3'>
        <Link to='/playerOne' className='btn btn-lg btn-block btn-default'>
          Start over
        </Link>
      </div>
    </div>
  );
}

var Results = function(props) {
  if ((props.scores[0] === props.scores[1]) && !props.isLoading) {
    return (
      <MainContainer>
        <h1 className='page-header'>It’s a tie!</h1>
        <StartOver />
      </MainContainer>
    );
  }

  var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  var losingIndex = winningIndex === 0 ? 1 : 0;

  return (
    props.isLoading ?
    <MainContainer>
      <Loading speed={200} />
    </MainContainer> :
    <MainContainer>
      <h1 className='page-header'>Results</h1>
      <div className='row'>
        <UserDetailsWrapper header={'Winner'}>
          <UserDetails info={props.playersInfo[winningIndex]} score={props.scores[winningIndex]} />
        </UserDetailsWrapper>
        <UserDetailsWrapper header={'Loser'}>
          <UserDetails info={props.playersInfo[losingIndex]} score={props.scores[losingIndex]} />
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </MainContainer>
  );
};

Results.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  scores: PropTypes.array.isRequired
};

module.exports = Results;
