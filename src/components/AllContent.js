import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
	content: {
		[theme.breakpoints.down('md')]: {
			padding: '0px 20px 20px 20px',
		},
		[theme.breakpoints.up('md')]: {
			margin: '0 30px 20px 30px',
		}
	},
}))

function AllContent(props) {
	const classes = useStyles();
	return (
		<div className={classes.content}>
			<Typography variant='subtitle2' style={{color: '#202124'}}>{props.url}</Typography>
			<Typography variant='h6' style={{color: '#1a0dab'}}>{props.title}</Typography>
			<Typography variant='body2' style={{color: '#4d5156'}}>{props.description}</Typography>
		</div>
	)
}

export default AllContent;