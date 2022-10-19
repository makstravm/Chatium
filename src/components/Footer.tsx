import { useTranslation } from "react-i18next";
import { Typography } from "@mui/material";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Typography variant="body2" align="center" pt={2} pb={2}>
      © 2022 Chatium. {t("auth.footerText")}
    </Typography>
  );
};

export default Footer;
