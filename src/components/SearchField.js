import React, { useContext, useState } from "react";
import { ImageContext } from "../App";

const SearchField = () => {

    const [searchValue, setSearchValue] = useState('');
    const {fetchData, setSearchImage} = useContext(ImageContext);
    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    }
    const handleButtonSearch = () => {
        fetchData(`search/photos?page=1&query=${searchValue}&client_id=7DyjTV7KkalC7yN3gslBg8DwUm08nDz6TxZt1pekdmU`)
        setSearchValue('');
        setSearchImage(searchValue);
    }
    const handleEnter = (e) => {
        if(e.key === 'Enter') {
            fetchData(`search/photos?page=1&query=${searchValue}&client_id=7DyjTV7KkalC7yN3gslBg8DwUm08nDz6TxZt1pekdmU`)
            setSearchValue('');
            setSearchImage(searchValue);
        }
    }

  return (
    <div className="flex">
      <input
        type="search"
        placeholder="Search Anything..."
        className="bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl"
        onChange={handleInputChange}
        onKeyDown={handleEnter}
        value={searchValue}
      />
      <button
        className="bg-blue-500 px-6 py-2.5 text-white rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400"
        onClick={handleButtonSearch}
        disabled={!searchValue}
      >
        Search
      </button>
    </div>
  );
};

export default SearchField;
