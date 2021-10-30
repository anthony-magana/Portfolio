import React, {useState} from 'react'
import { createTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Switch from '@material-ui/core/Switch';
import HeroSection from '../components/HeroSection';

export default function IndexPage() {
  const [darkMode, setDarkMode] = useState(true);
  const darkTheme = createTheme({
    palette: {
      type: darkMode ? 'dark' : 'light',
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <HeroSection />
      {/* <Switch checked={darkMode} onChange={() => setDarkMode(!darkMode)} /> */}
    </ThemeProvider>
  )
}
