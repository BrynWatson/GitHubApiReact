import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
const UserDetail = () => {
  const router = useRouter();
  const { username } = router.query;
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await axios(`https://api.github.com/users/${username}`);
      setUser(data);
    })();
  }, [username]);
  return (
    <Grid container justifyContent="center" alignItems="center  ">
      <Grid item xs={12}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
            height: "100%",
          }}
        >
          <Avatar
            sx={{
              width: "200px",
              height: "200px",
              margin: "10px",
            }}
            src={user.avatar_url}
          ></Avatar>
          <Typography
            sx={{
              fontSize: "2rem",
              fontWeight: "bold",
              margin: "10px",
              textAlign: "center",
            }}
            variant="h4"
          >
            {user.name}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Key</TableCell>
                <TableCell align="right">Value</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  Name
                </TableCell>
                <TableCell align="right">
                  <Box>{`https://api.github.com/users/${username}/name`}</Box>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Login
                </TableCell>
                <TableCell align="right">
                  <Box>{`https://api.github.com/users/${username}/login`}</Box>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Avatar URL
                </TableCell>
                <TableCell align="right">
                  <Box>
                    {`https://api.github.com/users/${username}/avatar_url`}
                  </Box>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Public Repos
                </TableCell>
                <TableCell align="right">
                  <Box>
                    {`https://api.github.com/users/${username}/public_repos`}
                  </Box>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Public Gists
                </TableCell>
                <TableCell align="right">
                  <Box>
                    {`https://api.github.com/users/${username}/public_gists`}
                  </Box>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Followers
                </TableCell>
                <TableCell align="right">
                  <Box>
                    {`https://api.github.com/users/${username}/followers`}
                  </Box>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Following
                </TableCell>
                <TableCell align="right">
                  <Box>
                    {`https://api.github.com/users/${username}/following`}
                  </Box>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default UserDetail;
