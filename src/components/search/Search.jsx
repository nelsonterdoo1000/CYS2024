import React, { useState } from 'react'
import SearchInput from './SearchInput'
import SearchReturns from './SearchReturns'
import SearchOptions from './filter/SearchOptions'

const Search = () => {
    const [searchInput, setSearchInput] = useState(null);
    const [filtered, setFiltered] = useState(null)

    const exportFiltered = (i) => {
        setFiltered(i)
    }

    const exportInput = (i) => {
        setSearchInput(i)
    }

    return (
        <div className='backdopProMaxSupra container-fluid  row'>
            <div className='searchContainer col-lg-6 col-md-8 col-sm-10 col-xsm-12'>
                <SearchInput exportInput={exportInput} />
                <SearchOptions exportFiltered={exportFiltered} searchInput={searchInput} />
                <SearchReturns filtered={filtered} />
            </div>
        </div>
    )
}

export default Search