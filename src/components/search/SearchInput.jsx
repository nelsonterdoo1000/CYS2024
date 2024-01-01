import React, { useState } from 'react';
import theme from '../../theme';

const SearchInput = ({ exportInput }) => {
    const [searchInput, setSearchInput] = useState('');
    const palate=theme()
    const handleInput = ({ target }) => {
        const { value } = target;
        setSearchInput(value);
        exportInput(value)
    }

    return (
        <div>
            <input type="search"
                className='input form-control form-control-user shadow-sm  animated--grow-in slideInDown'
                autoFocus
                autoComplete='true'
                placeholder='Search'
                value={searchInput}
                onChange={handleInput} style={{
                    backgroundColor: palate.background.default,
                    color: palate.neutral.light
                }}/>
        </div>
    )
}

export default SearchInput