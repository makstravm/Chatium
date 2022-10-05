import { FirebaseError } from "firebase/app";

export const handlerErrorMessage = (errorMessage: FirebaseError) => {
  const message = errorMessage.code.split("/");

  const result = message[1].split("-").join(" ");

  return result;
};

export default handlerErrorMessage;
