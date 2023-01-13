import React, { memo, useState } from "react";

import { IMobileItem } from "../../types/productItems";

import styles from './BasketItem.module.css';

type Props = {
  product: IMobileItem;
  count: number;
}

const BasketItem = ({product: {image, model, price}, count}: Props) => (
    <div className={styles.basketItem}>
      <div className={styles.basketItem__info}>
        <img src={`/assets/images/${image}`} alt="img" />
        <div>
          <p>{model}</p>
          <p>{price}&#8381;</p>
          <p>{count} шт.</p>
        </div>
      </div>
    </div>
  );

export default memo(BasketItem);