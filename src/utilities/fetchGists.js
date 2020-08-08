export const fetchList = async (username) => {
  return await fetch(
    `https://api.github.com/users/${username}/gists`
  ).then((res) => res.json());
};

export const fetchDetails = async (id) => {
  return await fetch(`https://api.github.com/gists/${id}`).then((res) =>
    res.json()
  );
};
