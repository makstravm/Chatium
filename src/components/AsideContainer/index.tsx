import {
  Box,
  Divider,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ChatsList } from "./ChatsList";

export const AsideContainer = () => (
  <Box p={1} pr={0} sx={{ overflow: "hidden" }}>
    <Box pb={1} pr={1}>
      <Typography variant="h6" component="h6" fontWeight={700} align="left">
        Chats
      </Typography>
      <OutlinedInput
        size="small"
        fullWidth
        placeholder="Search"
        startAdornment={
          <InputAdornment position="start">
            <SearchIcon fontSize="small" />
          </InputAdornment>
        }
      />
    </Box>
    <Divider />
    <ChatsList />
  </Box>
);
