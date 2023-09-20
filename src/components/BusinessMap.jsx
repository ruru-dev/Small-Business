import { Box } from "@mui/material";

export default function BusinessMap({ address }) {
  console.log(process.env);
  return (
    <Box>
      <iframe
        width="700"
        height="500"
        style={{border:0}}
        loading="lazy"
        allowfullscreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_API_KEY}&q=${address}`}
      ></iframe>
    </Box>
  );
}
