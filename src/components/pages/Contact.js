import React from "react";
import { Container, Typography, Link } from '@mui/material';
import background from "../../assets/images/flower.jpg";

import useStyles from '../../styles';

export default function Contact() {
    const classes = useStyles();
    return (
        <main style={{ backgroundImage: `url(${background})`}}>
        <div className={classes.contact}>
            <Container maxWidth="md" align="center" >
                <Typography variant="h2" align="center" marginTop="1vw" gutterBottom>
                    Contact Mandy
                </Typography>
                <div>
                    <Link variant="h3" paddingTop="50%" href="mailto:h.man.tsang@gmail.com">h.man.tsang@gmail.com</Link>
                </div>
            </Container>
        </div>
        </main>
    )
};




// import React, {useState} from 'react';
// import { Container, Typography, Button, TextField} from '@mui/material';
// import useStyles from '../../styles';
// import background from "../../assets/images/flower.jpg";

// const initialFormValues = {
//     id: 0,
//     name: "",
//     email: "",
// }

// export default function Contact(){
//     const classes = useStyles()

//     //const[values, setValues] = useState(initialFormValues);
//     const[name, setName] = useState("");
//     const[email, setEmail] =useState("");

//     const validateName = () => {
//         return name !== '' ? null : "This field is required."
//     };

//     const validateEmail = () => {
//         const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
//         return (re).test(email) ? null : "Email address is not valid."
//     }
    
//     const handleFormSubmit = (e) => {
//         e.preventDefault();
//         if (validateName() || validateEmail()){
//             return;
//         }
//     }

//     return (
//         <main style={{ backgroundImage: `url(${background})`}}>
//         <div>
//             <Container maxWidth="md" align="center" >
//                 <Typography variant="h2" align="center" marginTop="1vw" gutterBottom>
//                     Contact Mandy
//                 </Typography>
//                 <div>
//                     <TextField 
//                         className={classes.field}
//                         varient="outlined"
//                         label="Name"
//                         name="name"
//                         defaultValue={name}
//                         fullWidth
//                         required
//                         error = {Boolean(validateName())}
//                         helperText = {validateName()}       //event.target gives you the element that triggered the event.
//                         onChange = {(e) => {setName(e.target.value)}} //onChange: Execute a JavaScript when a user changes the selected option of a <select> element:
//                     />
//                 </div>
//                 <div>
//                     <br></br>
//                     <TextField
//                         className={classes.field}
//                         varient="outlined"
//                         label="Email"
//                         name="email"
//                         defaultValue={email}
//                         fullWidth
//                         required
//                         error = {Boolean(validateEmail())}
//                         helperText= {validateEmail()}
//                         onChange = {(e) => {setEmail(e.target.value)}}
//                 />
//                 </div>
//                     <br></br>
//                 <div>
//                     <TextField
//                         className={classes.field}
//                         varient="outlined"
//                         label="Message"
//                         name="message"
//                         multiline
//                         rows={6}
//                         fullWidth
//                         required
//                 />
//                 </div>
//                     <br></br>
//                     <br></br>
//                 <Button
//                     className={classes.formButton}
//                     onClick={handleFormSubmit}
//                     type="submit"
//                     variant="contained"
//                 >
//                     Submit
//                 </Button>
//                 <div>
//                 <br></br>
//                 <br></br>
//                 <br></br>
//                 </div>
//             </Container>
//         </div>
//         </main>
//     )

// }



