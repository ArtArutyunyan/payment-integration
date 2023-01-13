import React, { memo } from "react";

import MobileItem from "../MobileItem/MobilesItem";

import { IMobileItem } from "../../types/productItems";

import styles from './MobilesList.module.css';

type Props = {
  mobiles: Array<IMobileItem>;
  basketStatus: boolean;
  toggleBasketStatus: (basketStatus: boolean) => void;
  addNewProduct: (product: IMobileItem) => void;
}

const MobilesList = ({ mobiles, basketStatus, addNewProduct, toggleBasketStatus }: Props) => {
  return (
    <div className={styles.mobilesList}>
      <div className={styles.mobilesList__title}>
        <h2>Каталог товаров</h2>
        <img
          src="/assets/images/basket.png"
          alt="img"
          onClick={() => toggleBasketStatus(!basketStatus)}
        />
      </div>
      
      <div className={styles.mobileList__items}>
        {mobiles.map((mobile) => (
          <MobileItem
            key={mobile.id}
            mobile={mobile}
            addNewProduct={addNewProduct}
            toggleBasketStatus={toggleBasketStatus}
          />
        ))}
      </div>
    </div>
  );
}

export default memo(MobilesList);