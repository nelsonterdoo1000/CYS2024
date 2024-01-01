import React from 'react'
import MoreInf from '../components/program/MoreInf'
import Actions from '../components/program/Actions'
import InfFace from '../components/program/InfFace'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useStateContext } from '../State/StateContext'

const Program = () => {
    const { programmes } = useStateContext();
    const { id } = useParams()
    const location = useLocation()
    const navigate = useNavigate()
    const theProgram = programmes.find(program => program.id == id)

    const VGA = <>
        <section className='mdl-grid' id=''>
            <div className="container-fluid" id="">
                <div className="row">
                    <InfFace props={theProgram} />
                    <MoreInf props={theProgram} />
                </div>
            </div>
        </section>

    </>

    return (theProgram ?
        VGA
        : navigate("/...", { state: { from: location }, replace: true })
    )
}

export default Program