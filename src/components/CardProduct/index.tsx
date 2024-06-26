import styles from './styles.module.scss'
import { Product } from '../../types/ProductType';
import { useCart } from '../../hooks/useCart';

interface CardProductProps{
    data: Product;
}
export function CardProduct({data}:CardProductProps) {

    const { addItem } = useCart();

    function handleAddItem(){
        addItem(data)
    }

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
            <button 
                type="button"
                onClick={handleAddItem}
            >
                Adicionar
            </button>

        </div>
    );
}