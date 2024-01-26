import { createTheme } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
// Create a theme instance.

const NAV_BAR_WIDTH = "64px";
const ASIDE_CHAT_WIDTH = "334px";
const BOARD_CONTENT_CHAT_WIDTH = "726px";
const ASIDE_INFO_WIDTH = "334px";
const Height_Search = "64px"
const Height_List = `calc(100vh - ${Height_Search})`
const theme = extendTheme({
  zalo: {
    navWidth: NAV_BAR_WIDTH,
    asideChatWidth: ASIDE_CHAT_WIDTH,
    asideInfoWidth: ASIDE_INFO_WIDTH,
    boardContentChat: BOARD_CONTENT_CHAT_WIDTH,

    heightSearch: Height_Search,
    heightList: Height_List
  },
  // palette: {
  //   primary: {
  //     main: "#556cd6",
  //   },
  //   secondary: {
  //     main: "#19857b",
  //   },
  //   error: {
  //     main: red.A400,
  //   },
  // },
  colorSchemes: {
    //
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});

export default theme;
