import { FirebaseError } from "firebase/app";

export const handlerErrorMessage = (errorMessage: FirebaseError) => {
  const message = errorMessage.code.split("/");

  const reformMessege = message[1].split("-").join(" ");

  const result = [
    reformMessege.charAt(0).toUpperCase(),
    reformMessege.slice(1),
  ].join("");

  return result;
};

export default handlerErrorMessage;
