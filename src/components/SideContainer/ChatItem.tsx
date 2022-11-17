import { FC } from "react";
import { Avatar, Grid, Typography } from "@mui/material";

export const ChatItem: FC<{
  id: number;
  name: string;
  lastMessage: string;
  time: string;
}> = ({ name, lastMessage, time }) => (
  <Grid
    container
    wrap="nowrap"
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
);
