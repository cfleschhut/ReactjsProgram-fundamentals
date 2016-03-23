var React = require('react');
var PropTypes = React.PropTypes;
var transparentBg = require('../styles').transparentBg;
var MainContainer = require('./MainContainer');

var Prompt = function(props) {
  return (
    <MainContainer>
      <div className='jumbotron text-center' style={transparentBg}>
        <h1>{props.header}</h1>
        <form onSubmit={props.onSubmitUser}>
          <div className='form-group'>
            <input type='text'
              className='form-control'
              placeholder='GitHub username'
              onChange={props.onUpdateUser}
              value={props.username} />
          </div>
          <button type='submit' className='btn btn-block btn-lg btn-success'>
            Continue
          </button>
        </form>
      </div>
    </MainContainer>
  );
};

Prompt.propTypes = {
  header: PropTypes.string.isRequired,
  onUpdateUser: PropTypes.func.isRequired,
  onSubmitUser: PropTypes.func.isRequired,
  username: PropTypes.string.isRequired
};

module.exports = Prompt;
