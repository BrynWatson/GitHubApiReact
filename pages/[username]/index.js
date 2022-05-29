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
import Link from "next/link";
import Image from "next/image";
const UserDetail = () => {
  const router = useRouter();
  // username variable
  const { username } = router.query;
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  // Sends a http request on load and when the username variable has been populated.
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
                  <Typography variant="h6">{user.name}</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Login
                </TableCell>
                <TableCell align="right">
                  <Typography variant="h6">{user.login}</Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  Avatar URL
                </TableCell>
                <TableCell align="right">
                  <Box>
                    {user.avatar_url && (
                      <Image
                        src={user.avatar_url}
                        alt={user.name}
                        width="50px"
                        height="50px"
                        sx={{
                          borderRadius: "50%",
                        }}
                      />
                    )}
                  </Box>
                </TableCell>
              </TableRow>
              <Link href={`/${username}/repos`}>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Public Repos
                  </TableCell>
                  <TableCell align="right">
                    <Box>
                      <Typography variant="h6">{user.public_repos}</Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              </Link>
              <Link href={`/${username}/gists`}>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Public Gists
                  </TableCell>
                  <TableCell align="right">
                    <Box>
                      <Typography variant="h6">{user.public_gists}</Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              </Link>
              <Link href={`/${username}/followers`}>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Followers
                  </TableCell>
                  <TableCell align="right">
                    <Box>
                      <Typography variant="h6">{user.followers}</Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              </Link>
              <Link href={`/${username}/following`}>
                <TableRow>
                  <TableCell component="th" scope="row">
                    Following
                  </TableCell>
                  <TableCell align="right">
                    <Box>
                      <Typography variant="h6">{user.following}</Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              </Link>
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </Grid>
  );
};

export default UserDetail;
