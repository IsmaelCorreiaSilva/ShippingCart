import { Suspense, useEffect, useState } from "react";
import { CardProduct } from "../../components/CardProduct";
import styles from './styles.module.scss'
import { Product } from "../../types/ProductType";



export function ListProductsPage() {

    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {

        fetch('http://localhost:3000/products').
        then(res => res.json()).
        then(data => setProducts(data))
        
    },[])
    console.log(products)
    return (
        <div className={styles.container}>
            <h1>Lista Produtos</h1>
            <div className={styles.content}>
                <Suspense>
                    {products.map(product =>(
                        <CardProduct data={product}/>
                    ))}
                </Suspense>
            </div>
        </div>

    );
}