import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './componentes/Dashboard/dashboard';

function App() {
  const Cadastro= React.lazy(() => import('./componentes/Cadastro/cadastro'));
  const Login = React.lazy(() => import('./componentes/Login/login'));
  const Dashboard = React.lazy(() => import('./componentes/Dashboard/dashboard'));
  const Loading = () => <p>Loading ...</p>;

  return (
    <React.Suspense fallback={<Loading />}>
      <Routes>
        <Route index path='/cadastro' element={<Cadastro firtname={''} lastname={''} birthdate={''} country={''} city={''} email={''} password={''} confirpassword={''} />} />
        <Route path='*' element={<h1>Not Found</h1>}/>
        <Route path='/login' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
      </Routes>
    </React.Suspense>

    // <Routes>
    //   <Route path="/cadastro" element={<Cadastro />} />
    //   <Route path="/login" element={<Login />} />
    // </Routes>
  );
}

export default App;
