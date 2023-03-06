import { redirect } from "react-router-dom";
export function getTokenDuration() {
  const storedExpirationDate = localStorage.getItem("expiration");
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const durationInMilliseconds = expirationDate.getTime() - now.getTime();

  return durationInMilliseconds;
}

export const getAuthToken = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }
  const tokenDuration = getTokenDuration();
  if (tokenDuration < 0) {
    return "EXPIRED";
  }
  return token;
};

export const tokenLoader = () => {
  return getAuthToken();
};

//check autLoader
export function checkAuthLoader() {
  const token = getAuthToken();
  if (!token) {
    return redirect("/master-admin-login");
  }
  return null;
}
