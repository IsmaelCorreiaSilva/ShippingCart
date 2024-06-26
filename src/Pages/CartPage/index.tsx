import styles from './styles.module.scss'


export function CartPage() {
    return (
        <div className={styles.container}>
            <h1>Carrinho de Compras</h1>
            <div className={styles.content}>
                <div className={styles.cartItens}>
                    <span>Itens carrinho</span>
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