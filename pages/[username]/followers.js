import { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Avatar from "@mui/material/Avatar";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import axios from "axios";
import Link from "next/Link";
import { useRouter } from "next/router";
export default function Followers() {
  const [users, setUsers] = useState([])
  const router = useRouter();
  const { username } = router.query;
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://api.github.com/users/${username}/followers`
      );
      setUsers(data);
    })();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Index</TableCell>
            <TableCell align="right">Username</TableCell>
            <TableCell align="right">User Type</TableCell>
            <TableCell align="right">Profile</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users &&
            users.map((user, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="right">{user.login}</TableCell>
                <TableCell align="right">{user.type}</TableCell>
                <TableCell align="right">
                  <Avatar
                    src={user.avatar_url}
                    sx={{ width: 25, height: 25 }}
                  />
                </TableCell>
                <TableCell align="right">
                  <Link href={`/${user.login}`}>
                    <ArrowRightAltIcon />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
