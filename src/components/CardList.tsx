import { Robot } from '../App';
import Card from './Card';

type Props = {
  robots: Robot[];
};

const CardList = ({ robots }: Props) => {
  return (
    <div>
      {robots.map((robot) => (
        <Card key={robot.id} robot={robot} />
      ))}
    </div>
  );
};

export default CardList;
