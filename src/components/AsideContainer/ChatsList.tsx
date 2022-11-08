import { Avatar, Box, Grid, Typography } from "@mui/material";

const chatsList = [
  { id: 1, name: "Vika", lastMessage: "Don't remember to buy tea" },
  { id: 2, name: "Alena", lastMessage: "I'm waiting you" },
  { id: 3, name: "Bob", lastMessage: "Let's go to pub.I treat you today" },
] as const;

export const ChatsList = () => (
  <div>
    {chatsList.map(({ id, name, lastMessage }) => (
      <Box key={id} pt={1} pb={1}>
        <Grid container alignItems="center">
          <Grid item pr={1}>
            {/* mocked */}
            <Avatar alt={name} src={name} />
          </Grid>
          <Grid item xs="auto" alignSelf="end">
            <Typography
              variant="body1"
              fontWeight={700}
              align="left"
              lineHeight=".7rem"
            >
              {name}
            </Typography>
            <Typography
              variant="caption"
              fontFamily="cursive"
              lineHeight=".3rem"
            >
              {lastMessage}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    ))}
  </div>
);
