import styles from './styles.module.scss'
import { Product, ItemCart } from '../../types/ProductType';
import { useCartStore } from '../../stores/CartStore';

interface CardProductProps{
    data: Product;
}
export function CardProduct({data}:CardProductProps) {

    const { addItem } = useCartStore();
    
    function handleAddItem(){
        const item: ItemCart = {
            id: data.id,
            title: data.title,
            price: data.price,
            url_image: data.url_image,
            quantity: 1
        }
        
        addItem(item)
    }

    return (
        <div className={styles.container}>
            <img src={data.url_image} alt={data.title} />

            <span>{data.title}</span>
            <span>{
                    new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(data.price)
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