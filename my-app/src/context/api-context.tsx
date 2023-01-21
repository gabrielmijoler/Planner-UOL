import React, { createContext, useState } from 'react';


export interface ICadatro {
    // firtname: string,
    // lastname: string,
    // birthdate: string,
    // country: string,
    // city: string,
    // email: string,
    // password: string,
    // confirmpassword: string,
    // setFirstaname: React.Dispatch<React.SetStateAction<string>>,
    // setLastname: React.Dispatch<React.SetStateAction<string>>,
    // setBirthdate: React.Dispatch<React.SetStateAction<string>>,
    // setCoutry: React.Dispatch<React.SetStateAction<string>>,
    // setCity: React.Dispatch<React.SetStateAction<string>>,
    // setEmail: React.Dispatch<React.SetStateAction<string>>,
    // setPassowrd: React.Dispatch<React.SetStateAction<string>>,
    // setConfirmpassword: React.Dispatch<React.SetStateAction<string>>,
    name:string,
    id: number
}

interface Props {
    children: React.ReactNode;
}



export const ApiContext = createContext<ICadatro>({
    // firtname: '',
    // lastname: '',
    // birthdate: '',
    // country: '',
    // city: '',
    // email: '',
    // password: '',
    // confirmpassword: '',
    // setFirstaname: () => { },
    // setLastname: () => { },
    // setBirthdate: () => { },
    // setCoutry: () => { },
    // setCity: () => { },
    // setEmail: () => { },
    // setPassowrd: () => { },
    // setConfirmpassword: () => { },
    name:'',
    id: 0
});

const ApiProvider: React.FC<Props> = ({ children }) => {
    const [name, setName] = useState<string>('')
    const [id, setId] = useState<number>(0)
    // const [birthdate, setBirthdate] = useState<string>('')
    // const [country, setCoutry] = useState<string>('')
    // const [city, setCity] = useState<string>('')
    // const [email, setEmail] = useState<string>('')
    // const [password, setPassowrd] = useState<string>('')
    // const [confirmpassword, setConfirmpassword] = useState<string>('')

    return (
        // <ApiContext.Provider value={{ firtname, lastname, birthdate, country, city, email, password, confirmpassword, 
        // setBirthdate, setCity, setConfirmpassword, setEmail, setCoutry, setFirstaname, setLastname, setPassowrd }}>
        <ApiContext.Provider value={{ name , id}}>
            {children}
        </ApiContext.Provider>
    );
};


export default ApiProvider;