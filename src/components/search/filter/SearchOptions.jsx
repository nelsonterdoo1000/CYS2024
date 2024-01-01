import theme from '../../../theme';
import { useStateContext } from '../../../State/StateContext';
import React, { useState, useEffect } from 'react'

const SearchOptions = ({ searchInput, exportFiltered }) => {
    const [filterType, setFilterType] = useState('name');
    const { setSearch, programmes } = useStateContext()
    const palate = theme()

    const filterByName = () => {
        const input = searchInput
        const resProg = programmes.filter(pro => pro.name?.toLowerCase()?.indexOf(input?.toLowerCase() || null) > -1)
        return resProg
    }

    const filterByTheme = () => {
        const input = searchInput
        const resProg = programmes.filter(pro => pro.theme?.toLowerCase()?.indexOf(input?.toLowerCase() || null) > -1)
        return resProg
    }

    const handleFilter = ({ target }) => {
        const { value } = target;
        setFilterType(value)

        const result = value == 'name' ? filterByName() : filterByTheme()
        exportFiltered(result)
    }

    useEffect(() => {
        const result = filterType == 'name' ? filterByName() : filterByTheme()
        exportFiltered(result)
    }, [searchInput])

    return (
        <div className='my-3 br-3 p-2 animated--grow-in' style={{
            backgroundColor: palate.background.default,
            color: palate.neutral.light
        }}>
            <div className='col-xsm-6 d-flex'>
                <label className='my-auto'>Search by<span>:</span>
                    <select value={filterType} onChange={handleFilter}
                        className='selectPro' style={{
                            backgroundColor: palate.background.default,
                            color: palate.neutral.light
                        }} >
                        <option value='name'>
                            Title
                        </option>
                        <option value='theme'>
                            Theme
                        </option>
                    </select>
                </label>

                <div className="ml-auto">
                    <input type="button"
                        className="btn btn-danger col-xsm-3 p-1"
                        value={`Close search`}
                        onClick={() => setSearch(prev => !prev)}
                    />
                </div>
            </div>
        </div>
    )
}

export default SearchOptions