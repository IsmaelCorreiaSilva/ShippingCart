import { Suspense } from 'react';
import { useCart } from '../../hooks/useCart';
import { CartItem } from '../CartItem';
import styles from './styles.module.scss'

export function Cart(){
    const { itens } = useCart()
    console.log(itens);
    return (
        <div className={styles.container}>
            <h1>Carrinho de Compras</h1>
            <div className={styles.content}>
                <div className={styles.cartItens}>
                    {/* <span>Há itens no carrinho</span> */}
                    <Suspense>
                        {
                            itens.map(item =>(
                                <CartItem key={item.id} data={item} />
                            ))
                        }
                    </Suspense>
                </div>
                <div className={styles.cartInfo}>
                    <h2>RESUMO</h2>
                    <hr />
                    <div>
                        <span>Valores dos Produtos:</span>
                        <span>R$5000,00</span>
                    </div>
                    <hr />
                    <div>
                        <span>Frete:</span>
                        <span>R$5000,00</span>
                    </div>

                    <hr />
                    <div>

                        <span>Total à Prazo:</span>
                        <span>R$5000,00</span>
                    </div>
                    <hr />
                    <div>
                        <span>Total à Vista no Pix:</span>
                        <span>R$5000,00</span>
                    </div>
                </div>
            </div>
        </div>
    );
}