import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ListingMap from './ListingMap';

export default function DetailsCard({business}) {
  return (
    <Card variant="outlined" sx={{ width: 700, margin: "20px auto 0 auto"}}>
      <CardContent>
        <Typography variant="h4" component="div">
          {business.name}
        </Typography>
        <Typography variant="h6">
          {business.address}
        </Typography>
        <Typography variant="h6">
          {business.hours}
        </Typography>
        <Typography variant="body2">
          {business.description}
        </Typography>
      </CardContent>
      <ListingMap address={business.address}/>
    </Card>
  );
}
