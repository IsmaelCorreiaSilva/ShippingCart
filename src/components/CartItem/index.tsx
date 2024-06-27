import imgProduct from '../../assets/image/smart tv.webp'
import styles from './styles.module.scss'

import { IoCloseSharp } from "react-icons/io5";

export function CartItem() {
    return (
        <div className={styles.container}>
            <img src={imgProduct} alt="" />
            <span className={styles.infoProduct}>Dados do produto da loja X Dados do produto da loja X</span>
            <input type="number" />
            <span>R$ 5000,00</span>
            <button
                type="button"
            >
                <IoCloseSharp />
            </button>
        </div>
    );
}