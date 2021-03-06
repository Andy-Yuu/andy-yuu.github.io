import React, {useState} from "react";
import { createTheme, ThemeProvider, CssBaseline } from '@mui/material';
import AboutCard from "./components/AboutCard.js";
import AllContent from "./components/AllContent.js";
import Navbar from "./components/Navbar.js";
import Footer from "./components/Footer.js";
import { Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { allContentData, projectContentData } from "./resources/data/contentData.js";

const useStyles = makeStyles(theme => ({
  app: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
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

function App(props) {
  const [section, setSection] = useState('ALL');
  const [darkMode, setDarkMode] = useState(false)
  const classes = useStyles();
  const { outtertheme } = props;
  return (
    <ThemeProvider theme={createTheme({
      ...outtertheme,
      palette: {
        mode: darkMode ? "dark" : "light",
      }
    })}>
      <div className={classes.app}>
        <CssBaseline />
        <Navbar section={section} setSection={setSection} darkMode={darkMode} setDarkMode={setDarkMode}/>
        <div className={classes.bodyWrapper}>
          <Grid container spacing={1}>
            <Grid item={true} lg={1} />
            <Grid item xs sm md lg className={classes.contentWrapper}>
              {section === 'ALL' ? 
                <div>
                  {allContentData.map(({url, title, description}, index) => (
                    <AllContent 
                      url={url} 
                      title={title} 
                      description={description} 
                      darkMode={darkMode}
                      key={index}
                    />
                  ))}
                </div>
                :
                <div>
                  {projectContentData.map(({url, title, description, link}, index) => (
                    <AllContent 
                      link={link}
                      url={url} 
                      title={title} 
                      description={description} 
                      darkMode={darkMode}
                      key={index}
                    />
                  ))}
                </div>
              }
            </Grid>
            <Grid item xs={12} sm={12} md={5} lg={6} className={classes.aboutWrapper}>
              {section === 'ALL' ? <AboutCard/> : undefined}
            </Grid>
          </Grid>
        </div>
      </div>
      <Footer darkMode={darkMode}/>
    </ThemeProvider>
  );
}

export default App;