import { Avatar, Box, Grid, Typography } from "@mui/material";
// this constant is mocked
const chatsList = [
  {
    id: 1,
    name: "Vika",
    lastMessage: "Don't remember to buy tea",
    time: "time",
  },
  { id: 2, name: "Alena", lastMessage: "I'm waiting you", time: "time" },
  {
    id: 14655,
    name: "John",
    lastMessage: "Don't remember to buy tea",
    time: "time",
  },
  {
    id: 2567,
    name: "Arestovich",
    lastMessage: "I'm waiting you",
    time: "time",
  },
  {
    id: 35645,
    name: "Bob",
    lastMessage: "Let's go to pub.I treat you today",
    time: "time",
  },
  {
    id: 134543,
    name: "Vika",
    lastMessage: "Don't remember to buy tea",
    time: "time",
  },
  { id: 2234, name: "Alena", lastMessage: "I'm waiting you", time: "time" },
  {
    id: 32324543637357,
    name: "Sash",
    lastMessage: "Let's go to pub.I treat you today",
    time: "time",
  },
  {
    id: 123413634657353,
    name: "Dima",
    lastMessage: "Don't remember to buy tea",
    time: "time",
  },
  { id: 21234678, name: "Pivo", lastMessage: "I'm waiting you", time: "time" },
  {
    id: 382135378,
    name: "Bob",
    lastMessage: "Let's go to pub.I treat you today",
    time: "time",
  },
  {
    id: 1234346547,
    name: "Kaban",
    lastMessage: "Don't remember to buy tea",
    time: "time",
  },
  { id: 223377, name: "Muha", lastMessage: "I'm waiting you", time: "time" },
  {
    id: 32342367,
    name: "Bob",
    lastMessage: "Let's go to pub.I treat you today",
    time: "time",
  },
  {
    id: 123426,
    name: "Kabina",
    lastMessage: "Don't remember to buy tea",
    time: "time",
  },
  { id: 2324267, name: "Alena", lastMessage: "I'm waiting you", time: "time" },
  {
    id: 3234672,
    name: "Mask",
    lastMessage: "Let's go to pub.I treat you today",
    time: "time",
  },
] as const;

export const ChatsList = () => (
  <Box sx={{ "overflow-y": "scroll", height: "calc(100vh - 176px)" }}>
    {chatsList.map(({ id, name, lastMessage, time }) => (
      <Grid container wrap="nowrap" key={id} pt={1} pb={1} alignItems="center">
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
  </Box>
);
