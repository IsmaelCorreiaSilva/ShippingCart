import styles from './styles.module.scss'
import { Product } from '../../types/ProductType';

interface CardProductProps{
    data: Product;
}
export function CardProduct({data}:CardProductProps) {
    return (
        <div className={styles.container}>
            <img src={data.url_image} alt="kkk" />

            <span>{data.title}</span>
            <span>{
                    new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(data.amount)
                }
            </span>
            <button type="button">Adicionar</button>

        </div>
    );
}