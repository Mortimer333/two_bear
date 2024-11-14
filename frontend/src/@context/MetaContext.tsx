import React from 'react'

export interface IMetaContext {
  setMeta: (meta: React.ReactNode) => void
}

export const MetaContext = React.createContext<IMetaContext|undefined>(undefined);

interface IMetaContextProps {
  children: React.ReactNode,
  setMeta: (meta: React.ReactNode) => void

}

export const MetaProvider: React.FC<IMetaContextProps> = (
  {
    children,
    setMeta
  }
) => {
  return <MetaContext.Provider value={{ setMeta }}>{children}</MetaContext.Provider>
};

export const useMetaManageContext = (): IMetaContext => {
  const context = React.useContext(MetaContext);
  if (!context) {
    throw new Error('useMetaManageContext must be used within a MetaProvider');
  }
  return context;
};
