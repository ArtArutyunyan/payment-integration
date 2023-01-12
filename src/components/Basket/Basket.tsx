import React, { memo, useMemo } from "react";

import BasketItem from "../BasketItem/BasketItem";

import { IMobileItem } from '../../types/productItems';

import styles from './Basket.module.css';

type Props = {
  basket: Array<IMobileItem>
}

const Basket = ({ basket }: Props) => {
  const totalSum = useMemo(() => {
    return basket.reduce((acc, product) => { 
      return product.price + acc;
    }, 0)
  }, [basket]);

  return (
    <div className={styles.basket}>
      <h2>Корзина</h2>

      <div className={styles.basket__items}>
        {basket.map((item) => <BasketItem key={item.id} product={item} />)}
      </div>

      <p className={styles.basket__totalSum}>
        К оплате:&nbsp;&nbsp;
        <b>{totalSum}&#8381;</b>
      </p>

      <button type="button" onClick={() => console.log(123)} disabled={!totalSum}>Оплатить</button>
    </div>
  );
}

export default memo(Basket);