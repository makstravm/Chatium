import { Grid, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export const ChatListIsEmpty = () => {
  const { t } = useTranslation();

  return (
    <Grid container alignItems="center" justifyContent="center" height="100%">
      <Typography variant="body1">
        {t(`sideContainer.chatListIsEmpty`)}
      </Typography>
    </Grid>
  );
};
