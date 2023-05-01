import { MenuOpen } from "@mui/icons-material";
import {
  Paper,
  Box,
  InputBase,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const MainSearchBar = ({ onChange, searchValue, resultsFoundValue,handleMobileMenu }) => {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  const mainSearchBarstyles = {
    mainContainerWrapper: {
      p: mobile ? 1 : 2,
      borderRadius: "8px",
    },
    mainContainer: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: mobile && "column",
      alignItems: mobile ? "start" : "center",
    },
    inputContainer: {
      maxWidth: "700px",
      width: "100%",
      display: mobile && "flex",
    },
    input: {
      borderRadius: "16px",
    },
  };

  return (
    <>
      <Paper
        component={"div"}
        sx={mainSearchBarstyles.mainContainerWrapper}
        elevation={1}
      >
        <Box component={"div"} sx={mainSearchBarstyles.mainContainer}>
          <Box component={"div"} sx={mainSearchBarstyles.inputContainer}>
            {/* <TextField style={mainSearchBarstyles.input} fullWidth label="fullWidth" id="fullWidth" />  */}
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search For Products"
              inputProps={{ "aria-label": "search google maps" }}
              fullWidth
              onChange={onChange}
              value={searchValue}
              // style={{border:"1px solid red"}}
            />
            {mobile && <MenuOpen onClick={handleMobileMenu} sx={{ alignSelf: "flex-end" }} />}
          </Box>
          <Box>
            {searchValue !== "" && (
              <>
                <Typography component={"h6"} variant="h6">
                  Searching For {searchValue}
                </Typography>
                <Typography component={"span"} variant={"span"}>
                  {resultsFoundValue} Results Found
                </Typography>
              </>
            )}
          </Box>
        </Box>
      </Paper>
    </>
  );
};

export default MainSearchBar;
