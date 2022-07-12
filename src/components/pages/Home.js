import React from 'react';
import { Typography, Container, Grid} from '@mui/material';
import pic from "../../assets/images/IMG_4853.JPG";
import GitHubIcon from '@mui/icons-material/GitHub';
import useStyles from '../../styles';
import background from "../../assets/images/flower.jpg";

export default function Home(){
  const classes = useStyles();
  return (
    <main style={{ backgroundImage: `url(${background})`}}>
      <div>
        <Container maxWidth="md">
          <div align="center">
            <Typography variant="h2" align="center" marginTop="1vw" gutterBottom>
              About Mandy 
            </Typography>
            <Typography variant="h6" display="block">
            Mandy is passionate about building meaningful user experience applications. She is currently studying coding and web development.
            When she is not coding, fixing her cars or reading, you will find her traveling around the globe enjoying local cuisine. 
            Her background in the financial industry gives her a solid understanding of users in terms of their needs and values. She is excited to incorporate her background on building creative and stimulating projects that can benefit all.
            </Typography>
          </div>
          <div align="center">
            <img src = {pic} alt="Mandy" className={classes.image}/>
          </div>
          <Grid container direction="row" justifyContent="center" >
            <Grid item >
              <GitHubIcon 
                onClick={event => window.open('https://github.com/MANDYTSANG007')}
                className={classes.clickableIcon}
              />
            </Grid>
          </Grid>
        </Container>
      </div>
    </main>
  );
}