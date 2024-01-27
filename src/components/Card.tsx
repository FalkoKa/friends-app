type Props = {
  name: string;
  email: string;
  id: number;
};

const Card = (props: Props) => {
  const { name, email, id } = props;
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
      <img alt="profile" src={`https://robohash.org/${id}?200x200`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default Card;
