import s from './Modal.module.css';
import colorMaker from '../../js/colorMaker';

export const Modal = ({ text }) => {
  return (
    <div className={s.modal} style={{ backgroundColor: colorMaker() }}>
      <p className={s.text}>{text}</p>
    </div>
  );
};
