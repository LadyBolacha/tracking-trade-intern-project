import React, { useContext, createContext } from 'react';


interface clientes {
actPlan: string,
respName: string,
status: boolean,
date: string
}

interface ContextData {
  clientes: clientes[];
}

const ClientesContext = createContext<ContextData | null>(null);

const ClientesProvider: React.FC = ({ children }) => {
    const clientes = [
        {
          actPlan:'Apple',
          respName:'Alice Capeleiro',
          status:true,
          date:'10:15 10/12/21'
        },
        {
          actPlan:'Samsung',
          respName:'Alice Capeleiro',
          status:false,
          date:'17:16 10/10/10'
        },
        {
          actPlan:'Xiaomi',
          respName:'Alice Capeleiro',
          status:false,
          date:'00:51 28/11/21'
        },
        {
          actPlan:'Cayena',
          respName:'Alexandre Capeleiro',
          status:false,
          date:'00:35 28/11/21'
        },
        {
          actPlan:'LG',
          respName:'Marília Capeleiro',
          status:true,
          date:'09:36 01/12/01'
        },
        {
          actPlan:'Motorola',
          respName:'Alexandre Capeleiro',
          status:true,
          date:'09:36 01/12/01'
        },
        {
          actPlan:'Nokia',
          respName:'Alex Capeleiro',
          status:true,
          date:'--:-- --/09/20'
        },
        {
          actPlan:'Sony Ericsson',
          respName:'Alice Capeleiro',
          status:false,
          date:'01:05 28/11/21'
        }
      ]

  return (
    <ClientesContext.Provider value={{ clientes }}>
      {children}
    </ClientesContext.Provider>
  );
};

function useClientes(): ContextData  {
  const context = useContext(ClientesContext);
  if (context){

    return context;
  }
  throw Error("Clientes não existe, ligue o servidor")
}

export { ClientesProvider, useClientes };