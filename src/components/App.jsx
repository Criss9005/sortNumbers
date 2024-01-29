import Profile from "./profile/Profile";
import Statistics from "./statistics/Statistics";
import FriendList from "./friendlist/FriendList";
import TransactionHistory from "./transactionhistory/TransactionHistory";


import user from "./user.json"
import data from "./data.json"
import friends from "./friends.json"
import transactions from "./transactions.json"


export const App = () => {
  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        backgroundColor: '#e7ecf2',
        flexDirection: 'column'
      }}
    > 
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats} />
      
      <Statistics stats={data} />
      
      <FriendList friends={friends} />
      
      <TransactionHistory items={transactions} />
    </div>
  );
};
