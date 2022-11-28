import { getAccountInfoApi, updateTokenApi } from "api/user";

export const getAccountInfo = async () => {
  try {
    const token = sessionStorage?.token || localStorage?.token;

    const {
      data: { id_token: idToken },
    } = await updateTokenApi(token);

    const { data } = await getAccountInfoApi({ idToken });

    return data.users[0];
  } catch (e) {
    return null; // TODO  implement notifications for users about errors
  }
};
