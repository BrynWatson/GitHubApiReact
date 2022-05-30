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
export default function Gists() {
  const [gists, setGists] = useState([])
  const router = useRouter();
  const { username } = router.query;
  const getGistFileName = (gist) => {
    return Object.keys(gist.files)[0]
  }
  useEffect(() => {
    (async () => {
      const { data } = await axios.get(
        `https://api.github.com/users/${username}/gists`
      );
      setGists(data);
    })();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Index</TableCell>
            <TableCell align="right">File Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {gists &&
            gists.map((gist, index) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {index + 1}
                </TableCell>
                <TableCell align="right">{getGistFileName(gist)}</TableCell>
              
            
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
