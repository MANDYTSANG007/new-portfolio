import React, {useState} from 'react';
import { Container, Typography, Grid, FormControl, Button, OutlinedInput, TextField} from '@mui/material';
import { makeStyles } from '@mui/styles';
import useStyles from '../../styles';

const initialValues = {
    name: "",
    email: "",
}

export default function Contact(){
    const classes = useStyles()

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
                    fullWidth
                    required
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
                <Button
                    className={classes.formButton}
                    onClick={() => console.log("Thanks!")}
                    type="submit"
                    variant="contained"
                >
                    Submit
                </Button>
            </Container>
        </div>
    )

}





// export default function Contact(){
//     const classes = useStyles()
//     const [name, setName] = useState("")
//     const [email, setEmail] = useState("")
//     const [message, setMessage] = useState("")
//     const [nameError, setNameError] = useState(false) //error will not display when it is false
//     const [emailError, setEmailError] = useState(false)
//     const [messageError, setMessageError] = useState(false)

//     const handleSubmit =(e) => {
//         e.preventDefault()
//         setNameError(false)
//         setEmailError(false)
//         setMessageError(false)

//         if (name === "") {
//             setNameError(true)
//         }
//         if (name === "") {
//             setEmailError(true)
//         }
//         if (name === "") {
//             setMessageError(true)
//         }

//         if (name && email && message) {
//             console.log(name, email, message)
//         }
//     }
//     // const validation = () => {
//     //     var input = {}
//     //     // input.name = values.name ? "" : "Your name is required."
//     //     // input.email = (/$|.+@..+/).test(values.email) ? "" : "Email is not valid."
//     //     // input.message = values.message.length !== 0 ? "" : "Please type here."
//     // }

//     //const { values, setValues, handleInputChange} = initialValues;

//     return (
//         <div>
//             <Container maxWidth="md">
//                 <div align="center">
//                     <Typography variant="h2" align="center" marginTop="1vw" gutterBottom>
//                         Contact Mandy 
//                     </Typography>
//                 </div>
//                 <form noValidation autoComplete="off" onSubmit={handleSubmit}>
//                     <TextField
//                         onChange = {(e) => setName(e.target.value)}
//                         className={classes.field}
//                         varient="outlined"
//                         label="Name"
//                         fullWidth
//                         required
//                         error ={nameError}
//                         // value={values.name}
//                         // onChange={handleInputChange} //handle user input in real-time
//                     />
//                     <TextField
//                         onChange = {(e) => setEmail(e.target.value)}
//                         className={classes.field}
//                         varient="outlined"
//                         label="Email"
//                         fullWidth
//                         required
//                         error ={emailError}
//                     />
//                     <TextField
//                         onChange = {(e) => setMessage(e.target.value)}
//                         className={classes.field}
//                         varient="outlined"
//                         label="Message"
//                         multiline
//                         rows={6}
//                         fullWidth
//                         required
//                         error ={messageError}
//                     />
//                     <Button
//                         onClick={() => console.log('Thank you for your message!')}
//                         type="submit"
//                         variant="contained"
//                     >
//                         Submit
//                     </Button>
//                 </form>
               

//             </Container>
//         </div>
//     );
// }
