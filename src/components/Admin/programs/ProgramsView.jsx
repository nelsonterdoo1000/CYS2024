import { useState } from 'react'

import MoreInf from './MoreInf'
import Actions from './Actions'
import InfFace from './InfFace'

import { useAuthContext } from '../../../State/AuthContext'
import api from '../../../../api/api'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

const ProgramsView = () => {
    const { programmes } = useAuthContext();
    const { id } = useParams()
    const [theProgram, setTheProgram] = useState(programmes.find(program => program.id == id))

    useEffect(() => {
        api.get(`/program/get-attendees`)
            .then(res => {
                setTheProgram(prev => ({ ...prev, attendees: res.data?.data }))
            }).catch(err => {
                console?.error(`ERROR: ${err}`)
                setTheProgram(prev => ({
                    ...prev, attendees: []
                }))
            })
    }, [])

    return (
        <>
            <section className='mdl-grid' id=''>
                <div className="container-fluid" id="">
                    <div className="row">
                        <InfFace props={theProgram} />
                        <MoreInf props={theProgram} setTheProgram={setTheProgram} />
                    </div>
                </div>
            </section>

        </>
    )
}

export default ProgramsView