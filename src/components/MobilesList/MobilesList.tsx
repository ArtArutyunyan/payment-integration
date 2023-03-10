import React, { memo } from "react";

import MobileItem from "../MobileItem/MobilesItem";

import { IBasketItem } from "../../types/BasketItemInterface";
import { IMobileItem } from "../../types/MobileItemInterface";

import styles from './MobilesList.module.css';

type Props = {
  basket: Array<IBasketItem>;
  mobiles: Array<IMobileItem>;
  basketStatus: boolean;
  toggleBasketStatus: (basketStatus: boolean) => void;
  addNewProduct: (product: IMobileItem) => void;
}

const MobilesList = ({ basket, mobiles, basketStatus, addNewProduct, toggleBasketStatus }: Props) => {
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
            basket={basket}
          />
        ))}
      </div>
    </div>
  );
}

export default memo(MobilesList);