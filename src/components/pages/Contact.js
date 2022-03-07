import React, {useState} from 'react';
import { Container, Typography, Button, TextField} from '@mui/material';
import useStyles from '../../styles';

const initialFormValues = {
    id: 0,
    name: "",
    email: "",
}

export default function Contact(){
    const classes = useStyles()

    //const[values, setValues] = useState(initialFormValues);
    const[name, setName] = useState("");
    const[email, setEmail] =useState("");

    const validateName = () => {
        return name !== '' ? null : "This field is required."
    };

    const validateEmail = () => {
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        return (re).test(email) ? null : "Email address is not valid."
    }
    
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (validateName() || validateEmail()){
            return;
        }
    }

    return (
        <div>
            <Container maxWidth="md" align="center">
                <Typography variant="h2" align="center" marginTop="1vw" gutterBottom>
                    Contact Mandy
                </Typography>
                <TextField 
                    className={classes.field}
                    varient="outlined"
                    label="Name"
                    name="name"
                    defaultValue={name}
                    fullWidth
                    required
                    error = {Boolean(validateName())}
                    helperText = {validateName()}
                    onChange = {(e) => {setName(e.target.value)}}
                />
                <TextField
                    className={classes.field}
                    varient="outlined"
                    label="Email"
                    name="email"
                    defaultValue={email}
                    fullWidth
                    required
                    error = {Boolean(validateEmail())}
                    helperText= {validateEmail()}
                    onChange = {(e) => {setEmail(e.target.value)}}
                />
                <TextField
                    className={classes.field}
                    varient="outlined"
                    label="Message"
                    name="message"
                    multiline
                    rows={6}
                    fullWidth
                    required
                />
                <Button
                    className={classes.formButton}
                    onClick={handleFormSubmit}
                    type="submit"
                    variant="contained"
                >
                    Submit
                </Button>
            </Container>
        </div>
    )

}



