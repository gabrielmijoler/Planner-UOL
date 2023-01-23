import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export interface IContext {
    signed: boolean
    user: object | null;
    Login(username:string, password: string): void;
    Logout(): void;

}

interface Props {
    children: React.ReactNode;
}


export const ApiContext = createContext<IContext>({
    signed: false,
    user: {},
    Login(){},
    Logout(){},
});


const ApiProvider: React.FC<Props> = ({ children }) => {
    let navigate = useNavigate();
    const [user, setUser] = useState<object | null>(null);

    const getitem = JSON.parse(localStorage.getItem('objt') as string)
    const getFullName = JSON.parse(localStorage.getItem('Fullname') as string)

    useEffect(() => {
        if (localStorage.getItem('token')){
            setUser(getitem);
        }
    }, []); 

    
    function Login(username: string, password: string){

        if ((password === getitem.password) && (username === getitem.email ||getFullName === username)) {
            setUser(getitem)
            localStorage.setItem('token', 'logado');
            navigate('/dashboard')
        }
    }


    function Logout() {
        setUser(null);
        localStorage.removeItem('token')
        navigate('/login')
    }

    return (
        <ApiContext.Provider value={{ signed:Boolean(user), user ,Logout, Login}}>
            {children}
        </ApiContext.Provider>
    );
};


export default ApiProvider;
