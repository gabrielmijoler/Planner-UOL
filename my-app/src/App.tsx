import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Dashboard from './componentes/Dashboard';

function App() {
  const Cadastro= React.lazy(() => import('./componentes/Cadastro'));
  const Login = React.lazy(() => import('./componentes/Login'));
  const Dashboard = React.lazy(() => import('./componentes/Dashboard'));
  const Loading = () => <p>Loading ...</p>;

  return (
    <React.Suspense fallback={<Loading />}>
      <Routes>
        <Route path='*' element={<Cadastro firtname={''} lastname={''} birthdate={''} country={''} city={''} email={''} password={''} confirpassword={''} />}/>
        <Route path='/cadastro' element={<Cadastro firtname={''} lastname={''} birthdate={''} country={''} city={''} email={''} password={''} confirpassword={''} />}/>
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
