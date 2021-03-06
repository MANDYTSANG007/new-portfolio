import React from 'react';
//import { Typography, Card, Grid, Container} from '@mui/material';
import useStyles from '../../styles';
import {Typography, Container} from '@mui/material';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import perfectCupImg from "../../assets/images/perfect-cup.png";
import notebookImg from "../../assets/images/mt-notebook.png";
import techTalkImg from "../../assets/images/techTalk.png";
import schedulerImg from "../../assets/images/work-day-scheduler.png";
import eCommerceImg from "../../assets/images/e-commerce.png";
import meGameImg from "../../assets/images/megame.png";


export default function Portfolio() {
  const classes = useStyles();
  return (
    <main>
      <div align="center">
            <Typography variant="h2" align="center" >
              Projects 
            </Typography>
      </div>
    <div>
      <Container>
        <ImageList className={classes.imagelist} gap={30}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={item.img}
                srcSet={item.img}
                alt={item.title}
                loading="lazy"
                style={{"objectFit": "contain"}}
              />
              <ImageListItemBar
                title={item.title}
                position="below"
              />
              <Stack direction="row" >
                <Button 
                  className={classes.buttons} 
                  variant="contained"
                  onClick={event => window.open(item.githubURL)}
                  >
                    GitHub
                </Button>
                <Button 
                  className={classes.buttons} 
                  variant="contained"
                  onClick={event => window.open(item.deployedURL)}
                  >
                    Deployed Link
                </Button>
              </Stack>
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </div>
    </main>
  );
}

const itemData = [
  {
    img: perfectCupImg,
    title: 'Perfect Cup - A Coffee App.',
    githubURL:"https://github.com/MChambersIV/Perfect-Cup",
    deployedURL:"https://powerful-wildwood-54385.herokuapp.com/",
  }, 
  {
    img: meGameImg,
    title: 'MeGame - A Clicker Game',
    githubURL:"https://github.com/MANDYTSANG007/megame",
    deployedURL:"https://mandytsang007.github.io/megame/",
  }, 
  {
    img: notebookImg,
    title: 'MT - Notebook',
    githubURL:"https://github.com/MANDYTSANG007/MT-Notebook",
    deployedURL:"https://hmt-notebook.herokuapp.com/notes",
  },
  {
    img: schedulerImg,
    title: 'Work-Day-Scheduler',
    githubURL:"https://github.com/MANDYTSANG007/Work-Day-Scheduler",
    deployedURL:"https://mandytsang007.github.io/Work-Day-Scheduler/",
  },
  {
    img: eCommerceImg,
    title: 'E-Commerce ORM',
    githubURL:"https://github.com/MANDYTSANG007/E-Commerce-ORM",
    deployedURL:"https://youtu.be/srMYPrpeWfo",
  },
  {
    img: techTalkImg,
    title: 'TechTalk - A Developer Tech Blog',
    githubURL:"https://github.com/MANDYTSANG007/Developers-Tech-Blog",
    deployedURL:"https://mandyblogapp.herokuapp.com/",
  }
];
