import React from "react";
import { Typography } from '@mui/material';
import useStyles from '../styles';

export default function Footer() {
    const classes = useStyles();
    return (
        <footer className={classes.footer}>
            <Typography> © 2022 Mandy Tsang </Typography>
        </footer>
    )
}