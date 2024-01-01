import React, { useEffect } from 'react';
import { FaRegIdBadge } from 'react-icons/fa'

import useDateParser from '../../hooks/useDateParser';
import { whenWillI, isItOnGoing } from '../../hooks/timeSpaces';
import { Link, useParams } from 'react-router-dom';
import theme from '../../theme';
import { useStateContext } from '../../State/StateContext';

const InfFace = () => {
    const palate = theme()
    const { programmes, setTitle } = useStateContext();
    const { id } = useParams()
    const props = programmes.find(program => program.id == id)
    const useDate = useDateParser;

    useEffect(() => {
        setTitle(props?.name || '404')
    }, [])


    return (
        <section className='pt-3' id=''>
            <div className="container-fluid pt-2" id="">
                <div className='row'>
                    <div className="col-lg-5">
                        <div className="card mb-4 animated--grow-in shadow-sm  br-3 " style={{
                            backgroundColor: palate.background.default,
                            color: palate.neutral.light
                        }}>
                            <div className="card-body row p-0">

                                <img src={props?.flyer} alt="flyer" className="img-fluid d-flex col-sm-12" />

                                <div className='col-sm-6 p-4'>
                                    <h5 className="mb-3 h5">{props?.name}</h5>
                                    <span className="m-0 p-0">
                                        {
                                            isItOnGoing(props) ? <>
                                                <span className='beaconRedGlowInLine'></span>{`Live`}
                                            </> :
                                                `${whenWillI(props)}`
                                        }
                                    </span>
                                    <p className="mb-1 ">{props?.theme}</p>
                                    <p style={{
                                        backgroundColor: palate.background.default,
                                        color: palate.neutral.main
                                    }}>{useDate(props?.start_datetime)} to {useDate(props?.end_datetime)} </p>
                                    <div className="d-flex">
                                        <Link to={`/program_register/${props?.id}`} className='noDec'>
                                            <button type="button" className="btn btn-danger d-block" >
                                                <FaRegIdBadge className='icon mr-1' />Register
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-7'>
                        <div className="card p-0 animated--grow-in shadow-sm br-3" style={{
                            backgroundColor: palate.background.default,
                            color: palate.neutral.light
                        }}>
                            <div className='card-header h5 d-flex' style={{
                                backgroundColor: palate.background.default,
                                color: palate.neutral.light
                            }}>
                                Read more
                                <hr className='m-0 p-0' style={{ opacity: '0.3' }} />
                                <div className='h-link rounded-circle'>

                                </div>
                            </div>
                            <div className="card-body">
                                {props?.description}
                            </div>
                        </div>

                    </div >

                </div>
            </div>
        </section>
    )
}

export default InfFace