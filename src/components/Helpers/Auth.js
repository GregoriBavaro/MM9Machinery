export const getAuthToken = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  return token;
};

export const tokenLoader = () => {
  return getAuthToken;
};
