import s from './style.module.css';
import icon from '../../assets/copy-paste.svg';

const Footer = (props) => {
  const saveInClipboard = () => {
    navigator.clipboard.writeText(props.password);
  };
  return (
    <div className={s.card_footer} onClick={saveInClipboard}>
      <div>{props.password}</div>
      <img className={s.icon} src={icon} alt='Copy Paste Icon' />
    </div>
  );
};

export default Footer;
