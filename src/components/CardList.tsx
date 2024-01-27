import Card from './Card';

type Props = {
  friends: {
    id: number;
    name: string;
    username: string;
    email: string;
  }[];
};

const CardList = ({ friends }: Props) => {
  return (
    <div>
      {friends.map((friend) => (
        <Card
          key={friend.id}
          name={friend.name}
          email={friend.email}
          id={friend.id}
        />
      ))}
    </div>
  );
};

export default CardList;
