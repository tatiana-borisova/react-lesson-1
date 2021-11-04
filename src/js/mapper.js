export const mapper = films => {
  return films.map(({ id, overview: text, title, backdrop_path: img }) => ({
    id,
    text,
    title,
    img,
  }));
};
