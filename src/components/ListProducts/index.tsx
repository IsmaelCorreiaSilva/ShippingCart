import { useState, useEffect, Suspense } from 'react'
import { Product } from '../../types/ProductType';
import { CardProduct } from '../CardProduct';

import styles from './styles.module.scss'


export function ListProducts(){
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        getProduts();        
    },[])

    async function getProduts(){
        await fetch('/api/products').
        then(res => res.json()).
        then(data => setProducts(data.products))
    }
    //console.log(products)
    return (
        <div className={styles.container}>
            <h1>Lista Produtos</h1>
            <div className={styles.content}>
                <Suspense>
                    {products.map(product =>(
                        <CardProduct key={product.id} data={product}/>
                    ))}
                </Suspense>
            </div>
        </div>

    );
} 