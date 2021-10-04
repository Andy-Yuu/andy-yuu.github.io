import { Grid, Avatar, Box, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ClearIcon from '@mui/icons-material/Clear';
import Mic from '@mui/icons-material/Mic';
import Search from '@mui/icons-material/Search';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import google_logo from "../images/Google_2015_logo.png";

const useStyles = makeStyles(theme => ({
	header: {
		[theme.breakpoints.up('sm')]: {
      margin: '25px 30px 0px 30px',
    },
		[theme.breakpoints.down('sm')]: {
      margin: '25px 15px 0px 15px',
    },
	},
 	googleImage: {
    cursor: 'pointer',
    display: 'block',
		marginLeft: 'auto',
		marginRight: 'auto',
		width: '100%',
		maxWidth: '92px',
    height: 'auto',
	},
	searchBar: {
    padding: '10px 0px',
    boxShadow: '0 2px 5px 1px lightgray',
    border: '0px',
    borderRadius: '24px',
    width: '100%',
    outline: 'none',
    height: 'auto',
		'&:hover': {
			boxShadow: '0 2px 5px 3px lightgray',
		}
	},
	searchBarName: {
    marginLeft: '20px',
	},
	searchBarIcons: {
    float: 'right',
    cursor: 'pointer',
	},
	clearIcon: {
		color: "#70757a",
		borderRight: "1px solid #dfe1e5",
		height: "65%",
		marginRight: "10px",
		paddingRight: "10px",
	},
	micIcon: {
		color: "#4285f4",
		paddingRight: "10px",
	},
	searchIcon: {
		color: "#4285f4",
		paddingRight: "15px",
	},
	hideIconForBigScreens: {
		[theme.breakpoints.up('sm')]: {
      display: 'none'
    },
	},
	hideIconForSmallScreens: {
		[theme.breakpoints.down('sm')]: {
      display: 'none'
    },
	},
}))

function Navbar(props) {
	const classes = useStyles();
  return (
		<div className={classes.header}>
			<Grid container spacing={1}>
				<Grid item xs={12} sm={2} md={1} lg={1} container justifyContent='space-between' alignItems='center'>
					<Box className={classes.hideIconForBigScreens} style={{width: '24px', height: '24px'}}>
						<DarkModeIcon/>
					</Box>
					<Box>
						<img src={google_logo} alt='Google' className={classes.googleImage}/>
					</Box>
					<Box className={classes.hideIconForBigScreens}>
						<Avatar sx={{width: 24, height: 24}}>A</Avatar>
					</Box>
				</Grid>
				<Grid item xs={12} sm={6} md={6} lg={5}>
					<div className={classes.searchBar}>
						<span className={classes.searchBarName}>
							<Typography>andy yu</Typography>
						</span>
						<span className={classes.searchBarIcons}>
							<ClearIcon className={classes.clearIcon}/>
							<Mic className={classes.micIcon}/>
							<Search className={classes.searchIcon}/>
						</span>
					</div>
				</Grid>
				<Grid item sm md lg container alignItems='center' justifyContent='flex-end'>
						<Box className={classes.hideIconForSmallScreens} style={{width: '40px', height: '40px', marginRight: '30px'}}>
							<DarkModeIcon sx={{width: 40, height: 40}}/>
						</Box>
						<Box className={classes.hideIconForSmallScreens}>
							<Avatar>A</Avatar>
						</Box>
				</Grid>
			</Grid>
		</div>
  );
}

export default Navbar;