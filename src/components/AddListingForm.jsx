import { useState } from "react";
import { useNavigate } from "react-router";
import { Container, Box, Typography, TextField, Button } from "@mui/material";
import ListingMap from "./ListingMap";

export default function AddListingForm({addListing}) {
  const navigate = useNavigate();
  
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [hours, setHours] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addListing({name, description, hours, address});
    navigate('/');
  }

  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          columnGap: "25px",
          marginTop: 5,
        }}
      >
        <Box>
          <Typography variant="h5">Add New Listing</Typography>
          <form onSubmit={handleSubmit} class="standard-form">
            <TextField
              required
              label="Name"
              variant="standard"
              onChange={(e) => setName(e.target.value)}
              type="text"
            />
            <TextField
              required
              label="Address"
              variant="standard"
              onChange={(e) => setAddress(e.target.value)}
              type="text"
            />
            <TextField
              required
              label="Hours (ex. 9AM - 9PM)"
              variant="standard"
              onChange={(e) => setHours(e.target.value)}
              type="text"
            />
            <TextField
              required
              label="Description"
              variant="standard"
              onChange={(e) => setDescription(e.target.value)}
              type="text"
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              color="secondary"
              sx={{ marginTop: "20px" }}
            >
              Save
            </Button>
          </form>
        </Box>
        <ListingMap address={address || "Austin, TX"} height="400" width="500" />
      </Box>
    </Container>
  );
}
