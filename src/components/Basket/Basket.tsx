import React, { memo, useMemo, useState } from "react";

import BasketItem from "../BasketItem/BasketItem";

import { IBasketItem } from '../../types/productItems';

import styles from './Basket.module.css';
import StripePayment from "../StripePayment/StripePayment";

type Props = {
  basket: Array<IBasketItem>;
  emptyBasket: () => void
}

const Basket = ({ basket, emptyBasket }: Props) => {
  const [paymentModalStatus, setPaymentModalStatus] = useState<boolean>(false);

  const totalSum = useMemo(() => {
    return basket.reduce((acc, item) => { 
      return item.product.price * item.count + acc;
    }, 0)
  }, [basket]);

  const handlePaymentModalStatusButton = () => {
    setPaymentModalStatus(!paymentModalStatus);
  }

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

              <button
                type="button"
                onClick={() => handlePaymentModalStatusButton()}
                className={styles.paymentButton}
              >
                Перейти к оплате
              </button>
            </div>
      }
      {
        paymentModalStatus && 
          <div className={styles.paymentModal}>
            <button className={styles.closeButton} onClick={() => handlePaymentModalStatusButton()}>Закрыть</button>
            <StripePayment
              emptyBasket={emptyBasket}
              totalSum={totalSum}
            />
          </div>
      }
    </div>
  );
}

export default memo(Basket);