import { Grid, Avatar, Box, Button, Typography, Link, IconButton } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ClearIcon from '@mui/icons-material/Clear';
import Search from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

const useStyles = (darkMode) => makeStyles(theme => ({
	header: {
		borderBottom: darkMode ? "1px solid #3c4043" : "1px solid #dfe1e5",
		[theme.breakpoints.up('sm')]: {
      padding: '25px 30px 0px 30px',
    },
		[theme.breakpoints.down('sm')]: {
      padding: '25px 15px 0px 15px',
    },
	},
 	googleImage: {
		filter: darkMode ? 'invert(1%) sepia(1%) saturate(1%) hue-rotate(1deg) brightness(1000%) contrast(80%)' : '',
		cursor: 'pointer',
		display: 'block',
		marginLeft: 'auto',
		marginRight: 'auto',
		width: '100%',
		maxWidth: '92px',
		height: 'auto',
	},
	searchBar: {
		backgroundColor: darkMode ? '#303134' : '',
    padding: '10px 0px',
    boxShadow: darkMode ? '' : '0 2px 5px 1px lightgray',
    border: '0px',
    borderRadius: '24px',
    width: '100%',
    outline: 'none',
    height: 'auto',
		'&:hover': {
			boxShadow: darkMode ? '' : '0 2px 5px 3px lightgray',
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
		width: '34px'
	},
	micIcon: {
		paddingRight: "10px",
	},
	searchIcon: {
		color: "#4285f4",
		marginRight: "15px",
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
	},
	darkModeLGScreen: {
		width: '40px', 
		height: '40px', 
		marginRight: '30px',
	},
}))

function Navbar(props) {
	const { section, setSection, darkMode, setDarkMode } = props;
	const classes = useStyles(darkMode)();
  return (
		<div className={classes.header}>
			<Grid container spacing={1}>
				<Grid item xs={12} sm={2} md={1} lg={1} container justifyContent='space-between' alignItems='center'>
					<IconButton color="inherit" className={classes.hideIconForBigScreens} style={{width: '24px', height: '24px'}} onClick={() => setDarkMode(!darkMode)}>
						{darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
					</IconButton>
					<Box>
						<img src="resources/images/Google_2015_logo.png" alt='Google' className={classes.googleImage}/>
					</Box>
					<Box className={classes.hideIconForBigScreens}>
						<Avatar sx={{width: 24, height: 24, bgcolor: ("#" + ((1<<24)*Math.random() | 0).toString(16))}}>{Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 1).toUpperCase()}</Avatar>
					</Box>
				</Grid>
				<Grid item xs={12} sm={6} md={6} lg={5}>
					<div className={classes.searchBar}>
						<span className={classes.searchBarName}>
							andy yu
						</span>
						<span className={classes.searchBarIcons}>
							<ClearIcon className={classes.clearIcon}/>
							<img src="resources/images/Google_mic.png" alt='Microphone' className={classes.micIcon}/>
							<Search className={classes.searchIcon}/>
						</span>
					</div>
				</Grid>
				<Grid item sm md lg container alignItems='center' justifyContent='flex-end' className={classes.hideIconForSmallScreens}>
						<IconButton color="inherit" className={classes.darkModeLGScreen} onClick={() => setDarkMode(!darkMode)}>
							{darkMode ? <Brightness7Icon sx={{width: 40, height: 40}}/> : <Brightness4Icon sx={{width: 40, height: 40}}/>}
						</IconButton>
						<Box>
							<Avatar sx={{bgcolor: ("#" + ((1<<24)*Math.random() | 0).toString(16))}}>{Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 1).toUpperCase()}</Avatar>
						</Box>
				</Grid>
			</Grid>
			<Grid container spacing={1}>
				<Grid item sm md lg />
				<Grid item xs={12} sm={10} md={11} lg={11} container spacing={2}>
					<Grid item>
						<Button className={classes.subsectionBtn} startIcon={<img src="resources/images/Google_search.png" alt='All'/>} style={{borderBottom: section === 'ALL' ? '3px solid #1a73e8' : ''}} onClick={() => setSection('ALL')}>
							<Typography variant="body2">All</Typography>
						</Button>
					</Grid>
					<Grid item>
						<Button className={classes.subsectionBtn} startIcon={<img src="resources/images/Google_drive.png" alt='Projects'/>} style={{borderBottom: section === 'PROJECTS' ? '3px solid #1a73e8' : ''}} onClick={() => setSection('PROJECTS')}>
							<Typography variant="body2">Projects</Typography>
						</Button>
					</Grid>
					<Grid item>
						<Link href="https://andy-yuu.github.io/resources/Andy-Yu-Resume.pdf" target="_blank" underline="none">
							<Button className={classes.subsectionBtn} startIcon={<img src="resources/images/Google_doc.png" alt='Search'/>}>
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