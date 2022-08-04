import { Profile  } from '../Profile/Profile';
import user from 'data/user.json';
import {PageContainer, Section} from './App.styled'

export const App = () => {
  return (
    <PageContainer>
      <Section>
        <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
      </Section>
  
    </PageContainer>
   
  );
  
};
