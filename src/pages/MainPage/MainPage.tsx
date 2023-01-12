import React, { useState, memo }  from "react";

import MobilesList from "../../components/MobilesList/MobilesList";
import Basket from "../../components/Basket/Basket";

import { IMobileItem } from '../../types/productItems';

import pink13 from '../../assets/images/pink13.png';
import red12 from '../../assets/images/red12.png';
import silver14 from '../../assets/images/silver14.png';
import black13 from '../../assets/images/black13.png';
import black13pro from '../../assets/images/black13pro.png';
import styles from './MainPage.module.css';

const MainPage = () => {
  const mobiles = [
    {
      id: 1,
      image: pink13,
      model: "iPhone 13",
      price: 99000,
      memory: "128Gb",
      color: "Pink"
    },
    {
      id: 2,
      image: red12,
      model: "iPhone 12",
      price: 79000,
      memory: "128Gb",
      color: "Red"
    },
    {
      id: 3,
      image: silver14,
      model: "iPhone 14 Pro",
      price: 129000,
      memory: "256Gb",
      color: "Silver"
    },
    {
      id: 4,
      image: black13,
      model: "iPhone 13",
      price: 89000,
      memory: "256Gb",
      color: "Black"
    },
    {
      id: 5,
      image: black13pro,
      model: "iPhone 13 Pro Max",
      price: 109000,
      memory: "128Gb",
      color: "Black"
    },
    {
      id: 6,
      image: red12,
      model: "iPhone 11 Pro",
      price: 119000,
      memory: "512Gb",
      color: "Red"
    }
  ]

  const [basketStatus, toggleBasketStatus] = useState<boolean>(false);
  const [basket, editBasket] = useState<IMobileItem[]>([]);

  const addNewProduct = (product: IMobileItem) => {
    basket.push(product);
  }

  return (
    <main className={styles.mainPage}>
      <MobilesList
        mobiles={mobiles}
        basketStatus={basketStatus}
        toggleBasketStatus={toggleBasketStatus}
        addNewProduct={addNewProduct}
      />
      {basketStatus && <Basket basket={basket} />}
    </main>
  );
}

export default memo(MainPage);