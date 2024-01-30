import Box from "@mui/material/Box";

import Search from "./Search/Search";
import ListUser from "./ListUser/ListUser";
import theme from "../../../../theme";

const ChatHome = ({ chat }) => {
  return (
    <Box
      sx={{
        height: "100vh",
        width: (theme) => theme.zalo.asideChatWidth,
      }}
    >
      <Search sx={{ height: (theme) => theme.zalo.heightSearch }} />
      <ListUser users={chat?.[0]?.users}/>;
    </Box>
  );
};

export default ChatHome;
