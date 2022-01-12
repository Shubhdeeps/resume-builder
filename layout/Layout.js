
import * as React from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Appbarst from '../components/main/Appbarst'
import Border from '../components/resume/body/Border';


const Layout = ({ children }) => {
  return (
    <Box sx={{ display: 'flex' }}>
        <Appbarst />
        <Grid 
          container
          className="main">
              <Grid
              item lg={12}
              >  </Grid>
              <Grid item lg={0.5}></Grid>
              <Grid 
              item lg={2}
              className="toolbar">
                {children}
              </Grid>
              <Grid item lg={0.5}></Grid>
              <Grid lg={8.5}
              item 
              className="resume-container">
                <div className='space '>
                </div>
                <div className='main-container'>
                <Border /> 
                </div> 
                <div className='space'></div>   
                <div className='tool-window'>
                  <div className='tools-icons'>hello, these are tools</div>
                </div>    
              </Grid>
              <Grid item lg={0.5}></Grid>             
         </Grid>   
    </Box>
  );
}

export default Layout