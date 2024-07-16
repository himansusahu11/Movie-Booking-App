export const isUserLoggedIn = () => {
  const email = localStorage.getItem("email");
  const accessToken = localStorage.getItem("token");

  const isLoggedIn = email && accessToken;
  return isLoggedIn;
};

export const getUserName = () => {
  const name = localStorage.getItem("name");

  return name;
};
