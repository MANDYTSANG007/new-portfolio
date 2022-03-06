import React from 'react';
import { Container, Typography, Grid, FormControl, Button, OutlinedInput, TextField} from '@mui/material';
import { makeStyles } from '@mui/styles';

const initialValues = {
    name: "",
    email: "",
}

const useStyles = makeStyles({
    field: {
        marginTop: 20,
        marginBottom: 20,
        display: "block"
    }
})
export default function Contact(){
    const classes = useStyles()

    const validation = () => {
        var input = {}
        // input.name = values.name ? "" : "Your name is required."
        // input.email = (/$|.+@..+/).test(values.email) ? "" : "Email is not valid."
        // input.message = values.message.length !== 0 ? "" : "Please type here."
    }

    //const { values, setValues, handleInputChange} = initialValues;

    return (
        <div>
            <Container maxWidth="md">
                <div align="center">
                    <Typography variant="h2" align="center" marginTop="1vw" gutterBottom>
                        Contact Mandy 
                    </Typography>
                </div>
                <form>
                    <TextField
                        className={classes.field}
                        varient="outlined"
                        label="Name"
                        fullWidth
                        required
                        // value={values.name}
                        // onChange={handleInputChange} //handle user input in real-time
                    />
                    <TextField
                        className={classes.field}
                        varient="outlined"
                        label="Email"
                        fullWidth
                        required
                    />
                    <TextField
                        className={classes.field}
                        varient="outlined"
                        label="Message"
                        multiline
                        rows={6}
                        fullWidth
                        required
                    />
                </form>
                <Button
                    onClick={() => console.log('Thank you for your message!')}
                    type="submit"
                    variant="contained"
                >
                    Submit
                </Button>

            </Container>
        </div>
    );
}