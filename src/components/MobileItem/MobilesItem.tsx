import React from "react";

import { IMobileItem } from "../../types/productItems";

import styles from './MobileItem.module.css';

type Props = {
  mobile: IMobileItem;
  addNewProduct: (product: IMobileItem) => void;
}

const MobileItem = ({ mobile, mobile: { image, model, price, memory }, addNewProduct }: Props) => {
  const handleButton = () => {
    addNewProduct(mobile);
  }

  return (
    <div className={styles.mobileItem}>
      <img src={image} alt="img" />
      <div className={styles.mobileItem__info}>
        <p>Model: <span>{model}</span></p>
        <p>Memory: <span>{memory}</span></p>
        <p>Price: <span>{price}&#8381;</span></p>
      </div>
      <button type="button" onClick={() => handleButton()}>В корзину</button>
    </div>
  );
}

export default MobileItem;