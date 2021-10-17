import { Grid, Box, Card, CardMedia, CardContent, Typography, Divider, Link } from "@mui/material";
import { makeStyles } from "@mui/styles";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import pic from '../images/pic.jpg';

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
}))

function AboutCard(props) {
	const classes = useStyles();
  return (
		<div className={classes.card}>
			<Card sx={{ maxWidth: 336 }}>
				<CardMedia 
					component='img'
					image={pic}
					alt="picture of myself!"
				/>
				<Typography variant='h5' className={classes.name}>Andy Yu</Typography>
				<Divider/>
				<CardContent>
					<Typography variant='body2' sx={{ marginBottom: '10px' }}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pulvinar felis quis eros semper porttitor. Nulla suscipit metus ut mi bibendum pharetra. Praesent neque lacus, pretium vel fermentum quis, fringilla id turpis. Fusce in dui et tortor blandit rhoncus at quis est. Aenean vel feugiat massa. Mauris vel massa non tellus condimentum blandit vitae eget nibh. Morbi aliquam semper libero, in molestie est vestibulum in. Quisque pulvinar dapibus turpis ut suscipit.
					</Typography>
					<Typography variant='body2' sx={{ marginBottom: '10px' }}>Born: October 88, 2000, Toronto, Canada</Typography>
					<Typography variant='body2' sx={{ marginBottom: '10px' }}>Height: 1.75 m</Typography>
					<Typography variant='body2' sx={{ marginBottom: '10px' }}>Education: Computer Engineering, University of Waterloo</Typography>
					<Typography variant='subtitle1'>Profiles</Typography>
					<Grid container>
						<Box className={classes.profileIcons}>
							<Link href='https://github.com/andy-yuu' underline='hover'>
								<GitHubIcon style={{color: 'black'}}/>
								<Typography variant='body2'>GitHub</Typography>
							</Link>
						</Box>
						<Box className={classes.profileIcons}>
							<Link href='https://www.linkedin.com/in/andy-yuu/' underline='hover'>
								<LinkedInIcon style={{color: '#0072b1'}}/>
								<Typography variant='body2'>LinkedIn</Typography>
							</Link>
						</Box>
					</Grid>
					<Typography variant='subtitle1'>People also search for</Typography>
					<Grid container>
						<Box className={classes.profileIcons}>
							<Link href='' underline='hover'>
								<GitHubIcon style={{color: 'black'}}/>
								<Typography variant='body2'>Sunny</Typography>
							</Link>
						</Box>
						<Box className={classes.profileIcons}>
							<Link href='' underline='hover'>
								<GitHubIcon style={{color: 'black'}}/>
								<Typography variant='body2'>Jimmy</Typography>
							</Link>
						</Box>
						<Box className={classes.profileIcons}>
							<Link href='' underline='hover'>
								<GitHubIcon style={{color: 'black'}}/>
								<Typography variant='body2'>Steven</Typography>
							</Link>
						</Box>
						<Box className={classes.profileIcons}>
							<Link href='' underline='hover'>
								<GitHubIcon style={{color: 'black'}}/>
								<Typography variant='body2'>Richie</Typography>
							</Link>
						</Box>
						<Box className={classes.profileIcons}>
							<Link href='' underline='hover'>
								<GitHubIcon style={{color: 'black'}}/>
								<Typography variant='body2'>Michael</Typography>
							</Link>
						</Box>
						<Box className={classes.profileIcons}>
							<Link href='' underline='hover'>
								<GitHubIcon style={{color: 'black'}}/>
								<Typography variant='body2'>Eddie</Typography>
							</Link>
						</Box>
						<Box className={classes.profileIcons}>
							<Link href='' underline='hover'>
								<GitHubIcon style={{color: 'black'}}/>
								<Typography variant='body2'>Simon</Typography>
							</Link>
						</Box>
						<Box className={classes.profileIcons}>
							<Link href='' underline='hover'>
								<GitHubIcon style={{color: 'black'}}/>
								<Typography variant='body2'>Benny</Typography>
							</Link>
						</Box>
					</Grid>
				</CardContent>
			</Card>
		</div>
  );
}

export default AboutCard;