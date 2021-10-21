import React, {useState} from "react";
import AboutCard from "./components/AboutCard.js";
import AllContent from "./components/AllContent.js";
import Navbar from "./components/Navbar.js";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { allContentData } from "./resources/data/contentData.js";

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
  const [section, setSection] = useState('ALL');
  const [darkMode, setDarkMode] = useState(false)
  const classes = useStyles();
  return (
    <div style={{backgroundColor: darkMode ? '#202124' : ''}}>
      <Navbar section={section} setSection={setSection} darkMode={darkMode} setDarkMode={setDarkMode}/>
      <div className={classes.bodyWrapper}>
        <Grid container spacing={1}>
          <Grid lg={1} />
          <Grid item xs sm md lg className={classes.contentWrapper}>
            {section === 'ALL' ? 
              <div>
                {allContentData.map(({url, title, description}) => (
                  <AllContent 
                    url={url} 
                    title={title} 
                    description={description} 
                  />
                ))}
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
- add dark mode
- update to actual content 
- add a footer
*/