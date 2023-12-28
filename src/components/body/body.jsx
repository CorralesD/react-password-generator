import { generatePassword } from '../../lib/password';
import s from './style.module.css';

const Body = (props) => {
  const submit = (event) => {
    event.preventDefault();
    let formData = {};
    new FormData(event.currentTarget).forEach((value, key) => {
      formData[key] = value;
    });
    props.onSubmit(generatePassword(formData));
  };

  return (
    <form onSubmit={submit} className={s.card_main}>
      <div className={s.grid_container}>
        <div className={s.grid_item}>
          Size
          <select name='size' defaultValue={15}>
            <option>5</option>
            <option>10</option>
            <option>15</option>
            <option>20</option>
          </select>
        </div>
        <div className={s.grid_item}>
          Uppercase
          <input
            name='uppercase'
            className={s.input_text}
            type='checkbox'
            defaultChecked
          />
        </div>
        <div className={s.grid_item}>
          Numbers
          <input
            name='number'
            className={s.input_text}
            type='checkbox'
            defaultChecked
          />
        </div>
        <div className={s.grid_item}>
          Special Characters
          <input
            name='character'
            className={s.input_text}
            type='checkbox'
            defaultChecked
          />
        </div>
      </div>
      <div className={s.btn_box}>
        <button type='submit' className={s.btn_generate}>
          GENERATE
        </button>
      </div>
    </form>
  );
};

export default Body;
