import s from './style.module.css';
import lockIcon from '../../assets/lock.svg';

const Header = () => {
  return (
    <div className={s.header}>
      <div>Header</div>
      <img className={s.icon} src={lockIcon} />
    </div>
  );
};

export default Header;
