import React, { createContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { isToken } from 'typescript';
import instance from '../api';


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

    // const getitem = JSON.parse(localStorage.getItem('objt') as string)
    // const getFullName = JSON.parse(localStorage.getItem('Fullname') as string)
    
    useEffect(() => {
        if (localStorage.getItem('token')){
            navigate('/dashboard')
        }
    }, []); 

    
    const Login = async (username: string, password: string) => {
        try{
            const response = await instance.post('users/sign-in', {
                "email": `${username}`,
                "password": `${password}`
            })
            console.log('response data:', response.data)
            console.log('response status:', response.status)
            console.log('response headers:', response.headers)
            navigate('/dashboard')
            const token = response.data.token;
            localStorage.setItem('token', token);
            setUser(response.data.user.token)
            }catch(error: any) {
                console.log('error data:', error.response.data)
                console.log('error status:', error.response.status)
                console.log('error headers:', error.response.headers)
            }
        // if ((password === getitem.password) && (username === getitem.email ||getFullName === username)) {
        //     navigate('/dashboard')
        // }
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