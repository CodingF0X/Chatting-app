import './App.css';
import { Box, Typography } from '@mui/material'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import ChatPage from './pages/ChatPage';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
function App() {
  return (
    <Box className="app">
      <BrowserRouter>
        <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>} />
        <Route path='/chats' element={<ChatPage/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/signin' element={<SignIn/>}/>

      </Routes>
      </BrowserRouter>
    </Box>
  );
}

export default App;
