import { Paper,Box,InputBase,Typography } from "@mui/material";

const MainSearchBar = ({onChange,searchValue}) => {
    const mainSearchBarstyles = {
      mainContainerWrapper: {
        padding: "3px 50px",
        borderRadius: "8px",
      },
      mainContainer: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      },
      inputContainer: {
        maxWidth:"700px",
        width:"100%"
      },
      input: {
        borderRadius: "16px",
      },
    };

    return (
      <>
        <Paper
          component={"div"}
          style={mainSearchBarstyles.mainContainerWrapper}
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
            </Box>
            <Box>
              <Typography component={"h6"} variant="h6">
                Searching For {searchValue}
              </Typography>
              <Typography component={"span"} variant={"span"}>
                48 Results Found
              </Typography>
            </Box>
          </Box>
        </Paper>
      </>
    );
  };

  export default MainSearchBar