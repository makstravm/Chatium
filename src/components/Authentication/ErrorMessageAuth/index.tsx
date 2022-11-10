import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Alert } from "@mui/material";
import { IErrorMessage } from "types";
import style from "./ErrorMessageAuth.module.scss";

export const ErrorMessage: FC<IErrorMessage> = ({ errorMessage }) => {
  const { t } = useTranslation();

  const handlerErrorMessage = () => {
    if (errorMessage.includes(" ")) {
      return errorMessage.split(" ").join("_").toLowerCase();
    }

    return errorMessage.toLowerCase();
  };

  return (
    <Alert variant="outlined" severity="error">
      <div className={style.errorMessage}>
        {t(`auth.serverError.${handlerErrorMessage()}`)}
      </div>
    </Alert>
  );
};
