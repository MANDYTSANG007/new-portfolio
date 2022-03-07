import React from "react";
import { Typography, Link } from '@mui/material';
import useStyles from '../styles';

export default function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Typography> © 2022 Mandy Tsang </Typography>
            <Link href="mailto:h.man.tsang@gmail.com">h.man.tsang@gmail.com</Link>
        </footer>
    )
}