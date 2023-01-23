import React, { createContext, useState } from 'react';


export interface IContext {
    id: boolean
}

interface Props {
    children: React.ReactNode;
}




export const ApiContext = createContext<IContext>({
    id: false
});

const ApiProvider: React.FC<Props> = ({ children }) => {
    const [id, setId] = useState<boolean>(false)


    return (
        <ApiContext.Provider value={{id}}>
            {children}
        </ApiContext.Provider>
    );
};


export default ApiProvider;