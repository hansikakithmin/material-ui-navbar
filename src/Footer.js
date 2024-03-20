import React from 'react';
import { Grid, Typography, Button } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { styled } from '@mui/system';

const CustomIcon = styled('span')({
    fontSize: '50px', 
    color: '#fff',    
  });

const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
  };

const Footer = () => {
  return (
    <footer style={{ backgroundColor: 'rgb(94,10,10)', color: '#fff', padding: '20px 0' }}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={3} style={{ marginLeft: '20px'}}>
          <Typography variant="body1" fontWeight="bold">Overview</Typography>
          <Typography variant="body1"><a href="/home" style={linkStyle}>Home</a></Typography>
          <Typography variant="body1"><a href="/browse-ads" style={linkStyle}>Browse Ads</a></Typography>
          <Typography variant="body1"><a href="/about-us" style={linkStyle}>About Us</a></Typography>
          <Typography variant="body1"><a href="/contact" style={linkStyle}>Contact</a></Typography>
        </Grid>
        <Grid item xs={3} style={{ marginTop: '35px' }}>
          <Typography variant="body1" fontWeight="bold">Categories</Typography>
          <Typography variant="body1" ><a href="/vehicles" style={linkStyle}>Vehicles</a></Typography>
          <Typography variant="body1"><a href="/properties" style={linkStyle}>Properties</a></Typography>
          <Typography variant="body1"> <a href="/electronics" style={linkStyle}>Electronics</a></Typography>
          <Typography variant="body1"><a href="/pets" style={linkStyle}>Pets</a></Typography>
          <Typography variant="body1"><a href="/services" style={linkStyle}>Services</a></Typography>
          <Typography variant="body1"> <a href="/books" style={linkStyle}>Books</a></Typography>
          <Typography variant="body1"><a href="/others" style={linkStyle}>Others</a></Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="body1" fontWeight="bold">Follow Us On</Typography>
          <Button color="primary" startIcon={<CustomIcon><FacebookIcon /></CustomIcon>} />
          <Button color="primary" startIcon={<CustomIcon><InstagramIcon /></CustomIcon>} />
          <Button color="primary" startIcon={<CustomIcon><YouTubeIcon /></CustomIcon>} />
        </Grid>
      </Grid>
    </footer>
  );
}

export default Footer;