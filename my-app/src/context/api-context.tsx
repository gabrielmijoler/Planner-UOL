import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import instance from '../api';


interface IContext {
    signed: boolean;
    user: object | null;
    errorMessage: {
        message: string;
        type: string;
    };
    Logout: () => void;
    Login: (username: string, password: string, { errorMessage }: { errorMessage: { message: string, type: string } }) => Promise<string>;
}

interface Props {
    children: React.ReactNode;
}

export const ApiContext = createContext<IContext>({
    signed: false,
    user: {},
    errorMessage: { message: '', type: '' },
    Logout: () => {},
    Login: async () => '',
});


export const ApiProvider: React.FC<Props> = ({ children }) => {
    let navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [errorMessage, setErrorMessage] = useState({ message: '', type: '' });
  
    const handleErrorMessage = (message: string, type: string) => {
      setErrorMessage({ message, type });
    };
  
    const Login = async (username: string, password: string, { errorMessage }: { errorMessage?: { message: string, type: string } }) => {
      try {
        const response = await instance.post('users/sign-in', {
          "email": `${username}`,
          "password": `${password}`
        });
  
        if (response.data.token) {
          handleErrorMessage("Usuário cadastrado com sucesso", 'success');
          setTimeout(() => {
            navigate("/dashboard");
          }, 1500);
        }
  
        const token = response.data.token;
        localStorage.setItem('token', token);
        localStorage.setItem("logUser", JSON.stringify(response.data.user));
        setUser(response.data.user.token);
  
        return response.data.token;
      } catch (err: any) {
        handleErrorMessage(err?.response?.data?.message ?? "Usuário ou senha inválida", 'error');
        console.log('error data:', err.response.data);
        console.log('error status:', err.response.status);
        console.log('error headers:', err.response.headers);
      }
    };
    
    const Logout = () => {
        setUser(null);
        localStorage.removeItem('token')
        navigate('/login')
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            setTimeout(() => {
                navigate("/dashboard");
              }, 1500);
        }
    }, [user]);

    return (
        <ApiContext.Provider value={{ signed: Boolean(user), user, errorMessage, Logout, Login }}>
            {children}
        </ApiContext.Provider>
    );
};


export default ApiProvider;

// interface IContext {
//   signed: boolean;
//   user: object | null;
//   errorMessage?: {
//     message: string;
//     type: string;
//   };
//   Logout: () => void;
//   Login: (username: string, password: string, { errorMessage, setErrorMessage }: { errorMessage?: { message: string, type: string }, setErrorMessage: React.Dispatch<React.SetStateAction<{ message: string, type: string }>> }) => Promise<string>;
// }


// export const ApiContext = createContext<IContext>({
//   signed: false,
//   user: null,
//   errorMessage: { message: '', type: '' },
//   Logout: () => {},
//   Login: async () => '',
// });

// export const ApiProvider: React.FC<Props> = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [errorMessage, setErrorMessage] = useState({ message: '', type: '' });

//   const handleErrorMessage = (message: string, type: string) => {
//     setErrorMessage({ message, type });
//   };

//   const Logout = () => {
//     localStorage.clear();
//     setUser(null);
//   };

//   const Login = async (username: string, password: string, { errorMessage, setErrorMessage }: { errorMessage?: { message: string, type: string }, setErrorMessage: React.Dispatch<React.SetStateAction<{ message: string, type: string }>> }) => {
//     try {
//       const response = await instance.post('users/sign-in', {
//         "email": `${username}`,
//         "password": `${password}`
//       });

//       if (response.data.token) {
//         handleErrorMessage("Usuário cadastrado com sucesso", 'success');
//         setTimeout(() => {
//           navigator("/dashboard");
//         }, 1500);
//       }

//       const token = response.data.token;
//       localStorage.setItem('token', token);
//       localStorage.setItem("logUser", JSON.stringify(response.data.user));
//       setUser(response.data.user.token);

//       return response.data.token;
//     } catch (err: any) {
//       handleErrorMessage(err?.response?.data?.message ?? err?.response?.data ?? "Usuário ou senha inválida", 'error');
//       console.log('error data:', err.response.data);
//       console.log('error status:', err.response.status);
//       console.log('error headers:', err.response.headers);
//     }
//   };

//   return (
//     <ApiContext.Provider value={{ signed: Boolean(user), user, errorMessage, Logout, Login }}>
//       {children}
//     </ApiContext.Provider>
//   );
// };