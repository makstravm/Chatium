export const saveTokenInStorage = (
  isSaveLocalStorage: boolean,
  token: string
) => {
  if (!isSaveLocalStorage) {
    return sessionStorage.setItem("token", token);
  }

  return localStorage.setItem("token", token);
};

export const getToken = () =>
  sessionStorage?.token || localStorage?.token || null;
