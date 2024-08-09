import { Suspense, useEffect, useState } from 'react';
import { CartItem } from '../CartItem';
import styles from './styles.module.scss'
import { useCartStore } from '../../stores/CartStore';

export function Cart() {

    const [freight, setFreight] = useState<number>(Math.floor(Math.random() * 50));
    const [totalTerm, setTotalTerm] = useState<number>(0);
    const [totalInSight, setTotalInSight] = useState<number>(0);

    const { itens } = useCartStore();

    const value = itens.reduce((acc, item) => acc + (item.price * item.quantity), 0)

    const formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    })

    useEffect(() => {
        if (itens.length > 0) {
            setTotalTerm(value + freight);
            setTotalInSight((value + freight) - ((value + freight) * 0.05));
        }else{
            setFreight(0);
            setTotalInSight(0);
            setTotalTerm(0);            
        }
    }, [value])

    return (
        <div className={styles.container}>
            <h1>Carrinho de Compras</h1>
            <div className={styles.content}>
                <div className={styles.cartItens}>
                    <Suspense fallback="Sem itens no carrinho">
                        {
                            itens.map(item => (
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
                        <span>{itens.length > 0 ? formatter.format(value) : formatter.format(0)}</span>
                    </div>
                    <hr />
                    <div>
                        <span>Frete:</span>
                        <span>{formatter.format(freight)}</span>
                    </div>

                    <hr />
                    <div>
                        <span>Total à Prazo:</span>
                        <span>{formatter.format(totalTerm)}</span>
                    </div>
                    <hr />
                    <div>
                        <span>Total à Vista no Pix:</span>
                        <span>{formatter.format(totalInSight)}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}