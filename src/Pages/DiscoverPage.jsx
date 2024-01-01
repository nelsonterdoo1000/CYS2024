import React, { useState } from 'react'
import Article from '../components/discover/Article'
import { useStateContext } from '../State/StateContext'
import { FaCcDiscover, FaSearch, FaSearchengin } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Search from '../components/discover/Search'

const DiscoverPage = () => {
  const { setSideNavSelected } = useStateContext()
  const [isSearching, setIsSearching] = useState(false)

  React.useEffect(() => {
    setSideNavSelected('disc')
  }, [])


  return <div className='p-'>
    {/* // <!-- Page Heading --> */}
    <div className="align-items-center justify-content-between container-fluid" >
      <div className='d-flex '>
        <h1 className="fs-3 mb-3">
          Discover
        </h1>
        <div className='blog'>
          {
            isSearching && <Search className={`${isSearching && 'd-block '} sidenav shadow.sm br-3  animated--grow-in 
            searchContainer mr-auto ml-auto hasMaxHeight`}
              class={`backdopProMaxSupra text-gray-200 row container p-5 d-lg-none`}
              recentClassName={`col-md-6`} 
              optionsClassName={`col-md-6`}
              setIsSearching={setIsSearching}/>
          }
        </div>
        <div className='ml-auto '>
          <a href={`#search`} className='text-gray-700' onClick={() => setIsSearching(prev => !prev)}>
            <FaSearchengin className='h4 icon mt-2 linkPro' />
          </a>
        </div>
      </div>
    </div>

    <main id="main">


      {/* <!-- ======= Blog Section ======= --> */}
      <section id="blog" className="blog p-0">
        <div className="container-fluid" data-aos="fade-up">

          <div className="row">

            <div className="col-lg-7 col-xlg-8 entries">
              <Article />
              <Article />
              <Article />
            </div>
            {/* <!-- End blog entries list --> */}
            <Search className={`d-lg-block sidenav shadow-sm br-3 ml-sm-auto ml-md-3 animated--grow-in mr-0`} class={`pl-1 col-lg-5 col-xlg-4`} />
          </div>

        </div>
      </section>

    </main>
  </div>
}

export default DiscoverPage