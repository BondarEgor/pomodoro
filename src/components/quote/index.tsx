import { useEffect, useState } from "react";
import { getRandomQuote } from "./constants";
import s from "./quote.module.css";

const NEW_QUOTE_INTERVAL = 25_000;

export const Quote = () => {
  const [quote, setQuote] = useState(() => getRandomQuote());

  useEffect(() => {
    const id = setInterval(() => {
      setQuote(getRandomQuote());
    }, NEW_QUOTE_INTERVAL);

    return () => {
      clearInterval(id);
    };
  }, []);

  return <span className={s.text}>{quote}</span>;
};
