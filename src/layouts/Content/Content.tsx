import { Home } from 'pages/Home/Home';

type Props = {
  toggleModalHandler: () => void;
};

export const Content = ({ toggleModalHandler }: Props) => {
  return <Home toggleModalHandler={toggleModalHandler} />;
};
