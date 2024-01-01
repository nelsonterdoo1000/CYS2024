import React from 'react'
import { FaChevronUp, FaSearch, FaTimes } from 'react-icons/fa'
import theme from '../../theme'

const Search = (props) => {
    const palate = theme()

    return (
        <div className={` ${props?.class}`}>

            <div className={`d-none ${props?.className} animated-grow-in`} id='search' style={{
                backgroundColor: palate.background.default,
                color: palate.neutral.light
            }}>
                <div id="top"></div>
                <div className="d-flex">
                    <h3 className="">Search</h3>
                    {props?.recentClassName &&
                        <div className="noOutline ml-auto p-0 mb-auto t-3 ">
                            <div className='card' onClick={() => props?.setIsSearching(false)}>
                                <FaTimes />
                            </div>
                        </div>
                    }
                </div>
                <div className="sidenav-item noOutline br-3" >
                    <form onSubmit={e => e.preventDefault()} className='row no-gutters'>
                        <input type="search" className='input noOutline m-0 br-3 form-control col-10 col-sm-10 col-md-11 pr-2' autoFocus style={{
                            backgroundColor: palate.background.default,
                            color: palate.neutral.light,
                            border: `1px solid`
                        }} />
                        <button type="submit" className='noOutline btn-danger col-2 col-sm-1 col-md-1 pl'
                            style={{
                                position: `relative`,
                                right: `5px`
                            }}><FaSearch /></button>
                    </form>
                </div>
                {/* <!-- End sidenav search formn--> */}


                <div className='row'>
                    {/* side nav tags */}
                    <div className={`sidenav- tags ${props?.optionsClassName}`}>
                        <h3 className="mb-3">Categories</h3>
                        <ul>
                            <li><a href="#">App</a></li>
                            <li><a href="#">IT</a></li>
                            <li><a href="#">Business</a></li>
                            <li><a href="#">Mac</a></li>
                            <li><a href="#">Design</a></li>
                            <li><a href="#">Office</a></li>
                            <li><a href="#">Creative</a></li>
                            <li><a href="#">Studio</a></li>
                            <li><a href="#">Smart</a></li>
                            <li><a href="#">Tips</a></li>
                            <li><a href="#">Marketing</a></li>
                        </ul>
                    </div>


                    {/* <!-- End sidenav recent posts--> */}
                    <div className='d-flex'>
                    </div>
                </div>
            </div>
            {/* <!-- End sidenav --> */}
        </div>
    )
}

export default Search