import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
export default function SearchBar() {
  return (
    <Box
      component="form"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Search" variant="outlined" />
      <Button variant="contained">Search</Button>
    </Box>
  );
}
