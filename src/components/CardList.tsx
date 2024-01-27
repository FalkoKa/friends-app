import { User } from '../App';
import Card from './Card';

type Props = {
  robots: User[];
};

const CardList = ({ robots }: Props) => {
  return (
    <div>
      {robots.map((robot) => (
        <Card
          key={robot.id}
          name={robot.name}
          email={robot.email}
          id={robot.id}
        />
      ))}
    </div>
  );
};

export default CardList;
