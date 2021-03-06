var React = require('react');
var PropTypes = React.PropTypes;

var Loading = React.createClass({
  propTypes: {
    text: React.PropTypes.string,
    speed: PropTypes.number
  },
  getDefaultProps: function() {
    return {
      text: 'Loading',
      speed: 300
    };
  },
  getInitialState: function() {
    this.originalText = this.props.text;
    return {
      text: this.originalText
    };
  },
  componentDidMount: function() {
    var stopper = this.originalText + '...';
    this.interval = setInterval(function() {
      if (this.state.text === stopper) {
        this.setState({
          text: this.originalText
        });
      } else {
        this.setState({
          text: this.state.text + '.'
        });
      }
    }.bind(this), this.props.speed);
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <h1 className='page-header'>
        {this.state.text}
      </h1>
    );
  }
});

module.exports = Loading;
