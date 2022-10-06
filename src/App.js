import { createContext, useState } from 'react';
import './App.css';
import Background from './components/Background';
import Images from './components/Images';
import SearchField from './components/SearchField';
import useAxios from './hooks/useAxios';

//create context

export const ImageContext = createContext();


function App() {
  const [searchImage, setSearchImage] = useState('');
  const {response, isLoading, error, fetchData} = useAxios('search/photos?page=1&query=furniture&client_id=7DyjTV7KkalC7yN3gslBg8DwUm08nDz6TxZt1pekdmU');

  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage,
  }
  //console.log(response);
  return (
   <ImageContext.Provider value={value}>
    <Background>
      <SearchField/>
    </Background>
    <Images/>
   </ImageContext.Provider>
  );
}

export default App;
