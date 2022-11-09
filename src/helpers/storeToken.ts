export const setTokenInStorage = (
  isSetTokenInLocalStorage: boolean,
  token: string
) => {
  if (!isSetTokenInLocalStorage) {
    return sessionStorage.setItem("token", token);
  }

  return localStorage.setItem("token", token);
};

export const getToken = () =>
  sessionStorage?.token || localStorage?.token || null;
