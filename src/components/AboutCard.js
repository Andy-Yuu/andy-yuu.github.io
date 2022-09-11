import { Grid, Box, Card, CardMedia, CardContent, Typography, Divider, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import { peopleData } from '../resources/data/contentData';

const useStyles = makeStyles(theme => ({
	card: {
		[theme.breakpoints.down('md')]: {
			display: 'flex', 
			justifyContent:'center',
		},
		[theme.breakpoints.up('lg')]: {
			marginLeft: '60px',
		},
	},
	name: {
		padding: '16px',
	},
	profileIcons: {
		marginTop: '4px', 
		width: '72px', 
		height: '60px', 
		textAlign: 'center'
	},
	personIcons: {
		margin: '4px 4px 0 0', 
		width: '72px', 
		height: 'auto', 
		textAlign: 'center',
	},
	personImg: {
		borderRadius: '8px'
	}
}))

function AboutCard(props) {
	const classes = useStyles();
  return (
		<div className={classes.card}>
			<Card sx={{ maxWidth: 336 }}>
				<CardMedia 
					component='img'
					image="resources/images/pic.jpg"
					alt="picture of myself!"
				/>
				<Typography variant='h5' className={classes.name}>Andy Yu</Typography>
				<Divider/>
				<CardContent>
					<Typography variant='body2' sx={{ marginBottom: '10px' }}>
						Andy Yu is a third year computer engineering student at the University of Waterloo, based in Toronto. He focuses his work on web development to bring the best experience to the user. Recently finished an internship at Splunk, he is seeking summer 2023 internship opportunities!
					</Typography>
					<Typography variant='body2' sx={{ marginBottom: '10px' }}>Born: October 31, 2000, Toronto, Canada</Typography>
					<Typography variant='body2' sx={{ marginBottom: '10px' }}>Height: 1.75 m</Typography>
					<Typography variant='body2' sx={{ marginBottom: '10px' }}>Education: Computer Engineering, University of Waterloo</Typography>
					<Typography variant='body2' sx={{ marginBottom: '10px' }}>Chinese Zodiac Sign: &#128009;</Typography>
					<Typography variant='subtitle1'>Profiles</Typography>
					<Grid container>
						<Box className={classes.profileIcons}>
							<Link href='https://github.com/andy-yuu' target="_blank" underline='hover'>
								<GitHubIcon style={{color: 'black'}}/>
								<Typography variant='body2'>GitHub</Typography>
							</Link>
						</Box>
						<Box className={classes.profileIcons}>
							<Link href='https://www.linkedin.com/in/andy-yuu/' target="_blank" underline='hover'>
								<LinkedInIcon style={{color: '#0072b1'}}/>
								<Typography variant='body2'>LinkedIn</Typography>
							</Link>
						</Box>
					</Grid>
					<Typography variant='subtitle1'>People also search for</Typography>
					<Grid container>
						{peopleData.map(({name, link, img}, index) => (
							<Box className={classes.personIcons} key={index}>
								<Link href={link} target="_blank" underline='hover'>
									<img src={img} alt='personImg' style={{borderRadius: '8px'}}/>
									<Typography variant='body2'>{name}</Typography>
								</Link>
							</Box>
						))}
					</Grid>
				</CardContent>
			</Card>
		</div>
  );
}

export default AboutCard;