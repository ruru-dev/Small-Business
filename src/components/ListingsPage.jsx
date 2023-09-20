import { Link } from "react-router-dom";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

export default function ListingsPage({user, listings, removeListing}) {
  return (
    <TableContainer sx={{ width: "80%", margin: "20px auto 0 auto" }}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Hours</TableCell>
            <TableCell>Address</TableCell>
            {user && <TableCell>Delete</TableCell>}
          </TableRow>
        </TableHead>
        <TableBody>
          {listings.map((listing) => (
            <TableRow
              key={listing.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Link to={`/listings/${listing.id}`}>{listing.name}</Link>
              </TableCell>
              <TableCell>{listing.description}</TableCell>
              <TableCell>{listing.hours}</TableCell>
              <TableCell>{listing.address}</TableCell>
              {user && (
                <TableCell>
                  <IconButton aria-label="delete" onClick={() => removeListing(listing.id)}>
                    <DeleteIcon color="error" />
                  </IconButton>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
