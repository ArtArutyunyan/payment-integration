import React, {memo} from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import PaymentForm from "../PaymentForm/PaymentForm";
import stripeTestKey from "../../constants/stripeKeys";

import styles from "./StripePayment.module.css";

const promise = loadStripe(stripeTestKey);

type Props = {
  totalSum: number;
  emptyBasket: () => void;
}

const StripePayment = ({totalSum, emptyBasket}: Props) => (
    <div className={styles.stripePayment}>
      <Elements stripe={promise}>
        <PaymentForm emptyBasket={emptyBasket} totalSum={totalSum} />
      </Elements>
    </div>
  );

export default memo(StripePayment);
