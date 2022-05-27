import UserList from "../components/UserList";
import SearchBar from "../components/SearchBar";
import Grid from "@mui/material/Grid";
export default function Home() {
  return (
    <Grid container direction="row" justifyContent="center">
      <Grid item xs={12} >
        <SearchBar />
      </Grid>
      <Grid item xs={6}>
        <UserList />
      </Grid>
    </Grid>
  );
}
