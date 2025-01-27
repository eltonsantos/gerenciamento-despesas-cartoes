import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const PublicRoutes = () => {

  const {currentUser} = useAuth();

  //console.log(currentUser)
  
  return currentUser ? <Navigate to="/despesas" /> : <Outlet />
    
}

export default PublicRoutes;