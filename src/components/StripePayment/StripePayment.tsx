import React, {memo} from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import PaymentForm from "../PaymentForm/PaymentForm";

import styles from "./StripePayment.module.css";

const promise = loadStripe("pk_test_51MPmszHcNnwerndIg0OWihBHDfkfVde886x2OJIMFnIVtMRcEntWATvh1TfsKzrp6wCCucNDGdXZPwK67AsSLwIJ00TbW0XkAw");

type Props = {
  totalSum: number;
  emptyBasket: () => void;
}

const StripePayment = ({totalSum, emptyBasket}: Props) => {
  return (
    <div className={styles.stripePayment}>
      <Elements stripe={promise}>
        <PaymentForm emptyBasket={emptyBasket} totalSum={totalSum} />
      </Elements>
    </div>
  );
}

export default memo(StripePayment);
