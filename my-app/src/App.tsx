import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import ApiProvider, { ApiContext } from './context/api-context';

interface Props{
  children: any
}

function App() {
  const Cadastro= React.lazy(() => import('./componentes/Cadastro'));
  const Login = React.lazy(() => import('./componentes/Login'));
  const Dashboard = React.lazy(() => import('./componentes/Dashboard'));
  const Loading = () => <p>Loading ...</p>;
  
  const Private: React.FC <Props> = ({children}) => {
    const { signed } = useContext(ApiContext)
      if(!signed){
          return(<Navigate to="/login"/>)
      }
      return children;
    }
 
  return (
    <React.Suspense fallback={<Loading />}>
      <ApiProvider>
        <Routes>
          <Route path='*' element={<Cadastro />}/>
          <Route path='/cadastro' element={<Cadastro />}/>
          <Route path='/login' element={<Login/>} />
          <Route path='/dashboard' element={<Private><Dashboard/></Private>} />
        </Routes>
      </ApiProvider>
    </React.Suspense>
  );
}

export default App;
