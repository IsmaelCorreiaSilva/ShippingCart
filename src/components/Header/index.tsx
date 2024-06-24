import styles  from './styles.module.scss'
import { FaCartPlus } from 'react-icons/fa'

export function Header() {
    return (
        <div className={styles.container}>
            <FaCartPlus  color='#fff' size={30} />
        </div>
    );
}