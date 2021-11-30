import React, {useContext} from 'react';
import {useFetchData} from '../hooks/useFetch';
import {API_END_POINT} from '../utils/helper';

const AppContext = React.createContext();

const AppProvider = ({children}) => {
  const {blogs, loading, error} = useFetchData(API_END_POINT);

  return (
    <AppContext.Provider value={{blogs, loading, error}}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
export default AppProvider;
