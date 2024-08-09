import styles from './styles.module.scss'
import shoppingCart from '../../assets/image/shopping-cart.svg'
import { FaCartPlus } from 'react-icons/fa'

export function Header() {
    return (
        <div className={styles.container}>
            <a href={'/'}>
                <img src={shoppingCart} alt="logo" />
            </a>
            <a href={'/carrinho'}>
                <FaCartPlus color='#fff' size={30} />
            </a>
        </div>
    );
}