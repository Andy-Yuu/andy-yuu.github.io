import React, {useState} from "react";
import AboutCard from "./components/AboutCard.js";
import AllContent from "./components/AllContent.js";
import Navbar from "./components/Navbar.js";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles(theme => ({
  bodyWrapper: {
    padding: '20px 0px',
    [theme.breakpoints.down('sm')]: {
      padding: '15px 0px',
    },
  },
	aboutWrapper: {
    order: 1,
    [theme.breakpoints.up('md')]: {
      order: 2,
    },
  },
  contentWrapper: {
    order: 2,
    [theme.breakpoints.up('md')]: {
      order: 1,
    },
    [theme.breakpoints.down('md')]: {
      paddingTop: '20px',
    },
  },
}))

function App() {
  const [section, setSection] = useState('ALL')
  const classes = useStyles();
  return (
    <div>
      <Navbar section={section} setSection={setSection}/>
      <div className={classes.bodyWrapper}>
        <Grid container spacing={1}>
          <Grid lg={1} />
          <Grid item xs sm md lg className={classes.contentWrapper}>
            {section === 'ALL' ? 
              <div>
                <AllContent 
                  url={'www.autodesk.com/plangrid/coop/andy-yu'} 
                  title={'Autodesk - Frontend Developer'} 
                  description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada erat vitae nulla tincidunt, et congue lectus ultrices. Nunc gravida sapien quis est pretium, vitae volutpat turpis iaculis. Nullam eget felis eget nunc dictum aliquam maximus eget lacus. Phasellus mi quam, sagittis sit amet nisl eu, feugiat maximus turpis. Duis non mi nisi.'} 
                />
                <AllContent 
                  url={'www.metricwire.com/coop/andy-yu'} 
                  title={'MetricWire - Fullstack JavaScript Developer'} 
                  description={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc malesuada erat vitae nulla tincidunt, et congue lectus ultrices. Nunc gravida sapien quis est pretium, vitae volutpat turpis iaculis. Nullam eget felis eget nunc dictum aliquam maximus eget lacus. Phasellus mi quam, sagittis sit amet nisl eu, feugiat maximus turpis. Duis non mi nisi.'} 
                />
              </div>
              :
              <div>
                projects section
              </div>
            }
          </Grid>
          <Grid item xs={12} sm={12} md={5} lg={6} className={classes.aboutWrapper}>
            <AboutCard/>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;

/*
NOTES:
- update photo section on about card
- add dark mode
- change avatar letters on refresh?
- add images and links to people also search for section
- update url headers in content
- update to actual content 
*/