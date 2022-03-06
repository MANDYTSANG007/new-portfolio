import { makeStyles } from '@mui/styles';


    // Create useStyles, a hook, w/ a function call to return an obj.
const useStyles = makeStyles((theme) => ({
        root: {
            height: "100vh",
            background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
        },
        imagelist: {
            justify: "center",
            width: "80vw",
            height: "100vw",
            
        },
        buttons: {
            marginRight: "20px",
            marginTop: "40px",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
        },
        image: {
            width: "22vw",
            height: "30vw",
            marginTop: "5vw",
        },
        homeContainer: {
            alignContent: "center",
        },
        clickableIcon: {
            marginTop: "10vw",
            paddingRight: "5vw",
            transform: "scale(1.9)",
            color: "black",
            '&:hover': {
                color: "red",
            }
        },
        navStyle: {
            backgroundColor: "#ffeb3b",
        }
    }));

export default useStyles;