import { FC, useContext } from "react";
import { Avatar, Grid, Typography } from "@mui/material";
import { ThemeContext } from "context/ThemeContext";
import { CustomScroll } from "../CustomScroll";
import { IChatList } from "src/constants/chatList";

export const ChatList: FC<{ chatList: IChatList }> = ({ chatList }) => {
  const { themeMode } = useContext(ThemeContext);

  return (
    <CustomScroll theme={themeMode} style={{ height: "calc(100vh - 176px)" }}>
      {chatList.map(({ id, name, lastMessage, time }) => (
        <Grid
          container
          wrap="nowrap"
          key={id}
          sx={{ padding: "8px 12px 8px 8px" }}
          alignItems="center"
        >
          <Grid item pr={1}>
            {/* mocked */}
            <Avatar alt={name} src={name} />
          </Grid>
          <Grid
            item
            alignSelf="end"
            sx={{
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
            xs
          >
            <Grid container justifyContent="space-between">
              <Grid item>
                <Typography variant="body1" fontWeight={700} align="left">
                  {name}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="caption">{time}</Typography>
              </Grid>
            </Grid>
            <Typography
              component="div"
              variant="caption"
              fontFamily="cursive"
              sx={{
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {lastMessage}
            </Typography>
          </Grid>
        </Grid>
      ))}
    </CustomScroll>
  );
};
