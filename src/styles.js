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
            display: "flex",
            marginTop: "5vw",
            marginBottom: "5vw",
            marginRight: "5vw",
            marginLeft: "5vw",
            transform: "scale(2.7)",
            color: "black",
            '&:hover': {
                color: "red",
            }
        },
        navStyle: {
            backgroundColor: "#ffc107",
            color: "black",
        },
        footer: {
            textAlign: "center",
            paddingTop: "1vw",
            paddingBottom: "1vw",
            background: "#ffc107",
        }
    }));

export default useStyles;