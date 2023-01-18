import React, { memo, useState, useEffect } from "react";

import { IMobileItem, IBasketItem } from "../../types/productItems";

import styles from './MobileItem.module.css';

type Props = {
  basket: Array<IBasketItem>;
  mobile: IMobileItem;
  addNewProduct: (product: IMobileItem) => void;
  toggleBasketStatus: (basketStatus: boolean) => void;
}

const MobileItem = ({
  mobile, mobile: { image, model, price, memory },
  basket,
  addNewProduct,
  toggleBasketStatus
}: Props) => {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if(!basket.length) setCount(0);
    basket.forEach(item => {
      if(item.id === mobile.id) setCount(item.count)
    });
  }, [basket, mobile.id]);

  const handleButton = () => {
    addNewProduct(mobile);
    toggleBasketStatus(false);
  }

  return (
    <div className={styles.mobileItem}>
      <img src={`/assets/images/${image}`} alt="img" />
      <div className={styles.mobileItem__info}>
        <p>Model: <span>{model}</span></p>
        <p>Memory: <span>{memory}</span></p>
        <p>Price: <span>{price}&#8381;</span></p>
      </div>

      <button type="button" onClick={handleButton}>
        {!count ? "В корзину" : `В корзине ${count} шт.`}
      </button>
    </div>
  );
}

export default memo(MobileItem);