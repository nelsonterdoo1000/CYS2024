import useDateParser from '../../hooks/useDateParser';
import React from 'react'
import { Link } from 'react-router-dom'
import theme from '../../theme';

const programCard = (props) => {
    const palate = theme()
    const { program } = props
    const { id, flyer, name, start_datetime, end_datetime } = program;

    return (
        <div className={` ${props?.className || 'col-lg-6'}`}>
            <div>
                <Link to={`/program/${id}`}
                    className="member d-flex align-items-start cardEl my-2 noDec  animated--grow-in" style={{
                        backgroundColor: palate.background.default,
                        color: palate.neutral.light
                    }}>
                    <div className="pic my-auto">
                        <img src={`${flyer}`} className="img-fluid" alt="" />
                    </div>
                    <div className="member-info" style={{
                        color: palate.neutral.main
                    }}>
                        <h5 className='h4' style={{
                            fontWeight: '600',
                            color: palate.neutral.light
                        }}>{name}</h5>
                        <span>{program.theme}</span>
                        {
                            `${useDateParser(start_datetime)} to ${useDateParser(end_datetime)}`
                        }
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default programCard