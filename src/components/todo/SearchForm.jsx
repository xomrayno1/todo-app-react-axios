import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

SearchForm.propTypes = {
    handleFilterSearchName: PropTypes.func
};
SearchForm.defaultProps = {
    handleFilterSearchName : null
}
function SearchForm(props) {
    const {handleFilterSearchName} = props;
    const [searchValue, setSearchValue] = useState('');
    const typingTimeoufRef = useRef(null);
    function handleOnchangeSearchValue(e){
        let search  = e.target.value;
        setSearchValue(search);
        if(!handleFilterSearchName) return;
         
        if(typingTimeoufRef.current){
            clearTimeout(typingTimeoufRef.current);
        }
        typingTimeoufRef.current = setTimeout( () => {
            const formsSearch = {
                value : e.target.value
            }
            handleFilterSearchName(formsSearch)
        },300);
        
    }
     
    return (
        <div>
            <input 
                    onChange={handleOnchangeSearchValue}
                    value={searchValue}
                    type='text'
                    className="form-control" 
                    placeholder="Search....."/> 
        </div>
    );
}

export default SearchForm;