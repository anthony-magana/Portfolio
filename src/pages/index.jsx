import React, {useState} from 'react'
import { createTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Switch from '@material-ui/core/Switch';
import HeroSection from '../components/HeroSection';
import Header from '../components/Header';
import Projects from '../components/Projects';

export default function IndexPage() {
  const [darkMode, setDarkMode] = useState(true);
  let darkTheme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });
  darkTheme = responsiveFontSizes(darkTheme);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Header/>
      <HeroSection />
      <Projects />
      {/* <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} /> */}
    </ThemeProvider>
  )
}
