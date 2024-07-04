import { useReducer } from 'react';
import imgProduct from '../../assets/image/smart tv.webp'
import styles from './styles.module.scss'

import { IoCloseSharp } from "react-icons/io5";
import { FaPlus, FaMinus } from "react-icons/fa";

type State = {
    count: number;
}

type Action = | {type: 'increment'} | { type: 'decrement'};

function reducer(state:State, action:Action){
    switch(action.type){
        case 'increment':
            return {count: state.count + 1}
        case 'decrement':
            return state.count === 1 ? {count:state.count} : {count: state.count - 1}
    }
}

const initializeState = { count: 1}

export function CartItem() {

    const [state, dispatch] = useReducer(reducer, initializeState);

    return (
        <div className={styles.container}>
            <img src={imgProduct} alt="" />
            <span className={styles.infoProduct}>Dados do produto da loja X Dados do produto da loja X</span>
            <button onClick={() => dispatch({type:'decrement'})}>
                <FaMinus className={styles.iconControls} />
            </button>
            <input type="number" value={state.count} />
            <button onClick={() => dispatch({type:'increment'})}>
                <FaPlus className={styles.iconControls} />
            </button>
            <span>{
                    new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(5000)
                }</span>
            <button
                type="button"
            >
                <IoCloseSharp  className={styles.iconClose}/>
            </button>
        </div>
    );
}