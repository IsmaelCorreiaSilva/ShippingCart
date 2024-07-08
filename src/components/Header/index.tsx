import styles  from './styles.module.scss'
import { FaCartPlus } from 'react-icons/fa'

export function Header() {
    return (
        <a href={'/carrinho'} className={styles.container}>
            <FaCartPlus  color='#fff' size={30} />
        </a>
    );
}