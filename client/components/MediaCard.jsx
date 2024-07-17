import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import axios from 'axios';
import "../src/App.css"; 
import MenuAppBar from './MenuAppBar';

export default function MediaCard() {
  const [arts, setArts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/GetAllArt")
      .then((response) => { setArts((response.data).reverse()) })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
      <MenuAppBar/>
    <div className="main-container" >
      <Box className="grid-container">
        <Grid container spacing={4}>
          {arts.map((art) => (
            <Grid item key={art.artid} xs={12} sm={6} md={4}>
              <Card className="styled-card">
                <CardMedia
                  className="styled-card-media"
                  image={art.imageUrl}
                  
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" variant="contained" color="primary">Rate</Button>
                  <Button size="small" variant="outlined" color="primary">Show More</Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
    </div>
  );
}
