import { create } from 'tailwind-rn';
import styles from './styles.json';

const { tailwind: tw, getColor } = create(styles);

export default tw;
export { getColor };
