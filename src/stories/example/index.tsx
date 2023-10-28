import { text as textStyle } from './style.css';

type Props = {
  text: string;
};

export const Example: React.FC<Props> = ({ text }) => {
  return <p className={textStyle}>{text}</p>;
};
