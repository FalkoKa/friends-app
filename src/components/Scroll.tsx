import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Scroll = ({ children }: Props) => {
  return <div style={{ overflow: 'scroll', height: '800px' }}>{children}</div>;
};

export default Scroll;
