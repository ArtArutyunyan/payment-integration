import React, { useState, memo }  from "react";

import MobilesList from "../../components/MobilesList/MobilesList";
import Basket from "../../components/Basket/Basket";

import { IMobileItem, IBasketItem } from '../../types/productItems';

import mobiles from "../../constants/mockData";

import styles from './MainPage.module.css';

const MainPage = () => {
  const [basketStatus, toggleBasketStatus] = useState<boolean>(false);
  const [basket, setBasket] = useState<IBasketItem[]>([]);

  const addNewProduct = (product: IMobileItem) => {
    const itemInBasket = basket.find(item => item.id === product.id);
    if(!itemInBasket){
      const basketItem = {
        id: product.id,
        product: product,
        count: 1,
      }
      setBasket((prevState) => [...prevState, basketItem]);
    }else{
      const updatedBasket = basket.map((item) => {
        if(item.id === itemInBasket.id) {
          return {...item, count: item.count + 1}
        }
        return item;
      })
      setBasket(updatedBasket);
    }
  }

  const emptyBasket = () => {
    setBasket([]);
    setTimeout(() => toggleBasketStatus(false), 2000);
  }

  return (
    <main className={styles.mainPage}>
      <MobilesList
        mobiles={mobiles}
        basketStatus={basketStatus}
        toggleBasketStatus={toggleBasketStatus}
        addNewProduct={addNewProduct}
      />
      {basketStatus && <Basket basket={basket} emptyBasket={emptyBasket} />}
    </main>
  );
}

export default memo(MainPage);