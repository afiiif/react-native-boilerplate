import { create } from 'tailwind-rn';
import clsx from 'clsx';
import styles from './styles.json';

const { tailwind, getColor } = create(styles);

const tw = (...props) => {
  const className = clsx(...props);
  return tailwind(className);
};

export default tw;
export { getColor };
