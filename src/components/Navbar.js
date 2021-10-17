import { Grid, Avatar, Box, Button, Typography, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ClearIcon from '@mui/icons-material/Clear';
import Search from '@mui/icons-material/Search';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import google_logo from "../images/Google_2015_logo.png";
import google_mic from "../images/Google_mic.png";
import google_search from "../images/Google_search.png";
import google_news from "../images/Google_news.png";
import google_book from "../images/Google_book.png";
import resume from "../images/AndyYu_Resume_2021.pdf";

const useStyles = makeStyles(theme => ({
	header: {
		borderBottom: "1px solid #dfe1e5",
		[theme.breakpoints.up('sm')]: {
      padding: '25px 30px 0px 30px',
    },
		[theme.breakpoints.down('sm')]: {
      padding: '25px 15px 0px 15px',
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
		},
		[theme.breakpoints.down('sm')]: {
			...useStyles.searchBar,
      marginTop: '10px',
    },
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
		marginRight: "10px",
		paddingRight: "10px",
	},
	micIcon: {
		paddingRight: "10px",
		width: '24px',
		height: '24px',
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
	subsectionBtn: {
		marginTop: '5px',
		borderRadius: '0',
		textTransform: 'none',
		'&:hover': {
			background: 'none',
		},
	}
}))

function Navbar(props) {
	const classes = useStyles();
	const { section, setSection } = props;
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
							andy yu
						</span>
						<span className={classes.searchBarIcons}>
							<ClearIcon className={classes.clearIcon}/>
							<img src={google_mic} alt='Microphone' className={classes.micIcon}/>
							<Search className={classes.searchIcon}/>
						</span>
					</div>
				</Grid>
				<Grid item sm md lg container alignItems='center' justifyContent='flex-end' className={classes.hideIconForSmallScreens}>
						<Box style={{width: '40px', height: '40px', marginRight: '30px'}}>
							<DarkModeIcon sx={{width: 40, height: 40}}/>
						</Box>
						<Box>
							<Avatar>A</Avatar>
						</Box>
				</Grid>
			</Grid>
			<Grid container spacing={1}>
				<Grid sm md lg />
				<Grid item xs={12} sm={10} md={11} lg={11} container spacing={2}>
					<Grid item>
						<Button className={classes.subsectionBtn} startIcon={<img src={google_search} alt='All'/>} style={{borderBottom: section === 'ALL' ? '3px solid #1a73e8' : ''}} onClick={() => setSection('ALL')}>
							<Typography variant="body2">All</Typography>
						</Button>
					</Grid>
					<Grid item>
						<Button className={classes.subsectionBtn} startIcon={<img src={google_news} alt='Projects'/>} style={{borderBottom: section === 'PROJECTS' ? '3px solid #1a73e8' : ''}} onClick={() => setSection('PROJECTS')}>
							<Typography variant="body2">Projects</Typography>
						</Button>
					</Grid>
					<Grid item>
						<Link href={resume} target="_blank" underline="none">
							<Button className={classes.subsectionBtn} startIcon={<img src={google_book} alt='Search'/>}>
									<Typography variant="body2">Resume</Typography>
							</Button>
						</Link>
					</Grid>
				</Grid>
			</Grid>
		</div>
  );
}

export default Navbar;