import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Alert } from "@mui/material";
import { IErrorMessage } from "types";
import style from "./ErrorMessage.module.scss";

export const ErrorMessage: FC<IErrorMessage> = ({ errorMessage }) => {
  const { t } = useTranslation();

  const keyCode = errorMessage.code.split("/")[1];

  return (
    <Alert variant="outlined" severity="error">
      <div className={style.errorMessage}>
        {t(`auth.serverError.${keyCode}`)}
      </div>
    </Alert>
  );
};

export default ErrorMessage;
