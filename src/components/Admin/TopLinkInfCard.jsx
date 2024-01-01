import React from 'react'
import theme from '../../theme'

const TopLinkInfCard = (props) => {
    const palate = theme()

    return (
        <div className="col-md-4 col-sm-6 mb-4" >
            <div className={`card border-left-${props?.color || 'danger'} animated--grow-in shadow-sm h-100 py-2 br-3`} style={{
                backgroundColor: palate.background.default,
                color: palate.neutral.light
            }}>
                <div className="card-body">
                    <div className="row no-gutters align-items-center">
                        <div className="col mr-2">
                            <div className={`text-xs font-weight-bold text-${props?.color || 'danger'} text-uppercase mb-1`}>
                                {props?.title}
                            </div>
                            <div className="h5 mb-0 font-weight-bold text-gray-600">{props?.body}</div>
                        </div>
                        <div className="col-auto">
                            {props?.icon}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default TopLinkInfCard