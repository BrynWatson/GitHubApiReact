import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";

export default function SearchBar({ setUsers }) {
  const [search, setSearch] = useState("");

  const handleSubmit = async () => {
    console.log("Submitting...");
    const { data } = await axios(
      `https://api.github.com/search/users?q=${search}&page=1&per_page=10`
    );
    setUsers(data.items);
  };
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
      <TextField
        id="outlined-basic"
        label="Search"
        variant="outlined"
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSubmit}>
        Search
      </Button>
    </Box>
  );
}
