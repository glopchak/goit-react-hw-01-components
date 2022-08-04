import PropTypes from 'prop-types';
import {
  Container,
  Description,
  Avatar,
  UserName,
  UserInfo,
  Stats,
  Item,
  Label,
  Value,
} from './Profile.styled';

export const Profile = ({ avatar, username, tag, location, stats }) => {
  return (
    <Container>
      <Description>
        <Avatar src={avatar} alt="User avatar" className="avatar" />
        <UserName>{username}</UserName>
        <UserInfo>@{tag}</UserInfo>
        <UserInfo>{location}</UserInfo>
      </Description>

      <Stats>
        <Item>
          <Label>Followers</Label>
          <Value>{stats.followers}</Value>
        </Item>
        <Item>
          <Label>Views</Label>
          <Value>{stats.views}</Value>
        </Item>
        <Item>
          <Label>Likes</Label>
          <Value>{stats.likes}</Value>
        </Item>
      </Stats>
    </Container>
  );
};

Profile.propTypes = {
  // avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
