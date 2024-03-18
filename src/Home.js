// src/Home.js
import React from 'react';
import { Typography, Grid, Paper, IconButton, InputAdornment} from '@mui/material';
import CarIcon from '@mui/icons-material/DirectionsCar';
import HouseIcon from '@mui/icons-material/House';
import ElectronicsIcon from '@mui/icons-material/Devices';
import PetsIcon from '@mui/icons-material/Pets';
import ServicesIcon from '@mui/icons-material/Build';
import BookIcon from '@mui/icons-material/Book';
import OtherIcon from '@mui/icons-material/More';
import TextField from '@mui/material/TextField';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MenuItem from '@mui/material/MenuItem';
import StarIcon from '@mui/icons-material/Star';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';



const iconStyle = {
  fontSize: '50px', 
  color: '#111', 
};


function Home() {
  return (

    <div style={{paddingTop:'64px'}}>
      <Typography variant="h4" align="center" fontWeight="bold">Browse By Category</Typography>

      <Grid container spacing={5} justifyContent="center" style={{ marginTop: '16px' }}>
        <Grid item>
          <Paper elevation={3} style={{ padding: '20px', backgroundColor: 'rgb(237,6,6)',width: '100px', height: '100px',display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <IconButton>
              <CarIcon style={iconStyle}/>
            </IconButton>
            <Typography variant="h6" style={{ fontWeight: 'bold' }}>Vehicles</Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper elevation={3} style={{ padding: '20px', backgroundColor: 'rgb(7,176,44)', width: '100px', height: '100px',display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <IconButton>
              <HouseIcon style={iconStyle}/>
            </IconButton>
            <Typography variant="h6" style={{ fontWeight: 'bold' }}>Properties</Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper elevation={3} style={{ padding: '20px', backgroundColor: 'rgb(95,134,208)', width: '100px', height: '100px',display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <IconButton>
              <ElectronicsIcon style={iconStyle}/>
            </IconButton>
            <Typography variant="h6" style={{ fontWeight: 'bold' }}>Electronics</Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper elevation={3} style={{ padding: '20px', backgroundColor: 'rgb(255,255,255)',width: '100px', height: '100px',display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <IconButton>
              <PetsIcon style={iconStyle} />
            </IconButton>
            <Typography variant="h6" style={{ fontWeight: 'bold' }}>Pets</Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper elevation={3} style={{ padding: '20px', backgroundColor: 'rgb(206,27,102)', width: '100px', height: '100px',display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <IconButton>
            <ServicesIcon style={iconStyle} />
            </IconButton>
            <Typography variant="h6" style={{ fontWeight: 'bold' }}>Services</Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper elevation={3} style={{ padding: '20px', backgroundColor: 'rgb(149,146,146)',width: '100px', height: '100px',display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <IconButton>
              <BookIcon style={iconStyle} />
            </IconButton>
            <Typography variant="h6" style={{ fontWeight: 'bold' }}>Books</Typography>
          </Paper>
        </Grid>
        <Grid item>
          <Paper elevation={3} style={{ padding: '20px', backgroundColor: 'rgb(240,88,23)', width: '100px', height: '100px',display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <IconButton>
            <OtherIcon style={iconStyle} />
            </IconButton>
            <Typography variant="h6" style={{ fontWeight: 'bold' }}>Other</Typography>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3} style={{ marginTop: '32px' }} justifyContent="center">
      <Grid item xs={6}>
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <TextField
        fullWidth
        label="What are you looking for?"
        variant="outlined"
        InputProps={{ 
          sx: { borderRadius: '30px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'}
        }}
        InputLabelProps={{ 
          style: { textAlign: 'center', width: '100%', fontSize:'20px',transition: 'none'}
        }}
      />
    </div>
  </Grid>

      <Grid item xs={3}>
          <TextField
            fullWidth
            label="Location"
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <LocationOnIcon />
                </InputAdornment>
              ),
              sx: { borderRadius: '30px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }
            }}
            select
            SelectProps={{ IconComponent: () => null }}
            InputLabelProps={{
              sx: { fontSize: '20px' } 
            }}>
            <MenuItem value="Gampaha">Gampaha</MenuItem>
            <MenuItem value="Colombo">Colombo</MenuItem>
            <MenuItem value="Kalutara">Kalutara</MenuItem>
          </TextField>
        </Grid>
      </Grid>

      <Typography variant="h4" align="center" fontWeight="bold" style={{ marginTop: '48px', color:'rgb(101,81,81)' }}>Featured Ads</Typography>

      <Grid container spacing={16} justifyContent="center" style={{ marginTop: '4px' }} >
      <Grid item xs={3.5}>
      <Link to="/featured-ad-1" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Paper elevation={3} style={{ padding: 0, margin: 0, position: 'relative' }}>
          <IconButton
             style={{ 
              position: 'absolute',
              top: '0',
              right: '0',
              backgroundColor: 'green',
              color: 'black',
              width: '30px', 
              height: '30px', 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '5px' 
             }}
          >
            <StarIcon />
          </IconButton>
          <img src="premio.jpg" alt="Featured Ad 1" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
          <Typography variant="body1" align="center" fontWeight="bold">Toyota Premio</Typography>
          <Typography variant="body2" align="center" >Rs. 13500000.00</Typography>
        </Paper>
        </Link>
      </Grid>
      <Grid item xs={3.5}>
      <Link to="/featured-ad-1" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Paper elevation={3} style={{ padding: 0, margin: 0, position: 'relative' }}>
          <IconButton
             style={{ 
              position: 'absolute',
              top: '0',
              right: '0',
              backgroundColor: 'green',
              color: 'black',
              width: '30px', 
              height: '30px', 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '5px' 
             }}
          >
            <StarIcon />
          </IconButton>
          <img src="img13.png" alt="Featured Ad 2" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
          <Typography variant="body1" align="center" fontWeight="bold">30 Perch Land Kalutara</Typography>
          <Typography variant="body2" align="center">Rs. 9000000.00</Typography>
        </Paper>
        </Link>
      </Grid>
      <Grid item xs={3.5}>
      <Link to="/featured-ad-1" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Paper elevation={3} style={{ padding: 0, margin: 0, position: 'relative' }}>
          <IconButton
             style={{ 
              position: 'absolute',
              top: '0',
              right: '0',
              backgroundColor: 'green',
              color: 'black',
              width: '30px', 
              height: '30px', 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: '5px' 
             }}
          >
            <StarIcon />
          </IconButton>
          <img src="img14.png" alt="Featured Ad 3" style={{ width: '100%', height: '300px', objectFit: 'cover' }} />
          <Typography variant="body1" align="center" fontWeight="bold">Iphone 11</Typography>
          <Typography variant="body2" align="center">Rs. 100000.00</Typography>
        </Paper>
        </Link>
      </Grid>
    </Grid>

<div style={{ display: 'flex', justifyContent: 'center' }}>
   <Button 
     variant="contained" 
      style={{ 
      borderRadius: '20px', 
      marginTop: '40px', 
      backgroundColor: 'rgb(176,12,12)', 
      color: 'white', 
      width: '150px' 
  }}
>
  View More
</Button> 
</div>

<Typography 
variant="h4" 
align="left" 
fontWeight="bold" 
style={{ 
 marginTop: '48px',
 color:'rgb(101,81,81)',
 marginLeft: '50px'
 }}
>Recomended Ads
</Typography>

<Grid container spacing={3} justifyContent="center" style={{ marginTop: '16px' }}>
  <Grid item xs={10}  style={{ height: '275px' }}>
  <Link to="/featured-ad-1" style={{ textDecoration: 'none', color: 'inherit' }}>
    <Paper elevation={3} style={{ padding: '20px', marginBottom: '16px', display: 'flex' }}>
      <img src="allion.jpg" alt="Ad 1"  style={{ width: '500px', height: '220px',  marginRight: '20px' }} />
      <div style={{  marginLeft: '150px', marginTop:'50px'}}>
        <Typography variant="h6" fontWeight="bold">Toyota Allion</Typography>
        <Typography variant="h6">
               Rs. 6000000
        </Typography>
        <Typography variant="h6">
               From : Colombo
        </Typography>
        <Typography variant="h6">
               Year : 2007
        </Typography>
      </div>
    </Paper>
    </Link>
  </Grid>
</Grid>
<Grid container spacing={3} justifyContent="center" style={{ marginTop: '16px' }}>
  <Grid item xs={10} >
  <Link to="/featured-ad-1" style={{ textDecoration: 'none', color: 'inherit' }}>
    <Paper elevation={3} style={{ padding: '20px', marginBottom: '16px', display: 'flex' }}>
      <img src="axio141.jpg" alt="Ad 2"  style={{  width: '500px', height: '220px',  marginRight: '20px' }} />
      <div  style={{  marginLeft: '150px', marginTop:'50px' }}>
        <Typography variant="h6" fontWeight="bold" >Toyota Corolla Axio</Typography>
        <Typography variant="h6">
               Rs. 5500000
        </Typography>
        <Typography variant="h6">
               From : Colombo
        </Typography>
        <Typography variant="h6">
               Year : 2007
        </Typography>
      </div>
    </Paper>
    </Link>
  </Grid>
</Grid>

<div style={{ display: 'flex', justifyContent: 'center' }}>
   <Button 
     variant="contained" 
      style={{ 
      borderRadius: '20px', 
      marginTop: '40px', 
      backgroundColor: 'rgb(101,81,81)', 
      color: 'white', 
      width: '150px' 
  }}
>
  Browse Ads
</Button> 
</div>


<div style={{ display: 'flex', justifyContent: 'center' }}>
  <Grid style={{ marginTop: '100px', width: '1300px', padding: 0 }}>
    <Paper style={{ padding: 0, marginBottom: 0 }}>
      <div style={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
        <img src="Screenshot 2024-02-29 155000.png" alt="Ad 2" style={{ width: '600px', height: '400px', objectFit: 'cover', borderRadius: '8px', marginRight: '20px' }} />
        <div style={{ position: 'absolute', top: '100px', right: '200px' }}> 
          <Typography variant="h6" fontWeight="bold">Find amazing deals on internet</Typography>
          <Grid item xs={12}> 
          <TextField
        fullWidth
        variant="outlined"
        InputProps={{ 
          sx: { borderRadius: '30px', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)'}
        }}
        InputLabelProps={{ 
          style: { textAlign: 'center', width: '100%', fontSize:'20px',transition: 'none'}
        }}
      />
      </Grid>
      <Grid item xs={10} style={{ marginTop: '10px', display: 'flex', justifyContent: 'center' }}>
            <Button variant="contained" style={{ borderRadius: '30px', backgroundColor:'rgb(176,12,12)' }}>Search</Button>
      </Grid>
        </div>
      </div>
    </Paper>
  </Grid>
</div>

      <h2></h2>
      <br/><br/><br/><br/><br/>
      
    </div>
  );
}

export default Home;