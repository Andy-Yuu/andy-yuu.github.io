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
	link: {
		textDecoration: 'none',
		color: 'inherit',
	}
}))

const ConditionalWrapper = ({ condition, wrapper, children }) => 
  condition ? wrapper(children) : children;

function AllContent(props) {
	const classes = useStyles();
	const { url, title, description, darkMode, link } = props;
	return (
		<ConditionalWrapper
			condition={link}
			wrapper={children => <a href={link} target="_blank" rel="noreferrer" className={classes.link}>{children}</a>}
		>
			<div className={classes.content}>
				<Typography variant='subtitle2' style={{color: darkMode ? '' : '#202124'}}>{url}</Typography>
				<Typography variant='h6' style={{color: darkMode ? '#8ab4f8' : '#1a0dab'}}>{title}</Typography>
				<Typography variant='body2' style={{color: darkMode ? '' : '#4d5156'}}>{description}</Typography>
			</div>
		</ConditionalWrapper>
	)
}

export default AllContent;