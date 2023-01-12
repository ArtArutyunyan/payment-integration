import React, { memo, useState } from "react";

import { IMobileItem } from "../../types/productItems";

import styles from './BasketItem.module.css';

type Props = {
  product: IMobileItem;
}

const BasketItem = ({product: {image, model, price}}: Props) => {
  const [count, editCount] = useState(1);

  return (
    <div className={styles.basketItem}>
      <div className={styles.basketItem__info}>
        <img src={image} alt="img" />
        <div>
          <p>{model}</p>
          <p>{price}&#8381;</p>
          <p>{count} шт.</p>
        </div>
      </div>
    </div>
  );
}

export default memo(BasketItem);