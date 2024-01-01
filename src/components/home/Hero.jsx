import React from 'react'
// import { Link } from 'react-router-dom'

const Hero = () => {
    return (
        <section id="hero">
            <img src="/assets/img/slide/slide-2.jpg"
                className='img-fluid slideInUp'
                alt=""
                onDragStart={() => {
                    const msg = window.confirm('Do not capture our Hero Banner')
                    !msg && !window.confirm('Confirm You will not capture the banner image again')
                        && alert('Do not capture banner image again again')
                }} />
            <div className="hero">
            </div>
        </section>
    )
}

export default Hero