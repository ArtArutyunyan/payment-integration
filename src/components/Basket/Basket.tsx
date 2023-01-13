import React, { memo, useMemo } from "react";

import BasketItem from "../BasketItem/BasketItem";

import { IBasketItem } from '../../types/productItems';

import styles from './Basket.module.css';

type Props = {
  basket: Array<IBasketItem>
}

const Basket = ({ basket }: Props) => {
  const totalSum = useMemo(() => {
    return basket.reduce((acc, item) => { 
      return item.product.price * item.count + acc;
    }, 0)
  }, [basket]);

  return (
    <div className={styles.basket}>
      {
        !totalSum
          ? <p className={styles.basket__empty}>Нет выбранных товаров</p>
          : <div>
              <h2>Корзина</h2>

              <div className={styles.basket__items}>
                {basket.map((item) => <BasketItem key={item.id} product={item.product} count={item.count} />)}
              </div>

              <p className={styles.basket__totalSum}>
                К оплате:&nbsp;&nbsp;
                <b>{totalSum}&#8381;</b>
              </p>

              <button type="button" onClick={() => console.log(123)}>Оплатить</button>
            </div>
      }
    </div>
  );
}

export default memo(Basket);