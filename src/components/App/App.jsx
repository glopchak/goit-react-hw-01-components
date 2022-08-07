import { PageContainer, Section } from './App.styled';
import { Profile } from '../Profile/Profile';
import {StatisticsBoard} from '../StatisticsBoard/StatisticsBoard'
import {FriendList} from '../FriendList/FriendList'
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json'

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

      <Section>
        <StatisticsBoard title="Upload stats" stats={data} />
      </Section>

      <Section>
      <FriendList friends={friends} />;
      </Section>

      <Section>
      <TransactionHistory items={transactions} />;
      </Section>

    </PageContainer>
  );
};
