import { makeStyles } from "@mui/styles";

const useStyles = (darkMode) => makeStyles(theme => ({
    footer: {
        backgroundColor: darkMode ? "#303134" : "#f2f2f2",
        padding: "20px",
        marginTop: "auto",
        textAlign: "center",
    }
}))

function Footer(props) {
    const { darkMode } = props;
    const classes = useStyles(darkMode)();
	return (
		<div className={classes.footer}>
            <div>Built with React and Material UI, but mainly ❤️ and &#9749;!</div>
            <div>Andy Yu © 2021</div>
        </div>
	)
}

export default Footer;