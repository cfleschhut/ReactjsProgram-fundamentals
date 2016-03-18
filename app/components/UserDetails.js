var React = require('react');
var PropTypes = React.PropTypes;

var UserDetails = function(user) {
  return (
    <ul className='list-group'>
      {!!user.score && <li className='list-group-item'><h4>Score: {user.score}</h4></li>}
      <li className='list-group-item'><img src={user.info.avatar_url} className='img-responsive' /></li>
      <li className='list-group-item'>Username: {user.info.login}</li>
      {user.info.name && <li className='list-group-item'>Name: {user.info.name}</li>}
      {user.info.location && <li className='list-group-item'>Location: {user.info.location}</li>}
      {user.info.company && <li className='list-group-item'>Company: {user.info.company}</li>}
      <li className='list-group-item'>Followers: {user.info.followers}</li>
      <li className='list-group-item'>Following: {user.info.following}</li>
      <li className='list-group-item'>Public repos: {user.info.public_repos}</li>
      {user.info.blog && <li className='list-group-item'>Blog: <a href='{user.info.blog}'>{user.info.blog}</a></li>}
    </ul>
  );
};

UserDetails.propTypes = {
  score: PropTypes.number,
  info: PropTypes.shape({
    avatar_url: PropTypes.string.isRequired,
    blog: PropTypes.string,
    company: PropTypes.string,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    location: PropTypes.string,
    login: PropTypes.string.isRequired,
    name: PropTypes.string,
    public_repos: PropTypes.number.isRequired
  })
};

module.exports = UserDetails;