import React from 'react';
import { Typography, Container, Grid} from '@mui/material';
//import Icon from '@mui/icons-material';
import pic from "../../assets/images/IMG_4853.JPG";
import resume from "../../assets/images/resume.pdf";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import useStyles from '../../styles';

export default function Home(){
  const classes = useStyles();
  return (
    <main>
      <div>
        <Container maxWidth="sm">
          <div align="center">
            <Typography variant="h2" align="center" gutterBottom>
              Hello World! 
            </Typography>
            <Typography variant="h8" display="block"> 
              Mandy is passionate about building meaningful user experience applications. She is currently studying coding and web development.
            </Typography>
            <Typography variant="h8" display="block"> 
              Her background in the financial industry gives her a solid understanding of users in terms of their needs and values. She is excited to incorporate her background on building creative and stimulating projects that can benefit all.
            </Typography>
            <Typography variant="h8" display="block">
              When she is not coding, fixing her cars or reading, you will find her traveling around the globe enjoying local cuisine. 
            </Typography>
          </div>
          <div align="center">
            <img src = {pic} alt="Mandy" className={classes.image}/>
          </div>
          <Grid container direction="row" alignItems="center">
            <Grid item>
              <GitHubIcon 
                onClick={event =>  window.open('https://github.com/MANDYTSANG007')}
                className={classes.clickableIcon}
              />
            </Grid>
            <Grid item>
              <LinkedInIcon 
                onClick={event =>  window.open('https://www.linkedin.com/in/man-tsang-64308b22a/')} 
                className={classes.clickableIcon}
              />
            </Grid>
            <Grid item>
              <DocumentScannerIcon 
                onClick={event =>  {window.open(resume)}} 
                className={classes.clickableIcon}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </main>
  );
}