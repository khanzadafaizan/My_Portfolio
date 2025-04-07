import './App.css';
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './pages/About';
import Work from './pages/Work';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Header from './componenet/Header';
import { ThemeProvider } from './theme-context';
import Profile from './componenet/Profile';
import Footer from './componenet/Footer';
function App() {
  return (
   <>
   <ThemeProvider>
   <Header/>
   <Profile/>
   <About/>
   <Work/>
   <Resume/>
   <Contact/>
   <Footer/>
   </ThemeProvider>
      {/* <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element={<Profile/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/work' element={<Work/>}/>
    <Route path='/resume' element={<Resume/>}/>
    <Route path='/contact' element={<Contact/>}/>
   </Routes>
   </BrowserRouter> */}
   </>
  );
}

export default App;
