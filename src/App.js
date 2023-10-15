import "./App.css";
import css from "./App.module.css";
import InputUI from "./components/UI/InputUI";
import ButtonUI from "./components/UI/ButtonUI";
import { useState } from "react";
import InputRangeUI from "./components/UI/InputRangeUI";

function App() {
  const [sum, setSum] = useState(4467313);
  const [payment, setPayment] = useState(10);
  const [form, setForm] = useState({
    price: 3300000,
    initial: 10,
    months: 60,
  });

  const changeHandler = (event) => {
    console.log({ ...form, [event.target.name]: event.target.value });
    setForm({ ...form, [event.target.name]: event.target.value });
    
    const monthPay = (form.price - (form.initial * form.price / 100)) * ((0.035 * Math.pow((1 + 0.035), form.months)) / (Math.pow((1 + 0.035), form.months) - 1))
    setPayment(monthPay)
    console.log(monthPay);

    const sumPay = form.months * monthPay + (form.initial * form.price / 100)
    setSum(sumPay)
    console.log(sumPay);

    // let Первоначальный взнос + Срок кредита в месяцах * Ежемесячный платеж
  };

  const formatNumber = (number) => number.toLocaleString("ru-RU");

  const handler = (form) => {};

  return (
    <div className={css.app}>
      <header className={css.header}>
        <h1>Рассчитайте стоимость автомобиля в лизинг</h1>
      </header>
      <div className={css.body}>
        <div>
          <div className={css.description}>Стоимость автомобиля</div>
          <InputUI
            onChange={changeHandler}
            value={formatNumber(form.price)}
            type="text"
            id={form.price}
            name="price"
            // disabled={disabled}
            placeholder=" "
            holder={<div className={css.holerRuble}>₽</div>}
          />

          <InputRangeUI
            onChange={changeHandler}
            value={formatNumber(form.price)}
            type="range"
            id={form.price}
            name="price"
            // disabled={disabled}
            min="1000000"
            max="6000000"
            step="1"
          />
        </div>
        <div>
          <div className={css.description}>Первоначальный взнос</div>
          <InputUI
            onChange={changeHandler}
            value={formatNumber((form.initial * form.price / 100).toFixed())}
            type="text"
            id={form.initial}
            name="initial"
            // disabled={disabled}
            placeholder=" "
            holder={<div className={css.holerPercent}>{formatNumber(form.initial)}%</div>}
          />
          <InputRangeUI
            onChange={changeHandler}
            value={formatNumber(form.initial)}
            type="range"
            id={form.initial}
            name="initial"
            // disabled={disabled}
            min="10"
            max="60"
            step="1"
          />
        </div>
        <div>
          <div className={css.description}>Срок лизинга</div>
          <InputUI
            onChange={changeHandler}
            value={formatNumber(form.months)}
            type="text"
            id={form.months}
            name="months"
            // disabled={disabled}
            placeholder=" "
            holder={<div className={css.holerText}>мес.</div>}
          />
          <InputRangeUI
            onChange={changeHandler}
            value={formatNumber(form.months)}
            type="range"
            id={form.months}
            name="months"
            // disabled={disabled}
            min="1"
            max="60"
            step="1"
          />
        </div>
      </div>
      <footer className={css.footer}>
        <div>
          <div className={css.description}>Сумма договора лизинга</div>
          <div className={css.number}>{formatNumber(sum)} ₽</div>
        </div>
        <div>
          <div className={css.description}>Ежемесячный платеж от</div>
          <div className={css.number}>{formatNumber(payment)} ₽</div>
        </div>
        <div>
          <ButtonUI>Оставить заявку</ButtonUI>
        </div>
      </footer>
      <p>
      (Стоимость автомобиля - Первоначальный взнос) * ((Процентная ставка * (1 + Процентная ставка)^Срок кредита в месяцах) / ((1 + Процентная ставка)^Срок кредита в месяцах - 1)) 
<br/>
const monthPay = (price - initial) * ((0.035 * Math.pow((1 + 0.035), months)) / (Math.pow((1 + 0.035), months) - 1));
      </p>
    </div>
  );
}

export default App;
