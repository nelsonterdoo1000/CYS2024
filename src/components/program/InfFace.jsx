import React from 'react';
import { FaPlug, FaRegIdBadge } from 'react-icons/fa'

import Actions from './Actions'
import useDateParser from '../../hooks/useDateParser';
import { whenWillI, isItOnGoing } from '../../hooks/timeSpaces';
import { Link } from 'react-router-dom';
import theme from '../../theme';

const InfFace = (properties) => {
    const palate = theme()
    const props = properties?.props
    const useDate = useDateParser;

    return (
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
                            <Link to={`/explore/program_registerself/${props?.id}`}>
                                <button type="button" className="btn btn-danger d-block" >
                                    <FaRegIdBadge className='icon mr-1' />Register
                                </button>
                            </Link>
                            <Link>
                                <button type="button"
                                    className="btn btn-outline-danger ms-1"  >
                                    <FaPlug /> Join
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Actions />
        </div>
    )
}

export default InfFace