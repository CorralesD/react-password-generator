import s from './style.module.css';
import Header from '../header/header';
import Body from '../body/body';
import Footer from '../footer/footer';
import { useState } from 'react';

const Card = () => {
  const [password, setPassword] = useState('');
  return (
    <div className={s.card}>
      <div className={s.main}>
        <Header />
        <Body onSubmit={setPassword} />
      </div>
      <Footer password={password} />
    </div>
  );
};

export default Card;
