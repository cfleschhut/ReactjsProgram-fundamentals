var React = require('react');
var ReactDOM = require('react-dom');

var USER_DATA = {
  image: 'https://avatars3.githubusercontent.com/u/34942',
  name: 'Christian Fleschhut',
  username: 'cfleschhut'
};

var ShowList = React.createClass({
  render: function() {
    var listItems = this.props.names.map(function(friend, index) {
      return <li key={index}>{friend}</li>;
    });
    return (
      <div>
        <h3>Friends</h3>
        <ul>
          {listItems}
        </ul>
      </div>
    );
  }
});

var FriendsContainer = React.createClass({
  render: function() {
    var name = 'Manfred';
    var friends = ['Alice', 'Bob', 'John'];

    return (
      <div>
        <Avatar user={USER_DATA} />
        <h3>Name: {name}</h3>
        <ShowList names={friends} />
      </div>
    );
  }
});

var ProfilePic = function(props) {
  return <img src={props.imageUrl} style={{width: '230px', height: '230px'}} />
};

var ProfileName = function(props) {
  return (
    <div>
      {props.name}
    </div>
  );
};

var ProfileLink = function(props) {
  return (
    <div>
      <a href={'https://www.github.com/' + props.username}>
        {props.username}
      </a>
    </div>
  );
};

var Avatar = function(props) {
  return (
    <div>
      <ProfilePic imageUrl={props.user.image} />
      <ProfileName name={props.user.name} />
      <ProfileLink username={props.user.username} />
    </div>
  );
};

ReactDOM.render(
  <FriendsContainer />,
  document.getElementById('app')
);
