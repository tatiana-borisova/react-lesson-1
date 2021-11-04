import { FilmsItem } from '../FilmsItem/FilmsItem';
import s from './FilmsList.module.css';
import colorMaker from '../../js/colorMaker';

export const FilmsList = ({ onText, data }) => {
  return (
    <ul className={s.list}>
      {data.map(({ id, text, title, img }) => {
        return (
          <li
            key={id}
            className={s.item}
            style={{ backgroundColor: colorMaker() }}
            onClick={() => onText(text)}
          >
            <FilmsItem text={text} title={title} img={img} />
          </li>
        );
      })}
    </ul>
  );
};
