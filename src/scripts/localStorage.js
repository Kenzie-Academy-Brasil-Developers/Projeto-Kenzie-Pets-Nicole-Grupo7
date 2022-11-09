export const getUserTokenLocalStorage = () => {
  const userToken = JSON.parse(localStorage.getItem("@kenzieAdopt:User"));

  return userToken;
};
