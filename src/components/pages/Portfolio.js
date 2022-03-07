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
import movieImg from "../../assets/images/is-it-a-movie.png";
import notebookImg from "../../assets/images/mt-notebook.png";
import techBlogImg from "../../assets/images/tech-blog.png";
import schedulerImg from "../../assets/images/work-day-scheduler.png";
import eCommerceImg from "../../assets/images/e-commerce.png";

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
    title: 'Perfect Cup - a Coffee App.',
    githubURL:"https://github.com/MChambersIV/Perfect-Cup",
    deployedURL:"https://powerful-wildwood-54385.herokuapp.com/",
  },
  {
    img: movieImg,
    title: 'Is-It-a-Movie?',
    githubURL:"https://github.com/scottybuoy/Is-it-a-Movie.git",
    deployedURL:"https://scottybuoy.github.io/Is-it-a-Movie/",
  },
  {
    img: notebookImg,
    title: 'MT-Notebook',
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
    img: techBlogImg,
    title: 'Developers-Tech-Blog',
    githubURL:"https://github.com/MANDYTSANG007/Developers-Tech-Blog",
    deployedURL:"https://mandyblogapp.herokuapp.com/",
  }
];
