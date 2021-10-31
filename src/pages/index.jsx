import React from 'react'
import { createTheme, ThemeProvider, responsiveFontSizes } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import HeroSection from '../components/HeroSection';
import Header from '../components/Header';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

export default function IndexPage() {
  let darkTheme = createTheme({
    palette: {
      type: 'dark',
    },
  });
  darkTheme = responsiveFontSizes(darkTheme);
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <Header/>
      <HeroSection />
      <Projects />
      <Footer />
    </ThemeProvider>
  )
}
