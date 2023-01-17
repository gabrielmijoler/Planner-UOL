import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';

function App() {
  const Cadastro= React.lazy(() => import('./componentes/Cadastro/cadastro'));
  const Login = React.lazy(() => import('./componentes/Login/login'));
  // const Settings = React.lazy(() => import('./components/Settings'));
  const Loading = () => <p>Loading ...</p>;

  return (
    <React.Suspense fallback={<Loading />}>
      <Routes>
        <Route path='*' element={<h1>Not Found</h1>} />
        <Route path='/cadastro' element={<Cadastro/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </React.Suspense>

    // <Routes>
    //   <Route path="/cadastro" element={<Cadastro />} />
    //   <Route path="/login" element={<Login />} />
    // </Routes>
  );
}

export default App;
