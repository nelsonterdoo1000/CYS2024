import React from 'react'
import ProgramCard from './programCard'

const ProgramCardManager = (props) => {
    // const { programs } = programsSchema
    return (
        <>
            {
                props.programs.map((program, i) => (
                    <ProgramCard key={i} program={program} className={props?.className}/>
                ))
            }
        </>
    )
}

export default ProgramCardManager