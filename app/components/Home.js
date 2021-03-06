var React = require('react');
var transparentBg = require('../styles').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
var MainContainer = require('./MainContainer');

var Home = React.createClass({
  render: function() {
    return (
      <MainContainer>
        <div className='jumbotron text-center' style={transparentBg}>
          <h1>GitHub Battle</h1>
          <p className='lead'>Some fancy motto</p>
          <Link to='/playerOne' className='btn btn-lg btn-success'>
            Get started
          </Link>
        </div>
      </MainContainer>
    );
  }
});

module.exports = Home;
