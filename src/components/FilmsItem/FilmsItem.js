import s from './FilmsItem.module.css';

export const FilmsItem = ({ title, img }) => {
  return (
    <>
      <img className={s.img} src={`https://image.tmdb.org/t/p/w400/${img}`} />
      <h3 className={s.title}>{title}</h3>
    </>
  );
};
