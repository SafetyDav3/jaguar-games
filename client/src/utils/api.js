export const topTen = () => {
  return fetch(
    `https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_SECRET}&page=1&page_size=10`
  );
};

export const searchGame = (searchTerm) => {
    return fetch(
        `https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_SECRET}&page=1&page_size=10&search=${searchTerm}`
    );
}
