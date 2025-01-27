import { Box } from '@mui/material';
import Topbar from './components/Topbar';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Registration from './components/Registration';
import Despesas from './components/Despesas';

export default function App() {
  return (
    <>
      <Box sx={{ display: 'flex', height: '100vh' }}>
        <Topbar />
        <Sidebar />
        <Main />
      </Box>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/" element={<Despesas />} />
      </Routes>
    </>
  );
}
