import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import ApiProvider, { ApiContext } from './context/api-context';

interface Props{
  children: any
}

function App() {
  const Cadastro= React.lazy(() => import('./container/Cadastro'));
  const Login = React.lazy(() => import('./container/Login'));
  const Dashboard = React.lazy(() => import('./container/Dashboard'));
  const Loading = () => <p>Loading ...</p>;
  
  const Private: React.FC <Props> = ({children}) => {
    const { signed } = useContext(ApiContext)
      if(!signed){
        console.log('antes',signed)
          return(<Navigate to="/login"/>)
      }
      return children;
    }
 
  return (
    <React.Suspense fallback={<Loading />}>
      <ApiProvider>
        <Routes>
          <Route path='/*' element={<Navigate to="/cadastro"/>}/>
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/login' element={<Login/>} />
          <Route path='/dashboard/*' element={<Private><Dashboard/></Private>} /> 
        </Routes>
      </ApiProvider>
    </React.Suspense>
  );
}

export default App;
