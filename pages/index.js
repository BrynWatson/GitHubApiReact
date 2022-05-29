import { useState, useEffect } from "react";
import UserList from "../components/UserList";
import SearchBar from "../components/SearchBar";
import Grid from "@mui/material/Grid";
import axios from "axios";
export default function Home() {
  const [users, setUsers] = useState([]);

  return (
    <Grid container direction="row" justifyContent="center">
      <Grid item xs={12}>
        <SearchBar setUsers={setUsers} />
      </Grid>
      <Grid item xs={6}>
        <UserList users={users} setUsers={setUsers} />
      </Grid>
    </Grid>
  );
}
