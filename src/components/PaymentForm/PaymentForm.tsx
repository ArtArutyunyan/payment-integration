import React, { useState, useEffect, memo } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import paymentIntentUrl from "../../constants/requestUrls";

import styles from './PaymentForm.module.css';

type Props = {
  totalSum: number;
  emptyBasket: () => void;
}

const PaymentForm = ({totalSum, emptyBasket}: Props) => {
  const [succeeded, setSucceeded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState<boolean>(false);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState('');
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    window
      .fetch(paymentIntentUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          items: [{ id: "xl-tshirt"}],
          amount: totalSum
        })
      })
      .then(res => {
        return res.json();
      })
      .then(data => {
        setClientSecret(data[0].clientSecret);
      });
  }, [totalSum]);

  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: 'Arial, sans-serif',
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d"
        }
      },
      invalid: {
        fontFamily: 'Arial, sans-serif',
        color: "#fa755a",
        iconColor: "#fa755a"
      }
    }
  };

  const handleChange = async (event: any) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setProcessing(true);

    const cardElement = elements?.getElement(CardElement);
    if (cardElement) {
      const payload = await stripe?.confirmCardPayment(clientSecret, {
        payment_method: {
            card: cardElement,
        }
      });

      if (payload?.error) {
        setError(`Payment failed ${payload.error.message}`);
        setProcessing(false);
      } else {
        setError(null);
        setProcessing(false);
        setSucceeded(true);
        emptyBasket();
      }
    }
  };

  return (
    <>
    {
      succeeded 
      ? <div className={styles.succesMessage}>
          <img src="/assets/images/success.svg" alt="img" />
          <p>
            Оплата прошла успешно
          </p>
        </div>
      : <form className={styles.paymentForm} onSubmit={handleSubmit}>
          <p>Введите данные карты</p>
          <CardElement
            id="card-element"
            options={cardStyle}
            onChange={handleChange}
            className={styles.cardElement}
          />

          {error && (
            <div className={styles.cardError} role="alert">
              {error}
            </div>
          )}

          {processing
            ? <div className={styles.spinner} id="spinner"></div>
            : <button disabled={processing || disabled || succeeded} id="submit" className={styles.submitButton}>
                Оплатить
              </button>
          }
        </form>
    }
    </>
  );
}

export default memo(PaymentForm);
