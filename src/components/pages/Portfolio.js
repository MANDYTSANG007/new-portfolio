import React from 'react';
//import { Typography, Card, Grid, Container} from '@mui/material';
import useStyles from '../../styles';
import {Container} from '@mui/material';
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
                <Button className={classes.buttons} variant="contained">GitHub</Button>
                <Button className={classes.buttons} variant="contained">Deployed Link</Button>
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
  },
  {
    img: movieImg,
    title: 'Is-It-a-Movie?',
  },
  {
    img: notebookImg,
    title: 'MT-Notebook',
  },
  {
    img: schedulerImg,
    title: 'Work-Day Scheduler',
  },
  {
    img: eCommerceImg,
    title: 'E-Commerce Backend',
  },
  {
    img: techBlogImg,
    title: 'Tech Blog',
  }
];
